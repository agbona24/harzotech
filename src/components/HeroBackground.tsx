"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Hero background with two independent animations:
 *  1. Outer div — mouse parallax (JS RAF, translate only)
 *  2. Inner div — Ken Burns zoom in/out (CSS keyframe, no transform conflict)
 */
export function HeroBackground() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      tx = nx * -14;
      ty = ny * -10;
    };

    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      // translate only — zoom is handled by the inner CSS animation
      el.style.transform = `translate(${cx}px, ${cy}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Outer: parallax translate (JS) — oversized so edges never show */}
      <div
        ref={parallaxRef}
        className="absolute -inset-[6%] will-change-transform"
      >
        {/* Inner: Ken Burns zoom in/out (CSS only, no conflict) */}
        <div
          className="absolute inset-0 hero-bg-zoom"
          style={{ transformOrigin: "center center" }}
        >
          <Image
            src="/hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            aria-hidden
          />
        </div>
      </div>

      {/* dark scrim so text stays legible */}
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(21,101,192,0.18),transparent),radial-gradient(ellipse_50%_45%_at_85%_105%,rgba(198,40,40,0.1),transparent)]" />
      <div className="absolute inset-0 opacity-[0.20] [background-image:url('/hero-network.svg')] [background-size:1200px_700px] [background-position:center] [background-repeat:no-repeat] mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-blue-700/[0.08] blur-3xl" />
      <div className="absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-brand-red-700/[0.07] blur-3xl" />

      <style>{`
        @keyframes heroBgZoom {
          0%   { transform: scale(1);    }
          50%  { transform: scale(1.12); }
          100% { transform: scale(1);    }
        }
        .hero-bg-zoom {
          animation: heroBgZoom 18s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-zoom { animation: none; }
        }
      `}</style>
    </div>
  );
}
