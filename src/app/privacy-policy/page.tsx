import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Harzotech Nig Ltd. This page can be updated with your final legal terms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="This is a placeholder policy page. Replace with your final privacy policy text when ready."
      />
      <Section>
        <Container>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">Overview</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Harzotech Nig Ltd respects your privacy. This page will describe what
                information we collect, how we use it, and how you can contact us about
                your data.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">Updates</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This policy may be updated as our services evolve. If you need the
                finalized version, contact us.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
