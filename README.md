# LeadGenius AI – Autonomous AI Lead Generation & Follow-up Platform
## Powered by Google Gemini AI (`gemini-2.5-flash`)

> **"Turn Every Lead Into Your Next Customer."**  
> A commercial-grade, multi-agent AI SaaS platform engineered for modern B2B revenue teams, revenue operations leaders, and high-velocity SDR teams.

---

## 🔑 Google Gemini AI Integration & Setup

Your API key is kept strictly **server-side** and is **never** sent to the client browser, logs, or Git.

### Where to Enter Your Gemini API Key:
1. In the root of the `LeadGenius-AI` project folder, look for the file named `.env`.
   - If `.env` does not exist yet, duplicate `.env.example` and rename it to `.env`.
2. Open `.env` in any text editor and replace the placeholder:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=3000
   GEMINI_MODEL=gemini-2.5-flash
   ```
3. Save the file.
4. Restart your backend server (run `serve.bat` or `npm start`).
5. In the top bar of the application, the badge will switch to:  
   `✨ Gemini 2.5 Flash Connected` (green indicator).

> **Important Security Notice:**  
> The `.env` file is excluded in `.gitignore`. Never share, commit, or paste your API key into chats or public code repositories.

---

## 🤖 Integrated Gemini AI Features

| Feature | Gemini Endpoint | Real AI Functionality |
| :--- | :--- | :--- |
| **AI Lead Intelligence** | `POST /api/gemini/analyze-lead` | Evaluates 50+ lead attributes, generates a 0–100 quality score, classifies as Hot/Warm/Cold, provides executive reasoning, 3 driving key factors, and a recommended next action. |
| **AI Email Studio** | `POST /api/gemini/generate-email` | Crafts hyper-personalized business outreach citing the lead's actual trigger events, company funding, and tech stack according to chosen tone & objective. |
| **AI Sales Copilot** | `POST /api/gemini/copilot` | Real-time chat assistant grounded in the live leads (*Sarah Jenkins, Marcus Vance, etc.*), pipeline deals, and metrics. Provides battlecards, objection handling, and deal advice. |
| **Follow-up Center** | `POST /api/gemini/follow-up` | Formulates the psychological angle, generates the draft message, and recommends the optimal channel and send timing. |

---

## 🌟 Product Design Vision & Aesthetics

Inspired by the design excellence of **Linear**, **Stripe**, and **HubSpot Enterprise**:
- **Palette**: Deep navy backgrounds (`#030712`, `#060B18`, `#0F172A`) paired with electric purple/violet (`#8B5CF6`, `#7C3AED`) and neon cyan (`#00F5FF`, `#06B6D4`) highlights.
- **Glassmorphism**: Premium frosted-glass cards (`backdrop-blur-md`, subtle 1px border lighting, hover elevations).
- **Subtle Gradient Lighting**: Ambient radial glow meshes and smooth transitions.
- **Typography**: Clean, professional sans-serif hierarchy powered by **Plus Jakarta Sans** and **JetBrains Mono**.

---

## 🚀 Key Modules & Architecture

### Part 1: Landing Page
1. **Premium Navigation Bar**: Glowing brand logo badge, navigation links, and seamless toggle between "Landing Page" and "App Dashboard".
2. **Hero Section**:
   - Headline: *"Turn Every Lead Into Your Next Customer."*
   - Subtitle & dual CTAs: *"Explore Live Dashboard"* & *"Calculate Projected ROI"*.
   - Live social proof ticker: Trusted by 2,400+ GTM teams (Stripeflow, NexusCloud, Retool, Ramp, etc.).
3. **Animated AI Dashboard Preview**: Interactive preview with live metric tickers, real-time lead score badges, and action triggers.
4. **Features Section (6 Premium Cards)**:
   - Real-Time AI Enrichment (50+ data signals)
   - Predictive Intent & Buying Signals
   - Multichannel Smart Sequences (Email, LinkedIn, Loom)
   - AI Sales Copilot with battlecards
   - Visual Sales Pipeline & Forecasting
   - Enterprise 2-Way CRM Integrations
5. **How It Works (4-Step Flow)**:
   - Step 1: Discover & Ingest Leads
   - Step 2: Multi-Factor Scoring (0-100)
   - Step 3: Autonomous Hyper-Personalized Outreach
   - Step 4: Intelligent Follow-ups & Close
6. **Visual Automation Workflow**: Interactive node canvas representation displaying trigger, AI reasoning, conditional branching, and action dispatch.
7. **Interactive ROI Calculator**: Real-time sliders for Monthly Leads and Deal Size projecting extra annual ARR and SDR hours saved.
8. **Pricing Matrix**: Monthly and Annual toggle with a 20% discount badge across Starter ($49/mo), Growth ($149/mo - Popular), and Enterprise ($399/mo).
9. **FAQ Accordion**: 5 comprehensive answers covering deliverability, CRM sync, compliance, and AI guardrails.
10. **Footer**: Security badges (SOC2 Type II, GDPR), legal links, product map, and newsletter.

---

### Part 2 & 3: Application Dashboard (12 Core Modules)
1. **Overview**:
   - 6 KPI Cards: **Total Leads** (4,892), **Qualified Leads** (1,845), **Hot Leads** (342), **Emails Sent** (14,290), **Follow-ups Due** (24), **Conversion Rate** (8.7%).
   - Interactive bar chart toggling between Lead Velocity and Conversion Funnel.
   - Live AI Strategic Recommendations banner.
   - Today's Follow-up Radar & Priority tasks.
   - Top performing leads table with instant dossier modal.
2. **Lead Management**:
   - Full search, status filters (Hot, Meeting Booked, In Sequence, Qualified), and ICP Tier filters (Tier A, Tier B, Tier C).
   - Export leads to CSV button.
   - "+ Add Lead" modal with automatic AI profile enrichment.
   - Comprehensive table with company, score, tech stack, and action buttons.
3. **Lead Discovery**:
   - ICP prospecting engine filtering by Industry, Company Size, and Funding Stage.
   - Instant "1-Click AI Enrich & Import" into active pipeline.
4. **AI Lead Intelligence**:
   - **✨ Live Gemini Lead Intelligence Engine**: Select any prospect and run real-time qualification.
   - Multi-factor scoring breakdown (Technographic, Intent surge, Decision authority, Budget timing).
   - Live buying signals feed (Hiring spikes, G2 comparison surges, pricing visits).
5. **Sales Pipeline**:
   - Interactive 6-stage Kanban board (*Discovery → Qualified → In Sequence → Demo Scheduled → Proposal Sent → Closed Won*).
   - "Move Forward" and "Move Backward" stage progression buttons with instant pipeline total calculations.
6. **Email Studio**:
   - **✨ Gemini AI Cold Outreach & Follow-up generator**: Personalized subjects & copy based on company triggers.
   - Tone selector (ROI-Focused, Executive, Casual, Teaser), goal selector, and custom prompt instructions.
   - Live interactive email editor with deliverability score (99/100) and test email simulator.
7. **Follow-up Center**:
   - **✨ Gemini Next Action & Draft generator**: Suggests optimal psychological angle, message copy, and send time.
   - Cadence task manager with urgency countdowns and 1-click execution.
8. **Automation Studio**:
   - Pre-built autonomous workflows with active/paused status toggles, enrolled leads, and meetings generated.
9. **AI Sales Copilot**:
   - **✨ Real-time conversational AI** grounded in live leads, pipeline deals, and workspace metrics.
   - Pre-built prompt chips for competitor battlecards, executive follow-ups, and FinTech buying signals.
10. **Analytics & Forecasts**:
    - Interactive revenue forecast slider for Q1 2027.
    - Funnel drop-off breakdown and GTM rep leaderboard.
11. **Integrations**:
    - Connectors for HubSpot, Salesforce, Gmail/Workspace, LinkedIn Sales Navigator, Slack, and Make.com.
12. **Settings**:
    - Workspace configuration, ICP prompt definitions, and Gemini backend verification tool.

---

## 🛠️ How to Run & Preview Locally

### Option 1: Native Windows Launcher (Recommended - No Node install required)
Double-click:
```cmd
serve.bat
```
Or run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
This runs the local server with full Google Gemini API backend proxying on port 3000 and opens `http://localhost:3000`.

### Option 2: Node.js Backend with Official `@google/genai` SDK
If you have Node.js installed:
```bash
npm install
npm start
```
Runs `server.js` using Express and `@google/genai` on `http://localhost:3000`.

---

## 📁 File Structure

```
LeadGenius-AI/
├── .env.example                # Example environment file with placeholder
├── .gitignore                  # Excludes .env, node_modules, and logs
├── index.html                  # Main SPA entry point (Landing Page + Full SaaS Dashboard)
├── dashboard.html              # Direct entry point into Dashboard view
├── app.js                      # React application logic with GeminiService client
├── server.js                   # Node.js backend using official @google/genai SDK
├── serve.bat                   # 1-click Windows preview batch runner
├── serve.ps1                   # Native zero-dependency PowerShell HTTP + Gemini server
├── package.json                # npm configuration with @google/genai, express, dotenv
├── tailwind.config.js          # Tailwind theme configuration
└── README.md                   # Complete documentation & user guide
```
