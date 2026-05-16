import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactHeroIllustration } from "@/components/ContactHeroIllustration";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { PageSchema } from "@/components/PageSchema";
import { ContactPageSchema } from "@/components/ContactPageSchema";
import { CheckCircle2, Clock, Lock, Award, MapPin } from "lucide-react";
import { ProjectWizard } from "@/components/ProjectWizard";
import { AIProjectScoping } from "@/components/AIProjectScoping";

export const metadata: Metadata = {
  title: "Contact Harzotech | Start a Project or Book a Consultation in Nigeria",
  description:
    "Ready to build? Contact Harzotech Nig Ltd in Lagos, Nigeria — start a website, software, or AI project, or book a free strategy consultation. We respond within 24 hours.",
  alternates: { canonical: "https://harzotech.com/contact" },
};

function getIntentCopy(intent?: string) {
  if (intent === "consultation") {
    return {
      title: <>Book a <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Consultation</span></>,

      description:
        "Tell us what you’re trying to achieve. We’ll respond with a clear next step, recommended approach, and what it would take to execute well.",
    };
  }
  if (intent === "start-project") {
    return {
      title: <>Start a <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Project</span></>,

      description:
        "Share your goals and requirements. We’ll respond with a structured plan, scope direction, and execution path aligned with your business outcomes.",
    };
  }
  return {
    title: <>Contact <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">Harzotech</span></>,

    description:
      "Start a project or book a consultation. Harzotech helps businesses build premium websites, custom software, AI automation systems, reliable IT support structures, and SEO visibility frameworks.",
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ intent?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const intent = resolvedSearchParams?.intent;
  const { title, description } = getIntentCopy(intent);

  return (
    <div>
      <ContactPageSchema />
      <PageSchema
        service="Contact Harzotech"
        url="https://harzotech.com/contact"
        description="Start a website, software, or AI project with Harzotech Nig Ltd in Lagos, Nigeria, or book a free strategy consultation."
        breadcrumbs={[{ name: "Contact", url: "https://harzotech.com/contact" }]}
      />
      <PageHeader
        title={title}
        description={description}
        primaryCta={{ href: "mailto:info@harzotech.com", label: "Email Us" }}
        illustration={<ContactHeroIllustration />}
        bgImage="/hero.png"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Let’s discuss what you want to build"
                description="Share a short brief. We’ll reply quickly with next steps and the right service direction."
              />

              <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-950">Contact Information</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p>
                    Phone: <span className="font-semibold">{site.contact.phone}</span>
                  </p>
                  <p>
                    Email:{" "}
                    <a className="font-semibold hover:underline" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                  </p>
                  <p className="leading-6">
                    Office:<br />
                    {site.contact.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-brand-blue-100 bg-brand-blue-50/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Why work with us</p>
                <ul className="mt-4 space-y-3">
                  {([
                    { Icon: Clock,        text: "Reply within 24 hours" },
                    { Icon: CheckCircle2, text: "Free initial consultation" },
                    { Icon: Lock,         text: "No lock-in contracts" },
                    { Icon: Award,        text: "50+ projects delivered" },
                    { Icon: MapPin,       text: "Nigeria-based team, Lagos office" },
                  ] as const).map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-100">
                        <Icon className="h-3.5 w-3.5 text-brand-blue-700" />
                      </div>
                      <span className="text-sm text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ProjectWizard
                toEmail={site.contact.email}
                intent={intent}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── AI Project Brief Generator ─────────────────────── */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#0c1e3b] to-navy-900" id="ai-brief">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-blue-600/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-red-700/10 blur-3xl" />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue-300">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Project Brief Generator
            </span>
            <h2 className="mt-4 text-2xl font-black leading-snug text-white sm:text-3xl">
              Let AI structure your brief{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                before you send it.
              </span>
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Describe your business, your challenge, and what outcome you need. The AI turns it into a clear, structured project brief — with approach, phases, and next steps — that you can send to us directly.
            </p>
          </div>
          <div className="relative mt-10">
            <AIProjectScoping toEmail={site.contact.email} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
