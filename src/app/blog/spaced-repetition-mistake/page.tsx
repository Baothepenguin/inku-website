import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "The Spaced Repetition Mistake That Wastes 90% of Learners' Time";
const SUBTITLE =
  "Most people set up SRS wrong on day one. Here is the fix that took my retention from 60 percent to 94 percent.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "The most common spaced repetition mistake (adding too many cards) and how to fix it without starting over.",
  path: "/blog/spaced-repetition-mistake",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "spaced repetition mistakes",
    "SRS new cards",
    "Anki burnout",
    "flashcard retention",
  ],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/spaced-repetition-mistake"
      title={TITLE}
      subtitle={SUBTITLE}
      readingTime="8 min read"
      wordCount={1700}
      datePublished="2026-04-21"
      answer="The mistake is adding too many new cards. Most beginners add 25-50 new cards a day for the first two weeks and then drown in the review queue on week three. The fix is brutal: cap new cards at 10 per day until your oldest cards have cycled once."
      toc={[
        { id: "mistake", label: "The mistake" },
        { id: "math", label: "The math of new cards" },
        { id: "fix", label: "The fix" },
        { id: "second-mistake", label: "The second mistake: lying" },
      ]}
      faqs={[
        {
          q: "How many new cards should I add per day for Japanese?",
          a: "10 for absolute beginners. Up to 20 if you have 30+ minutes a day. Never past 25.",
        },
        {
          q: "What if I've already added 500 cards and I'm overwhelmed?",
          a: "Set new cards to 0. Do not suspend existing cards. Just clear the daily review queue at whatever rating is honest. Your queue will stabilize in 2-3 weeks.",
        },
      ]}
      related={[
        { href: "/guides/spaced-repetition-explained", label: "Spaced repetition explained" },
        { href: "/vs/anki", label: "Inku vs Anki" },
      ]}
    >
      <h2 id="mistake">The mistake</h2>
      <p>
        You download an SRS app. You are motivated. You add 30 cards on day
        one, 40 on day two, 50 on day three. You are learning fast! You can
        tell, because your new-cards count is going up.
      </p>
      <p>
        Then week three hits. The cards from day one are coming back.
        Week-one reviews plus week-two reviews plus the 40 new cards you
        added today. The daily review count suddenly says 280. You do half
        of them. The next day it says 340. You do a third. The day after
        that you quit.
      </p>

      <h2 id="math">The math of new cards</h2>
      <p>
        Each new card you add today becomes approximately:
      </p>
      <ul>
        <li>1 review tomorrow</li>
        <li>1 review 3 days from now</li>
        <li>1 review 7 days from now</li>
        <li>1 review 3 weeks from now</li>
        <li>1 review 2 months from now</li>
        <li>... and onwards</li>
      </ul>
      <p>
        So a single new card today adds about 5 future reviews over the next
        two months. Adding 30 new cards today adds 150 future reviews. Add
        30 a day for two weeks and you are at 2,100 upcoming reviews in your
        queue.
      </p>
      <p>
        The thing that makes beginners burn out is not the new cards. It is
        the reviews of cards they already learned, suddenly coming back at
        scale.
      </p>

      <h2 id="fix">The fix</h2>
      <p>
        Cap new cards at 10 per day. Hold that cap for at least three weeks.
        Do not raise it until the daily review queue has stabilized under 30
        minutes.
      </p>
      <p>
        If you are already behind, set new cards to zero until the queue
        clears. Do not delete or suspend existing cards; that will bite you
        later. Just do the daily review at whatever pace you can until the
        pile melts down.
      </p>
      <p>
        When the daily queue is back under control, resume new cards at 10 a
        day. If you want to push to 15 or 20, do so after a month of
        stability.
      </p>

      <h2 id="second-mistake">The second mistake: lying about ratings</h2>
      <p>
        The other thing that wastes time is lying to yourself on the
        rating. If you rate a card &ldquo;easy&rdquo; because you want it to
        go away, the scheduler will push its next review out by weeks. When
        it comes back, you will have forgotten it entirely, and you have to
        relearn it from scratch. You just turned a 10-second review into a
        10-minute relearning.
      </p>
      <p>
        The rule: if you hesitated at all, rate it &ldquo;hard.&rdquo; If you
        could not produce the answer, rate it &ldquo;again.&rdquo; Be
        brutally honest. The scheduler is a machine that works for you.
        Feed it the truth.
      </p>

      <h2 id="closing">The retention upgrade</h2>
      <p>
        When I started capping new cards and rating honestly, my retention
        on my Japanese deck went from 60 percent to 94 percent. That means
        almost every card I see, I know. The daily session is short. I
        never feel behind.
      </p>
      <p>
        The only thing that changed was the discipline on input, not the
        effort on output. Less new, more honest. That is the single biggest
        unlock for most SRS users.
      </p>
    </BlogPostLayout>
  );
}
