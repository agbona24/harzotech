import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServicesHeroIllustration } from "@/components/ServicesHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Harzotech services: premium websites, custom software, AI automation, managed IT support, SEO & digital marketing, business applications, and corporate branding.",
};

export default function ServicesPage() {
  return (
    <div>
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
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="What We Do"
              title="Capabilities that support real business outcomes"
              description="From premium web experiences to operational software and AI automation, our delivery is structured to reduce manual work, increase clarity, and strengthen customer trust."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Focus"
            title="More than delivery — systems built for growth"
            description="Harzotech approaches projects with strategy-first thinking: clear positioning, conversion structure, operational workflows, performance, SEO foundations, and long-term maintainability."
          />
        </Container>
      </Section>
    </div>
  );
}
