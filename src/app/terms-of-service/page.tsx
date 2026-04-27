import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Harzotech Nig Ltd. This page can be updated with your final legal terms.",
};

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        description="This is a placeholder terms page. Replace with your final terms when ready."
      />
      <Section>
        <Container>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">Overview</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                These terms will cover how Harzotech Nig Ltd provides services,
                deliverables, timelines, and support. Replace this placeholder with
                the final document.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">Questions</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                For questions about terms, please contact us and we’ll provide clarity
                for your engagement.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
