import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harzotech Nig Ltd — Technology Solutions Built to Help Businesses Grow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c1e3b",
          padding: "60px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Blue glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(21,101,192,0.5) 0%, transparent 70%)",
          }}
        />
        {/* Red glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(198,40,40,0.4) 0%, transparent 70%)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "linear-gradient(135deg, #2196f3, #0d47a1)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 900,
              color: "white",
              border: "1.5px solid rgba(33,150,243,0.5)",
            }}
          >
            H
          </div>
          <span style={{ color: "white", fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Harzotech Nig Ltd
          </span>
          <div
            style={{
              marginLeft: 10,
              padding: "4px 12px",
              borderRadius: 20,
              background: "rgba(198,40,40,0.2)",
              border: "1px solid rgba(198,40,40,0.4)",
              color: "#fca5a5",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Lagos · Nigeria
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: 54, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 820 }}>
            Technology Solutions Built to Help Businesses{" "}
            <span style={{ color: "#60a5fa" }}>Grow, Automate</span>{" "}
            and{" "}
            <span style={{ color: "#f87171" }}>Scale.</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.6, maxWidth: 700 }}>
            Websites · Custom Software · AI Automation · IT Support · SEO
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ display: "flex", gap: 32, zIndex: 1 }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "10+", label: "Years Experience" },
            { value: "8+",  label: "Industries Served" },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#60a5fa", fontSize: 28, fontWeight: 900, letterSpacing: "-0.02em" }}>
                {value}
              </span>
              <span style={{ color: "rgba(148,163,184,0.8)", fontSize: 13, fontWeight: 600 }}>
                {label}
              </span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", alignSelf: "flex-end", color: "rgba(148,163,184,0.5)", fontSize: 13 }}>
            harzotech.com.ng
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
