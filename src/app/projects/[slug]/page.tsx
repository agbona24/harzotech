import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Building2,
  Globe,
  Lightbulb,
  Target,
  Sparkles,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} — ${project.industry} Project by Harzotech`;
  const description = project.description;

  return {
    title,
    description,
    keywords: [
      project.name,
      project.industry,
      ...(project.tags ?? []),
      "Harzotech",
      "Nigeria",
      "web development Nigeria",
      "software development Nigeria",
    ],
    alternates: { canonical: `https://harzotech.com/projects/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://harzotech.com/projects/${slug}`,
      siteName: "Harzotech Nig Ltd",
      ...(project.image
        ? {
            images: [
              {
                url: `https://harzotech.com${project.image}`,
                width: 1200,
                height: 630,
                alt: project.name,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@harzotech",
    },
  };
}

const projectSchema = (p: (typeof projects)[0]) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: p.name,
  description: p.description,
  creator: {
    "@type": "Organization",
    name: "Harzotech Nig Ltd",
    url: "https://harzotech.com",
  },
  genre: p.industry,
  keywords: p.tags?.join(", "),
  ...(p.url ? { url: p.url } : {}),
  ...(p.image ? { image: `https://harzotech.com${p.image}` } : {}),
});

const serviceLabels: Record<string, string> = {
  "web-development": "Web Development",
  "ai-automation": "AI Automation",
  "it-consulting": "IT Consulting",
  "seo": "SEO & Growth",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.industry === project.industry ||
          (p.tags ?? []).some((t) => (project.tags ?? []).includes(t)))
    )
    .filter((p) => p.image)
    .slice(0, 3);

  const allProjects = [...projects];
  const idx = allProjects.findIndex((p) => p.slug === slug);
  const prev = allProjects[idx - 1] ?? null;
  const next = allProjects[idx + 1] ?? null;

  const hasDeepNarrative =
    project.challenge || project.approach || (project.intentFeatures?.length ?? 0) > 0;

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(project)) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0c1e3b]">
        {project.image && (
          <Image
            src={project.image}
            alt=""
            fill
            aria-hidden
            className="object-cover object-top opacity-[0.06]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_-10%_-10%,rgba(21,101,192,0.45),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_110%_110%,rgba(198,40,40,0.3),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(21,101,192,0.5)_35%,rgba(198,40,40,0.4)_65%,transparent_100%)]" />

        <Container>
          <div className="relative pt-14 pb-36 sm:pt-20 sm:pb-44 lg:pb-52">
            {/* Back nav */}
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-300 hover:text-white transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Projects
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
              {/* Text */}
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-brand-blue-700/30 bg-brand-blue-700/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-blue-300">
                  {project.industry}
                </span>
                <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Live site button — prominent, pulsing */}
              {project.url && (
                <div className="relative flex-shrink-0 lg:pt-12">
                  <span className="pointer-events-none absolute -inset-3 animate-ping rounded-full bg-brand-red-600/20" />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 rounded-2xl border border-brand-red-500/50 bg-gradient-to-br from-brand-red-600 to-brand-red-800 px-7 py-4 text-base font-bold text-white shadow-2xl shadow-brand-red-900/50 transition-all duration-300 hover:scale-105 hover:shadow-brand-red-600/40"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Globe className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-red-200/80">
                        See it live
                      </span>
                      <span>Visit Live Website</span>
                    </span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Screenshot — floats out of hero ───────────────────────── */}
      {project.image && (
        <div className="relative z-10 -mt-24 sm:-mt-32 lg:-mt-40">
          <Container>
            <div className="group overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/30 ring-1 ring-white/10">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 bg-[#1a2744] px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                {project.url && (
                  <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-md bg-slate-700/60 px-3 py-1 text-xs text-slate-400">
                    <Globe className="h-3 w-3 shrink-0 opacity-60" />
                    <span className="truncate font-mono">{project.url.replace(/^https?:\/\//, "")}</span>
                  </div>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0 rounded-md bg-brand-red-600/80 px-3 py-1 text-[10px] font-bold text-white transition hover:bg-brand-red-600"
                  >
                    Open ↗
                  </a>
                )}
              </div>
              {/* Screenshot */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`${project.name} — project screenshot`}
                  width={1440}
                  height={900}
                  className="w-full object-cover object-top"
                  priority
                />
                {project.url && (
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-slate-900/50 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-brand-red-50 hover:text-brand-red-700"
                    >
                      <Globe className="h-4 w-4" />
                      Visit Live Website
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* ── Main content ──────────────────────────────────────────── */}
      <Container>
        <div className="py-14 lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 lg:py-20">
          {/* ── Left: narrative content ───────────────────────────── */}
          <div className="space-y-16">

            {/* The Challenge */}
            {project.challenge && (
              <section>
                <div className="rounded-2xl border border-slate-200 bg-[#0c1e3b] p-7 sm:p-9">
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red-600/20">
                      <Target className="h-4 w-4 text-brand-red-400" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-red-400">
                      The Challenge
                    </span>
                  </div>
                  <p className="text-base leading-8 text-slate-300 sm:text-lg">
                    {project.challenge}
                  </p>
                </div>
              </section>
            )}

            {/* Our Approach */}
            {project.approach && (
              <section>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-100">
                    <Lightbulb className="h-4 w-4 text-brand-blue-700" />
                  </span>
                  <h2 className="text-xl font-black text-slate-900">Our Approach</h2>
                </div>
                <p className="text-base leading-8 text-slate-700">{project.approach}</p>
              </section>
            )}

            {/* Built With Intention */}
            {project.intentFeatures && project.intentFeatures.length > 0 && (
              <section>
                <div className="mb-6 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                  </span>
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Built With Intention</h2>
                    <p className="mt-0.5 text-sm text-slate-500">
                      Every feature here was designed to solve a real problem — not to fill a requirements list.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {project.intentFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-blue-200 hover:shadow-md"
                    >
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-600 text-xs font-black text-white">
                        {i + 1}
                      </div>
                      <h3 className="mb-2 text-sm font-black leading-snug text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">{feature.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* The Outcome */}
            {project.outcome && (
              <section>
                <div className="flex gap-5 rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Zap className="h-5 w-5 text-green-700" />
                  </span>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">
                      The Result
                    </p>
                    <p className="text-base leading-8 text-green-900">{project.outcome}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Key Features (fallback for projects without deep narrative) */}
            {!hasDeepNarrative && project.highlights && project.highlights.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-brand-blue-600" />
                  <h2 className="text-xl font-black text-slate-900">What We Built</h2>
                </div>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue-100 border border-brand-blue-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-600" />
                      </span>
                      <span className="text-sm leading-7 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech stack */}
            {project.tags && project.tags.length > 0 && (
              <section>
                <div className="mb-4 flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-slate-500" />
                  <h2 className="text-lg font-bold text-slate-900">Technologies Used</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* ── Explore More on Harzotech (internal backlinks) ─── */}
            <section className="rounded-3xl border border-brand-blue-100 bg-gradient-to-br from-brand-blue-50 to-slate-50 p-7 sm:p-9">
              <h2 className="mb-1 text-lg font-black text-slate-900">
                Want us to build something like this?
              </h2>
              <p className="mb-6 text-sm leading-6 text-slate-600">
                This project is one of{" "}
                <Link href="/projects" className="font-semibold text-brand-blue-700 hover:underline">
                  38+ client deliverables
                </Link>{" "}
                in our portfolio. We work across web, software, AI automation, and growth. Here are
                the fastest ways to take the next step.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    href: `/contact?intent=start-project&ref=${project.slug}`,
                    label: "Start a Similar Project",
                    desc: "Describe your brief — we respond within 24 hours.",
                    accent: "bg-brand-blue-600 text-white hover:bg-brand-blue-700",
                  },
                  {
                    href: "/contact?intent=consultation",
                    label: "Book a Free Consultation",
                    desc: "30-minute call — no commitment, just clarity.",
                    accent: "bg-white border border-slate-200 text-slate-900 hover:border-brand-blue-300",
                  },
                  {
                    href: "/services",
                    label: "Browse Our Services",
                    desc: "Web development, AI, SEO, IT consulting and more.",
                    accent: "bg-white border border-slate-200 text-slate-900 hover:border-brand-blue-300",
                  },
                  {
                    href: "/packages",
                    label: "See Packages & Pricing",
                    desc: "Transparent packages for every budget and scope.",
                    accent: "bg-white border border-slate-200 text-slate-900 hover:border-brand-blue-300",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex flex-col gap-1 rounded-xl px-4 py-3.5 text-sm font-semibold transition ${item.accent}`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-[12px] font-normal leading-snug opacity-70">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>

              <p className="mt-5 text-xs text-slate-400">
                You can also{" "}
                <Link href="/free-audit" className="font-semibold text-brand-blue-600 hover:underline">
                  request a free digital audit
                </Link>{" "}
                of your existing website or system — we will tell you exactly what is working and
                what is costing you leads.
              </p>
            </section>

            {/* Prev / next nav */}
            <div className="grid gap-4 border-t border-slate-100 pt-10 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-slate-200 p-5 transition hover:border-brand-blue-200 hover:bg-brand-blue-50"
                >
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <ArrowLeft className="h-3.5 w-3.5" /> Previous Project
                  </span>
                  <span className="text-sm font-bold text-slate-800 group-hover:text-brand-blue-700 transition line-clamp-2">
                    {prev.name}
                  </span>
                  <span className="text-[11px] text-slate-400">{prev.industry}</span>
                </Link>
              ) : (
                <div />
              )}
              {next && (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group flex flex-col items-end gap-1 rounded-xl border border-slate-200 p-5 text-right transition hover:border-brand-blue-200 hover:bg-brand-blue-50 sm:ml-auto sm:w-full"
                >
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    Next Project <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-slate-800 group-hover:text-brand-blue-700 transition line-clamp-2">
                    {next.name}
                  </span>
                  <span className="text-[11px] text-slate-400">{next.industry}</span>
                </Link>
              )}
            </div>
          </div>

          {/* ── Right sidebar ─────────────────────────────────────── */}
          <aside className="mt-14 space-y-6 lg:mt-0">

            {/* Sticky Live Site CTA (sidebar) */}
            {project.url && (
              <div className="overflow-hidden rounded-2xl border border-brand-red-200 bg-gradient-to-br from-brand-red-50 to-white p-5">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-red-600">
                  Live & In Production
                </p>
                <p className="mb-4 text-sm leading-6 text-slate-700">
                  This website is live right now. Click to see the finished product in action.
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-red-600 to-brand-red-700 px-4 py-3 text-sm font-bold text-white shadow-md shadow-brand-red-200 transition hover:scale-[1.02] hover:shadow-lg"
                >
                  <Globe className="h-4 w-4" />
                  Visit Live Website
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}

            {/* Quick facts */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Project Details
              </p>
              <dl className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Industry</dt>
                    <dd className="text-sm font-semibold text-slate-800">{project.industry}</dd>
                  </div>
                </div>
                {project.relatedService && (
                  <div className="flex items-start gap-3">
                    <Layers className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Service Type</dt>
                      <dd>
                        <Link
                          href={`/services#${project.relatedService}`}
                          className="text-sm font-semibold text-brand-blue-700 hover:text-brand-blue-900 transition"
                        >
                          {serviceLabels[project.relatedService] ?? project.relatedService}
                        </Link>
                      </dd>
                    </div>
                  </div>
                )}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex items-start gap-3">
                    <Layers className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Stack</dt>
                      <dd className="mt-1 flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </div>
                )}
                {project.url && (
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Live URL</dt>
                      <dd>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-700 hover:text-brand-blue-900 transition break-all"
                        >
                          {project.url.replace(/^https?:\/\//, "")}
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>

            {/* Start a project CTA */}
            <div className="rounded-2xl border border-brand-blue-100 bg-brand-blue-50 p-5">
              <p className="text-sm font-black text-brand-blue-900">Want something like this?</p>
              <p className="mt-1.5 text-xs leading-6 text-brand-blue-700">
                We can build a tailored solution for your industry. Most projects start with a free
                consultation call — no obligation.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <ButtonLink
                  href={`/contact?intent=start-project&ref=${project.slug}`}
                  variant="cta"
                  className="w-full justify-center text-xs"
                >
                  Start a Similar Project
                </ButtonLink>
                <ButtonLink
                  href="/contact?intent=consultation"
                  variant="secondary"
                  className="w-full justify-center text-xs"
                >
                  Book a Free Consultation
                </ButtonLink>
              </div>
            </div>

            {/* Quick navigation links */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Explore Harzotech
              </p>
              <nav className="space-y-1">
                {[
                  { href: "/projects", label: "All Projects" },
                  { href: "/services", label: "Our Services" },
                  { href: "/packages", label: "Packages & Pricing" },
                  { href: "/products", label: "Our SaaS Products" },
                  { href: "/free-audit", label: "Free Digital Audit" },
                  { href: "/blog", label: "Blog & Resources" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-blue-50 hover:text-brand-blue-700"
                  >
                    {link.label}
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-blue-400" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Related projects */}
            {related.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Similar Projects
                </p>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/projects/${r.slug}`}
                      className="group flex items-center gap-3"
                    >
                      {r.image && (
                        <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-100">
                          <Image
                            src={r.image}
                            alt={r.name}
                            fill
                            className="object-cover object-top"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="inline-flex w-fit items-center rounded-full border border-brand-blue-200 bg-brand-blue-50 px-2 py-0.5 text-[10px] font-semibold text-brand-blue-700">
                          {r.industry}
                        </span>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-slate-800 group-hover:text-brand-blue-700 transition line-clamp-2">
                          {r.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-blue-700 hover:text-brand-blue-900 transition"
                >
                  View all 38+ projects <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </Container>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0c1e3b] py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgba(21,101,192,0.4),transparent_70%)]" />
        <Container>
          <div className="relative flex flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center rounded-full border border-brand-blue-700/30 bg-brand-blue-700/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-blue-300">
              Ready to Build?
            </span>
            <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              Your project deserves this level of craft.
            </h2>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              Harzotech delivers websites, software, AI automation, and IT solutions built with
              genuine intention. We understand your market — and we build for conversion, not just
              aesthetics.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/free-audit" variant="outline-white">
                Get a Free Audit
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline-white">
                View All Projects
              </ButtonLink>
            </div>
            <p className="text-xs text-slate-500">
              Or explore{" "}
              <Link href="/services" className="font-semibold text-brand-blue-400 hover:text-brand-blue-300 transition">
                our services
              </Link>
              ,{" "}
              <Link href="/packages" className="font-semibold text-brand-blue-400 hover:text-brand-blue-300 transition">
                view packages
              </Link>
              , or{" "}
              <Link href="/products" className="font-semibold text-brand-blue-400 hover:text-brand-blue-300 transition">
                see our own SaaS products
              </Link>
              .
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
