import type { Metadata } from "next";
import { BlogPostLayout, QuoteBlock } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Duolingo for 100 Days: What I Learned, What I Wish I'd Done Differently";
const SUBTITLE = "A journal, a scoreboard, and a reckoning.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "100 days of Duolingo Japanese, logged honestly. What stuck, what didn't, and the mistakes that cost me real progress.",
  path: "/blog/duolingo-100-days",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "Duolingo Japanese review",
    "Duolingo 100 days",
    "Duolingo Japanese progress",
  ],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/duolingo-100-days"
      title={TITLE}
      subtitle={SUBTITLE}
      readingTime="11 min read"
      wordCount={2300}
      datePublished="2026-04-21"
      answer="Duolingo Japanese, 100 days in, gave me a 100-day streak, about 30 kanji recognition, and the ability to fill in some multiple-choice sentences. It did not give me the ability to read a menu or understand what someone was saying. Here's what I wish I'd done instead."
      toc={[
        { id: "setup", label: "The setup" },
        { id: "what-worked", label: "What worked" },
        { id: "what-didnt", label: "What didn't" },
        { id: "lessons", label: "What I'd do differently" },
      ]}
      faqs={[
        {
          q: "Is Duolingo bad for Japanese?",
          a: "Not bad. Just optimized for retention over progress. Fine as a casual habit, insufficient as a primary tool.",
        },
        {
          q: "Should I quit Duolingo to start Inku?",
          a: "You can run both, but most learners find they drop Duolingo naturally after two weeks of Inku.",
        },
      ]}
      related={[
        { href: "/vs/duolingo", label: "Inku vs Duolingo comparison" },
        { href: "/alternatives/duolingo", label: "Duolingo alternative" },
      ]}
    >
      <h2 id="setup">The setup</h2>
      <p>
        I opened Duolingo on a Tuesday in May 2023. I had a two-week trip to
        Tokyo booked for December and a vague hope that I could stop being
        the person who just points at things. I set a goal of 15 XP a day.
        Duolingo raised it to 50 XP after week one because I was &ldquo;on a
        roll.&rdquo; I kept pace for 100 days.
      </p>
      <p>
        The streak became the scoreboard. I stopped thinking about whether I
        was learning Japanese and started thinking about whether I was
        keeping the streak.
      </p>

      <h2 id="what-worked">What worked</h2>
      <p>
        Here is what Duolingo did well for me.
      </p>
      <ul>
        <li>
          <strong>Habit formation.</strong> The streak is a legitimate
          habit-building mechanism. It took me from &ldquo;thinking about
          learning Japanese&rdquo; to &ldquo;touching Japanese every day.&rdquo;
        </li>
        <li>
          <strong>Initial hiragana exposure.</strong> By day 10, I could
          recognize about 20 hiragana. Not all 46, but enough to be reading
          slowly.
        </li>
        <li>
          <strong>Low commitment per session.</strong> 5 minutes was all that
          was needed to keep the streak. That removed the &ldquo;I do not have
          time&rdquo; excuse.
        </li>
        <li>
          <strong>Pattern recognition.</strong> I started seeing Japanese
          sentence structure (subject-object-verb) and particles enough to
          guess at meaning.
        </li>
      </ul>

      <h2 id="what-didnt">What didn&apos;t</h2>
      <p>
        Here is where the 100 days failed me.
      </p>

      <h3 id="hiragana-slow">Hiragana took 40 days instead of 3</h3>
      <p>
        Duolingo spreads kana across many units, mixed with vocabulary.
        That is great for retention (you see kana in context) and terrible
        for speed. A focused 3-day push would have covered all 46 in one
        weekend. Duolingo took me 40 days to get there.
      </p>

      <h3 id="no-pronunciation">Pronunciation was a synthesized lie</h3>
      <p>
        Duolingo&apos;s Japanese TTS gets many words wrong, especially around
        pitch accent and the う and い vowel sounds. I spent 100 days
        practicing a version of Japanese that sounded robotic and was in
        places actively incorrect. When I first heard a native recording, I
        realized I was going to have to unlearn my listening habits.
      </p>

      <h3 id="multi-choice">Multi-choice produces recognition, not recall</h3>
      <p>
        Most Duolingo Japanese exercises are multiple choice. You tap the
        right answer from a list. That trains recognition, which is a
        weaker memory trace than recall. Real-world Japanese requires
        recall: you hear the word and have to generate the meaning, or see
        a blank and have to produce the word.
      </p>

      <h3 id="no-schedule">No schedule awareness</h3>
      <p>
        Duolingo&apos;s scheduling is opaque. I did not know which words were
        due for review and which I was being shown because the algorithm
        felt like it. Compared with an honest FSRS scheduler, it felt like
        random repetition.
      </p>

      <QuoteBlock
        quote="At day 100 I realized: I know 30 kanji. I can name 4 particles. I cannot tell you what a menu says. What was I doing?"
        attribution="From my own day-100 journal"
        className="my-10"
      />

      <h2 id="lessons">What I&apos;d do differently</h2>

      <h3 id="lesson-1">1. Learn kana in a weekend, not a month</h3>
      <p>
        Four-day push on hiragana. Three on katakana. Do not let an app
        stretch them across 40 unit squares.
      </p>

      <h3 id="lesson-2">2. Use a real-audio tool from day one</h3>
      <p>
        Duolingo&apos;s TTS was my biggest regret. I built a listening model
        that I had to rebuild from scratch at day 120. Use a tool that lets you
        hear Japanese often, then copy the sound out loud.
      </p>

      <h3 id="lesson-3">3. Set a learning goal, not a streak goal</h3>
      <p>
        &ldquo;100-day streak&rdquo; is a participation trophy. &ldquo;Read a
        children&apos;s book&rdquo; is a learning goal. The second one keeps
        you honest.
      </p>

      <h3 id="lesson-4">4. Measure progress in produced sentences, not XP</h3>
      <p>
        Every week, write three Japanese sentences about your life in a
        notebook. Look at the notebook a month later. If the sentences are
        getting longer and more accurate, you are learning. XP is noise.
      </p>

      <h3 id="lesson-5">5. Pick a tool that knows when to stop</h3>
      <p>
        Duolingo&apos;s goal is to keep you there. That is often at odds with
        your goal, which is to leave the app knowing more Japanese than
        when you opened it. Inku&apos;s review session ends when the review
        ends; there is no infinite feed. That design choice is a feature,
        not a bug.
      </p>

      <h2 id="closing">The bottom line</h2>
      <p>
        Duolingo is not a bad tool. It is a tool optimized for daily
        engagement in a mass market. If that aligns with your actual goal,
        great. If your goal is to learn Japanese in a reasonable timeframe,
        pick something else.
      </p>
      <p>
        I spent 100 days on Duolingo and then 30 days on Inku. The 30
        moved me farther than the 100 did.
      </p>
    </BlogPostLayout>
  );
}
