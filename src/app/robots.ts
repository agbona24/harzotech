import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main rule — allow all crawlers, block duplicate-content query params
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*?intent=", "/*?*intent="],
      },
      // Explicitly allow all major AI crawlers
      { userAgent: "GPTBot",            allow: "/" }, // OpenAI / ChatGPT
      { userAgent: "OAI-SearchBot",     allow: "/" }, // OpenAI Search
      { userAgent: "PerplexityBot",     allow: "/" }, // Perplexity AI
      { userAgent: "ClaudeBot",         allow: "/" }, // Anthropic Claude
      { userAgent: "anthropic-ai",      allow: "/" }, // Anthropic
      { userAgent: "Claude-Web",        allow: "/" }, // Claude web
      { userAgent: "Googlebot",         allow: "/" }, // Google
      { userAgent: "Google-Extended",   allow: "/" }, // Google AI / Gemini training
      { userAgent: "Bingbot",           allow: "/" }, // Bing / Copilot
      { userAgent: "cohere-ai",         allow: "/" }, // Cohere
      { userAgent: "YouBot",            allow: "/" }, // You.com AI search
      { userAgent: "Applebot",          allow: "/" }, // Apple AI / Siri
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple AI training
      { userAgent: "Amazonbot",         allow: "/" }, // Amazon AI
      { userAgent: "CCBot",             allow: "/" }, // Common Crawl (used by many LLMs)
    ],
    sitemap: "https://harzotech.com.ng/sitemap.xml",
  };
}
