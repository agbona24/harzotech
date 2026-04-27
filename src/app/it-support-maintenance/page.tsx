import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Support & Maintenance",
  description:
    "Managed IT support and maintenance by Harzotech Nig Ltd — troubleshooting, security monitoring, cloud backup, email setup, system maintenance, and ongoing technical management.",
};

export default function ITSupportMaintenancePage() {
  return (
    <div>
      <PageHeader
        title="Managed IT & Technical Support"
        description="Reliable IT support structures that keep your systems stable, secure, and productive — with ongoing maintenance and responsive troubleshooting."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        secondaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Support"
                title="Support systems built for reliability"
                description="Harzotech provides ongoing technical management so your business can operate with confidence and reduce downtime risks."
              />

              <div className="mt-6 grid gap-2">
                {[
                  "IT support",
                  "System maintenance",
                  "Software support",
                  "Email setup",
                  "Cloud backup",
                  "Troubleshooting",
                  "Security monitoring",
                  "Ongoing technical management",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-700" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-950">Ideal for</p>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    title: "SMEs and corporate teams",
                    desc: "Ongoing support without hiring a full internal technical team.",
                  },
                  {
                    title: "Multi-location businesses",
                    desc: "Standardized support processes and clear maintenance routines.",
                  },
                  {
                    title: "Operational software",
                    desc: "Support for portals, dashboards, and business systems in production.",
                  },
                  {
                    title: "Email and cloud hygiene",
                    desc: "Reliable setup, backups, and security practices that reduce risk.",
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
