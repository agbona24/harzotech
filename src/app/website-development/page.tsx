import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WebsiteDevHeroIllustration } from "@/components/WebsiteDevHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { FAQSection } from "@/components/FAQSection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { PageSchema } from "@/components/PageSchema";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceAnswerBlock } from "@/components/ServiceAnswerBlock";
import {
  Globe, ShoppingCart, LayoutTemplate, Rocket, Building2,
  HeartPulse, LineChart, CheckCircle2, Search, PenLine,
  Code2, Zap, MousePointerClick, BarChart3, ShieldCheck, Smartphone,
} from "lucide-react";

const FAQS = [
  { q: "How much does a business website cost in Nigeria?", a: "Website costs in Nigeria vary by complexity. A professional business website typically starts from ₦300,000 – ₦800,000, while e-commerce stores and feature-rich platforms range higher. Harzotech provides a transparent quote based on your specific goals, features, and timeline after an initial consultation." },
  { q: "How long does it take to build a website?", a: "A standard business website takes 2–4 weeks. E-commerce stores and larger multi-page websites typically take 4–8 weeks depending on content readiness and revision rounds. We provide a clear project timeline before we start." },
  { q: "Will my website be mobile-friendly and SEO-ready?", a: "Yes — every website we build is fully responsive across all screen sizes and follows SEO best practices: semantic HTML, fast loading, Core Web Vitals compliance, structured data, and proper meta tags from day one." },
  { q: "Do you build e-commerce websites in Nigeria?", a: "Yes. We build full-featured e-commerce websites with product management, cart, checkout, payment gateway integration (Paystack, Flutterwave), order tracking, and inventory management." },
  { q: "Do you provide ongoing website maintenance after launch?", a: "Yes. We offer post-launch maintenance packages covering security updates, content changes, performance monitoring, uptime checks, and technical support so your website stays fast, secure, and up to date." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We handle website redesigns, rebuilds, and migrations. We audit your current site, identify what's working, and rebuild it with a better structure, performance, and conversion focus." },
];

export const metadata: Metadata = {
  title: "Website Design & Development Company in Lagos, Nigeria",
  description:
    "Harzotech builds premium business websites, e-commerce stores, and landing pages in Lagos, Nigeria — conversion-focused, SEO-ready, and mobile-first. Get a site that earns its place in your business.",
  alternates: { canonical: "https://harzotech.com.ng/website-development" },
};

const WEBSITE_TYPES = [
  {
    icon: Building2,
    title: "Corporate & Business Websites",
    description: "Professional, credibility-first websites that establish authority and convert visitors into enquiries.",
    isRed: false,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Full-featured online stores with product management, checkout flows, payments, and order tracking.",
    isRed: true,
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description: "Conversion-optimised single pages built around one clear goal — lead capture, product launch, or campaign.",
    isRed: false,
  },
  {
    icon: Rocket,
    title: "SaaS & Startup Websites",
    description: "Product-focused websites with feature sections, pricing tables, onboarding flows, and sign-up CTAs.",
    isRed: true,
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Professional Services",
    description: "Trust-building websites for clinics, hospitals, law firms, and consultancies with appointment booking.",
    isRed: false,
  },
  {
    icon: Globe,
    title: "Real Estate & Property",
    description: "Property listing websites with search filters, enquiry forms, agent profiles, and location maps.",
    isRed: true,
  },
];

const WHAT_WE_INCLUDE = [
  { icon: Smartphone,       label: "Mobile-first responsive design" },
  { icon: Search,           label: "Technical SEO & metadata" },
  { icon: Zap,              label: "Performance optimisation" },
  { icon: MousePointerClick,label: "Conversion-focused layout" },
  { icon: ShieldCheck,      label: "Security & HTTPS setup" },
  { icon: BarChart3,        label: "Analytics & tracking integration" },
  { icon: PenLine,          label: "CMS / content management" },
  { icon: LineChart,        label: "Clear call-to-action structure" },
  { icon: CheckCircle2,     label: "Cross-browser compatibility" },
  { icon: Globe,            label: "Custom domain & hosting setup" },
  { icon: Code2,            label: "Clean, maintainable codebase" },
  { icon: Rocket,           label: "Fast delivery — weeks, not months" },
];

const PROCESS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn your goals, audience, competitors, and what success looks like before proposing anything.",
  },
  {
    number: "02",
    title: "Structure & Wireframe",
    description: "We map your site architecture, page hierarchy, and content structure before any visual design begins.",
  },
  {
    number: "03",
    title: "Design & Build",
    description: "Visual design, responsive development, and content integration — with regular progress checkpoints.",
  },
  {
    number: "04",
    title: "QA, Launch & Handover",
    description: "Full testing across devices, deployment, CMS training, and ongoing support after you go live.",
  },
];

const STATS = [
  { value: "50+",  label: "Websites Delivered" },
  { value: "100%", label: "Mobile-First Builds" },
  { value: "< 3s", label: "Target Load Time" },
  { value: "5★",   label: "Client Satisfaction" },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div>
      <PageSchema
        service="Website Design & Development"
        url="https://harzotech.com.ng/website-development"
        description="Premium business websites, e-commerce stores, and landing pages in Lagos, Nigeria — conversion-focused, SEO-ready, and mobile-first."
        breadcrumbs={[{ name: "Website Design & Development", url: "https://harzotech.com.ng/website-development" }]}
      />
      <PageHeader
        eyebrow="Website Development"
        title={<>Websites Built With <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Strategy,</span> Not Just <span className="text-brand-blue-300">Design</span></>}
        description="A website should build trust, explain your offer clearly, guide users to take action, and support your business goals. We build with structure, SEO, performance, and conversion in mind — not just aesthetics."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        secondaryCta={{ href: "/projects", label: "View Our Work" }}
        illustration={<WebsiteDevHeroIllustration />}
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
        answer="Harzotech Nig Ltd is a website design and development company in Lagos, Nigeria that builds premium, conversion-focused business websites — including corporate sites, e-commerce stores, landing pages, and real estate or healthcare websites — all custom-built, SEO-ready, and mobile-first."
        outcomes={[
          "Fully responsive on all devices",
          "SEO-optimised from day one",
          "Built for conversions and lead capture",
          "Fast load times and Core Web Vitals compliant",
        ]}
        signal="Website design & development company — Lagos, Nigeria"
      />

      {/* Website Types */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Build"
              title="Every type of website, built to perform"
              description="Whether you need a corporate presence, an online store, or a conversion-focused landing page — we build it with strategy and precision."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WEBSITE_TYPES.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      type.isRed
                        ? "border-brand-red-100 bg-brand-red-50/40 hover:border-brand-red-200 hover:shadow-brand-red-100"
                        : "border-brand-blue-100 bg-brand-blue-50/40 hover:border-brand-blue-200 hover:shadow-brand-blue-100"
                    }`}
                  >
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                        type.isRed
                          ? "bg-brand-red-100 text-brand-red-700"
                          : "bg-brand-blue-100 text-brand-blue-700"
                      }`}
                    >
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
              title="Everything a high-performing website needs"
              description="No add-on surprises. Every project comes with the full stack of what makes a website actually work."
              align="center"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_INCLUDE.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50">
                      <Icon className="h-4.5 w-4.5 text-brand-blue-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <MidPageCTA service="Website Development" ctaLabel="Start a Project" ctaHref="/contact?intent=start-project" />

      {/* Process */}
      <Section>
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we build your website"
              description="A repeatable, strategic process that reduces surprises and delivers results faster."
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

      <FAQSection faqs={FAQS} eyebrow="Website Development FAQ" />
      <RelatedServices exclude={["website-development"]} />

      {/* Dark CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-700/40 bg-brand-red-900/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red-400" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">Ready to start?</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build a website that{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                works as hard as you do
              </span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Tell us what you&apos;re trying to achieve. We&apos;ll respond with a clear plan, timeline, and what it takes to execute well.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/contact?intent=consultation" variant="outline-white">
                Book a Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

