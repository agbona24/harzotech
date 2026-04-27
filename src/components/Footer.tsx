import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-automation", label: "AI Automation" },
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
    <footer className="bg-navy-950 text-white">
      {/* Top accent line */}
      <div className="h-1 w-full bg-red-600" />

      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5 lg:col-span-1">
            <Logo invert />
            <p className="text-sm leading-7 text-slate-400">
              Technology solutions built to help businesses grow, automate, and scale
              with premium websites, software, AI systems, and digital strategy.
            </p>
            <div className="flex items-center gap-4">
              {[
                { href: site.social.linkedin, label: "LinkedIn" },
                { href: site.social.x, label: "X" },
                { href: site.social.instagram, label: "Instagram" },
                { href: site.social.facebook, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-medium text-slate-400 transition hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
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

          {/* Services links */}
          <div>
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
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Contact Us
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <p>
                <span className="block text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </span>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="mt-0.5 block font-medium text-white hover:text-red-400 transition"
                >
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-slate-500">
                  Email
                </span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-0.5 block font-medium text-white hover:text-red-400 transition"
                >
                  {site.contact.email}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-slate-500">
                  Office
                </span>
                <span className="mt-0.5 block leading-6">
                  {site.contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
