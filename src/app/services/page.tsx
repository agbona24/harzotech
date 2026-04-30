import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServicesHeroIllustration } from "@/components/ServicesHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { PageSchema } from "@/components/PageSchema";
import { Search, PenLine, Code2, Rocket, Target, Shield, Eye, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Services — Website, Software, AI & IT Solutions in Nigeria",
  description:
    "Harzotech offers end-to-end technology services in Nigeria: website design, custom software, AI automation, managed IT support, SEO, and branding — all built to grow your business.",
  keywords: [
    "technology services Nigeria",
    "AI automation services Nigeria",
    "website development services Lagos",
    "custom software services Nigeria",
    "IT support services Lagos",
    "SEO services Nigeria",
    "digital transformation services Nigeria",
    "business technology solutions Nigeria",
    "Harzotech services",
  ],
  openGraph: {
    title: "Technology Services — Website, Software, AI & IT Solutions in Nigeria",
    description:
      "Harzotech offers end-to-end technology services in Nigeria: website design, custom software, AI automation, managed IT support, SEO, and branding.",
    url: "https://harzotech.com.ng/services",
    siteName: "Harzotech Nig Ltd",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/services/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Technology Services by Harzotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Services — Website, Software, AI & IT Solutions in Nigeria",
    description:
      "Website, software, AI automation, IT support, and SEO services built for business growth in Nigeria.",
    images: ["/services/opengraph-image"],
  },
  alternates: { canonical: "https://harzotech.com.ng/services" },
};

const PROCESS_STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your goals, users, and constraints — then map a clear technical strategy before touching code.",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Design & Architecture",
    description:
      "We structure the solution, user flows, and data models to match your business logic — not the other way around.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Integrate",
    description:
      "Clean, tested development with regular reviews and full visibility at every stage of delivery.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Deploy, monitor, and iterate. We stay involved to ensure the system keeps performing after go-live.",
  },
];

const PRINCIPLES = [
  {
    icon: Target,
    title: "Strategy Before Code",
    description: "Every project starts with clear business goals — not assumptions or templates.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Clean architecture, maintainable code, and documentation you can fully own.",
  },
  {
    icon: Eye,
    title: "Visible Progress",
    description: "Regular check-ins, updates, and reviews throughout every delivery.",
  },
  {
    icon: TrendingUp,
    title: "Results-Oriented",
    description: "Success is measured by outcomes — leads generated, efficiency gained, revenue grown.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageSchema
        service="Technology Services"
        url="https://harzotech.com.ng/services"
        description="End-to-end technology services in Nigeria: website design, custom software, AI automation, managed IT support, SEO, and branding."
        breadcrumbs={[{ name: "Services", url: "https://harzotech.com.ng/services" }]}
      />
      <PageHeader
        title={<>Technology Services{" "}<span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Designed for</span>{" "}Business{" "}<span className="text-brand-blue-300">Growth</span></>}
        description="Harzotech helps businesses build reliable digital systems — websites, software, automation, IT support, and visibility frameworks — that improve operations and drive growth."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        secondaryCta={{ href: "/projects", label: "View Our Work" }}
        illustration={<ServicesHeroIllustration />}
        bgImage="/hero.png"
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Do"
              title="Capabilities that support real business outcomes"
              description="From premium web experiences to operational software and AI automation, our delivery is structured to reduce manual work, increase clarity, and strengthen customer trust."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we work with you"
              description="A structured delivery approach that keeps projects on track, on time, and aligned with your business goals."
              align="center"
            />
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative flex flex-col gap-4">
                    {/* connector line between steps on lg */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="absolute left-full top-9 hidden w-10 border-t border-dashed border-slate-300 lg:block" />
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-5xl font-black leading-none text-slate-100 select-none">
                        {step.number}
                      </span>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-700 shadow-md shadow-brand-blue-700/25">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-950">{step.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Principles + CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Our Approach"
              title="Built different — on purpose"
              description="Harzotech doesn't just execute tasks. We build systems that support real business growth."
              align="center"
              dark
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-blue-500/30 hover:bg-white/[0.08]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-700/30 ring-1 ring-brand-blue-500/20">
                      <Icon className="h-5 w-5 text-brand-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{p.title}</p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{p.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
              <ButtonLink href="/contact?intent=start-project" variant="cta">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline-white">
                See Our Work
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
