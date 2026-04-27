import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SoftwareDevHeroIllustration } from "@/components/SoftwareDevHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import {
  LayoutDashboard, ShoppingBag, CalendarCheck, Users2,
  Warehouse, GraduationCap, Hospital, Cpu,
  Code2, Database, GitMerge, ShieldCheck,
  BarChart3, Layers, Lock, RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom software development by Harzotech Nig Ltd — portals, dashboards, CRM systems, booking systems, SaaS platforms, inventory and POS systems built for real operations.",
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
