import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ITSupportHeroIllustration } from "@/components/ITSupportHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import {
  Headset, ShieldCheck, Cloud, Mail, Server, Wifi,
  ClockAlert, RefreshCw, Lock, BarChart3, Database, MonitorCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Support & Maintenance",
  description:
    "Managed IT support and maintenance by Harzotech Nig Ltd — troubleshooting, security monitoring, cloud backup, email setup, system maintenance, and ongoing technical management.",
};

const SUPPORT_SERVICES = [
  {
    icon: Headset,
    title: "Help Desk & Troubleshooting",
    description: "Fast remote and onsite support for hardware, software, network, and user issues — with clear SLAs and response times.",
    isRed: false,
  },
  {
    icon: ShieldCheck,
    title: "Security Monitoring",
    description: "Continuous threat detection, vulnerability scanning, patch management, and incident response to protect your systems.",
    isRed: true,
  },
  {
    icon: Cloud,
    title: "Cloud Backup & Recovery",
    description: "Automated daily backups, offsite storage, and tested recovery procedures so your data is never at risk.",
    isRed: false,
  },
  {
    icon: Mail,
    title: "Email & Domain Management",
    description: "Professional email setup (Google Workspace, Microsoft 365), domain DNS, spam protection, and ongoing deliverability.",
    isRed: true,
  },
  {
    icon: Server,
    title: "System & Software Maintenance",
    description: "Regular updates, performance tuning, license management, and proactive maintenance to prevent downtime before it happens.",
    isRed: false,
  },
  {
    icon: Wifi,
    title: "Network & Infrastructure",
    description: "LAN/WiFi setup, VPN configuration, firewall management, and network performance optimisation for office and hybrid teams.",
    isRed: true,
  },
];

const WHAT_WE_INCLUDE = [
  { icon: ClockAlert,    label: "Fast response SLA" },
  { icon: MonitorCheck,  label: "Remote & onsite support" },
  { icon: RefreshCw,     label: "Proactive maintenance cycles" },
  { icon: Lock,          label: "Security patch management" },
  { icon: Cloud,         label: "Automated cloud backup" },
  { icon: Database,      label: "System health reporting" },
  { icon: Mail,          label: "Business email management" },
  { icon: ShieldCheck,   label: "Antivirus & endpoint protection" },
  { icon: Server,        label: "Server & hosting management" },
  { icon: Wifi,          label: "Network monitoring" },
  { icon: BarChart3,     label: "Monthly IT reports" },
  { icon: Headset,       label: "Dedicated support contact" },
];

const IDEAL_FOR = [
  {
    title: "SMEs Without an In-House IT Team",
    description: "Get full technical coverage without the overhead of a permanent IT department.",
  },
  {
    title: "Multi-Location Businesses",
    description: "Standardised support processes and maintenance routines across all your sites.",
  },
  {
    title: "Businesses Running Custom Software",
    description: "Dedicated support for portals, dashboards, and operational systems in production.",
  },
  {
    title: "Teams Moving to the Cloud",
    description: "Migration planning, cloud setup, and ongoing management as you modernise your stack.",
  },
];

const PROCESS = [
  { number: "01", title: "IT Audit", description: "We assess your current systems, identify risks, and document your full IT landscape." },
  { number: "02", title: "Support Plan", description: "We design a maintenance and response structure tailored to your business needs and budget." },
  { number: "03", title: "Onboarding & Setup", description: "We configure monitoring, backup, security, and communication channels — ready in days." },
  { number: "04", title: "Ongoing Management", description: "Monthly reviews, reports, and proactive improvements keep your systems ahead of problems." },
];

const STATS = [
  { value: "< 4h",  label: "Average Response Time" },
  { value: "99.9%", label: "Uptime Target" },
  { value: "24/7",  label: "Monitoring Coverage" },
  { value: "100%",  label: "Remote + Onsite" },
];

export default function ITSupportMaintenancePage() {
  return (
    <div>
      <PageHeader
        eyebrow="IT Support & Maintenance"
        title={<>IT Support That <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Keeps You Running</span> — Not <span className="text-brand-blue-300">Catching Up</span></>}
        description="Downtime costs more than IT support. We provide proactive, structured technical management that prevents problems before they impact your business — with fast response when they do."
        primaryCta={{ href: "/contact?intent=start-project", label: "Get a Support Plan" }}
        secondaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        illustration={<ITSupportHeroIllustration />}
        bgImage="/about2.png"
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

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Cover"
              title="Complete IT management from one partner"
              description="No more juggling multiple vendors. We cover your entire IT stack — from user support to infrastructure, security, and cloud."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SUPPORT_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.isRed ? "border-brand-red-100 bg-brand-red-50/40 hover:border-brand-red-200 hover:shadow-brand-red-100" : "border-brand-blue-100 bg-brand-blue-50/40 hover:border-brand-blue-200 hover:shadow-brand-blue-100"}`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${service.isRed ? "bg-brand-red-100 text-brand-red-700" : "bg-brand-blue-100 text-brand-blue-700"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-950">{service.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Ideal For */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Who It's For"
              title="Built for businesses that can't afford downtime"
              description="Whether you're a growing SME or an established company, your tech infrastructure needs proper management."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {IDEAL_FOR.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="h-1 w-12 rounded-full bg-brand-blue-700" />
                  <p className="text-base font-bold text-slate-950">{item.title}</p>
                  <p className="text-sm leading-6 text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What's Included"
              title="Everything in your support plan"
              description="No hidden extras. Every plan includes the full coverage your business needs to operate with confidence."
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
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="How We Onboard"
              title="Up and running in days, not weeks"
              description="Structured onboarding that gets your systems covered fast — with zero disruption to your operations."
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
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">Get covered today</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop reacting to IT problems.{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                Start preventing them.
              </span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Let&apos;s review your current setup and build a support plan that fits your team, budget, and risk tolerance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta">Get a Support Plan</ButtonLink>
              <ButtonLink href="/contact?intent=consultation" variant="outline-white">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
