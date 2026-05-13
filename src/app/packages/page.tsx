import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, Zap, Shield, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Website & Software Packages — Clear Pricing for Nigerian Businesses | Harzotech",
  description:
    "See exactly what you get and what it costs. Harzotech offers fixed-scope website and software packages for Nigerian businesses — starting from ₦300,000 with 14-day delivery.",
  alternates: { canonical: "https://harzotech.com/packages" },
};

const WA_NUMBER = "2347069716822";

function waLink(pkg: string) {
  const text = `Hi Harzotech 👋\n\nI'm interested in the *${pkg}* package.\n\nCan you tell me more?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const PACKAGES = [
  {
    id: "starter",
    label: "Starter",
    tagline: "For new businesses ready to go online professionally",
    price: "₦300,000",
    note: "Fixed price. No hidden fees.",
    delivery: "7–10 days",
    icon: Zap,
    highlight: false,
    color: "border-slate-200",
    btnColor: "bg-brand-blue-700 hover:bg-brand-blue-800 text-white",
    deliverables: [
      "Up to 5 custom-designed pages",
      "Mobile-first, responsive design",
      "Contact form + WhatsApp CTA button",
      "Basic on-page SEO (titles, meta, alt tags)",
      "Google Analytics setup",
      "1 round of revisions",
      "30-day post-launch support",
    ],
    notIncluded: ["Blog or CMS", "E-commerce or payments", "Custom backend"],
  },
  {
    id: "growth",
    label: "Growth",
    tagline: "For businesses that need a complete digital presence",
    price: "₦650,000",
    note: "Most popular for SMEs.",
    delivery: "14 days",
    icon: Star,
    highlight: true,
    color: "border-brand-blue-600",
    btnColor: "bg-brand-blue-700 hover:bg-brand-blue-800 text-white",
    deliverables: [
      "Up to 12 custom-designed pages",
      "Blog / CMS (easily add new content)",
      "Mobile-first, fast-loading (Core Web Vitals)",
      "Full SEO setup — pages, blog, sitemap, schema",
      "Google Analytics 4 + Search Console",
      "WhatsApp chat integration",
      "Google Business Profile setup",
      "2 rounds of revisions",
      "60-day post-launch support",
    ],
    notIncluded: ["E-commerce checkout", "Custom web app / backend"],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    tagline: "For businesses ready to sell online",
    price: "From ₦950,000",
    note: "Scope and pricing confirmed after brief.",
    delivery: "21 days",
    icon: Shield,
    highlight: false,
    color: "border-slate-200",
    btnColor: "bg-brand-blue-700 hover:bg-brand-blue-800 text-white",
    deliverables: [
      "Full e-commerce store (product catalogue, cart, checkout)",
      "Paystack / Flutterwave payment integration",
      "Order management and inventory tracking",
      "Mobile-optimised product pages",
      "SEO-ready category and product pages",
      "Customer accounts and order history",
      "Abandoned cart follow-up setup",
      "60-day post-launch support",
    ],
    notIncluded: [],
  },
];

const FAQS = [
  {
    q: "Do the prices include hosting and domain?",
    a: "No — domain and hosting are separate costs (typically ₦30,000–₦80,000/year depending on your provider). We'll guide you through setup and can manage it for you if preferred.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. We typically work on a 50% deposit before work begins and 50% on delivery. For larger projects we offer a 3-instalment plan.",
  },
  {
    q: "What if I need something that's not in any package?",
    a: "Use the contact form or WhatsApp us — we'll scope a custom solution and give you a clear quote within 48 hours.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your business name, logo (or we can design one), photos or product images, and your key service/product descriptions. We guide you through a simple onboarding checklist.",
  },
  {
    q: "Can you migrate my existing website to a new design?",
    a: "Yes. If you have an existing site, we can redesign it entirely while preserving your existing SEO rankings and content.",
  },
];

export default function PackagesPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-navy-900 to-slate-900 pt-20 pb-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-block rounded-full border border-brand-blue-500/30 bg-brand-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue-300">
              Transparent Pricing
            </p>
            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Know exactly what you're{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                getting — and paying
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              No vague quotes. No scope creep surprises. Each package has a fixed
              scope, a fixed price, and a delivery timeline — so you can plan with
              confidence.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ButtonLink href="#packages" variant="cta">
                See Packages
              </ButtonLink>
              <ButtonLink href="/free-audit" variant="outline-white">
                Get a Free Audit First
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>

      {/* Packages */}
      <Section id="packages">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Website Packages"
              title="Three options. One clear decision."
              description="All packages include a discovery call, custom design (no templates), mobile-first build, and post-launch support."
              align="center"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {PACKAGES.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative flex flex-col rounded-2xl border-2 bg-white p-7 shadow-sm transition hover:shadow-md ${pkg.color} ${
                      pkg.highlight ? "shadow-brand-blue-100 ring-1 ring-brand-blue-600/20" : ""
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-block rounded-full bg-brand-blue-700 px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50">
                        <Icon className="h-5 w-5 text-brand-blue-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-900">{pkg.label}</h3>
                        <p className="text-sm text-slate-500">{pkg.tagline}</p>
                      </div>
                    </div>

                    <div className="mb-1 text-3xl font-black text-slate-950">{pkg.price}</div>
                    <p className="mb-1 text-xs text-slate-500">{pkg.note}</p>
                    <p className="mb-6 text-xs font-semibold text-brand-blue-700">
                      Delivery: {pkg.delivery}
                    </p>

                    <ul className="mb-6 flex flex-col gap-2.5">
                      {pkg.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <div className="mb-6 rounded-lg bg-slate-50 p-3">
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Not included
                        </p>
                        <ul className="flex flex-col gap-1">
                          {pkg.notIncluded.map((n) => (
                            <li key={n} className="flex items-start gap-1.5 text-xs text-slate-400">
                              <span className="mt-0.5 inline-block h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto pt-2">
                      <a
                        href={waLink(pkg.label)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition ${pkg.btnColor}`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Get Started on WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-sm text-slate-500">
              Need something custom?{" "}
              <Link href="/contact?intent=start-project" className="font-semibold text-brand-blue-700 hover:underline">
                Start a project brief →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* Why fixed-scope */}
      <Section className="bg-slate-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Why fixed-scope?"
              title="You know the price before we start"
              description="Most agencies give vague quotes, change scope mid-project, and invoice unexpected extras. We don't."
              align="center"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { label: "Fixed price", desc: "What we quote is what you pay — scope locked in writing." },
                { label: "Clear timeline", desc: "Every package has a defined delivery window. No open-ended sprints." },
                { label: "Written brief", desc: "We document exactly what's included and what's not before starting." },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-left">
                  <p className="font-bold text-slate-900">{f.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked"
              align="center"
            />
            <div className="mt-10 flex flex-col divide-y divide-slate-100">
              {FAQS.map((f) => (
                <div key={f.q} className="py-5">
                  <p className="font-semibold text-slate-900">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Not sure which package is right for you?
            </h2>
            <p className="max-w-lg text-slate-300">
              Get a free website audit first — we'll tell you exactly what your
              business needs and which package (if any) makes sense.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="cta">
                Get Free Website Audit
              </ButtonLink>
              <ButtonLink href="/contact?intent=start-project" variant="outline-white">
                Start a Custom Brief
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
