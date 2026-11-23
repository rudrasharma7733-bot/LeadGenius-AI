# LeadGenius AI - Native Zero-Dependency HTTP & Google Gemini AI API Server
param(
    [int]$Port = 3000
)

$currentDir = $PSScriptRoot
if (-not $currentDir) { $currentDir = Get-Location }

# Enable TLS 1.2 / 1.3 for outbound Google Gemini HTTPS calls
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

# 1. Load Environment Variables from .env file if present
$envFile = Join-Path $currentDir ".env"
if (Test-Path $envFile) {
    Get-Content $envFile | ForEach-Object {
        $line = $_.Trim()
        if ($line -and -not $line.StartsWith("#") -and $line.Contains("=")) {
            $parts = $line.Split("=", 2)
            $k = $parts[0].Trim()
            $v = $parts[1].Trim().Trim('"').Trim("'")
            if (-not [string]::IsNullOrEmpty($k)) {
                [System.Environment]::SetEnvironmentVariable($k, $v, "Process")
            }
        }
    }
}

function Get-GeminiKey {
    $k = [System.Environment]::GetEnvironmentVariable("GEMINI_API_KEY", "Process")
    if (-not $k) { $k = $env:GEMINI_API_KEY }
    if ($k -and $k.Trim() -ne "" -and -not $k.Contains("YOUR_GEMINI_API_KEY")) {
        return $k.Trim()
    }
    return $null
}

function Get-GeminiModel {
    $m = [System.Environment]::GetEnvironmentVariable("GEMINI_MODEL", "Process")
    if (-not $m) { $m = "gemini-flash-lite-latest" }
    return $m
}

function Get-MimeType($path) {
    $ext = [System.IO.Path]::GetExtension($path).ToLower()
    switch ($ext) {
        ".html" { return "text/html; charset=utf-8" }
        ".htm"  { return "text/html; charset=utf-8" }
        ".js"   { return "application/javascript; charset=utf-8" }
        ".mjs"  { return "application/javascript; charset=utf-8" }
        ".ts"   { return "application/javascript; charset=utf-8" }
        ".tsx"  { return "application/javascript; charset=utf-8" }
        ".css"  { return "text/css; charset=utf-8" }
        ".json" { return "application/json; charset=utf-8" }
        ".svg"  { return "image/svg+xml" }
        ".png"  { return "image/png" }
        ".jpg"  { return "image/jpeg" }
        ".jpeg" { return "image/jpeg" }
        ".ico"  { return "image/x-icon" }
        default { return "application/octet-stream" }
    }
}

# Function to call Google Gemini REST API server-side
function Invoke-GeminiGenerate($prompt, $jsonMode = $false) {
    $key = Get-GeminiKey
    if (-not $key) {
        throw "GEMINI_API_KEY is not configured on the server. Please set your key in .env file."
    }
    $model = Get-GeminiModel
    $apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=$key"

    $reqBodyObj = @{
        contents = @(
            @{
                parts = @(
                    @{ text = $prompt }
                )
            }
        )
    }

    if ($jsonMode) {
        $reqBodyObj.generationConfig = @{
            responseMimeType = "application/json"
        }
    }

    $jsonPayload = $reqBodyObj | ConvertTo-Json -Depth 10
    $resp = Invoke-RestMethod -Uri $apiUrl -Method Post -Body $jsonPayload -ContentType "application/json" -TimeoutSec 40

    if ($resp.candidates -and $resp.candidates.Count -gt 0) {
        $part = $resp.candidates[0].content.parts[0]
        return $part.text
    }
    return ""
}

# Find open port
$boundPort = $Port
$listener = $null

for ($i = 0; $i -lt 15; $i++) {
    try {
        $testPort = $Port + $i
        $t = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $testPort)
        $t.Start()
        $listener = $t
        $boundPort = $testPort
        break
    } catch {
        if ($t) { $t.Stop() }
    }
}

if (-not $listener) {
    Write-Error "Could not bind to port starting at $Port"
    exit 1
}

$url = "http://localhost:$boundPort/"
$hasKey = [bool](Get-GeminiKey)
Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   LeadGenius AI - Google Gemini AI Backend Server" -ForegroundColor Magenta
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  URL: $url" -ForegroundColor Green
Write-Host "  Gemini Model: $(Get-GeminiModel)" -ForegroundColor Gray
if ($hasKey) {
    Write-Host "  API Key Configured: YES (Loaded securely from .env)" -ForegroundColor Green
} else {
    Write-Host "  API Key Configured: NO (.env file with GEMINI_API_KEY needed)" -ForegroundColor Yellow
}
Write-Host "  Serving files from: $currentDir" -ForegroundColor Gray
Write-Host "  Press Ctrl+C in this console to stop." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

try {
    Start-Process $url -ErrorAction SilentlyContinue

    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        $writer = New-Object System.IO.BinaryWriter($stream)

        $requestLine = $reader.ReadLine()
        if (-not [string]::IsNullOrEmpty($requestLine)) {
            $parts = $requestLine.Split(" ")
            if ($parts.Length -ge 2) {
                $method = $parts[0]
                $rawUrl = $parts[1].Split("?")[0]

                # Read HTTP headers to determine Content-Length
                $contentLength = 0
                while ($true) {
                    $headerLine = $reader.ReadLine()
                    if ([string]::IsNullOrEmpty($headerLine)) { break }
                    if ($headerLine.ToLower().StartsWith("content-length:")) {
                        $contentLength = [int]($headerLine.Split(":")[1].Trim())
                    }
                }

                # Read request body if present
                $bodyString = ""
                if ($contentLength -gt 0) {
                    $buffer = New-Object char[] $contentLength
                    $readTotal = 0
                    while ($readTotal -lt $contentLength) {
                        $n = $reader.Read($buffer, $readTotal, ($contentLength - $readTotal))
                        if ($n -le 0) { break }
                        $readTotal += $n
                    }
                    $bodyString = New-Object string ($buffer, 0, $readTotal)
                }

                # Helper to write JSON response
                $sendJson = {
                    param($statusCode, $statusText, $dataObj)
                    $jsonBytes = [System.Text.Encoding]::UTF8.GetBytes(($dataObj | ConvertTo-Json -Depth 10))
                    $h = "HTTP/1.1 $statusCode $statusText`r`nContent-Type: application/json; charset=utf-8`r`nContent-Length: $($jsonBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nAccess-Control-Allow-Methods: GET, POST, OPTIONS`r`nAccess-Control-Allow-Headers: Content-Type`r`nConnection: close`r`n`r`n"
                    $writer.Write([System.Text.Encoding]::UTF8.GetBytes($h))
                    $writer.Write($jsonBytes)
                }

                # Handle OPTIONS preflight
                if ($method -eq "OPTIONS") {
                    $h = "HTTP/1.1 204 No Content`r`nAccess-Control-Allow-Origin: *`r`nAccess-Control-Allow-Methods: GET, POST, OPTIONS`r`nAccess-Control-Allow-Headers: Content-Type`r`nConnection: close`r`n`r`n"
                    $writer.Write([System.Text.Encoding]::UTF8.GetBytes($h))
                }
                # GET /api/gemini/health
                elseif ($rawUrl -eq "/api/gemini/health") {
                    $keyOk = [bool](Get-GeminiKey)
                    & $sendJson 200 "OK" @{
                        status = "ok"
                        geminiConfigured = $keyOk
                        model = Get-GeminiModel
                        message = if ($keyOk) { "Gemini API connected." } else { "GEMINI_API_KEY missing or placeholder in .env" }
                    }
                }
                # POST /api/gemini/analyze-lead
                elseif ($rawUrl -eq "/api/gemini/analyze-lead" -and $method -eq "POST") {
                    try {
                        $body = $bodyString | ConvertFrom-Json
                        $lead = $body.lead
                        $techs = if ($lead.enrichedData.techStack) { $lead.enrichedData.techStack -join ", " } else { "None" }
                        $signals = if ($lead.intentSignals) { $lead.intentSignals -join "; " } else { "None" }

                        $p = @"
You are the LeadGenius AI Lead Scoring & Qualification Engine.
Analyze this B2B prospect based on their profile, firmographics, intent signals, tech stack, and recent activity.

Prospect Profile:
- Name: $($lead.name)
- Title: $($lead.title)
- Company: $($lead.company)
- Industry: $($lead.industry)
- Employees: $($lead.employees)
- Funding Stage: $($lead.funding)
- Estimated Revenue: $($lead.enrichedData.estimatedRevenue)
- Detected Tech Stack: $techs
- Recent Trigger Event: $($lead.enrichedData.recentTrigger)
- Intent Signals: $signals
- Last Recorded Activity: $($lead.lastActivity)

TASKS:
1. Assign a predictive Lead Quality Score from 0 to 100.
2. Classify into category: "Hot" (85-100), "Warm" (70-84), or "Cold" (<70).
3. Provide a clear, strategic executive reasoning explaining why this score was assigned.
4. Identify 3 key driving factors.
5. Recommend the single highest-impact Next Best Action for the sales rep.

Format your response as strictly valid JSON matching this schema:
{
  "score": number,
  "category": "Hot" | "Warm" | "Cold",
  "reasoning": "concise explanation",
  "keyFactors": ["factor 1", "factor 2", "factor 3"],
  "recommendedNextAction": "actionable next step"
}
"@
                        $aiResult = Invoke-GeminiGenerate -prompt $p -jsonMode $true
                        $parsed = $aiResult | ConvertFrom-Json
                        & $sendJson 200 "OK" @{
                            success = $true
                            leadId = $lead.id
                            analysis = $parsed
                            model = Get-GeminiModel
                        }
                    } catch {
                        $isKey = $_.Exception.Message -match "GEMINI_API_KEY"
                        & $sendJson 400 "Bad Request" @{
                            error = $_.Exception.Message
                            isKeyError = $isKey
                        }
                    }
                }
                # POST /api/gemini/generate-email
                elseif ($rawUrl -eq "/api/gemini/generate-email" -and $method -eq "POST") {
                    try {
                        $body = $bodyString | ConvertFrom-Json
                        $lead = $body.lead
                        $tone = if ($body.tone) { $body.tone } else { "ROI-Focused" }
                        $goal = if ($body.goal) { $body.goal } else { "Initial Cold Touch" }
                        $customPrompt = $body.customPrompt
                        $techs = if ($lead.enrichedData.techStack) { $lead.enrichedData.techStack -join ", " } else { "None" }
                        $signals = if ($lead.intentSignals) { $lead.intentSignals -join "; " } else { "None" }

                        $p = @"
You are the LeadGenius AI Cold Outreach & Follow-up Copywriter.
Draft a hyper-personalized B2B email tailored to the prospect.

Prospect Details:
- Name: $($lead.name)
- Title: $($lead.title)
- Company: $($lead.company)
- Industry: $($lead.industry)
- Funding / Stage: $($lead.funding)
- Recent Trigger: $($lead.enrichedData.recentTrigger)
- Intent Signals: $signals
- Tech Stack: $techs

Email Parameters:
- Desired Tone: $tone
- Outreach Goal: $goal
- Sender: Rudra Pratap, Head of Revenue Growth
$(if ($customPrompt) { "- Specific Instructions: $customPrompt" } else { "" })

GUIDELINES:
- Keep the email concise (between 60 and 120 words).
- Hook the prospect using their actual company trigger or intent signal in the first two sentences.
- Avoid generic spam buzzwords (e.g. "synergy", "just checking in").
- Include a low-friction, soft call-to-action (5-7 minute open question).
- Generate a compelling, curiosity-driven subject line.

Format your response as strictly valid JSON:
{
  "subject": "Compelling subject line",
  "body": "Email body copy including greeting and sign-off",
  "hooksUsed": ["Primary trigger used", "Value prop cited"]
}
"@
                        $aiResult = Invoke-GeminiGenerate -prompt $p -jsonMode $true
                        $parsed = $aiResult | ConvertFrom-Json
                        & $sendJson 200 "OK" @{
                            success = $true
                            leadId = $lead.id
                            email = $parsed
                            model = Get-GeminiModel
                        }
                    } catch {
                        $isKey = $_.Exception.Message -match "GEMINI_API_KEY"
                        & $sendJson 400 "Bad Request" @{
                            error = $_.Exception.Message
                            isKeyError = $isKey
                        }
                    }
                }
                # POST /api/gemini/copilot
                elseif ($rawUrl -eq "/api/gemini/copilot" -and $method -eq "POST") {
                    try {
                        $body = $bodyString | ConvertFrom-Json
                        $msg = $body.message
                        $ctx = $body.context

                        $leadsSummary = ""
                        if ($ctx.leads) {
                            $leadsSummary = ($ctx.leads | Select-Object -First 10 | ForEach-Object {
                                "- $($_.name) ($($_.title) @ $($_.company)): Score $($_.score), Status $($_.status), Deal `$$($_.dealSize), Trigger: `"$($_.enrichedData.recentTrigger)`""
                            }) -join "`n"
                        }

                        $pipeSummary = ""
                        if ($ctx.pipelineDeals) {
                            $pipeSummary = ($ctx.pipelineDeals | Select-Object -First 10 | ForEach-Object {
                                "- $($_.company) ($($_.name)): Stage `"$($_.stage)`", Value `$$($_.amount), Win Prob $($_.probability)%"
                            }) -join "`n"
                        }

                        $p = @"
You are the LeadGenius AI Sales Copilot, an elite strategic advisor embedded into the LeadGenius AI revenue platform.
You assist the Head of Growth (Rudra Pratap) and account executives by providing deal-closing playbooks, handling competitor objections, evaluating pipeline health, and drafting follow-up strategies.

LIVE APPLICATION PIPELINE CONTEXT:
Active High-Priority Leads in System:
$leadsSummary

Active Deals in Pipeline:
$pipeSummary

USER QUESTION / PROMPT:
"$msg"

INSTRUCTIONS:
- Directly answer using the actual leads, companies, and deals from the live context when relevant.
- When asked about objections, provide structured battlecard steps (Acknowledge, Soft Pivot, Proof Point, Call to Action).
- When asked about a specific prospect, cite their real signals, tech stack, and deal stage from the context.
- Keep the response structured, clear, and actionable with markdown formatting.
"@
                        $aiResult = Invoke-GeminiGenerate -prompt $p -jsonMode $false
                        & $sendJson 200 "OK" @{
                            success = $true
                            reply = $aiResult
                            model = Get-GeminiModel
                        }
                    } catch {
                        $isKey = $_.Exception.Message -match "GEMINI_API_KEY"
                        & $sendJson 400 "Bad Request" @{
                            error = $_.Exception.Message
                            isKeyError = $isKey
                        }
                    }
                }
                # POST /api/gemini/follow-up
                elseif ($rawUrl -eq "/api/gemini/follow-up" -and $method -eq "POST") {
                    try {
                        $body = $bodyString | ConvertFrom-Json
                        $fu = $body.followUp
                        $lead = $body.lead

                        $p = @"
You are the LeadGenius AI Follow-up & Cadence Optimization Engine.
Formulate an intelligent follow-up recommendation and draft touchpoint for this prospect.

Prospect & Task:
- Prospect: $($fu.name)
- Company: $($fu.company)
- Current Cadence Step: $($fu.step)
- Suggested Channel: $($fu.channel)
- Priority: $($fu.priority)
- Prior Context / Signal: $($fu.angle)
- Recent Lead Trigger: $($lead.enrichedData.recentTrigger)
- Lead Score: $($lead.score)

TASKS:
1. Formulate the single best psychological angle to maximize reply rate.
2. Draft the exact message to send across the chosen channel ($($fu.channel)). Keep it under 80 words.
3. Recommend the optimal channel and send timing.

Format as strictly valid JSON:
{
  "suggestedAngle": "Strategic reason for this touchpoint",
  "draftMessage": "Exact copy ready to send",
  "recommendedChannel": "$($fu.channel)",
  "optimalTiming": "e.g., Tuesday 9:15 AM EST"
}
"@
                        $aiResult = Invoke-GeminiGenerate -prompt $p -jsonMode $true
                        $parsed = $aiResult | ConvertFrom-Json
                        & $sendJson 200 "OK" @{
                            success = $true
                            followUpId = $fu.id
                            recommendation = $parsed
                            model = Get-GeminiModel
                        }
                    } catch {
                        $isKey = $_.Exception.Message -match "GEMINI_API_KEY"
                        & $sendJson 400 "Bad Request" @{
                            error = $_.Exception.Message
                            isKeyError = $isKey
                        }
                    }
                }
                # Static File Serving
                else {
                    if ($rawUrl -eq "/" -or [string]::IsNullOrEmpty($rawUrl)) {
                        $rawUrl = "/index.html"
                    }

                    $filePath = Join-Path $currentDir ($rawUrl.TrimStart('/'))

                    if (Test-Path $filePath -PathType Leaf) {
                        $bytes = [System.IO.File]::ReadAllBytes($filePath)
                        $mime = Get-MimeType $filePath
                        $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $writer.Write($headerBytes)
                        $writer.Write($bytes)
                    } else {
                        $msg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>File not found: $rawUrl</p>")
                        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/html`r`nContent-Length: $($msg.Length)`r`nConnection: close`r`n`r`n"
                        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $writer.Write($headerBytes)
                        $writer.Write($msg)
                    }
                }
            }
        }

        $writer.Flush()
        $client.Close()
    }
}
finally {
    if ($listener) {
        $listener.Stop()
    }
}
