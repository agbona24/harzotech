import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Globe,
  Headset,
  LineChart,
  Layers3,
} from "lucide-react";
import type { ComponentType } from "react";

export type Service = {
  id:
    | "website-development"
    | "software-development"
    | "ai-automation"
    | "it-support"
    | "seo-digital-marketing"
    | "business-applications"
    | "branding";
  title: string;
  summary: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
  tags?: string[];
};

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Design & Development",
    summary:
      "Premium business websites, company profiles, landing pages, e-commerce websites, and conversion-focused digital experiences built for credibility and growth.",
    icon: Globe,
    href: "/website-development",
    tags: ["Custom Design", "Mobile Ready", "SEO Optimized", "Conversion Focused"],
  },
  {
    id: "software-development",
    title: "Custom Software Development",
    summary:
      "Business portals, dashboards, CRM systems, booking systems, SaaS platforms, inventory systems, POS systems, and operational software tailored to business needs.",
    icon: Code2,
    href: "/software-development",
    tags: ["Fully Custom", "Scalable Architecture", "API Integration", "Role-based Access"],
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflow Systems",
    summary:
      "AI voice agents, WhatsApp automation, appointment booking automation, lead workflows, CRM automation, invoice flows, and business process automation.",
    icon: Bot,
    href: "/ai-automation",
    tags: ["24/7 Automation", "WhatsApp + Voice", "CRM Integration", "Lead Workflows"],
  },
  {
    id: "it-support",
    title: "Managed IT & Technical Support",
    summary:
      "IT support, system maintenance, email setup, cloud backup, troubleshooting, security monitoring, and ongoing technical management.",
    icon: Headset,
    href: "/it-support-maintenance",
    tags: ["Remote & Onsite", "Cloud Backup", "Security Monitoring", "Fast Response"],
  },
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    summary:
      "Technical SEO, local SEO, Google visibility, content strategy, analytics setup, and lead generation systems designed to attract quality leads.",
    icon: LineChart,
    href: "/seo-digital-marketing",
    tags: ["Local SEO", "Google Rankings", "Analytics Setup", "Lead Generation"],
  },
  {
    id: "business-applications",
    title: "Business Applications",
    summary:
      "POS, payroll, inventory control, pharmacy, hospital, learning management, and other custom business tools built to fit your operations.",
    icon: Layers3,
    tags: ["Industry-specific", "POS + Payroll", "Custom Reports", "Offline Support"],
  },
  {
    id: "branding",
    title: "Corporate Identity & Branding",
    summary:
      "Brand identity, business profiles, digital assets, corporate presentations, and professional brand systems that build trust.",
    icon: BriefcaseBusiness,
    tags: ["Logo & Identity", "Brand Guidelines", "Digital Assets", "Pitch Decks"],
  },
];
