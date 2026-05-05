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

export const metadata: Metadata = {
  title: "Contact Harzotech | Start a Project or Book a Consultation in Nigeria",
  description:
    "Ready to build? Contact Harzotech Nig Ltd in Lagos, Nigeria — start a website, software, or AI project, or book a free strategy consultation. We respond within 24 hours.",
  alternates: { canonical: "https://harzotech.com.ng/contact" },
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
        url="https://harzotech.com.ng/contact"
        description="Start a website, software, or AI project with Harzotech Nig Ltd in Lagos, Nigeria, or book a free strategy consultation."
        breadcrumbs={[{ name: "Contact", url: "https://harzotech.com.ng/contact" }]}
      />
      <PageHeader
        title={title}
        description={description}
        primaryCta={{ href: "mailto:info@harzotech.com.ng", label: "Email Us" }}
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
    </div>
  );
}
