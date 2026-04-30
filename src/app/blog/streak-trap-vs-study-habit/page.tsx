import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "The Difference Between a Streak Trap and a Study Habit";
const DESCRIPTION =
  "A simple way to tell whether your Japanese app is helping you learn or just helping you come back.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog/streak-trap-vs-study-habit",
  ogType: "article",
  publishedTime: "2026-04-28T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: ["study habit", "language app streak", "Japanese learning habit"],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/streak-trap-vs-study-habit"
      title={TITLE}
      subtitle="The question is not whether you came back. The question is what stayed."
      readingTime="4 min read"
      wordCount={900}
      datePublished="2026-04-28"
      answer="A streak trap makes you protect the number. A study habit helps you remember the Japanese. Good habit design makes it easy to return without shame, review what is due, and leave with something learned."
      toc={[
        { id: "trap", label: "What a streak trap is" },
        { id: "habit", label: "What a study habit is" },
        { id: "inku", label: "Where Inku fits" },
      ]}
      faqs={[
        {
          q: "What is a streak trap?",
          a: "A streak trap is when an app's daily-streak counter becomes the reason you open the app, instead of the learning. You do the shortest action that keeps the number alive, feel relief when it's done, and remember almost nothing the next day.",
        },
        {
          q: "Are streaks bad for learning Japanese?",
          a: "Streaks are not inherently bad. They become bad when shame about breaking them replaces curiosity about learning. A healthy streak rewards showing up; an unhealthy streak punishes missing a day so hard that you protect the number instead of the knowledge.",
        },
        {
          q: "How do I know if my Japanese app is a streak trap?",
          a: "Three tells: you feel anxiety about losing the streak, you do the minimum lesson rather than the right lesson, and you cannot remember what you studied yesterday. If two of three are true, the app is optimizing for retention of you, not retention of Japanese.",
        },
        {
          q: "How does Inku handle streaks differently?",
          a: "Inku tracks streak and progress with a soft, ink-drop visual instead of a fire emoji and a guilt-trip notification. Missing a day surfaces the cards that need work first — not a shame screen. The product target is Japanese that sticks, not panic that retains you.",
        },
      ]}
      related={[
        { href: "/blog/why-inku-teaches-five-cards-at-a-time", label: "Why Inku teaches five cards at a time" },
        { href: "/why-inku", label: "Why Inku exists" },
        { href: "/blog/duolingo-100-days", label: "Duolingo for 100 days" },
      ]}
    >
      <h2 id="trap">What a streak trap is</h2>
      <p>
        A streak is not bad by itself. Seeing proof that you showed up can feel
        good. The trap starts when the number becomes the goal.
      </p>
      <p>
        In a streak trap, you open the app to protect the streak. You do the
        shortest thing that keeps the number alive. You feel relief when it is
        done, but you do not remember much the next day.
      </p>
      <p>
        That is not learning. That is maintenance of a scoreboard.
      </p>

      <h2 id="habit">What a study habit is</h2>
      <p>
        A study habit has a different shape. You return because the next step is
        clear. You review what is due. You learn a small amount. You stop before
        the session turns sour.
      </p>
      <p>
        A good study habit is forgiving. Miss a day, then come back. The app
        should not shame you. It should show the cards that need work and let
        you continue.
      </p>

      <h2 id="inku">Where Inku fits</h2>
      <p>
        Inku has progress and habit tracking, but the product is not built
        around panic. The core loop is quieter: learn a few cards, review what
        is due, watch progress fill in slowly.
      </p>
      <p>
        The goal is Japanese that sticks, not a phone that yells at you. A
        streak can mark that you showed up. It should never replace the reason
        you showed up.
      </p>
      <p>
        For the product story behind that choice, read{" "}
        <Link href="/why-inku">Why Inku Exists</Link>.
      </p>
    </BlogPostLayout>
  );
}
