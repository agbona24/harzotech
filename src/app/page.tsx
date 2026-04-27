import type React from "react";
import { HeroBackground } from "@/components/HeroBackground";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { WhyHarzotech } from "@/components/WhyHarzotech";
import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { ScrollCarousel } from "@/components/ScrollCarousel";
import { AIAutomationWidget } from "@/components/AIAutomationWidget";
import { ServiceCard } from "@/components/ServiceCard";
import { WebsiteTypesWidget } from "@/components/WebsiteTypesWidget";
import { SoftwareSystemsWidget } from "@/components/SoftwareSystemsWidget";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/Motion";
import { HeroServicesPanel } from "@/components/HeroServicesPanel";
import {
  Activity,
  ArrowRight,
  Briefcase,
  Building,
  Building2,
  Coffee,
  ExternalLink,
  Factory,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Rocket,
  ShoppingBag,
  Truck,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Home",
  description: site.description,
};

const marqueeStats = [
  "50+ Projects Delivered",
  "10+ Years of Experience",
  "8+ Industries Served",
  "24/7 Automation Systems",
  "100% Custom-Built Solutions",
  "Nigeria's Trusted Tech Partner",
] as const;


const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We understand your business, audience, goals, challenges, and the result you want to achieve.",
  },
  {
    title: "Planning & Structure",
    description: "We define the user journey, content structure, features, technology stack, and project direction.",
  },
  {
    title: "Design & Development",
    description: "We create a premium, responsive, functional, and scalable digital solution.",
  },
  {
    title: "Testing & Optimization",
    description: "We test usability, responsiveness, performance, SEO, security, and functionality.",
  },
  {
    title: "Launch & Support",
    description: "We deploy the project and provide post-launch support, maintenance, improvements, and technical guidance.",
  },
] as const;

export default function Home() {
  return (
    <div>
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <Section variant="dark" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20 pb-0 sm:pt-28">
        <HeroBackground />

        <Container>
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.85)]" />
                  Building the Future of Digital Excellence
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1 className="mt-5 font-bold tracking-tight text-white leading-[1.1]">
                  <span className="block text-[2.6rem] sm:text-5xl lg:text-6xl">
                    Transforming Ideas into{" "}
                    <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                      Digital Reality.
                    </span>
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.16}>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Harzotech is a technology company that builds premium websites,
                  custom software, AI automation systems, SEO visibility, and digital
                  growth engines — so your business works smarter and scales faster.
                </p>
              </FadeIn>

              <FadeIn delay={0.24}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact?intent=start-project" variant="cta" className="w-full justify-center sm:w-auto">
                    Start a Project →
                  </ButtonLink>
                  <ButtonLink href="/projects" variant="outline-white" className="w-full justify-center sm:w-auto">
                    View Our Work
                  </ButtonLink>
                </div>
              </FadeIn>

              {/* Mobile trust chips */}
              <FadeIn delay={0.32}>
                <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
                  {["50+ Projects", "10+ Years", "24/7 Automation"].map((s) => (
                    <span key={s} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400">
                      <span className="h-1 w-1 rounded-full bg-brand-blue-400" />
                      {s}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: Services panel — desktop only */}
            <div className="hidden lg:block">
              <HeroServicesPanel />
            </div>
          </div>
        </Container>

        {/* Trust marquee — pinned to bottom of viewport */}
        <div className="relative mt-auto overflow-hidden border-t border-white/10">
          <div
            className="flex w-max"
            style={{ animation: "marquee 32s linear infinite" }}
          >
            {[...marqueeStats, ...marqueeStats].map((t, i) => (
              <div key={i} className="flex shrink-0 items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-400" />
                <span className="whitespace-nowrap text-xs font-semibold text-slate-300 sm:text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 2. Authority — Stats ───────────────────────────────── */}
      <Section className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-br from-slate-50 via-white to-brand-blue-50">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Who We Are</p>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              More Than an IT Company —{" "}
              <span className="text-brand-blue-700">A Digital Growth Partner</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              Harzotech combines technology, design, automation, SEO, software development,
              and business strategy to create digital solutions that solve real business problems.
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-4">
            {[
              { value: "10+",  label: "Years Experience",    color: "text-brand-blue-700" },
              { value: "50+",  label: "Projects Delivered",  color: "text-brand-red-700"  },
              { value: "8+",   label: "Industries Served",   color: "text-navy-800"       },
              { value: "24/7", label: "Automation Systems",  color: "text-emerald-700"    },
            ].map((s) => (
              <div key={s.label} className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className={`text-3xl sm:text-4xl font-black tracking-tight ${s.color}`}>{s.value}</p>
                <p className="mt-1.5 text-[11px] sm:text-xs font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ── 2b. Happy Clients — logo marquee ────────────────── */}
      <ClientsMarquee />

      {/* ── 3. About Preview ──────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-800 via-navy-900 to-navy-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:28px_28px]" />
        <Container>
          <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Text column — left */}
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-300" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-300">About</p>
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-300" />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Built on Experience, Strategy, and Innovation
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                Harzotech Nig Ltd is a privately owned technology solutions company helping
                businesses simplify operations, strengthen their digital presence, and scale
                through reliable digital systems.
              </p>
              {/* Mobile-only single image */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:hidden">
                <Image
                  src="/about1.png"
                  alt="Harzotech team at work"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <blockquote className="mt-7 rounded-2xl border-l-4 border-brand-blue-400 bg-white/[0.06] py-4 pl-5 pr-4 backdrop-blur-sm">
                <p className="text-sm leading-7 italic text-slate-200">
                  &ldquo;Technology should not just exist in a business. It should help the business
                  grow, operate better, and serve customers more efficiently.&rdquo;
                </p>
                <footer className="mt-2 text-xs font-semibold text-slate-400">— Azeez Agbona O., Founder</footer>
              </blockquote>
              <div className="mt-7">
                <ButtonLink href="/about" variant="secondary">Learn More About Harzotech</ButtonLink>
              </div>
            </div>

            {/* Images column — right */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/about1.png"
                    alt="Harzotech team at work"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 overflow-hidden rounded-2xl border border-white/20 shadow-xl">
                  <Image
                    src="/about2.png"
                    alt="Harzotech workspace"
                    width={320}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. Services ───────────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-white">
        {/* Radial blue wash from top */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(21,101,192,0.05),transparent)]" />
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:radial-gradient(rgba(0,0,0,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container>
          <div className="relative flex flex-col gap-12">
            {/* Header row with "View All" CTA */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Services"
                title="Technology Services Designed for Business Growth"
                description="Build credibility, reduce manual work, improve operations, and increase visibility with technology that supports long-term growth."
              />
              <div className="shrink-0">
                <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">View All Services</ButtonLink>
              </div>
            </div>
            {/* Horizontal scroll row */}
            <ScrollCarousel
              fadeLeft="bg-[linear-gradient(to_right,white,transparent)]"
              fadeRight="bg-[linear-gradient(to_left,white,transparent)]"
              btnVariant="light"
              cardWidth={288}
            >
              {services.map((s) => (
                <div key={s.id} className="w-[82vw] shrink-0 snap-start sm:w-72">
                  <ServiceCard service={s} />
                </div>
              ))}
            </ScrollCarousel>
          </div>
        </Container>
      </Section>

      {/* ── 5. Projects ───────────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-brand-blue-800">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:28px_28px]" />
        <Container>
          <div className="relative flex flex-col gap-8">

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Projects"
                title="Selected Work"
                dark
              />
              <div className="shrink-0">
                <ButtonLink href="/projects" variant="secondary" className="w-full sm:w-auto">View All 50+ Projects</ButtonLink>
              </div>
            </div>

            {/* Scroll row */}
            <ScrollCarousel
              fadeLeft="bg-[linear-gradient(to_right,#0c1e3b,transparent)]"
              fadeRight="bg-[linear-gradient(to_left,#163060,transparent)]"
              btnVariant="dark"
              cardWidth={288}
            >
              {projects.slice(0, 10).map((p) => (
                <div key={p.slug} className="w-[78vw] shrink-0 snap-start sm:w-72">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
                    >
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
                        {p.image && (
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 256px, 288px"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                        <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/70 backdrop-blur-sm">
                          {p.industry}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 px-4 py-3.5">
                        <p className="truncate text-sm font-semibold text-white">{p.name}</p>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-500 transition group-hover:text-brand-blue-300" />
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={`/projects#${p.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
                    >
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
                        {p.image && (
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 256px, 288px"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                        <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/70 backdrop-blur-sm">
                          {p.industry}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 px-4 py-3.5">
                        <p className="truncate text-sm font-semibold text-white">{p.name}</p>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-brand-blue-300" />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </ScrollCarousel>

          </div>
        </Container>
      </Section>

      {/* ── 6. AI & Automation — navy dark ────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(21,101,192,0.12),transparent),radial-gradient(ellipse_50%_50%_at_85%_30%,rgba(198,40,40,0.08),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:28px_28px]" />
        <Container>
          <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="AI & Automation"
                title="AI and Automation for Smarter Business Operations"
                description="Reduce manual work, improve customer communication, manage leads, confirm appointments, automate responses, and streamline daily operations."
                dark
              />
              <div className="mt-6 grid gap-2 sm:gap-2.5">
                {[
                  "AI voice agents",
                  "WhatsApp automation",
                  "Appointment booking automation",
                  "CRM and lead capture workflows",
                  "Payment and invoice automation",
                  "Customer support automation",
                  "Google Sheets, Airtable, Zapier, n8n, Twilio, and OpenAI integrations",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-sm text-slate-300">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-300" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <ButtonLink href="/ai-automation" variant="cta" className="w-full sm:w-auto">Explore AI Automation →</ButtonLink>
              </div>
            </div>

            <AIAutomationWidget />
          </div>
        </Container>
      </Section>

      {/* ── 7. Website Development ────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <WebsiteTypesWidget />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Website Development</p>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                Websites Built With Strategy, Not Just Design
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                A website should build trust, explain your offer clearly, guide users to take
                action, and support your business goals. Harzotech builds with structure, SEO,
                performance, responsiveness, conversion, and brand credibility in mind.
              </p>
              <div className="mt-7">
                <ButtonLink href="/website-development" variant="secondary" className="w-full sm:w-auto">Explore Website Development</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 8. Software Development ───────────────────────────── */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Software Development</p>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                Custom Software That Solves Real Business Problems
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                Harzotech develops software systems that help businesses manage operations,
                customers, sales, inventory, bookings, payments, staff, and reporting from
                one reliable platform.
              </p>
              <div className="mt-7">
                <ButtonLink href="/software-development" variant="secondary" className="w-full sm:w-auto">Explore Software Development</ButtonLink>
              </div>
            </div>

            <SoftwareSystemsWidget />
          </div>
        </Container>
      </Section>

      {/* ── 9. Why Choose ─────────────────────────────────────── */}
      <WhyHarzotech />

      {/* ── 10. Process — navy dark ───────────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(21,101,192,0.1),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:28px_28px]" />
        <Container>
          <div className="relative text-center">
            <SectionHeading
              eyebrow="Process"
              title="How We Bring Your Digital Product to Life"
              description="A clear, structured delivery approach that reduces risk and keeps execution aligned with business goals."
              align="center"
              dark
            />
            <div className="relative mt-10 sm:mt-14">
              {/* Desktop connector line */}
              <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
              {/* Mobile: horizontal scroll, Desktop: grid */}
              <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible lg:pb-0">
                {processSteps.map((s, idx) => (
                  <div key={s.title} className="flex w-[72vw] shrink-0 snap-start flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-center sm:w-64 lg:w-auto lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-brand-blue-500/40 bg-gradient-to-br from-brand-blue-700/25 to-brand-blue-900/10 text-xl font-black text-brand-blue-300 sm:h-16 sm:w-16 sm:text-2xl">
                      {idx + 1}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-white">{s.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 11. Industries ────────────────────────────────────── */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Industries"
              title="12 Industries We've Built For"
              description="Experience across multiple sectors — with solutions tailored to each industry's operational realities and customer behaviour."
            />
          </div>
          {/* Row 1 — scrolls left */}
          {/* Row 2 — scrolls right */}
          {(() => {
            const row1 = [
              { name: "Healthcare",              Icon: Activity,       accent: "blue" },
              { name: "E-commerce",              Icon: ShoppingBag,    accent: "red"  },
              { name: "Real Estate",             Icon: Building2,      accent: "blue" },
              { name: "Financial Services",      Icon: Landmark,       accent: "red"  },
              { name: "Hospitality",             Icon: Coffee,         accent: "blue" },
              { name: "Logistics",               Icon: Truck,          accent: "red"  },
            ];
            const row2 = [
              { name: "Education",               Icon: GraduationCap,  accent: "red"  },
              { name: "Manufacturing",           Icon: Factory,        accent: "blue" },
              { name: "Consulting",              Icon: Briefcase,      accent: "red"  },
              { name: "Corporate Organizations", Icon: Building,       accent: "blue" },
              { name: "NGOs",                    Icon: HeartHandshake, accent: "red"  },
              { name: "Startups & SMEs",         Icon: Rocket,         accent: "blue" },
            ];
            const Card = ({ name, Icon, accent }: { name: string; Icon: React.ElementType; accent: string }) => (
              <div className={`flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-sm ${
                accent === "blue"
                  ? "border-brand-blue-100 bg-white"
                  : "border-brand-red-100 bg-white"
              }`}>
                <div className={`shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                  accent === "blue"
                    ? "bg-brand-blue-50 text-brand-blue-700"
                    : "bg-brand-red-50 text-brand-red-700"
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="whitespace-nowrap text-sm font-semibold text-slate-800">{name}</p>
              </div>
            );
            return (
              <div className="mt-10 flex flex-col gap-3 overflow-hidden">
                {/* Row 1: left */}
                <div className="flex w-max" style={{ animation: "marquee 28s linear infinite" }}>
                  {[...row1, ...row1].map((item, i) => (
                    <div key={i} className="mx-2"><Card {...item} /></div>
                  ))}
                </div>
                {/* Row 2: right */}
                <div className="flex w-max" style={{ animation: "marquee-reverse 32s linear infinite" }}>
                  {[...row2, ...row2].map((item, i) => (
                    <div key={i} className="mx-2"><Card {...item} /></div>
                  ))}
                </div>
              </div>
            );
          })()}
        </Container>
      </Section>

      {/* ── 12. Founder ───────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* CEO image — top on mobile, right on desktop */}
            <div className="flex justify-center lg:order-2">
              <div className="relative w-56 overflow-hidden rounded-3xl border border-slate-200 shadow-md sm:w-64">
                <Image
                  src="/ceo.png"
                  alt={`${site.founder.name} — Founder & CEO, Harzotech`}
                  width={320}
                  height={400}
                  className="w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-4 py-4">
                  <p className="text-sm font-bold text-white">{site.founder.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{site.founder.title}</p>
                </div>
              </div>
            </div>

            {/* Text — below image on mobile, left on desktop */}
            <div className="lg:order-1">
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Leadership</p>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                Led by Experience, Strategy, and Innovation
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                {`Harzotech is led by ${site.founder.name}, an IT specialist, developer, AI enthusiast, and digital strategist with over 10 years of experience helping businesses use technology to improve visibility, operations, and growth.`}
              </p>
              <div className="relative mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="pointer-events-none absolute -top-5 left-5 select-none text-6xl font-black leading-none text-brand-blue-100">&ldquo;</div>
                <p className="relative text-sm leading-7 italic text-slate-700">{site.founder.quote}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 13. Testimonials — navy dark ──────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(21,101,192,0.1),transparent),radial-gradient(ellipse_50%_50%_at_80%_100%,rgba(198,40,40,0.07),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:28px_28px]" />
        <Container>
          <div className="relative">
            <SectionHeading
              eyebrow="Testimonials"
              title="What Clients Say About Working With Harzotech"
              description="Professional feedback from clients — real results, real relationships."
              dark
            />
            <div className="relative mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="flex gap-5 overflow-x-auto scroll-smooth px-4 pb-3 sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
                {testimonials.map((t, idx) => (
                  <div key={`${t.company}-${idx}`} className="relative flex w-[85vw] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:w-80 sm:p-7">
                    <div className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-black leading-none text-white/[0.04]">&ldquo;</div>
                    {t.logo && (
                      <div className="mb-5 flex h-12 items-center">
                        <Image
                          src={t.logo}
                          alt={t.company}
                          width={180}
                          height={48}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                    )}
                    <p className="relative flex-1 text-sm leading-7 text-slate-300">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-blue-500/30 bg-gradient-to-br from-brand-blue-700/30 to-navy-800/30 text-xs font-bold text-brand-blue-300">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
