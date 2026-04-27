import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Brand gradient top strip */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue-700 to-brand-red-700" />

      {/* Project image / gradient fallback */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center">
              <div className="h-5 w-5 rounded bg-gradient-to-br from-brand-blue-400 to-brand-red-400 opacity-60" />
            </div>
          </div>
        )}
        {/* Overlay gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-brand-blue-200 bg-brand-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-blue-700">
            {project.industry}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-slate-400 transition hover:text-brand-blue-600"
              aria-label={`Visit ${project.name}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <p className="mt-2.5 text-sm font-semibold text-slate-900">{project.name}</p>
        <p className="mt-2 flex-1 text-[13px] leading-6 text-slate-600">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 border-t border-slate-100 pt-4">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-900 group-hover:gap-2.5"
            >
              Visit Live Site{" "}
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          ) : (
            <Link
              href={`/projects#${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-900 group-hover:gap-2.5"
            >
              View Project{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

