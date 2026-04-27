import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Custom Software Development Company in Nigeria — CRM, Portals & SaaS | Harzotech";
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
        <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.4) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.28) 0%, transparent 70%)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(33,150,243,0.15)", border: "1px solid rgba(33,150,243,0.35)", color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Custom Software Development
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 780 }}>
            Custom Software That <span style={{ color: "#60a5fa" }}>Solves Real</span>{" "}
            Business <span style={{ color: "#f87171" }}>Problems.</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.5, maxWidth: 640 }}>
            CRM systems, portals, SaaS apps, POS & inventory — built for Nigeria.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: "white" }}>H</div>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, fontWeight: 700 }}>Harzotech Nig Ltd</span>
          </div>
          <span style={{ color: "rgba(148,163,184,0.5)", fontSize: 13 }}>harzotech.com.ng</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
