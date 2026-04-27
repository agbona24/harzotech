import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AIAutomationHeroIllustration } from "@/components/AIAutomationHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "AI automation and workflow systems by Harzotech Nig Ltd — voice agents, WhatsApp automation, booking workflows, CRM automation, and business process automation.",
};

export default function AIAutomationPage() {
  return (
    <div>
      <PageHeader
        title={<>AI and{" "}<span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Automation</span>{" "}for Smarter{" "}<span className="text-brand-blue-300">Business Operations</span></>}
        description="Reduce manual work, improve customer communication, manage leads, confirm appointments, automate responses, and streamline daily operations using AI and workflow automation."
        primaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        secondaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        illustration={<AIAutomationHeroIllustration />}
        bgImage="/hero.png"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Capabilities"
                title="Automation that supports growth and operations"
                description="Harzotech designs automation systems around your workflow — so customer communication and internal processes stay consistent, measurable, and scalable."
              />

              <div className="mt-6 grid gap-2">
                {[
                  "AI voice agents",
                  "WhatsApp automation",
                  "Appointment booking automation",
                  "CRM and lead capture workflows",
                  "Payment and invoice automation",
                  "Customer support automation",
                  "Google Sheets, Airtable, Zapier, n8n, Twilio, and OpenAI integrations",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-700" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <ButtonLink href="/contact?intent=start-project">Start a Project</ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-950">Example outcomes</p>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    title: "Faster response times",
                    desc: "Automate first response, qualification, and routing to the right team.",
                  },
                  {
                    title: "Reduced manual work",
                    desc: "Move repetitive tasks into workflows to reduce errors and delays.",
                  },
                  {
                    title: "Better lead handling",
                    desc: "Capture, tag, follow up, and track leads consistently across channels.",
                  },
                  {
                    title: "Operational visibility",
                    desc: "Track key events, handoffs, and outcomes across the customer journey.",
                  },
                ].map((x) => (
                  <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-950">{x.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{x.desc}</p>
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
