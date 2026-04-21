import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { COMPARISONS } from "@/lib/comparisons";
import { ALTERNATIVES } from "@/lib/alternatives";
import { JLPT_LEVELS } from "@/lib/jlpt";
import { TOPICS } from "@/lib/topics";
import { ALL_POSTS } from "@/lib/posts";
import { AUTHORS } from "@/lib/authors";

const origin = SITE.url;

const STATIC_PATHS: { path: string; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.7 },
  { path: "/privacy", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", changefreq: "yearly", priority: 0.3 },
  { path: "/blog", changefreq: "weekly", priority: 0.8 },
  { path: "/guides", changefreq: "monthly", priority: 0.9 },
  { path: "/vs", changefreq: "monthly", priority: 0.8 },
  { path: "/alternatives", changefreq: "monthly", priority: 0.8 },
  { path: "/jlpt", changefreq: "monthly", priority: 0.8 },
  { path: "/japanese", changefreq: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const today = now.toISOString();

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, changefreq, priority } of STATIC_PATHS) {
    entries.push({
      url: `${origin}${path}`,
      lastModified: today,
      changeFrequency: changefreq,
      priority,
    });
  }

  // Authors
  for (const slug of Object.keys(AUTHORS)) {
    entries.push({
      url: `${origin}/authors/${slug}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  // Comparison pages
  for (const slug of Object.keys(COMPARISONS)) {
    entries.push({
      url: `${origin}/vs/${slug}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Alternative pages
  for (const slug of Object.keys(ALTERNATIVES)) {
    entries.push({
      url: `${origin}/alternatives/${slug}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // JLPT level pages
  for (const level of Object.keys(JLPT_LEVELS)) {
    entries.push({
      url: `${origin}/jlpt/${level}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Topic hubs
  for (const topic of Object.keys(TOPICS)) {
    entries.push({
      url: `${origin}/japanese/${topic}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Blog posts, guides, etc. from the canonical post registry
  for (const post of ALL_POSTS) {
    const priority =
      post.category === "guide"
        ? 0.9
        : post.category === "blog"
          ? 0.7
          : 0.8;
    entries.push({
      url: `${origin}${post.slug}`,
      lastModified: post.updated ? new Date(post.updated).toISOString() : post.date,
      changeFrequency: "monthly",
      priority,
    });
  }

  // Tool pages (static list)
  const tools = [
    "hiragana-chart",
    "katakana-chart",
    "stroke-order",
    "kana-quiz",
    "japanese-name-generator",
  ];
  for (const t of tools) {
    entries.push({
      url: `${origin}/tools/${t}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
