import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar, User } from "lucide-react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { SpeakableSchema } from "@/components/SpeakableSchema";
import { blogPosts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `https://harzotech.com.ng/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: `https://harzotech.com.ng/blog/${slug}`,
      siteName: "Harzotech Nig Ltd",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@harzotech",
    },
  };
}

const categoryColor: Record<string, string> = {
  "Website Development": "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200",
  "AI & Automation":     "bg-purple-50 text-purple-700 border-purple-200",
  "SEO & Digital Marketing": "bg-green-50 text-green-700 border-green-200",
  "Software Development": "bg-orange-50 text-orange-700 border-orange-200",
  "IT Support":           "bg-red-50 text-red-700 border-red-200",
  "Industry Insights":    "bg-slate-100 text-slate-700 border-slate-200",
};

function BlogTopicIllustration({ category }: { category: string }) {
  if (category === "AI & Automation") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-28 text-brand-blue-300" aria-hidden="true">
        <rect x="26" y="26" width="72" height="56" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="38" y="38" width="48" height="32" rx="8" fill="currentColor" opacity="0.18" />
        <circle cx="108" cy="48" r="14" fill="#f87171" opacity="0.24">
          <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="62" cy="54" r="5" fill="currentColor">
          <animate attributeName="cy" values="54;50;54" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="54" r="5" fill="#f87171">
          <animate attributeName="cy" values="54;58;54" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <path d="M108 48 L132 34" stroke="#f87171" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2.2s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }

  if (category === "Website Development") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-28 text-brand-blue-300" aria-hidden="true">
        <rect x="18" y="24" width="92" height="68" rx="12" fill="currentColor" opacity="0.08" />
        <rect x="30" y="36" width="68" height="44" rx="8" fill="currentColor" opacity="0.16" />
        <path d="M52 58 l-10 -10 M52 58 l-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <path d="M76 48 l-8 20" stroke="#f87171" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <path d="M86 48 l10 10 M86 68 l10 -10" stroke="#f87171" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      </svg>
    );
  }

  if (category === "SEO & Digital Marketing") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-28 text-emerald-300" aria-hidden="true">
        <circle cx="62" cy="54" r="22" fill="currentColor" opacity="0.12" />
        <circle cx="62" cy="54" r="14" fill="currentColor" opacity="0.2" />
        <path d="M76 68 L96 88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        <path d="M106 76 C112 66 124 58 138 54" stroke="#f87171" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8">
          <animate attributeName="d" dur="2.8s" repeatCount="indefinite"
            values="M106 76 C112 66 124 58 138 54;M106 76 C116 62 126 54 138 50;M106 76 C112 66 124 58 138 54" />
        </path>
      </svg>
    );
  }

  if (category === "Software Development") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-28 text-orange-300" aria-hidden="true">
        <rect x="24" y="28" width="72" height="54" rx="12" fill="currentColor" opacity="0.1" />
        <rect x="38" y="42" width="18" height="10" rx="3" fill="currentColor" opacity="0.35" />
        <rect x="62" y="42" width="22" height="10" rx="3" fill="#f87171" opacity="0.28" />
        <rect x="38" y="58" width="46" height="8" rx="3" fill="currentColor" opacity="0.18" />
        <path d="M106 78 a18 18 0 1 0 0.1 0" fill="none" stroke="#f87171" strokeWidth="8" strokeLinecap="round" opacity="0.45">
          <animateTransform attributeName="transform" type="rotate" from="0 106 78" to="360 106 78" dur="6s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }

  if (category === "IT Support") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-28 text-red-300" aria-hidden="true">
        <rect x="28" y="28" width="60" height="42" rx="10" fill="currentColor" opacity="0.12" />
        <path d="M98 48 c0 -12 10 -22 22 -22 s22 10 22 22" stroke="currentColor" strokeWidth="7" fill="none" opacity="0.35" />
        <rect x="104" y="48" width="32" height="28" rx="8" fill="#f87171" opacity="0.2" />
        <path d="M112 62 l6 6 l12 -14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className="h-20 w-28 text-slate-300" aria-hidden="true">
      <circle cx="52" cy="60" r="24" fill="currentColor" opacity="0.12" />
      <circle cx="88" cy="48" r="18" fill="#60a5fa" opacity="0.2">
        <animate attributeName="cy" values="48;42;48" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="114" cy="72" r="12" fill="#f87171" opacity="0.22">
        <animate attributeName="r" values="10;13;10" dur="2.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
function getCategoryClass(cat: string) {
  return categoryColor[cat] ?? "bg-slate-100 text-slate-600 border-slate-200";
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const idx = sorted.findIndex((p) => p.slug === slug);
  const prev = sorted[idx + 1] ?? null;
  const next = sorted[idx - 1] ?? null;

  const related = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.title,
      worksFor: {
        "@type": "Organization",
        name: "Harzotech Nig Ltd",
        url: "https://harzotech.com.ng",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Harzotech Nig Ltd",
      url: "https://harzotech.com.ng",
      logo: {
        "@type": "ImageObject",
        url: "https://harzotech.com.ng/logo.gif",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://harzotech.com.ng/blog/${slug}`,
    },
    url: `https://harzotech.com.ng/blog/${slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-NG",
    isPartOf: {
      "@type": "Blog",
      "@id": "https://harzotech.com.ng/blog",
      name: "Harzotech Blog — Technology, Business & Digital Growth",
      publisher: { "@id": "https://harzotech.com.ng/#organization" },
    },
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <SpeakableSchema
        text={post.excerpt}
        url={`https://harzotech.com.ng/blog/${slug}`}
        cssSelector="h1, p[data-speakable]"
      />
      {/* Article header */}
      <div className="relative overflow-hidden bg-[#0c1e3b] py-14 sm:py-20">
        {/* Gradient glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_-10%_-10%,rgba(21,101,192,0.45),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_110%_110%,rgba(198,40,40,0.3),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(21,101,192,0.5)_35%,rgba(198,40,40,0.4)_65%,transparent_100%)]" />

        <Container>
          <div className="mb-8 flex items-center justify-between gap-6">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-300 hover:text-white relative transition">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="hidden sm:block">
              <BlogTopicIllustration category={post.category} />
            </div>
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-brand-blue-700/30 bg-brand-blue-700/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-blue-300">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-300">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author.name} · {post.author.title}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Article body */}
      <Container>
        <div className="py-12 lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 lg:py-16">
          {/* Main content */}
          <article
            className="prose prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-7 prose-h3:mb-3
              prose-p:leading-8 prose-p:text-slate-700
              prose-a:text-brand-blue-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-ul:text-slate-700 prose-li:leading-7
              prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Sidebar */}
          <aside className="mt-12 space-y-6 lg:mt-0">
            {/* Tags */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-brand-blue-100 bg-brand-blue-50 p-5">
              <p className="text-sm font-bold text-brand-blue-900">Need help with this?</p>
              <p className="mt-1.5 text-xs leading-6 text-brand-blue-700">
                Our team has delivered this for businesses across Nigeria. Book a free consultation to discuss your specific situation.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <ButtonLink href="/contact?intent=consultation" variant="cta" className="w-full justify-center text-xs">
                  Book Free Consultation
                </ButtonLink>
                <ButtonLink href="/contact?intent=start-project" variant="secondary" className="w-full justify-center text-xs">
                  Start a Project
                </ButtonLink>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Related Articles</p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex flex-col gap-1">
                      <span className={`inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${getCategoryClass(r.category)}`}>
                        {r.category}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-slate-800 group-hover:text-brand-blue-700 transition line-clamp-2">
                        {r.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Prev / next */}
        <div className="grid gap-4 border-t border-slate-100 py-10 sm:grid-cols-2">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-1 rounded-xl border border-slate-200 p-5 transition hover:border-brand-blue-200 hover:bg-brand-blue-50">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </span>
              <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-blue-700 transition line-clamp-2">{prev.title}</span>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/blog/${next.slug}`} className="group flex flex-col items-end gap-1 rounded-xl border border-slate-200 p-5 text-right transition hover:border-brand-blue-200 hover:bg-brand-blue-50 sm:ml-auto sm:w-full">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-blue-700 transition line-clamp-2">{next.title}</span>
            </Link>
          )}
        </div>
      </Container>

      {/* Bottom CTA */}
      <div className="bg-navy-950 py-16">
        <Container>
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to put this into practice?
            </h2>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              Harzotech delivers websites, software, AI automation, SEO, and IT solutions for Nigerian businesses. Let us apply this to your specific situation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta">Start a Project</ButtonLink>
              <ButtonLink href="/contact?intent=consultation" variant="outline-white">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
