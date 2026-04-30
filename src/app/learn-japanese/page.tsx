import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { Callout } from "@/components/callout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  itemListSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const TITLE = "Learn Japanese: A Calm, Practical Guide for Adults";
const SUBTITLE =
  "Where to start, what order, what tools, and how long it really takes. The whole map of Japanese learning in one page.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Learn Japanese as an adult: a complete map of where to start, what to study, which tools to use, and how long it takes from kana to N3. With links to every guide and tool on the site.",
  path: "/learn-japanese",
  ogType: "article",
  publishedTime: "2026-04-30T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "learn Japanese",
    "how to learn Japanese",
    "Japanese for beginners",
    "Japanese learning roadmap",
    "best way to learn Japanese",
    "learn Japanese online",
    "Japanese self-study",
    "Japanese app for adults",
  ],
});

const TOC = [
  { id: "answer", label: "Short answer" },
  { id: "where-to-start", label: "Where to start" },
  { id: "phases", label: "The five phases" },
  { id: "tools", label: "Tools at each phase" },
  { id: "time", label: "How long it actually takes" },
  { id: "reading", label: "Read all the related guides" },
  { id: "faq", label: "Common questions" },
];

const FAQS = [
  {
    q: "What's the fastest way to learn Japanese as an adult?",
    a: "Build kana first (2 weeks), then drill 500-800 N5 vocabulary words with spaced repetition (3 months) while picking up basic grammar in parallel. After 5-6 months you can read simple Japanese; after 12-18 months at 30-45 min/day you reach conversational (N4-N3).",
  },
  {
    q: "Can I learn Japanese in 6 months?",
    a: "You can reach JLPT N5 in 6 months at 30 minutes a day. That's enough to read children's books, hold a slow conversation about daily life, and order food in Japan. Conversational Japanese on harder topics takes 12-18 months minimum.",
  },
  {
    q: "Do I need to learn kanji to speak Japanese?",
    a: "No. Spoken Japanese works without kanji. But reading anything aimed at adults requires kanji — you can't function in Japan long-term without learning at least the first 500-1000 jōyō kanji.",
  },
  {
    q: "Should I take JLPT tests?",
    a: "Only if your career, school, or visa needs them. For most learners, the JLPT syllabus is more useful as a checklist than a certification target. The test itself is optional; the levels are useful milestones either way.",
  },
  {
    q: "Is Japanese harder than other languages for English speakers?",
    a: "Yes — the US Foreign Service Institute classifies Japanese as Category IV (hardest), requiring ~2,200 hours for professional proficiency. The grammar is structurally simpler than English, but the writing system, politeness levels, and lack of cognates make the time-to-fluency long.",
  },
  {
    q: "Do I need a teacher or can I self-study?",
    a: "Both work. Self-study covers 80% of the journey if you're disciplined. The remaining 20% — production, real-time conversation, pronunciation feedback — benefits from a tutor (italki, HelloTalk, in-person) once you're past N5.",
  },
];

const STEPS = [
  {
    name: "Phase 1 — Kana foundation (2 weeks)",
    text: "Learn all 46 hiragana, then all 46 katakana. Use mnemonics and a 3-day schedule per script. Read real-world Japanese in week 2 to cement the shapes.",
  },
  {
    name: "Phase 2 — N5 vocabulary + basic grammar (3 months)",
    text: "Drill 500-800 N5 words with spaced repetition and bundled audio. Cover the ~30 N5 grammar patterns in parallel. Aim for 30 minutes a day, 5-15 new cards.",
  },
  {
    name: "Phase 3 — N4 expansion + reading (3 months)",
    text: "Add ~700 N4 words and ~60 grammar patterns. Start reading NHK Easy News, beginner manga with furigana, and graded readers. Reading time grows to 30+ minutes a day.",
  },
  {
    name: "Phase 4 — Production and immersion (6 months)",
    text: "Start writing journal entries in Japanese. Use italki or HelloTalk for tutoring. Watch Japanese TV with Japanese subtitles. Aim for N3 vocabulary (~3,750 words total) and the cultural exposure that turns vocabulary into fluency.",
  },
  {
    name: "Phase 5 — Maintenance and depth (forever)",
    text: "Daily reading of native material. Weekly output (writing, speaking). The SRS deck shrinks; immersion grows. This phase has no graduation — it just becomes part of life.",
  },
];

const HUB_LINKS: { href: string; label: string; group: string }[] = [
  // Foundation
  { href: "/guides/learn-hiragana", label: "Complete hiragana guide", group: "Foundation" },
  { href: "/guides/learn-katakana", label: "Complete katakana guide", group: "Foundation" },
  { href: "/japanese/hiragana", label: "Hiragana topic hub", group: "Foundation" },
  { href: "/japanese/katakana", label: "Katakana topic hub", group: "Foundation" },
  { href: "/tools/hiragana-chart", label: "Interactive hiragana chart", group: "Foundation" },
  { href: "/tools/katakana-chart", label: "Interactive katakana chart", group: "Foundation" },
  { href: "/tools/kana-quiz", label: "Kana recall quiz", group: "Foundation" },
  { href: "/tools/stroke-order", label: "Kana stroke order viewer", group: "Foundation" },

  // Vocabulary + JLPT
  { href: "/jlpt", label: "JLPT level overview (N5–N1)", group: "Vocabulary + JLPT" },
  { href: "/jlpt/n5", label: "JLPT N5 study guide", group: "Vocabulary + JLPT" },
  { href: "/jlpt/n4", label: "JLPT N4 study guide", group: "Vocabulary + JLPT" },
  { href: "/guides/jlpt-n5-vocabulary", label: "JLPT N5 vocabulary list (515 words)", group: "Vocabulary + JLPT" },

  // Grammar + structure
  { href: "/japanese/grammar", label: "Japanese grammar overview", group: "Grammar + structure" },
  { href: "/japanese/particles", label: "Japanese particles", group: "Grammar + structure" },
  { href: "/guides/japanese-particles-masterclass", label: "Particles masterclass", group: "Grammar + structure" },
  { href: "/japanese/verbs", label: "Japanese verbs", group: "Grammar + structure" },
  { href: "/japanese/numbers", label: "Japanese numbers + counters", group: "Grammar + structure" },
  { href: "/japanese/keigo", label: "Keigo (honorific Japanese)", group: "Grammar + structure" },

  // Pronunciation + script
  { href: "/japanese/pronunciation", label: "Pronunciation overview", group: "Pronunciation + script" },
  { href: "/japanese/pitch-accent", label: "Pitch accent explained", group: "Pronunciation + script" },
  { href: "/japanese/kanji", label: "Kanji topic hub", group: "Pronunciation + script" },
  { href: "/japanese/phrases", label: "Essential Japanese phrases", group: "Pronunciation + script" },

  // Method
  { href: "/guides/how-to-learn-japanese", label: "Six-phase roadmap", group: "Method" },
  { href: "/guides/spaced-repetition-explained", label: "Spaced repetition explained", group: "Method" },
  { href: "/blog/streak-trap-vs-study-habit", label: "Streak trap vs study habit", group: "Method" },
  { href: "/blog/why-inku-teaches-five-cards-at-a-time", label: "Why small batches work", group: "Method" },

  // Tool comparison
  { href: "/best-japanese-flashcard-apps", label: "Best Japanese flashcard apps", group: "Tools + comparisons" },
  { href: "/vs/duolingo", label: "Inku vs Duolingo", group: "Tools + comparisons" },
  { href: "/vs/anki", label: "Inku vs Anki", group: "Tools + comparisons" },
  { href: "/vs/wanikani", label: "Inku vs WaniKani", group: "Tools + comparisons" },
  { href: "/vs/japanesepod101", label: "Inku vs JapanesePod101", group: "Tools + comparisons" },
];

export default function LearnJapanesePage() {
  const groups = Array.from(new Set(HUB_LINKS.map((l) => l.group)));
  return (
    <>
      <JsonLd
        id="learn-japanese-hub"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/learn-japanese",
            datePublished: "2026-04-30",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            about: [
              "Japanese language",
              "Adult language acquisition",
              "JLPT",
              "Hiragana",
              "Katakana",
              "Kanji",
              "Spaced repetition",
            ],
            keywords: [
              "learn Japanese",
              "how to learn Japanese",
              "Japanese roadmap",
              "Japanese for beginners",
              "Japanese self-study",
            ],
          }),
          howToSchema({
            name: "How to learn Japanese as an adult",
            description:
              "A five-phase plan for self-studying Japanese from zero to conversational, with realistic time estimates and concrete tool picks.",
            slug: "/learn-japanese",
            totalTime: "P14M",
            steps: STEPS,
          }),
          itemListSchema({
            name: "Inku Japanese learning hub",
            slug: "/learn-japanese",
            items: HUB_LINKS.map((l, i) => ({
              name: l.label,
              url: `${SITE.url}${l.href}`,
              position: i + 1,
            })),
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learn Japanese", path: "/learn-japanese" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Master hub"
        title={TITLE}
        subtitle={SUBTITLE}
        updated="April 30, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="14 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Learn Japanese", href: "/learn-japanese" },
        ]}
        toc={TOC}
        sidebar={<DownloadCard campaign="learn-japanese-hub" />}
      >
        <AnswerBox>
          To learn Japanese as an adult: spend 2 weeks on hiragana and
          katakana, 3 months on JLPT N5 vocabulary with spaced
          repetition, then 12-18 months building toward N4-N3 with
          reading, listening, and tutoring. Plan on 30-45 minutes a day.
          Total time to conversational Japanese is roughly 12-18 months.
        </AnswerBox>

        <h2 id="where-to-start">Where to start</h2>
        <p>
          The single biggest mistake adults make with Japanese is
          starting in the wrong place. Most beginner apps assume you
          already know hiragana. Most kanji apps assume you already
          have a few hundred words. Most grammar books assume you can
          recognize all three scripts.
        </p>
        <p>
          The actual order is: <strong>kana, then vocabulary, then
          grammar, then production, then immersion</strong>. Skipping
          ahead feels productive for two weeks and then collapses
          because the foundation is missing.
        </p>
        <p>
          If you have never touched Japanese before, start with the{" "}
          <Link href="/guides/learn-hiragana">hiragana guide</Link>.
          Three days of focused study covers all 46 characters.{" "}
          <Link href="/guides/learn-katakana">Katakana</Link> follows
          the same week. After that, you have the foundation every
          other Japanese tool assumes.
        </p>

        <Callout tone="tip" title="A two-week starter">
          <p>
            Week 1: hiragana to recognition. Week 2: katakana to
            recognition, plus the first 50 N5 vocabulary words. By the
            end of week 2 you can read children&apos;s books and
            decode product labels. That feeling — Japanese is now
            decodable — is what makes everything afterward easier.
          </p>
        </Callout>

        <h2 id="phases">The five phases</h2>
        <p>
          Most adult Japanese learners go through the same five
          phases. The phases are not strictly sequential — you usually
          overlap them by a few weeks — but the rough shape holds.
        </p>
        <ol>
          <li>
            <strong>Phase 1 — Kana foundation (2 weeks).</strong> All
            46 hiragana, all 46 katakana, plus dakuten and yōon.
            Recognition before writing.
          </li>
          <li>
            <strong>Phase 2 — N5 vocabulary and grammar (3
            months).</strong> The first 500-800 words and the ~30 core
            N5 grammar patterns. Spaced repetition does the heavy
            lifting.
          </li>
          <li>
            <strong>Phase 3 — N4 expansion and reading (3
            months).</strong> Add ~700 N4 words and ~60 grammar
            patterns. Start reading{" "}
            <a
              href="https://www3.nhk.or.jp/news/easy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              NHK Easy News
            </a>{" "}
            and beginner manga.
          </li>
          <li>
            <strong>Phase 4 — Production and immersion (6
            months).</strong> Writing in Japanese, tutoring on{" "}
            <a
              href="https://www.italki.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              italki
            </a>
            , Japanese subtitles. Volume of input matters more than
            structure here.
          </li>
          <li>
            <strong>Phase 5 — Maintenance and depth (forever).</strong>{" "}
            Daily native reading. Weekly output. The SRS deck shrinks;
            immersion expands. There is no graduation.
          </li>
        </ol>
        <p>
          For the full breakdown with month-by-month milestones, see the{" "}
          <Link href="/guides/how-to-learn-japanese">six-phase
          roadmap</Link>. This page is the higher-level orientation.
        </p>

        <h2 id="tools">Tools at each phase</h2>
        <p>
          You don&apos;t need many tools. You need the right two or
          three at each phase, plus the willingness to swap them out as
          the phase changes.
        </p>
        <ul>
          <li>
            <strong>Phase 1 (kana):</strong> Inku for spaced kana
            review with bundled audio.{" "}
            <Link href="/tools/hiragana-chart">Hiragana chart</Link>{" "}
            and{" "}
            <Link href="/tools/katakana-chart">katakana chart</Link>{" "}
            for at-a-glance reference.
          </li>
          <li>
            <strong>Phase 2 (N5 vocabulary + basic grammar):</strong>{" "}
            Inku for spaced vocabulary review. A grammar source — Tae
            Kim&apos;s free guide or Genki — for grammar patterns.
            Optional: Bunpro for grammar drilling.
          </li>
          <li>
            <strong>Phase 3 (N4 + reading):</strong> Inku still
            handles vocabulary. Add NHK Easy and graded readers
            (Satori Reader is the polished paid option). Start
            JapanesePod101 for listening.
          </li>
          <li>
            <strong>Phase 4 (production):</strong> Italki or HelloTalk
            for human feedback. LangCorrect for free written feedback.
            Inku and grammar tools stay; production is additive.
          </li>
          <li>
            <strong>Phase 5 (maintenance):</strong> Native podcasts,
            novels, manga without furigana. Inku shrinks to a 5-minute
            daily review. New cards trickle in from real reading, not
            from textbooks.
          </li>
        </ul>
        <p>
          For deeper tool comparisons, see{" "}
          <Link href="/best-japanese-flashcard-apps">best Japanese
          flashcard apps</Link> and the{" "}
          <Link href="/vs">comparisons hub</Link>.
        </p>

        <h2 id="time">How long it actually takes</h2>
        <p>
          Adults reach JLPT N5 in 3-6 months at 30 minutes a day.
          JLPT N4 in another 6-12 months. JLPT N3 — the threshold
          where Japanese starts feeling usable — in 18-24 months
          total. Conversational fluency takes 3-5 years; reading
          fluency takes 5-7.
        </p>
        <p>
          The single biggest variable is daily consistency, not
          genius. People who study 20 minutes every day beat people
          who study 2 hours twice a week. Calendar time is irrelevant;
          only contact hours matter.
        </p>
        <p>
          The US Foreign Service Institute estimates that English
          speakers need roughly 2,200 contact hours to reach
          professional working proficiency in Japanese. That maps
          to about 4-5 years of consistent self-study at 60-90 minutes
          a day, or 2-3 years of immersion living in Japan.
        </p>

        <h2 id="reading">Read all the related guides</h2>
        <p>
          Inku ships hand-written guides for every phase of this
          roadmap. Here&apos;s the full library, grouped by what
          you&apos;re working on.
        </p>

        <div className="not-prose mt-8 space-y-8">
          {groups.map((group) => {
            const links = HUB_LINKS.filter((l) => l.group === group);
            return (
              <div key={group}>
                <h3 className="font-serif text-xl text-ink">{group}</h3>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-baseline justify-between gap-3 rounded-md border border-border/70 bg-cream-raised px-4 py-3 font-serif text-[1.02rem] text-ink transition-colors hover:border-matcha hover:text-matcha"
                      >
                        <span>{link.label}</span>
                        <span className="font-sans text-xs text-ink-subtle group-hover:text-matcha">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <h2 id="faq">Common questions</h2>
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

        <p className="mt-12">
          Most of the daily work in this roadmap is what Inku does:
          spaced flashcard review with bundled audio, kana drilling,
          and a calm finite session you can return to without shame.{" "}
          <Link href="/">Start the 7-day free trial</Link> — it costs
          nothing and you keep the kana guide regardless.
        </p>
      </LongFormLayout>
    </>
  );
}
