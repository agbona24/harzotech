import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom software development by Harzotech Nig Ltd — portals, dashboards, CRM systems, booking systems, SaaS platforms, inventory and POS systems built for real operations.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      <PageHeader
        title="Custom Software That Solves Real Business Problems"
        description="Harzotech develops software systems that help businesses manage operations, customers, sales, inventory, bookings, payments, staff, and reporting from one reliable platform."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start a Project" }}
        secondaryCta={{ href: "/projects", label: "View Our Work" }}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="What We Build"
                title="Operational software designed for clarity and control"
                description="Systems that help teams execute faster, reduce errors, and gain visibility across daily operations."
              />
              <div className="mt-6 grid gap-2">
                {[
                  "POS systems",
                  "Inventory systems",
                  "Restaurant management systems",
                  "Hotel systems",
                  "School management systems",
                  "Hospital and pharmacy systems",
                  "Booking systems",
                  "CRM dashboards",
                  "SaaS platforms",
                  "Admin portals",
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
              <p className="text-sm font-semibold text-slate-950">Typical system components</p>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    title: "Dashboards and reporting",
                    desc: "Track sales, performance, inventory, and operations from one place.",
                  },
                  {
                    title: "Workflows and approvals",
                    desc: "Define how work moves through your team — with clear roles and handoffs.",
                  },
                  {
                    title: "Payments and billing",
                    desc: "Invoice flows, receipts, and integrations designed for reliability.",
                  },
                  {
                    title: "User roles and security",
                    desc: "Access controls and auditability aligned with your business needs.",
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
