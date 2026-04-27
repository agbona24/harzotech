import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowColor = dark ? "text-brand-blue-300" : "text-brand-blue-700";
  const titleColor = dark ? "text-white" : "text-slate-950";
  const descColor = dark ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <div className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
          <div className="h-3.5 w-0.5 rounded-full bg-brand-blue-700" />
          <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${eyebrowColor}`}>
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`max-w-3xl text-base leading-7 ${descColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
