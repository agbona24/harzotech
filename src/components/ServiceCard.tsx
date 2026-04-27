import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

const visuals: Record<
  Service["id"],
  { accent: string; iconBg: string; iconText: string }
> = {
  "website-development": {
    accent: "bg-blue-500",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
  },
  "software-development": {
    accent: "bg-violet-500",
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
  },
  "ai-automation": {
    accent: "bg-cyan-500",
    iconBg: "bg-cyan-50",
    iconText: "text-cyan-600",
  },
  "it-support": {
    accent: "bg-emerald-500",
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
  },
  "seo-digital-marketing": {
    accent: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
  },
  "business-applications": {
    accent: "bg-rose-500",
    iconBg: "bg-rose-50",
    iconText: "text-rose-600",
  },
  branding: {
    accent: "bg-slate-500",
    iconBg: "bg-slate-100",
    iconText: "text-slate-600",
  },
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const v = visuals[service.id];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Top color strip */}
      <div className={`h-1 w-full ${v.accent}`} />

      <div className="flex flex-1 flex-col p-6">
        <div
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${v.iconBg}`}
        >
          <Icon className={`h-5 w-5 ${v.iconText}`} />
        </div>

        <p className="mt-4 text-base font-semibold text-slate-950">{service.title}</p>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{service.summary}</p>

        {service.href ? (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <Link
              href={service.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 transition hover:text-cyan-700 group-hover:gap-2.5"
            >
              Explore{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
