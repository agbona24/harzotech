import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { services, type Service } from "@/data/services";

interface RelatedServicesProps {
  /** IDs of services to exclude (i.e. the current page's service) */
  exclude: Service["id"][];
  /** How many to show — defaults to 3 */
  count?: number;
}

export function RelatedServices({ exclude, count = 3 }: RelatedServicesProps) {
  const related = services
    .filter((s) => !exclude.includes(s.id) && s.href)
    .slice(0, count);

  if (!related.length) return null;

  return (
    <section className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">
            Explore More
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Related Services
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.id}
                href={s.href!}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-brand-blue-200 hover:bg-brand-blue-50/30 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-700 shadow-sm shadow-brand-blue-700/25">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 leading-snug group-hover:text-brand-blue-700 transition-colors">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 line-clamp-2">
                    {s.summary}
                  </p>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-blue-600 transition-colors" />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
