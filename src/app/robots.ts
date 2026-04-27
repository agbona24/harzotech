import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Prevent indexing of URL variants with query params that create duplicate pages
        disallow: ["/*?intent=", "/*?*intent="],
      },
    ],
    sitemap: "https://harzotech.com.ng/sitemap.xml",
  };
}
