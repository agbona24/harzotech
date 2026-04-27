"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown, Globe, Code2, Bot, Search, Shield } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";

const SERVICE_ITEMS = [
  { href: "/website-development",    label: "Website Development",     desc: "Conversion-focused, SEO-ready websites",      Icon: Globe   },
  { href: "/software-development",   label: "Software Development",    desc: "Custom portals, CRM & SaaS platforms",       Icon: Code2   },
  { href: "/ai-automation",          label: "AI & Automation",         desc: "Voice agents, WhatsApp & workflow bots",     Icon: Bot     },
  { href: "/seo-digital-marketing",  label: "SEO & Digital Marketing", desc: "Rankings, leads & measurable growth",        Icon: Search  },
  { href: "/it-support-maintenance", label: "IT Support & Maintenance",desc: "Managed support, backups & security",        Icon: Shield  },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); setMobileServicesOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const { activeHref, isServicesActive } = useMemo(() => {
    if (!pathname) return { activeHref: "/" as string | undefined, isServicesActive: false };
    if (pathname === "/") return { activeHref: "/", isServicesActive: false };
    const onServicePage =
      pathname.startsWith("/services") ||
      SERVICE_ITEMS.some((s) => pathname.startsWith(s.href));
    if (onServicePage) return { activeHref: "/services", isServicesActive: true };
    if (pathname.startsWith("/about"))    return { activeHref: "/about",    isServicesActive: false };
    if (pathname.startsWith("/projects")) return { activeHref: "/projects", isServicesActive: false };
    if (pathname.startsWith("/blog"))     return { activeHref: "/blog",     isServicesActive: false };
    if (pathname.startsWith("/contact"))  return { activeHref: "/contact",  isServicesActive: false };
    return { activeHref: undefined, isServicesActive: false };
  }, [pathname]);

  const desktopLink = (href: string, label: string) => {
    const active = activeHref === href;
    return (
      <Link
        key={href}
        href={href}
        className={`relative text-sm font-medium transition-colors ${
          active ? "text-brand-blue-700" : "text-slate-600 hover:text-brand-blue-700"
        }`}
      >
        {label}
        {active && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-brand-blue-700" />}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? "border-slate-100 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.07)]"
          : "border-slate-200/80 bg-white/90"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* ── Desktop nav ─────────────────────────────────────── */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {desktopLink("/", "Home")}
            {desktopLink("/about", "About")}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1 text-sm font-medium transition-colors ${
                  isServicesActive ? "text-brand-blue-700" : "text-slate-600 hover:text-brand-blue-700"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                {isServicesActive && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-brand-blue-700" />}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full mt-4 w-[340px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.13)]"
                  >
                    {/* Arrow pointer */}
                    <div className="absolute -top-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-slate-100 bg-white" />

                    <div className="p-2">
                      {SERVICE_ITEMS.map((s) => {
                        const isActive = !!pathname?.startsWith(s.href);
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`group flex items-center gap-3.5 rounded-xl p-3 transition-colors ${
                              isActive ? "bg-brand-blue-50" : "hover:bg-slate-50"
                            }`}
                          >
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                              isActive
                                ? "bg-brand-blue-700"
                                : "bg-slate-100 group-hover:bg-brand-blue-100"
                            }`}>
                              <s.Icon className={`h-4 w-4 ${
                                isActive ? "text-white" : "text-slate-500 group-hover:text-brand-blue-700"
                              }`} />
                            </div>
                            <div className="min-w-0">
                              <p className={`text-sm font-semibold leading-tight ${isActive ? "text-brand-blue-700" : "text-slate-900"}`}>
                                {s.label}
                              </p>
                              <p className="mt-0.5 text-xs leading-tight text-slate-500">{s.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="border-t border-slate-100 px-4 py-2.5">
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-brand-blue-700 hover:text-brand-blue-600"
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {desktopLink("/projects", "Projects")}
            {desktopLink("/blog", "Blog")}
            {desktopLink("/contact", "Contact")}
          </nav>

          <div className="hidden md:flex">
            <ButtonLink href="/contact?intent=start-project" variant="cta" size="sm">
              Start a Project
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* ── Mobile menu ──────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-4">
                  <Logo />
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-5 rounded-full bg-brand-blue-700" />
                    <div className="h-1 w-2 rounded-full bg-brand-red-700" />
                  </div>
                </div>

                <Link href="/" className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${activeHref === "/" ? "bg-brand-blue-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>Home</Link>
                <Link href="/about" className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${activeHref === "/about" ? "bg-brand-blue-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>About</Link>

                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${
                      isServicesActive ? "bg-brand-blue-50 text-brand-blue-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 flex flex-col gap-0.5 rounded-xl border border-slate-100 bg-slate-50 p-2">
                          {SERVICE_ITEMS.map((s) => {
                            const isActive = !!pathname?.startsWith(s.href);
                            return (
                              <Link
                                key={s.href}
                                href={s.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                  isActive ? "bg-brand-blue-700 text-white" : "text-slate-700 hover:bg-white"
                                }`}
                              >
                                <s.Icon className="h-4 w-4 shrink-0" />
                                {s.label}
                              </Link>
                            );
                          })}
                          <Link href="/services" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-blue-700 hover:bg-white">
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/projects" className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${activeHref === "/projects" ? "bg-brand-blue-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>Projects</Link>
                <Link href="/blog" className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${activeHref === "/blog" ? "bg-brand-blue-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>Blog</Link>
                <Link href="/contact" className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${activeHref === "/contact" ? "bg-brand-blue-700 text-white" : "text-slate-700 hover:bg-slate-50"}`}>Contact</Link>

                <div className="pt-2">
                  <ButtonLink href="/contact?intent=start-project" variant="cta" className="w-full">
                    Start a Project
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
