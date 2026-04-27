import Link from "next/link";
import { type ReactNode } from "react";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost" | "cta" | "outline-white";
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-slate-950 text-white hover:bg-slate-900 border border-slate-800",
  secondary:
    "bg-white text-slate-950 hover:bg-slate-50 border border-slate-200",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 border border-transparent",
  cta:
    "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border border-cyan-400/30 shadow-lg shadow-cyan-500/25",
  "outline-white":
    "bg-white/10 text-white hover:bg-white/15 border border-white/20 backdrop-blur-sm",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
