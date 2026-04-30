import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function OGImage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "Technology Insights for Nigerian Businesses";
  const category = post?.category ?? "Blog";
  const readingTime = post?.readingTime ?? 5;
  const author = post?.author.name ?? "Azeez Agbona";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", backgroundColor: "#0f172a",
          padding: "60px 72px", fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.3) 0%, transparent 70%)" }} />

        {/* Category badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ padding: "6px 16px", borderRadius: 20, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", color: "#a5b4fc", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {category}
          </div>
          <span style={{ color: "rgba(148,163,184,0.5)", fontSize: 13 }}>{readingTime} min read</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, zIndex: 1 }}>
          <div style={{ color: "white", fontSize: title.length > 60 ? 40 : 48, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 900 }}>
            {title}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "white" }}>
              {author.charAt(0)}
            </div>
            <span style={{ color: "rgba(148,163,184,0.8)", fontSize: 15, fontWeight: 600 }}>{author}</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#2196f3,#0d47a1)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: "white" }}>H</div>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, fontWeight: 700 }}>Harzotech Nig Ltd</span>
          </div>
          <span style={{ color: "rgba(148,163,184,0.45)", fontSize: 13 }}>harzotech.com.ng/blog</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
