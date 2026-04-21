import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { JLPT_LEVELS } from "@/lib/jlpt";

const TITLE = "JLPT Levels: N5 to N1 Explained";
const SUBTITLE =
  "What the five JLPT levels cover, how long each takes, and which tools fit at each stage.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "A complete map of the JLPT: the five levels, vocabulary counts, kanji counts, and study-time estimates. With study plans for N5, N4, and a sneak peek at N3 through N1.",
  path: "/jlpt",
  keywords: [
    "JLPT levels",
    "JLPT N5 N4 N3 N2 N1",
    "JLPT explained",
    "how hard is JLPT",
  ],
});

const LEVEL_ORDER: ("n5" | "n4" | "n3" | "n2" | "n1")[] = [
  "n5",
  "n4",
  "n3",
  "n2",
  "n1",
];

export default function JlptIndexPage() {
  return (
    <>
      <JsonLd
        id="jlpt-index"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "JLPT", path: "/jlpt" },
        ])}
      />
      <LongFormLayout
        eyebrow="JLPT hub"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "JLPT", href: "/jlpt" },
        ]}
        sidebar={<DownloadCard campaign="jlpt-hub" />}
      >
        <p>
          The Japanese-Language Proficiency Test (JLPT) is the standard
          certification for non-native Japanese speakers. It has five
          levels, from N5 (beginner) to N1 (near-native). Each level has a
          rough vocabulary and kanji target, and the jumps between levels
          are non-linear: N3 takes roughly twice as long as N4, and N2 is a
          serious commitment.
        </p>

        <p>
          You do not have to take the JLPT to learn Japanese. Most learners
          use the levels as milestones rather than certification goals.
        </p>

        <ul className="not-prose my-10 grid gap-4">
          {LEVEL_ORDER.map((key) => {
            const level = JLPT_LEVELS[key];
            return (
              <li key={key}>
                <Link
                  href={`/jlpt/${key}`}
                  className="group block rounded-lg border border-border bg-cream-raised p-6 transition-all hover:-translate-y-0.5 hover:shadow-paper"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="label-eyebrow mb-2 text-matcha">
                        {level.title}
                      </p>
                      <h2 className="font-serif text-xl text-ink group-hover:text-matcha">
                        {level.tagline}
                      </h2>
                    </div>
                    <div className="text-right font-sans text-sm text-ink-muted">
                      <p>
                        <strong className="text-ink">
                          {level.wordCount.toLocaleString()}
                        </strong>{" "}
                        words
                      </p>
                      <p>
                        <strong className="text-ink">{level.kanjiCount}</strong>{" "}
                        kanji
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 font-serif text-[0.98rem] text-ink-muted">
                    {level.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <p>
          Inku&apos;s current deck covers N5 completely and is actively
          expanding through N4.{" "}
          <Link href="/jlpt/n5">Start with N5</Link>, or read{" "}
          <Link href="/guides/how-to-learn-japanese">
            the full learning roadmap
          </Link>{" "}
          for how JLPT fits into real study.
        </p>
      </LongFormLayout>
    </>
  );
}
