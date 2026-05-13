import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  variant = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
  id?: string;
}) {
  const base = "py-12 sm:py-20";
  const variants = {
    light: "bg-white",
    dark: "bg-navy-950 text-white",
  } as const;

  return <section id={id} className={`${base} ${variants[variant]} ${className}`}>{children}</section>;
}
