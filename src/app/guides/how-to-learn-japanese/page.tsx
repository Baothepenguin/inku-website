import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { Callout } from "@/components/callout";
import { QuoteBlock } from "@/components/quote-block";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "How to Learn Japanese: An Honest Roadmap";
const SUBTITLE =
  "If I had to learn Japanese from scratch again, this is exactly what I would do. Six phases, honest time estimates, specific tools.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "A realistic 6-phase roadmap for learning Japanese as an adult, from hiragana to conversational fluency. With time estimates, tool picks, and common failure modes.",
  path: "/guides/how-to-learn-japanese",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "how to learn japanese",
    "japanese roadmap",
    "learn japanese adults",
    "japanese learning plan",
    "japanese fluency timeline",
  ],
});

const TOC = [
  { id: "answer", label: "Short answer" },
  { id: "phase-1", label: "Phase 1: Kana (2 weeks)" },
  { id: "phase-2", label: "Phase 2: N5 core (3 months)" },
  { id: "phase-3", label: "Phase 3: Grammar foundation (3 months)" },
  { id: "phase-4", label: "Phase 4: Real input (6 months)" },
  { id: "phase-5", label: "Phase 5: Output (3 months)" },
  { id: "phase-6", label: "Phase 6: Maintenance (forever)" },
  { id: "how-much", label: "How much time per day?" },
  { id: "tools", label: "Tool picks at each phase" },
  { id: "failure", label: "The four failure modes" },
  { id: "faq", label: "Common questions" },
];

const FAQS = [
  {
    q: "How long does it actually take to learn Japanese?",
    a: "From zero, most adult learners reach conversational Japanese (JLPT N4-N3 level) in 12 to 18 months at roughly 30 to 45 minutes a day. True fluency (comfortable with novels, TV, and casual conversations) takes 3 to 5 years. The US Foreign Service Institute rates Japanese a Category IV language, requiring 2,200+ hours for professional proficiency in English speakers.",
  },
  {
    q: "Can I learn Japanese without living in Japan?",
    a: "Yes. Living in Japan accelerates listening and speaking, but the grammar and vocabulary work is the same whether you're in Osaka or Ottawa. With the internet, you can reach conversational level from anywhere.",
  },
  {
    q: "Do I need a teacher or a class?",
    a: "Not at the beginner stage. Self-study with a structured curriculum (like Genki or an app like Inku) covers the first year just fine. A teacher or conversation partner becomes valuable around 6 months in, when you need live practice in output.",
  },
  {
    q: "Should I learn kanji from day one?",
    a: "No. Learn hiragana and katakana first, then start kanji after you've got about 100 words of vocabulary. Kanji in a vacuum is forgetting-curve food. Kanji attached to words you use is memorable.",
  },
  {
    q: "Is it better to focus on reading or speaking first?",
    a: "Input first, then output. Spend your first 6 months on reading and listening. Speaking and writing come online once you have a solid base of comprehensible Japanese to work from.",
  },
];

export default function HowToLearnJapanesePage() {
  return (
    <>
      <JsonLd
        id="how-to-learn"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/guides/how-to-learn-japanese",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 5600,
            keywords: ["how to learn japanese", "japanese roadmap"],
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            {
              name: "How to Learn Japanese",
              path: "/guides/how-to-learn-japanese",
            },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Pillar guide"
        title={TITLE}
        subtitle={SUBTITLE}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="32 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          {
            name: "How to Learn Japanese",
            href: "/guides/how-to-learn-japanese",
          },
        ]}
        toc={TOC}
        sidebar={<DownloadCard campaign="how-to-learn" />}
      >
        <AnswerBox>
          Plan on 3 to 6 months to cover hiragana, katakana, and N5
          vocabulary at 15 minutes a day. Reaching conversational (N4)
          fluency takes most adult learners 12 to 18 months of consistent
          work, 30 to 45 minutes daily. Input before output, vocabulary
          before grammar rules, consistency before intensity.
        </AnswerBox>

        <p>
          I am writing this for the version of myself who started Japanese
          on a Tuesday night in 2023 with a Duolingo tab open and no plan.
          He wasted four months on owl lessons, another two months trying
          to brute-force Anki, and then a final month drifting through
          textbooks before landing on something that stuck.
        </p>
        <p>
          This is the plan I wish I had on that first Tuesday. Six phases,
          rough time estimates, and specific tools. Follow it or fork it;
          either works as long as the underlying shape does.
        </p>

        <h2 id="phase-1">Phase 1: Kana (first two weeks)</h2>
        <p>
          Goal: you can read any hiragana or katakana word aloud, slowly.
        </p>
        <p>
          Do not skip this. Every minute you spend reading Japanese in
          romaji is a minute not building the visual pattern recognition
          that makes reading automatic. Most adults get through hiragana in
          three focused days and katakana in another three. Two weeks gives
          you comfortable buffer.
        </p>
        <p>
          See <Link href="/guides/learn-hiragana">the hiragana guide</Link>{" "}
          and <Link href="/guides/learn-katakana">the katakana guide</Link>{" "}
          for the exact schedule and mnemonic system.
        </p>

        <Callout tone="tip" title="What to do if you already know kana">
          <p>
            Skip to Phase 2 but do a recognition drill daily for the first
            month anyway. Decay is real. It costs you ten minutes a week
            and saves you from relearning in three months.
          </p>
        </Callout>

        <h2 id="phase-2">Phase 2: N5 core vocabulary (months 1-3)</h2>
        <p>
          Goal: 500-800 high-frequency words, heard and read.
        </p>
        <p>
          Vocabulary is the single highest-leverage thing you can do in the
          first three months. Grammar without words is theory; grammar with
          words is language. Work through the JLPT N5 list (roughly 800
          words) in a spaced-repetition system. Inku&apos;s N5 deck is
          organized by category and frequency, with audio support.
        </p>
        <p>
          Daily targets:
        </p>
        <ul>
          <li>10-15 new words per day</li>
          <li>All daily reviews (usually 20-40 minutes total)</li>
          <li>Speak each word aloud at least once</li>
        </ul>
        <p>
          At this pace, you will finish N5 vocabulary in 60-80 days. Some
          days you will skip. Some weeks you will push harder. The average
          matters.
        </p>

        <h2 id="phase-3">Phase 3: Grammar foundation (months 4-6)</h2>
        <p>
          Goal: comfortable with the 100 most common grammar patterns.
        </p>
        <p>
          By month four you have enough vocabulary to anchor grammar
          lessons. Pick one of:
        </p>
        <ul>
          <li>
            <strong>Tofugu&apos;s Genki Companion</strong> if you like
            structured lessons with exercises.
          </li>
          <li>
            <strong>Tae Kim&apos;s Guide to Japanese</strong> (free) if you
            want a linguistic, pattern-heavy reference.
          </li>
          <li>
            <strong>Bunpro</strong> if you want SRS-style grammar drilling.
          </li>
        </ul>
        <p>
          Do one grammar point per day. Read the explanation. Study five
          example sentences. Add the pattern to your SRS deck or a notebook.
          In three months you will have covered the backbone of N4 and most
          of N5 grammar.
        </p>

        <h2 id="phase-4">Phase 4: Real input (months 7-12)</h2>
        <p>
          Goal: listen to or read Japanese every day for 15 minutes.
        </p>
        <p>
          This is the phase that separates hobbyists from learners. By
          month seven you have enough vocabulary and grammar to start
          consuming real Japanese. Not textbook sentences, but native
          content aimed at Japanese speakers.
        </p>
        <p>
          Start here:
        </p>
        <ul>
          <li>
            <strong>Easy NHK News</strong> (NHK Web Easy). Real news,
            rewritten in simple Japanese with furigana. Ten minutes a day.
          </li>
          <li>
            <strong>Satori Reader</strong>. Graded readers with audio and
            inline grammar notes.
          </li>
          <li>
            <strong>Japanese podcasts for learners</strong>. Nihongo con
            Teppei, Learn Japanese with Noriko. Listen in the car, on walks.
          </li>
          <li>
            <strong>Children&apos;s TV</strong>. Shimajiro, Doraemon. Low
            vocabulary, high repetition.
          </li>
        </ul>
        <p>
          Do not try to understand 100 percent. Aim for 70-80 percent
          comprehension, let the rest go, and come back to new words in
          your SRS.
        </p>

        <h2 id="phase-5">Phase 5: Output (months 13-15)</h2>
        <p>
          Goal: produce Japanese, badly, every day.
        </p>
        <p>
          This is where most learners stall. You have to speak and write to
          get past the comprehension ceiling. The hard part is that
          speaking feels awful for the first month because your brain can
          recognize sentences it cannot yet produce.
        </p>
        <p>
          Tools:
        </p>
        <ul>
          <li>
            <strong>italki</strong> for paid conversation partners. $10-20
            a session. Start at 1 session a week.
          </li>
          <li>
            <strong>HelloTalk or Tandem</strong> for free language exchange
            partners.
          </li>
          <li>
            <strong>A private journal</strong>. Write 3-5 sentences a day
            in Japanese. Simple is fine. The point is the production act.
          </li>
          <li>
            <strong>Shadowing</strong>. Repeat what a native speaker says,
            aloud, immediately after them. Twenty minutes a week.
          </li>
        </ul>

        <h2 id="phase-6">Phase 6: Maintenance (forever)</h2>
        <p>
          Goal: daily contact, slower growth.
        </p>
        <p>
          Past month 15 you transition from deliberate study to
          maintenance. You have enough to read, listen, and speak. You add
          vocabulary as you encounter it. You tackle kanji depth at a
          slower pace. You&apos;ve built the habit and now the habit
          sustains itself.
        </p>
        <p>
          Keep doing:
        </p>
        <ul>
          <li>SRS reviews daily, 5-15 minutes.</li>
          <li>Native content consumption daily, 15-30 minutes.</li>
          <li>Speaking or writing weekly.</li>
        </ul>

        <h2 id="how-much">How much time per day?</h2>
        <p>
          The honest answer varies by phase:
        </p>
        <ul>
          <li>
            <strong>Phase 1 (kana):</strong> 30-60 minutes a day for two
            weeks.
          </li>
          <li>
            <strong>Phase 2-3 (N5 vocab + grammar):</strong> 25-40 minutes
            a day.
          </li>
          <li>
            <strong>Phase 4 (input):</strong> 30 minutes a day minimum,
            more if you enjoy it.
          </li>
          <li>
            <strong>Phase 5 (output):</strong> 45 minutes to an hour on
            practice days, 20 minutes on others.
          </li>
          <li>
            <strong>Phase 6 (maintenance):</strong> 15-30 minutes a day
            indefinitely.
          </li>
        </ul>
        <p>
          15 minutes a day for a year beats 2 hours a day for a month. The
          forgetting curve is unforgiving of gaps.
        </p>

        <h2 id="tools">Tool picks at each phase</h2>
        <p>
          Here is what I would actually use if I were starting over:
        </p>
        <ul>
          <li>
            <strong>Phase 1:</strong> Inku (hiragana + katakana), a
            notebook and pen.
          </li>
          <li>
            <strong>Phase 2:</strong> Inku (N5 deck), a Genki textbook for
            reference.
          </li>
          <li>
            <strong>Phase 3:</strong> Bunpro or Tae Kim for grammar, Inku
            for vocab reinforcement.
          </li>
          <li>
            <strong>Phase 4:</strong> NHK Web Easy, Satori Reader, podcast
            apps.
          </li>
          <li>
            <strong>Phase 5:</strong> italki teacher, Japanese journaling
            app, language partner.
          </li>
          <li>
            <strong>Phase 6:</strong> Whatever has kept you on target so
            far.
          </li>
        </ul>

        <h2 id="failure">The four failure modes</h2>

        <h3 id="fail-1">Failure 1: You never leave Phase 1</h3>
        <p>
          You keep coming back to Duolingo for 5 minutes a day and calling
          that studying. Three months later your Japanese is indistinguishable
          from zero. Fix: commit to a vocabulary push in Phase 2.
        </p>

        <h3 id="fail-2">Failure 2: You skip kana</h3>
        <p>
          You rely on romaji through months 2-3 and never build reading
          muscle. When you try to read real Japanese you find it exhausting
          and quit. Fix: two weeks on kana, then romaji-free forever.
        </p>

        <h3 id="fail-3">Failure 3: You front-load grammar</h3>
        <p>
          You spend months 1-3 on grammar theory with no vocabulary to
          anchor it. The patterns don&apos;t stick because you have nothing
          to hang them on. Fix: vocab first, grammar second.
        </p>

        <h3 id="fail-4">Failure 4: You never start output</h3>
        <p>
          You stay in input-only mode forever because speaking feels
          embarrassing. You plateau at N4 reading and never speak. Fix: at
          month 13, book one italki session. Even a bad one.
        </p>

        <QuoteBlock
          quote="I spent 2022 trying to learn Japanese by reading books about learning Japanese. I finally made progress when I stopped optimizing the method and just did the method."
          attribution="Every learner who eventually made it"
          className="my-10"
        />

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

        <p className="mt-8">
          Next:{" "}
          <Link href="/guides/learn-hiragana">start Phase 1</Link>. Or, if
          you&apos;d like the vocabulary push of Phase 2 done for you,{" "}
          <Link href="/">Inku has the N5 deck pre-built with audio</Link>.
          If you&apos;re picking tools, see{" "}
          <Link href="/vs/duolingo">Inku vs Duolingo</Link> or{" "}
          <Link href="/vs/anki">Inku vs Anki</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
