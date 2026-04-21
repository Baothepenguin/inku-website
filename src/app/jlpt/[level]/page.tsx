import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { Callout } from "@/components/callout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { JLPT_LEVELS } from "@/lib/jlpt";

export async function generateStaticParams() {
  return Object.keys(JLPT_LEVELS).map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;
  const data = JLPT_LEVELS[level];
  if (!data) return {};
  return pageMetadata({
    title: `${data.title}: Vocabulary, Grammar, and Study Plan`,
    description: data.tagline,
    path: `/jlpt/${level}`,
    keywords: [
      `JLPT ${data.level.toUpperCase()}`,
      `${data.level.toUpperCase()} vocabulary`,
      `${data.level.toUpperCase()} grammar`,
      `${data.level.toUpperCase()} study plan`,
    ],
  });
}

export default async function JlptLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const data = JLPT_LEVELS[level];
  if (!data) notFound();

  const title = `${data.title}: Vocabulary, Grammar, and Study Plan`;

  return (
    <>
      <JsonLd
        id={`jlpt-${level}`}
        data={[
          articleSchema({
            title,
            description: data.tagline,
            slug: `/jlpt/${level}`,
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 2200,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "JLPT", path: "/jlpt" },
            { name: data.title, path: `/jlpt/${level}` },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow={`JLPT · ${data.title}`}
        title={title}
        subtitle={data.tagline}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="10 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "JLPT", href: "/jlpt" },
          { name: data.title, href: `/jlpt/${level}` },
        ]}
        toc={[
          { id: "overview", label: "Overview" },
          { id: "can-do", label: "What you can do at this level" },
          { id: "vocab", label: "Vocabulary examples" },
          { id: "grammar", label: "Grammar examples" },
          { id: "study-plan", label: "Study plan" },
          { id: "next", label: "Related guides" },
        ]}
        sidebar={<DownloadCard campaign={`jlpt-${level}`} />}
      >
        {data.status === "coming-soon" && (
          <Callout tone="note" title="Skeletal page">
            <p>
              Deeper {data.title} coverage lands as Inku&apos;s curriculum
              grows. This page gives you a map of the level and links to the
              guides that cover the prerequisites.
            </p>
          </Callout>
        )}

        <AnswerBox>{data.description}</AnswerBox>

        <h2 id="overview">Overview</h2>
        <dl className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-cream-raised p-5">
            <dt className="label-eyebrow mb-2">Vocabulary target</dt>
            <dd className="font-serif text-3xl text-ink">
              {data.wordCount.toLocaleString()}
              <span className="ml-1 text-sm text-ink-muted">words</span>
            </dd>
          </div>
          <div className="rounded-lg border border-border bg-cream-raised p-5">
            <dt className="label-eyebrow mb-2">Kanji target</dt>
            <dd className="font-serif text-3xl text-ink">
              {data.kanjiCount}
              <span className="ml-1 text-sm text-ink-muted">kanji</span>
            </dd>
          </div>
          <div className="rounded-lg border border-border bg-cream-raised p-5">
            <dt className="label-eyebrow mb-2">Study hours</dt>
            <dd className="font-serif text-lg text-ink">
              {data.hoursEstimate}
            </dd>
          </div>
        </dl>

        <h2 id="can-do">What you can do at this level</h2>
        <ul>
          {data.whatYouCanDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 id="vocab">Vocabulary examples</h2>
        <p>A small sample of the kind of words that appear at this level.</p>
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
                  English
                </th>
              </tr>
            </thead>
            <tbody>
              {data.vocabularyExamples.map((v) => (
                <tr key={v.jp}>
                  <td className="border-b border-border px-4 py-3">
                    <span className="jp text-lg text-ink">{v.jp}</span>
                  </td>
                  <td className="border-b border-border px-4 py-3 jp text-ink-muted">
                    {v.kana}
                  </td>
                  <td className="border-b border-border px-4 py-3 text-ink">
                    {v.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="grammar">Grammar examples</h2>
        <div className="not-prose my-6 space-y-4">
          {data.grammarExamples.map((g) => (
            <div
              key={g.pattern}
              className="rounded-lg border border-border bg-cream-raised p-5"
            >
              <p className="jp text-xl text-ink">{g.pattern}</p>
              <p className="mt-1 font-sans text-sm font-medium text-matcha">
                {g.meaning}
              </p>
              <p className="jp mt-3 text-lg text-ink">{g.example}</p>
            </div>
          ))}
        </div>

        <h2 id="study-plan">Study plan</h2>
        <ol>
          {data.studyPlan.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <h2 id="next">Related guides</h2>
        <ul>
          {data.relatedPaths.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          Inku&apos;s current curriculum focuses on N5 (complete) and N4
          (expanding monthly).{" "}
          <Link href="/">Start the 7-day free trial</Link> to see the full
          deck.
        </p>
      </LongFormLayout>
    </>
  );
}
