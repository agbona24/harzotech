import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Website & Software Packages — Clear Pricing for Nigerian Businesses | Harzotech";
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
        {/* Blue glow */}
        <div style={{ position: "absolute", top: -80, left: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.4) 0%, transparent 70%)" }} />
        {/* Red glow */}
        <div style={{ position: "absolute", bottom: -80, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,40,40,0.3) 0%, transparent 70%)" }} />

        {/* Badge */}
        <div style={{ display: "flex" }}>
          <div style={{ padding: "6px 18px", borderRadius: 20, background: "rgba(21,101,192,0.15)", border: "1px solid rgba(21,101,192,0.4)", color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Transparent Pricing
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 860 }}>
            Clear Packages.{" "}
            <span style={{ color: "#60a5fa" }}>Fixed Prices.</span>{" "}
            <span style={{ color: "#f87171" }}>14-Day Delivery.</span>
          </div>
          <div style={{ color: "rgba(148,163,184,0.9)", fontSize: 20, lineHeight: 1.55, maxWidth: 700 }}>
            Professional websites and software for Nigerian businesses — starting from ₦300,000 with no hidden fees.
          </div>

          {/* Package tiers */}
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            {[
              { name: "Starter", price: "₦300k", color: "#60a5fa" },
              { name: "Business", price: "₦550k", color: "#34d399" },
              { name: "Premium", price: "₦900k+", color: "#f87171" },
            ].map((pkg) => (
              <div key={pkg.name} style={{ display: "flex", flexDirection: "column", gap: 4, background: "rgba(255,255,255,0.06)", border: `1px solid ${pkg.color}30`, borderRadius: 12, padding: "14px 20px", minWidth: 160 }}>
                <span style={{ color: pkg.color, fontSize: 22, fontWeight: 900 }}>{pkg.price}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600 }}>{pkg.name}</span>
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
          <span style={{ color: "rgba(148,163,184,0.5)", fontSize: 13 }}>harzotech.com/packages</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
