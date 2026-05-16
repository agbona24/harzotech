import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Free Website Audit — Is Your Site Costing You Customers? | Harzotech";
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
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Blue glow top-left */}
        <div style={{ position: "absolute", top: -100, left: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.4) 0%, transparent 70%)" }} />
        {/* Red glow bottom-right */}
        <div style={{ position: "absolute", bottom: -80, right: -60, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.32) 0%, transparent 70%)" }} />

        {/* Badge */}
        <div style={{ display: "flex" }}>
          <div style={{ padding: "6px 18px", borderRadius: 20, background: "rgba(21,101,192,0.15)", border: "1px solid rgba(21,101,192,0.4)", color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Free Audit — No Commitment
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 860 }}>
            Is Your Website{" "}
            <span style={{ color: "#f87171" }}>Costing You</span>{" "}
            Customers?
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.55, maxWidth: 700 }}>
            Get a free 5-point audit — SEO, speed, mobile, conversion & credibility. We tell you exactly what to fix.
          </div>

          {/* Audit points */}
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
            {["SEO & Visibility", "Speed", "Mobile", "Conversions", "Credibility"].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 14px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399" }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 600 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: "white" }}>H</div>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, fontWeight: 700 }}>Harzotech Nig Ltd</span>
          </div>
          <div style={{ padding: "8px 20px", borderRadius: 10, background: "rgba(198,40,40,0.85)", color: "white", fontSize: 14, fontWeight: 700 }}>
            Request Free Audit →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
