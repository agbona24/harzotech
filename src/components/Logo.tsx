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
      {/* Diamond "H" mark — matches actual logo */}
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        <div
          className={`absolute h-6 w-6 rotate-45 rounded-sm border-2 ${
            invert ? "border-white/70" : "border-slate-800"
          }`}
        />
        <span
          className={`relative text-sm font-black ${
            invert ? "text-white" : "text-slate-900"
          }`}
        >
          H
        </span>
      </div>

      {/* HARZOTECH split color wordmark */}
      <span className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-tight">
          <span className={invert ? "text-brand-blue-300" : "text-brand-blue-700"}>
            HARZO
          </span>
          <span className={invert ? "text-brand-red-400" : "text-brand-red-700"}>
            TECH
          </span>
        </span>
        <span className={`text-[10px] font-medium tracking-wide ${invert ? "text-slate-400" : "text-slate-500"}`}>
          Innovative IT Solutions
        </span>
      </span>
    </Link>
  );
}
