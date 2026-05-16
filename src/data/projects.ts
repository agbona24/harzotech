export type IntentFeature = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  image?: string;
  tags?: string[];
  url?: string;
  highlights?: string[];
  challenge?: string;
  approach?: string;
  intentFeatures?: IntentFeature[];
  outcome?: string;
  relatedService?: string;
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
    highlights: [
      "ROI calculator — estimates monthly passive income, projected property value, and capital appreciation",
      "Investor quiz to match users to the right investment type and property profile",
      "Individual property detail pages for each estate (Lagos, Nairobi, Accra)",
      "25-year structured lease model with rental income rights — explained interactively",
      "Sanity CMS integration for easy property and content updates without a developer",
      "Designed for diaspora investors and remote professionals seeking African urban real estate",
    ],
    challenge:
      "Pan-African diaspora investors needed a credible platform to commit capital into African real estate — often without ever visiting the property. Trust was the single biggest conversion barrier. A beautiful homepage alone would not move money. Every page needed to earn investor confidence by the time they reached the enquiry button.",
    approach:
      "We engineered the entire site around progressive trust-building. The homepage establishes credibility fast, individual property pages give investors the granular detail they need, and the ROI calculator + investor quiz together personalise the experience so each visitor feels the platform was built for them specifically. Every friction point that could cause a diaspora investor to close the tab was anticipated and removed.",
    intentFeatures: [
      {
        title: "ROI Calculator — Numbers Before Conversation",
        body: "Investors don't buy on vibes — they buy on numbers. We built a live calculator that takes a visitor's budget and returns monthly rental income projections, capital appreciation estimates, and 25-year wealth creation figures. This turns a passive reader into an engaged prospect within 60 seconds, and ensures every enquiry call starts with a pre-qualified investor rather than a curious browser.",
      },
      {
        title: "Investor Quiz — Personalised Property Matching",
        body: "A first-time diaspora investor thinking $50K has completely different needs from a high-net-worth individual diversifying a portfolio. The quiz routes each visitor to the property profile that matches their risk appetite, budget, and timeline — dramatically increasing the quality of enquiries and reducing the sales team's qualification burden.",
      },
      {
        title: "25-Year Lease Model — Objection Disarmed Before It's Asked",
        body: "The structured lease model is Zithelo's unique investment mechanism — but it's also the biggest source of confusion. We built an interactive step-by-step explainer that walks investors through how the lease works, exactly when rental income is paid, and what the exit options are. This page alone eliminates the #1 objection before a salesperson ever picks up the phone.",
      },
      {
        title: "Sanity CMS — Publish New Estates in 10 Minutes",
        body: "As Zithelo expands into Nairobi and Accra, new developments need to go live fast. We built the CMS so the marketing team can publish a full property listing — images, pricing, ROI projections, payment plans — in under 10 minutes without touching code. Agility at the speed of the African property market.",
      },
      {
        title: "Dual-Market Design Language",
        body: "Diaspora investors split their lives between US cities and African markets. The brand had to feel premium enough for an Atlanta-based professional and authentic enough for someone who knows Lagos. Every colour choice, image, and copy line was deliberate — a design system that speaks credibility in both worlds simultaneously.",
      },
    ],
    outcome:
      "A conversion-optimised investment platform that transforms diaspora website traffic into qualified property investor enquiries. The self-service ROI calculator qualifies intent before any sales conversation, meaning every lead arriving in the inbox already understands the numbers and is ready to move.",
    relatedService: "web-development",
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
    highlights: [
      "Multi-brand healthcare ecosystem overview spanning 7+ clinics under one group",
      "Specialty pages for dental, eye care, dermatology, ENT, and behavioral health",
      "Clinic finder to help patients locate the right branch and specialty",
      "Appointment booking system integrated across multiple clinic locations",
      "Foundation impact section showcasing community healthcare initiatives",
      "Dual-market design serving both Lagos and US-based patients",
    ],
    challenge:
      "A healthcare group spanning 7+ clinics and multiple specialties across Lagos and the US needed one digital home that could serve every patient type — from a Lagos mother booking a dental check-up to a US-based Nigerian managing dermatology care. The risk: a generic group website that makes every specialty feel diluted and untrustworthy.",
    approach:
      "We built a hub-and-spoke architecture where the group homepage communicates the full ecosystem's credibility and scale, while each specialty section feels as authoritative as if it were its own standalone website. Patients can navigate by location or by condition — and every path ends at a booking flow designed to remove hesitation.",
    intentFeatures: [
      {
        title: "Clinic Finder — Patient Routing That Reduces Bounce",
        body: "Most healthcare websites assume the patient already knows what they need. We built a clinic finder that routes by both location and specialty — so a patient in Lekki looking for an eye doctor lands exactly where they need to be in two clicks. Reducing navigation friction in healthcare directly increases appointment conversion rates.",
      },
      {
        title: "Specialty Pages Built for Credibility",
        body: "Each of the 5 specialties — dental, eye care, dermatology, ENT, and behavioral health — has its own dedicated section with condition-specific content, procedure explanations, and a tailored appointment flow. A dermatology patient needs to feel they are speaking to specialists, not a generic clinic. This architecture delivers that confidence.",
      },
      {
        title: "Foundation Impact Section — Trust Through Mission",
        body: "Healthcare decisions are emotional purchases. We built a prominent foundation section that communicates Beaconhill's community healthcare work across Lagos — turning a transactional healthcare website into a brand people feel proud to use. Patients who choose a hospital that gives back become the most loyal advocates.",
      },
      {
        title: "Multi-Location Appointment Booking",
        body: "Seven clinic brands across multiple Lagos locations and US operations — all needed a unified booking system with minimal friction for patients who are not digitally confident. We built a booking flow clean enough for a first-time user while flexible enough to handle the complexity of multi-location, multi-specialty scheduling underneath.",
      },
    ],
    outcome:
      "A multi-brand healthcare web ecosystem serving 7+ clinic brands from one coherent platform — eliminating patient confusion and turning the group's scale into a competitive advantage rather than a navigation problem. Appointment conversions increased across all locations.",
    relatedService: "web-development",
  },
  {
    slug: "r3-consulting",
    name: "R3 Consulting Ltd",
    industry: "Consulting",
    description:
      "Corporate ERP consulting website for a firm specialising in SAP, Microsoft Dynamics 365, and Odoo implementations across Nigeria, Liberia, and Ghana — serving 14+ industries including banking, manufacturing, and oil & gas.",
    image: "/project/r3consulting.png",
    tags: ["Next.js", "Laravel", "Dashboard"],
    url: "https://r3consultingltd.com",
    highlights: [
      "ERP platform showcase for SAP S/4HANA Cloud, Microsoft Dynamics 365, and Odoo",
      "Multi-country operations coverage (Nigeria, Liberia, Ghana) with regional context",
      "2,000+ trainings delivered — milestone and credibility section",
      "Service modules: Financial Management, Human Capital Management, CRM, Spend Management",
      "24/7 support and 99.9% uptime SLA — prominently communicated to enterprise buyers",
      "14+ industry verticals covered: banking, manufacturing, retail, healthcare, oil & gas",
    ],
    challenge:
      "Enterprise ERP buyers in Nigeria, Liberia, and Ghana are making $100K+ decisions. They do extensive due diligence online before ever taking a sales call. R3 needed a digital presence that communicated the depth, credibility, and track record required to get onto a shortlist — against larger international competitors with bigger brand recognition.",
    approach:
      "We built the website around credibility signals layered on top of each other: 2,000+ trainings delivered, 14+ industries served, named enterprise platforms (SAP, Microsoft Dynamics), multi-country presence, and 24/7 SLA commitments. Every page was structured to answer the enterprise buyer's unspoken question: 'Can we trust these people with our entire business operations?'",
    intentFeatures: [
      {
        title: "ERP Platform Pages — Positioned for Enterprise Search",
        body: "Enterprise buyers search for 'SAP implementation Nigeria' or 'Microsoft Dynamics 365 partner Lagos' — not for R3 Consulting by name. We built dedicated platform pages for SAP S/4HANA, Dynamics 365, and Odoo, each optimised for the specific search terms enterprise procurement teams use, ensuring R3 appears when it matters most.",
      },
      {
        title: "2,000+ Trainings Delivered — The Credibility Anchor",
        body: "Enterprise buyers need social proof at scale. We made this milestone impossible to miss — not buried in an About page, but featured prominently on the homepage. Numbers like this shift how a visitor perceives a company within seconds of landing. It says: 'we have done this before, many times, at enterprise scale.'",
      },
      {
        title: "14-Industry Coverage — Sector-Specific Confidence",
        body: "A manufacturing CFO evaluating ERP consultants wants to see that the firm understands manufacturing workflows, not just software. We built industry vertical sections that speak the language of each sector — banking, manufacturing, retail, healthcare, oil & gas — so every visitor immediately recognises that R3 understands their world.",
      },
      {
        title: "24/7 Support and 99.9% Uptime SLA — Risk Removal",
        body: "The biggest fear of an enterprise ERP buyer is abandonment after implementation. We made R3's support commitments explicit and prominent: 24/7 dedicated support, a 99.9% uptime SLA, and a named support structure. In enterprise sales, removing the risk of being left stranded post-implementation is as important as winning the initial deal.",
      },
    ],
    outcome:
      "A corporate digital presence that positions R3 Consulting on equal footing with international ERP vendors in the eyes of enterprise buyers across West Africa — turning organic search into qualified inbound leads from procurement teams across banking, manufacturing, and public sector.",
    relatedService: "web-development",
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
    highlights: [
      "Interactive payment calculator — select a development, input deposit, see monthly installments",
      "Portfolio of 6 active developments: Gratia Heights I & II, Rosewood, Cherry Rooftop, Carpe Diem, The Vantage",
      "Private viewing scheduling form with contact capture",
      "Brochure request system with lead capture",
      "20–35% annual ROI investment case with data to back it up",
      "Premium positioning for Lekki and Victoria Island luxury residential buyers and investors",
    ],
    challenge:
      "Selling luxury real estate on Lekki peninsula online requires more than beautiful images. Prospective buyers — both end-users and investors — need to understand exactly what they are getting, what they will pay, and what return they can expect. Generic property websites lose these buyers to developers with more transparent information.",
    approach:
      "We built the platform around transparency and tangibility. Six active developments are each given full showcase pages. The interactive payment calculator makes affordability feel real. The investment case leads with data — 20–35% annual ROI backed by Lagos market context. Every interaction is designed to generate a qualified enquiry: a brochure request, a viewing booking, or a consultation.",
    intentFeatures: [
      {
        title: "Payment Calculator — Affordability Made Tangible",
        body: "The most common reason luxury buyers delay a decision is not price — it is uncertainty about payment structure. Our interactive calculator lets a visitor select the development they are interested in, input the deposit they can commit, and immediately see the exact monthly installment schedule. This single feature converts browser sessions into serious enquiries because it makes the purchase feel manageable and real.",
      },
      {
        title: "6-Development Portfolio — Each Estate Gets Its Stage",
        body: "Gratia Heights, Rosewood Apartments, Cherry Rooftop, Carpe Diem, The Vantage — each development has distinct positioning, target buyer, and price point. We gave each its own showcase rather than grouping them in a generic list, ensuring that a buyer interested in Rosewood Apartments finds an experience tailored to what that development represents.",
      },
      {
        title: "Investment ROI Case — Data That Converts Investors",
        body: "End-user buyers and property investors look at the same page and ask different questions. Investors want to know: 'what is my return?' We built a dedicated investment case section that presents 20–35% annual ROI projections with Lagos market context, rental yield data, and capital appreciation comparisons. The data does the selling — no salesperson required for investor qualification.",
      },
      {
        title: "Private Viewing and Brochure Lead Capture",
        body: "Not every luxury buyer is ready to call. Some want a brochure first; others want a private viewing. We built both friction-free lead capture paths — a brochure request system that delivers instantly, and a private viewing scheduling form that captures detailed buyer intent data so the sales team enters every conversation prepared.",
      },
    ],
    outcome:
      "A premium digital showroom for six Lekki peninsula developments that generates self-qualified investor and end-user enquiries 24/7 — with a payment calculator that turns passive property browsers into serious buyers ready to book a viewing.",
    relatedService: "web-development",
  },
  // ── Next priority projects ─────────────────────────────────────
  {
    slug: "laciac",
    name: "Lagos Chamber of Commerce (LACIAC)",
    industry: "Professional Services",
    description:
      "Membership portal and dispute resolution platform for LACIAC — the Lagos Chamber of Commerce International Arbitration Centre. Provides online arbitration, mediation, conciliation, and an ODR portal for thousands of businesses across Lagos State.",
    image: "/project/Laciac.png",
    tags: ["WordPress", "Custom Development", "Member Portal"],
    url: "https://laciac.org",
    highlights: [
      "Online Dispute Resolution (ODR) portal for digital case management and filing",
      "Member portal serving thousands of commercial businesses across Lagos State",
      "Service pages for arbitration, mediation, conciliation, adjudication, and expert determination",
      "IDRIS (International Dispute Resolution Initiative Scheme) program information",
      "Training and capacity building program registration and schedule",
      "Model clauses and institutional rules library for contracting parties",
    ],
    challenge:
      "LACIAC — the Lagos Chamber's arbitration arm — serves thousands of businesses and legal practitioners across Lagos State. Their existing digital presence did not reflect the institutional gravity of an official arbitration centre, and the process of accessing services was opaque to first-time users unfamiliar with ADR procedures.",
    approach:
      "We built a platform that projects institutional authority while making dispute resolution services genuinely accessible. Every service — arbitration, mediation, conciliation, adjudication, expert determination — is explained in plain language alongside the formal procedural detail that legal practitioners expect. The ODR portal brings the process fully online for members.",
    intentFeatures: [
      {
        title: "Online Dispute Resolution (ODR) Portal",
        body: "Taking a commercial dispute to arbitration traditionally required physical presence and paper filings. We built an ODR portal that allows members to file cases, submit evidence, and track case progress digitally — reducing barriers for businesses outside central Lagos and modernising a process that historically excluded smaller commercial actors.",
      },
      {
        title: "Service Pages in Plain Language + Formal Detail",
        body: "A business owner who has never encountered arbitration and a commercial lawyer briefing a client both use this platform. We wrote service pages that explain each dispute resolution mechanism clearly for the uninitiated, while including the procedural and rules-based detail that legal professionals require — one page, two audiences, both served.",
      },
      {
        title: "Rules and Model Clauses Library",
        body: "Legal practitioners need LACIAC's institutional rules and model arbitration clauses readily available when drafting contracts and agreeing dispute resolution provisions. We built a structured library that makes these documents immediately accessible — turning the website into a practical working tool for Lagos's legal community, not just an information portal.",
      },
    ],
    outcome:
      "A digital institutional presence that matches LACIAC's authority as the Lagos Chamber's arbitration centre — with an ODR portal that modernises access to dispute resolution for thousands of member businesses and legal practitioners across Lagos State.",
    relatedService: "web-development",
  },
  {
    slug: "exclusive-smile",
    name: "Exclusive Smile Nigeria",
    industry: "Healthcare (Dental)",
    description:
      "Premium dental clinic website with appointment booking, treatment showcases (Invisalign, implants, veneers), HMO coverage info, patient video testimonials, and an integrated Airtable CRM sales funnel for lead nurturing and conversion optimisation.",
    image: "/project/exclusivesmile.png",
    tags: ["Next.js", "Sanity CMS", "Airtable", "Sales Funnel"],
    url: "https://www.exclusivesmileng.com",
    highlights: [
      "Online appointment booking system integrated into every treatment page",
      "Full treatment showcase: Invisalign, implants, veneers, crowns, whitening, full-mouth rehab",
      "Patient video testimonials and before/after transformation gallery",
      "HMO coverage information to reduce friction for insured patients",
      "Sanity CMS for easy blog and content management without a developer",
      "Airtable-powered CRM sales funnel with automated lead nurturing sequences",
    ],
    challenge:
      "Premium dental treatments — Invisalign, implants, full-mouth rehabilitation — carry high price points and long decision cycles. A patient considering ₦2M+ in dental work does not book on the first visit. They research, compare, read reviews, and hesitate. Without a system to stay present through that journey, most leads were lost to competitors who followed up better.",
    approach:
      "We built a full-stack patient acquisition system, not just a website. The frontend is designed to educate and inspire — treatment pages that explain procedures in detail, a before/after gallery that makes the outcome tangible, and video testimonials from real patients. Behind the scenes, every enquiry flows into an Airtable CRM with automated nurturing sequences that follow up at the right moments without requiring staff effort.",
    intentFeatures: [
      {
        title: "Treatment-Level Appointment Booking",
        body: "Generic contact forms lose leads. We built contextual appointment booking directly within each treatment page — so a visitor reading about Invisalign can book a consultation for Invisalign specifically, with that context pre-filled. The relevance of the booking request increases show rates and makes the first consultation more productive for both patient and dentist.",
      },
      {
        title: "Before/After Gallery — The Outcome Before the Process",
        body: "Most patients are not motivated by the clinical details of how veneers are applied — they are motivated by what their smile could look like. We built a visual transformation gallery that front-loads the emotional outcome. Patients see themselves in those results first, then research the process. This sequencing increases treatment enquiry rates measurably.",
      },
      {
        title: "Airtable CRM + Automated Lead Nurturing",
        body: "A patient who enquires about implants today may not be ready for three months — but they will be ready eventually. We built an Airtable-powered CRM that captures every lead and triggers automated follow-up sequences: a check-in at two weeks, an educational email at six weeks, a special offer at twelve weeks. The clinic stays top of mind without any manual effort from the front desk team.",
      },
      {
        title: "HMO Coverage Section — Friction Removal for Insured Patients",
        body: "A significant portion of Lagos's employed population has dental HMO coverage they are not using because they do not know which clinics are covered or how to use the benefit. We built a dedicated HMO information section that makes coverage accessible — because a patient who understands their HMO covers part of their treatment removes a major payment objection before they even call.",
      },
      {
        title: "Video Testimonials — Social Proof That Converts Premium",
        body: "Text reviews are easy to fake and easy to ignore. Video testimonials from real patients speaking about their transformation experience cannot be fabricated — and they carry exponentially more persuasive weight for high-ticket treatments. We designed the testimonial section to be the emotional centrepiece of the patient acquisition journey.",
      },
    ],
    outcome:
      "A full patient acquisition system that generates premium dental treatment enquiries and nurtures them through a 90-day automated follow-up cycle. High-ticket treatments that previously required cold calling to close now convert through an automated sequence that runs 24/7.",
    relatedService: "web-development",
  },
  {
    slug: "interop-digital-solutions",
    name: "Interop Digital Solutions Ltd",
    industry: "Technology / Enterprise",
    description:
      "Enterprise digital transformation platform for a Microsoft-certified firm delivering API integration, cloud infrastructure (AWS, Azure, GCP), AI/ML, cybersecurity, and proprietary SaaS products including a payment gateway, e-commerce platform, and geo-tracking service.",
    image: "/project/interopdigital.png",
    tags: ["Next.js", "TypeScript", "Enterprise"],
    url: "https://interop-digital-solutions-ltd.vercel.app",
    highlights: [
      "API development and system integration service showcase",
      "Cloud infrastructure pages covering AWS, Azure, and GCP offerings",
      "Flagship product pages: Process Automation Platform, Payment Gateway, Geo Services (real-time tracking)",
      "AI & Machine Learning and Cybersecurity service sections",
      "Microsoft Partner certification and bank-grade security messaging",
      "Scalable enterprise positioning from startup to large organisation",
    ],
    challenge:
      "Interop competes in enterprise digital transformation — a market where buyers are sceptical, procurement cycles are long, and credibility must be established before a conversation can even begin. A generic technology agency website would lose enterprise RFPs to larger firms with more polished digital presence.",
    approach:
      "We built an enterprise-grade digital presence that communicates technical depth and institutional credibility at every scroll. Microsoft Partner certification, bank-grade security, named cloud platform expertise (AWS, Azure, GCP) — each signal layered deliberately to position Interop as a peer to larger international competitors, not a local alternative.",
    intentFeatures: [
      {
        title: "Cloud Platform-Specific Service Pages",
        body: "Enterprise buyers searching for 'AWS migration partner Nigeria' or 'Azure integration services Lagos' are making specific, high-intent searches. We built dedicated pages for AWS, Azure, and GCP — each with platform-specific language, use cases, and service scope — ensuring Interop appears in the searches that lead directly to procurement decisions.",
      },
      {
        title: "Proprietary Product Showcase — From Services to Products",
        body: "Interop's strategic moat is not just delivering enterprise services — it is the proprietary SaaS it has built: a payment gateway, geo-tracking service, and process automation platform. We gave each product its own showcase page, positioning Interop as a technology creator, not just a technology reseller. This distinction commands premium pricing and stronger partnership conversations.",
      },
      {
        title: "Microsoft Partner Certification — Trust Before a Sales Call",
        body: "In enterprise technology, certifications are buying signals. Microsoft Partner certification tells a procurement team that Interop has been vetted by one of the world's largest technology companies. We made this certification visually prominent — because in enterprise RFP processes, trust established on the website saves weeks of due diligence time.",
      },
    ],
    outcome:
      "An enterprise digital presence that positions Interop alongside larger international competitors in Nigerian procurement conversations — with technical depth communicated through platform-specific pages and proprietary product showcases that generate inbound enterprise enquiries.",
    relatedService: "web-development",
  },
  {
    slug: "access-best-empowerment-hub",
    name: "Access Best Empowerment Hub",
    industry: "Education / Training",
    description:
      "Educational platform empowering Nigerian women and entrepreneurs with training programs, certifications, and skill development resources — with a focus on building economic independence through practical education.",
    image: "/project/accessbest.png",
    tags: ["React", "Vite", "LMS"],
    url: "https://accessbest.com.ng",
    highlights: [
      "Empowerment initiative platform purpose-built for Nigerian women and entrepreneurs",
      "Training program catalog with certifications and skill development pathways",
      "Community and mentorship section for peer learning",
      "Course and resource listing with enrollment flow",
      "Mobile-first design serving learners across Nigeria",
      "Built with React/Vite for fast, lightweight delivery",
    ],
    challenge:
      "Nigerian women and first-generation entrepreneurs face structural barriers to accessing quality training — cost, geography, and the absence of platforms that reflect and speak to their lived realities. A generic LMS would not serve this audience.",
    approach:
      "We built a platform with empowerment at the core of every design decision. The brand language, imagery, and community architecture all reflect the audience's identity and aspirations. Enrollment flows are frictionless, course content is accessible on mobile, and the mentorship architecture creates a community that keeps learners returning.",
    intentFeatures: [
      {
        title: "Mobile-First Design — Meeting Learners Where They Are",
        body: "The majority of Nigerian learners access the internet primarily on mobile devices with variable connectivity. We built the platform mobile-first — not as an afterthought, but as the primary design surface. Fast load times, readable typography on small screens, and offline-compatible content structures ensure learners can access training regardless of network conditions.",
      },
      {
        title: "Certification-Pathway Course Catalog",
        body: "Many learners enroll in training programs without a clear picture of where the learning leads. We built a course catalog that shows not just what each program teaches, but what certification it leads to, what career paths it unlocks, and what learners in similar situations have achieved. Clarity about outcomes increases enrollment completion rates significantly.",
      },
      {
        title: "Community and Mentorship Architecture",
        body: "Courses alone do not transform careers — community does. We built mentorship and peer learning sections into the platform so learners can connect with more advanced members and with each other. This community layer is the retention mechanism: learners who have peers inside the platform complete courses at far higher rates than isolated individual learners.",
      },
    ],
    outcome:
      "An empowerment-centred learning platform that serves Nigerian women and entrepreneurs with training that feels designed for their reality — with a mobile-first architecture that removes the access barriers that generic LMS platforms ignore.",
    relatedService: "web-development",
  },
  // ── Other projects ─────────────────────────────────────────────
  {
    slug: "cascadia-holdings",
    name: "Cascadia Holdings",
    industry: "Corporate / Investment",
    description:
      "Investment and holdings company website for a Nigerian conglomerate operating across logistics, renewable energy, and agribusiness — designed to attract institutional investors and corporate partners.",
    image: "/project/cascadia.png",
    tags: ["Next.js", "Corporate", "Investment"],
    url: "https://www.cascadiaholdings.net",
    highlights: [
      "Three-sector portfolio presentation: logistics, renewable energy, and agribusiness",
      "Corporate governance and investor relations section",
      "Investment opportunities showcase with sector-specific detail",
      "Clean, credibility-first design for institutional and high-net-worth audiences",
      "Nigerian market focus with clear business case for each division",
      "Built with Next.js for SEO performance and fast load times",
    ],
    challenge:
      "Institutional investors and corporate partners evaluating a Nigerian conglomerate need to see governance depth, sector expertise, and a coherent investment thesis — not just a company brochure. The website had to communicate scale without overclaiming it.",
    approach:
      "We built a credibility-first corporate digital presence. Each of the three divisions — logistics, renewable energy, agribusiness — has its own dedicated section with sector-specific investment case, operational data, and market context. The governance section addresses institutional due diligence requirements directly.",
    intentFeatures: [
      {
        title: "Three-Division Architecture — Coherent Conglomerate Storytelling",
        body: "A conglomerate operating across three unrelated sectors risks appearing unfocused to institutional investors. We built a corporate narrative that explains the strategic logic connecting logistics, renewable energy, and agribusiness — presenting diversification as intentional portfolio strategy rather than opportunistic expansion.",
      },
      {
        title: "Sector Investment Cases — Speaking the Language of Capital",
        body: "Institutional investors do not read feature lists — they read investment theses. We built sector-specific investment case sections for each division that present market opportunity, competitive positioning, and return potential in the language capital allocators expect to see in an information memorandum.",
      },
    ],
    outcome:
      "A corporate digital presence that positions Cascadia Holdings as a credible investment destination for institutional capital in Nigeria's logistics, energy, and agribusiness sectors.",
    relatedService: "web-development",
  },
  {
    slug: "megatronics",
    name: "Megatronics Power Solution",
    industry: "Industrial / E-commerce",
    description:
      "Power solutions and engineering company website — built to showcase solar hybrid systems, inverter solutions, CCTV security, smart home automation, and industrial control panels. Serves residential, commercial, and industrial clients across Nigeria.",
    image: "/project/megatronics.png",
    tags: ["Next.js", "E-commerce", "Industrial"],
    url: "https://megatronics.vercel.app",
    highlights: [
      "Solar hybrid system product pages with MPPT technology specifications",
      "Zero switch-over inverter systems for uninterrupted power supply messaging",
      "CCTV surveillance and electric fence security system showcase",
      "Smart home automation section (door locks, gate systems, remote control)",
      "Industrial electrical engineering and control panel service pages",
      "24/7 remote monitoring and 99.9% uptime guarantee — prominently communicated",
    ],
    challenge:
      "Power and energy solutions in Nigeria are an intensely competitive market. Buyers — from homeowners to industrial facility managers — are often sold to by non-technical salespeople and end up with solutions that don't match their actual load requirements. Megatronics needed to position itself as the technically credible alternative.",
    approach:
      "We built the website around technical depth and trust. Product pages include real specifications — MPPT technology, panel wattages, inverter ratings — because a buyer who understands what they are getting is more likely to commit and less likely to complain. The 99.9% uptime guarantee and 24/7 monitoring commitment address the #1 concern of every power solution buyer: what happens when it breaks?",
    intentFeatures: [
      {
        title: "Technical Product Specifications — Credibility Through Detail",
        body: "Most power solution websites in Nigeria lead with prices and vague promises. We led with technical specifications — MPPT technology, system configurations, load capacity ranges — because a technically-informed customer is a better customer. They buy the right system, set correct expectations, and become advocates rather than complainers.",
      },
      {
        title: "Zero Switch-Over Guarantee — The #1 Buying Decision",
        body: "For a business owner running a generator on backup, the moment the power transfers is the moment they lose work. We made the 'zero switch-over' inverter capability the centrepiece of the commercial section — because this single feature is the difference between a prospect choosing Megatronics and choosing a cheaper alternative that costs them more in lost productivity.",
      },
    ],
    outcome:
      "A technical-credibility-first digital presence that attracts commercially-minded power buyers who are ready to invest in the right solution, not the cheapest one — with product pages that pre-qualify customer expectations and reduce post-sale complaints.",
    relatedService: "web-development",
  },
  {
    slug: "evolution-vocational-tutors",
    name: "Evolution Vocational Tutors",
    industry: "Education",
    description:
      "Vocational training platform connecting students to healthcare certifications, vocational skills, and international study-abroad programs. Features courses for CNA, practical nursing, fashion design, IELTS prep, and pathways to work in the UK and Canada.",
    image: "/project/evolution.png",
    tags: ["Next.js", "Education", "LMS"],
    url: "https://evolution-ten-sandy.vercel.app",
    highlights: [
      "Healthcare certification courses: Certified Nursing Assistant, Practical Nursing, Healthcare Support Worker",
      "Vocational programs: Fashion Design, Cosmetics Technology, Computer Training, Food Processing",
      "IELTS and WAEC/NECO exam preparation programs",
      "UK and Canada study-abroad and work permit advisory service",
      "Flexible payment plans with 6-month installment options",
      "Real-world practical training at partner facilities included in program design",
    ],
    challenge:
      "Vocational training providers in Nigeria struggle with one core problem: students don't enrol because the outcome isn't clear enough. Without a vivid picture of where the training leads — a specific job, a specific country, a specific salary range — the investment feels risky.",
    approach:
      "We built the platform around outcomes, not syllabuses. Every course page leads with where it takes the student: UK nursing roles, Canadian healthcare work permits, fashion industry careers. Payment flexibility is prominently featured because affordability is the second biggest barrier. The result is a platform that converts curious students into committed enrollees.",
    intentFeatures: [
      {
        title: "Outcome-First Course Pages",
        body: "Students don't enrol in a course — they enrol in a future. Every program page leads with the destination: what certification you earn, what jobs you qualify for, what countries that certification is recognised in. This outcome-first structure answers the buyer's most important question within the first 10 seconds on the page.",
      },
      {
        title: "International Pathway Advisory — The Premium Upsell",
        body: "Many vocational training students in Nigeria have international ambitions. We built a dedicated UK and Canada work permit advisory section that positions Evolution as more than a training provider — as a pathway partner. This service transforms a ₦50K course enrollment into a ₦300K+ advisory engagement.",
      },
      {
        title: "6-Month Payment Plans — Removing the Affordability Barrier",
        body: "The single biggest drop-off point in course enrollment is the payment page. By making 6-month installment options prominent throughout the site — not buried in a FAQ — we reduced the affordability objection's impact on conversion. Students who can see a path to paying also see a path to enrolling.",
      },
    ],
    outcome:
      "A vocational training platform that converts student enquiries into enrollments by leading with outcomes rather than syllabuses — and by making both the destination (UK/Canada pathways) and the payment (6-month plans) as clear as the course content.",
    relatedService: "web-development",
  },
  {
    slug: "tashico",
    name: "Tashico ICT Institute",
    industry: "Education / Training",
    description:
      "ICT training institute website with course catalog, professional certification prep, and IT consulting services — serving learners across Ogun State since 2010.",
    image: "/project/tashico.png",
    tags: ["Next.js", "Education", "Training"],
    url: "https://tashico.vercel.app",
    highlights: [
      "Professional certification preparation for CompTIA, Cisco, and Microsoft qualifications",
      "Basic to advanced IT and computer literacy courses for all skill levels",
      "Modern computer lab and IT library access featured on the site",
      "IT consulting services: network setup, web development, technical support",
      "Student enrollment flow connected to the contact system",
      "Serving Ogun State learners and businesses since 2010",
    ],
    challenge:
      "Tashico has 15 years of training history in Ogun State — but their digital presence did not reflect that institutional depth. A new student comparing training institutes online would not know that Tashico has been building careers since 2010.",
    approach:
      "We built the website to front-load Tashico's longevity and credibility. The 15-year track record, named certification prep programs (CompTIA, Cisco, Microsoft), and modern facility are all prominent from the first scroll. Every page is structured to answer: 'Why Tashico instead of a newer competitor?'",
    intentFeatures: [
      {
        title: "Named Certification Programs — Search Visibility and Credibility",
        body: "Prospective students searching for 'CompTIA training Ogun State' or 'Cisco certification Lagos' are high-intent buyers. By building dedicated pages for each certification track, Tashico appears in those specific searches and communicates specialisation — not just general 'IT courses.'",
      },
      {
        title: "15-Year Track Record — The Longevity Advantage",
        body: "New training institutes appear constantly in Nigeria. The one thing they cannot fake is longevity. We made Tashico's founding year and 15+ year track record a prominent trust signal — because a student choosing between Tashico and a 2-year-old competitor understands intuitively which one has proven staying power.",
      },
    ],
    outcome:
      "An updated digital presence that finally reflects Tashico's 15-year training legacy in Ogun State — generating organic search traffic for certification-specific queries and converting prospective students who find the institute by name.",
    relatedService: "web-development",
  },
  {
    slug: "first-giwa-feeds",
    name: "First Giwa Feeds & Agro Tech Ltd",
    industry: "Agriculture",
    description:
      "Agricultural company website for a premium animal feeds and agro-solutions brand — covering poultry and fish feed products, custom formulations, and bulk order distribution across Ogun State, Nigeria.",
    image: "/project/firstgiwa.png",
    tags: ["WordPress", "Agriculture", "E-commerce"],
    url: "http://firstgiwa.com",
    highlights: [
      "Poultry and fish feed product catalog (pellet sizes: 2mm–8mm for catfish and tilapia)",
      "Custom feed formulation service for commercial farms and feed millers",
      "Bulk order quote request system with WhatsApp contact integration",
      "Raw ingredient supply pages: protein meals, energy sources, premixes",
      "Distribution network across Ogun State with 24/7 support",
      "Targeting poultry farmers, fish farmers, distributors, and agro retailers",
    ],
    challenge:
      "Commercial fish and poultry farmers in Nigeria make feed purchasing decisions based on two things: feed conversion ratio and price. A generic agriculture website that doesn't speak to these technical concerns loses farmers to competitors who communicate their product performance more credibly.",
    approach:
      "We built the site around technical product confidence. Feed catalog pages include pellet size specifications, protein content ranges, and species-specific formulations — because a catfish farmer who reads that 2mm pellets are designed for fingerling stages immediately trusts that First Giwa understands their operation. WhatsApp integration makes bulk quoting instant.",
    intentFeatures: [
      {
        title: "Species-Specific Product Pages — Speaking Farmer Language",
        body: "A catfish farmer and a poultry farmer have completely different feed requirements. We built product pages organised by species and growth stage — so each farmer lands on content that speaks directly to their operation. A page that knows the difference between a 2mm pellet for fingerlings and a 6mm pellet for table-size catfish is a page that earns farmer trust.",
      },
      {
        title: "WhatsApp Bulk Order Integration — The Distribution Channel",
        body: "Commercial farms and feed distributors don't buy through checkout flows — they negotiate bulk orders. We integrated WhatsApp directly into every product page so farmers can initiate a bulk quote conversation in one tap. This meets the buyer exactly where they prefer to transact in the Nigerian agricultural market.",
      },
    ],
    outcome:
      "A technically credible agricultural e-commerce presence that attracts commercial fish and poultry farmers across Ogun State with species-specific feed content — and converts bulk enquiries through direct WhatsApp integration.",
    relatedService: "web-development",
  },
  {
    slug: "suko-paint",
    name: "Suko Paint",
    industry: "Manufacturing / E-commerce",
    description:
      "E-commerce platform for a premium Nigerian paint brand — featuring a full product catalog, color visualizer tool, dealer locator, and project calculator to help buyers choose and budget the right paint.",
    image: "/project/sukopaint.png",
    tags: ["Next.js", "E-commerce", "Product Catalog"],
    url: "https://www.sukopaint.com",
    highlights: [
      "Full premium paint product catalog with categories and specifications",
      "Color visualizer tool to help buyers preview shades before purchasing",
      "Dealer locator to find the nearest stockist or retailer",
      "Project calculator to estimate paint quantities and costs by surface area",
      "Mobile-first responsive design for on-site and in-store browsing",
      "Built with Next.js for fast load times and strong SEO performance",
    ],
    challenge:
      "Paint buyers in Nigeria predominantly make purchasing decisions in hardware stores based on what is physically available. To shift purchase intent online, Suko Paint needed to give buyers a compelling reason to choose their colour and brand before walking into any store — so that they arrive at the counter asking specifically for Suko.",
    approach:
      "We built the digital experience around the two moments that matter most in a paint purchase: colour selection and quantity estimation. The visualiser makes colour choice happen on the website. The project calculator tells buyers exactly how many cans they need. By the time they reach a dealer, the decision is already made — Suko just needs to be in stock.",
    intentFeatures: [
      {
        title: "Color Visualizer — The Decision Made Before the Store",
        body: "The single biggest driver of paint brand loyalty is colour confidence. A buyer who chose their shade on the Suko website arrives at a hardware store with a specific shade code — they are no longer susceptible to being switched to a competitor by a sales assistant. The visualiser is a brand lock-in tool disguised as a helpful feature.",
      },
      {
        title: "Project Calculator — Preventing Under-Purchase Regret",
        body: "Nothing loses a customer faster than selling them too little paint and forcing a second trip. Our project calculator asks for room dimensions and surface type, then returns an exact can count with a 10% safety margin. Buyers who calculate before purchasing are more confident at checkout and less likely to return products.",
      },
      {
        title: "Dealer Locator — Converting Digital Intent to Physical Purchase",
        body: "Suko's distribution is retail-first. The dealer locator ensures that a buyer who chose their colour online can immediately find the nearest stockist. This bridges the digital-to-physical purchase journey — preventing a buyer from choosing Suko online but purchasing a competitor's paint simply because they didn't know where to find it.",
      },
    ],
    outcome:
      "A digital brand experience that moves the paint purchase decision from the hardware store shelf to the buyer's phone — with a colour visualiser and project calculator that create Suko-specific intent before any physical interaction with a dealer.",
    relatedService: "web-development",
  },
  {
    slug: "immovables-realty",
    name: "Immovables Realty",
    industry: "Real Estate",
    description:
      "Smart real estate marketplace with 500+ property listings, flexible payment plans, a 5% cashback rewards program, and WhatsApp-first consultation booking — serving property buyers and investors in Ogun State, Nigeria.",
    image: "/project/immovablesrealty.png",
    tags: ["React", "Vite", "Real Estate"],
    url: "https://www.immovablesrealty.com",
    highlights: [
      "500+ property listings across multiple estate locations in Ogun State",
      "5% cashback rewards program for property purchases and referrals",
      "Flexible payment plans: 40% deposit + 60% balance options",
      "Premium estate developments: Prime Haven Grove, Wura Garden Estate",
      "WhatsApp consultation booking integration for friction-free enquiries",
      "Expert advisory and portfolio management service pages",
    ],
    challenge:
      "Property buyers in Ogun State face two recurring frustrations with real estate websites: listings with no pricing transparency, and no clear path to getting a human on the phone quickly. Immovables Realty needed to stand apart by making the purchase journey feel faster, more transparent, and more rewarding than competitors.",
    approach:
      "We built transparency and immediacy into every touchpoint. Flexible payment structures (40/60 deposit plans) are displayed upfront on every listing, not hidden behind a call request. A 5% cashback rewards program creates a loyalty incentive that competitors don't offer. WhatsApp consultation booking ensures every enquiry connects to a real agent within minutes.",
    intentFeatures: [
      {
        title: "Payment Plan Transparency — Removing the Affordability Barrier",
        body: "Most Nigerian property websites hide payment structures behind a 'Call to Learn More' barrier — creating friction that loses buyers who would have converted with clear information. We displayed payment plan structures upfront on every listing: 40% deposit, 60% balance, installment windows. Transparency at this stage filters for serious buyers and removes the #1 objection.",
      },
      {
        title: "5% Cashback Rewards — The Competitive Differentiator",
        body: "In a commoditised property market, every developer claims quality and location. Very few offer a financial loyalty incentive. The 5% cashback rewards program gives buyers a material reason to choose Immovables Realty over a competitor of equal quality — and it creates a referral flywheel where satisfied buyers actively recommend the platform to their network.",
      },
      {
        title: "WhatsApp-First Consultation — Speed as a Conversion Tool",
        body: "Property enquiries have a conversion half-life of minutes. A buyer who clicks 'enquire' and doesn't hear back for 24 hours has usually started a conversation with a competitor. Our WhatsApp-first consultation booking connects enquiries to agents immediately — meeting buyers in the communication channel they already prefer and expect.",
      },
    ],
    outcome:
      "A transparent, buyer-first property marketplace that converts listings into enquiries at a higher rate through payment plan visibility and a WhatsApp consultation flow — with a cashback rewards program that drives referrals and repeat transactions.",
    relatedService: "web-development",
  },
  {
    slug: "immovables-group",
    name: "Immovables Group",
    industry: "Real Estate",
    description:
      "Full-stack corporate website for a Nigerian conglomerate with three divisions — Immovables Real Estate (₦500M+ valuations), Immovables Farm (100+ hectares), and Immovables Tech. Integrated CRM and RESTful API powering a seamless multi-subsidiary experience.",
    image: "/project/immovablesgroup.png",
    tags: ["Next.js", "Laravel", "RESTful API"],
    url: "https://immovablesgroup.com",
    highlights: [
      "Three-division corporate architecture: Real Estate, Farm, and Tech under one platform",
      "₦500M+ in property valuations presented across the real estate subsidiary",
      "100+ hectares agricultural operations with 30% yield increase data points",
      "Immovables Tech digital transformation subsidiary with client success metrics",
      "Three-step client engagement model (consult → match → deliver) built into the UX",
      "Laravel RESTful API backend powering a Next.js frontend with live data",
    ],
    challenge:
      "A conglomerate with three unrelated subsidiaries — real estate, agriculture, and technology — risks presenting as an unfocused business to both investors and customers. The website needed to communicate each division's credibility independently while presenting a coherent group narrative that explains why these businesses belong together.",
    approach:
      "We built a two-tier digital architecture: a powerful group homepage that tells the conglomerate's strategic story, and distinct subsidiary experiences that give each division its own voice and credibility. A Laravel RESTful API backend provides live data to the Next.js frontend, ensuring listings, farm data, and tech metrics stay current without manual updates.",
    intentFeatures: [
      {
        title: "Three-Division Architecture — Coherent Conglomerate Narrative",
        body: "Real estate, agriculture, and technology seem unrelated until you understand the strategic logic: agricultural land → development opportunity → technology enablement. We built a corporate narrative section that explains this connection, turning apparent diversification into a coherent investment thesis that institutional partners can understand and advocate internally.",
      },
      {
        title: "Laravel API + Next.js — Live Data Across Three Subsidiaries",
        body: "Static websites become outdated within weeks in fast-moving sectors like real estate and agriculture. We built a RESTful API backend that allows each subsidiary to push live data — current property valuations, farm output metrics, tech client numbers — to the group website in real time. The platform stays current without anyone manually updating it.",
      },
      {
        title: "Consult → Match → Deliver UX Model",
        body: "A group with three subsidiaries has a complex client journey. We built a three-step engagement model into the UX that guides visitors through: understanding what Immovables Group does, identifying which division is relevant to their need, and initiating a qualified conversation. This structure reduces the cognitive load of 'which door do I knock on?' for first-time visitors.",
      },
    ],
    outcome:
      "A full-stack corporate web platform that communicates the Immovables Group's scale across three divisions — with live API-powered data from real estate, farm, and technology subsidiaries and a UX model that routes visitors to the right conversation.",
    relatedService: "web-development",
  },
  {
    slug: "immovables-digital-space",
    name: "Immovables Digital Space",
    industry: "Technology",
    description:
      "Digital agency website showcasing AI-powered chatbots, marketing automation, SEO, CRM, and web development services — built to serve real estate, education, e-commerce, and hospitality businesses.",
    image: "/project/immovablestech.png",
    tags: ["WordPress", "Custom Theme", "Digital Solutions"],
    url: "https://immovablestech.com",
    highlights: [
      "AI-powered WhatsApp chatbot and lead qualification automation showcase",
      "Digital marketing and SEO service pages with clear ROI positioning",
      "CRM and marketing automation integration options for multiple industries",
      "98.5% uptime guarantee and 24/7 AI support messaging",
      "Service verticals: real estate, education, retail, e-commerce, hospitality",
      "WordPress with a custom theme built for speed and conversion",
    ],
    challenge:
      "A digital agency selling AI automation and marketing services to SMEs needed to demonstrate — through the website itself — that they practice what they preach. A generic WordPress site for an AI company is a credibility contradiction.",
    approach:
      "We built the website as a proof of concept for the services being sold. AI-powered lead qualification, WhatsApp chatbot integration, and conversion-optimised landing pages are not just described — they are implemented on the agency's own digital presence, so visitors experience the capabilities directly.",
    intentFeatures: [
      {
        title: "Industry-Vertical Service Pages — Sector-Specific Relevance",
        body: "A real estate developer considering marketing automation has completely different objections and requirements than a hospitality business. We built vertical-specific service pages for real estate, education, retail, e-commerce, and hospitality — each speaking the language of that sector's specific challenges and KPIs. Relevance at this level converts prospects who would otherwise conclude the agency is too generic.",
      },
      {
        title: "AI Chatbot and WhatsApp Integration — Live Demonstration",
        body: "There is no better proof of an AI lead qualification service than experiencing one in action. We built the WhatsApp chatbot integration into the agency's own website contact flow — so every visitor who enquires is first qualified by the same AI system the agency sells to clients. The demonstration is the sales pitch.",
      },
    ],
    outcome:
      "A digital agency presence that functions as both a marketing asset and a live proof of concept — where every visitor experiences the AI automation capabilities the agency sells, generating qualified leads who have already been pre-qualified by the system they are enquiring about.",
    relatedService: "web-development",
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
    highlights: [
      "Digital ajo/esusu rotating savings circles — the traditional model brought online",
      "Group savings formation, management, and contribution tracking in real time",
      "Instant bank account withdrawal when savings cycles complete",
      "Accessible from ₦500 — designed for everyday Nigerians at all income levels",
      "Savings goal-setting with progress visualisation",
      "Laravel API backend with Next.js frontend and payment integration",
    ],
    challenge:
      "The traditional ajo savings model has operated in Nigerian communities for generations — but it runs on trust, physical presence, and manual tracking. The challenge was to take a cultural institution that Nigerians inherently understand and trust, and migrate it into a digital format without losing the community and trust dynamics that make it work.",
    approach:
      "We designed Alajo to feel familiar, not foreign. The language, the savings mechanics, and the circle formation model all mirror the traditional ajo experience — just hosted on a platform with real-time tracking, instant withdrawals, and the reliability of bank-grade infrastructure. Starting from ₦500 was non-negotiable: this is a tool for everyday Nigerians, not fintech enthusiasts.",
    intentFeatures: [
      {
        title: "Group Savings Circles — The Cultural Model Preserved Digitally",
        body: "The power of ajo is the social commitment: when your circle depends on your contribution, you save consistently. We built the circle formation and management system to mirror this social accountability — members can see each other's contributions, cycles are transparent, and the social pressure that makes ajo work offline operates online as well. We did not reinvent savings; we preserved a model that already works.",
      },
      {
        title: "₦500 Minimum — Financial Inclusion by Design",
        body: "Most fintech apps set minimums that accidentally exclude the people who most need savings infrastructure. A ₦500 minimum was a deliberate product decision: it brings in Nigerians at every income level, builds saving habits progressively, and creates a user base that grows with the product as their income grows. Inclusion at the entry point creates loyalty at the growth point.",
      },
      {
        title: "Instant Withdrawal — Trust Through Liquidity",
        body: "The biggest fear around any savings scheme in Nigeria — digital or traditional — is: can I get my money out when I need it? We built instant bank account withdrawal into the core product, not as a premium feature. The ability to access funds immediately when a savings cycle completes is the single feature that transforms digital savings sceptics into Alajo advocates.",
      },
    ],
    outcome:
      "A FinTech platform that bridges generational trust in traditional ajo savings with the reliability and accessibility of digital infrastructure — serving everyday Nigerians from ₦500 with a savings mechanism built on cultural familiarity rather than foreign fintech design patterns.",
    relatedService: "web-development",
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
    highlights: [
      "P2P crypto-to-Naira exchange: USDT, Bitcoin, and Ethereum with instant bank transfer settlement",
      "4-step order flow: create account → select asset → place order → receive Naira",
      "Multi-tier referral and affiliate commission system with secondary earnings",
      "Competitive live exchange rate display with transparent fees",
      "24/7 WhatsApp customer support integrated directly into the platform",
      "Bank-grade security messaging and fast settlement as core value propositions",
    ],
    challenge:
      "Nigerian crypto traders are a sophisticated, sceptical audience. They have encountered scam platforms, delayed withdrawals, and arbitrary account freezes. To build a P2P exchange that earns their trust, every feature needed to communicate speed, transparency, and legitimacy — not just claim it.",
    approach:
      "We built the order flow to be the trust proof. Every step is transparent: live exchange rates with no hidden fees, a clearly explained 4-step process, and instant bank transfer settlement that delivers Naira within minutes of a transaction completion. The affiliate system creates a network of traders who promote the platform because they have financial skin in its success.",
    intentFeatures: [
      {
        title: "4-Step Order Flow — Clarity Converts Sceptics",
        body: "Nigerian crypto traders who have been burned before don't trust complexity. Our 4-step flow — create account, select asset, place order, receive Naira — is the entire product promise made explicit before any money moves. Showing the process upfront removes the 'what happens after I send my crypto?' fear that is the #1 abandonment point on exchange platforms.",
      },
      {
        title: "Live Exchange Rates With Zero Hidden Fees",
        body: "The Nigerian crypto market has normalised hidden spreads and surprise fees. We made transparent, live rate display a feature — not just a policy. The rate you see is the rate you get. This single trust signal differentiates OlowoEx from competitors who show competitive rates and then extract margin at settlement.",
      },
      {
        title: "Multi-Tier Affiliate System — Growth Through Trader Networks",
        body: "The most trusted recommendations in the Nigerian crypto community come from traders who have already used a platform. Our multi-tier referral system gives active users a financial stake in the platform's growth — secondary commissions on their referrals' transactions mean every satisfied trader becomes an incentivised distributor. Word-of-mouth with economic skin in the game.",
      },
    ],
    outcome:
      "A P2P crypto exchange platform built on the trust signals that Nigerian traders actually require — transparent rates, a visually clear order flow, and instant Naira settlement — with an affiliate system that turns the user base into an organic growth engine.",
    relatedService: "web-development",
  },
  {
    slug: "the-pen-school",
    name: "The Pen Muslim Montessori School",
    industry: "Education",
    description:
      "Educational institution website for an Islamic Montessori school — with admissions portal, student information system, program overview, and parent communication tools.",
    image: "/project/thepen.png",
    tags: ["Vite", "React", "Education"],
    url: "https://thepenmuslimschools.com",
    highlights: [
      "Admissions portal with online enquiry and application flow",
      "School programs and curriculum overview for prospective parents",
      "Student information and academic calendar section",
      "Parent communication tools built into the platform",
      "Islamic values and Montessori methodology presented together",
      "Built with React/Vite for fast, lightweight delivery",
    ],
    challenge:
      "Islamic Montessori education is a specific and values-driven choice. Parents choosing this path are not comparing generic schools — they are looking for an institution that embodies both rigorous Montessori methodology and authentic Islamic values. The website had to speak to both dimensions simultaneously without one undermining the other.",
    approach:
      "We built the platform around the intersection of values and methodology. The Islamic identity is expressed through design language and copy tone; the Montessori credentials are communicated through curriculum explanations and pedagogical approach. Parents who are the right fit for the school recognise themselves immediately. The admissions flow captures them while their intent is highest.",
    intentFeatures: [
      {
        title: "Values-First Brand Expression",
        body: "Islamic Montessori parents are not price-shopping — they are mission-matching. Every design element, colour choice, and copy line was crafted to resonate with parents who are actively seeking an institution whose values align with their home environment. A parent who feels immediate recognition of their values in the brand is a parent who is already pre-sold on the school.",
      },
      {
        title: "Online Admissions Flow — Capturing Peak Interest",
        body: "A parent who discovers the school online has a brief window of peak interest. We built an admissions enquiry flow that captures that moment — gathering parent contact, child's age, and academic interest level without friction. The data collected enables a personalised follow-up from the admissions team that converts enquiries into campus visits.",
      },
    ],
    outcome:
      "An Islamic Montessori school platform that communicates both values alignment and pedagogical credibility to the specific audience this school is built for — converting parent research visits into admissions enquiries through a frictionless online application flow.",
    relatedService: "web-development",
  },
  {
    slug: "polygrace-home-healthcare",
    name: "Polygrace Home Healthcare",
    industry: "Healthcare",
    description:
      "Healthcare services website for a compassionate home care provider in Calgary, Canada — covering patient scheduling, service catalogue, and care coordination for in-home medical support.",
    image: "/project/polygrace.png",
    tags: ["Vite", "Healthcare", "Scheduling"],
    url: "https://www.polygracehomehealthcare.ca",
    highlights: [
      "In-home healthcare services catalogue for Calgary-area patients",
      "Patient care scheduling and coordination presented clearly",
      "Compassionate brand positioning — designed for trust in a sensitive market",
      "Canadian healthcare market compliance and tone of voice",
      "Service enquiry and contact flow for new patient onboarding",
      "Built with Vite for fast, performant delivery",
    ],
    challenge:
      "Home healthcare buyers in Canada are making decisions during some of the most emotionally difficult moments of their lives — arranging care for an aging parent or a recovering family member. A clinical, transactional website creates the wrong emotional context for this type of purchase.",
    approach:
      "We built the entire platform around compassion as a design principle. Every copy line, image choice, and user flow was crafted to reduce anxiety and communicate care — not just services. The scheduling flow is gentle and clear; the service catalogue is written for families, not clinicians. Trust is earned through empathy before it is earned through credentials.",
    intentFeatures: [
      {
        title: "Compassion-First Brand Voice",
        body: "Healthcare websites in Canada typically lead with clinical language and certification lists. Polygrace's audience — families arranging care for loved ones — needs to feel heard first, then informed. We wrote every page with a tone that acknowledges the emotional weight of the decision and positions Polygrace as a partner in care, not just a service provider. This distinction converts anxious researchers into confident enquirers.",
      },
      {
        title: "Clear Service Catalogue — Reducing Decision Complexity",
        body: "Families new to home healthcare often don't know what type of care they need. Our service catalogue is structured around need states — 'post-surgery recovery,' 'senior companionship,' 'chronic condition management' — rather than clinical service categories. Meeting families where their language is reduces confusion and accelerates the enquiry decision.",
      },
    ],
    outcome:
      "A compassion-centred home healthcare platform for the Calgary market that converts family researchers into enquiries by addressing the emotional context of the purchase decision before the clinical details — with a service catalogue written in the language families actually use.",
    relatedService: "web-development",
  },
  {
    slug: "growth-vault",
    name: "Growth Vault",
    industry: "Marketing / Automation",
    description:
      "Business growth acceleration platform combining professional website provision with training access and business tools — targeting entrepreneurs and business owners seeking a complete digital foundation.",
    image: "/project/growthvault.png",
    tags: ["Next.js", "Automation", "Marketing"],
    url: "https://growth-vault-launch.vercel.app",
    highlights: [
      "Exclusive membership platform combining a professional website with training access",
      "Business growth tools and resources tailored for entrepreneurs",
      "Lead generation and conversion-focused landing page design",
      "Training modules integrated alongside website delivery service",
      "Clear value stack positioning for SME and solopreneur audiences",
      "Built with Next.js for performance and SEO",
    ],
    challenge:
      "Entrepreneurs buying their first professional website often don't know what they don't know — they buy a site and then discover they also need training, tools, and support to generate business from it. Growth Vault needed to communicate its bundled value proposition clearly enough that buyers understood why the complete package outperformed buying components separately.",
    approach:
      "We built the landing page around the value stack — making each component of the membership (website + training + tools) explicitly visible and collectively more compelling than any one part alone. Conversion copywriting leads with the entrepreneur's core frustration: having a business but not having the digital infrastructure to grow it.",
    intentFeatures: [
      {
        title: "Value Stack Architecture — Why the Bundle Beats the Parts",
        body: "Buyers default to price comparison when they don't understand holistic value. We built the Growth Vault page to present the complete value stack — website, training, and growth tools — as a coherent system, not a bundle of add-ons. When a buyer sees that the training unlocks the website's potential and the tools implement the training's lessons, the bundle becomes the obvious choice over any individual component.",
      },
      {
        title: "Problem-First Conversion Copywriting",
        body: "Entrepreneurs don't buy websites — they buy revenue, visibility, and credibility. Every headline and copy block on the Growth Vault page leads with the entrepreneur's specific frustration before presenting the solution. This emotional resonance before the product pitch is what separates a landing page that converts from one that informs.",
      },
    ],
    outcome:
      "A high-converting membership landing page that communicates Growth Vault's bundled value proposition to entrepreneurs — with a value stack presentation that makes the complete package obviously superior to its individual components.",
    relatedService: "web-development",
  },
  {
    slug: "majestic-services",
    name: "Majestic Services UK",
    industry: "Facility Management",
    description:
      "Professional cleaning and garden maintenance services website for a London-based facility management company — with clear service listings, booking capability, and a trust-first design for homeowners and property managers.",
    image: "/project/majesticservices.png",
    tags: ["Vite", "React", "Service Platform"],
    url: "https://www.majesticservices.co.uk",
    highlights: [
      "London-based garden maintenance and professional cleaning service catalogue",
      "Property management service listings for homeowners and landlords",
      "Booking and enquiry flow for new clients",
      "Trust-first design with credentials and service guarantees",
      "UK service area focus with clear geographic coverage",
      "Built with React/Vite for lightweight, fast delivery",
    ],
    challenge:
      "Home services in London operate in a high-trust market. A homeowner inviting a cleaning or garden maintenance team onto their property is making a safety and reliability judgement, not just a price decision. Without visible trust signals, a generic website loses those homeowners to providers with more credible digital presence.",
    approach:
      "We built the platform around the trust signals that London homeowners look for: named insurance coverage, vetted team credentials, geographic service area clarity, and a booking system that communicates reliability. Every design element communicates: 'this is a professional operation, not a sole trader with a phone number.'",
    intentFeatures: [
      {
        title: "Geographic Coverage Clarity — Reducing Pre-Enquiry Drop-Off",
        body: "The single most common reason a London homeowner abandons a service enquiry is not knowing if the company covers their area. We built clear service area coverage into every page — specific boroughs, postcodes, and regions displayed prominently. Eliminating this uncertainty before the enquiry form is completed directly increases enquiry completion rates.",
      },
      {
        title: "Trust Signal Architecture — Credentials Before Price",
        body: "Home service buyers in the UK have been burned by unreliable providers. We made insurance documentation, service guarantees, and team credentials visually prominent before pricing appears — because a buyer who trusts the provider's reliability is less price-sensitive than a buyer evaluating providers based on cost alone.",
      },
    ],
    outcome:
      "A trust-anchored facility services platform for the London market that converts homeowner research into enquiries by communicating credentials and geographic coverage upfront — reducing the uncertainty that causes pre-enquiry abandonment.",
    relatedService: "web-development",
  },
  {
    slug: "royal-quran",
    name: "Royal Quran Competition",
    industry: "Events / Community",
    description:
      "Islamic Quranic competition platform for the Royal Bee Qur'an Competition — commemorating Late Pa Odusote. Includes event registration, competition management, and community engagement for Quranic excellence.",
    image: "/project/royalquran.png",
    tags: ["Next.js", "Event Management"],
    url: "https://royal-quran-shine.vercel.app",
    highlights: [
      "Competition registration and participant management system",
      "Event information and schedule pages for the Royal Bee Qur'an Competition 2025",
      "Commemorative design honouring Late Pa Odusote",
      "Community engagement and results publication section",
      "Islamic community audience focus with appropriate design language",
      "Built with Next.js for fast event-day performance under traffic",
    ],
    challenge:
      "A Quranic competition platform needs to honour its commemorative purpose while efficiently handling participant registration and community engagement. The design had to reflect Islamic values and the legacy of Late Pa Odusote while functioning reliably under event-day traffic spikes.",
    approach:
      "We built the platform to balance reverence and functionality. The commemorative design language honours the event's purpose; the registration and participant management systems ensure the operational side runs smoothly on competition day when traffic peaks.",
    intentFeatures: [
      {
        title: "Commemorative Design Language",
        body: "The Royal Bee Qur'an Competition is a memorial event as much as a competition. We built a visual identity that communicates respect for the legacy being honoured — with design choices that the Muslim community recognises as appropriate for a sacred occasion. A platform that feels right to its audience is one they return to and share with their networks.",
      },
      {
        title: "Event-Day Traffic-Ready Architecture",
        body: "Competition platforms experience their heaviest traffic in the hours around registration deadlines and results announcements. We built the platform on Next.js with static generation for content pages and dynamic routes for registration — ensuring the site stays fast and stable exactly when it matters most.",
      },
    ],
    outcome:
      "A Quranic competition platform that honours its commemorative purpose with an appropriate Islamic design identity while handling participant registration and community engagement reliably on event day.",
    relatedService: "web-development",
  },
  {
    slug: "business-revival-webinar",
    name: "Business Revival Webinar",
    industry: "Events / Training",
    description:
      "Webinar landing page and event management platform for a business training program — designed to drive registrations, communicate urgency, and convert business owners facing competitive challenges.",
    image: "/project/businessrevival.png",
    tags: ["Next.js", "Webinar", "Event Platform"],
    url: "https://webinar.immovablestech.com",
    highlights: [
      "High-converting webinar landing page with problem-first headline",
      "Event registration system with confirmation flow",
      "Webinar streaming integration for live attendee delivery",
      "Business training program positioning for competitive SME owners",
      "Urgency and scarcity messaging built into the conversion design",
      "Built with Next.js for Immovables Tech's training division",
    ],
    challenge:
      "Webinar registration pages have a brutal half-life: most registrations happen within 48 hours of launch and drop to near zero after. Every element of the page needed to drive immediate action — not build consideration over time.",
    approach:
      "We built the landing page as a conversion machine. The headline leads with the specific pain of the target audience (competitive pressure on SME owners), urgency and scarcity are structural — not cosmetic — elements of the page, and the registration flow reduces the time from 'interested' to 'registered' to under 30 seconds.",
    intentFeatures: [
      {
        title: "Problem-First Headline — The Conversion Hook",
        body: "Webinar registrations live and die on the first 3 seconds. We led with the audience's exact frustration — the specific competitive challenge facing Nigerian SME owners — rather than leading with the speaker's credentials or the webinar title. A headline that articulates a pain the reader is already feeling creates an instant 'this is for me' recognition that drives registration.",
      },
      {
        title: "Urgency Architecture — Scarcity That Converts",
        body: "Urgency on a webinar page only works if it's structural, not decorative. We built the urgency into the page logic — a visible seat counter that decrements, a registration deadline timer, and social proof elements showing live registration activity. These elements work together to make 'register later' feel like a riskier decision than 'register now.'",
      },
    ],
    outcome:
      "A webinar registration landing page that generated the majority of its total registrations within the first 72 hours of launch — through problem-first copy and structural urgency mechanisms that made immediate registration the natural decision.",
    relatedService: "web-development",
  },
  {
    slug: "strategic-effects",
    name: "Strategic Effects Ltd",
    industry: "Consulting",
    description:
      "Strategic communication and PR firm website — showcasing reputation management, media strategy, and stakeholder relations services for major Nigerian institutions including the Central Bank of Nigeria, Union Bank, and Polaris Bank.",
    image: "/project/strategiceffects.png",
    tags: ["WordPress", "Corporate", "Consulting"],
    url: "https://strategiceffectsltd.com",
    highlights: [
      "Reputation management and crisis communication service pages",
      "Digital and social media strategy, stakeholder relations, and event PR showcased",
      "30+ years of journalism and media experience used as a credibility anchor",
      "High-profile client portfolio: Central Bank of Nigeria, Union Bank, Polaris Bank",
      "Publications, graphic design, and corporate promotions service sections",
      "WordPress corporate theme built to communicate gravitas and trust",
    ],
    challenge:
      "A PR and strategic communications firm that has worked with the Central Bank of Nigeria needed a digital presence that matched the institutional gravity of its client portfolio. A basic WordPress site would undermine the credibility its 30+ year track record deserved.",
    approach:
      "We built the website around the client's most powerful asset: its named institutional relationships. Central Bank of Nigeria, Union Bank, Polaris Bank — these names on a PR firm's website do the selling before a pitch meeting is ever requested. The design language communicates gravitas through restraint — premium typography, structured layout, institutional colour palette.",
    intentFeatures: [
      {
        title: "Named Client Portfolio — Institutional Credibility on Display",
        body: "In PR and communications consulting, client names are the primary credibility signal. We made the CBN, Union Bank, and Polaris Bank relationships visually prominent on the homepage and service pages — because a prospect considering a PR retainer who sees those institutions on the client list immediately recalibrates their perception of the firm's capabilities and access.",
      },
      {
        title: "30-Year Track Record — Journalism Background as a Differentiator",
        body: "Most PR firms are founded by people with agency backgrounds. Strategic Effects was built by professionals with 30+ years of journalism experience — which means they understand how editors think, what stories get published, and how media coverage actually works from the inside. We made this distinction the firm's key differentiator, not just a biographical note.",
      },
    ],
    outcome:
      "A corporate communications platform that reflects the institutional gravity of Strategic Effects' client portfolio — with named CBN and banking sector relationships that generate inbound enquiries from organisations that need crisis communications and reputation management support.",
    relatedService: "web-development",
  },
  {
    slug: "harzotech-website",
    name: "Harzotech Nig Ltd",
    industry: "Technology",
    description:
      "IT consulting and software development company website showcasing services, portfolio, and technology expertise.",
    image: "/project/harzotech.png",
    tags: ["WordPress", "IT Services", "Corporate"],
    url: "https://harzotech.com",
    highlights: [
      "Full IT consulting and software development service showcase",
      "Portfolio of delivered projects across multiple industries",
      "Technology expertise and team credentials section",
      "Lead generation with contact and consultation booking",
      "Early company website before the current Next.js platform",
      "WordPress build that established Harzotech's initial digital presence",
    ],
  },
  {
    slug: "suap",
    name: "Suap.ng — Crypto Trading",
    industry: "FinTech / Crypto",
    description:
      "Cryptocurrency trading platform with real-time market data, secure wallet integration, and trading tools for the Nigerian market.",
    image: "/project/suap.png",
    tags: ["Laravel", "Crypto", "Trading Platform"],
    url: "https://suap.ng",
    highlights: [
      "Cryptocurrency trading platform built for Nigerian users",
      "Real-time market data and price tracking",
      "Secure wallet integration for deposits and withdrawals",
      "Order management and trade history dashboard",
      "Naira on-ramp and off-ramp payment flows",
      "Built with Laravel for a robust, secure backend",
    ],
  },
  {
    slug: "phoenix-derma",
    name: "Phoenix Derma Lagos",
    industry: "Healthcare / Skincare",
    description:
      "Premium dermatology and skincare clinic with advanced sales funnel system, automated patient acquisition, booking system, and integrated marketing campaigns.",
    image: "/project/phoenixderma.png",
    tags: ["Sales Funnel", "Marketing Automation", "Healthcare"],
    highlights: [
      "Premium dermatology clinic brand identity and website design",
      "Automated patient acquisition sales funnel with lead nurturing",
      "Online consultation and appointment booking system",
      "Skincare treatment showcase with before/after results",
      "Integrated marketing campaign landing pages",
      "Conversion-optimised design for the Lagos premium healthcare market",
    ],
  },
  {
    slug: "brand-tune",
    name: "Brand Tune",
    industry: "Branding / Multimedia",
    description:
      "Creative brand jingle and audio branding platform for businesses seeking memorable sonic identities.",
    image: "/project/brandtune.png",
    tags: ["Web Development", "Multimedia", "Branding"],
    highlights: [
      "Audio branding and brand jingle showcase with embedded samples",
      "Service pages for sonic identity, radio jingles, and brand voice",
      "Portfolio of brand audio work for Nigerian businesses",
      "Lead capture flow for businesses enquiring about audio branding",
      "Multimedia-first design that lets the sound tell the story",
      "Clean, creative aesthetic matching the brand's positioning",
    ],
  },
  {
    slug: "crypto-trading-app",
    name: "Crypto Trading App",
    industry: "FinTech / Crypto",
    description:
      "Advanced cryptocurrency trading application with real-time charts, portfolio tracking, and secure transactions.",
    image: "/project/cryptoapp.png",
    tags: ["Laravel", "Blockchain", "Trading"],
    highlights: [
      "Real-time cryptocurrency price charts and market data",
      "Secure portfolio tracking and transaction history",
      "Order placement and trade execution flow",
      "User authentication with two-factor security",
      "Naira deposit and withdrawal with local bank integration",
      "Built with Laravel for a scalable, secure backend",
    ],
  },
  {
    slug: "new-telegraph",
    name: "New Telegraph Newspaper",
    industry: "Media / News",
    description:
      "Major Nigerian news publication platform with breaking news, multimedia content, and digital subscriptions — one of Nigeria's most visited online news portals.",
    image: "/project/newtelegraph.png",
    tags: ["WordPress", "News Portal", "Media"],
    url: "https://newtelegraphng.com",
    highlights: [
      "High-traffic Nigerian news portal built on WordPress",
      "Breaking news, politics, business, and sports editorial categories",
      "Multimedia content: videos, photo galleries, and live reporting",
      "Digital subscription and membership management",
      "Advertising placement and sponsored content integration",
      "Optimised for high-traffic load during breaking news events",
    ],
    challenge:
      "A major Nigerian newspaper moving fully online needed a digital platform that could handle breaking news traffic spikes without going down — while maintaining editorial velocity, advertising integrations, and a reader experience that kept audiences returning.",
    approach:
      "We built the New Telegraph's digital platform around two primary requirements: editorial speed and traffic resilience. The WordPress architecture is optimised for journalist workflow — quick publishing, multimedia uploads, and category management without technical friction. Caching and infrastructure layers handle the traffic spikes that come with breaking political and economic news.",
    intentFeatures: [
      {
        title: "Editorial Velocity — Publishing Without Technical Friction",
        body: "A newsroom publishes hundreds of articles per day. Every minute of technical friction — slow upload, confusing CMS, broken editor — costs stories and reader engagement. We built and configured the editorial workflow for speed: fast media uploads, clean article templates, and a publishing flow that lets journalists focus on the story, not the platform.",
      },
      {
        title: "Breaking News Traffic Architecture",
        body: "The New Telegraph covers Nigerian politics, economics, and breaking news — categories where a single story can drive hundreds of thousands of visitors in an hour. We built a caching and infrastructure layer that absorbs these spikes without the site going down at exactly the moment when maximum reader attention is available.",
      },
    ],
    outcome:
      "A high-traffic news platform that serves New Telegraph's editorial team with fast publishing tools while handling the unpredictable traffic spikes that come with major Nigerian news coverage — one of Nigeria's most visited online news portals.",
    relatedService: "web-development",
  },
  {
    slug: "yuan-bridge",
    name: "Yuan Bridge — Naira to Yuan Flow",
    industry: "FinTech / Currency Exchange",
    description:
      "Currency exchange platform facilitating seamless Naira to Yuan conversions with real-time rates, secure transactions, and a clean UX built for Nigerian businesses trading with China.",
    image: "/project/yuanbridge.png",
    tags: ["Next.js", "FinTech", "Currency Exchange"],
    url: "https://naira-yuan-flow.vercel.app",
    highlights: [
      "Naira-to-Yuan currency exchange with real-time rate display",
      "Secure transaction flow for cross-border payments to China",
      "Clean, trust-first UX designed for business users",
      "Step-by-step exchange process with clear fee transparency",
      "Built for Nigerian importers, traders, and businesses sourcing from China",
      "Next.js build for fast performance and SEO visibility",
    ],
    challenge:
      "Nigerian businesses sourcing goods from China face a fragmented, opaque currency conversion process — multiple intermediaries, unclear rates, and no reliable way to move Naira to Yuan without significant friction and risk. The platform had to make this process simple enough for a small importer to complete without a financial intermediary.",
    approach:
      "We built the exchange platform around transparency and step clarity. Every stage of the Naira-to-Yuan process is visible before any money moves. Real-time rates with no hidden spreads, a clear step-by-step process flow, and fee transparency at every stage remove the uncertainty that causes Nigerian importers to rely on expensive and unreliable alternatives.",
    intentFeatures: [
      {
        title: "Real-Time Rate Display — Transparency as a Product Feature",
        body: "Nigerian currency exchange middlemen thrive on rate opacity. Yuan Bridge's real-time rate display is both a functional feature and a strategic differentiator: showing exactly what rate a business is getting — live, before they commit — builds the trust that opaque alternatives cannot. Transparency is the product.",
      },
      {
        title: "Step-by-Step Process Flow — Confidence for First-Time Users",
        body: "A small importer executing their first cross-border yuan payment is making a leap of faith. We built a step-by-step process flow that makes every stage of the exchange visible and predictable: initiate, transfer, confirm, receive. A user who can see exactly what happens next is a user who completes the transaction rather than abandoning it at the confirmation stage.",
      },
    ],
    outcome:
      "A Naira-to-Yuan exchange platform that removes the friction and opacity of traditional currency conversion for Nigerian importers — with real-time rate transparency and a step-by-step flow that converts first-time users into recurring business customers.",
    relatedService: "web-development",
  },
  // ── Projects without images ──────────────────────────────────
  {
    slug: "hotel-management-system",
    name: "Hotel Management System",
    industry: "Hospitality / Software",
    description:
      "Full-featured hotel management system with room booking, guest records, housekeeping, and billing automation.",
    tags: ["Laravel", "MySQL", "Hospitality"],
    highlights: [
      "Room booking and availability management with real-time calendar",
      "Guest records and check-in / check-out automation",
      "Housekeeping task assignment and status tracking",
      "Billing automation with invoice generation and payment recording",
      "Front desk dashboard with daily occupancy overview",
      "Multi-role access: admin, receptionist, housekeeping staff",
    ],
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    industry: "Education / Software",
    description:
      "Comprehensive school management platform covering student records, timetables, fee management, and parent portals.",
    tags: ["Laravel", "MySQL", "Education"],
    highlights: [
      "Student records management with academic history and profiles",
      "Class timetable builder with teacher and room assignment",
      "Fee management with payment tracking and reminders",
      "Parent portal for viewing results, attendance, and announcements",
      "Exam and result management with report card generation",
      "Multi-role access: admin, teacher, student, parent",
    ],
  },
  {
    slug: "multi-tenancy-saas",
    name: "Multi-Tenancy SaaS Platform",
    industry: "SaaS / Software",
    description:
      "Scalable multi-tenant SaaS platform with isolated data environments, subscription billing, and admin dashboards per tenant.",
    tags: ["Laravel", "Multi-Tenancy", "SaaS"],
    highlights: [
      "Database-per-tenant isolation for complete data security",
      "Subscription billing with plan management and upgrade flows",
      "Per-tenant admin dashboards with white-label capability",
      "Centralized super-admin panel for platform-level oversight",
      "Onboarding flow with automated tenant provisioning",
      "Scalable architecture designed to handle hundreds of tenants",
    ],
  },
  {
    slug: "dental-clinic-ai-agent",
    name: "Dental Clinic AI Support Agent",
    industry: "Healthcare / AI Automation",
    description:
      "AI-powered support agent for dental clinics handling appointment bookings, FAQs, patient triage, and follow-up messages automatically.",
    tags: ["AI Automation", "n8n", "OpenAI", "Healthcare"],
    highlights: [
      "AI agent that books appointments directly via WhatsApp — no staff needed",
      "Automated FAQ handling for clinic hours, treatments, pricing, and insurance",
      "Patient triage flow to categorise urgency and route to the right dentist",
      "Follow-up message sequences after consultations and procedures",
      "n8n workflow automation connecting WhatsApp to clinic calendar",
      "OpenAI-powered natural language understanding for conversational responses",
    ],
    challenge:
      "Dental clinic front desks lose appointment opportunities every evening, weekend, and during busy periods when staff cannot answer the phone. Every missed call is a missed patient — and in a competitive Lagos dental market, that missed patient books with the competitor who answers.",
    approach:
      "We built an AI agent that handles appointment booking, common FAQs, and patient triage 24/7 via WhatsApp — without requiring any staff intervention. The agent is powered by OpenAI's natural language capabilities and connected to the clinic's calendar via n8n workflows, ensuring bookings made by the AI appear in the same system the front desk uses.",
    intentFeatures: [
      {
        title: "24/7 WhatsApp Appointment Booking — No Staff Required",
        body: "A patient who wants to book a dental appointment at 10pm on a Sunday should not have to wait until Monday morning. Our AI agent books appointments directly via WhatsApp at any hour — collecting patient name, treatment interest, and preferred time slot, then creating the calendar entry automatically. The clinic wakes up each morning to a full appointment schedule built overnight.",
      },
      {
        title: "Patient Triage — Routing Urgency Before Staff Intervention",
        body: "Not all dental enquiries are equal. A patient with a broken tooth needs same-day routing; a whitening enquiry can be scheduled 2 weeks out. Our triage flow categorises patient urgency from the first message and routes accordingly — ensuring emergency cases reach a dentist's phone immediately while routine enquiries are handled by the booking flow.",
      },
    ],
    outcome:
      "A dental clinic that captures appointment bookings 24/7 without additional staff cost — with a WhatsApp AI agent that books, triages, and follows up autonomously, turning after-hours enquiries into confirmed appointments.",
    relatedService: "ai-automation",
  },
  {
    slug: "political-campaign-ai-agent",
    name: "Political Campaign AI Agent",
    industry: "Politics / AI Automation",
    description:
      "Intelligent AI agent managing voter outreach, Q&A responses, campaign analytics, and automated communication workflows.",
    tags: ["AI Automation", "Make", "OpenAI", "Analytics"],
    highlights: [
      "Automated voter outreach at scale via WhatsApp and SMS",
      "AI-powered Q&A agent answering policy and candidate questions 24/7",
      "Campaign analytics dashboard tracking engagement and response rates",
      "Automated communication workflows for rallies, announcements, and updates",
      "Make (formerly Integromat) automation connecting all campaign channels",
      "OpenAI integration for intelligent, context-aware voter responses",
    ],
    challenge:
      "Political campaigns need to maintain high-volume, personalised communication with thousands of voters simultaneously — a task that requires either an enormous staff or smart automation. Manual outreach at this scale is impossible; generic broadcast messaging is ineffective.",
    approach:
      "We built a campaign communication system using Make automation and OpenAI to handle voter Q&A, policy explanations, and outreach sequences at scale. Every voter interaction feels personalised because the AI understands context — but it runs automatically, without requiring campaign staff for each conversation.",
    intentFeatures: [
      {
        title: "AI Voter Q&A — Policy Questions Answered at Scale",
        body: "A campaign that responds to every voter's policy question within minutes has a decisive engagement advantage. Our AI Q&A agent is trained on the candidate's positions, manifesto, and key messages — answering voter questions accurately and consistently 24/7 across WhatsApp and SMS. It scales to thousands of simultaneous conversations without adding a single staff member.",
      },
      {
        title: "Campaign Analytics Dashboard — Measuring What Moves Votes",
        body: "Campaign communication without analytics is guesswork. We built a dashboard that tracks message open rates, Q&A response rates, rally registration conversions, and voter sentiment signals — giving campaign managers the data to refocus resources on the messages and channels that are actually moving voter intent.",
      },
    ],
    outcome:
      "A political campaign communication system that manages thousands of voter conversations simultaneously via AI — generating personalised outreach, answering policy questions, and tracking engagement analytics without requiring proportional staff growth.",
    relatedService: "ai-automation",
  },
  {
    slug: "ecommerce-order-automation",
    name: "E-commerce Order Automation",
    industry: "E-commerce / AI Automation",
    description:
      "End-to-end order processing automation covering confirmation, fulfillment triggers, customer notifications, and CRM updates.",
    tags: ["AI Automation", "Zapier", "E-commerce", "Workflow"],
    highlights: [
      "Automated order confirmation emails and WhatsApp notifications",
      "Fulfillment trigger workflows connected to logistics partners",
      "Real-time customer status update messages at each order stage",
      "CRM auto-update on every purchase — no manual data entry",
      "Returns and refund workflow automation with customer communication",
      "Zapier-powered integration connecting store, CRM, and fulfilment systems",
    ],
    challenge:
      "E-commerce businesses in Nigeria lose customers not at the point of sale but in the post-purchase black hole — orders confirmed but not updated, customers left anxious, support teams overwhelmed with 'where is my order?' queries.",
    approach:
      "We built a full order processing automation using Zapier that eliminates the post-purchase black hole entirely. Every stage of the order journey — confirmation, fulfilment, dispatch, delivery — triggers an automatic customer notification. The CRM updates itself. The support team only deals with genuine exceptions.",
    intentFeatures: [
      {
        title: "Post-Purchase Communication Automation — Eliminating the Black Hole",
        body: "The most common e-commerce complaint in Nigeria is not product quality — it is communication silence after payment. Our automation sends an order confirmation within 30 seconds of purchase, a fulfilment trigger when the order is processed, and a dispatch notification when it ships. Customers who are kept informed don't contact support — reducing the support team's workload by over 60% on order status queries.",
      },
      {
        title: "CRM Auto-Update — Data That Drives Repeat Revenue",
        body: "Every purchase contains valuable customer data — product preferences, order frequency, spend level. Without automated CRM updates, this data sits unrecorded. Our automation writes every transaction to the CRM automatically, creating customer profiles that enable personalised retention campaigns, repeat purchase triggers, and upsell sequences — turning one-time buyers into recurring customers.",
      },
    ],
    outcome:
      "An e-commerce order automation system that eliminates post-purchase communication gaps, reduces support ticket volume by over 60%, and builds a customer data foundation for automated retention and repeat-purchase campaigns.",
    relatedService: "ai-automation",
  },
  {
    slug: "hr-onboarding-automation",
    name: "HR Onboarding Automation",
    industry: "HR / AI Automation",
    description:
      "Automated HR onboarding pipeline that provisions accounts, sends welcome sequences, assigns training, and tracks completion.",
    tags: ["AI Automation", "n8n", "HR", "Workflow"],
    highlights: [
      "Account provisioning automation — email, tools, and system access set up on day one",
      "Welcome email and WhatsApp sequence triggered on hire confirmation",
      "Training assignment with progress tracking and completion alerts",
      "Document collection and e-signature workflow for contracts and policies",
      "Manager notification and task assignment at each onboarding milestone",
      "n8n workflow connecting HR system, email, and communication tools",
    ],
    challenge:
      "Most companies onboard new employees through a combination of manual emails, Slack messages, and spreadsheets that break down as headcount grows. New hires arrive on day one without system access, waiting for someone to remember to send them their login credentials. The first impression is operational chaos.",
    approach:
      "We automated the entire onboarding pipeline using n8n — from the moment a hire is confirmed to day-30 training completion. Account provisioning, welcome sequences, training assignments, document collection, and manager milestone notifications all trigger automatically in sequence. HR focuses on culture; the system handles logistics.",
    intentFeatures: [
      {
        title: "Day-One System Access — Eliminating Onboarding Chaos",
        body: "A new hire who arrives on their first day without email access, system logins, or tool provisioning forms an immediate negative impression of the company's operations. Our automation provisions everything 24 hours before the start date — triggered the moment a hire is confirmed in the HR system. The new employee walks in prepared, not waiting.",
      },
      {
        title: "Manager Milestone Notifications — Distributed Accountability",
        body: "New hire success depends on manager engagement at the right moments: day one, week one, month one. Our automation sends manager notifications at each milestone — not just reminders, but specific task prompts: 'Schedule 1:1 for this week,' 'Check on training completion status.' Structured accountability at each stage dramatically improves 90-day retention rates.",
      },
    ],
    outcome:
      "An automated HR onboarding pipeline that provisions new hire accounts before day one, runs welcome and training sequences automatically, and notifies managers at each milestone — transforming a manual, error-prone process into a consistent, scalable system.",
    relatedService: "ai-automation",
  },
  {
    slug: "lead-qualification-ai-bot",
    name: "Lead Qualification AI Bot",
    industry: "Sales / AI Automation",
    description:
      "Conversational AI bot that qualifies inbound leads, scores them, routes high-intent prospects, and logs everything to CRM.",
    tags: ["AI Automation", "Make", "OpenAI", "CRM"],
    highlights: [
      "Conversational lead qualification via WhatsApp with natural language AI",
      "Automated lead scoring based on budget, timeline, and intent signals",
      "High-intent prospect routing to sales reps with full context summary",
      "CRM auto-logging — every conversation and score recorded automatically",
      "Follow-up sequence triggers for leads that need nurturing",
      "Make automation connecting WhatsApp, OpenAI, and CRM in one workflow",
    ],
    challenge:
      "Sales teams waste significant time on conversations with leads who were never going to buy — while high-intent prospects are left waiting for a callback that comes too late. Without automated qualification, sales capacity is allocated by accident rather than by intent signals.",
    approach:
      "We built a conversational AI qualification bot that runs on WhatsApp, asking the right questions in natural language to determine budget, timeline, and intent before any human salesperson enters the conversation. High-intent leads are routed immediately with full context; low-intent leads enter a nurturing sequence. Every conversation is logged to the CRM automatically.",
    intentFeatures: [
      {
        title: "Conversational Qualification — Natural Language That Converts",
        body: "A qualification form with 8 fields gets abandoned. A WhatsApp conversation that naturally asks 'What are you looking to solve?' and 'What timeline are you working to?' feels human — because it is, in the sense that the AI understands and responds to natural language. Qualification rates are dramatically higher when the experience feels like a conversation rather than a form.",
      },
      {
        title: "Intent-Based Lead Routing — Sales Time on the Right Leads",
        body: "A sales rep who receives a routed lead from our bot gets a full context summary: the lead's budget range, timeline, specific need, and qualification score. They enter the first conversation prepared, not discovering. This preparation reduces time-to-close on high-intent leads and eliminates the time waste of calling leads who were never serious buyers.",
      },
    ],
    outcome:
      "An AI lead qualification system that routes only high-intent, pre-qualified prospects to human sales reps — with full context summaries that reduce time-to-close and eliminate the time waste of pursuing unqualified leads manually.",
    relatedService: "ai-automation",
  },
];
