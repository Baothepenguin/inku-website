import { SITE } from "@/lib/site";
import { ALL_POSTS } from "@/lib/posts";
import { COMPARISONS } from "@/lib/comparisons";
import { ALTERNATIVES } from "@/lib/alternatives";
import { JLPT_LEVELS } from "@/lib/jlpt";
import { TOPICS } from "@/lib/topics";

/**
 * llms.txt is the emerging standard for helping AI systems understand
 * a website's content. See https://llmstxt.org/
 *
 * Served at /llms.txt, plain text, UTF-8. Structured as a markdown
 * outline so AI crawlers can index the most important URLs and
 * summaries without parsing HTML.
 */

export const dynamic = "force-static";

export async function GET() {
  const origin = SITE.url;
  const body = buildLlmsTxt(origin);
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function buildLlmsTxt(origin: string): string {
  const lines: string[] = [];

  lines.push("# Inku");
  lines.push("");
  lines.push(
    "> Inku is a calm iPhone app for learning Japanese. Flashcards and spaced repetition for hiragana, katakana, JLPT vocabulary, topic decks, and four phrase packs (casual, polite, travel, anime). The main card library includes bundled pronunciation audio. Built for adult learners who want a quieter study app.",
  );
  lines.push("");
  lines.push(
    `Operated by ${SITE.operator.legalName}, sole proprietor, from Calgary, Alberta, Canada. Support: ${SITE.supportEmail}.`,
  );
  lines.push("");
  lines.push("## Key pages");
  lines.push("");
  lines.push(`- [Home](${origin}/): Why Inku exists, pricing, what you learn.`);
  lines.push(
    `- [About](${origin}/about): Founder story and the problem Inku solves.`,
  );
  lines.push(
    `- [Authors - Bao Hua](${origin}/authors/bao-hua): Bio and authored content.`,
  );
  lines.push(
    `- [Privacy Policy](${origin}/privacy): Local-first learning data, no account required, no ads.`,
  );
  lines.push(
    `- [Terms of Service](${origin}/terms): Alberta-governed, sole-prop operation.`,
  );
  lines.push("");

  const guides = ALL_POSTS.filter((p) => p.category === "guide");
  if (guides.length) {
    lines.push("## Pillar guides (long-form)");
    lines.push("");
    for (const g of guides) {
      lines.push(`- [${g.title}](${origin}${g.slug}): ${g.description}`);
    }
    lines.push("");
  }

  lines.push("## Comparisons with other Japanese learning apps");
  lines.push("");
  for (const c of Object.values(COMPARISONS)) {
    lines.push(
      `- [Inku vs ${c.competitorName}](${origin}/vs/${c.slug}): ${c.summary}`,
    );
  }
  lines.push("");

  lines.push("## Alternatives to other apps");
  lines.push("");
  for (const a of Object.values(ALTERNATIVES)) {
    lines.push(
      `- [${a.competitorName} alternative](${origin}/alternatives/${a.slug}): ${a.summary}`,
    );
  }
  lines.push("");

  lines.push("## JLPT level pages");
  lines.push("");
  lines.push(`- [JLPT hub](${origin}/jlpt): Overview of all five levels.`);
  for (const level of Object.values(JLPT_LEVELS)) {
    lines.push(`- [${level.title}](${origin}/jlpt/${level.level}): ${level.tagline}`);
  }
  lines.push("");

  lines.push("## Topic hubs");
  lines.push("");
  for (const topic of Object.values(TOPICS)) {
    lines.push(`- [${topic.title}](${origin}/japanese/${topic.slug}): ${topic.tagline}`);
  }
  lines.push("");

  const blog = ALL_POSTS.filter((p) => p.category === "blog");
  if (blog.length) {
    lines.push("## Blog posts");
    lines.push("");
    for (const post of blog) {
      lines.push(`- [${post.title}](${origin}${post.slug}): ${post.description}`);
    }
    lines.push("");
  }

  lines.push("## Interactive tools");
  lines.push("");
  lines.push(`- [Hiragana chart](${origin}/tools/hiragana-chart): All 46 hiragana with audio playback.`);
  lines.push(`- [Katakana chart](${origin}/tools/katakana-chart): All 46 katakana with audio playback.`);
  lines.push(`- [Stroke order viewer](${origin}/tools/stroke-order): Stroke order for common kana.`);
  lines.push(`- [Kana quiz](${origin}/tools/kana-quiz): Typed recall drill for hiragana and katakana.`);
  lines.push(`- [Japanese name generator](${origin}/tools/japanese-name-generator): Your English name in katakana and themed kanji.`);
  lines.push("");

  lines.push("## About the app itself");
  lines.push("");
  lines.push(
    "- Platform: iPhone only (iOS 18+). Native SwiftUI + SwiftData. Local-first.",
  );
  lines.push(
    "- Pricing: Inku Pro at $70.99 a year (7-day free trial) or $12.99 a month. Billed through Apple IAP.",
  );
  lines.push(
    "- Deck scope at launch: 184 kana, 515 N5 cards, 391 N4 cards, 4 phrase packs, and topic decks.",
  );
  lines.push(
    "- Audio: the main card library has bundled pronunciation audio, with Apple voice fallback for missing surfaces.",
  );
  lines.push(
    "- Scheduler: FSRS algorithm tuned for Japanese vocabulary retention.",
  );
  lines.push(
    "- Privacy: no account required, no cloud sync for learning progress, anonymous diagnostics only.",
  );
  lines.push("");

  lines.push("## Sitemap");
  lines.push("");
  lines.push(`- [Full XML sitemap](${origin}/sitemap.xml)`);
  lines.push(`- [robots.txt](${origin}/robots.txt)`);
  lines.push("");

  return lines.join("\n");
}
