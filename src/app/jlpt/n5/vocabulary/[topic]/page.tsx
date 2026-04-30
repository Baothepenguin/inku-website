import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { VOCAB_THEMES } from "@/lib/vocab-themes";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return Object.values(VOCAB_THEMES)
    .filter((t) => t.level === "n5")
    .map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const data = VOCAB_THEMES[topic];
  if (!data || data.level !== "n5") return {};
  return pageMetadata({
    title: data.title,
    description: data.summary,
    path: `/jlpt/n5/vocabulary/${topic}`,
    ogType: "article",
    publishedTime: "2026-04-30T09:00:00Z",
    authors: ["Bao Hua"],
    keywords: [
      `JLPT N5 ${topic} vocabulary`,
      `Japanese ${topic} words`,
      `Japanese ${topic} list`,
      `N5 ${topic}`,
      `learn Japanese ${topic}`,
    ],
  });
}

export default async function N5VocabThemePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = VOCAB_THEMES[topic];
  if (!data || data.level !== "n5") notFound();

  const slug = `/jlpt/n5/vocabulary/${topic}`;

  return (
    <>
      <JsonLd
        id={`n5-vocab-${topic}`}
        data={[
          articleSchema({
            title: data.title,
            description: data.summary,
            slug,
            datePublished: "2026-04-30",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 800 + data.words.length * 15,
            about: ["JLPT N5", `Japanese ${topic} vocabulary`, "Japanese language"],
            keywords: [
              `JLPT N5 ${topic} vocabulary`,
              `Japanese ${topic} words`,
              `${topic} in Japanese`,
            ],
          }),
          itemListSchema({
            name: data.title,
            slug,
            items: data.words.map((w, i) => ({
              name: `${w.jp} (${w.kana}) — ${w.en}`,
              url: `${SITE.url}${slug}#word-${i}`,
              position: i + 1,
            })),
          }),
          faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "JLPT", path: "/jlpt" },
            { name: "N5", path: "/jlpt/n5" },
            { name: "Vocabulary", path: "/jlpt/n5" },
            { name: data.title, path: slug },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="JLPT N5 · Vocabulary by topic"
        title={data.title}
        subtitle={data.tagline}
        updated="April 30, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="6 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "JLPT", href: "/jlpt" },
          { name: "N5", href: "/jlpt/n5" },
          { name: data.title, href: slug },
        ]}
        toc={[
          { id: "answer", label: "Short answer" },
          { id: "intro", label: "Why this list" },
          { id: "words", label: `${data.words.length} words` },
          { id: "faq", label: "Common questions" },
          { id: "related", label: "Related" },
        ]}
        sidebar={<DownloadCard campaign={`n5-vocab-${topic}`} />}
      >
        <AnswerBox>{data.summary}</AnswerBox>

        <h2 id="intro">Why this list</h2>
        {data.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2 id="words">The {data.words.length} words</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-[0.96rem]">
            <thead className="bg-cream-deep text-left">
              <tr>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Kanji
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Kana
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Romaji
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  English
                </th>
              </tr>
            </thead>
            <tbody>
              {data.words.map((w, i) => (
                <tr key={`${w.jp}-${i}`} id={`word-${i}`}>
                  <td className="border-b border-border px-4 py-3">
                    <span className="jp text-lg text-ink">{w.jp}</span>
                  </td>
                  <td className="jp border-b border-border px-4 py-3 text-ink-muted">
                    {w.kana}
                  </td>
                  <td className="border-b border-border px-4 py-3 italic text-ink-muted">
                    {w.romaji}
                  </td>
                  <td className="border-b border-border px-4 py-3 text-ink">
                    <span>{w.en}</span>
                    {w.note && (
                      <span className="ml-2 font-sans text-xs text-ink-subtle">
                        ({w.note})
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="faq">Common questions</h2>
        <div className="not-prose mt-6 space-y-4">
          {data.faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-border bg-cream-raised p-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-serif text-lg text-ink">
                {faq.q}
                <span className="mt-1 shrink-0 font-sans text-xl text-matcha transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-serif text-[1rem] leading-relaxed text-ink-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <h2 id="related">Related</h2>
        <ul>
          {data.relatedLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          The {data.words.length} words above are part of Inku&apos;s 515-card
          N5 deck, all with bundled pronunciation audio and FSRS spaced
          review.{" "}
          <Link href="/">Try Inku free for 7 days</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
