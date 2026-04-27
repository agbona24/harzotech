import Image from "next/image";
import { clients } from "@/data/clients";

/**
 * Auto-scrolling client logo marquee with two rows going in opposite directions.
 * Pure CSS animation — no JS needed, respects prefers-reduced-motion.
 */
export function ClientsMarquee() {
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-14">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(21,101,192,0.04),transparent)]"
      />

      {/* Section label */}
      <div className="mb-10 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          Trusted by businesses across Nigeria &amp; beyond
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-5 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex shrink-0 gap-6"
          style={{ animation: "clientsMarqueeLeft 35s linear infinite" }}
        >
          {[...row1, ...row1, ...row1].map((client, i) => (
            <LogoTile key={`r1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex shrink-0 gap-6"
          style={{ animation: "clientsMarqueeRight 40s linear infinite" }}
        >
          {[...row2, ...row2, ...row2].map((client, i) => (
            <LogoTile key={`r2-${i}`} client={client} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clientsMarqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes clientsMarqueeRight {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="clientsMarqueeLeft"],
          [style*="clientsMarqueeRight"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function LogoTile({ client }: { client: (typeof clients)[number] }) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      title={client.name}
      className="group flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-0.5 py-0.5 shadow-sm transition-all duration-300 hover:border-brand-blue-300 hover:shadow-md"
    >
      <div className="relative h-14 w-full">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          className={[
            "object-contain object-center",
            "transition-all duration-300",
            "opacity-75 group-hover:opacity-100",
          ].join(" ")}
          sizes="160px"
          unoptimized
        />
      </div>
    </a>
  );
}
