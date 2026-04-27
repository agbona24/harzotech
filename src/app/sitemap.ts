import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harzotech.com.ng";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/ai-automation",
    "/website-development",
    "/software-development",
    "/seo-digital-marketing",
    "/it-support-maintenance",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
