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

const TITLE = "Spaced Repetition, Explained Without the Hype";
const SUBTITLE =
  "The memory science behind Anki, WaniKani, and Inku. Why it works, where it breaks, and how to use it without wasting your time.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "A practical explainer on spaced repetition (SRS): how it works, the forgetting curve, FSRS vs SM-2, and how to actually use it for Japanese.",
  path: "/guides/spaced-repetition-explained",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "spaced repetition",
    "SRS explained",
    "FSRS",
    "Anki algorithm",
    "forgetting curve",
  ],
});

const TOC = [
  { id: "answer", label: "Short answer" },
  { id: "forgetting-curve", label: "The forgetting curve" },
  { id: "how-srs-works", label: "How SRS actually works" },
  { id: "algorithms", label: "SM-2, FSRS, and what Inku uses" },
  { id: "do-right", label: "Doing SRS right" },
  { id: "mistakes", label: "The four common mistakes" },
  { id: "when-bad", label: "When SRS is the wrong tool" },
  { id: "faq", label: "Common questions" },
];

const FAQS = [
  {
    q: "What is spaced repetition in one sentence?",
    a: "Spaced repetition is a study technique where you review information at expanding intervals (for example, one day, three days, ten days) so you rehearse each fact right before you would forget it.",
  },
  {
    q: "Does spaced repetition actually work?",
    a: "Yes. It is the most studied memory technique in cognitive psychology. Fifty-plus years of research show that spaced reviews produce retention 2 to 3 times higher than massed practice (cramming) for the same total time.",
  },
  {
    q: "What is FSRS and why does it matter?",
    a: "FSRS (Free Spaced Repetition Scheduler) is a modern scheduling algorithm that replaces the older SM-2 used in Anki for decades. It predicts when you'll forget each card based on your own history, instead of using a one-size-fits-all curve. Most people see 10 to 20 percent fewer reviews for the same retention.",
  },
  {
    q: "How many cards a day is too many?",
    a: "For most adult learners, 20 to 30 new cards a day is the ceiling before the review burden explodes. Ten new cards a day is sustainable indefinitely. New cards multiply your future review load more than they add to today's load.",
  },
  {
    q: "Should I leave spaced repetition alone if I'm busy?",
    a: "You can skip a day or three without breaking the system, but going quiet for weeks will cause a flood when you return. The least painful strategy during a busy period is to reduce new cards to zero (not stop reviewing) until the busy stretch ends.",
  },
];

export default function SpacedRepetitionPage() {
  return (
    <>
      <JsonLd
        id="srs-guide"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/guides/spaced-repetition-explained",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 3800,
            keywords: ["spaced repetition", "FSRS", "SM-2", "Anki algorithm"],
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            {
              name: "Spaced Repetition Explained",
              path: "/guides/spaced-repetition-explained",
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
        readingTime="18 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          {
            name: "Spaced Repetition Explained",
            href: "/guides/spaced-repetition-explained",
          },
        ]}
        toc={TOC}
        sidebar={<DownloadCard campaign="srs-guide" />}
      >
        <AnswerBox>
          Spaced repetition schedules reviews at expanding intervals so you
          meet each fact right before you would forget it. Done well, it can
          cut the time needed to retain vocabulary by 3 to 5 times compared
          with cramming. Done badly, it becomes a daily guilt trip of
          overdue cards. This guide covers the science, the two dominant
          algorithms, and the four mistakes that make people quit.
        </AnswerBox>

        <h2 id="forgetting-curve">The forgetting curve</h2>
        <p>
          In 1885 Hermann Ebbinghaus ran one of the most boring experiments
          in psychology history. He memorized lists of nonsense syllables,
          then tested himself at intervals ranging from 20 minutes to a
          month. He plotted the results.
        </p>
        <p>
          What he found is now called the forgetting curve. If you learn
          something once and never see it again, your retention drops fast.
          Within 20 minutes you have lost roughly 40 percent. Within a day,
          about 60 percent. Within a week, over 75 percent. The curve is
          steep, it is consistent, and it applies to almost every kind of
          declarative knowledge.
        </p>
        <p>
          Ebbinghaus ran a second experiment. He memorized the same
          material multiple times at different intervals, and measured how
          much time he saved each subsequent session. This is the relearning
          curve, and it is the foundation of every spaced repetition system
          ever built.
        </p>

        <h3 id="the-insight">The core insight</h3>
        <p>
          If you review a fact right before you would forget it, the review
          is cheap (you still remember it) and the next review can be
          scheduled further out. If you review too late (after you have
          forgotten it), the review is expensive (you have to relearn
          from scratch). Spaced repetition is the practice of finding the
          sweet spot: reviews that are timed so the material is still in
          your head, but barely.
        </p>

        <h2 id="how-srs-works">How SRS actually works</h2>
        <p>
          A spaced repetition system is, at heart, a queue of cards and a
          scheduler. You answer each card with a confidence rating (roughly
          "I forgot" / "I remembered, barely" / "I knew it easily"). The
          scheduler uses that rating to compute when to show you the card
          next. Easy cards move out further. Cards you struggled with come
          back sooner.
        </p>
        <p>
          The maths vary, but they all share three moving parts:
        </p>
        <ol>
          <li>
            A <strong>stability</strong> estimate: how long this particular
            card can sit before you forget it. Stability grows with each
            successful review.
          </li>
          <li>
            A <strong>difficulty</strong> estimate: how hard this card is
            for you specifically. Cards you fail often are marked harder and
            reviewed more aggressively.
          </li>
          <li>
            A <strong>target retention</strong>: the probability you want to
            maintain that you will remember each card at review time.
            Anki&apos;s classic default is 90 percent. Modern FSRS lets you
            choose.
          </li>
        </ol>

        <h2 id="algorithms">SM-2, FSRS, and what Inku uses</h2>

        <h3 id="sm-2">SM-2: the classic algorithm</h3>
        <p>
          Anki runs on SM-2, an algorithm from 1987 by Piotr Woźniak. It is
          simple and proven, but it has two main problems. First, the
          interval calculation is a rigid formula that doesn&apos;t adapt to
          how individual learners actually forget. Second, it tends to
          over-review easy material and under-review material in the
          "interference zone" where you know the shape of a fact but not
          the details.
        </p>

        <h3 id="fsrs">FSRS: what replaced it</h3>
        <p>
          FSRS (Free Spaced Repetition Scheduler) was developed by Jarrett
          Ye and became Anki&apos;s default in 2024. It uses a three-variable
          memory model (stability, difficulty, retrievability) and fits the
          parameters to each learner&apos;s actual history. In practice,
          this produces 10 to 20 percent fewer reviews for the same
          retention, sometimes more.
        </p>
        <p>
          FSRS also exposes a single tunable knob (desired retention) so you
          can trade off time against rigour. If you want 95 percent
          retention (expensive), you can set it. If you want 80 percent
          retention (cheap, lots of forgetting), you can set that too.
        </p>

        <h3 id="inku-uses">What Inku uses</h3>
        <p>
          Inku uses FSRS under the hood with a target retention around 90
          percent tuned for adult Japanese learners. Cards the app flags as
          frequent interferers (the confusable kana pairs, for example) get
          small scheduler bumps so they surface together. You do not see any
          of this, and there is no knob to tune, on purpose.
        </p>

        <Callout tone="note" title="Why Inku hides the scheduler">
          <p>
            Anki&apos;s UI exposes every dial, which is great for tinkerers
            and terrible for beginners. Most learners who burn out on Anki
            do so because they felt the machinery. Inku&apos;s first design
            rule was that the user should feel a short stack of cards and
            nothing else. The scheduler should vanish.
          </p>
        </Callout>

        <h2 id="do-right">Doing SRS right</h2>

        <h3 id="new-cards-low">Keep new cards low</h3>
        <p>
          A new card today becomes one review tomorrow, one three days
          later, one after ten days, and so on. Adding 20 new cards today
          adds roughly 60 future reviews over the next month. Most beginners
          burn out because they front-loaded 40 new cards a day for two
          weeks, then faced a 400-card review queue on day 15.
        </p>
        <p>
          For adult beginners in Japanese, 10 new cards a day is a
          sustainable pace. You can push it to 20 if you are a student with
          time. Twenty-five is the rare ceiling.
        </p>

        <h3 id="rate-honestly">Rate yourself honestly</h3>
        <p>
          When you answer a card, the scheduler trusts your self-rating.
          If you lie ("I knew that" when you did not) you poison the
          scheduler&apos;s model of your memory. Results: bad intervals,
          more reviews, worse retention. Answer honestly, especially the
          first week.
        </p>

        <h3 id="daily-habit">Make it daily, not weekly</h3>
        <p>
          SRS rewards consistency more than intensity. Ten minutes every
          day beats 70 minutes on Saturday. The scheduler assumes daily
          touch; if you deviate, it overcompensates.
        </p>

        <h3 id="short-sessions">Short sessions are fine</h3>
        <p>
          A 5-minute session is still a session. If you are scared of the
          queue, do five cards. The scheduler will be happier than if you
          skip entirely.
        </p>

        <h2 id="mistakes">The four common mistakes</h2>

        <h3 id="mistake-1">Mistake 1: too many new cards</h3>
        <p>
          The single most common way to burn out. Feelgood early (new cards
          are easy) becomes panic at week three. Cap yourself.
        </p>

        <h3 id="mistake-2">Mistake 2: low-quality cards</h3>
        <p>
          A card with a vague cue or an ambiguous answer wastes the
          scheduler. For vocabulary, each card should have one clear prompt
          and one clear answer. For kanji, be specific about what you are
          testing (reading? meaning? writing?). Using a pre-built deck like
          Inku&apos;s spares you from this altogether.
        </p>

        <h3 id="mistake-3">Mistake 3: skipping for a week</h3>
        <p>
          When you skip, the queue grows geometrically. When you come back,
          the queue feels punishing, so you skip more. The cycle is real.
          During busy weeks, set new cards to zero and just clear the daily
          review; don&apos;t stop entirely.
        </p>

        <h3 id="mistake-4">Mistake 4: gaming the ratings</h3>
        <p>
          &ldquo;I just want this to go away&rdquo; rating. If you mark
          everything easy, the intervals stretch past what you can hold,
          and in two months you have forgotten everything. The ratings are
          an input to a machine that works for you. Feed it truthfully.
        </p>

        <h2 id="when-bad">When SRS is the wrong tool</h2>
        <p>
          SRS is great for discrete facts: vocabulary, kanji readings,
          grammar pattern endings. It is bad for:
        </p>
        <ul>
          <li>
            <strong>Fluency in a skill</strong> (speaking, listening,
            writing sentences). These need practice, not review.
          </li>
          <li>
            <strong>Conceptual understanding.</strong> You can&apos;t SRS
            your way to understanding when to use は vs が. Understand
            first, then use SRS to drill example sentences.
          </li>
          <li>
            <strong>Motivation.</strong> SRS is a memory tool, not a
            motivation system. If you hate it, you will quit. Use it with
            content you care about.
          </li>
        </ul>

        <QuoteBlock
          quote="I spent two years doing Anki for 45 minutes a day. I passed N3. I also never spoke Japanese to anyone. SRS is necessary, not sufficient."
          attribution="A learner who figured it out the hard way"
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
          Related: <Link href="/guides/how-to-learn-japanese">how to
          learn Japanese from scratch</Link>, <Link href="/vs/anki">Inku vs
          Anki</Link>, or{" "}
          <Link href="/blog/spaced-repetition-mistake">the specific SRS
          mistake that wastes 90 percent of learners&apos; time</Link>. If
          you want the SRS machinery done for you,{" "}
          <Link href="/">download Inku</Link> and let the scheduler stay
          out of your way.
        </p>
      </LongFormLayout>
    </>
  );
}
