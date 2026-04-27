import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsHeroIllustration } from "@/components/ProjectsHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Harzotech Nig Ltd across websites, software platforms, and business systems delivered with strategy and precision.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title={<>Selected Work Built With{" "}<span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Strategy</span>{" "}and{" "}<span className="text-brand-blue-300">Precision</span></>}
        description="From corporate websites to software platforms and business systems, Harzotech has delivered solutions across different industries."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        illustration={<ProjectsHeroIllustration />}
        bgImage="/about2.png"
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Portfolio"
              title="Projects"
              description="Project cards below use placeholder visuals until real screenshots and case studies are added."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <div key={p.slug} id={p.slug} className="scroll-mt-24">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
