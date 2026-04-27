import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export function PageHeader({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.14),transparent_55%)]" />
      <Container>
        <div className="relative py-14 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300">
            Harzotech Nig Ltd
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            {description}
          </p>

          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
