import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { VOCAB_THEMES } from "@/lib/vocab-themes";
import { SITE } from "@/lib/site";

const TITLE = "JLPT N5 Vocabulary by Topic";
const SUBTITLE =
  "The full N5 vocabulary list, broken into the themes learners actually search for. Hand-curated, with kana, romaji, and pronunciation notes.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Browse JLPT N5 Japanese vocabulary by category — food, family, time, travel, body, weather, numbers, and verbs. Each list includes kana, romaji, and English with FAQs.",
  path: "/jlpt/n5/vocabulary",
});

export default function N5VocabularyIndexPage() {
  const n5Themes = Object.values(VOCAB_THEMES).filter((t) => t.level === "n5");
  return (
    <>
      <JsonLd
        id="n5-vocab-index"
        data={[
          itemListSchema({
            name: TITLE,
            slug: "/jlpt/n5/vocabulary",
            items: n5Themes.map((t, i) => ({
              name: t.title,
              url: `${SITE.url}/jlpt/n5/vocabulary/${t.slug}`,
              position: i + 1,
            })),
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "JLPT", path: "/jlpt" },
            { name: "N5", path: "/jlpt/n5" },
            { name: "Vocabulary by topic", path: "/jlpt/n5/vocabulary" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="JLPT N5 · Vocabulary"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "JLPT", href: "/jlpt" },
          { name: "N5", href: "/jlpt/n5" },
          { name: "Vocabulary", href: "/jlpt/n5/vocabulary" },
        ]}
        sidebar={<DownloadCard campaign="n5-vocab-index" />}
      >
        <AnswerBox>
          JLPT N5 covers ~800 vocabulary words. The {n5Themes.length} topical
          lists below organize the highest-frequency subset by category — food,
          family, time, travel, body, weather, numbers, and verbs — so you can
          drill the words you need next, not the words alphabetically before
          them.
        </AnswerBox>

        <p>
          Most N5 vocabulary lists are dumped alphabetically, which is the
          worst possible order for actually learning. The lists below mirror
          how Inku&apos;s 515-card N5 deck is organized: by theme, with the
          highest-frequency words first inside each theme.
        </p>

        <ul className="not-prose mt-10 grid gap-4 md:grid-cols-2">
          {n5Themes.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/jlpt/n5/vocabulary/${t.slug}`}
                className="group block rounded-lg border border-border bg-cream-raised p-6 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif text-xl text-ink group-hover:text-matcha">
                    {t.title}
                  </h2>
                  <span className="whitespace-nowrap font-sans text-xs uppercase tracking-breath text-ink-subtle">
                    {t.words.length} words
                  </span>
                </div>
                <p className="mt-3 font-serif text-[0.98rem] leading-snug text-ink-muted">
                  {t.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          For the broader study plan, see the{" "}
          <Link href="/jlpt/n5">JLPT N5 study guide</Link> and the full{" "}
          <Link href="/guides/jlpt-n5-vocabulary">N5 vocabulary guide</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
