import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn, Float } from "@/components/Motion";
import {
  ArrowRight,
  BarChart3,
  Bolt,
  CheckCircle2,
  Code2,
  Globe,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Home",
  description: site.description,
};

const trustItems = [
  "10+ Years of Technology Experience",
  "Websites, Software & Business Systems Delivered",
  "AI, Automation, SEO & Digital Growth Expertise",
  "Trusted Across Multiple Industries",
] as const;

const heroServices = [
  {
    title: "Website Development",
    description: "Premium, fast websites that convert.",
    icon: Globe,
    tone: "bg-brand-blue-500/10 text-brand-blue-200 border-brand-blue-500/20",
  },
  {
    title: "Software Development",
    description: "Custom systems for real operations.",
    icon: Code2,
    tone: "bg-white/5 text-slate-200 border-white/10",
  },
  {
    title: "AI & Automation",
    description: "Workflows that run 24/7.",
    icon: Sparkles,
    tone: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
  },
  {
    title: "SEO & Digital Growth",
    description: "Visibility, leads, and compounding results.",
    icon: Search,
    tone: "bg-brand-red-500/10 text-brand-red-200 border-brand-red-500/20",
  },
  {
    title: "IT Support & Maintenance",
    description: "Reliable support when it matters.",
    icon: ShieldCheck,
    tone: "bg-white/5 text-slate-200 border-white/10",
  },
] as const;

const whyChoose = [
  { title: "Strategy before execution", icon: Sparkles },
  { title: "Business-focused technology", icon: BarChart3 },
  { title: "Strong understanding of sales and customer behavior", icon: Bolt },
  { title: "Custom software and web development experience", icon: Layers },
  { title: "AI and automation expertise", icon: Zap },
  { title: "SEO and digital visibility awareness", icon: BarChart3 },
  { title: "Responsive and user-friendly design", icon: CheckCircle2 },
  { title: "Reliable technical support", icon: ShieldCheck },
  { title: "Experience across multiple industries", icon: CheckCircle2 },
  { title: "Scalable solutions built for long-term value", icon: CheckCircle2 },
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
      <Section variant="dark" className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(21,101,192,0.18),transparent),radial-gradient(ellipse_50%_45%_at_85%_105%,rgba(198,40,40,0.1),transparent)]" />
          <div className="absolute inset-0 opacity-[0.20] [background-image:url('/hero-network.svg')] [background-size:1200px_700px] [background-position:center] [background-repeat:no-repeat] mix-blend-overlay" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:30px_30px]" />
          <div className="absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-blue-700/[0.08] blur-3xl" />
          <div className="absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-brand-red-700/[0.07] blur-3xl" />
        </div>

        <Container>
          <div className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.85)]" />
                  Serving businesses across Nigeria &amp; beyond
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl leading-[1.1]">
                  Technology Built to{" "}
                  <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                    Grow, Automate,
                  </span>{" "}
                  and Scale
                </h1>
              </FadeIn>

              <FadeIn delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                  Harzotech is a technology company that builds premium websites,
                  custom software, AI automation systems, SEO visibility, and digital
                  growth engines — so your business works smarter and scales faster.
                </p>
              </FadeIn>

              <FadeIn delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact?intent=start-project" variant="cta">
                    Start a Project →
                  </ButtonLink>
                  <ButtonLink href="/projects" variant="outline-white">
                    View Our Work
                  </ButtonLink>
                </div>
              </FadeIn>
            </div>

            {/* Right: Services snapshot */}
            <div className="relative lg:pl-4">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-blue-700/10 via-transparent to-brand-red-700/10 blur-2xl" />
              <FadeIn delay={0.14} y={18}>
                <Float>
                  <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 p-6 shadow-2xl ring-1 ring-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">Everything we build for you</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Websites • Software • AI • SEO • IT Support
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                        Full service
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {heroServices.map((s) => (
                        <div
                          key={s.title}
                          className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition hover:bg-white/[0.06]"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${s.tone}`}>
                              <s.icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-white">{s.title}</p>
                              <p className="mt-1 text-xs leading-5 text-slate-400">{s.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                      <p className="text-xs font-medium text-slate-300">
                        Strategy → Design → Build → Launch → Support
                      </p>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </Float>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 2. Authority — Stats ───────────────────────────────── */}
      <Section className="relative overflow-hidden border-y border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Who We Are</p>
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              More Than an IT Company —{" "}
              <span className="text-brand-blue-700">A Digital Growth Partner</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Harzotech combines technology, design, automation, SEO, software development,
              and business strategy to create digital solutions that solve real business problems.
            </p>
          </div>

          <div className="relative mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "10+",  label: "Years Experience",    color: "text-brand-blue-700" },
              { value: "50+",  label: "Projects Delivered",  color: "text-brand-red-700"  },
              { value: "8+",   label: "Industries Served",   color: "text-navy-800"       },
              { value: "24/7", label: "Automation Systems",  color: "text-emerald-700"    },
            ].map((s) => (
              <div key={s.label} className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className={`text-4xl font-black tracking-tight ${s.color}`}>{s.value}</p>
                <p className="mt-2 text-xs font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-10 max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {trustItems.map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-slate-900">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. About Preview ──────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">About</p>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built on Experience, Strategy, and Innovation
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Harzotech Nig Ltd is a privately owned technology solutions company helping
                businesses simplify operations, strengthen their digital presence, and scale
                through reliable digital systems.
              </p>
              <blockquote className="mt-7 rounded-2xl border-l-4 border-brand-blue-700 bg-white py-4 pl-5 pr-4 shadow-sm">
                <p className="text-sm leading-7 italic text-slate-700">
                  &ldquo;Technology should not just exist in a business. It should help the business
                  grow, operate better, and serve customers more efficiently.&rdquo;
                </p>
                <footer className="mt-2 text-xs font-semibold text-slate-500">— Azeez Agbona O., Founder</footer>
              </blockquote>
              <div className="mt-7">
                <ButtonLink href="/about" variant="secondary">Learn More About Harzotech</ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">Core capabilities</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.slice(0, 6).map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.id} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-700">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-xs font-medium leading-5 text-slate-700">{s.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. Services ───────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Services"
              title="Technology Services Designed for Business Growth"
              description="Build credibility, reduce manual work, improve operations, and increase visibility with technology that supports long-term growth."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => <ServiceCard key={s.id} service={s} />)}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. Projects ───────────────────────────────────────── */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Projects"
              title="Selected Work Built With Strategy and Precision"
              description="From corporate websites to software platforms and business systems, Harzotech has delivered solutions across different industries."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 9).map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
            <div>
              <ButtonLink href="/projects" variant="secondary">View All Projects</ButtonLink>
            </div>
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
              <div className="mt-7 grid gap-2.5">
                {[
                  "AI voice agents",
                  "WhatsApp automation",
                  "Appointment booking automation",
                  "CRM and lead capture workflows",
                  "Payment and invoice automation",
                  "Customer support automation",
                  "Google Sheets, Airtable, Zapier, n8n, Twilio, and OpenAI integrations",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-300" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href="/ai-automation" variant="cta">Explore AI Automation →</ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Automation Pipeline</p>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  Running
                </span>
              </div>
              <div className="space-y-1.5">
                {[
                  { step: "Trigger",   detail: "Form / WhatsApp / Booking received",   cls: "border-brand-blue-500/30 bg-brand-blue-500/10 text-brand-blue-300" },
                  { step: "Process",   detail: "AI triage → classify → route",          cls: "border-violet-500/30 bg-violet-500/10 text-violet-300"             },
                  { step: "Respond",   detail: "Auto-reply → CRM update → team alert",  cls: "border-brand-red-500/30 bg-brand-red-500/10 text-brand-red-300"   },
                  { step: "Follow-up", detail: "Reminder → invoice → review request",   cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"          },
                ].map((item, i, arr) => (
                  <div key={item.step}>
                    <div className={`rounded-xl border p-4 ${item.cls}`}>
                      <p className="text-[11px] font-bold tracking-widest uppercase opacity-80">{item.step}</p>
                      <p className="mt-1 text-xs text-slate-300">{item.detail}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight className="h-4 w-4 rotate-90 text-white/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. Website Development ────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:order-1">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-3 flex-1 rounded-full bg-slate-200 px-3 py-1 text-[11px] text-slate-400">
                  harzotech.com/your-business
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Website types we build</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Business websites","Corporate websites","Landing pages","E-commerce websites","Real estate websites","Healthcare websites","SaaS websites","SEO-ready websites"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-blue-700" />
                      <p className="text-xs font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Website Development</p>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Websites Built With Strategy, Not Just Design
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                A website should build trust, explain your offer clearly, guide users to take
                action, and support your business goals. Harzotech builds with structure, SEO,
                performance, responsiveness, conversion, and brand credibility in mind.
              </p>
              <div className="mt-8">
                <ButtonLink href="/website-development" variant="secondary">Explore Website Development</ButtonLink>
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
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Custom Software That Solves Real Business Problems
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Harzotech develops software systems that help businesses manage operations,
                customers, sales, inventory, bookings, payments, staff, and reporting from
                one reliable platform.
              </p>
              <div className="mt-8">
                <ButtonLink href="/software-development" variant="secondary">Explore Software Development</ButtonLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-navy-950 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <p className="text-xs font-semibold text-slate-300">Harzotech System Suite</p>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Systems we build</p>
                <div className="grid grid-cols-2 gap-2">
                  {["POS systems","Inventory systems","Restaurant systems","Hotel systems","School management","Hospital & pharmacy","Booking systems","CRM dashboards","SaaS platforms","Admin portals"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5">
                      <Code2 className="h-3.5 w-3.5 shrink-0 text-brand-blue-700" />
                      <p className="text-xs font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 9. Why Choose ─────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why Harzotech"
            title="Why Businesses Choose Harzotech"
            description="A strategic approach, premium execution, and practical systems built to support growth."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <span className="pointer-events-none absolute right-4 top-2 select-none text-6xl font-black leading-none text-slate-100 tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="relative mt-4 text-sm font-semibold leading-6 text-slate-950">{w.title}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

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
            <div className="relative mt-14">
              <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {processSteps.map((s, idx) => (
                  <div key={s.title} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue-500/40 bg-gradient-to-br from-brand-blue-700/25 to-brand-blue-900/10 text-2xl font-black text-brand-blue-300">
                      {idx + 1}
                    </div>
                    <div className="mt-5">
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
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            description="Experience across multiple sectors — with solutions tailored to operational realities and customer behavior."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:border-brand-blue-200 hover:shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-700" />
                <p className="text-sm font-medium text-slate-700">{i}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 12. Founder ───────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-700">Leadership</p>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Led by Experience, Strategy, and Innovation
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {`Harzotech is led by ${site.founder.name}, an IT specialist, developer, AI enthusiast, and digital strategist with over 10 years of experience helping businesses use technology to improve visibility, operations, and growth.`}
              </p>
              <div className="relative mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="pointer-events-none absolute -top-5 left-5 select-none text-6xl font-black leading-none text-brand-blue-100">&ldquo;</div>
                <p className="relative text-sm leading-7 italic text-slate-700">{site.founder.quote}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div
                className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 via-slate-50 to-brand-red-50"
                aria-label="Founder image placeholder"
                role="img"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-blue-200 bg-gradient-to-br from-brand-blue-100 to-brand-blue-50">
                  <p className="text-3xl font-black text-brand-blue-700">A</p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-950">{site.founder.name}</p>
                <p className="mt-1 text-sm text-slate-600">{site.founder.title}</p>
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
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, idx) => (
                <div key={`${t.company}-${idx}`} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                  <div className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-black leading-none text-white/[0.04]">&ldquo;</div>
                  <p className="relative text-sm leading-7 text-slate-300">&ldquo;{t.quote}&rdquo;</p>
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
        </Container>
      </Section>

      {/* ── 14. Final CTA ─────────────────────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,101,192,0.2),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(198,40,40,0.12),transparent_55%)]" />
        <Container>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-2.5">
              <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-400" />
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue-300">Get Started</p>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build a Digital System That Works for Your Business?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Whether you need a premium website, custom software, AI automation, IT support,
              SEO, or a complete digital growth system, Harzotech can help you build it with
              strategy, clarity, and excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact?intent=start-project" variant="cta">Start a Project →</ButtonLink>
              <ButtonLink href="/contact?intent=consultation" variant="outline-white">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
