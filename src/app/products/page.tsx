import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { saasProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Products — SaaS Platforms Built by Harzotech",
  description:
    "Harzotech builds and operates its own SaaS products: Restovax (restaurants), CliqPOS (retail & POS), StayQuora (hotels), and Factory Pulse (agro & production). Live, subscription-based platforms serving businesses across Africa.",
  alternates: { canonical: "https://harzotech.com.ng/products" },
};

const verticalColor: Record<string, string> = {
  "Restaurants":          "bg-orange-50 text-orange-700 border-orange-200",
  "Retail & Hospitality": "bg-green-50 text-green-700 border-green-200",
  "Hotels & Hospitality": "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200",
  "Agro & Manufacturing": "bg-amber-50 text-amber-700 border-amber-200",
};

function getVerticalClass(v: string) {
  return verticalColor[v] ?? "bg-slate-100 text-slate-600 border-slate-200";
}

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0c1e3b] py-16 sm:py-20 lg:py-24">
        {/* Glow accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_-10%_-10%,rgba(21,101,192,0.45),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_110%_110%,rgba(198,40,40,0.3),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(21,101,192,0.5)_35%,rgba(198,40,40,0.4)_65%,transparent_100%)]" />

        <Container>
          <div className="relative max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-brand-blue-700/30 bg-brand-blue-700/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue-300">
              Our SaaS Products
            </span>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              We Don&apos;t Just Build.{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                We Ship.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Harzotech owns and operates four live SaaS platforms — serving restaurants, retailers,
              hotels, and agro-production firms across Africa. These are not case studies. They are
              live products you can subscribe to today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#products" variant="cta">
                Explore Products
              </ButtonLink>
              <ButtonLink href="/contact?intent=white-label" variant="outline-white">
                White-label Enquiry
              </ButtonLink>
            </div>

            {/* Quick trust strip */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              {[
                "4 live products",
                "500+ businesses served",
                "3 countries",
                "Subscription-based",
              ].map((s) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-400" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Products grid ──────────────────────────────────────── */}
      <div id="products" className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {saasProducts.map((product) => (
              <div
                key={product.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${product.accentColor}`} />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-2xl shadow-sm ring-1 ring-slate-200">
                        {product.icon}
                      </span>
                      <div>
                        <h2 className="text-xl font-black text-slate-900">{product.name}</h2>
                        <span className={`mt-0.5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getVerticalClass(product.vertical)}`}>
                          {product.vertical}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </Link>
                  </div>

                  {/* Tagline + description */}
                  <p className="mt-3 text-sm font-semibold text-slate-700">{product.tagline}</p>
                  <p className="mt-1.5 text-sm leading-7 text-slate-500">{product.description}</p>

                  {/* Stats */}
                  {product.stats && product.stats.length > 0 && (
                    <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4">
                      {product.stats.map((s) => (
                        <div key={s.label} className="text-center">
                          <div className="text-xl font-black text-slate-900">{s.value}</div>
                          <div className="mt-0.5 text-[11px] text-slate-500">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="mt-5 space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 text-[10px] font-bold">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {product.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${product.accentColor} px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90 hover:shadow-md`}
                    >
                      {product.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <ButtonLink
                      href={`/contact?intent=white-label&product=${product.slug}`}
                      variant="secondary"
                      size="sm"
                    >
                      White-label / Partner
                    </ButtonLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Why we build products ──────────────────────────────── */}
      <div className="border-y border-slate-100 bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand-blue-600">
                Why this matters
              </span>
              <h2 className="text-3xl font-black leading-snug text-slate-900 sm:text-4xl">
                We eat our own cooking.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Most development agencies only build for clients. At Harzotech, we also build, launch, and operate our own SaaS products — which means every system we sell has been stress-tested in the real world, not just a staging environment.
              </p>
              <p className="mt-3 text-base leading-8 text-slate-600">
                When we say we can build you a multi-tenant SaaS, a POS system, or a hotel management platform — we are speaking from direct product ownership experience, not just project work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/services" variant="cta">
                  See Our Services
                </ButtonLink>
                <ButtonLink href="/projects" variant="secondary">
                  View Client Work
                </ButtonLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔁", title: "Battle-tested architecture", desc: "Every pattern in our products has been refined through real production use." },
                { icon: "📦", title: "White-label ready", desc: "All four products are available for white-labelling for the right partners." },
                { icon: "🌍", title: "Built for Africa", desc: "Offline support, local payments, and African business workflows are first-class." },
                { icon: "🚀", title: "Proven GTM experience", desc: "We know how to launch, onboard, and retain SaaS customers — not just build." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-2 text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="bg-[#0c1e3b] py-16">
        <Container>
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Interested in white-labelling or partnering?
            </h2>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              All four products are available for white-label licensing or reseller partnerships.
              Get in touch and we will discuss what works for your market.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=white-label" variant="cta">
                White-label Enquiry
              </ButtonLink>
              <ButtonLink href="/contact?intent=start-project" variant="outline-white">
                Build Your Own SaaS
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
