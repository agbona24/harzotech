import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Brand gradient top strip */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue-700 to-brand-red-700" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-flex items-center rounded-full bg-brand-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-blue-700 ring-1 ring-brand-blue-100">
              {project.industry}
            </span>
            <p className="mt-2 text-sm font-semibold text-slate-950">{project.name}</p>
          </div>
          <div
            className="h-10 w-10 shrink-0 rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100"
            aria-label="Project preview"
            role="img"
          />
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={`/projects#${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 transition hover:text-brand-blue-700 group-hover:gap-2.5"
          >
            View Project{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
