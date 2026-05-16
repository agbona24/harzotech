import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsHeroIllustration } from "@/components/ProjectsHeroIllustration";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { AIProjectMatcher } from "@/components/AIProjectMatcher";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Our Work | Website, Software & AI Projects by Harzotech in Nigeria",
  description:
    "Browse Harzotech's portfolio of delivered websites, custom software, and AI automation projects across healthcare, real estate, retail, fintech, and more in Nigeria.",
  alternates: { canonical: "https://harzotech.com/projects" },
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title={<>Selected Work Built With{" "}<span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Strategy</span>{" "}and{" "}<span className="text-brand-blue-300">Precision</span></>}
        description="From healthcare to real estate, FinTech to education — Harzotech has delivered across industries. Filter by sector or tech stack to find work closest to what you need."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        illustration={<ProjectsHeroIllustration />}
        bgImage="/about2.png"
      />

      {/* AI Portfolio Matcher */}
      <Section className="bg-slate-950 py-10">
        <Container>
          <div className="mx-auto max-w-4xl">
            <AIProjectMatcher />
          </div>
        </Container>
      </Section>

      <ProjectsGrid />
    </div>
  );
}

