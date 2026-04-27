import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing",
  description:
    "SEO and digital marketing by Harzotech Nig Ltd — technical SEO, local SEO, Google visibility, content strategy, analytics setup, and lead generation systems.",
};

export default function SEODigitalMarketingPage() {
  return (
    <div>
      <PageHeader
        title="SEO & Digital Marketing for Visibility and Qualified Leads"
        description="Improve Google visibility, strengthen authority, and attract customers with structured SEO foundations and digital growth systems designed for long-term value."
        primaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        secondaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="What We Deliver"
                title="Visibility systems that support business growth"
                description="SEO is not a one-time tactic. Harzotech builds visibility foundations and measurement frameworks so your website can attract quality traffic consistently."
              />

              <div className="mt-6 grid gap-2">
                {[
                  "Technical SEO",
                  "Local SEO",
                  "Google visibility",
                  "Content strategy",
                  "Analytics setup",
                  "Lead generation funnels",
                  "Digital campaigns",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-700" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-950">Focus areas</p>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    title: "Technical foundation",
                    desc: "Performance, metadata, structure, indexing hygiene, and clean content hierarchy.",
                  },
                  {
                    title: "Local discovery",
                    desc: "Improve local intent visibility for Lagos and Nigeria-wide customers.",
                  },
                  {
                    title: "Measurement",
                    desc: "Analytics, conversion events, reporting, and visibility of what drives leads.",
                  },
                  {
                    title: "Content and authority",
                    desc: "Structured content that communicates expertise and supports long-term ranking.",
                  },
                ].map((i) => (
                  <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-950">{i.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{i.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <ButtonLink href="/contact?intent=consultation" variant="secondary">
                  Book a Consultation
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
