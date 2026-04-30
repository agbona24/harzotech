import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Our Work | Website, Software & AI Projects by Harzotech in Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", backgroundColor: "#060f1e",
          padding: "60px 72px", fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: -80, left: "40%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.3) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.3) 0%, transparent 70%)" }} />

        {/* Badge */}
        <div style={{ display: "flex" }}>
          <div style={{ padding: "6px 18px", borderRadius: 20, background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.35)", color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Client Portfolio
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: 54, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 820 }}>
            Real Projects.{" "}
            <span style={{ color: "#60a5fa" }}>Real Results.</span>{" "}
            <span style={{ color: "#f87171" }}>Real Businesses.</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.5, maxWidth: 680 }}>
            Websites, custom software &amp; AI systems delivered for businesses across Nigeria.
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 40, zIndex: 1 }}>
          {[{ value: "50+", label: "Projects" }, { value: "8+", label: "Industries" }, { value: "10+", label: "Years" }].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "white", fontSize: 34, fontWeight: 900, letterSpacing: "-0.02em" }}>{s.value}</span>
              <span style={{ color: "rgba(148,163,184,0.7)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, color: "white" }}>H</div>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, fontWeight: 700 }}>Harzotech Nig Ltd</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
