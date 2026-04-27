import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AboutHeroIllustration } from "@/components/AboutHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Harzotech Nig Ltd — a premium technology solutions partner helping businesses grow, automate, and scale through websites, software, AI automation, IT support, and SEO.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Harzotech"
        title="Built on Experience, Strategy, and Innovation"
        description="Harzotech Nig Ltd is a privately owned technology solutions company helping businesses simplify operations, strengthen their digital presence, and scale through reliable digital systems."
        primaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        secondaryCta={{ href: "/projects", label: "View Our Work" }}
        illustration={<AboutHeroIllustration />}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A strategic technology partner for business growth"
                description="Harzotech combines technology, design, automation, SEO, software development, and business strategy to create digital solutions that solve real business problems."
              />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                We do not just build websites; we build systems that help businesses
                work smarter, look credible, attract customers, and grow with
                confidence.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Premium websites built for trust and conversion",
                  "Custom software that supports real operations",
                  "AI automation that reduces manual work",
                  "IT support that keeps systems reliable",
                  "SEO visibility and analytics foundations",
                  "Solutions designed for long-term value",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-950">Main brand message</p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                {site.tagline}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Harzotech helps businesses build reliable websites, software systems,
                AI automations, IT solutions, and digital growth systems that improve
                operations, increase visibility, attract customers, and support
                long-term business growth.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div
                className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white"
                aria-label="Founder image placeholder"
                role="img"
              />
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-950">{site.founder.name}</p>
                <p className="mt-1 text-sm text-slate-600">{site.founder.title}</p>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Leadership"
                title="Led by experience and execution discipline"
                description={`Harzotech is led by ${site.founder.name}, an IT specialist, developer, AI enthusiast, and digital strategist with over 10 years of experience helping businesses improve visibility, operations, customer experience, and growth.`}
              />
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-950">Founder quote</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">“{site.founder.quote}”</p>
              </div>

              <div className="mt-7">
                <ButtonLink href="/contact?intent=start-project">Start a Project</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
