import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SEOHeroIllustration } from "@/components/SEOHeroIllustration";
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
  Search, MapPin, PenLine, Funnel, BarChart3, Megaphone,
  CheckCircle2, TrendingUp, Users2, DollarSign,
  Globe, Code2, FileText, Link2, Star, RefreshCw,
} from "lucide-react";

const FAQS = [
  { q: "How long does SEO take to show results in Nigeria?", a: "SEO is a compounding investment. Most businesses see measurable improvements in rankings and organic traffic within 3–6 months of consistent optimisation. Competitive keywords in high-volume markets may take 6–12 months. We track and report progress monthly so you can see the trajectory clearly." },
  { q: "Do you offer local SEO services in Lagos?", a: "Yes. Local SEO is a core part of our offering — Google Business Profile optimisation, local citation building, map pack rankings, review strategy, and geo-targeted content that helps your business appear when customers in Lagos and Nigeria search for your services." },
  { q: "What is technical SEO and why does it matter?", a: "Technical SEO is the foundation of organic rankings — site speed, Core Web Vitals, mobile-friendliness, crawlability, indexation, structured data, and HTTPS. Without it, even great content won't rank well. We audit and fix technical issues that prevent Google from properly reading and ranking your site." },
  { q: "Can SEO help my business get more leads in Nigeria?", a: "Yes — SEO is one of the highest-ROI lead generation channels because it attracts people actively searching for what you offer. We combine keyword strategy, content, and technical optimisation to drive qualified organic traffic that converts into enquiries and customers." },
  { q: "What is included in your SEO service?", a: "Our SEO service includes: technical audit and fixes, keyword research and mapping, on-page optimisation (titles, meta, headers, content), local SEO setup, content strategy, link building, Google Analytics and Search Console setup, and monthly performance reporting." },
  { q: "Do you guarantee first page Google rankings?", a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is outside anyone's control. What we guarantee is best-practice execution: the right strategy, consistent implementation, and transparent monthly reporting on rankings, traffic, and leads. Most clients see significant improvements within 3–6 months." },
];

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Agency in Lagos, Nigeria — Google Rankings & Leads",
  description:
    "Harzotech's SEO and digital marketing services help Nigerian businesses rank on Google, attract qualified leads, and grow their online visibility — technical SEO, local SEO, and content strategy.",
  alternates: { canonical: "https://harzotech.com.ng/seo-digital-marketing" },
};

const SEO_SERVICES = [
  {
    icon: Code2,
    title: "Technical SEO",
    description: "Site speed, Core Web Vitals, crawlability, indexation, structured data, and performance foundations that Google rewards.",
    isRed: false,
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Google Business optimisation, local citations, map rankings, and review strategies to dominate local search results.",
    isRed: true,
  },
  {
    icon: PenLine,
    title: "Content Strategy",
    description: "Keyword-mapped content plans, authority articles, and optimised landing pages that attract and convert the right audience.",
    isRed: false,
  },
  {
    icon: Funnel,
    title: "Lead Generation Funnels",
    description: "End-to-end conversion systems — from search visibility to landing page to captured lead — built to generate pipeline consistently.",
    isRed: true,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "GA4 setup, conversion tracking, custom dashboards, and monthly reports that show exactly what is and isn't working.",
    isRed: false,
  },
  {
    icon: Megaphone,
    title: "Google Ads & Paid Search",
    description: "Strategic paid search campaigns built for ROI — not just clicks. Tight targeting, A/B testing, and transparent reporting.",
    isRed: true,
  },
];

const WHAT_WE_INCLUDE = [
  { icon: Search,       label: "Full technical SEO audit" },
  { icon: Globe,        label: "Keyword research & mapping" },
  { icon: Code2,        label: "On-page optimisation" },
  { icon: Link2,        label: "Backlink building strategy" },
  { icon: Star,         label: "Google Business Profile setup" },
  { icon: FileText,     label: "Schema markup & structured data" },
  { icon: BarChart3,    label: "GA4 & Search Console setup" },
  { icon: TrendingUp,   label: "Rank tracking & competitor monitoring" },
  { icon: Funnel,       label: "Conversion rate optimisation" },
  { icon: RefreshCw,    label: "Monthly performance reporting" },
  { icon: PenLine,      label: "Content creation & optimisation" },
  { icon: MapPin,       label: "Local citation & map ranking" },
];

const OUTCOMES = [
  {
    icon: TrendingUp,
    title: "More Organic Traffic",
    description: "Rank for the searches your ideal customers are already making — without paying per click.",
  },
  {
    icon: Users2,
    title: "Better Quality Leads",
    description: "SEO-driven leads convert 8x better than outbound because they come with intent already established.",
  },
  {
    icon: DollarSign,
    title: "Compounding ROI",
    description: "Unlike ads that stop when you stop paying, SEO builds an asset that keeps delivering value over time.",
  },
  {
    icon: CheckCircle2,
    title: "Measurable Results",
    description: "Rankings, traffic, conversions, and leads tracked clearly — so you always know what your investment is doing.",
  },
];

const PROCESS = [
  { number: "01", title: "SEO Audit", description: "Full technical and content audit to identify exactly what's holding your site back in search." },
  { number: "02", title: "Strategy & Keyword Mapping", description: "We build a keyword and content roadmap aligned with your business goals and search intent." },
  { number: "03", title: "On-Page & Technical Execution", description: "We implement fixes, optimise content, set up tracking, and build the technical foundation." },
  { number: "04", title: "Report, Refine & Scale", description: "Monthly reviews with transparent reporting — then we double down on what's working." },
];

const STATS = [
  { value: "3x",    label: "Avg. Traffic Growth" },
  { value: "Pg 1",  label: "Target Keyword Rankings" },
  { value: "8x",    label: "SEO Lead Conversion Rate" },
  { value: "100%",  label: "Measurable & Reported" },
];

export default function SEODigitalMarketingPage() {
  return (
    <div>
      <PageSchema
        service="SEO & Digital Marketing"
        url="https://harzotech.com.ng/seo-digital-marketing"
        description="Technical SEO, local SEO, and digital marketing services that help Nigerian businesses rank on Google and attract qualified leads."
        breadcrumbs={[{ name: "SEO & Digital Marketing", url: "https://harzotech.com.ng/seo-digital-marketing" }]}
      />
      <PageHeader
        eyebrow="SEO & Digital Marketing"
        title={<>Visibility That Drives <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Qualified Leads</span> — Not Just <span className="text-brand-blue-300">Traffic</span></>}
        description="Ranking on Google isn't vanity — it's pipeline. We build search visibility systems that attract decision-makers, convert visitors, and compound in value every month you run them."
        primaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        secondaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        illustration={<SEOHeroIllustration />}
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
        answer="Harzotech Nig Ltd is an SEO and digital marketing agency in Lagos, Nigeria that helps businesses rank on Google, attract qualified organic traffic, and generate leads — through technical SEO, local SEO, on-page optimisation, content strategy, Google Business Profile management, and monthly performance reporting."
        outcomes={[
          "Higher Google rankings for target keywords",
          "Local SEO dominance in Lagos and Nigeria",
          "Qualified organic leads — not just traffic",
          "Monthly reporting with clear metrics",
        ]}
        signal="SEO & digital marketing agency — Lagos, Nigeria"
      />

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Deliver"
              title="Every channel that drives organic growth"
              description="We combine technical foundations, content authority, and conversion systems to build search visibility that translates to real business outcomes."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SEO_SERVICES.map((service) => {
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

      {/* Outcomes */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Why SEO Works"
              title="The business case for organic search"
              description="SEO isn't a cost — it's the highest-ROI channel you'll invest in if done properly."
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

      {/* What's Included */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What's Included"
              title="The full stack of SEO — done properly"
              description="No shortcuts, no vanity metrics. We cover every layer of what it takes to rank, convert, and sustain visibility."
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

      <MidPageCTA service="SEO" ctaLabel="Get a Free SEO Audit" ctaHref="/contact?intent=consultation" />

      {/* Process */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we build your search visibility"
              description="Strategy-first. Execution-focused. Results you can measure every single month."
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

      <FAQSection faqs={FAQS} eyebrow="SEO & Digital Marketing FAQ" />
      <RelatedServices exclude={["seo-digital-marketing"]} />

      {/* Dark CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-700/40 bg-brand-red-900/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red-400" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">Start ranking</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your competitors are ranking.{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                You should be too.
              </span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Book a free SEO audit. We&apos;ll show you exactly where you stand, what&apos;s holding you back, and what it takes to close the gap.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=consultation" variant="cta">Get a Free SEO Audit</ButtonLink>
              <ButtonLink href="/contact?intent=start-project" variant="outline-white">Start a Project</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
