"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ScrollCarousel({
  children,
  className = "",
  fadeLeft,
  fadeRight,
  btnVariant = "dark",
  cardWidth = 288, // px — used to scroll one card at a time
}: {
  children: ReactNode;
  className?: string;
  /** Tailwind class for the left fade mask */
  fadeLeft?: string;
  /** Tailwind class for the right fade mask */
  fadeRight?: string;
  btnVariant?: "light" | "dark";
  cardWidth?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  const btnBase =
    "z-20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-200 disabled:opacity-30";
  const btnStyles =
    btnVariant === "dark"
      ? "border-white/15 bg-white/[0.07] text-white hover:bg-white/[0.16] hover:border-white/25"
      : "border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md";

  return (
    <div className={`relative ${className}`}>
      {/* Fade masks */}
      {fadeLeft && (
        <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 ${fadeLeft}`} />
      )}
      {fadeRight && (
        <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 ${fadeRight}`} />
      )}

      {/* Prev / Next buttons */}
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className={`${btnBase} ${btnStyles} absolute -left-4 top-1/2 -translate-y-1/2 sm:-left-5`}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className={`${btnBase} ${btnStyles} absolute -right-4 top-1/2 -translate-y-1/2 sm:-right-5`}
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
      >
        {children}
      </div>
    </div>
  );
}
