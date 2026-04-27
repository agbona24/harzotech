import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Premium website design & development by Harzotech Nig Ltd — conversion-focused, SEO-ready, responsive websites built for credibility and growth.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div>
      <PageHeader
        title="Websites Built With Strategy, Not Just Design"
        description="A website should build trust, explain your offer clearly, guide users to take action, and support your business goals. Harzotech builds websites with structure, SEO, performance, responsiveness, conversion, and brand credibility in mind."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        secondaryCta={{ href: "/projects", label: "View Our Work" }}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="What We Build"
                title="Premium web experiences designed to convert"
                description="Clear structure, strong hierarchy, and performance-first engineering — built for credibility and measurable outcomes."
              />
              <div className="mt-6 grid gap-2">
                {[
                  "Business websites",
                  "Corporate websites",
                  "Landing pages",
                  "E-commerce websites",
                  "Real estate websites",
                  "Healthcare websites",
                  "SaaS websites",
                  "Portfolio websites",
                  "SEO-ready websites",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-700" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <ButtonLink href="/contact?intent=consultation" variant="secondary">
                  Book a Consultation
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-950">What strategy means in practice</p>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    title: "Credibility and clarity",
                    desc: "Positioning and messaging that communicates value fast and builds trust.",
                  },
                  {
                    title: "Conversion structure",
                    desc: "Pages and CTAs designed to guide users toward your desired action.",
                  },
                  {
                    title: "SEO foundations",
                    desc: "Technical SEO, clean headings, and metadata for long-term visibility.",
                  },
                  {
                    title: "Performance and responsiveness",
                    desc: "Fast, mobile-first builds that feel premium across devices.",
                  },
                ].map((i) => (
                  <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-950">{i.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{i.desc}</p>
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
