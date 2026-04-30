import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Explicitly welcome AI crawlers for citation visibility.
      // Each user-agent gets its own rule so a future disallow on a specific
      // bot does not implicitly block the others.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "meta-externalfetcher", allow: "/" },
      { userAgent: "Cohere-ai", allow: "/" },
      { userAgent: "cohere-training-data-crawler", allow: "/" },
      { userAgent: "Diffbot", allow: "/" },
      { userAgent: "MistralAI-User", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
