// Central content for the site. Edit here to update the About and Resume pages.
// Source of truth: Jackie_Fleming_Resume_ATS_2026 (phone intentionally omitted).

export const profile = {
  name: 'Jackie Fleming',
  focus: 'FP&A · Planning & Strategy',
  tagline: 'MBA Candidate · Finance & Analytics Emphasis · Graduating April 2027',
  intro:
    'I’m an MBA candidate with Corporate FP&A experience at Target and 5+ years in inventory ' +
    'planning, pricing strategy, and forecasting across retail and consumer goods. I build the ' +
    'models and bring the clarity that help teams plan with confidence.',
  location: 'Salt Lake City, UT',
  email: 'jacqueline.c.fleming@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jackie-fleming/',
}

// Headline results, pulled straight from the resume.
export const highlights = [
  { value: '10%', label: 'more accurate forecasts than the company average at West Elm' },
  { value: '<1.5%', label: 'reported revenue variance, down from 19%, after leading See’s analytics migration' },
  { value: '30+', label: 'custom dashboards built firm-wide at See’s Candies' },
  { value: '$18M', label: 'business unit managed as Inventory Planner at West Elm' },
]

export const strengths = [
  {
    title: 'Analytical rigor with empathy',
    body: 'Pair quantitative analysis with people-oriented communication — the numbers and the humans behind them.',
  },
  {
    title: 'Strategic connection',
    body: 'Tie day-to-day work to long-term strategy so effort compounds in the right direction.',
  },
  {
    title: 'Leadership in ambiguity',
    body: 'Step up to lead and take accountability, especially in open-ended, undefined situations.',
  },
  {
    title: 'Order and clarity',
    body: 'Bring structure to complex problems — in processes, data, and plans.',
  },
  {
    title: 'Team cohesion',
    body: 'Build cohesive, motivated teams through enthusiasm, optimism, and encouragement.',
  },
  {
    title: 'Ownership of growth',
    body: 'Take charge of my own development and genuinely enjoy mastering new challenges.',
  },
]

export const competencies = [
  'Financial Forecasting & Modeling',
  'Financial Statement Analysis',
  'Inventory & Demand Planning',
  'Pricing Strategy & Analysis',
  'Cross-Functional Collaboration',
  'Strategic Planning',
  'Process Improvement',
  'Data Analysis & Dashboards',
  'SQL',
  'Python',
  'R',
]

export const interests = [
  {
    title: 'Sustainability',
    body: 'I sew and thrift most of my own clothing.',
  },
  {
    title: 'Creative community',
    body: 'Founder of Menlo Park Craft Night.',
  },
  {
    title: 'Trail running',
    body: 'Completed 9 of 13 races in the 2025 Wasatch Trail Run Series, including Deer Valley, Snowbird, Soldier Hollow, and Alta.',
  },
]

export const education = [
  {
    degree: 'MBA, Finance and Analytics Emphasis',
    school: 'Brigham Young University, Marriott School of Business',
    date: 'Graduating April 2027 · Provo, UT',
    details: [
      'Coursework & projects: Financial Statement Analysis, Advanced Financial Modeling, AI in Marketing.',
      'Co-President, BYU MBA Fashion & Beauty Club.',
    ],
  },
  {
    degree: 'B.S., Economics',
    school: 'Brigham Young University',
    date: 'December 2015 · Provo, UT',
    details: [],
  },
]

export const experience = [
  {
    company: 'Target Corporation',
    role: 'MBA Finance Intern, Leadership Development Program',
    location: 'Minneapolis, MN',
    date: 'Jun 2026 – Aug 2026',
    points: [
      'Led an open-ended 10-week project on incorporating guest metrics into strategic financial decision making, collaborating with merchandising, marketing, guest insights, market research, and finance.',
      'Built an Excel financial model integrating SSAS cube and guest insights data; modeled top-line sales sensitivity across guest count and guest spend growth scenarios and quantified variance between current trends and plan targets.',
      'Documented model logic and trained two finance teams on its use and data-connection maintenance; both plan to adopt it in 2027 forecasting, with plans to extend into Long Range Planning.',
    ],
  },
  {
    company: 'Williams-Sonoma, Inc. — West Elm',
    role: 'Inventory Planner',
    location: 'New York, NY',
    date: 'Apr 2024 – Feb 2025',
    points: [
      'Managed inventory for bathroom textiles and accessories, an $18M business unit; synthesized cross-functional trends into financial forecasts driving profitable growth across store and ecommerce.',
      'Delivered predictions consistently 10% more accurate than the company average, earning leadership accolades and an invitation to serve as SME for other departments.',
    ],
  },
  {
    company: "See's Candies",
    role: 'Marketing Pricing and Data Analyst',
    location: 'San Francisco, CA',
    date: 'Jan 2023 – Aug 2023',
    points: [
      'Sole analyst for the firm-wide marketing team; owned all recurring and ad hoc reporting and analysis of marketing efforts.',
      'Led a cross-functional working group (retail, ecommerce, marketing, merchandising) to develop a first-of-its-kind pricing-review process, streamlining pricing adjustments.',
      'Spearheaded migration to a new site analytics platform and built 30+ custom dashboards firm-wide, reducing reported revenue variance from 19% to under 1.5%.',
    ],
  },
  {
    company: 'Gap Inc. — Old Navy',
    role: 'Inventory Planning Analyst',
    location: 'San Francisco, CA',
    date: 'Jul 2019 – Feb 2020',
    points: [
      "Partnered with a Senior Planner to manage inventory for Old Navy's second-largest category (women's bottoms).",
    ],
  },
  {
    company: 'Gap Inc. — Old Navy',
    role: 'Rotational Management Program Trainee',
    location: 'San Francisco, CA',
    date: 'Sep 2018 – Jul 2019',
    points: [
      'Selected for a 10-month, 4-department rotation; recognized for cost savings and profitability gains; trained 2 months early.',
    ],
  },
  {
    company: 'Gap Inc. — Gap Online',
    role: 'Online Inventory Specialist',
    location: 'San Francisco, CA',
    date: 'Jan 2017 – Sep 2018',
    points: [
      'Identified pricing and assortment opportunities; authored an 80-page training manual used for all new Specialists.',
    ],
  },
]

// Portfolio is hidden for v1 (no nav link or route). These are placeholders kept
// for when real case studies are ready — see PRD.md "later add-ons".
export const projects = [
  {
    title: 'DCF & Valuation Model',
    category: 'Financial Modeling',
    summary:
      'End-to-end free cash flow model with WACC build-up, tax-shield valuation, and a trading-multiples cross-check.',
    tags: ['DCF', 'WACC', 'Valuation'],
  },
  {
    title: 'Site Analytics Migration',
    category: 'Data & Operations',
    summary:
      "Led See's Candies' migration to a new web analytics platform and stood up a durable pricing-adjustment process.",
    tags: ['Analytics', 'Pricing', 'Process'],
  },
  {
    title: 'Inventory Planning Playbook',
    category: 'Strategy & Ops',
    summary:
      'Frameworks for managing availability across a high-growth category — balancing service levels against markdown risk.',
    tags: ['Inventory', 'Forecasting', 'Retail'],
  },
]
