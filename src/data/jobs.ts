export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  performanceExpectations: string[];
  requirements: string[];
  benefits: string[];
  applyEmail: string;
  postedDate: string;
  isActive: boolean;
}

export const jobs: Job[] = [
  {
    id: "content-creator-social-media-marketer",
    title: "Content Creator & Social Media Marketer",
    department: "Marketing & Digital Content",
    location: "Remote / On-site",
    type: "Full-time",
    salary: "₦70,000/month",
    description:
      "We are looking for a creative and consistent Content Creator & Social Media Marketer who can help us build a strong digital presence across platforms. You will be responsible for turning ideas into engaging content that attracts attention, builds authority, and supports lead generation.",
    responsibilities: [
      "Create and publish daily content (Instagram, TikTok, YouTube)",
      "Edit short-form videos and add captions/subtitles",
      "Turn internal ideas into engaging posts and storytelling content",
      "Manage social media pages and maintain consistency",
      "Repurpose content across multiple platforms",
      "Track performance and suggest improvements",
    ],
    performanceExpectations: [
      "Minimum of 2–3 posts daily (short-form content)",
      "Consistent weekly content output across all platforms",
      "Steady growth in engagement and followers",
      "Contribution to inbound inquiries through content",
    ],
    requirements: [
      "Basic video editing skills (CapCut or similar tools)",
      "Familiarity with AI tools (e.g. ChatGPT)",
      "Strong creativity and attention to detail",
      "Consistency and willingness to learn",
    ],
    benefits: [
      "Hands-on experience in digital marketing and AI content creation",
      "Opportunity to work on real business growth projects",
      "Performance-based bonuses and growth opportunities",
    ],
    applyEmail: "hr@harzotech.com.ng",
    postedDate: "2026-05-04",
    isActive: true,
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    department: "Sales & Business Development",
    location: "Remote / On-site",
    type: "Full-time",
    salary: "₦70,000/month",
    description:
      "We are looking for a proactive and result-driven Business Development Executive to help us generate leads, manage client interactions, and support our sales process. This role is critical in building relationships and converting interest into real business opportunities.",
    responsibilities: [
      "Conduct daily outreach to potential clients (social media, email, WhatsApp)",
      "Identify and qualify leads",
      "Follow up consistently with prospects",
      "Schedule meetings and coordinate client calls",
      "Support client communication and onboarding process",
      "Maintain organized records of leads and conversations",
    ],
    performanceExpectations: [
      "Daily outreach to new prospects",
      "Consistent follow-up on all leads",
      "Weekly meetings booked for the sales team",
      "Contribution to overall revenue pipeline",
    ],
    requirements: [
      "Strong communication and interpersonal skills",
      "Confidence in engaging with clients",
      "Basic understanding of sales or willingness to learn",
      "Familiarity with tools like ChatGPT is an advantage",
      "Organized and disciplined",
    ],
    benefits: [
      "Real-world experience in business development and client management",
      "Opportunity to earn commissions based on performance",
      "Growth into higher sales or operations roles",
    ],
    applyEmail: "hr@harzotech.com.ng",
    postedDate: "2026-05-04",
    isActive: true,
  },
];

export const activeJobs = jobs.filter((job) => job.isActive);
