import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AIAutomationHeroIllustration } from "@/components/AIAutomationHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import {
  Mic2, MessageSquare, CalendarCheck, Users2,
  CreditCard, HeadphonesIcon, Zap, RefreshCw,
  Clock, TrendingUp, GitMerge, BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "AI automation and workflow systems by Harzotech Nig Ltd — voice agents, WhatsApp automation, booking workflows, CRM automation, and business process automation.",
};

const AUTOMATION_TYPES = [
  {
    icon: Mic2,
    title: "AI Voice Agents",
    description: "24/7 voice bots that qualify leads, confirm appointments, answer FAQs, and route calls — without staff intervention.",
    isRed: false,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automated responses, lead capture, appointment reminders, order updates, and broadcast messaging on WhatsApp Business.",
    isRed: true,
  },
  {
    icon: CalendarCheck,
    title: "Booking & Appointment Automation",
    description: "Auto-scheduling, calendar sync, confirmation messages, follow-up reminders, and cancellation workflows.",
    isRed: false,
  },
  {
    icon: Users2,
    title: "CRM & Lead Workflows",
    description: "Capture leads from any channel, score them, trigger follow-up sequences, and push data to your CRM — automatically.",
    isRed: true,
  },
  {
    icon: CreditCard,
    title: "Payment & Invoice Automation",
    description: "Auto-generate invoices, send payment links, track receipts, and trigger actions on payment confirmation.",
    isRed: false,
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support Automation",
    description: "Intelligent first-response bots, ticket routing, escalation triggers, and satisfaction follow-ups — across channels.",
    isRed: true,
  },
];

const INTEGRATIONS = [
  "OpenAI / ChatGPT", "WhatsApp Business API", "Twilio (Voice & SMS)", "n8n",
  "Zapier", "Google Sheets", "Airtable", "Stripe / Paystack",
  "Calendly / Google Calendar", "HubSpot / Pipedrive", "Notion", "Slack",
];

const OUTCOMES = [
  { icon: Clock,      title: "Respond in Seconds", description: "First response within seconds, not hours — qualify and route leads before they move on." },
  { icon: RefreshCw,  title: "Zero Manual Follow-up", description: "Automated reminders, confirmations, and sequences that run while your team focuses on real work." },
  { icon: TrendingUp, title: "More Revenue, Less Overhead", description: "Convert more leads, reduce no-shows, and eliminate repetitive tasks that drain your team." },
  { icon: BarChart3,  title: "Full Visibility", description: "Track every touchpoint, handoff, and outcome across your customer journey in one dashboard." },
];

const PROCESS = [
  { number: "01", title: "Workflow Audit", description: "We map every manual task and communication gap costing you time, leads, or revenue." },
  { number: "02", title: "Automation Blueprint", description: "We design the logic, triggers, conditions, and integrations before building anything." },
  { number: "03", title: "Build & Connect", description: "We build the flows, connect your tools, and test every path end-to-end before launch." },
  { number: "04", title: "Monitor & Optimise", description: "We track performance post-launch and refine automations based on real usage data." },
];

const STATS = [
  { value: "24/7",  label: "Bots Running Nonstop" },
  { value: "80%",   label: "Manual Work Reduced" },
  { value: "10+",   label: "Platform Integrations" },
  { value: "5x",    label: "Faster Lead Response" },
];

export default function AIAutomationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="AI & Automation"
        title={<>AI and <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Automation</span> for Smarter <span className="text-brand-blue-300">Business Operations</span></>}
        description="Your competitors are automating. Every manual follow-up, missed call, and delayed response is a lost opportunity. We build AI systems that work while you sleep — capturing leads, confirming bookings, and handling support 24/7."
        primaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        secondaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        illustration={<AIAutomationHeroIllustration />}
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

      {/* Automation Types */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Automate"
              title="Every touchpoint that's costing you time and leads"
              description="We identify where your business leaks revenue through manual work — then build systems to reclaim it."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AUTOMATION_TYPES.map((type) => {
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

      {/* Outcomes */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Business Outcomes"
              title="What changes when you automate with Harzotech"
              description="Not just faster workflows — measurable business results from day one."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {OUTCOMES.map((o) => {
                const Icon = o.icon;
                return (
                  <div key={o.title} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-50">
                      <Icon className="h-5 w-5 text-brand-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-950">{o.title}</p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-500">{o.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Integrations */}
      <Section>
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Integrations"
              title="We connect your entire tech stack"
              description="No silos. We integrate your automation with the tools you already use — or recommend the right ones."
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {INTEGRATIONS.map((tool) => (
                <span key={tool} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <GitMerge className="mr-2 h-3.5 w-3.5 text-brand-blue-600" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we build your automation systems"
              description="Every automation starts with understanding your workflows — not by guessing what to automate."
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
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">Start automating</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Every day without automation is{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                revenue left on the table
              </span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Tell us your biggest operational bottleneck. We&apos;ll show you exactly how to automate it — and what it&apos;s worth.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=consultation" variant="cta">Book a Free Audit</ButtonLink>
              <ButtonLink href="/contact?intent=start-project" variant="outline-white">Start a Project</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
