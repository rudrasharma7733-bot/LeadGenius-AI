import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-flash-lite-latest';

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Helper: Check if Gemini API key is configured
function isApiKeyConfigured() {
  const key = process.env.GEMINI_API_KEY;
  return Boolean(key && key.trim() !== '' && !key.includes('YOUR_GEMINI_API_KEY'));
}

// Helper: Initialize GenAI client safely
function getGenAIClient() {
  if (!isApiKeyConfigured()) {
    throw new Error('GEMINI_API_KEY is not configured on the server. Please set your key in the .env file.');
  }
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

// ==============================================================
// 1. HEALTH / CONFIGURATION ENDPOINT
// ==============================================================
app.get('/api/gemini/health', (req, res) => {
  const configured = isApiKeyConfigured();
  return res.json({
    status: 'ok',
    geminiConfigured: configured,
    model: GEMINI_MODEL,
    message: configured
      ? 'Google Gemini AI backend connected and ready.'
      : 'GEMINI_API_KEY missing or placeholder. Please update .env.'
  });
});

// ==============================================================
// 2. LEAD INTELLIGENCE: ANALYZE LEAD
// ==============================================================
app.post('/api/gemini/analyze-lead', async (req, res) => {
  try {
    const { lead } = req.body;
    if (!lead || !lead.name || !lead.company) {
      return res.status(400).json({ error: 'Valid lead data is required.' });
    }

    const ai = getGenAIClient();

    const prompt = `You are the LeadGenius AI Lead Scoring & Qualification Engine.
Analyze this B2B prospect based on their profile, firmographics, intent signals, tech stack, and recent activity.

Prospect Profile:
- Name: ${lead.name}
- Title: ${lead.title}
- Company: ${lead.company}
- Industry: ${lead.industry}
- Employees: ${lead.employees}
- Funding Stage: ${lead.funding || 'Unknown'}
- Estimated Revenue: ${lead.enrichedData?.estimatedRevenue || 'Unknown'}
- Detected Tech Stack: ${Array.isArray(lead.enrichedData?.techStack) ? lead.enrichedData.techStack.join(', ') : 'None'}
- Recent Trigger Event: ${lead.enrichedData?.recentTrigger || 'None'}
- Intent Signals: ${Array.isArray(lead.intentSignals) ? lead.intentSignals.join('; ') : 'None'}
- Last Recorded Activity: ${lead.lastActivity || 'None'}

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
  "reasoning": "concise explanation (2-3 sentences)",
  "keyFactors": ["factor 1", "factor 2", "factor 3"],
  "recommendedNextAction": "actionable next step for sales rep"
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '';
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      // Clean markdown code blocks if necessary
      const cleaned = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(cleaned);
    }

    return res.json({
      success: true,
      leadId: lead.id,
      analysis: parsedData,
      model: GEMINI_MODEL,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error analyzing lead with Gemini:', error.message);
    const isKeyError = error.message.includes('GEMINI_API_KEY');
    return res.status(isKeyError ? 401 : 500).json({
      error: error.message || 'Failed to analyze lead with Gemini AI.',
      isKeyError
    });
  }
});

// ==============================================================
// 3. EMAIL STUDIO: GENERATE PERSONALIZED EMAIL
// ==============================================================
app.post('/api/gemini/generate-email', async (req, res) => {
  try {
    const { lead, tone = 'ROI-Focused', goal = 'Initial Cold Touch', customPrompt = '', senderName = 'Rudra Pratap', senderTitle = 'Head of Revenue Growth' } = req.body;

    if (!lead || !lead.name || !lead.company) {
      return res.status(400).json({ error: 'Valid lead data is required.' });
    }

    const ai = getGenAIClient();

    const prompt = `You are the LeadGenius AI Cold Outreach & Follow-up Copywriter.
Draft a hyper-personalized B2B email tailored to the prospect.

Prospect Details:
- Name: ${lead.name}
- Title: ${lead.title}
- Company: ${lead.company}
- Industry: ${lead.industry}
- Funding / Stage: ${lead.funding || 'Unknown'}
- Recent Trigger: ${lead.enrichedData?.recentTrigger || 'None'}
- Intent Signals: ${Array.isArray(lead.intentSignals) ? lead.intentSignals.join(', ') : 'None'}
- Tech Stack: ${Array.isArray(lead.enrichedData?.techStack) ? lead.enrichedData.techStack.join(', ') : 'None'}

Email Parameters:
- Desired Tone: ${tone} (Options: ROI-Focused, Executive & Concise, Casual & Conversational, Teaser)
- Outreach Goal: ${goal}
- Sender: ${senderName}, ${senderTitle}
${customPrompt ? `- Specific Instructions: ${customPrompt}` : ''}

GUIDELINES:
- Keep the email concise (between 60 and 120 words).
- Hook the prospect using their actual company trigger or intent signal in the first two sentences.
- Avoid generic spam buzzwords (e.g., "synergy", "paradigm shift", "just checking in").
- Include a low-friction, soft call-to-action (e.g., 5-7 minute open question).
- Generate a compelling, curiosity-driven subject line.

Format your response as strictly valid JSON:
{
  "subject": "Compelling subject line",
  "body": "Email body copy including greeting and sign-off",
  "hooksUsed": ["Primary trigger used", "Value prop cited"]
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '';
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      const cleaned = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(cleaned);
    }

    return res.json({
      success: true,
      leadId: lead.id,
      email: parsedData,
      model: GEMINI_MODEL,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error generating email with Gemini:', error.message);
    const isKeyError = error.message.includes('GEMINI_API_KEY');
    return res.status(isKeyError ? 401 : 500).json({
      error: error.message || 'Failed to generate email with Gemini AI.',
      isKeyError
    });
  }
});

// ==============================================================
// 4. AI SALES COPILOT: CHAT WITH REAL PIPELINE & LEAD DATA
// ==============================================================
app.post('/api/gemini/copilot', async (req, res) => {
  try {
    const { message, context = {} } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    const ai = getGenAIClient();

    const { leads = [], pipelineDeals = [], metrics = {} } = context;

    // Compact summary of leads and pipeline
    const leadsSummary = leads.slice(0, 10).map(l =>
      `- ${l.name} (${l.title} @ ${l.company}): Score ${l.score}, Status ${l.status}, Deal $${l.dealSize}, Trigger: "${l.enrichedData?.recentTrigger || l.intentSignals?.[0] || 'N/A'}"`
    ).join('\n');

    const pipelineSummary = pipelineDeals.slice(0, 10).map(d =>
      `- ${d.company} (${d.name}): Stage "${d.stage}", Value $${d.amount}, Win Prob ${d.probability}%`
    ).join('\n');

    const prompt = `You are the LeadGenius AI Sales Copilot, an elite strategic advisor embedded into the LeadGenius AI revenue platform.
You assist the Head of Growth (Rudra Pratap) and account executives by providing deal-closing playbooks, handling competitor objections, evaluating pipeline health, and drafting follow-up strategies.

LIVE APPLICATION PIPELINE CONTEXT:
Active High-Priority Leads in System:
${leadsSummary || 'None loaded'}

Active Deals in Pipeline:
${pipelineSummary || 'None loaded'}

Platform KPI Metrics:
- Total Leads: ${metrics.totalLeads || 4892}
- Qualified Leads: ${metrics.qualifiedLeads || 1845}
- Hot Leads: ${metrics.hotLeads || 342}
- Conversion Rate: ${metrics.conversionRate || '8.7%'}

USER QUESTION / PROMPT:
"${message}"

INSTRUCTIONS:
- Directly answer using the actual leads, companies, and deals from the live context when relevant.
- When asked about objections, provide structured battlecard steps (Acknowledge, Soft Pivot, Proof Point, Call to Action).
- When asked about a specific prospect, cite their real signals, tech stack, and deal stage from the context.
- Keep the response structured, clear, and actionable with markdown formatting (bullet points, bold text).`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt
    });

    return res.json({
      success: true,
      reply: response.text || 'No response generated.',
      model: GEMINI_MODEL,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in Sales Copilot with Gemini:', error.message);
    const isKeyError = error.message.includes('GEMINI_API_KEY');
    return res.status(isKeyError ? 401 : 500).json({
      error: error.message || 'Failed to query Sales Copilot.',
      isKeyError
    });
  }
});

// ==============================================================
// 5. FOLLOW-UP CENTER: GENERATE STRATEGIC FOLLOW-UP
// ==============================================================
app.post('/api/gemini/follow-up', async (req, res) => {
  try {
    const { followUp, lead } = req.body;
    if (!followUp || !followUp.name) {
      return res.status(400).json({ error: 'Valid follow-up task is required.' });
    }

    const ai = getGenAIClient();

    const prompt = `You are the LeadGenius AI Follow-up & Cadence Optimization Engine.
Formulate an intelligent follow-up recommendation and draft touchpoint for this prospect.

Prospect & Task:
- Prospect: ${followUp.name}
- Company: ${followUp.company}
- Current Cadence Step: ${followUp.step || 'Step 2'}
- Suggested Channel: ${followUp.channel || 'Email'}
- Priority: ${followUp.priority || 'High'}
- Prior Context / Signal: ${followUp.angle || lead?.lastActivity || 'Proposal viewed'}
- Recent Lead Trigger: ${lead?.enrichedData?.recentTrigger || 'Funding or hiring surge'}
- Lead Score: ${lead?.score || 90}

TASKS:
1. Formulate the single best psychological angle to maximize reply rate.
2. Draft the exact message to send across the chosen channel (${followUp.channel || 'Email'}). Keep it under 80 words.
3. Recommend the optimal channel and send timing.

Format as strictly valid JSON:
{
  "suggestedAngle": "Strategic reason for this touchpoint",
  "draftMessage": "Exact copy ready to send",
  "recommendedChannel": "${followUp.channel || 'Email'}",
  "optimalTiming": "e.g., Tuesday 9:15 AM EST (Peak executive email window)"
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '';
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      const cleaned = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(cleaned);
    }

    return res.json({
      success: true,
      followUpId: followUp.id,
      recommendation: parsedData,
      model: GEMINI_MODEL,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error generating follow-up with Gemini:', error.message);
    const isKeyError = error.message.includes('GEMINI_API_KEY');
    return res.status(isKeyError ? 401 : 500).json({
      error: error.message || 'Failed to generate follow-up recommendation.',
      isKeyError
    });
  }
});

// Serve frontend static files
app.use(express.static(__dirname));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n==========================================================`);
  console.log(`  LeadGenius AI - Google Gemini AI Backend Active`);
  console.log(`==========================================================`);
  console.log(`  URL: http://localhost:${PORT}`);
  console.log(`  Gemini Model: ${GEMINI_MODEL}`);
  console.log(`  API Key Configured: ${isApiKeyConfigured() ? 'YES (Secure)' : 'NO (.env needed)'}`);
  console.log(`==========================================================\n`);
});
