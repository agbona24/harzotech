import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Harzotech home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
        <span className="text-sm font-semibold tracking-tight">H</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-slate-950">
          Harzotech
        </span>
        <span className="text-[11px] text-slate-500">Nig Ltd</span>
      </span>
    </Link>
  );
}
