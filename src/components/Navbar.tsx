"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    if (pathname === "/") return "/";
    const match = navItems.find((i) => i.href !== "/" && pathname.startsWith(i.href));
    return match?.href;
  }, [pathname]);

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
          <Link href="/" aria-label="Harzotech home">
            <Image
              src="/logo.gif"
              alt="Harzotech"
              width={180}
              height={72}
              priority
              unoptimized
              className="h-[61px] w-auto object-contain mix-blend-multiply"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-brand-blue-700"
                      : "text-slate-600 hover:text-brand-blue-700"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-brand-blue-700" />
                  )}
                </Link>
              );
            })}
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
              <div className="flex flex-col gap-2 py-4">
                {/* Mobile brand header */}
                <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-4">
                  <Link href="/" aria-label="Harzotech home">
                    <Image
                      src="/logo.gif"
                      alt="Harzotech"
                      width={180}
                      height={72}
                      priority
                      unoptimized
                      className="h-[61px] w-auto object-contain mix-blend-multiply"
                    />
                  </Link>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-5 rounded-full bg-brand-blue-700" />
                    <div className="h-1 w-2 rounded-full bg-brand-red-700" />
                  </div>
                </div>
                {navItems.map((item) => {
                  const active = activeHref === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${
                        active
                          ? "bg-brand-blue-700 text-white"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

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
