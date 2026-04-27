"use client";

import { useId } from "react";
import Link from "next/link";

function EarthGlobe({ faceColor, className = "" }: { faceColor: string; className?: string }) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");
  const clipId = `gc${uid}`;
  const gradId = `gg${uid}`;

  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ height: "1.15em", width: "1.15em", display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="11" cy="11" r="10" />
        </clipPath>
        <radialGradient id={gradId} cx="32%" cy="28%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
        </radialGradient>
      </defs>

      {/* Ocean */}
      <circle cx="11" cy="11" r="10" fill={faceColor} />

      {/* Scrolling land map — two identical tiles, translates -22 then loops */}
      <g clipPath={`url(#${clipId})`}>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-22 0"
            dur="8s"
            repeatCount="indefinite"
          />
          {/* ── Tile 1 ── */}
          {/* Africa */}
          <path d="M13 8.5L15.5 7.5L17 9L17 14.5L15 17.5L13 16.5L12.5 14L13 10Z" fill="#43a047" />
          {/* Europe */}
          <path d="M12 4L15.5 3.5L17.5 5.5L17 8L14.5 8.5L12.5 7Z" fill="#43a047" />
          {/* Asia */}
          <path d="M17 4L21.5 3L22 6L20.5 8.5L18 8L17 5.5Z" fill="#43a047" />
          {/* Americas */}
          <path d="M2 8L5.5 6.5L7.5 8.5L7 12.5L5 15L4 17.5L2 16L1 13L1.5 10Z" fill="#43a047" />
          {/* Greenland */}
          <path d="M5 3L8 2.5L9 4.5L7.5 6L5.5 5.5Z" fill="#43a047" />
          {/* Australia */}
          <path d="M18.5 14L21 13.5L22 15.5L21 17L18.5 17L17.5 15.5Z" fill="#43a047" />

          {/* ── Tile 2 — offset +22 ── */}
          <path d="M35 8.5L37.5 7.5L39 9L39 14.5L37 17.5L35 16.5L34.5 14L35 10Z" fill="#43a047" />
          <path d="M34 4L37.5 3.5L39.5 5.5L39 8L36.5 8.5L34.5 7Z" fill="#43a047" />
          <path d="M39 4L43.5 3L44 6L42.5 8.5L40 8L39 5.5Z" fill="#43a047" />
          <path d="M24 8L27.5 6.5L29.5 8.5L29 12.5L27 15L26 17.5L24 16L23 13L23.5 10Z" fill="#43a047" />
          <path d="M27 3L30 2.5L31 4.5L29.5 6L27.5 5.5Z" fill="#43a047" />
          <path d="M40.5 14L43 13.5L44 15.5L43 17L40.5 17L39.5 15.5Z" fill="#43a047" />
        </g>
      </g>

      {/* Latitude lines */}
      <g clipPath={`url(#${clipId})`} stroke="rgba(255,255,255,0.28)" strokeWidth="0.45" fill="none">
        <ellipse cx="11" cy="7" rx="8.5" ry="1.7" />
        <line x1="1" y1="11" x2="21" y2="11" />
        <ellipse cx="11" cy="15" rx="8.5" ry="1.7" />
      </g>

      {/* 3D sheen */}
      <circle cx="11" cy="11" r="10" fill={`url(#${gradId})`} />
      <circle cx="11" cy="11" r="10" stroke="rgba(255,255,255,0.22)" strokeWidth="0.6" />
    </svg>
  );
}

export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const globeColor = invert ? "#1976d2" : "#1565c0";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Harzotech home"
    >
      {/* Brand mark: SVG diamond + H */}
      <div className="relative h-9 w-9 shrink-0">
        <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
          <rect
            x="6.5" y="6.5" width="23" height="23" rx="3.5"
            transform="rotate(45 18 18)"
            stroke={invert ? "rgba(255,255,255,0.5)" : "#1565c0"}
            strokeWidth="1.7"
          />
          <circle cx="18" cy="2.5" r="1.6" fill="#1565c0" />
          <circle cx="18" cy="33.5" r="1.6" fill="#c62828" />
        </svg>
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
        <span className="inline-flex items-center text-sm font-black tracking-tight">
          <span className={invert ? "text-brand-blue-300" : "text-brand-blue-700"}>HARZ</span>
          <EarthGlobe faceColor={globeColor} />
          <span className={invert ? "text-brand-red-400" : "text-brand-red-700"}>TECH</span>
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
