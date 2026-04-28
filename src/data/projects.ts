export type Project = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  image?: string;
  tags?: string[];
  url?: string;
};

export const projects: Project[] = [
  // ── Priority showcase projects ────────────────────────────────
  {
    slug: "zithelo-real-estate",
    name: "Zithelo Real Estate",
    industry: "Real Estate",
    description:
      "Pan-African urban development and real estate investment platform for diaspora investors. Features property listings, a 25-year structured lease model, ROI calculator, investor quiz, and integrated Sanity CMS — built for Lagos and Atlanta markets.",
    image: "/project/zitehelo_real_estate.png",
    tags: ["Next.js", "Sanity CMS", "Real Estate", "TypeScript"],
    url: "https://zithelorealestate.com",
  },
  {
    slug: "beaconhill-smile-group",
    name: "Beaconhill Smile Group",
    industry: "Healthcare",
    description:
      "Multi-specialty healthcare group website covering dental, eye care, dermatology, ENT, and behavioral health businesses. Includes clinic finder, appointment booking, foundation impact section, and ecosystem overview for 7+ healthcare brands across Lagos and the US.",
    image: "/project/Beacon_hill_smile_group.png",
    tags: ["Next.js", "Healthcare", "TypeScript", "Multi-brand"],
    url: "https://beaconhillsmilegroup.org",
  },
  {
    slug: "r3-consulting",
    name: "R3 Consulting Ltd",
    industry: "Consulting",
    description:
      "Corporate consulting website with client portal, project management tools, and business intelligence dashboard.",
    image: "/project/r3consulting.png",
    tags: ["Next.js", "Laravel", "Dashboard"],
    url: "https://r3consultingltd.com",
  },
  {
    slug: "echadh-properties",
    name: "Echadh Properties",
    industry: "Real Estate",
    description:
      "Premium luxury real estate development company website for Lagos's Lekki peninsula. Features a full project portfolio (Gratia Heights, Rosewood Apartments, Cherry Rooftop), interactive payment calculator, investment case section, and brochure request system.",
    image: "/project/echadh_properties_ltd.png",
    tags: ["Next.js", "Real Estate", "TypeScript"],
    url: "https://www.echadhproperties.com",
  },
  // ── Next priority projects ─────────────────────────────────────
  {
    slug: "laciac",
    name: "Lagos Chamber of Commerce (LACIAC)",
    industry: "Professional Services",
    description:
      "Membership portal and arbitration platform for LACIAC, serving thousands of businesses across Lagos State.",
    image: "/project/Laciac.png",
    tags: ["WordPress", "Custom Development", "Member Portal"],
    url: "https://laciac.org",
  },
  {
    slug: "interop-digital-solutions",
    name: "Interop Digital Solutions Ltd",
    industry: "Technology / Enterprise",
    description:
      "Enterprise digital transformation platform providing software solutions, consulting, and integration services.",
    image: "/project/interopdigital.png",
    tags: ["Next.js", "TypeScript", "Enterprise"],
    url: "https://interop-digital-solutions-ltd.vercel.app",
  },
  {
    slug: "access-best-empowerment-hub",
    name: "Access Best Empowerment Hub",
    industry: "Education / Training",
    description:
      "Educational platform empowering communities with training programs, certifications, and skill development resources.",
    image: "/project/accessbest.png",
    tags: ["React", "Vite", "LMS"],
    url: "https://accessbest.com.ng",
  },
  // ── Other projects ─────────────────────────────────────────────
  {
    slug: "cascadia-holdings",
    name: "Cascadia Holdings",
    industry: "Corporate / Investment",
    description:
      "Investment and holdings company website showcasing portfolio companies, investment opportunities, and corporate governance.",
    image: "/project/cascadia.png",
    tags: ["Next.js", "Corporate", "Investment"],
    url: "https://www.cascadiaholdings.net",
  },
  {
    slug: "megatronics",
    name: "Megatronics Power Solution",
    industry: "Industrial / E-commerce",
    description:
      "Power solutions and electrical equipment company with product catalog, service offerings, and technical support.",
    image: "/project/megatronics.png",
    tags: ["Next.js", "E-commerce", "Industrial"],
    url: "https://megatronics.vercel.app",
  },
  {
    slug: "evolution-vocational-tutors",
    name: "Evolution Vocational Tutors",
    industry: "Education",
    description:
      "Educational platform connecting students with vocational tutors, featuring course management and online learning tools.",
    image: "/project/evolution.png",
    tags: ["Next.js", "Education", "LMS"],
    url: "https://evolution-ten-sandy.vercel.app",
  },
  {
    slug: "tashico",
    name: "Tashico ICT Institute",
    industry: "Education / Training",
    description:
      "ICT training institute website with course catalog, student enrollment system, and certification programs.",
    image: "/project/tashico.png",
    tags: ["Next.js", "Education", "Training"],
    url: "https://tashico.vercel.app",
  },
  {
    slug: "first-giwa-feeds",
    name: "First Giwa Feeds & Agro Tech Ltd",
    industry: "Agriculture",
    description:
      "Agricultural technology company specializing in animal feeds and agro-products with online ordering and distribution network.",
    image: "/project/firstgiwa.png",
    tags: ["WordPress", "Agriculture", "E-commerce"],
    url: "http://firstgiwa.com",
  },
  {
    slug: "suko-paint",
    name: "Suko Paint",
    industry: "Manufacturing / E-commerce",
    description:
      "E-commerce platform for premium paint products with color visualizer, dealer locator, and project calculator.",
    image: "/project/sukopaint.png",
    tags: ["Next.js", "E-commerce", "Product Catalog"],
    url: "https://www.sukopaint.com",
  },

  {
    slug: "immovables-realty",
    name: "Immovables Realty",
    industry: "Real Estate",
    description:
      "Premium real estate marketplace with advanced property search, agent profiles, and mortgage calculators.",
    image: "/project/immovablesrealty.png",
    tags: ["React", "Vite", "Real Estate"],
    url: "https://www.immovablesrealty.com",
  },

  {
    slug: "immovables-group",
    name: "Immovables Group",
    industry: "Real Estate",
    description:
      "Full-stack real estate platform with property listings, virtual tours, and integrated CRM for Nigeria's leading property group.",
    image: "/project/immovablesgroup.png",
    tags: ["Next.js", "Laravel", "RESTful API"],
    url: "https://immovablesgroup.com",
  },
  {
    slug: "immovables-digital-space",
    name: "Immovables Digital Space",
    industry: "Technology",
    description:
      "Technology solutions platform showcasing digital services, software development, and IT consulting offerings.",
    image: "/project/immovablestech.png",
    tags: ["WordPress", "Custom Theme", "Digital Solutions"],
    url: "https://immovablestech.com",
  },
  {
    slug: "alajo",
    name: "Alajo — Digital Ajo Savings",
    industry: "FinTech",
    description:
      "Modern digital savings app bringing the traditional Nigerian ajo/esusu cooperative model online. Users set savings goals, join group savings circles, track contributions in real time, and withdraw instantly. Built for everyday Nigerians starting from ₦500.",
    image: "/project/alajo.png",
    tags: ["Next.js", "Laravel", "FinTech", "Payment Integration"],
    url: "https://alajo.ng",
  },
  {
    slug: "suap-olowoex",
    name: "Suap / OlowoEx — Crypto Exchange",
    industry: "FinTech",
    description:
      "Fast peer-to-peer cryptocurrency exchange platform for the Nigerian market. Users sell USDT, Bitcoin, and Ethereum for instant Naira bank transfers. Features a multi-level affiliate/referral system, 24/7 WhatsApp support, and a clean order-flow built around local trust and speed.",
    image: "/project/suap.png",
    tags: ["Laravel", "Crypto", "FinTech", "Nigeria"],
    url: "https://crypto.olowoex.com",
  },
  {
    slug: "the-pen-school",
    name: "The Pen Muslim Montessori School",
    industry: "Education",
    description:
      "Educational institution website with admissions portal, student information system, and parent communication tools.",
    image: "/project/thepen.png",
    tags: ["Vite", "React", "Education"],
    url: "https://thepenmuslimschools.com",
  },
  {
    slug: "polygrace-home-healthcare",
    name: "Polygrace Home Healthcare",
    industry: "Healthcare",
    description:
      "Healthcare management platform for Canadian home care services with patient scheduling and care coordination.",
    image: "/project/polygrace.png",
    tags: ["Vite", "Healthcare", "Scheduling"],
    url: "https://www.polygracehomehealthcare.ca",
  },
  {
    slug: "growth-vault",
    name: "Growth Vault",
    industry: "Marketing / Automation",
    description:
      "Business growth and marketing automation platform with funnel builder, email campaigns, and analytics.",
    image: "/project/growthvault.png",
    tags: ["Next.js", "Automation", "Marketing"],
    url: "https://growth-vault-launch.vercel.app",
  },
  {
    slug: "majestic-services",
    name: "Majestic Services UK",
    industry: "Facility Management",
    description:
      "Professional cleaning and facility management services platform with booking system and service tracking.",
    image: "/project/majesticservices.png",
    tags: ["Vite", "React", "Service Platform"],
    url: "https://www.majesticservices.co.uk",
  },
  {
    slug: "royal-quran",
    name: "Royal Quran Competition",
    industry: "Events / Community",
    description:
      "Islamic competition platform with registration system, scoring interface, and event management for Quranic excellence.",
    image: "/project/royalquran.png",
    tags: ["Next.js", "Event Management"],
    url: "https://royal-quran-shine.vercel.app",
  },
  {
    slug: "business-revival-webinar",
    name: "Business Revival Webinar",
    industry: "Events / Training",
    description:
      "Webinar and event management platform for business training programs with registration and live streaming.",
    image: "/project/businessrevival.png",
    tags: ["Next.js", "Webinar", "Event Platform"],
    url: "https://webinar.immovablestech.com",
  },
  {
    slug: "strategic-effects",
    name: "Strategic Effects Ltd",
    industry: "Consulting",
    description:
      "Corporate consulting and strategy firm website showcasing services, case studies, and client success stories.",
    image: "/project/strategiceffects.png",
    tags: ["WordPress", "Corporate", "Consulting"],
    url: "https://strategiceffectsltd.com",
  },
  {
    slug: "harzotech-website",
    name: "Harzotech Nig Ltd",
    industry: "Technology",
    description:
      "IT consulting and software development company website showcasing services, portfolio, and technology expertise.",
    image: "/project/harzotech.png",
    tags: ["WordPress", "IT Services", "Corporate"],
    url: "https://harzotech.com.ng",
  },
  {
    slug: "suap",
    name: "Suap.ng — Crypto Trading",
    industry: "FinTech / Crypto",
    description:
      "Cryptocurrency trading platform with real-time market data, secure wallet integration, and trading tools.",
    image: "/project/suap.png",
    tags: ["Laravel", "Crypto", "Trading Platform"],
    url: "https://suap.ng",
  },
  {
    slug: "exclusive-smile",
    name: "Exclusive Smile Nigeria",
    industry: "Healthcare (Dental)",
    description:
      "Dental clinic and healthcare platform with appointment booking, patient records, and comprehensive sales funnel system integrating marketing automation, lead nurturing, and conversion optimization.",
    image: "/project/exclusivesmile.png",
    tags: ["Next.js", "Sanity CMS", "Airtable", "Sales Funnel"],
    url: "https://www.exclusivesmileng.com",
  },
  {
    slug: "phoenix-derma",
    name: "Phoenix Derma Lagos",
    industry: "Healthcare / Skincare",
    description:
      "Premium dermatology and skincare clinic with advanced sales funnel system, automated patient acquisition, booking system, and integrated marketing campaigns.",
    image: "/project/phoenixderma.png",
    tags: ["Sales Funnel", "Marketing Automation", "Healthcare"],
  },
  {
    slug: "brand-tune",
    name: "Brand Tune",
    industry: "Branding / Multimedia",
    description:
      "Creative brand jingle and audio branding platform for businesses seeking memorable sonic identities.",
    image: "/project/brandtune.png",
    tags: ["Web Development", "Multimedia", "Branding"],
  },
  {
    slug: "crypto-trading-app",
    name: "Crypto Trading App",
    industry: "FinTech / Crypto",
    description:
      "Advanced cryptocurrency trading application with real-time charts, portfolio tracking, and secure transactions.",
    image: "/project/cryptoapp.png",
    tags: ["Laravel", "Blockchain", "Trading"],
  },
  {
    slug: "new-telegraph",
    name: "New Telegraph Newspaper",
    industry: "Media / News",
    description:
      "Major Nigerian news publication platform with breaking news, multimedia content, and digital subscriptions.",
    image: "/project/newtelegraph.png",
    tags: ["WordPress", "News Portal", "Media"],
    url: "https://newtelegraphng.com",
  },
  {
    slug: "yuan-bridge",
    name: "Yuan Bridge — Naira to Yuan Flow",
    industry: "FinTech / Currency Exchange",
    description:
      "Currency exchange platform facilitating seamless Naira to Yuan conversions with real-time rates and secure transactions.",
    image: "/project/yuanbridge.png",
    tags: ["Next.js", "FinTech", "Currency Exchange"],
    url: "https://naira-yuan-flow.vercel.app",
  },
  // ── Projects without images ──────────────────────────────────
  {
    slug: "hotel-management-system",
    name: "Hotel Management System",
    industry: "Hospitality / Software",
    description:
      "Full-featured hotel management system with room booking, guest records, housekeeping, and billing automation.",
    tags: ["Laravel", "MySQL", "Hospitality"],
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    industry: "Education / Software",
    description:
      "Comprehensive school management platform covering student records, timetables, fee management, and parent portals.",
    tags: ["Laravel", "MySQL", "Education"],
  },
  {
    slug: "multi-tenancy-saas",
    name: "Multi-Tenancy SaaS Platform",
    industry: "SaaS / Software",
    description:
      "Scalable multi-tenant SaaS platform with isolated data environments, subscription billing, and admin dashboards per tenant.",
    tags: ["Laravel", "Multi-Tenancy", "SaaS"],
  },
  {
    slug: "dental-clinic-ai-agent",
    name: "Dental Clinic AI Support Agent",
    industry: "Healthcare / AI Automation",
    description:
      "AI-powered support agent for dental clinics handling appointment bookings, FAQs, patient triage, and follow-up messages automatically.",
    tags: ["AI Automation", "n8n", "OpenAI", "Healthcare"],
  },
  {
    slug: "political-campaign-ai-agent",
    name: "Political Campaign AI Agent",
    industry: "Politics / AI Automation",
    description:
      "Intelligent AI agent managing voter outreach, Q&A responses, campaign analytics, and automated communication workflows.",
    tags: ["AI Automation", "Make", "OpenAI", "Analytics"],
  },
  {
    slug: "ecommerce-order-automation",
    name: "E-commerce Order Automation",
    industry: "E-commerce / AI Automation",
    description:
      "End-to-end order processing automation covering confirmation, fulfillment triggers, customer notifications, and CRM updates.",
    tags: ["AI Automation", "Zapier", "E-commerce", "Workflow"],
  },
  {
    slug: "hr-onboarding-automation",
    name: "HR Onboarding Automation",
    industry: "HR / AI Automation",
    description:
      "Automated HR onboarding pipeline that provisions accounts, sends welcome sequences, assigns training, and tracks completion.",
    tags: ["AI Automation", "n8n", "HR", "Workflow"],
  },
  {
    slug: "lead-qualification-ai-bot",
    name: "Lead Qualification AI Bot",
    industry: "Sales / AI Automation",
    description:
      "Conversational AI bot that qualifies inbound leads, scores them, routes high-intent prospects, and logs everything to CRM.",
    tags: ["AI Automation", "Make", "OpenAI", "CRM"],
  },
];
