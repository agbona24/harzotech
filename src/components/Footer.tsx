import Link from "next/link";
import { Container } from "@/components/Container";
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
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-950">{site.name}</p>
            <p className="text-sm leading-6 text-slate-600">
              Harzotech Nig Ltd helps businesses build premium websites, custom software
              systems, AI automation tools, IT support structures, and digital growth
              solutions.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-950">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition hover:text-slate-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-950">Services</p>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition hover:text-slate-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-950">Contact</p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                Phone: <span className="text-slate-950">{site.contact.phone}</span>
              </p>
              <p>
                Email:{" "}
                <a
                  className="text-slate-950 hover:underline"
                  href={`mailto:${site.contact.email}`}
                >
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
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={site.social.linkedin}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950"
                >
                  LinkedIn
                </a>
                <a
                  href={site.social.x}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950"
                >
                  X
                </a>
                <a
                  href={site.social.instagram}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs font-medium text-slate-600 hover:text-slate-950"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs font-medium text-slate-600 hover:text-slate-950"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
