import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Managed IT Support & Maintenance Services in Lagos, Nigeria | Harzotech";
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
        <div style={{ position: "absolute", top: -100, left: -100, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.4) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -60, right: 100, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", color: "#86efac", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Managed IT Support & Maintenance
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 780 }}>
            IT Support That <span style={{ color: "#86efac" }}>Keeps You Running</span>{" "}
            — Not <span style={{ color: "#f87171" }}>Catching Up.</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.5, maxWidth: 640 }}>
            Help desk, security monitoring, cloud backup & email management in Lagos, Nigeria.
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
