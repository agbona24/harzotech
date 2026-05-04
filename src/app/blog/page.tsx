import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { BlogHeroIllustration } from "@/components/BlogHeroIllustration";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Technology, Business & Digital Growth Insights",
  description:
    "Insights on website development, custom software, AI automation, SEO, and IT support for Nigerian businesses — written by the Harzotech team.",
  alternates: { canonical: "https://harzotech.com.ng/blog" },
};

const CATEGORIES = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const categoryColor: Record<string, string> = {
  "Website Development": "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200",
  "AI & Automation":     "bg-purple-50 text-purple-700 border-purple-200",
  "SEO & Digital Marketing": "bg-green-50 text-green-700 border-green-200",
  "Software Development": "bg-orange-50 text-orange-700 border-orange-200",
  "IT Support":           "bg-red-50 text-red-700 border-red-200",
  "Industry Insights":    "bg-slate-100 text-slate-700 border-slate-200",
};

function getCategoryClass(cat: string) {
  return categoryColor[cat] ?? "bg-slate-100 text-slate-600 border-slate-200";
}

function BlogTopicIllustration({ category }: { category: string }) {
  if (category === "AI & Automation") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32 text-brand-blue-600" aria-hidden="true">
        <rect x="26" y="26" width="72" height="56" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="38" y="38" width="48" height="32" rx="8" fill="currentColor" opacity="0.18" />
        <circle cx="108" cy="48" r="14" fill="#ef4444" opacity="0.18">
          <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="62" cy="54" r="5" fill="currentColor">
          <animate attributeName="cy" values="54;50;54" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="54" r="5" fill="#ef4444">
          <animate attributeName="cy" values="54;58;54" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <path d="M108 48 L132 34" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M98 86 C112 82 122 76 132 62" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.4">
          <animate attributeName="d" dur="3.2s" repeatCount="indefinite"
            values="M98 86 C112 82 122 76 132 62;M98 84 C114 78 124 74 132 60;M98 86 C112 82 122 76 132 62" />
        </path>
      </svg>
    );
  }

  if (category === "Website Development") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32 text-brand-blue-700" aria-hidden="true">
        <rect x="18" y="24" width="92" height="68" rx="12" fill="currentColor" opacity="0.08" />
        <rect x="30" y="36" width="68" height="44" rx="8" fill="currentColor" opacity="0.16" />
        <path d="M52 58 l-10 -10 M52 58 l-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7">
          <animateTransform attributeName="transform" type="translate" values="0 0;-2 0;0 0" dur="2.4s" repeatCount="indefinite" />
        </path>
        <path d="M76 48 l-8 20" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" opacity="0.7">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </path>
        <path d="M86 48 l10 10 M86 68 l10 -10" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" opacity="0.7">
          <animateTransform attributeName="transform" type="translate" values="0 0;2 0;0 0" dur="2.4s" repeatCount="indefinite" />
        </path>
        <rect x="118" y="34" width="24" height="48" rx="8" fill="#ef4444" opacity="0.14">
          <animate attributeName="y" values="34;30;34" dur="2.8s" repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }

  if (category === "SEO & Digital Marketing") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32 text-emerald-600" aria-hidden="true">
        <circle cx="62" cy="54" r="22" fill="currentColor" opacity="0.1" />
        <circle cx="62" cy="54" r="14" fill="currentColor" opacity="0.18" />
        <path d="M76 68 L96 88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        <path d="M106 76 C112 66 124 58 138 54" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7">
          <animate attributeName="d" dur="2.8s" repeatCount="indefinite"
            values="M106 76 C112 66 124 58 138 54;M106 76 C116 62 126 54 138 50;M106 76 C112 66 124 58 138 54" />
        </path>
        <circle cx="138" cy="54" r="6" fill="#ef4444">
          <animate attributeName="r" values="5;7;5" dur="2.1s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }

  if (category === "Software Development") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32 text-orange-600" aria-hidden="true">
        <rect x="24" y="28" width="72" height="54" rx="12" fill="currentColor" opacity="0.1" />
        <rect x="38" y="42" width="18" height="10" rx="3" fill="currentColor" opacity="0.35" />
        <rect x="62" y="42" width="22" height="10" rx="3" fill="#ef4444" opacity="0.25" />
        <rect x="38" y="58" width="46" height="8" rx="3" fill="currentColor" opacity="0.18" />
        <path d="M106 78 a18 18 0 1 0 0.1 0" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" opacity="0.45">
          <animateTransform attributeName="transform" type="rotate" from="0 106 78" to="360 106 78" dur="6s" repeatCount="indefinite" />
        </path>
        <circle cx="106" cy="78" r="8" fill="#ef4444" opacity="0.22" />
      </svg>
    );
  }

  if (category === "IT Support") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32 text-red-600" aria-hidden="true">
        <rect x="28" y="28" width="60" height="42" rx="10" fill="currentColor" opacity="0.12" />
        <path d="M98 48 c0 -12 10 -22 22 -22 s22 10 22 22" stroke="currentColor" strokeWidth="7" fill="none" opacity="0.35" />
        <rect x="104" y="48" width="32" height="28" rx="8" fill="#ef4444" opacity="0.2" />
        <path d="M112 62 l6 6 l12 -14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className="h-24 w-32 text-slate-500" aria-hidden="true">
      <circle cx="52" cy="60" r="24" fill="currentColor" opacity="0.1" />
      <circle cx="88" cy="48" r="18" fill="#2563eb" opacity="0.14">
        <animate attributeName="cy" values="48;42;48" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="114" cy="72" r="12" fill="#ef4444" opacity="0.18">
        <animate attributeName="r" values="10;13;10" dur="2.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <div>
      <PageHeader
        title={
          <>
            Insights to Help Your{" "}
            <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
              Business Grow
            </span>
          </>
        }
        description="Practical guides on websites, software, AI automation, SEO, and IT support — written for Nigerian business owners and decision-makers."
        primaryCta={{ href: "/contact?intent=consultation", label: "Get Free Consultation" }}
        illustration={<BlogHeroIllustration />}
        bgImage="/hero.png"
      />

      <div className="bg-slate-50 py-14 sm:py-20">
        <Container>
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group mb-12 flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md lg:flex-row"
          >
            {/* Colour accent panel */}
            <div className="flex shrink-0 items-center justify-center bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 p-10 lg:w-72">
              <div className="text-center">
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue-200">
                  Latest
                </span>
                <span className="mt-2 block text-5xl font-black text-white">
                  {new Date(featured.publishedAt).toLocaleDateString("en-NG", { day: "2-digit" })}
                </span>
                <span className="block text-sm font-semibold text-brand-blue-200">
                  {new Date(featured.publishedAt).toLocaleDateString("en-NG", { month: "long", year: "numeric" })}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-8">
              <div>
                <div className="flex items-start justify-between gap-6">
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryClass(featured.category)}`}>
                    {featured.category}
                  </span>
                  <div className="hidden shrink-0 lg:block">
                    <BlogTopicIllustration category={featured.category} />
                  </div>
                </div>
                <h2 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-brand-blue-700 sm:text-2xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{featured.excerpt}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{featured.readingTime} min read</span>
                  <span>·</span>
                  <span>{featured.author.name}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 transition group-hover:gap-2.5">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Category pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                  cat === "All"
                    ? "border-brand-blue-600 bg-brand-blue-700 text-white"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-blue-700 to-brand-red-600" />

                <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryClass(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="mt-2 block text-[11px] text-slate-400">
                          {new Date(post.publishedAt).toLocaleDateString("en-NG", { day: "2-digit", month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <div className="shrink-0">
                        <BlogTopicIllustration category={post.category} />
                      </div>
                    </div>

                  <h2 className="mt-3 flex-1 text-base font-bold leading-snug text-slate-900 transition group-hover:text-brand-blue-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                        <Tag className="h-2.5 w-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue-700 transition group-hover:gap-2">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
