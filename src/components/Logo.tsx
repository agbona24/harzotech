import Link from "next/link";

export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Harzotech home"
    >
      {/* Brand mark: SVG diamond + H */}
      <div className="relative h-9 w-9 shrink-0">
        <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
          {/* Diamond outline — brand-blue on light, white/50 on dark */}
          <rect
            x="6.5" y="6.5" width="23" height="23" rx="3.5"
            transform="rotate(45 18 18)"
            stroke={invert ? "rgba(255,255,255,0.5)" : "#1565c0"}
            strokeWidth="1.7"
          />
          {/* Brand-blue dot at top vertex */}
          <circle cx="18" cy="2.5" r="1.6" fill="#1565c0" />
          {/* Brand-red dot at bottom vertex */}
          <circle cx="18" cy="33.5" r="1.6" fill="#c62828" />
        </svg>
        {/* H letterform */}
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center text-[13px] font-black ${
            invert ? "text-white" : "text-slate-900"
          }`}
        >
          H
        </span>
      </div>

      {/* HARZOTECH split-color wordmark */}
      <span className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-tight">
          <span className={invert ? "text-brand-blue-300" : "text-brand-blue-700"}>
            HARZO
          </span>
          <span className={invert ? "text-brand-red-400" : "text-brand-red-700"}>
            TECH
          </span>
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.13em] uppercase ${
          invert ? "text-slate-400" : "text-slate-400"
        }`}>
          Technology Solutions
        </span>
      </span>
    </Link>
  );
}
