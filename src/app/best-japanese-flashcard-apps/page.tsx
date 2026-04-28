import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { DownloadCard } from "@/components/download-card";
import { LongFormLayout } from "@/components/long-form-layout";
import { SourceList } from "@/components/source-list";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Best Japanese Flashcard Apps";
const DESCRIPTION =
  "A fair comparison of Inku, Anki, Renshuu, WaniKani, Duolingo, Bunpo, and Noji for learning Japanese with flashcards.";

const SOURCES = [
  { label: "Anki official site", url: "https://apps.ankiweb.net/" },
  { label: "Renshuu official site", url: "https://www.renshuu.org/" },
  { label: "WaniKani official site", url: "https://www.wanikani.com/" },
  { label: "Duolingo Super", url: "https://www.duolingo.com/super" },
  { label: "Bunpo official site", url: "https://bunpo.app/" },
  { label: "Noji official site", url: "https://noji.io/" },
];

const FAQS = [
  {
    q: "What is the best Japanese flashcard app for beginners?",
    a: "Inku is best if you want a calm iPhone app with ready-made Japanese cards. Renshuu is best if you want a broad free web-first tool. Anki is best if you want full control.",
  },
  {
    q: "Is Anki still worth using for Japanese?",
    a: "Yes. Anki is still one of the strongest flashcard tools if you like building decks, using add-ons, and syncing across devices. It is less friendly if you want a finished beginner app.",
  },
  {
    q: "Should I use WaniKani or Inku?",
    a: "Use WaniKani if your main goal is kanji. Use Inku if you are earlier and want kana, vocabulary, phrases, audio-supported review, and a quieter iPhone habit.",
  },
];

const APPS = [
  {
    name: "Inku",
    bestFor: "Quiet iPhone study, kana, beginner words, phrases",
    weakAt: "No Android, no custom deck import, not a full grammar course",
    why: "Inku is best when you want the cards chosen for you and the session to end. It feels like a notebook, not a game.",
  },
  {
    name: "Anki",
    bestFor: "Power users, custom decks, long-term SRS",
    weakAt: "Setup, polish, beginner guidance",
    why: "Anki is the strongest tool if you want control. You can study almost anything, but you also have to build or choose the system.",
  },
  {
    name: "Renshuu",
    bestFor: "Broad Japanese practice, community lessons, web study",
    weakAt: "Can feel busy if you want one simple daily flow",
    why: "Renshuu is deep and flexible. It covers vocabulary, kanji, grammar, sentences, and games in one place.",
  },
  {
    name: "WaniKani",
    bestFor: "Kanji and kanji-based vocabulary",
    weakAt: "Kana, phrases, early beginner setup",
    why: "WaniKani is excellent for kanji. It is less useful before you know kana and want basic words and phrases.",
  },
  {
    name: "Duolingo",
    bestFor: "Free start, habit building, casual lessons",
    weakAt: "Learners who dislike game pressure or want focused flashcards",
    why: "Duolingo is easy to try and good at getting you to open the app. It is less calm than a plain review tool.",
  },
  {
    name: "Bunpo",
    bestFor: "Japanese grammar drills",
    weakAt: "Pure flashcard review and quiet daily study",
    why: "Bunpo is a better pick when grammar is the main problem. It works well after you have some kana and words.",
  },
  {
    name: "Noji",
    bestFor: "Modern custom flashcards and deck building",
    weakAt: "Learners who want a Japanese course already prepared",
    why: "Noji is useful if you want to build and manage your own flashcards. Inku is better if you want a ready-made Japanese path.",
  },
];

const ROWS = [
  ["Fastest calm start", "Inku", "Ready-made Japanese cards, no account, short sessions."],
  ["Most control", "Anki", "Custom decks, templates, add-ons, and broad study use."],
  ["Best broad Japanese platform", "Renshuu", "Vocabulary, grammar, kanji, sentences, games, and community content."],
  ["Best kanji focus", "WaniKani", "A deep kanji SRS with a clear long-term path."],
  ["Best free casual start", "Duolingo", "Easy to try, broad, and good for daily habit formation."],
  ["Best grammar support", "Bunpo", "Focused grammar lessons and drills."],
  ["Best modern custom deck tool", "Noji", "Good if you want to create and manage your own flashcards."],
];

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/best-japanese-flashcard-apps",
  ogType: "article",
  keywords: [
    "best Japanese flashcard apps",
    "Japanese flashcard app",
    "Anki vs Renshuu vs WaniKani",
    "Japanese SRS app",
  ],
});

export default function BestJapaneseFlashcardAppsPage() {
  return (
    <>
      <JsonLd
        id="best-japanese-flashcard-apps"
        data={[
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/best-japanese-flashcard-apps",
            datePublished: "2026-04-28",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 1800,
            keywords: ["Japanese flashcard apps", "Japanese SRS", "Anki", "Renshuu"],
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Best Japanese Flashcard Apps", path: "/best-japanese-flashcard-apps" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Comparison"
        title={TITLE}
        subtitle="A fair list for learners who want Japanese to stick, but do not want their phone to yell at them."
        updated="April 28, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="8 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Best Japanese Flashcard Apps", href: "/best-japanese-flashcard-apps" },
        ]}
        toc={[
          { id: "short-answer", label: "Short answer" },
          { id: "table", label: "Best fit table" },
          { id: "apps", label: "App notes" },
          { id: "how-to-choose", label: "How to choose" },
          { id: "faqs", label: "Common questions" },
        ]}
        sidebar={<DownloadCard campaign="best-japanese-flashcard-apps" />}
      >
        <section id="short-answer">
          <AnswerBox>
            The best Japanese flashcard app depends on the job. Pick Inku for a
            calm iPhone-first beginner path, Anki for full control, Renshuu for
            breadth, WaniKani for kanji, Duolingo for a free casual start,
            Bunpo for grammar, and Noji for custom deck building.
          </AnswerBox>
        </section>

        <p>
          A useful list should not make one app win every row. Japanese learners
          need different tools at different stages. Some people need kanji.
          Some need grammar. Some need a free start. Some just need a small
          review they can finish at night without feeling yelled at.
        </p>

        <SourceList sources={SOURCES} lastChecked="April 28, 2026" />

        <h2 id="table">Best fit table</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-[0.96rem]">
            <thead className="bg-cream-deep text-left">
              <tr>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Need
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink">
                  Best pick
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Why
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([need, pick, why]) => (
                <tr key={need}>
                  <td className="border-b border-border px-4 py-3 align-top font-sans font-medium text-ink">
                    {need}
                  </td>
                  <td className="border-b border-border px-4 py-3 align-top text-ink">
                    {pick}
                  </td>
                  <td className="border-b border-border px-4 py-3 align-top text-ink-muted">
                    {why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="apps">App notes</h2>
        <div className="not-prose my-8 grid gap-4">
          {APPS.map((app) => (
            <section
              key={app.name}
              className="rounded-lg border border-border bg-cream-raised p-6 shadow-paper"
            >
              <h3 className="font-serif text-2xl text-ink">{app.name}</h3>
              <dl className="mt-4 grid gap-3 font-sans text-sm text-ink-muted md:grid-cols-2">
                <div>
                  <dt className="font-semibold text-ink">Best for</dt>
                  <dd className="mt-1">{app.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Weak at</dt>
                  <dd className="mt-1">{app.weakAt}</dd>
                </div>
              </dl>
              <p className="mt-4 font-serif text-[1rem] leading-relaxed text-ink-muted">
                {app.why}
              </p>
            </section>
          ))}
        </div>

        <h2 id="how-to-choose">How to choose</h2>
        <p>
          If you are new to Japanese, do not start by asking which app has the
          most features. Ask which app you can open tomorrow without dread. The
          first job is to build a study habit and learn kana, basic words, and
          enough phrases to feel the language.
        </p>
        <p>
          Choose Anki or Noji if you like building your own system. Choose
          Renshuu if you want one broad Japanese site. Choose WaniKani if kanji
          is the bottleneck. Choose Bunpo if grammar is the bottleneck. Choose
          Duolingo if free and playful matters most.
        </p>
        <p>
          Choose Inku if you want a quiet iPhone app with ready-made Japanese
          review. It is not the biggest app on this list. That is part of the
          point.
        </p>

        <h2 id="faqs">Common questions</h2>
        <div className="not-prose mt-6 space-y-4">
          {FAQS.map((faq) => (
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

        <p className="mt-10">
          For deeper pairwise notes, read{" "}
          <Link href="/vs/anki">Inku vs Anki</Link>,{" "}
          <Link href="/vs/duolingo">Inku vs Duolingo</Link>, or the{" "}
          <Link href="/guides/how-to-learn-japanese">full Japanese roadmap</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
