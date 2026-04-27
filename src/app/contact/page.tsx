import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project or book a consultation with Harzotech Nig Ltd — premium websites, software development, AI automation, IT support, and SEO growth systems.",
};

function getIntentCopy(intent?: string) {
  if (intent === "consultation") {
    return {
      title: "Book a Consultation",
      description:
        "Tell us what you’re trying to achieve. We’ll respond with a clear next step, recommended approach, and what it would take to execute well.",
    };
  }
  if (intent === "start-project") {
    return {
      title: "Start a Project",
      description:
        "Share your goals and requirements. We’ll respond with a structured plan, scope direction, and execution path aligned with your business outcomes.",
    };
  }
  return {
    title: "Contact Harzotech",
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
      <PageHeader
        title={title}
        description={description}
        primaryCta={{ href: "mailto:info@harzotech.com.ng", label: "Email Us" }}
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
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">Project brief</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share a short brief and we’ll respond with clear next steps.
              </p>

              <ContactForm
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
