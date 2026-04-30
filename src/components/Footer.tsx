import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";

// ── Inline SVG social icons (no extra package) ──────────────────
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.213 5.567L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialLinks = [
  { href: site.social.linkedin,  Icon: IconLinkedIn,  label: "LinkedIn"   },
  { href: site.social.x,         Icon: IconX,         label: "X (Twitter)" },
  { href: site.social.instagram, Icon: IconInstagram, label: "Instagram"  },
  { href: site.social.facebook,  Icon: IconFacebook,  label: "Facebook"   },
] as const;

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects",  label: "Projects" },
  { href: "/products",  label: "Products" },
  { href: "/blog",      label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { href: "/website-development", label: "Website Design & Development" },
  { href: "/software-development", label: "Custom Software Development" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/seo-digital-marketing", label: "SEO & Digital Marketing" },
  { href: "/it-support-maintenance", label: "IT Support & Maintenance" },
  { href: "/services", label: "Business Applications" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ── Pre-footer CTA ──────────────────────────────────── */}
      <section
        aria-labelledby="footer-cta-heading"
        className="bg-gradient-to-br from-navy-900 to-navy-950"
      >
        <Container>
          <div className="flex flex-col items-start gap-5 py-8 sm:gap-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red-400">
                Ready to get started?
              </p>
              <h2
                id="footer-cta-heading"
                className="mt-2 text-xl font-bold tracking-tight text-white sm:mt-3 sm:text-4xl"
              >
                Let&apos;s build technology that{" "}
                <span className="text-brand-blue-300">works for your business.</span>
              </h2>
              <p className="mt-2 hidden text-base leading-8 text-slate-400 sm:mt-4 sm:block">
                Website, software, AI automation, SEO, IT support — we do it all, and we
                do it right. Tell us what you need; we&apos;ll tell you how to get there.
              </p>
            </div>
            <div className="flex w-full shrink-0 gap-2 sm:w-auto sm:flex-col sm:gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta" className="flex-1 sm:flex-none sm:w-auto">
                Start a Project →
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-white" className="flex-1 sm:flex-none sm:w-auto">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main footer ─────────────────────────────────────── */}
      <footer className="bg-navy-950 text-white">
      {/* Top accent line */}
      <div className="h-1 w-full bg-red-600" />

      <Container>
        <div className="grid gap-8 py-8 sm:gap-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex items-start justify-between gap-4 sm:block sm:space-y-5 lg:col-span-1">
            <div className="space-y-2 sm:space-y-5">
              <Logo invert />
              <p className="hidden text-sm leading-7 text-slate-400 sm:block">
                Technology solutions built to help businesses grow, automate, and scale
                with premium websites, software, AI systems, and digital strategy.
              </p>
              <p className="hidden text-[11px] font-medium uppercase tracking-widest text-slate-500 sm:block">
                A Nigerian Technology Company
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company + Services — on mobile: merged 2-column grid; on desktop: separate columns */}
          <div className="sm:hidden col-span-full">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[...quickLinks, ...serviceLinks].map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className="truncate text-xs text-slate-400 transition hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company links — desktop only */}
          <div className="hidden sm:block">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Company
            </p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links — desktop only */}
          <div className="hidden sm:block">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white sm:mb-5">
              Contact Us
            </p>
            {/* Mobile: compact inline row */}
            <div className="flex flex-col gap-2 sm:hidden">
              <a href={`tel:${site.contact.phone}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-red-400 transition">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">📞</span>
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-red-400 transition">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">✉️</span>
                {site.contact.email}
              </a>
            </div>
            {/* Desktop: full block */}
            <div className="hidden space-y-3 text-sm text-slate-400 sm:block">
              <p>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Phone</span>
                <a href={`tel:${site.contact.phone}`}
                  className="mt-0.5 block font-medium text-white hover:text-red-400 transition">
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Email</span>
                <a href={`mailto:${site.contact.email}`}
                  className="mt-0.5 block font-medium text-white hover:text-red-400 transition">
                  {site.contact.email}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Office</span>
                <span className="mt-0.5 block leading-6">
                  {site.contact.addressLines.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-slate-500">
              &copy; {year} {site.legalName}. All rights reserved.
            </p>
            <span className="hidden text-slate-700 sm:inline">&middot;</span>
            <p className="text-xs text-slate-600">Registered in Nigeria</p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-slate-500 transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-slate-500 transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
    </>
  );
}
