import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SoftwareDevHeroIllustration } from "@/components/SoftwareDevHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { FAQSection } from "@/components/FAQSection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { PageSchema } from "@/components/PageSchema";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceAnswerBlock } from "@/components/ServiceAnswerBlock";
import { FAQPageSchema } from "@/components/FAQPageSchema";
import { SpeakableSchema } from "@/components/SpeakableSchema";
import { BookingServiceSchema } from "@/components/BookingServiceSchema";
import {
  LayoutDashboard, ShoppingBag, CalendarCheck, Users2,
  Warehouse, GraduationCap, Hospital, Cpu,
  Code2, Database, GitMerge, ShieldCheck,
  BarChart3, Layers, Lock, RefreshCw,
} from "lucide-react";

const FAQS = [
  { q: "What types of software does Harzotech build?", a: "We build business portals, dashboards, CRM and sales systems, booking and scheduling platforms, SaaS applications, POS systems, inventory management tools, HR and payroll software, hospital management systems, and learning management systems — all fully custom to your business model." },
  { q: "How long does custom software development take in Nigeria?", a: "Timelines depend on complexity. A standard business portal or CRM typically takes 6–12 weeks. Larger platforms with complex workflows may take 3–6 months. We provide a detailed project plan and milestone schedule before development begins." },
  { q: "Can you integrate my new software with existing tools I use?", a: "Yes. We integrate with payment gateways (Paystack, Flutterwave), accounting tools, WhatsApp, email systems, Google Workspace, ERPs, and most third-party APIs. Integration is a core part of our development process." },
  { q: "Do you build software for specific industries in Nigeria?", a: "Yes. We have delivered software for healthcare (hospital and pharmacy systems), real estate, retail and FMCG, education, logistics, fintech, and professional services. We understand the unique compliance and workflow requirements per industry." },
  { q: "Will I own the source code after the project?", a: "Yes. All source code, databases, and intellectual property developed for you belongs entirely to your business upon full project completion. We do not retain any ownership of client software." },
  { q: "Do you offer ongoing maintenance and support after launch?", a: "Yes. We provide post-launch support plans covering bug fixes, performance monitoring, feature updates, security patches, and technical assistance to ensure your software runs reliably as your business grows." },
];

export const metadata: Metadata = {
  title: "Custom Software Development Company in Nigeria — CRM, Portals & SaaS",
  description:
    "Harzotech builds custom business software in Nigeria — CRM systems, dashboards, booking platforms, SaaS apps, POS, and inventory tools designed to fit how your business actually works.",
  keywords: [
    "custom software development company Nigeria",
    "software development company Lagos",
    "CRM development Nigeria",
    "business portal development Nigeria",
    "SaaS development Nigeria",
    "booking system development Nigeria",
    "POS and inventory software Nigeria",
    "enterprise software development Lagos",
    "Harzotech software development",
  ],
  openGraph: {
    title: "Custom Software Development Company in Nigeria — CRM, Portals & SaaS",
    description:
      "Harzotech builds custom business software in Nigeria — CRM systems, dashboards, booking platforms, SaaS apps, POS, and inventory tools designed to fit how your business actually works.",
    url: "https://harzotech.com.ng/software-development",
    siteName: "Harzotech Nig Ltd",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/software-development/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services by Harzotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Nigeria — CRM, Portals & SaaS",
    description:
      "Custom CRM, portals, SaaS, booking systems, and operational software for Nigerian businesses.",
    images: ["/software-development/opengraph-image"],
  },
  alternates: { canonical: "https://harzotech.com.ng/software-development" },
};

const SOFTWARE_TYPES = [
  {
    icon: LayoutDashboard,
    title: "Dashboards & Business Portals",
    description: "Centralised command centres for managing operations, reporting, teams, and KPIs in real time.",
    isRed: false,
  },
  {
    icon: Users2,
    title: "CRM & Sales Systems",
    description: "Track leads, manage pipelines, automate follow-ups, and improve conversion across your sales team.",
    isRed: true,
  },
  {
    icon: CalendarCheck,
    title: "Booking & Scheduling Systems",
    description: "Online booking with availability management, reminders, payments, and team calendars built in.",
    isRed: false,
  },
  {
    icon: Cpu,
    title: "SaaS Platforms",
    description: "Multi-tenant software products with subscription management, onboarding flows, and feature gating.",
    isRed: true,
  },
  {
    icon: Warehouse,
    title: "Inventory & POS Systems",
    description: "Stock tracking, purchase orders, sales recording, and reporting for retail, F&B, and logistics.",
    isRed: false,
  },
  {
    icon: GraduationCap,
    title: "School & Hospital Systems",
    description: "LMS, student portals, pharmacy management, patient records, appointments, and billing systems.",
    isRed: true,
  },
];

const WHAT_WE_INCLUDE = [
  { icon: Code2,          label: "Custom-built — no templates" },
  { icon: ShieldCheck,    label: "Role-based access control" },
  { icon: Database,       label: "Scalable database architecture" },
  { icon: BarChart3,      label: "Dashboards & real-time reporting" },
  { icon: GitMerge,       label: "API integrations & webhooks" },
  { icon: Layers,         label: "Multi-module & multi-location" },
  { icon: Lock,           label: "Security & audit trails" },
  { icon: ShoppingBag,    label: "Payment & invoice processing" },
  { icon: RefreshCw,      label: "Automated workflows & triggers" },
  { icon: Hospital,       label: "Industry-specific logic" },
  { icon: CalendarCheck,  label: "Notifications & reminders" },
  { icon: Cpu,            label: "Source code ownership" },
];

const PROCESS = [
  {
    number: "01",
    title: "Requirements Mapping",
    description: "We document every workflow, user role, and edge case before writing a single line of code.",
  },
  {
    number: "02",
    title: "System Architecture",
    description: "Database design, module structure, API contracts, and technology stack decisions — built to scale.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Iterative builds with regular reviews, QA testing, and full staging environments before production.",
  },
  {
    number: "04",
    title: "Deployment & Training",
    description: "Live deployment, team training, documentation handover, and ongoing support after go-live.",
  },
];

const STATS = [
  { value: "30+",  label: "Systems Delivered" },
  { value: "10+",  label: "Industries Served" },
  { value: "100%", label: "Custom Built" },
  { value: "5★",   label: "Client Satisfaction" },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      <PageSchema
        service="Custom Software Development"
        url="https://harzotech.com.ng/software-development"
        description="Custom business software in Nigeria — CRM systems, dashboards, booking platforms, SaaS apps, POS, and inventory tools built for how your business works."
        breadcrumbs={[{ name: "Custom Software Development", url: "https://harzotech.com.ng/software-development" }]}
      />
      <FAQPageSchema
        title="Custom Software Development FAQs"
        url="https://harzotech.com.ng/software-development"
        faqs={FAQS}
      />
      <SpeakableSchema
        text="Custom Software Development. We build custom business software in Nigeria — CRM systems, dashboards, booking platforms, SaaS apps, POS, and inventory tools designed to fit how your business actually works."
        url="https://harzotech.com.ng/software-development"
        cssSelector="h1, [data-speakable]"
      />
      <BookingServiceSchema
        serviceName="Software Development Consultation"
        url="https://harzotech.com.ng/software-development"
        serviceUrl="https://harzotech.com.ng/contact?intent=start-project"
      />
      <PageHeader
        eyebrow="Software Development"
        title={<>Custom Software That <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Solves Real</span> Business <span className="text-brand-blue-300">Problems</span></>}
        description="Off-the-shelf software limits how you operate. We build systems shaped around your exact workflows — so your team executes faster, with fewer errors, and complete operational visibility."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        secondaryCta={{ href: "/projects", label: "View Our Work" }}
        illustration={<SoftwareDevHeroIllustration />}
        bgImage="/hero.png"
      />

      {/* Stats strip */}
      <div className="border-b border-slate-100 bg-white">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 py-7 px-4 text-center">
                <span className="text-3xl font-black tracking-tight text-brand-blue-700">{s.value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <ServiceAnswerBlock
        answer="Harzotech Nig Ltd is a custom software development company in Lagos, Nigeria that builds business portals, CRM systems, booking platforms, SaaS applications, POS and inventory tools, payroll systems, and operational software — fully custom-built to match each client's specific workflows and business model."
        outcomes={[
          "100% custom — no templates or off-the-shelf tools",
          "Scalable architecture built for growth",
          "Full API and third-party integration",
          "You own all source code after delivery",
        ]}
        signal="Custom software development company — Nigeria"
      />

      {/* Software Types */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Build"
              title="Enterprise-grade software for every business size"
              description="From single-operator tools to multi-location enterprise platforms — every system is architected to grow with your business."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SOFTWARE_TYPES.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.title} className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${type.isRed ? "border-brand-red-100 bg-brand-red-50/40 hover:border-brand-red-200 hover:shadow-brand-red-100" : "border-brand-blue-100 bg-brand-blue-50/40 hover:border-brand-blue-200 hover:shadow-brand-blue-100"}`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${type.isRed ? "bg-brand-red-100 text-brand-red-700" : "bg-brand-blue-100 text-brand-blue-700"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-950">{type.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What's Included"
              title="Built with everything your system needs to perform"
              description="Security, scalability, integrations, and maintainability — not bolted on after, but designed in from day one."
              align="center"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_INCLUDE.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50">
                      <Icon className="h-4 w-4 text-brand-blue-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <MidPageCTA service="Custom Software" ctaLabel="Discuss Your Project" ctaHref="/contact?intent=start-project" />

      {/* Process */}
      <Section>
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we build your system"
              description="Structured delivery that eliminates guesswork and keeps your team informed at every stage."
              align="center"
            />
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((step, i) => (
                <div key={step.number} className="relative flex flex-col gap-4">
                  {i < PROCESS.length - 1 && (
                    <div className="absolute left-full top-7 hidden w-10 border-t border-dashed border-slate-300 lg:block" />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black leading-none text-slate-100 select-none">{step.number}</span>
                    <div className="h-1 w-1 rounded-full bg-brand-blue-700" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-950">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={FAQS} eyebrow="Software Development FAQ" />
      <RelatedServices exclude={["software-development"]} />

      {/* Dark CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-700/40 bg-brand-red-900/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red-400" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">Ready to build?</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop limiting your business to{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                off-the-shelf software
              </span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Tell us what your operations look like. We&apos;ll design a system that fits — and scales as you grow.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta">Start a Project</ButtonLink>
              <ButtonLink href="/contact?intent=consultation" variant="outline-white">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
