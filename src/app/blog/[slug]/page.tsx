import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar, User } from "lucide-react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
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
      {/* Article header */}
      <div className="border-b border-slate-100 bg-slate-50 py-12 sm:py-16">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-700 hover:text-brand-blue-600 mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="max-w-3xl">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryClass(post.category)}`}>
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
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
