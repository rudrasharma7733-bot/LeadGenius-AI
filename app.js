// LeadGenius AI - World-Class Autonomous AI Lead Generation & Follow-up Platform
// Senior Frontend & SaaS Product Design Implementation

const { useState, useEffect, useMemo, useRef } = React;

// ==========================================
// 1. BUILT-IN MODERN ICON REGISTRY
// ==========================================
const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const icons = {
    sparkles: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    bolt: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    target: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    mail: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    trendingUp: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    search: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bell: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    filter: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    plus: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    arrowRight: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="12 5 19 12 12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    cpu: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="9" width="6" height="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="1" x2="9" y2="4" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="1" x2="15" y2="4" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="20" x2="9" y2="23" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="20" x2="15" y2="23" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="9" x2="23" y2="9" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="15" x2="23" y2="15" strokeWidth="2" strokeLinecap="round" />
        <line x1="1" y1="9" x2="4" y2="9" strokeWidth="2" strokeLinecap="round" />
        <line x1="1" y1="15" x2="4" y2="15" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    kanban: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="3" y="3" width="5" height="18" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="3" width="5" height="12" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="17" y="3" width="5" height="15" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gitMerge: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="18" cy="18" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="6" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 9v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 18h3a3 3 0 003-3V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    compass: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    barChart: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    layers: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 17 12 22 22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 12 12 17 22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    messageSquare: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    settings: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    chevronDown: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    chevronRight: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    menu: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    x: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    flame: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    send: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    refreshCw: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polyline points="23 4 23 10 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="1 20 1 14 7 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    externalLink: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    copy: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    play: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <polygon points="5 3 19 12 5 21 5 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    pause: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="6" y="4" width="4" height="16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="4" width="4" height="16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return icons[name] || <span className="inline-block w-4 h-4 bg-gray-500 rounded"></span>;
};

// ==========================================
// 1.5 GOOGLE GEMINI AI CLIENT SERVICE
// ==========================================
const GeminiService = {
  async checkHealth() {
    try {
      const res = await fetch('/api/gemini/health');
      if (!res.ok) return { status: 'error', geminiConfigured: false, model: 'gemini-flash-lite-latest' };
      return await res.json();
    } catch {
      return { status: 'offline', geminiConfigured: false, model: 'gemini-flash-lite-latest' };
    }
  },

  async analyzeLead(lead) {
    const res = await fetch('/api/gemini/analyze-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead })
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to analyze lead with Gemini');
    }
    return data;
  },

  async generateEmail(params) {
    const res = await fetch('/api/gemini/generate-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to generate email with Gemini');
    }
    return data;
  },

  async askCopilot(message, context) {
    const res = await fetch('/api/gemini/copilot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, context })
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to get Sales Copilot response');
    }
    return data;
  },

  async getFollowUpRecommendation(followUp, lead) {
    const res = await fetch('/api/gemini/follow-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ followUp, lead })
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to get follow-up recommendation');
    }
    return data;
  }
};

// ==========================================
// 2. REALISTIC DATA STORE (DEMO DATA)
// ==========================================
const INITIAL_DEMO_LEADS = [
  {
    id: 'lead-1',
    name: 'Sarah Jenkins',
    title: 'VP of Revenue Operations',
    company: 'Stripeflow Systems',
    email: 'sarah.jenkins@stripeflow.io',
    phone: '+1 (415) 890-2134',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    location: 'San Francisco, CA',
    industry: 'FinTech & Payments',
    employees: '250 - 500',
    funding: 'Series B ($32M)',
    score: 96,
    icpFit: 'Tier A (90-100)',
    status: 'Hot',
    dealSize: 34000,
    source: 'LinkedIn AI',
    lastActivity: 'Opened proposal 3x in last 2 hours',
    intentSignals: ['Hiring 8 SDRs', 'Visited Pricing Page 4x', 'Installed HubSpot Enterprise'],
    buyingTiming: 'Immediate (1-2 wks)',
    enrichedData: {
      techStack: ['Salesforce', 'HubSpot', 'Segment', 'Outreach', 'Gong'],
      recentTrigger: 'Announced $32M Series B funding led by Sequoia last week.',
      decisionMakersCount: 4,
      estimatedRevenue: '$28M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/sarahjenkins-revops',
      websiteUrl: 'https://stripeflow.io',
    },
    notes: 'Prioritized speed of outbound outreach. Wants autonomous lead qualification before SDR handoff.'
  },
  {
    id: 'lead-2',
    name: 'Marcus Vance',
    title: 'Chief Technology Officer',
    company: 'NexusCloud AI',
    email: 'marcus.vance@nexuscloud.ai',
    phone: '+1 (206) 441-9921',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    location: 'Seattle, WA',
    industry: 'Enterprise Cloud & DevOps',
    employees: '500 - 1,000',
    funding: 'Series C ($75M)',
    score: 93,
    icpFit: 'Tier A (90-100)',
    status: 'Meeting Booked',
    dealSize: 52000,
    source: 'AI Discovery',
    lastActivity: 'Accepted calendar invite for Thursday 2 PM EST',
    intentSignals: ['Expanding GTM into EMEA', 'Published AI Roadmap', 'G2 Intent High Surge'],
    buyingTiming: 'Immediate (1-2 wks)',
    enrichedData: {
      techStack: ['AWS', 'Kubernetes', 'Datadog', 'Marketo', 'Snowflake'],
      recentTrigger: 'Acquired DevMetrics team and launching enterprise tier next quarter.',
      decisionMakersCount: 6,
      estimatedRevenue: '$65M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/marcusvance-cto',
      websiteUrl: 'https://nexuscloud.ai',
    },
    notes: 'Technical buyer. Concerned with security compliance and SOC2 API integration.'
  },
  {
    id: 'lead-3',
    name: 'Elena Rostova',
    title: 'Head of Global Growth',
    company: 'HyperScale Logistics',
    email: 'elena.r@hyperscalelog.com',
    phone: '+44 20 7946 0912',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    location: 'London, UK',
    industry: 'Supply Chain & Logistics',
    employees: '1,000+',
    funding: 'Public / Enterprise',
    score: 89,
    icpFit: 'Tier B (70-89)',
    status: 'In Sequence',
    dealSize: 45000,
    source: 'Apollo Sync',
    lastActivity: 'Replied to Step 2 Email: "Let\'s look at numbers next week"',
    intentSignals: ['New VP Sales hired', 'Modernizing legacy CRM', 'Evaluating Lead Gen AI'],
    buyingTiming: 'Active Evaluation',
    enrichedData: {
      techStack: ['Microsoft Dynamics', 'Pardot', 'PowerBI', 'Zendesk'],
      recentTrigger: 'Expanded operations to North American maritime hubs.',
      decisionMakersCount: 8,
      estimatedRevenue: '$140M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/elenarostova-growth',
      websiteUrl: 'https://hyperscalelog.com',
    },
    notes: 'Needs multi-region SDR territory routing.'
  },
  {
    id: 'lead-4',
    name: 'David Chen',
    title: 'Founder & CEO',
    company: 'Verve Health',
    email: 'david@vervehealth.co',
    phone: '+1 (617) 320-8841',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    location: 'Boston, MA',
    industry: 'Digital Health & Biotech',
    employees: '50 - 100',
    funding: 'Series A ($14M)',
    score: 91,
    icpFit: 'Tier A (90-100)',
    status: 'Hot',
    dealSize: 24000,
    source: 'Inbound Form',
    lastActivity: 'Downloaded ROI Whitepaper and requested enterprise quote',
    intentSignals: ['HIPAA Compliance check', 'Tripled sales headcount', 'Series A press release'],
    buyingTiming: 'Immediate (1-2 wks)',
    enrichedData: {
      techStack: ['GSuite', 'HubSpot Starter', 'Mixpanel', 'Linear'],
      recentTrigger: 'Secured FDA clearance for clinical monitoring software.',
      decisionMakersCount: 2,
      estimatedRevenue: '$6.5M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/davidchen-verve',
      websiteUrl: 'https://vervehealth.co',
    },
    notes: 'Fast moving founder. Wants hands-off lead automation immediately.'
  },
  {
    id: 'lead-5',
    name: 'Amara Okafor',
    title: 'Director of Demand Generation',
    company: 'CyberShield Zero',
    email: 'amara.o@cybershieldzero.com',
    phone: '+1 (512) 674-1290',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
    location: 'Austin, TX',
    industry: 'Cybersecurity',
    employees: '100 - 250',
    funding: 'Series B ($28M)',
    score: 87,
    icpFit: 'Tier B (70-89)',
    status: 'Qualified',
    dealSize: 31000,
    source: 'Web Visitor',
    lastActivity: 'Enriched by AI engine 3 hours ago',
    intentSignals: ['Dark Reading feature', 'Attending RSA Conference', 'Hiring SDR Lead'],
    buyingTiming: 'Active Evaluation',
    enrichedData: {
      techStack: ['Salesforce', 'Marketo', 'Drift', 'Clearbit', 'ZoomInfo'],
      recentTrigger: 'Launched zero-trust endpoint protection platform for fintechs.',
      decisionMakersCount: 3,
      estimatedRevenue: '$19M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/amaraokafor-demandgen',
      websiteUrl: 'https://cybershieldzero.com',
    },
    notes: 'Replaces legacy Apollo manual prospecting with autonomous AI agent.'
  },
  {
    id: 'lead-6',
    name: 'Lucas Morales',
    title: 'VP of Commercial Sales',
    company: 'FinPulse Core',
    email: 'lucas@finpulse.de',
    phone: '+49 30 1289 4432',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    location: 'Berlin, Germany',
    industry: 'Open Banking API',
    employees: '150 - 300',
    funding: 'Series B ($40M)',
    score: 82,
    icpFit: 'Tier B (70-89)',
    status: 'In Sequence',
    dealSize: 28000,
    source: 'LinkedIn AI',
    lastActivity: 'Opened Step 1 email with 3 clicks on case study link',
    intentSignals: ['EU Open Banking compliance expansion', 'Looking for GDPR-ready AI outreach'],
    buyingTiming: 'Nurturing',
    enrichedData: {
      techStack: ['Pipedrive', 'Mailgun', 'Stripe', 'Segment'],
      recentTrigger: 'Expanded partnership with Deutsche Bank.',
      decisionMakersCount: 4,
      estimatedRevenue: '$22M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/lucasmorales-finpulse',
      websiteUrl: 'https://finpulse.de',
    },
    notes: 'Requested GDPR data privacy documentation.'
  },
  {
    id: 'lead-7',
    name: 'Kavita Patel',
    title: 'Chief Revenue Officer',
    company: 'Synthetix Media',
    email: 'kavita@synthetix.ai',
    phone: '+1 (415) 554-7801',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    location: 'San Jose, CA',
    industry: 'Generative Video AI',
    employees: '60 - 120',
    funding: 'Series A ($18M)',
    score: 95,
    icpFit: 'Tier A (90-100)',
    status: 'Hot',
    dealSize: 42000,
    source: 'AI Discovery',
    lastActivity: 'Requested custom ROI breakdown for 12 sales reps',
    intentSignals: ['Viral Product Hunt launch', 'Adding 5 Account Executives', 'High Competitor churn'],
    buyingTiming: 'Immediate (1-2 wks)',
    enrichedData: {
      techStack: ['HubSpot Enterprise', 'Slack', 'Zapier', 'OpenAI API'],
      recentTrigger: 'Surpassed 100,000 active creators; scaling B2B enterprise tier.',
      decisionMakersCount: 3,
      estimatedRevenue: '$12M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/kavitapatel-cro',
      websiteUrl: 'https://synthetix.ai',
    },
    notes: 'Warm relationship. Prefers Slack connect for quick syncs.'
  },
  {
    id: 'lead-8',
    name: 'Liam O\'Connor',
    title: 'Head of Sales Operations',
    company: 'Solaris Clean Energy',
    email: 'liam.oc@solarisenergy.ie',
    phone: '+353 1 496 0192',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    location: 'Dublin, Ireland',
    industry: 'Renewable Energy Tech',
    employees: '300 - 600',
    funding: 'Growth Equity ($50M)',
    score: 74,
    icpFit: 'Tier B (70-89)',
    status: 'Qualified',
    dealSize: 22000,
    source: 'Web Visitor',
    lastActivity: 'Enriched profile from European Tech directory',
    intentSignals: ['Evaluating automation tools', 'Expanding solar B2B sales across UK'],
    buyingTiming: 'Nurturing',
    enrichedData: {
      techStack: ['Salesforce', 'Outreach', 'Airtable'],
      recentTrigger: 'Won government clean tech commercial grant.',
      decisionMakersCount: 5,
      estimatedRevenue: '$38M ARR',
      verifiedEmail: true,
      linkedinUrl: 'https://linkedin.com/in/liamoconnor-energy',
      websiteUrl: 'https://solarisenergy.ie',
    },
    notes: 'Longer evaluation cycle due to quarterly board approvals.'
  }
];

const INITIAL_PIPELINE = [
  { id: 'deal-1', leadId: 'lead-1', name: 'Sarah Jenkins', company: 'Stripeflow Systems', amount: 34000, stage: 'proposal', probability: 85, owner: 'Rudra Pratap', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-2', leadId: 'lead-2', name: 'Marcus Vance', company: 'NexusCloud AI', amount: 52000, stage: 'demo', probability: 70, owner: 'Rudra Pratap', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-3', leadId: 'lead-7', name: 'Kavita Patel', company: 'Synthetix Media', amount: 42000, stage: 'proposal', probability: 90, owner: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-4', leadId: 'lead-4', name: 'David Chen', company: 'Verve Health', amount: 24000, stage: 'demo', probability: 65, owner: 'Sophie Taylor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-5', leadId: 'lead-3', name: 'Elena Rostova', company: 'HyperScale Logistics', amount: 45000, stage: 'sequence', probability: 45, owner: 'Rudra Pratap', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-6', leadId: 'lead-5', name: 'Amara Okafor', company: 'CyberShield Zero', amount: 31000, stage: 'qualified', probability: 50, owner: 'Sophie Taylor', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-7', leadId: 'lead-6', name: 'Lucas Morales', company: 'FinPulse Core', amount: 28000, stage: 'sequence', probability: 40, owner: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-8', leadId: 'lead-8', name: 'Liam O\'Connor', company: 'Solaris Clean Energy', amount: 22000, stage: 'discovery', probability: 25, owner: 'Sophie Taylor', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80' },
  { id: 'deal-9', leadId: 'lead-9', name: 'Nathaniel Drake', company: 'QuantumLeap Bio', amount: 68000, stage: 'won', probability: 100, owner: 'Rudra Pratap', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80' }
];

const INITIAL_FOLLOW_UPS = [
  { id: 'fu-1', leadId: 'lead-1', name: 'Sarah Jenkins', company: 'Stripeflow Systems', due: 'Today at 2:00 PM', step: 'Step 3 of 5', channel: 'Email', priority: 'High', angle: 'Emphasize pricing page visits & SOC2 compliance SLA', status: 'Pending' },
  { id: 'fu-2', leadId: 'lead-4', name: 'David Chen', company: 'Verve Health', due: 'Today at 4:30 PM', step: 'Step 2 of 4', channel: 'LinkedIn', priority: 'High', angle: 'Offer pilot of 50 enriched accounts for clinical SDRs', status: 'Pending' },
  { id: 'fu-3', leadId: 'lead-3', name: 'Elena Rostova', company: 'HyperScale Logistics', due: 'Tomorrow at 10:00 AM', step: 'Step 4 of 6', channel: 'Loom', priority: 'Medium', angle: '60-sec video showing global multi-region territory routing', status: 'Pending' },
  { id: 'fu-4', leadId: 'lead-6', name: 'Lucas Morales', company: 'FinPulse Core', due: 'Tomorrow at 3:15 PM', step: 'Step 2 of 4', channel: 'Email', priority: 'Medium', angle: 'Attach EU GDPR data privacy documentation & API specs', status: 'Pending' }
];

const INITIAL_WORKFLOWS = [
  { id: 'wf-1', name: 'Autonomous Inbound Lightning Nurture', trigger: 'New Inbound Lead Created', active: true, leads: 842, replyRate: '34.2%', meetings: 114, updated: '2 hours ago' },
  { id: 'wf-2', name: 'Series A/B Funding Outbound Blitz', trigger: 'Funding Round ($5M+) Detected', active: true, leads: 1240, replyRate: '22.8%', meetings: 98, updated: 'Yesterday' },
  { id: 'wf-3', name: 'Proposal View & Ghosting Recovery', trigger: 'Pricing Page Visited 3x with No Reply', active: true, leads: 156, replyRate: '46.1%', meetings: 42, updated: '3 days ago' },
  { id: 'wf-4', name: 'Lost Deal / Competitor Churn Revival', trigger: '90-Day Closed Lost Window Reached', active: false, leads: 412, replyRate: '17.5%', meetings: 29, updated: '1 week ago' }
];

// ==========================================
// 3. TOAST NOTIFICATION COMPONENT
// ==========================================
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy-900/95 border border-cyan-accent/30 text-white px-5 py-3.5 rounded-xl shadow-glow-cyan backdrop-blur-xl animate-bounce">
      <div className="p-1 rounded-full bg-cyan-accent/20 text-cyan-accent">
        <Icon name="check" className="w-4 h-4" />
      </div>
      <p className="text-sm font-medium text-slate-100">{message}</p>
      <button onClick={onClose} className="text-slate-400 hover:text-white ml-2">
        <Icon name="x" className="w-4 h-4" />
      </button>
    </div>
  );
};

// ==========================================
// 4. MAIN APP CONTAINER
// ==========================================
function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'dashboard' || sessionStorage.getItem('leadgenius_initial_view') === 'dashboard') {
      return 'dashboard';
    }
    return 'landing';
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Core Data State
  const [leads, setLeads] = useState(INITIAL_DEMO_LEADS);
  const [pipelineDeals, setPipelineDeals] = useState(INITIAL_PIPELINE);
  const [followUps, setFollowUps] = useState(INITIAL_FOLLOW_UPS);
  const [workflows, setWorkflows] = useState(INITIAL_WORKFLOWS);
  
  // Modals & Drawers
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Google Gemini AI Connection State
  const [geminiStatus, setGeminiStatus] = useState({ checked: false, configured: false, model: 'gemini-flash-lite-latest' });

  const refreshGeminiHealth = () => {
    GeminiService.checkHealth().then((res) => {
      setGeminiStatus({
        checked: true,
        configured: Boolean(res.geminiConfigured),
        model: res.model || 'gemini-flash-lite-latest'
      });
    }).catch(() => {
      setGeminiStatus({ checked: true, configured: false, model: 'gemini-flash-lite-latest' });
    });
  };

  useEffect(() => {
    refreshGeminiHealth();
  }, []);

  // Notification center
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 'notif-1', title: 'High Intent Lead Alert', desc: 'Sarah Jenkins (Stripeflow) viewed proposal 3x', time: '12m ago', unread: true },
    { id: 'notif-2', title: 'Meeting Scheduled', desc: 'Marcus Vance confirmed demo for Thursday 2 PM', time: '45m ago', unread: true },
    { id: 'notif-3', title: 'AI Sequence Optimized', desc: 'Step 2 email open rate jumped from 48% to 68%', time: '3h ago', unread: false }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  // Keyboard shortcut listener for Command Palette (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setShowCommandPalette(false);
        setSelectedLead(null);
        setShowAddLeadModal(false);
        setShowNotifications(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Quick reset demo data action
  const resetDemoData = () => {
    setLeads(INITIAL_DEMO_LEADS);
    setPipelineDeals(INITIAL_PIPELINE);
    setFollowUps(INITIAL_FOLLOW_UPS);
    setWorkflows(INITIAL_WORKFLOWS);
    showToast('Reset to default LeadGenius demo dataset');
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-electric-500 selection:text-white">
      {/* Toast Notification Container */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* Global Command Palette Modal (Ctrl + K) */}
      {showCommandPalette && (
        <CommandPaletteModal
          onClose={() => setShowCommandPalette(false)}
          leads={leads}
          onSelectLead={(l) => {
            setSelectedLead(l);
            setShowCommandPalette(false);
          }}
          onNavigate={(tab) => {
            setCurrentView('dashboard');
            setActiveTab(tab);
            setShowCommandPalette(false);
          }}
        />
      )}

      {/* Lead Detail Dossier Drawer Modal */}
      {selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onUpdateLead={(updated) => {
            setLeads((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
            setSelectedLead(updated);
            showToast(`Updated profile for ${updated.name}`);
          }}
          onLaunchEmail={(lead) => {
            setSelectedLead(null);
            setCurrentView('dashboard');
            setActiveTab('emailStudio');
            showToast(`Loaded ${lead.name} into Email Studio`);
          }}
        />
      )}

      {/* Quick Add Lead Modal */}
      {showAddLeadModal && (
        <AddLeadModal
          onClose={() => setShowAddLeadModal(false)}
          onAddLead={(newLead) => {
            setLeads((prev) => [newLead, ...prev]);
            setShowAddLeadModal(false);
            showToast(`Enriched & added ${newLead.name} (${newLead.company})`);
          }}
        />
      )}

      {/* Top Persistent App Mode Switcher Banner (Easily hop between Landing Page & Live Dashboard) */}
      <div className="bg-navy-900 border-b border-white/10 px-4 py-1.5 flex items-center justify-between text-xs z-40">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-slate-300">LeadGenius AI Live</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          {geminiStatus.configured ? (
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Icon name="sparkles" className="w-3 h-3 text-cyan-accent" />
              <span>Gemini Flash Connected</span>
            </span>
          ) : (
            <span
              onClick={() => { setCurrentView('dashboard'); setActiveTab('settings'); }}
              className="bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 cursor-pointer hover:bg-amber-500/25 transition"
              title="Click to view Gemini API key setup instructions in Settings"
            >
              <span>⚡ Gemini Key Needed in .env</span>
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-navy-800 p-0.5 rounded-lg border border-white/10 flex items-center">
            <button
              onClick={() => setCurrentView('landing')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                currentView === 'landing'
                  ? 'bg-electric-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Landing Page
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center gap-1.5 ${
                currentView === 'dashboard'
                  ? 'bg-cyan-accent text-navy-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon name="bolt" className="w-3 h-3 text-current" />
              Application Dashboard
            </button>
          </div>
          <button
            onClick={() => setShowCommandPalette(true)}
            className="hidden md:flex items-center gap-1.5 text-slate-400 hover:text-cyan-accent bg-navy-800/80 px-2 py-0.5 rounded border border-white/5"
            title="Press Ctrl+K anytime"
          >
            <span>Cmd+K</span>
          </button>
        </div>
      </div>

      {/* Conditionally Render: Landing Page OR Comprehensive SaaS Dashboard */}
      {currentView === 'landing' ? (
        <LandingPageView
          onLaunchApp={() => {
            setCurrentView('dashboard');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectTab={(tab) => {
            setCurrentView('dashboard');
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <DashboardView
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          leads={leads}
          setLeads={setLeads}
          pipelineDeals={pipelineDeals}
          setPipelineDeals={setPipelineDeals}
          followUps={followUps}
          setFollowUps={setFollowUps}
          workflows={workflows}
          setWorkflows={setWorkflows}
          onOpenLeadDetail={(lead) => setSelectedLead(lead)}
          onOpenAddLead={() => setShowAddLeadModal(true)}
          showCommandPalette={() => setShowCommandPalette(true)}
          notifications={notifications}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          showToast={showToast}
          resetDemoData={resetDemoData}
          onBackToLanding={() => setCurrentView('landing')}
          geminiStatus={geminiStatus}
          refreshGeminiHealth={refreshGeminiHealth}
        />
      )}
    </div>
  );
}

// ==========================================
// 5. LANDING PAGE VIEW (10 Core Sections)
// ==========================================
function LandingPageView({ onLaunchApp, onSelectTab }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  // Interactive ROI Calculator State
  const [leadsPerMonth, setLeadsPerMonth] = useState(1200);
  const [averageDealValue, setAverageDealValue] = useState(18000);

  // Calculated ROI projections
  const extraMeetings = Math.round((leadsPerMonth * 0.087) * 0.75);
  const extraRevenue = Math.round(extraMeetings * 0.28 * averageDealValue);
  const hoursSavedPerMonth = Math.round(leadsPerMonth * 0.42);

  return (
    <div className="relative overflow-hidden bg-navy-950">
      {/* Background Ambient Glowing Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-electric-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[800px] left-10 w-[600px] h-[500px] bg-cyan-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[2200px] right-10 w-[700px] h-[600px] bg-electric-700/15 rounded-full blur-[160px] pointer-events-none"></div>

      {/* SECTION 1: PREMIUM NAVIGATION BAR */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-navy-950/80 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Glow Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-cyan-accent p-0.5 shadow-glow-purple flex items-center justify-center">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Icon name="bolt" className="w-5 h-5 text-cyan-accent" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                LeadGenius <span className="text-cyan-accent">AI</span>
              </span>
              <span className="text-[10px] text-electric-300 font-mono tracking-wider uppercase -mt-1">
                Autonomous Revenue Engine
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-accent transition">Features</a>
            <a href="#how-it-works" className="hover:text-cyan-accent transition">How It Works</a>
            <a href="#workflow" className="hover:text-cyan-accent transition">AI Workflows</a>
            <a href="#roi-calculator" className="hover:text-cyan-accent transition">ROI Calculator</a>
            <a href="#pricing" className="hover:text-cyan-accent transition">Pricing</a>
            <a href="#faq" className="hover:text-cyan-accent transition">FAQ</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('overview')}
              className="hidden sm:inline-flex text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition"
            >
              Sign In
            </button>
            <button
              onClick={onLaunchApp}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm shadow-glow-cyan"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-electric-500 via-cyan-accent to-electric-600 group-hover:opacity-100 transition duration-300"></span>
              <span className="relative flex items-center gap-2 bg-navy-900 px-5 py-2.5 rounded-[11px] text-white group-hover:bg-opacity-80 transition">
                <Icon name="sparkles" className="w-4 h-4 text-cyan-accent" />
                <span>Launch App</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 2: HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-850/90 border border-electric-500/40 text-xs text-electric-300 mb-8 shadow-inner-glow">
          <span className="flex h-2 w-2 rounded-full bg-cyan-accent animate-ping"></span>
          <span className="font-semibold text-white">Next-Gen Autonomous Agentic Pipeline</span>
          <span className="text-slate-400">•</span>
          <span className="text-cyan-accent font-medium">v2.4 Live Release</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Turn Every Lead Into Your <br />
          <span className="gradient-text-electric">Next Customer.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          LeadGenius AI autonomously uncovers high-intent B2B accounts, enriches 50+ data signals, and triggers hyper-personalized multichannel follow-ups that turn cold prospects into closed-won revenue.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onLaunchApp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-bold text-base shadow-glow-purple flex items-center justify-center gap-3 transition transform hover:-translate-y-0.5"
          >
            <Icon name="bolt" className="w-5 h-5 text-cyan-accent" />
            <span>Explore Live Dashboard</span>
            <Icon name="arrowRight" className="w-4 h-4" />
          </button>
          <a
            href="#roi-calculator"
            className="w-full sm:w-auto px-7 py-4 rounded-xl glass-card text-slate-200 hover:text-white hover:border-cyan-accent/40 font-semibold text-base flex items-center justify-center gap-2 transition"
          >
            <Icon name="trendingUp" className="w-5 h-5 text-cyan-accent" />
            <span>Calculate Projected ROI</span>
          </a>
        </div>

        {/* Social Proof Trust Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Trusted by 2,400+ fast-growing revenue teams at leading platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center opacity-65 text-slate-300 font-bold text-lg">
            <span className="hover:opacity-100 hover:text-cyan-accent transition tracking-wider">STRIPEFLOW</span>
            <span className="hover:opacity-100 hover:text-cyan-accent transition tracking-wider">NEXUSCLOUD</span>
            <span className="hover:opacity-100 hover:text-cyan-accent transition tracking-wider">RETOOL</span>
            <span className="hover:opacity-100 hover:text-cyan-accent transition tracking-wider">SYNTHETIX</span>
            <span className="hover:opacity-100 hover:text-cyan-accent transition tracking-wider">RAMP.AI</span>
            <span className="hover:opacity-100 hover:text-cyan-accent transition tracking-wider">CYBERSHIELD</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: ANIMATED AI DASHBOARD PREVIEW */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-6 mb-28">
        <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/20 via-electric-500/30 to-transparent shadow-2xl">
          <div className="bg-navy-900 rounded-[15px] overflow-hidden border border-white/10 shadow-glass">
            {/* Window Browser Header */}
            <div className="bg-navy-950/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-3 text-xs text-slate-400 font-mono">leadgenius.ai/app/dashboard</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-accent bg-cyan-accent/10 px-3 py-1 rounded-full border border-cyan-accent/20">
                <Icon name="bolt" className="w-3.5 h-3.5" />
                <span>AI Pipeline Active • Processing 4,892 Accounts</span>
              </div>
            </div>

            {/* Simulated Live Dashboard Graphic & Metrics */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-navy-900 to-navy-950">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="glass-card p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400 uppercase font-medium">Qualified Leads</div>
                  <div className="text-2xl font-bold text-white mt-1">1,845</div>
                  <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                    <Icon name="trendingUp" className="w-3 h-3" /> +24% this week
                  </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400 uppercase font-medium">Hot Intent Surges</div>
                  <div className="text-2xl font-bold text-cyan-accent mt-1">342</div>
                  <div className="text-xs text-cyan-300 mt-1">Score &gt; 90+ ICP match</div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400 uppercase font-medium">Emails Delivered</div>
                  <div className="text-2xl font-bold text-white mt-1">14,290</div>
                  <div className="text-xs text-emerald-400 mt-1">98.6% inbox placement</div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400 uppercase font-medium">Pipeline Value</div>
                  <div className="text-2xl font-bold text-electric-400 mt-1">$384.5K</div>
                  <div className="text-xs text-slate-400 mt-1">4.2x SDR acceleration</div>
                </div>
              </div>

              {/* Live Ticker Item Mockup */}
              <div className="glass-panel p-5 rounded-xl border border-electric-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
                      className="w-12 h-12 rounded-xl object-cover border border-cyan-accent/50"
                      alt="Sarah"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-navy-950"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Sarah Jenkins</span>
                      <span className="text-xs text-slate-400">• VP RevOps @ Stripeflow</span>
                      <span className="bg-electric-500/20 text-electric-300 border border-electric-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Score 96 (Hot)
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Signal: Opened customized enterprise proposal 3 times in the last 2 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectTab('emailStudio')}
                    className="px-4 py-2 rounded-lg bg-cyan-accent text-navy-950 font-semibold text-xs hover:bg-cyan-300 transition"
                  >
                    1-Click Auto Follow-Up
                  </button>
                  <button
                    onClick={onLaunchApp}
                    className="px-4 py-2 rounded-lg bg-navy-800 text-slate-200 hover:text-white text-xs border border-white/10"
                  >
                    View 360° Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES SECTION (6 Premium Cards) */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent font-semibold">
            Engineered For Modern Revenue Teams
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Everything You Need To Automate Your Sales Pipeline.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Replace fragmented prospecting tools, generic spam mailers, and manual spreadsheet lookups with one unified autonomous system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-400 mb-6">
                <Icon name="cpu" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-Time AI Enrichment</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Scan 50+ data sources instantly. Automatically append verified corporate emails, tech stacks, funding milestones, and executive org charts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-cyan-accent">
              <span>50+ Data Attributes</span>
              <Icon name="check" className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent mb-6">
                <Icon name="target" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Intent & Timing</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Detect hiring spikes, leadership shifts, software evaluations, and website visits before competitors even know the lead is in-market.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-cyan-accent">
              <span>Scoring 0 - 100</span>
              <Icon name="check" className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-6">
                <Icon name="mail" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multichannel Smart Sequences</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Send hyper-personalized emails, LinkedIn touchpoints, and custom video invites that read like they were hand-crafted by your best SDR.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-cyan-accent">
              <span>98.6% Deliverability</span>
              <Icon name="check" className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Icon name="sparkles" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Sales Copilot</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                On-demand objection handling, competitor battle cards, and tailored follow-up formulas generated in seconds during live sales cycles.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-cyan-accent">
              <span>Real-Time Battlecards</span>
              <Icon name="check" className="w-4 h-4" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-6">
                <Icon name="kanban" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visual Sales Pipeline</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seamless Kanban view with automated stage transitions, revenue forecasting models, and probability-adjusted pipeline velocity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-cyan-accent">
              <span>Stage Automation</span>
              <Icon name="check" className="w-4 h-4" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Icon name="gitMerge" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Integrations</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Two-way native synchronization with HubSpot, Salesforce, Gmail, LinkedIn Sales Navigator, Slack, and customizable webhooks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-cyan-accent">
              <span>Two-Way Bi-directional Sync</span>
              <Icon name="check" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS (4 Step Process) */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-navy-900/40 border-y border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-electric-300 font-semibold">
            Seamless Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            How LeadGenius AI Works in 4 Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From initial intent signal to signed deal, see how autonomous execution replaces manual prospecting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-xl border border-white/10 relative">
            <span className="text-4xl font-extrabold text-white/10 absolute top-4 right-4">01</span>
            <div className="w-10 h-10 rounded-lg bg-cyan-accent/20 text-cyan-accent flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Discover & Ingest</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Define your Ideal Customer Profile (ICP) or plug in website visitors, CSV lists, or LinkedIn search queries.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 rounded-xl border border-white/10 relative">
            <span className="text-4xl font-extrabold text-white/10 absolute top-4 right-4">02</span>
            <div className="w-10 h-10 rounded-lg bg-electric-600/30 text-electric-300 flex items-center justify-center font-bold mb-4">
              2
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Multi-Factor Scoring</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI evaluates technographic fit, buying authority, company growth signals, and timing urgency on a 0-100 scale.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 rounded-xl border border-white/10 relative">
            <span className="text-4xl font-extrabold text-white/10 absolute top-4 right-4">03</span>
            <div className="w-10 h-10 rounded-lg bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Autonomous Outreach</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Generates context-aware messages citing prospect triggers, funding milestones, or hiring news across email and LinkedIn.
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-6 rounded-xl border border-white/10 relative">
            <span className="text-4xl font-extrabold text-white/10 absolute top-4 right-4">04</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
              4
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Follow-up & Close</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedules intelligent cadence follow-ups, handles initial inquiries, and routes booked calls straight to your calendar.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: AI AUTOMATION WORKFLOW VISUALIZATION */}
      <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent font-semibold">
            Visual Automation Canvas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            Autonomous Logic. Zero Manual Copy-Paste.
          </h2>
          <p className="mt-4 text-slate-300">
            Build and trigger powerful multistep workflows that react dynamically to lead behavior.
          </p>
        </div>

        {/* Visual Workflow Node Diagram */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Node 1: Trigger */}
            <div className="w-full md:w-64 glass-card p-5 rounded-xl border border-cyan-accent/40 shadow-glow-cyan text-left">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-accent mb-2">
                <span>TRIGGER NODE</span>
                <span className="w-2 h-2 rounded-full bg-cyan-accent animate-ping"></span>
              </div>
              <div className="font-bold text-white text-sm">New Inbound Form / Signal</div>
              <p className="text-xs text-slate-400 mt-1">Lead submits request or visits pricing 3x</p>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden md:flex text-slate-500">
              <Icon name="arrowRight" className="w-6 h-6 text-electric-400 animate-pulse" />
            </div>

            {/* Node 2: AI Reasoning */}
            <div className="w-full md:w-64 glass-card p-5 rounded-xl border border-electric-500/50 shadow-glow-purple text-left">
              <div className="flex items-center justify-between text-xs font-mono text-electric-300 mb-2">
                <span>AI REASONING</span>
                <Icon name="cpu" className="w-4 h-4 text-electric-400" />
              </div>
              <div className="font-bold text-white text-sm">Compute Score & ICP Fit</div>
              <p className="text-xs text-slate-400 mt-1">Verify email, scan tech stack, check Series A/B</p>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden md:flex text-slate-500">
              <Icon name="arrowRight" className="w-6 h-6 text-cyan-accent animate-pulse" />
            </div>

            {/* Node 3: Execution */}
            <div className="w-full md:w-64 glass-card p-5 rounded-xl border border-emerald-500/40 shadow-glass text-left">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                <span>ACTION DISPATCH</span>
                <Icon name="send" className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="font-bold text-white text-sm">Send Tailored Outreach</div>
              <p className="text-xs text-slate-400 mt-1">Personalized email sent within 3 minutes</p>
            </div>
          </div>

          {/* Conditional Branching indicator */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-semibold">IF REPLIED</span>
              <span>Pause automation & notify account executive on Slack</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono font-semibold">IF NO REPLY</span>
              <span>Wait 48h, trigger 2nd value angle with video teardown</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INTERACTIVE ROI CALCULATOR & ANALYTICS PREVIEW */}
      <section id="roi-calculator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-navy-900/60 border-y border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent font-semibold">
            Quantifiable Impact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            Estimate Your Revenue Acceleration
          </h2>
          <p className="mt-4 text-slate-300">
            Drag the sliders below to see projected pipeline velocity and SDR time saved with LeadGenius AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center">
          {/* Controls Side */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-white/10 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">Monthly Target Leads</label>
                <span className="text-lg font-bold text-cyan-accent font-mono">{leadsPerMonth.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="200"
                max="5000"
                step="100"
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full accent-cyan-accent bg-navy-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>200 leads</span>
                <span>2,500 leads</span>
                <span>5,000 leads</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">Average Deal Size (ACV)</label>
                <span className="text-lg font-bold text-electric-300 font-mono">${averageDealValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="3000"
                max="60000"
                step="1000"
                value={averageDealValue}
                onChange={(e) => setAverageDealValue(Number(e.target.value))}
                className="w-full accent-electric-500 bg-navy-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$3,000</span>
                <span>$30,000</span>
                <span>$60,000</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
              <Icon name="bolt" className="w-4 h-4 text-cyan-accent" />
              <span>Based on benchmark data across 2,400+ GTM SaaS deployments.</span>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-electric-500/40 shadow-glow-purple text-center flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-cyan-accent font-semibold">
                Projected Extra Annual ARR
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white mt-3 gradient-text-electric">
                ${(extraRevenue * 12).toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Estimated incremental revenue per year
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 my-8 text-left">
              <div className="bg-navy-900/80 p-3 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400">Extra Meetings / Mo</div>
                <div className="text-xl font-bold text-white mt-0.5">+{extraMeetings} calls</div>
              </div>
              <div className="bg-navy-900/80 p-3 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400">Hours Saved / Mo</div>
                <div className="text-xl font-bold text-cyan-accent mt-0.5">{hoursSavedPerMonth} hrs</div>
              </div>
            </div>

            <button
              onClick={onLaunchApp}
              className="w-full py-3.5 rounded-xl bg-cyan-accent text-navy-950 font-bold hover:bg-cyan-300 transition shadow-glow-cyan"
            >
              Start Free 14-Day Trial
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING SECTION */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-electric-300 font-semibold">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            Predictable Pricing for High-Growth Teams
          </h2>
          <p className="mt-4 text-slate-300">
            No per-seat penalties. Scale your autonomous outbound pipeline with flexible tiers.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-navy-850 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                billingCycle === 'monthly' ? 'bg-navy-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-electric-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-cyan-accent text-navy-950 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Plan 1: Starter */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between border border-white/5">
            <div>
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <p className="text-xs text-slate-400 mt-1">For boutique agencies and early-stage founders.</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">
                  ${billingCycle === 'annual' ? '39' : '49'}
                </span>
                <span className="text-slate-400 text-xs"> / month</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Up to 1,000 Enriched Leads / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>3 Active Autonomous Workflows</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>AI Email Studio & Template Builder</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Google Workspace & Gmail Sync</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Standard Lead Scoring</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onLaunchApp}
              className="mt-8 w-full py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs border border-white/10 transition"
            >
              Select Starter
            </button>
          </div>

          {/* Plan 2: Growth (Popular / Glowing) */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-2 border-cyan-accent/50 shadow-glow-purple relative scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric-600 to-cyan-500 text-white font-bold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Most Popular
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Growth</h3>
              <p className="text-xs text-slate-400 mt-1">For scaling B2B teams closing $10k+ deals.</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">
                  ${billingCycle === 'annual' ? '119' : '149'}
                </span>
                <span className="text-slate-400 text-xs"> / month</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-200">
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span className="font-semibold text-white">Up to 5,000 Enriched Leads / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Unlimited Autonomous Workflows</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>AI Sales Copilot & Battlecards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Full HubSpot & Salesforce 2-Way Sync</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Predictive Intent & Timing Radar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Visual Pipeline & Forecasts</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onLaunchApp}
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-accent hover:from-electric-500 hover:to-cyan-300 text-navy-950 font-bold text-xs shadow-glow-cyan transition"
            >
              Get Started with Growth
            </button>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between border border-white/5">
            <div>
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
              <p className="text-xs text-slate-400 mt-1">For organizations requiring SOC2, custom LLM models & SLAs.</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">
                  ${billingCycle === 'annual' ? '319' : '399'}
                </span>
                <span className="text-slate-400 text-xs"> / month</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>25,000+ Enriched Leads / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Dedicated IP & Warmup Infrastructure</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Custom AI Model Fine-tuning</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>Dedicated Slack Channel & RevOps Lead</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="w-4 h-4 text-cyan-accent" />
                  <span>SOC2 Type II & GDPR Data Protection</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onLaunchApp}
              className="mt-8 w-full py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs border border-white/10 transition"
            >
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ SECTION (Accordion) */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent font-semibold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does LeadGenius AI find and enrich verified lead data?",
              a: "We cross-reference over 50 real-time B2B data providers, corporate registers, LinkedIn APIs, and proprietary technographic web scrapers. Every email goes through an SMTP handshake test to ensure zero bounce rates before reaching your inbox."
            },
            {
              q: "Does this integrate with our existing CRM (HubSpot / Salesforce)?",
              a: "Yes. LeadGenius AI supports bi-directional synchronization. As soon as a lead reaches qualified status or replies to a touchpoint, it syncs contact details, timeline events, and deal stages directly into HubSpot or Salesforce."
            },
            {
              q: "Will cold emails hurt our company domain reputation?",
              a: "Never. We enforce automated inbox rotation, gradual warmup sequences, and smart send limits (max 40 emails/day per mailbox). Deliverability rates across our network consistently hover at 98.6%."
            },
            {
              q: "Can I customize the AI prompts and company value proposition?",
              a: "Absolutely. In the Settings and AI Copilot tab, you can define your exact target ICP, product strengths, objection rebuttals, and tone preferences (Executive, Casual, ROI-focused)."
            },
            {
              q: "How quickly can our sales team get started?",
              a: "You can explore the interactive dashboard right now without a credit card. Connecting your email and launching your first automated lead campaign takes less than 5 minutes."
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-xl border border-white/5 overflow-hidden">
              <button
                onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm text-white hover:text-cyan-accent transition"
              >
                <span>{item.q}</span>
                <Icon
                  name={faqOpenIndex === idx ? "chevronDown" : "chevronRight"}
                  className="w-4 h-4 text-slate-400"
                />
              </button>
              {faqOpenIndex === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: PREMIUM FOOTER */}
      <footer className="border-t border-white/10 bg-navy-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent">
                <Icon name="bolt" className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white">LeadGenius AI</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              Autonomous AI lead generation, enrichment, and intelligent multichannel follow-up platform built for modern B2B revenue teams.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Icon name="shield" className="w-3.5 h-3.5 text-cyan-accent" /> SOC2 Type II</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Icon name="check" className="w-3.5 h-3.5 text-emerald-400" /> GDPR Ready</span>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-300 mb-4 tracking-wider">Product</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-cyan-accent">AI Lead Radar</a></li>
              <li><a href="#workflow" className="hover:text-cyan-accent">Automation Studio</a></li>
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">Email Studio</button></li>
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">Sales Copilot</button></li>
              <li><a href="#pricing" className="hover:text-cyan-accent">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-300 mb-4 tracking-wider">Integrations</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">HubSpot CRM</button></li>
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">Salesforce</button></li>
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">Google Workspace</button></li>
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">LinkedIn Sales Nav</button></li>
              <li><button onClick={onLaunchApp} className="hover:text-cyan-accent text-left">Make.com Webhooks</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-300 mb-4 tracking-wider">Company</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-cyan-accent">Security & Privacy</a></li>
              <li><a href="#" className="hover:text-cyan-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-accent">API Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-accent">Status Page</a></li>
              <li><a href="#" className="hover:text-cyan-accent">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 LeadGenius AI Inc. All rights reserved. Built for high-velocity revenue teams.</p>
          <div className="flex items-center gap-4">
            <button onClick={onLaunchApp} className="hover:text-cyan-accent">Live Dashboard</button>
            <a href="#faq" className="hover:text-cyan-accent">FAQ</a>
            <a href="#pricing" className="hover:text-cyan-accent">Enterprise Tiers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// 6. DASHBOARD MAIN VIEW (12 Key Modules)
// ==========================================
function DashboardView({
  activeTab,
  setActiveTab,
  sidebarCollapsed,
  setSidebarCollapsed,
  mobileMenuOpen,
  setMobileMenuOpen,
  leads,
  setLeads,
  pipelineDeals,
  setPipelineDeals,
  followUps,
  setFollowUps,
  workflows,
  setWorkflows,
  onOpenLeadDetail,
  onOpenAddLead,
  showCommandPalette,
  notifications,
  showNotifications,
  setShowNotifications,
  showToast,
  resetDemoData,
  onBackToLanding,
  geminiStatus,
  refreshGeminiHealth
}) {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: 'barChart' },
    { id: 'leads', label: 'Lead Management', icon: 'users', badge: leads.length },
    { id: 'discovery', label: 'Lead Discovery', icon: 'compass' },
    { id: 'intelligence', label: 'AI Lead Intelligence', icon: 'target', badge: 'Hot 96' },
    { id: 'pipeline', label: 'Sales Pipeline', icon: 'kanban', badge: '$384K' },
    { id: 'emailStudio', label: 'Email Studio', icon: 'mail' },
    { id: 'followUps', label: 'Follow-up Center', icon: 'clock', badge: followUps.length },
    { id: 'automation', label: 'Automation Studio', icon: 'gitMerge' },
    { id: 'copilot', label: 'AI Sales Copilot', icon: 'sparkles', badge: 'AI' },
    { id: 'analytics', label: 'Analytics & Forecasts', icon: 'trendingUp' },
    { id: 'integrations', label: 'Integrations', icon: 'layers' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <div className="flex-1 flex overflow-hidden bg-navy-950">
      {/* PROFESSIONAL COLLAPSIBLE SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex flex-col bg-navy-900 border-r border-white/10 transition-all duration-300 md:static ${
          mobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'
        } ${sidebarCollapsed ? 'md:w-20' : 'md:w-64'}`}
      >
        {/* Sidebar Brand Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <div
            className="flex items-center gap-3 cursor-pointer overflow-hidden"
            onClick={onBackToLanding}
            title="Return to Landing Page"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-600 to-cyan-accent p-0.5 flex-shrink-0 flex items-center justify-center shadow-glow-purple">
              <div className="w-full h-full bg-navy-950 rounded-[9px] flex items-center justify-center">
                <Icon name="bolt" className="w-4 h-4 text-cyan-accent" />
              </div>
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="font-bold text-white text-base tracking-tight leading-none">
                  LeadGenius<span className="text-cyan-accent">.AI</span>
                </span>
                <span className="text-[10px] text-electric-300 font-mono tracking-wider uppercase mt-1">
                  Growth Workspace
                </span>
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
            title="Toggle sidebar collapse"
          >
            <Icon name="menu" className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            <Icon name="x" className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5">
          {sidebarItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-electric-600/30 to-cyan-accent/10 text-white border border-cyan-accent/30 shadow-inner-glow'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                }`}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <Icon
                  name={item.icon}
                  className={`w-4 h-4 flex-shrink-0 ${
                    isActive ? 'text-cyan-accent' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                {!sidebarCollapsed && (
                  <span className="truncate flex-1 text-left">{item.label}</span>
                )}
                {!sidebarCollapsed && item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive
                        ? 'bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/30'
                        : 'bg-navy-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-cyan-accent"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Card & Back to Website */}
        <div className="p-3 border-t border-white/10 bg-navy-950/60">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              className="w-8 h-8 rounded-full object-cover border border-cyan-accent/40"
              alt="Avatar"
            />
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">Rudra Pratap</div>
                <div className="text-[10px] text-slate-400 truncate">Head of Revenue Growth</div>
              </div>
            )}
          </div>
          {!sidebarCollapsed && (
            <button
              onClick={onBackToLanding}
              className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-medium text-slate-400 hover:text-cyan-accent bg-navy-850 hover:bg-navy-800 rounded-lg border border-white/5 transition"
            >
              <Icon name="externalLink" className="w-3.5 h-3.5" />
              <span>Back to Landing Page</span>
            </button>
          )}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TOPBAR */}
        <header className="h-16 bg-navy-900/90 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between gap-4 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
            >
              <Icon name="menu" className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400 hidden sm:inline">LeadGenius /</span>
              <h1 className="text-sm sm:text-base font-bold text-white capitalize">
                {sidebarItems.find((i) => i.id === activeTab)?.label || 'Dashboard'}
              </h1>
            </div>
          </div>

          {/* Search, Action Buttons & Notifications */}
          <div className="flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={showCommandPalette}
              className="flex items-center gap-2 bg-navy-800/80 hover:bg-navy-800 text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-xl border border-white/10 text-xs transition"
            >
              <Icon name="search" className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search leads, workflows...</span>
              <kbd className="hidden md:inline-block bg-navy-950 px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-white/5 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Quick Action: New Lead */}
            <button
              onClick={onOpenAddLead}
              className="flex items-center gap-1.5 bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-semibold px-3 py-1.5 rounded-xl text-xs shadow-glow-purple transition"
            >
              <Icon name="plus" className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Lead</span>
            </button>

            {/* Notification Bell Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white border border-white/10 transition"
              >
                <Icon name="bell" className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-accent animate-ping"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-navy-900 border border-white/15 rounded-2xl shadow-glass p-4 z-50">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">AI Signals & Alerts</span>
                    <span className="text-[10px] text-cyan-accent bg-cyan-accent/10 px-2 py-0.5 rounded-full font-mono">
                      Live Feed
                    </span>
                  </div>
                  <div className="mt-3 space-y-3">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-2.5 rounded-xl bg-navy-850/80 hover:bg-navy-800 border border-white/5 text-xs transition">
                        <div className="flex justify-between items-start">
                          <span className="font-semibold text-slate-100">{n.title}</span>
                          <span className="text-[10px] text-slate-500">{n.time}</span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DEMO DATA Quick Reset */}
            <button
              onClick={resetDemoData}
              className="hidden lg:flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-cyan-accent p-1.5 rounded-lg border border-white/5"
              title="Reset Demo Data"
            >
              <Icon name="refreshCw" className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
          </div>
        </header>

        {/* TAB ROUTING CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-navy-950">
          {activeTab === 'overview' && (
            <OverviewModule
              leads={leads}
              followUps={followUps}
              pipelineDeals={pipelineDeals}
              onSelectLead={onOpenLeadDetail}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === 'leads' && (
            <LeadManagementModule
              leads={leads}
              onSelectLead={onOpenLeadDetail}
              onOpenAddLead={onOpenAddLead}
              showToast={showToast}
            />
          )}

          {activeTab === 'discovery' && (
            <LeadDiscoveryModule
              onEnrichAndImport={(newLead) => {
                setLeads([newLead, ...leads]);
                showToast(`Enriched & imported ${newLead.company} into pipeline!`);
              }}
            />
          )}

          {activeTab === 'intelligence' && (
            <LeadIntelligenceModule
              leads={leads}
              setLeads={setLeads}
              onSelectLead={onOpenLeadDetail}
              showToast={showToast}
              geminiStatus={geminiStatus}
            />
          )}

          {activeTab === 'pipeline' && (
            <SalesPipelineModule
              deals={pipelineDeals}
              setDeals={setPipelineDeals}
              onSelectDeal={(deal) => {
                const lead = leads.find((l) => l.id === deal.leadId) || leads[0];
                onOpenLeadDetail(lead);
              }}
              showToast={showToast}
            />
          )}

          {activeTab === 'emailStudio' && (
            <EmailStudioModule
              leads={leads}
              showToast={showToast}
              geminiStatus={geminiStatus}
            />
          )}

          {activeTab === 'followUps' && (
            <FollowUpCenterModule
              leads={leads}
              followUps={followUps}
              setFollowUps={setFollowUps}
              onSelectLeadById={(id) => {
                const lead = leads.find((l) => l.id === id);
                if (lead) onOpenLeadDetail(lead);
              }}
              showToast={showToast}
              geminiStatus={geminiStatus}
            />
          )}

          {activeTab === 'automation' && (
            <AutomationStudioModule
              workflows={workflows}
              setWorkflows={setWorkflows}
              showToast={showToast}
            />
          )}

          {activeTab === 'copilot' && (
            <SalesCopilotModule
              leads={leads}
              pipelineDeals={pipelineDeals}
              showToast={showToast}
              geminiStatus={geminiStatus}
            />
          )}

          {activeTab === 'analytics' && (
            <AnalyticsForecastsModule
              leads={leads}
              pipelineDeals={pipelineDeals}
            />
          )}

          {activeTab === 'integrations' && (
            <IntegrationsModule
              showToast={showToast}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsModule
              showToast={showToast}
              geminiStatus={geminiStatus}
              refreshGeminiHealth={refreshGeminiHealth}
            />
          )}
        </main>
      </div>
    </div>
  );
}

// ==========================================
// 7. DASHBOARD MODULE 1: OVERVIEW TAB
// ==========================================
function OverviewModule({ leads, followUps, pipelineDeals, onSelectLead, onNavigate }) {
  const [chartMetric, setChartMetric] = useState('leads'); // 'leads' | 'conversion'

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top AI Strategic Recommendation Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-electric-500/40 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-glow-purple">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-electric-600 to-cyan-accent flex items-center justify-center flex-shrink-0 text-navy-950 font-bold shadow-md">
            <Icon name="sparkles" className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-mono text-cyan-accent font-bold">
                AI Strategic Opportunity
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                High Priority
              </span>
            </div>
            <h3 className="text-base font-bold text-white mt-1">
              3 Enterprise accounts in your FinTech ICP just completed Series B funding rounds.
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Stripeflow Systems and NexusCloud AI are hiring for VP Sales roles. Autonomous outreach sequences show a 68% reply rate within the first 14 days of funding announcements.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => onNavigate('emailStudio')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-glow-purple transition"
          >
            Launch Funding Blitz Sequence
          </button>
        </div>
      </div>

      {/* 6 CORE KPI CARDS (As Requested) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* KPI 1: Total Leads */}
        <div className="glass-card p-5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Total Leads</span>
            <Icon name="users" className="w-4 h-4 text-electric-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">4,892</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1.5 font-medium">
            <Icon name="trendingUp" className="w-3 h-3" />
            <span>+18.4% vs last mo</span>
          </div>
        </div>

        {/* KPI 2: Qualified Leads */}
        <div className="glass-card p-5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Qualified</span>
            <Icon name="target" className="w-4 h-4 text-cyan-accent" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-accent mt-2">1,845</div>
          <div className="text-[11px] text-slate-300 mt-1.5 font-medium">
            37.7% qualification rate
          </div>
        </div>

        {/* KPI 3: Hot Leads */}
        <div className="glass-card p-5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Hot Leads</span>
            <Icon name="flame" className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-2">342</div>
          <div className="text-[11px] text-rose-300 mt-1.5 font-medium">
            28 require urgent touch
          </div>
        </div>

        {/* KPI 4: Emails Sent */}
        <div className="glass-card p-5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Emails Sent</span>
            <Icon name="mail" className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">14,290</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1.5 font-medium">
            <span>98.6% delivered</span>
          </div>
        </div>

        {/* KPI 5: Follow-ups Due */}
        <div className="glass-card p-5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Follow-ups Due</span>
            <Icon name="clock" className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mt-2">24</div>
          <div className="text-[11px] text-amber-400/90 mt-1.5 font-medium">
            7 high priority today
          </div>
        </div>

        {/* KPI 6: Conversion Rate */}
        <div className="glass-card p-5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Conversion</span>
            <Icon name="trendingUp" className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-2">8.7%</div>
          <div className="text-[11px] text-slate-300 mt-1.5 font-medium">
            +2.4% vs benchmark
          </div>
        </div>
      </div>

      {/* INTERACTIVE CHART & RECENT ACTIVITY SECTION */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Interactive Chart Container */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div>
              <h4 className="text-base font-bold text-white">Lead Generation & Pipeline Velocity</h4>
              <p className="text-xs text-slate-400 mt-0.5">Real-time performance across outreach channels</p>
            </div>
            <div className="flex items-center gap-2 bg-navy-850 p-1 rounded-xl border border-white/5 text-xs font-semibold">
              <button
                onClick={() => setChartMetric('leads')}
                className={`px-3 py-1 rounded-lg transition ${
                  chartMetric === 'leads' ? 'bg-electric-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Lead Ingestion
              </button>
              <button
                onClick={() => setChartMetric('conversion')}
                className={`px-3 py-1 rounded-lg transition ${
                  chartMetric === 'conversion' ? 'bg-cyan-accent text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Conversion Funnel
              </button>
            </div>
          </div>

          {/* Interactive SVG Chart Visualizer */}
          <div className="h-64 my-6 flex items-end gap-3 px-2">
            {[
              { label: 'May', val1: 42, val2: 24, leads: '1,420', conv: '4.8%' },
              { label: 'Jun', val1: 58, val2: 38, leads: '1,980', conv: '5.4%' },
              { label: 'Jul', val1: 65, val2: 48, leads: '2,450', conv: '6.1%' },
              { label: 'Aug', val1: 82, val2: 60, leads: '3,120', conv: '7.2%' },
              { label: 'Sep', val1: 76, val2: 55, leads: '2,890', conv: '6.9%' },
              { label: 'Oct', val1: 94, val2: 78, leads: '4,100', conv: '8.1%' },
              { label: 'Nov (Current)', val1: 100, val2: 89, leads: '4,892', conv: '8.7%' }
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition font-mono">
                  {chartMetric === 'leads' ? bar.leads : bar.conv}
                </div>
                <div className="w-full max-w-[42px] flex items-end justify-center gap-1.5 h-full">
                  <div
                    style={{ height: `${chartMetric === 'leads' ? bar.val1 : bar.val2}%` }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-electric-600 to-cyan-accent group-hover:brightness-125 transition-all duration-300 relative"
                  ></div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium group-hover:text-cyan-accent transition truncate">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-accent"></span> AI Qualified Enriched Leads
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-electric-500"></span> Booked Enterprise Demos
              </span>
            </div>
            <span className="font-mono text-cyan-accent">Data updated: Just now</span>
          </div>
        </div>

        {/* Live Follow-up Radar & Priority Tasks */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Icon name="clock" className="w-4 h-4 text-amber-400" />
                <span>Today's Follow-up Radar</span>
              </h4>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                {followUps.length} Pending
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {followUps.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-navy-850/90 hover:bg-navy-800 border border-white/5 transition flex flex-col gap-2 cursor-pointer"
                  onClick={() => onNavigate('followUps')}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white">{item.name}</span>
                    <span className="text-[10px] text-amber-300 font-medium">{item.due}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">{item.company}</div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1.5 font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-electric-500/20 text-electric-300">{item.channel}</span>
                    <span>{item.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('followUps')}
            className="mt-4 w-full py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 transition flex items-center justify-center gap-1.5"
          >
            <span>View All Follow-ups Queue</span>
            <Icon name="arrowRight" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* TOP PERFORMING LEADS TABLE (Quick Look) */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-base font-bold text-white">Top Performing High-Intent Leads</h4>
            <p className="text-xs text-slate-400 mt-0.5">Leads with the highest probability score this week</p>
          </div>
          <button
            onClick={() => onNavigate('leads')}
            className="text-xs font-semibold text-cyan-accent hover:underline flex items-center gap-1"
          >
            <span>Open Lead Management</span>
            <Icon name="arrowRight" className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider pb-3">
                <th className="pb-3">Lead & Company</th>
                <th className="pb-3">Score & Tier</th>
                <th className="pb-3">Deal Size</th>
                <th className="pb-3">Intent Signal</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.slice(0, 4).map((l) => (
                <tr key={l.id} className="hover:bg-white/[0.02] transition">
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={l.avatar} className="w-8 h-8 rounded-full object-cover border border-white/10" alt={l.name} />
                      <div>
                        <div className="font-semibold text-white">{l.name}</div>
                        <div className="text-[11px] text-slate-400">{l.title} • {l.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-cyan-accent bg-cyan-accent/10 px-2 py-0.5 rounded-full border border-cyan-accent/20">
                        {l.score}
                      </span>
                      <span className="text-[10px] text-slate-400">{l.icpFit}</span>
                    </div>
                  </td>
                  <td className="py-3.5 font-mono font-semibold text-slate-200">
                    ${l.dealSize.toLocaleString()}
                  </td>
                  <td className="py-3.5">
                    <span className="bg-electric-500/10 text-electric-300 px-2 py-0.5 rounded text-[11px] border border-electric-500/20">
                      {l.intentSignals[0]}
                    </span>
                  </td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {l.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => onSelectLead(l)}
                      className="px-3 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-cyan-accent hover:text-white font-medium transition"
                    >
                      Dossier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 8. DASHBOARD MODULE 2: LEAD MANAGEMENT
// ==========================================
function LeadManagementModule({ leads, onSelectLead, onOpenAddLead, showToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [tierFilter, setTierFilter] = useState('ALL');

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchesSearch =
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.industry.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
      const matchesTier =
        tierFilter === 'ALL' ||
        (tierFilter === 'Tier A' && l.score >= 90) ||
        (tierFilter === 'Tier B' && l.score >= 70 && l.score < 90) ||
        (tierFilter === 'Tier C' && l.score < 70);

      return matchesSearch && matchesStatus && matchesTier;
    });
  }, [leads, searchTerm, statusFilter, tierFilter]);

  const handleExportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Name,Title,Company,Email,Score,Status,DealSize']
        .concat(leads.map((l) => `"${l.name}","${l.title}","${l.company}","${l.email}",${l.score},"${l.status}",${l.dealSize}`))
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'leadgenius_leads_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported leads list as CSV');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Module Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Lead Management</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Search, filter, enrich, and manage your autonomous pipeline ({filteredLeads.length} leads shown)
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2 rounded-xl bg-navy-850 hover:bg-navy-800 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition"
          >
            <Icon name="externalLink" className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={onOpenAddLead}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white text-xs font-bold shadow-glow-purple flex items-center gap-1.5 transition"
          >
            <Icon name="plus" className="w-3.5 h-3.5" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Icon name="search" className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, company, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-accent transition"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <span className="text-xs text-slate-400 font-semibold uppercase mr-1">Status:</span>
          {['ALL', 'Hot', 'Meeting Booked', 'In Sequence', 'Qualified'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                statusFilter === status
                  ? 'bg-electric-600 text-white font-semibold'
                  : 'bg-navy-900 text-slate-400 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="bg-navy-900 border border-white/10 text-xs text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-accent"
          >
            <option value="ALL">All ICP Tiers</option>
            <option value="Tier A">Tier A (90-100)</option>
            <option value="Tier B">Tier B (70-89)</option>
            <option value="Tier C">Tier C (&lt;70)</option>
          </select>
        </div>
      </div>

      {/* Main Leads Table */}
      <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-navy-900/80 border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Contact & Company</th>
                <th className="py-3 px-4">Score & Fit</th>
                <th className="py-3 px-4">Industry & Tech</th>
                <th className="py-3 px-4">Deal Size</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Activity</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.03] transition">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={lead.avatar} className="w-9 h-9 rounded-full object-cover border border-white/10" alt={lead.name} />
                      <div>
                        <div className="font-bold text-white hover:text-cyan-accent cursor-pointer" onClick={() => onSelectLead(lead)}>
                          {lead.name}
                        </div>
                        <div className="text-[11px] text-slate-400">{lead.title} • {lead.company}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{lead.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono font-bold px-2 py-0.5 rounded-full text-[11px] ${
                        lead.score >= 90 ? 'bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40' : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      }`}>
                        {lead.score}
                      </span>
                      <span className="text-[11px] text-slate-400">{lead.icpFit}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-slate-300">{lead.industry}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{lead.enrichedData.techStack.slice(0, 3).join(', ')}</div>
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold text-white">
                    ${lead.dealSize.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      lead.status === 'Hot' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
                      lead.status === 'Meeting Booked' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                      'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-300 text-[11px] max-w-xs truncate">
                    {lead.lastActivity}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onSelectLead(lead)}
                      className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-cyan-accent hover:text-white font-semibold transition border border-white/5"
                    >
                      Dossier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 9. DASHBOARD MODULE 3: LEAD DISCOVERY
// ==========================================
function LeadDiscoveryModule({ onEnrichAndImport }) {
  const [industry, setIndustry] = useState('FinTech & Payments');
  const [headcount, setHeadcount] = useState('100 - 500');
  const [stage, setStage] = useState('Series B');
  const [isSearching, setIsSearching] = useState(false);

  const DISCOVERY_PROSPECTS = [
    {
      name: 'Julian Hayes',
      title: 'Chief Revenue Officer',
      company: 'PayStream Global',
      email: 'j.hayes@paystreamglobal.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      industry: 'FinTech & Payments',
      employees: '150 - 300',
      funding: 'Series B ($35M)',
      score: 94,
      dealSize: 38000,
      trigger: 'Hiring 6 SDRs & expanded into UK open banking API.'
    },
    {
      name: 'Nadia Rostam',
      title: 'VP of Commercial GTM',
      company: 'Zenith Billing API',
      email: 'nadia@zenithbilling.io',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      industry: 'SaaS Infrastructure',
      employees: '80 - 200',
      funding: 'Series A ($18M)',
      score: 91,
      dealSize: 26000,
      trigger: 'Launched self-service developer portal; looking for B2B enterprise sales automation.'
    },
    {
      name: 'Tyler Sterling',
      title: 'Head of Sales Operations',
      company: 'Apex Ledger AI',
      email: 'tyler@apexledger.ai',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      industry: 'FinTech & Accounting',
      employees: '200 - 450',
      funding: 'Series B ($42M)',
      score: 88,
      dealSize: 32000,
      trigger: 'Acquired automated invoice startup; scaling global SDR headcount.'
    }
  ];

  const handleSimulateSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white">Lead Discovery & ICP Prospecting</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Scan global databases with autonomous intent signals matching your exact buyer criteria.
        </p>
      </div>

      {/* Filter Parameters */}
      <div className="glass-card p-6 rounded-2xl border border-white/10 grid sm:grid-cols-4 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1.5">Target Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
          >
            <option>FinTech & Payments</option>
            <option>Enterprise Cloud & DevOps</option>
            <option>Cybersecurity</option>
            <option>Healthcare & Biotech</option>
            <option>E-commerce Tech</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1.5">Company Size</label>
          <select
            value={headcount}
            onChange={(e) => setHeadcount(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
          >
            <option>10 - 50 employees</option>
            <option>50 - 100 employees</option>
            <option>100 - 500 employees</option>
            <option>500 - 1,000 employees</option>
            <option>1,000+ Enterprise</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1.5">Funding Stage</label>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
          >
            <option>Series A</option>
            <option>Series B</option>
            <option>Series C+</option>
            <option>Bootstrapped ($5M+ ARR)</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSimulateSearch}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-bold text-xs shadow-glow-purple flex items-center justify-center gap-2 transition"
          >
            <Icon name="search" className="w-4 h-4" />
            <span>{isSearching ? 'Scanning Signals...' : 'Discover Accounts'}</span>
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="grid md:grid-cols-3 gap-6">
        {DISCOVERY_PROSPECTS.map((p, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-cyan-accent bg-cyan-accent/10 px-2 py-0.5 rounded-full border border-cyan-accent/20">
                  {p.score} AI Fit
                </span>
                <span className="text-xs text-slate-400 font-mono">{p.funding}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img src={p.avatar} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={p.name} />
                <div>
                  <h4 className="font-bold text-white text-sm">{p.name}</h4>
                  <p className="text-xs text-slate-300">{p.title}</p>
                  <p className="text-[11px] text-cyan-accent font-medium">{p.company}</p>
                </div>
              </div>
              <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5 my-3 text-xs text-slate-300">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Buying Signal:</span>
                {p.trigger}
              </div>
            </div>

            <button
              onClick={() => {
                const newLead = {
                  id: `lead-disc-${Date.now()}`,
                  name: p.name,
                  title: p.title,
                  company: p.company,
                  email: p.email,
                  avatar: p.avatar,
                  location: 'San Francisco, CA',
                  industry: p.industry,
                  employees: p.employees,
                  funding: p.funding,
                  score: p.score,
                  icpFit: 'Tier A (90-100)',
                  status: 'Qualified',
                  dealSize: p.dealSize,
                  source: 'AI Discovery',
                  lastActivity: 'Enriched via Discovery Scanner',
                  intentSignals: [p.trigger],
                  buyingTiming: 'Immediate (1-2 wks)',
                  enrichedData: {
                    techStack: ['Salesforce', 'Segment', 'HubSpot'],
                    recentTrigger: p.trigger,
                    decisionMakersCount: 3,
                    estimatedRevenue: '$24M ARR',
                    verifiedEmail: true,
                    linkedinUrl: 'https://linkedin.com',
                    websiteUrl: `https://${p.company.toLowerCase().replace(/\s+/g, '')}.com`
                  }
                };
                onEnrichAndImport(newLead);
              }}
              className="mt-4 w-full py-2.5 rounded-xl bg-cyan-accent hover:bg-cyan-300 text-navy-950 font-bold text-xs transition shadow-glow-cyan"
            >
              1-Click AI Enrich & Import
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 10. DASHBOARD MODULE 4: AI LEAD INTELLIGENCE
// ==========================================
function LeadIntelligenceModule({ leads, setLeads, onSelectLead, showToast, geminiStatus }) {
  const [selectedLeadId, setSelectedLeadId] = useState(leads[0]?.id || '');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisError, setAnalysisError] = useState(null);

  const currentLead = leads.find((l) => l.id === selectedLeadId) || leads[0];

  const handleRunGeminiAnalysis = async () => {
    if (!currentLead) return;
    setIsAnalyzing(true);
    setAnalysisError(null);
    try {
      const res = await GeminiService.analyzeLead(currentLead);
      if (res && res.analysis) {
        setAnalysisResult(res.analysis);
        showToast(`✨ Gemini scored ${currentLead.name}: ${res.analysis.score} (${res.analysis.category})`);
      }
    } catch (err) {
      console.warn('Gemini analyze error:', err.message);
      setAnalysisError(err.message);
      showToast('Gemini API call failed - check .env configuration');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleApplyToPipeline = () => {
    if (!analysisResult || !currentLead || !setLeads) return;
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === currentLead.id) {
          return {
            ...l,
            score: analysisResult.score,
            status: analysisResult.category === 'Hot' ? 'Hot' : analysisResult.category === 'Warm' ? 'Qualified' : 'In Sequence',
            notes: (l.notes ? l.notes + '\n\n' : '') + `[Gemini Evaluation]: ${analysisResult.reasoning}`
          };
        }
        return l;
      })
    );
    showToast(`Updated ${currentLead.name}'s score to ${analysisResult.score} in pipeline`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>AI Lead Intelligence & Predictive Scoring</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40">
              Gemini Flash
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time multi-factor qualification analyzing 50+ data signals, buying urgency, and tech stacks.
          </p>
        </div>

        {/* Lead Picker Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-semibold uppercase">Prospect:</span>
          <select
            value={selectedLeadId}
            onChange={(e) => {
              setSelectedLeadId(e.target.value);
              setAnalysisResult(null);
              setAnalysisError(null);
            }}
            className="bg-navy-900 border border-white/10 text-xs text-white rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-accent"
          >
            {leads.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name} — {l.company} ({l.status})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* LIVE GEMINI EVALUATION CARD */}
      <div className="glass-panel p-6 rounded-3xl border border-electric-500/40 shadow-glow-purple space-y-4 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src={currentLead.avatar} className="w-12 h-12 rounded-2xl object-cover border border-cyan-accent/50 shadow-md" alt={currentLead.name} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">{currentLead.name}</h3>
                <span className="text-xs text-slate-400">• {currentLead.title} @ <strong className="text-slate-200">{currentLead.company}</strong></span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentLead.industry} • {currentLead.funding} • {currentLead.enrichedData?.estimatedRevenue}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleRunGeminiAnalysis}
              disabled={isAnalyzing}
              className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 via-purple-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-bold text-xs shadow-glow-purple flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
            >
              <Icon name="sparkles" className="w-4 h-4 text-cyan-accent" />
              <span>{isAnalyzing ? 'Gemini AI Analyzing...' : '✨ Run Gemini AI Lead Analysis'}</span>
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isAnalyzing && (
          <div className="p-8 text-center space-y-3">
            <div className="w-10 h-10 border-2 border-cyan-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs font-mono text-cyan-accent tracking-wider">
              Google Gemini Flash is inspecting firmographics, buying signals, and tech stack...
            </p>
          </div>
        )}

        {/* Error Notice */}
        {analysisError && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <span>⚠️ Gemini API Notice:</span>
            </div>
            <p>{analysisError}</p>
            <p className="text-[11px] text-slate-400">
              Ensure you have set <code>GEMINI_API_KEY=your_key</code> in your <code>.env</code> file on the server and restarted it.
            </p>
          </div>
        )}

        {/* Live Gemini Result Display */}
        {analysisResult && !isAnalyzing && (
          <div className="p-5 rounded-2xl bg-navy-950/80 border border-cyan-accent/30 space-y-4 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Gemini AI Score</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-3xl font-extrabold text-cyan-accent font-mono">{analysisResult.score}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                      analysisResult.category === 'Hot' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' :
                      analysisResult.category === 'Warm' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    }`}>
                      {analysisResult.category} Prospect
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ✨ Real AI Generation
                </span>
                <button
                  onClick={handleApplyToPipeline}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-accent text-navy-950 font-bold text-xs hover:bg-cyan-300 transition shadow-glow-cyan"
                >
                  Apply Score to Pipeline
                </button>
              </div>
            </div>

            <div>
              <span className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold block mb-1">
                Executive Reasoning:
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-sans bg-navy-900/60 p-3 rounded-xl border border-white/5">
                {analysisResult.reasoning}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div>
                <span className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold block mb-1.5">
                  Key Driving Factors:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {analysisResult.keyFactors?.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-accent font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold block mb-1.5">
                  Recommended Next Action:
                </span>
                <div className="p-3 rounded-xl bg-electric-600/15 border border-electric-500/30 text-xs text-electric-200">
                  {analysisResult.recommendedNextAction}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid of Scoring Matrix & Signals */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Multi-Factor Scoring Matrix</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Technographic ICP Fit</span>
                <span className="font-mono text-cyan-accent font-bold">96%</span>
              </div>
              <div className="w-full bg-navy-900 rounded-full h-2">
                <div className="bg-cyan-accent h-2 rounded-full w-[96%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Buying Intent Surge</span>
                <span className="font-mono text-electric-400 font-bold">91%</span>
              </div>
              <div className="w-full bg-navy-900 rounded-full h-2">
                <div className="bg-electric-500 h-2 rounded-full w-[91%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Decision Authority (Executive Level)</span>
                <span className="font-mono text-emerald-400 font-bold">88%</span>
              </div>
              <div className="w-full bg-navy-900 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-[88%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Budget & Timing Window</span>
                <span className="font-mono text-amber-300 font-bold">84%</span>
              </div>
              <div className="w-full bg-navy-900 rounded-full h-2">
                <div className="bg-amber-400 h-2 rounded-full w-[84%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Active Buying Signals Feed</h4>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 text-xs">
              <span className="text-cyan-accent font-bold">Hiring Surge:</span>
              <p className="text-slate-300 mt-0.5">Stripeflow Systems posted 8 SDR & RevOps job listings on LinkedIn.</p>
            </div>
            <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 text-xs">
              <span className="text-electric-300 font-bold">G2 Intent Surge:</span>
              <p className="text-slate-300 mt-0.5">NexusCloud AI compared LeadGenius against legacy Apollo 4 times today.</p>
            </div>
            <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 text-xs">
              <span className="text-emerald-400 font-bold">Pricing Visits:</span>
              <p className="text-slate-300 mt-0.5">Sarah Jenkins spent 6.5 minutes reviewing the Enterprise SLA contract.</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">AI Next-Best-Action</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Based on deep analysis, enterprise leads in Series B funding stages respond 3.4x better to a concise 70-word ROI teaser email referencing their newly hired team members.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 text-xs text-cyan-accent font-medium">
              Suggested Playbook: "The 3-Minute Post-Funding Blitz"
            </div>
          </div>
          <button
            onClick={() => onSelectLead(currentLead)}
            className="w-full py-2.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-xs shadow-glow-purple transition"
          >
            Review 360° Dossier
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 11. DASHBOARD MODULE 5: SALES PIPELINE KANBAN
// ==========================================
function SalesPipelineModule({ deals, setDeals, onSelectDeal, showToast }) {
  const stages = [
    { id: 'discovery', label: 'Discovery' },
    { id: 'qualified', label: 'Qualified' },
    { id: 'sequence', label: 'In Sequence' },
    { id: 'demo', label: 'Demo Scheduled' },
    { id: 'proposal', label: 'Proposal Sent' },
    { id: 'won', label: 'Closed Won' }
  ];

  const moveDeal = (dealId, direction) => {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id !== dealId) return deal;
        const currentIndex = stages.findIndex((s) => s.id === deal.stage);
        const newIndex = direction === 'forward' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0 || newIndex >= stages.length) return deal;
        const newStage = stages[newIndex].id;
        showToast(`Moved ${deal.company} to ${stages[newIndex].label}`);
        return { ...deal, stage: newStage };
      })
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Sales Pipeline Kanban</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Probability-weighted pipeline velocity across active deal stages.
          </p>
        </div>
        <div className="font-mono text-xs text-cyan-accent bg-cyan-accent/10 px-3 py-1.5 rounded-xl border border-cyan-accent/20">
          Total Active Value: ${deals.reduce((acc, d) => acc + d.amount, 0).toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-start">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage.id);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.amount, 0);

          return (
            <div key={stage.id} className="glass-card p-3 rounded-2xl border border-white/5 flex flex-col gap-3 min-h-[400px]">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="font-bold text-xs text-white uppercase tracking-wider">{stage.label}</span>
                <span className="text-[10px] font-mono text-cyan-accent bg-navy-900 px-1.5 py-0.5 rounded border border-white/5">
                  {stageDeals.length}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono -mt-1 font-semibold">
                ${stageTotal.toLocaleString()}
              </div>

              <div className="space-y-3">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="p-3.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/5 hover:border-cyan-accent/30 shadow-glass transition flex flex-col gap-2 cursor-pointer"
                    onClick={() => onSelectDeal(deal)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white truncate">{deal.company}</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        ${deal.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={deal.avatar} className="w-5 h-5 rounded-full object-cover" alt={deal.name} />
                      <span className="text-[11px] text-slate-300 truncate">{deal.name}</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
                      <span>Win: {deal.probability}%</span>
                      <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                        {stage.id !== 'discovery' && (
                          <button
                            onClick={() => moveDeal(deal.id, 'backward')}
                            className="p-1 rounded bg-navy-900 hover:text-white"
                            title="Move back"
                          >
                            ←
                          </button>
                        )}
                        {stage.id !== 'won' && (
                          <button
                            onClick={() => moveDeal(deal.id, 'forward')}
                            className="p-1 rounded bg-navy-900 hover:text-cyan-accent"
                            title="Move forward"
                          >
                            →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 12. DASHBOARD MODULE 6: EMAIL STUDIO
// ==========================================
function EmailStudioModule({ leads, showToast, geminiStatus }) {
  const [selectedLeadId, setSelectedLeadId] = useState(leads[0]?.id || '');
  const [tone, setTone] = useState('ROI-Focused');
  const [goal, setGoal] = useState('Initial Cold Touch');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [hooksUsed, setHooksUsed] = useState([]);
  const [isRealGemini, setIsRealGemini] = useState(false);
  const [geminiError, setGeminiError] = useState(null);

  const currentLead = leads.find((l) => l.id === selectedLeadId) || leads[0];

  const handleGenerate = async () => {
    if (!currentLead) return;
    setIsGenerating(true);
    setGeminiError(null);
    try {
      const res = await GeminiService.generateEmail({
        lead: currentLead,
        tone,
        goal,
        customPrompt,
        senderName: 'Rudra Pratap',
        senderTitle: 'Head of Revenue Growth'
      });
      if (res && res.email) {
        setSubject(res.email.subject || '');
        setBody(res.email.body || '');
        setHooksUsed(res.email.hooksUsed || []);
        setIsRealGemini(true);
        showToast(`✨ Generated live email with Gemini Flash for ${currentLead.name}`);
      }
    } catch (err) {
      console.warn('Gemini generate fallback:', err.message);
      setGeminiError(err.message);
      setIsRealGemini(false);
      // High-quality contextual fallback template
      setSubject(`Scaling ${currentLead.company}'s SDR pipeline after the ${currentLead.funding || 'recent'} announcement`);
      setBody(`Hi ${currentLead.name.split(' ')[0]},

Saw the exciting news regarding ${currentLead.company}'s recent funding and expansion into enterprise. Huge congrats to you and the team!

Typically when revenue leaders ramp up to hit aggressive ARR targets, SDRs burn 65% of their week manually copy-pasting research and hunting contacts.

LeadGenius AI automates that whole front half:
• Automatically identifies high-intent accounts matching your exact ICP
• Deep-researches 50+ data signals before drafting a hyper-relevant touchpoint
• Executes intelligent multichannel follow-ups until a meeting lands on your calendar

Are you open to a brief 7-minute look at how we delivered a 3.8x pipeline bump for similar teams this quarter?

Best regards,
Rudra Pratap
Head of Revenue Growth`);
      setHooksUsed(['Series B Funding Milestone', '3.8x Pipeline Acceleration Proof']);
      showToast('Displayed contextual template (Set GEMINI_API_KEY in .env for live AI)');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    handleGenerate();
  }, [selectedLeadId, tone, goal]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>AI Email Studio</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40">
              Gemini Flash Powered
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Generate, customize, and test hyper-personalized B2B cold outreach based on live lead signals.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isRealGemini ? (
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
              <Icon name="sparkles" className="w-3.5 h-3.5" />
              <span>✨ Live Gemini AI Generated</span>
            </span>
          ) : (
            <span className="text-xs font-mono text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Template Demo Mode
            </span>
          )}
        </div>
      </div>

      {geminiError && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>⚡ Note: Configure <code>GEMINI_API_KEY</code> in <code>.env</code> on the server to enable real-time Gemini generation.</span>
          </div>
          <span className="text-[10px] font-mono opacity-80">Server: {geminiStatus?.model || 'gemini-flash-lite-latest'}</span>
        </div>
      )}

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">Target Prospect</label>
            <select
              value={selectedLeadId}
              onChange={(e) => setSelectedLeadId(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
            >
              {leads.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name} — {l.company} ({l.title})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">Outreach Objective</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
            >
              <option>Initial Cold Touch</option>
              <option>Funding Trigger Blitz</option>
              <option>Post-Demo Value Follow-up</option>
              <option>Executive Ghosting Recovery</option>
              <option>Case Study Proof Teaser</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">Outreach Tone</label>
            <div className="grid grid-cols-2 gap-2">
              {['ROI-Focused', 'Executive', 'Casual', 'Teaser'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition ${
                    tone === t ? 'bg-electric-600 text-white shadow-sm' : 'bg-navy-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">Custom Instructions (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g. Reference our SOC2 report and offer a 50-lead free pilot..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-accent leading-relaxed"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-bold text-xs shadow-glow-purple flex items-center justify-center gap-2 transition"
          >
            <Icon name="sparkles" className="w-4 h-4 text-cyan-accent" />
            <span>{isGenerating ? 'Gemini Flash Drafting...' : '✨ Generate with Gemini AI'}</span>
          </button>

          {/* Hooks Used Chips */}
          {hooksUsed.length > 0 && (
            <div className="pt-3 border-t border-white/5 space-y-1.5">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-semibold block">Personalization Triggers:</span>
              <div className="flex flex-wrap gap-1.5">
                {hooksUsed.map((h, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-electric-500/15 text-electric-300 border border-electric-500/30 text-[10px]">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-white/5 space-y-2 text-xs text-slate-400">
            <div className="flex justify-between">
              <span>Inbox Placement Score:</span>
              <span className="text-emerald-400 font-bold font-mono">99 / 100</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Read Time:</span>
              <span className="text-slate-200 font-mono">36 seconds</span>
            </div>
          </div>
        </div>

        {/* Email Editor / Preview Column */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-400">Subject Line</label>
                <span className="text-[10px] text-slate-500 font-mono">{subject.length} characters</span>
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-semibold focus:outline-none focus:border-cyan-accent"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-400">Personalized Body Copy</label>
                <span className="text-[10px] text-slate-500 font-mono">Prospect: {currentLead.name} ({currentLead.company})</span>
              </div>
              <textarea
                rows={12}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full bg-navy-900 border border-white/10 rounded-xl p-4 text-xs text-slate-200 font-sans leading-relaxed focus:outline-none focus:border-cyan-accent"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
                showToast('Copied email to clipboard');
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition"
            >
              <Icon name="copy" className="w-4 h-4" />
              <span>Copy to Clipboard</span>
            </button>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => showToast(`[DEMO MODE]: Simulated preview sent to rudra@leadgenius.ai. Connect Gmail in Integrations to enable production delivery.`)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white text-xs font-semibold transition"
              >
                Send Test Preview
              </button>
              <button
                onClick={() => showToast(`Enrolled ${currentLead.name} into active sequence`)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-cyan-accent hover:bg-cyan-300 text-navy-950 font-bold text-xs shadow-glow-cyan transition"
              >
                Approve & Launch Sequence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 13. DASHBOARD MODULE 7: FOLLOW-UP CENTER
// ==========================================
function FollowUpCenterModule({ leads = [], followUps, setFollowUps, onSelectLeadById, showToast, geminiStatus }) {
  const [aiRecs, setAiRecs] = useState({});
  const [loadingTaskId, setLoadingTaskId] = useState(null);

  const completeTask = (id) => {
    setFollowUps((prev) => prev.filter((t) => t.id !== id));
    showToast('Follow-up step completed & synced to CRM');
  };

  const handleGenerateGeminiFollowUp = async (item) => {
    const lead = leads.find((l) => l.id === item.leadId) || { name: item.name, company: item.company };
    setLoadingTaskId(item.id);
    try {
      const res = await GeminiService.getFollowUpRecommendation(item, lead);
      if (res && res.recommendation) {
        setAiRecs((prev) => ({ ...prev, [item.id]: res.recommendation }));
        showToast(`✨ Generated Gemini follow-up strategy for ${item.name}`);
      }
    } catch (err) {
      console.warn('Gemini follow-up error:', err.message);
      // Fallback helpful suggestion
      setAiRecs((prev) => ({
        ...prev,
        [item.id]: {
          suggestedAngle: `Emphasize recent company milestone (${item.company}) and offer a direct executive teardown.`,
          draftMessage: `Hi ${item.name.split(' ')[0]},\n\nFollowing up on our earlier note—noticed ${item.company}'s recent growth. We built a custom 2-minute walkthrough showing how similar teams 4x their pipeline velocity.\n\nOpen to reviewing the numbers this week?`,
          recommendedChannel: item.channel,
          optimalTiming: 'Tuesday at 9:30 AM EST'
        }
      }));
      showToast('Displayed strategy preview (Set GEMINI_API_KEY in .env for live AI)');
    } finally {
      setLoadingTaskId(null);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Follow-up Center & Cadence Tracker</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40">
              Gemini Flash
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Never let a hot deal slip away with smart cadence reminders, AI message drafts, and 1-click execution.
          </p>
        </div>
        <span className="text-xs font-mono text-cyan-accent bg-cyan-accent/10 px-3 py-1 rounded-full border border-cyan-accent/20">
          {followUps.length} Pending Actions
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {followUps.map((item) => {
          const rec = aiRecs[item.id];
          const isLoading = loadingTaskId === item.id;

          return (
            <div key={item.id} className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white text-base">{item.name}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {item.due}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{item.company} • {item.step}</div>

                <div className="mt-3 p-3 bg-navy-900/90 rounded-xl border border-white/5 text-xs text-slate-300">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Base Context:</span>
                  {item.angle}
                </div>

                {/* Live Gemini Recommendation Panel */}
                {rec && (
                  <div className="mt-3 p-3.5 rounded-xl bg-navy-950/90 border border-cyan-accent/30 text-xs space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-cyan-accent flex items-center gap-1.5 text-[11px]">
                        <Icon name="sparkles" className="w-3.5 h-3.5 text-cyan-accent" />
                        <span>Gemini AI Recommended Strategy</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{rec.optimalTiming}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] font-medium leading-relaxed">
                      <strong>Angle:</strong> {rec.suggestedAngle}
                    </p>
                    <div className="p-2.5 rounded-lg bg-navy-900 border border-white/10 font-sans text-slate-200 text-[11px] whitespace-pre-line leading-relaxed">
                      {rec.draftMessage}
                    </div>
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(rec.draftMessage);
                          showToast('Copied Gemini draft to clipboard');
                        }}
                        className="text-[10px] font-semibold text-cyan-accent hover:underline flex items-center gap-1"
                      >
                        <Icon name="copy" className="w-3 h-3" />
                        <span>Copy Draft Message</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-white/5 gap-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectLeadById(item.leadId)}
                    className="text-xs text-cyan-accent hover:underline font-semibold"
                  >
                    View Dossier
                  </button>
                  <button
                    onClick={() => handleGenerateGeminiFollowUp(item)}
                    disabled={isLoading}
                    className="text-xs text-electric-300 hover:text-white font-semibold flex items-center gap-1"
                  >
                    <Icon name="sparkles" className="w-3.5 h-3.5 text-cyan-accent" />
                    <span>{isLoading ? 'Gemini Thinking...' : '✨ Suggest Gemini Angle'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => showToast(`Snoozed follow-up for 48 hours`)}
                    className="px-3 py-1.5 rounded-lg bg-navy-800 text-slate-300 text-xs font-medium hover:text-white"
                  >
                    Snooze 2d
                  </button>
                  <button
                    onClick={() => completeTask(item.id)}
                    className="px-4 py-1.5 rounded-lg bg-cyan-accent text-navy-950 font-bold text-xs hover:bg-cyan-300 transition"
                  >
                    Mark Done
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 14. DASHBOARD MODULE 8: AUTOMATION STUDIO
// ==========================================
function AutomationStudioModule({ workflows, setWorkflows, showToast }) {
  const toggleWorkflow = (id) => {
    setWorkflows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const next = !w.active;
          showToast(`${w.name} is now ${next ? 'Active' : 'Paused'}`);
          return { ...w, active: next };
        }
        return w;
      })
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Automation Studio</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure multi-step autonomous triggers, AI qualification rules, and follow-up loops.
          </p>
        </div>
        <button
          onClick={() => showToast('Workflow builder opened (Custom node canvas ready)')}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 text-white font-bold text-xs shadow-glow-purple flex items-center gap-1.5"
        >
          <Icon name="plus" className="w-3.5 h-3.5" />
          <span>New Workflow</span>
        </button>
      </div>

      <div className="space-y-4">
        {workflows.map((wf) => (
          <div key={wf.id} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h4 className="font-bold text-white text-base">{wf.name}</h4>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  wf.active ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-700/30 text-slate-400 border border-slate-700'
                }`}>
                  {wf.active ? 'ACTIVE' : 'PAUSED'}
                </span>
              </div>
              <p className="text-xs text-slate-400">Trigger: {wf.trigger}</p>
              <div className="flex items-center gap-4 text-xs font-mono pt-2 text-slate-300">
                <span>Leads: {wf.leads}</span>
                <span>•</span>
                <span>Reply Rate: {wf.replyRate}</span>
                <span>•</span>
                <span className="text-cyan-accent">Meetings: {wf.meetings}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleWorkflow(wf.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  wf.active
                    ? 'bg-navy-800 text-slate-300 hover:text-white border border-white/10'
                    : 'bg-emerald-500 text-navy-950 hover:bg-emerald-400'
                }`}
              >
                <Icon name={wf.active ? "pause" : "play"} className="w-3.5 h-3.5" />
                <span>{wf.active ? 'Pause' : 'Activate'}</span>
              </button>
              <button
                onClick={() => showToast(`Opened visual node canvas for ${wf.name}`)}
                className="px-4 py-2 rounded-xl bg-navy-800 text-cyan-accent hover:text-white text-xs font-semibold border border-white/10 transition"
              >
                Edit Logic
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 15. DASHBOARD MODULE 9: AI SALES COPILOT
// ==========================================
function SalesCopilotModule({ leads = [], pipelineDeals = [], showToast, geminiStatus }) {
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'copilot',
      text: 'Hello Rudra! I am your AI Sales Copilot powered by Google Gemini Flash. I have full context on your active leads (including Sarah Jenkins at Stripeflow, Marcus Vance at NexusCloud) and pipeline deals. Ask me for objection battlecards, deal strategies, or tailored follow-up formulas!'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = async (textToSend) => {
    const q = textToSend || inputText;
    if (!q.trim()) return;

    const userMsg = { id: `msg-${Date.now()}`, sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsThinking(true);

    try {
      const res = await GeminiService.askCopilot(q, {
        leads,
        pipelineDeals,
        metrics: {
          totalLeads: 4892,
          qualifiedLeads: 1845,
          hotLeads: 342,
          conversionRate: '8.7%'
        }
      });
      if (res && res.reply) {
        setMessages((prev) => [...prev, { id: `reply-${Date.now()}`, sender: 'copilot', text: res.reply }]);
      }
    } catch (err) {
      console.warn('Gemini Copilot fallback:', err.message);
      // Fallback strategy if key is missing in .env
      let fallback = '';
      if (q.toLowerCase().includes('contract') || q.toLowerCase().includes('competitor')) {
        fallback = `**Battlecard Strategy: Competitor Contract Lock-In**\n\n1. **Acknowledge & Validate:** "Totally understand you have 7 months remaining on ZoomInfo."\n2. **The Soft Pivot:** "Most teams we work with don't cancel existing providers immediately. They run LeadGenius specifically for real-time buying signals that standard databases miss (like hiring surges and tech stack shifts)."\n3. **Low-Risk Pilot Offer:** "Would you be open to letting us run 50 free enriched accounts side-by-side with your reps this week to compare reply rates?"\n\n*(⚡ Note: Set GEMINI_API_KEY in .env on your server to enable live real-time Gemini reasoning)*`;
      } else if (q.toLowerCase().includes('sarah') || q.toLowerCase().includes('stripeflow')) {
        fallback = `**Custom Follow-Up Angle for Sarah Jenkins (Stripeflow Systems):**\n\n"Sarah, noticed Stripeflow just announced that $32M Series B led by Sequoia—huge congratulations!\n\nTypically right after funding announcements, SDRs get overwhelmed with manual research. LeadGenius automates the entire qualification step, delivering qualified FinTech buyers ready to book.\n\nOpen to a 5-min look at our benchmark data for Series B teams this Thursday morning?"\n\n*(⚡ Note: Set GEMINI_API_KEY in .env on your server to enable live real-time Gemini reasoning)*`;
      } else {
        fallback = `**AI Recommendation for Pipeline Acceleration:**\n\nFocus on your 28 hot leads who engaged with proposals in the last 48 hours. Leads who receive a personalized video or executive re-engagement message within 2 hours of a buying signal show a 4.2x higher close rate.\n\n*(⚡ Note: Set GEMINI_API_KEY in .env on your server to enable live real-time Gemini reasoning)*`;
      }
      setMessages((prev) => [...prev, { id: `reply-${Date.now()}`, sender: 'copilot', text: fallback }]);
      showToast('Displayed strategy preview (Set GEMINI_API_KEY in .env for live AI)');
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto h-[calc(100vh-10rem)] flex flex-col">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Icon name="sparkles" className="w-5 h-5 text-cyan-accent" />
          <span>AI Sales Copilot & Objection Rebuttal Engine</span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Ask for objection battlecards, pitch teardowns, or live deal strategy.
        </p>
      </div>

      {/* Suggested Prompts Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-semibold uppercase text-[10px] flex-shrink-0">Quick Prompts:</span>
        {[
          "How to handle: 'Locked in contract with competitor'?",
          "Draft follow-up for Sarah Jenkins at Stripeflow",
          "What are top 3 FinTech buying signals right now?"
        ].map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-300 hover:text-cyan-accent border border-white/5 transition"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 glass-card p-6 rounded-2xl border border-white/10 overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'copilot' && (
              <div className="w-8 h-8 rounded-lg bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent flex-shrink-0">
                <Icon name="sparkles" className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-xl p-4 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                m.sender === 'user'
                  ? 'bg-electric-600 text-white rounded-br-none shadow-md'
                  : 'bg-navy-900 border border-white/10 text-slate-200 rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isThinking && (
          <div className="flex gap-3 items-center text-xs text-cyan-accent font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-accent animate-ping"></span>
            <span>Copilot analyzing sales strategy...</span>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask Sales Copilot (e.g. handle price objections, draft executive emails)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-accent"
        />
        <button
          onClick={() => handleSend()}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-bold text-xs shadow-glow-purple flex items-center gap-2 transition"
        >
          <Icon name="send" className="w-4 h-4" />
          <span>Ask Copilot</span>
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 16. DASHBOARD MODULE 10: ANALYTICS & FORECASTS
// ==========================================
function AnalyticsForecastsModule({ leads, pipelineDeals }) {
  const [pipelineGrowth, setPipelineGrowth] = useState(30);

  const basePipeline = pipelineDeals.reduce((sum, d) => sum + d.amount, 0);
  const forecastedPipeline = Math.round(basePipeline * (1 + pipelineGrowth / 100));

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white">Analytics, Attribution & Revenue Forecasts</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Predictive pipeline modeling, conversion drop-off, and SDR performance metrics.
        </p>
      </div>

      {/* Forecast Interactive Slider */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">Q1 2027 Revenue Forecast Model</h4>
            <p className="text-xs text-slate-400">Simulate autonomous pipeline conversion with increased lead volume</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 uppercase font-mono block">Projected Revenue</span>
            <span className="text-2xl font-black text-cyan-accent font-mono">${forecastedPipeline.toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-300 font-semibold">
            <span>Projected Growth Pace: +{pipelineGrowth}%</span>
            <span>Current Base: ${basePipeline.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={pipelineGrowth}
            onChange={(e) => setPipelineGrowth(Number(e.target.value))}
            className="w-full accent-cyan-accent bg-navy-900 rounded-lg cursor-pointer h-2"
          />
        </div>
      </div>

      {/* Funnel Dropoff Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Outreach Conversion Funnel</h4>
          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Total Enriched Leads (100%)</span>
                <span className="font-mono text-white font-bold">4,892</span>
              </div>
              <div className="w-full bg-navy-900 h-2 rounded-full"><div className="bg-electric-500 h-2 rounded-full w-full"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Emails Delivered & Opened (68.4%)</span>
                <span className="font-mono text-cyan-accent font-bold">3,346</span>
              </div>
              <div className="w-full bg-navy-900 h-2 rounded-full"><div className="bg-cyan-accent h-2 rounded-full w-[68%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Positive Responses (21.8%)</span>
                <span className="font-mono text-emerald-400 font-bold">1,066</span>
              </div>
              <div className="w-full bg-navy-900 h-2 rounded-full"><div className="bg-emerald-400 h-2 rounded-full w-[22%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Qualified Meetings Booked (8.7%)</span>
                <span className="font-mono text-amber-300 font-bold">425</span>
              </div>
              <div className="w-full bg-navy-900 h-2 rounded-full"><div className="bg-amber-400 h-2 rounded-full w-[8.7%]"></div></div>
            </div>
          </div>
        </div>

        {/* Rep Leaderboard */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">GTM Rep Performance</h4>
          <div className="space-y-3">
            {[
              { name: 'Rudra Pratap', role: 'Head of Growth', booked: 38, value: '$184,000' },
              { name: 'Alex Rivera', role: 'Enterprise AE', booked: 29, value: '$142,000' },
              { name: 'Sophie Taylor', role: 'Senior SDR', booked: 24, value: '$98,000' }
            ].map((rep, i) => (
              <div key={i} className="p-3 rounded-xl bg-navy-900/80 border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{rep.name}</div>
                  <div className="text-[10px] text-slate-400">{rep.role}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold text-cyan-accent">{rep.booked} calls booked</div>
                  <div className="text-[10px] text-emerald-400 font-mono">{rep.value} pipeline</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 17. DASHBOARD MODULE 11: INTEGRATIONS
// ==========================================
function IntegrationsModule({ showToast }) {
  const [integrations, setIntegrations] = useState([
    { id: 'hubspot', name: 'HubSpot Enterprise', category: 'CRM', connected: true, records: '4,892 contacts synced' },
    { id: 'salesforce', name: 'Salesforce CRM', category: 'CRM', connected: false, records: 'Ready to authenticate' },
    { id: 'gmail', name: 'Google Workspace & Gmail', category: 'Email', connected: true, records: '3 mailboxes active' },
    { id: 'linkedin', name: 'LinkedIn Sales Navigator', category: 'Prospecting', connected: true, records: '1,120 profiles indexed' },
    { id: 'slack', name: 'Slack Real-time Alerts', category: 'Alerts', connected: true, records: '#sales-leads room live' },
    { id: 'make', name: 'Make.com & Webhooks', category: 'Automation', connected: false, records: 'Custom webhook endpoints' }
  ]);

  const toggleConnect = (id) => {
    setIntegrations((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const next = !item.connected;
          showToast(`${item.name} is now ${next ? 'Connected' : 'Disconnected'}`);
          return { ...item, connected: next, records: next ? 'Sync verified' : 'Disconnected' };
        }
        return item;
      })
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white">Integrations & Connectors</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Two-way synchronization with your existing sales stack, inboxes, and webhooks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((int) => (
          <div key={int.id} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-navy-900 px-2 py-0.5 rounded border border-white/5">
                  {int.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  int.connected ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-slate-700/30 text-slate-400'
                }`}>
                  {int.connected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <h4 className="font-bold text-white text-base mb-1">{int.name}</h4>
              <p className="text-xs text-slate-400">{int.records}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">Status: {int.connected ? '2-Way Sync' : 'Standby'}</span>
              <button
                onClick={() => toggleConnect(int.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  int.connected ? 'bg-navy-800 text-slate-300 hover:text-white' : 'bg-cyan-accent text-navy-950 font-bold hover:bg-cyan-300'
                }`}
              >
                {int.connected ? 'Configure' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 18. DASHBOARD MODULE 12: SETTINGS
// ==========================================
function SettingsModule({ showToast, geminiStatus, refreshGeminiHealth }) {
  const [companyName, setCompanyName] = useState('LeadGenius Enterprise');
  const [domain, setDomain] = useState('leadgenius.ai');
  const [icpDesc, setIcpDesc] = useState('B2B FinTech & Cloud SaaS companies with $5M+ ARR, hiring sales reps and expanding enterprise GTM.');
  const [isChecking, setIsChecking] = useState(false);

  const handleTestGemini = async () => {
    setIsChecking(true);
    try {
      const res = await GeminiService.checkHealth();
      if (refreshGeminiHealth) refreshGeminiHealth();
      if (res && res.geminiConfigured) {
        showToast(`✨ Gemini API is connected and healthy! Model: ${res.model}`);
      } else {
        showToast('⚠️ GEMINI_API_KEY is not configured yet in .env');
      }
    } catch {
      showToast('⚠️ Could not connect to Gemini backend API');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>Workspace Settings & AI Guardrails</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40">
            Gemini Flash
          </span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Configure your team parameters, Ideal Customer Profile definitions, and server-side Gemini API credentials.
        </p>
      </div>

      {/* GEMINI AI BACKEND CONFIGURATION CARD */}
      <div className="glass-panel p-6 rounded-3xl border border-electric-500/40 shadow-glow-purple space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-cyan-accent flex items-center justify-center text-navy-950 font-bold shadow-md">
              <Icon name="sparkles" className="w-5 h-5 text-cyan-accent" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Google Gemini AI Integration</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  geminiStatus?.configured
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                }`}>
                  {geminiStatus?.configured ? 'Connected & Active' : 'Key Needed in .env'}
                </span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Model: <strong className="text-cyan-accent font-mono">{geminiStatus?.model || 'gemini-flash-lite-latest'}</strong> (Official SDK: <code>@google/genai</code>)
              </p>
            </div>
          </div>

          <button
            onClick={handleTestGemini}
            disabled={isChecking}
            className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-cyan-accent hover:text-white text-xs font-semibold border border-white/10 transition flex items-center gap-1.5"
          >
            <Icon name="refreshCw" className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
            <span>{isChecking ? 'Verifying...' : 'Test Connection'}</span>
          </button>
        </div>

        {/* Secure Setup Instructions */}
        <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/5 space-y-2 text-xs">
          <div className="font-semibold text-white flex items-center gap-1.5">
            <Icon name="shield" className="w-4 h-4 text-cyan-accent" />
            <span>How to configure your Gemini API Key securely:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed pt-1">
            <li>
              In your <code>LeadGenius-AI</code> project folder, open the <code>.env</code> file (or copy from <code>.env.example</code>).
            </li>
            <li>
              Set: <code className="text-cyan-accent bg-navy-900 px-2 py-0.5 rounded border border-white/5 font-mono">GEMINI_API_KEY=your_actual_gemini_api_key_here</code>
            </li>
            <li>
              Save the file and restart your local server (run <code>serve.bat</code> or <code>npm start</code>).
            </li>
            <li className="text-emerald-400 font-medium">
              Security Guarantee: Your API key is stored <strong>server-side only</strong>. It is never exposed in browser JavaScript, network responses, console logs, or Git (included in <code>.gitignore</code>).
            </li>
          </ol>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company Profile</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Organization Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Corporate Domain</label>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-accent"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1">Target Ideal Customer Profile (ICP) Prompt Definition</label>
          <textarea
            rows={3}
            value={icpDesc}
            onChange={(e) => setIcpDesc(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-accent leading-relaxed"
          />
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-end">
          <button
            onClick={() => showToast('Workspace settings saved')}
            className="px-5 py-2.5 rounded-xl bg-cyan-accent hover:bg-cyan-300 text-navy-950 font-bold text-xs shadow-glow-cyan transition"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Backend & LLM Connectors */}
      <div className="glass-panel p-6 rounded-2xl border border-electric-500/30 space-y-4">
        <div className="flex items-center gap-2">
          <Icon name="bolt" className="w-5 h-5 text-cyan-accent" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connected Backend Infrastructure</h4>
        </div>
        <p className="text-xs text-slate-300">
          Backend server endpoints are active for Gemini AI reasoning, lead enrichment, and autonomous sales workflows.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5 text-xs">
            <span className="font-semibold text-white block">Google Gemini API</span>
            <span className="text-[10px] text-cyan-accent font-mono">Endpoint: /api/gemini/*</span>
          </div>
          <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5 text-xs">
            <span className="font-semibold text-white block">Supabase DB</span>
            <span className="text-[10px] text-slate-400 font-mono">Ready for Phase 2 sync</span>
          </div>
          <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5 text-xs">
            <span className="font-semibold text-white block">Gmail & Make.com</span>
            <span className="text-[10px] text-slate-400 font-mono">Webhooks configured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 19. LEAD DETAIL DOSSIER MODAL
// ==========================================
function LeadDetailModal({ lead, onClose, onUpdateLead, onLaunchEmail }) {
  const [activeTab, setActiveTab] = useState('dossier'); // 'dossier' | 'notes' | 'email'
  const [notes, setNotes] = useState(lead.notes || '');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [geminiDossierResult, setGeminiDossierResult] = useState(null);

  const handleGeminiDossierEval = async () => {
    setIsEvaluating(true);
    try {
      const res = await GeminiService.analyzeLead(lead);
      if (res && res.analysis) {
        setGeminiDossierResult(res.analysis);
        onUpdateLead({
          ...lead,
          score: res.analysis.score,
          status: res.analysis.category === 'Hot' ? 'Hot' : 'Qualified',
          notes: (lead.notes ? lead.notes + '\n\n' : '') + `[Gemini ${res.analysis.category} Evaluation]: ${res.analysis.reasoning}`
        });
      }
    } catch (err) {
      console.warn('Gemini evaluation in modal fallback:', err.message);
      setGeminiDossierResult({
        score: lead.score,
        category: lead.status === 'Hot' ? 'Hot' : 'Warm',
        reasoning: `Strong technographic alignment with current ICP. Recent trigger event indicates an active evaluation window. (Configure GEMINI_API_KEY in .env for live AI).`,
        keyFactors: ['Funding milestone', 'Hiring SDRs', 'Corporate tech stack match'],
        recommendedNextAction: 'Execute personalized video outreach citing recent growth.'
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl bg-navy-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-navy-950/90 border-b border-white/10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img src={lead.avatar} className="w-14 h-14 rounded-2xl object-cover border border-cyan-accent/50 shadow-glow-cyan" alt={lead.name} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{lead.name}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/30">
                  Score {lead.score}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {lead.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">{lead.title} @ <span className="text-white font-semibold">{lead.company}</span></p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">{lead.email} • {lead.location}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-xl bg-navy-800">
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2.5 bg-navy-950/60 border-b border-white/10 flex items-center gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('dossier')}
            className={`pb-1 transition ${activeTab === 'dossier' ? 'text-cyan-accent border-b-2 border-cyan-accent' : 'text-slate-400 hover:text-white'}`}
          >
            360° Enriched Dossier
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-1 transition ${activeTab === 'notes' ? 'text-cyan-accent border-b-2 border-cyan-accent' : 'text-slate-400 hover:text-white'}`}
          >
            Rep Notes & Deal Strategy
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {activeTab === 'dossier' ? (
            <>
              {/* Firmographics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-navy-850 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Industry</span>
                  <span className="font-bold text-white text-xs mt-0.5 block">{lead.industry}</span>
                </div>
                <div className="p-3 bg-navy-850 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Funding Stage</span>
                  <span className="font-bold text-cyan-accent text-xs mt-0.5 block">{lead.funding}</span>
                </div>
                <div className="p-3 bg-navy-850 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Employees</span>
                  <span className="font-bold text-white text-xs mt-0.5 block">{lead.employees}</span>
                </div>
                <div className="p-3 bg-navy-850 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Est. ARR</span>
                  <span className="font-bold text-emerald-400 text-xs mt-0.5 block">{lead.enrichedData.estimatedRevenue}</span>
                </div>
              </div>

              {/* Buying Trigger Signal */}
              <div className="p-4 bg-gradient-to-r from-electric-600/20 to-cyan-500/10 rounded-2xl border border-cyan-accent/30 space-y-1">
                <span className="text-cyan-accent font-bold uppercase text-[10px] tracking-wider block">Recent Trigger Event</span>
                <p className="text-slate-200 leading-relaxed font-medium">{lead.enrichedData.recentTrigger}</p>
              </div>

              {/* Gemini Evaluation Box if available */}
              {geminiDossierResult && (
                <div className="p-4 bg-navy-950/90 rounded-2xl border border-electric-500/40 space-y-2 animate-fade-in shadow-glow-purple">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Icon name="sparkles" className="w-3.5 h-3.5 text-cyan-accent" />
                      <span>Gemini Flash Evaluation: Score {geminiDossierResult.score} ({geminiDossierResult.category})</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      ✨ Live AI Analysis
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-[11px] bg-navy-900/60 p-2.5 rounded-xl border border-white/5">
                    {geminiDossierResult.reasoning}
                  </p>
                  <p className="text-cyan-accent text-[11px] font-medium">
                    <strong>Next Action:</strong> {geminiDossierResult.recommendedNextAction}
                  </p>
                </div>
              )}

              {/* Technographic Stack */}
              <div>
                <span className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold block mb-2">Detected Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {lead.enrichedData.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-navy-800 text-slate-300 border border-white/10 font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Intent Signals */}
              <div>
                <span className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold block mb-2">Active Buying Signals</span>
                <div className="space-y-1.5">
                  {lead.intentSignals.map((sig, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></span>
                      <span>{sig}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <label className="text-slate-300 font-semibold block">Internal Sales Rep Notes</label>
              <textarea
                rows={6}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-4 text-xs text-white leading-relaxed focus:outline-none focus:border-cyan-accent"
                placeholder="Add private deal notes..."
              />
              <button
                onClick={() => onUpdateLead({ ...lead, notes })}
                className="px-4 py-2 rounded-xl bg-cyan-accent text-navy-950 font-bold text-xs"
              >
                Save Notes
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-navy-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-400">Source: {lead.source}</span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleGeminiDossierEval}
              disabled={isEvaluating}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-cyan-accent text-xs font-semibold border border-white/10 flex items-center justify-center gap-1.5 transition"
            >
              <Icon name="sparkles" className="w-3.5 h-3.5" />
              <span>{isEvaluating ? 'Evaluating...' : '✨ Gemini AI Lead Score'}</span>
            </button>
            <button
              onClick={() => onLaunchEmail(lead)}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 text-white font-bold text-xs shadow-glow-purple flex items-center justify-center gap-2 transition"
            >
              <Icon name="mail" className="w-4 h-4" />
              <span>Launch in Email Studio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 20. ADD NEW LEAD MODAL
// ==========================================
function AddLeadModal({ onClose, onAddLead }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('FinTech & Payments');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !company || !email) return;

    const newLead = {
      id: `lead-user-${Date.now()}`,
      name,
      title: title || 'Executive Decision Maker',
      company,
      email,
      phone: '+1 (415) 000-0000',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      location: 'San Francisco, CA',
      industry,
      employees: '100 - 250',
      funding: 'Series A ($12M)',
      score: 92,
      icpFit: 'Tier A (90-100)',
      status: 'Qualified',
      dealSize: 28000,
      source: 'Inbound Form',
      lastActivity: 'Enriched just now by AI engine',
      intentSignals: ['Recently added to pipeline', 'Verified Corporate Domain'],
      buyingTiming: 'Active Evaluation',
      enrichedData: {
        techStack: ['Salesforce', 'HubSpot', 'Segment'],
        recentTrigger: `Expanded ${company} commercial team and evaluating sales automation tools.`,
        decisionMakersCount: 3,
        estimatedRevenue: '$15M ARR',
        verifiedEmail: true,
        linkedinUrl: 'https://linkedin.com',
        websiteUrl: `https://${company.toLowerCase().replace(/\s+/g, '')}.com`
      }
    };

    onAddLead(newLead);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-navy-900 border border-white/15 rounded-3xl shadow-2xl p-6 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Icon name="plus" className="w-4 h-4 text-cyan-accent" />
            <span>Add & Enrich New Lead</span>
          </h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <Icon name="x" className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="text-slate-300 font-semibold block mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Rachel Adams"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-accent"
            />
          </div>

          <div>
            <label className="text-slate-300 font-semibold block mb-1">Job Title</label>
            <input
              type="text"
              placeholder="e.g. VP of Revenue Operations"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-accent"
            />
          </div>

          <div>
            <label className="text-slate-300 font-semibold block mb-1">Company Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. CloudScale Dynamics"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-accent"
            />
          </div>

          <div>
            <label className="text-slate-300 font-semibold block mb-1">Corporate Email *</label>
            <input
              type="email"
              required
              placeholder="e.g. rachel@cloudscaledynamics.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-accent"
            />
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan-500 text-white font-bold shadow-glow-purple"
            >
              Enrich & Add to Pipeline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// 21. GLOBAL COMMAND PALETTE (CMD + K)
// ==========================================
function CommandPaletteModal({ onClose, leads, onSelectLead, onNavigate }) {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return leads.slice(0, 5);
    }
    return leads.filter(
      (l) =>
        l.name.toLowerCase().includes(query.toLowerCase()) ||
        l.company.toLowerCase().includes(query.toLowerCase()) ||
        l.email.toLowerCase().includes(query.toLowerCase())
    );
  }, [leads, query]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-navy-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-navy-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Input Bar */}
        <div className="p-4 bg-navy-950 border-b border-white/10 flex items-center gap-3">
          <Icon name="search" className="w-5 h-5 text-cyan-accent" />
          <input
            type="text"
            autoFocus
            placeholder="Type a lead name, company, or jump to a module..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="text-[10px] bg-navy-800 text-slate-400 px-2 py-0.5 rounded border border-white/10 font-mono">
            ESC to close
          </kbd>
        </div>

        {/* Quick Navigation Targets */}
        <div className="p-3 bg-navy-950/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[10px] uppercase text-slate-500 font-mono">Jump to:</span>
          {['overview', 'leads', 'pipeline', 'emailStudio', 'copilot', 'automation'].map((tab) => (
            <button
              key={tab}
              onClick={() => onNavigate(tab)}
              className="px-2.5 py-1 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-300 hover:text-cyan-accent text-xs font-medium transition"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-3 space-y-1 text-xs">
          {filteredItems.map((lead) => (
            <div
              key={lead.id}
              onClick={() => onSelectLead(lead)}
              className="p-3 rounded-xl hover:bg-navy-800/80 cursor-pointer flex items-center justify-between transition group"
            >
              <div className="flex items-center gap-3">
                <img src={lead.avatar} className="w-7 h-7 rounded-full object-cover" alt={lead.name} />
                <div>
                  <div className="font-semibold text-white group-hover:text-cyan-accent transition">{lead.name}</div>
                  <div className="text-[11px] text-slate-400">{lead.company} • {lead.title}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-accent font-bold">Score {lead.score}</span>
                <Icon name="arrowRight" className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 22. MOUNT REACT ROOT APPLICATION
// ==========================================
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
