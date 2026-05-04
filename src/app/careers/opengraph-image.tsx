import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Careers at Harzotech | Join Our Growing Team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: -100, left: -100, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.45) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.35) 0%, transparent 70%)" }} />

        {/* Badge */}
        <div style={{ display: "flex" }}>
          <div style={{ padding: "6px 18px", borderRadius: 20, background: "rgba(21,101,192,0.15)", border: "1px solid rgba(21,101,192,0.35)", color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            We&apos;re Hiring
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 820 }}>
            Join Our Growing{" "}
            <span style={{ color: "#60a5fa" }}>Team</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.5, maxWidth: 680 }}>
            Build your career at Harzotech. We're hiring for Business Development and Content Creation roles.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, color: "white" }}>H</div>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, fontWeight: 700 }}>Harzotech Nig Ltd</span>
          </div>
          <span style={{ color: "rgba(148,163,184,0.45)", fontSize: 14 }}>harzotech.com.ng/careers</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
