import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Automation & WhatsApp Workflow Systems for Nigerian Businesses | Harzotech";
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
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: -60, left: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.3) 0%, transparent 70%)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", color: "#67e8f9", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            AI Automation & Workflow Systems
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 800 }}>
            AI Automation That <span style={{ color: "#67e8f9" }}>Works 24/7</span>{" "}
            So Your Team <span style={{ color: "#f87171" }}>Doesn't Have To.</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.5, maxWidth: 640 }}>
            WhatsApp automation, voice agents, booking workflows & CRM automation for Nigeria.
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
