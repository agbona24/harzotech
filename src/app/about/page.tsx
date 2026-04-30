import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { AboutHeroIllustration } from "@/components/AboutHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { PageSchema } from "@/components/PageSchema";
import { site } from "@/data/site";
import { AboutPageSchema } from "@/components/AboutPageSchema";
import {
  Target,
  Eye,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Users,
  Layers,
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Harzotech | Nigeria's Technology & Business Growth Partner",
  description:
    "Harzotech Nig Ltd is a technology solutions company in Lagos, Nigeria. We build websites, software, AI automation, and IT systems that help businesses grow, operate better, and scale faster.",
  alternates: { canonical: "https://harzotech.com.ng/about" },
};

/* ── Data ──────────────────────────────────────────────────────── */

const CORE_VALUES = [
  {
    Icon: Target,
    title: "Intentional Partnership",
    body: "We don't take briefs — we take responsibility. Every engagement starts with deeply understanding your business, your market, and your growth targets.",
  },
  {
    Icon: TrendingUp,
    title: "Growth-First Thinking",
    body: "Every digital decision we make is filtered through one question: does this help the client grow, attract customers, or generate returns?",
  },
  {
    Icon: ShieldCheck,
    title: "Quality Without Compromise",
    body: "We hold ourselves to the standard of the world's best digital companies. Premium output, every time — regardless of project size.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation That Solves",
    body: "We don't innovate for the sake of it. We use AI, automation, and cutting-edge systems to solve real operational and commercial problems.",
  },
  {
    Icon: Handshake,
    title: "Long-Term Trust",
    body: "Our relationships don't end at delivery. We stay invested in your success, providing ongoing support, upgrades, and strategic advice.",
  },
  {
    Icon: Users,
    title: "Client-Centred Execution",
    body: "We treat every client's business like our own — measuring our success by the commercial outcomes we create for the people we serve.",
  },
];

const WHY_ITEMS = [
  {
    label: "We build Digital Experience Centres",
    sub: "Not just websites. A fully crafted digital presence that converts visitors into loyal customers.",
  },
  {
    label: "We build Revenue & Risk Management Machines",
    sub: "Not just software. Systems that protect your operations, streamline processes, and unlock revenue at scale.",
  },
  {
    label: "We understand your business model",
    sub: "Sales funnels, return on investment, unit economics, scaling levers — we speak your language before we write a line of code.",
  },
  {
    label: "We are AI & automation-native",
    sub: "We don't retrofit technology. We design AI and automation in from day one so your systems scale without proportional headcount.",
  },
  {
    label: "We think commercially, always",
    sub: "Growth, conversion, retention, visibility — every feature we build has a commercial reason behind it.",
  },
  {
    label: "We don't disappear after launch",
    sub: "Post-launch support, performance monitoring, and strategic upgrades are built into how we work.",
  },
];

/* ── Page ──────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div>      <AboutPageSchema />      <PageSchema
        service="About Harzotech"
        url="https://harzotech.com.ng/about"
        description="Harzotech Nig Ltd is a technology solutions company in Lagos, Nigeria. We build websites, software, AI automation, and IT systems that help businesses grow."
        breadcrumbs={[{ name: "About", url: "https://harzotech.com.ng/about" }]}
      />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <PageHeader
        eyebrow="About Harzotech"
        title={
          <>
            We Are Not Just a{" "}
            <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
              Technology Company.
            </span>{" "}
            We Are Your{" "}
            <span className="text-brand-blue-300">Growth Partner.</span>
          </>
        }
        description="We understand growth, sales, returns, investment, and scaling. We enter every client engagement with one intentional mission — to understand your business deeply and build digital systems that make it bigger, faster, and stronger."
        primaryCta={{ href: "/contact?intent=consultation", label: "Start a Conversation" }}
        secondaryCta={{ href: "/services", label: "See What We Build" }}
        illustration={<AboutHeroIllustration />}
        bgImage="/about1.png"
      />

      {/* ── PHILOSOPHY STRIP ───────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-white py-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Globe,     label: "Digital Experience Centres",        sub: "Not just websites"    },
              { Icon: BarChart3, label: "Revenue & Risk Management Machines", sub: "Not just software"   },
              { Icon: Zap,       label: "Growth Automation Systems",          sub: "Not just AI tools"   },
            ].map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 ring-1 ring-brand-blue-100">
                  <Icon className="h-5 w-5 text-brand-blue-700" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red-600">{sub}</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHO WE ARE ─────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">Who We Are</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A Strategic Technology Partner That Thinks Like a Business Owner
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Harzotech Nig Ltd is a technology solutions company headquartered in Lagos, Nigeria. But we are more than a vendor or a development shop — we are a strategic partner that intentionally embeds itself in the commercial reality of every client we serve.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We understand that a business website is not a brochure — it is a sales and trust asset. Software is not an IT expense — it is a revenue and efficiency engine. AI and automation are not trends — they are competitive advantages. That is how we think, and that is how we build.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "We understand your sales model",
                  "We design for conversion & retention",
                  "We think about your ROI, always",
                  "We plan for scale from day one",
                  "We speak business, not just tech",
                  "We stay invested past launch",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-800 p-8 text-white shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue-300">Our commercial lens</p>
              <p className="mt-4 text-lg font-bold leading-8">&ldquo;{site.tagline}&rdquo;</p>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {[
                  { value: "10+",  label: "Years of experience"       },
                  { value: "50+",  label: "Businesses transformed"    },
                  { value: "6",    label: "Core service lines"        },
                  { value: "100%", label: "Committed to your growth"  },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-black text-brand-blue-300">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href="/contact?intent=start-project" variant="cta">
                  Work With Us <ArrowRight className="ml-2 inline-block h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── MISSION & VISION ───────────────────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_5%_50%,rgba(21,101,192,0.25),transparent_65%),radial-gradient(ellipse_50%_45%_at_95%_50%,rgba(198,40,40,0.18),transparent_65%)]" />
        <Container>
          <div className="relative grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-700/30 ring-1 ring-brand-blue-500/30">
                <Target className="h-6 w-6 text-brand-blue-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue-300">Our Mission</p>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                To be the technology partner that makes businesses unstoppable.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We exist to close the gap between where our clients are and where they could be — through intentional, commercially-driven digital systems that generate real results. We build technology that earns its place in your P&amp;L.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red-700/30 ring-1 ring-brand-red-500/30">
                <Eye className="h-6 w-6 text-brand-red-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-300">Our Vision</p>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                Africa&apos;s most trusted technology growth partner for ambitious businesses.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We envision a world where every business — regardless of size — has access to world-class digital infrastructure and the strategic intelligence to scale confidently. Harzotech is the vehicle that gets them there.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CORE VALUES ────────────────────────────────────────── */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">Core Values</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Principles We Build Everything On
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              These are not wall decorations — they are operational standards. Every project, every conversation, every line of code is filtered through these values.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${
                    i % 2 === 0
                      ? "bg-brand-blue-50 ring-brand-blue-100 text-brand-blue-700"
                      : "bg-brand-red-50 ring-brand-red-100 text-brand-red-700"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── WHY HARZOTECH ──────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">Why Harzotech</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                We Don&apos;t Just Build.{" "}
                <span className="text-brand-blue-700">We Understand.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Most agencies take your brief and disappear. We go deeper. We understand your revenue model, your customer journey, your risk surface, and your growth ceiling — before we design or develop anything.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                That&apos;s why what we deliver doesn&apos;t just look good — it works commercially. It earns. It scales.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact?intent=start-project" variant="cta">
                  Let&apos;s Build Together
                </ButtonLink>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {WHY_ITEMS.map(({ label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-brand-blue-200 hover:bg-brand-blue-50/30"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-700">
                    <Layers className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── LEADERSHIP ─────────────────────────────────────────── */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-950 via-navy-800 to-brand-blue-900 flex items-center justify-center">
                <Image
                  src="/ceo.png"
                  alt={`${site.founder.name} - Founder and Lead Strategist`}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red-600">Founder Quote</p>
                <p className="mt-2 text-sm leading-7 text-slate-700 italic">
                  &ldquo;{site.founder.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold text-slate-500">— {site.founder.name}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">Leadership</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Led by Experience, Driven by Outcomes
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Harzotech is led by{" "}
                <span className="font-semibold text-slate-900">{site.founder.name}</span> —{" "}
                {site.founder.title}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                What makes Azeez different is not just technical depth — it is commercial intelligence. He has spent over a decade at the intersection of technology and business growth, learning that the best digital systems are the ones that understand the business they serve.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                That philosophy is baked into every project Harzotech takes on. We don&apos;t deliver code — we deliver outcomes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact?intent=consultation" variant="cta">
                  Book a Consultation
                </ButtonLink>
                <ButtonLink href="/projects" variant="secondary">
                  View Our Work
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
