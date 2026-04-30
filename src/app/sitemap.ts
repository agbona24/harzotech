import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harzotech.com.ng";
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    { url: base,                                        lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${base}/services`,                          lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/ai-automation`,                     lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/ai-automation/demos`,               lastModified: now, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${base}/website-development`,               lastModified: now, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${base}/software-development`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${base}/seo-digital-marketing`,             lastModified: now, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${base}/it-support-maintenance`,            lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/products`,                          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact`,                           lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`,                             lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/projects`,                          lastModified: now, changeFrequency: "weekly",  priority: 0.75 },
    { url: `${base}/blog`,                              lastModified: now, changeFrequency: "weekly",  priority: 0.75 },
    ...blogEntries,
    { url: `${base}/privacy-policy`,                    lastModified: now, changeFrequency: "yearly",  priority: 0.2  },
    { url: `${base}/terms-of-service`,                  lastModified: now, changeFrequency: "yearly",  priority: 0.2  },
  ];
}
