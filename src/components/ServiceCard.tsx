import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

const visuals: Record<
  Service["id"],
  { accent: string; iconBg: string; iconText: string; hoverBorder: string }
> = {
  "website-development": {
    accent: "bg-brand-blue-700",
    iconBg: "bg-brand-blue-50",
    iconText: "text-brand-blue-700",
    hoverBorder: "hover:border-brand-blue-200",
  },
  "software-development": {
    accent: "bg-violet-600",
    iconBg: "bg-violet-50",
    iconText: "text-violet-700",
    hoverBorder: "hover:border-violet-200",
  },
  "ai-automation": {
    accent: "bg-brand-red-700",
    iconBg: "bg-brand-red-50",
    iconText: "text-brand-red-700",
    hoverBorder: "hover:border-brand-red-200",
  },
  "it-support": {
    accent: "bg-emerald-600",
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-700",
    hoverBorder: "hover:border-emerald-200",
  },
  "seo-digital-marketing": {
    accent: "bg-amber-600",
    iconBg: "bg-amber-50",
    iconText: "text-amber-700",
    hoverBorder: "hover:border-amber-200",
  },
  "business-applications": {
    accent: "bg-navy-800",
    iconBg: "bg-brand-blue-50",
    iconText: "text-navy-800",
    hoverBorder: "hover:border-brand-blue-100",
  },
  branding: {
    accent: "bg-slate-700",
    iconBg: "bg-slate-100",
    iconText: "text-slate-700",
    hoverBorder: "hover:border-slate-300",
  },
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const v = visuals[service.id];

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${v.hoverBorder}`}
    >
      {/* Top accent strip */}
      <div className={`h-1.5 w-full ${v.accent}`} />

      <div className="relative flex flex-1 flex-col p-6">
        {/* Large decorative background icon */}
        <div className="pointer-events-none absolute right-3 top-3 opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.08]">
          <Icon className="h-28 w-28" />
        </div>

        {/* Icon badge */}
        <div
          className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ${v.iconBg} ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-6 w-6 ${v.iconText}`} />
        </div>

        <p className="relative mt-4 text-base font-bold text-slate-950">
          {service.title}
        </p>
        <p className="relative mt-2 flex-1 text-sm leading-6 text-slate-500">
          {service.summary}
        </p>

        {/* Outcome tags */}
        {service.tags && service.tags.length > 0 && (
          <div className="relative mt-4 flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${v.iconBg} ${v.iconText} ring-1 ring-inset ring-current/20`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {service.href ? (
          <div className="relative mt-5 border-t border-slate-100 pt-4">
            <Link
              href={service.href}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3 ${v.iconText}`}
            >
              Explore Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
