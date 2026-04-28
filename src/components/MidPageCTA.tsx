import { ArrowRight, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/Container";

interface MidPageCTAProps {
  service?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function MidPageCTA({
  service,
  ctaHref = "/contact?intent=consultation",
  ctaLabel,
}: MidPageCTAProps) {
  const label = ctaLabel ?? (service ? `Get a Free ${service} Consultation` : "Book a Free Consultation");

  return (
    <div className="border-y border-brand-blue-100 bg-brand-blue-50/60 py-7">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-700">
              <CalendarCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-950">
                {service ? `Interested in ${service}?` : "Ready to take the next step?"}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">Free 30-minute strategy call · No lock-in commitment</p>
            </div>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-600"
          >
            {label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
