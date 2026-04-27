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
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryClass(featured.category)}`}>
                  {featured.category}
                </span>
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
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryClass(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-NG", { day: "2-digit", month: "short", year: "numeric" })}
                    </span>
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
