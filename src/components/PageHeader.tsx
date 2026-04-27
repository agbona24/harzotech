import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export function PageHeader({
  title,
  description,
  primaryCta,
  secondaryCta,
  eyebrow = "Harzotech Nig Ltd",
  illustration,
}: {
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  eyebrow?: string;
  illustration?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-[#0c1e3b] text-white">
      {/* Brand-blue radial glow — upper left */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_-10%_-10%,rgba(21,101,192,0.45),transparent_60%)]" />
      {/* Brand-red radial glow — lower right */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_110%_110%,rgba(198,40,40,0.3),transparent_60%)]" />
      {/* Diagonal tint */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(21,101,192,0.10)_0%,transparent_50%,rgba(198,40,40,0.08)_100%)]" />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(21,101,192,0.5)_35%,rgba(198,40,40,0.4)_65%,transparent_100%)]" />

      <Container>
        <div
          className={`relative py-16 sm:py-20 lg:py-24 ${
            illustration
              ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-12"
              : ""
          }`}
        >
          {/* Text */}
          <div className={illustration ? "max-w-2xl" : "max-w-3xl"}>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-700/40 bg-brand-red-900/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red-400" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">
                {eyebrow}
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryCta && (
                  <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
                )}
                {secondaryCta && (
                  <ButtonLink href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonLink>
                )}
              </div>
            )}
          </div>

          {/* Illustration */}
          {illustration && (
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="w-[360px] h-[360px]">{illustration}</div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

