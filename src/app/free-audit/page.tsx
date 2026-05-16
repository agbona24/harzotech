import type { Metadata } from "next";
import { FreeAuditForm } from "@/components/FreeAuditForm";
import { AIAuditPreview } from "@/components/AIAuditPreview";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CheckCircle2, Search, TrendingUp, Smartphone, Zap, Shield, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Website Audit — Is Your Business Website Costing You Customers? | Harzotech",
  description:
    "Get a free 5-point website audit from Harzotech. We'll check your site's SEO, speed, mobile experience, conversion rate, and credibility — and tell you exactly what to fix.",
  alternates: { canonical: "https://harzotech.com/free-audit" },
};

const AUDIT_POINTS = [
  {
    Icon: Search,
    label: "SEO & Visibility",
    desc: "Are you showing up on Google when customers search for your services in Nigeria?",
  },
  {
    Icon: Zap,
    label: "Speed & Performance",
    desc: "Slow websites lose visitors in under 3 seconds. We check your Core Web Vitals.",
  },
  {
    Icon: Smartphone,
    label: "Mobile Experience",
    desc: "70%+ of Nigerian web traffic is mobile. Is your site usable on a phone?",
  },
  {
    Icon: TrendingUp,
    label: "Conversion & CTA Clarity",
    desc: "Are visitors clear on what to do next — call, WhatsApp, or buy?",
  },
  {
    Icon: Shield,
    label: "Trust & Credibility",
    desc: "Does your site build trust — SSL, professional design, testimonials, clear contact info?",
  },
];

export default function FreeAuditPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-navy-900 to-slate-900 pt-20 pb-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-block rounded-full border border-brand-blue-500/30 bg-brand-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue-300">
              100% Free · No Obligation
            </p>
            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Is your website{" "}
              <span className="bg-gradient-to-r from-brand-red-400 to-brand-red-300 bg-clip-text text-transparent">
                costing you customers?
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              We'll manually review your website across 5 critical areas and
              send you a plain-language report via WhatsApp — with specific
              fixes you can act on immediately. Free. No strings attached.
            </p>
          </div>
        </Container>
      </div>

      {/* AI Instant Preview */}
      <Section className="bg-slate-50 py-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AIAuditPreview />
          </div>
        </Container>
      </Section>

      {/* What we check + Form */}
      <Section id="audit-form">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: what we check */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-600">
                  What we review
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  A 5-point audit of your digital presence
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Most Nigerian business websites are losing leads every day — not
                  because the business is bad, but because the website doesn't work.
                  This audit tells you exactly where yours is falling short.
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                {AUDIT_POINTS.map(({ Icon, label, desc }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50">
                      <Icon className="h-5 w-5 text-brand-blue-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{label}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-brand-blue-100 bg-brand-blue-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue-700">
                  What you'll receive
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {[
                    "A score for each of the 5 areas (1–5 rating)",
                    "Plain-language explanation of each issue",
                    "Specific, actionable fixes you can act on",
                    "Delivered to your WhatsApp within 24–48 hours",
                    "Zero cost. Zero obligation. Zero hard sell.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="flex flex-col">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:sticky lg:top-24">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-700">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Request your free audit</p>
                    <p className="text-xs text-slate-500">Takes 30 seconds. Results in 24–48 hrs.</p>
                  </div>
                </div>
                <FreeAuditForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social proof */}
      <Section className="bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
              What clients say after we've worked with them
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "Harzotech delivered exactly what we needed — a reliable, professional system that keeps our POS business running smoothly.",
                  name: "Matthew Idowu",
                  title: "Owner, Abrimatt POS",
                },
                {
                  quote: "Our website now clearly communicates what we offer and has helped us attract the right clients.",
                  name: "Mr. Gideon",
                  title: "Director, R3 Consulting Ltd",
                },
                {
                  quote: "The website Harzotech built elevated our brand presence significantly. It's clean, fast, and represents our brand exactly as we envisioned.",
                  name: "Mr. Jude Afuda",
                  title: "Founder, Immovables Realty",
                },
              ].map((t) => (
                <div key={t.name} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm leading-relaxed text-slate-600">"{t.quote}"</p>
                  <div className="mt-auto">
                    <p className="text-xs font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
