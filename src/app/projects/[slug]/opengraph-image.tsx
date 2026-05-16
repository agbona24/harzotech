import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function OGImage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const name = project?.name ?? "Project";
  const industry = project?.industry ?? "Technology";
  const description = project?.description ?? "A project built by Harzotech Nig Ltd";
  const tags = project?.tags?.slice(0, 4) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", backgroundColor: "#0c1e3b",
          padding: "60px 72px", fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Blue glow */}
        <div style={{ position: "absolute", top: -100, left: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.35) 0%, transparent 65%)" }} />
        {/* Red glow */}
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.3) 0%, transparent 70%)" }} />

        {/* Industry badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <div style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(21,101,192,0.15)", border: "1px solid rgba(21,101,192,0.35)", color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {industry}
          </div>
          <span style={{ color: "rgba(148,163,184,0.5)", fontSize: 13 }}>Portfolio · Harzotech</span>
        </div>

        {/* Title + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: name.length > 40 ? 44 : 52, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 860 }}>
            {name}
          </div>
          <div style={{ color: "rgba(148,163,184,0.85)", fontSize: 18, lineHeight: 1.6, maxWidth: 780 }}>
            {description.length > 140 ? description.slice(0, 140) + "…" : description}
          </div>
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: 10 }}>
              {tags.map((tag) => (
                <div key={tag} style={{ padding: "5px 12px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(203,213,225,0.85)", fontSize: 13, fontWeight: 600 }}>
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: "white" }}>H</div>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, fontWeight: 700 }}>Harzotech Nig Ltd</span>
          </div>
          <span style={{ color: "rgba(148,163,184,0.45)", fontSize: 13 }}>harzotech.com/projects</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
