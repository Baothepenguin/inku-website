import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Why Inku Teaches Five Cards at a Time";
const DESCRIPTION =
  "Why small review sets make Japanese easier to start, easier to finish, and easier to remember.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog/why-inku-teaches-five-cards-at-a-time",
  ogType: "article",
  publishedTime: "2026-04-28T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: ["Japanese flashcards", "five cards at a time", "spaced repetition"],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/why-inku-teaches-five-cards-at-a-time"
      title={TITLE}
      subtitle="A smaller stack is easier to trust."
      readingTime="4 min read"
      wordCount={820}
      datePublished="2026-04-28"
      answer="Inku teaches five cards at a time because small sets are easier to start and easier to finish. A tiny stack lowers pressure, keeps attention on the Japanese, and makes the daily habit feel possible."
      toc={[
        { id: "small", label: "Small starts" },
        { id: "finish", label: "Finish matters" },
        { id: "memory", label: "Memory needs space" },
      ]}
      related={[
        { href: "/guides/spaced-repetition-explained", label: "Spaced repetition explained" },
        { href: "/blog/streak-trap-vs-study-habit", label: "Streak trap vs study habit" },
      ]}
    >
      <h2 id="small">Small starts</h2>
      <p>
        A large deck can look impressive and still be hard to open. Five cards
        looks small enough to begin. That matters more than it sounds.
      </p>
      <p>
        Most learning fails at the start of the session, not in the middle. If
        the app makes the first step feel heavy, you avoid it. If the first step
        is five cards, you can begin before your brain has time to negotiate.
      </p>

      <h2 id="finish">Finish matters</h2>
      <p>
        A good study habit needs an ending. Not an infinite feed. Not one more
        lesson. Not a queue that grows while you are trying to clear it.
      </p>
      <p>
        Five cards gives the session a shape. Learn a few. Review what is due.
        Stop. You can always do more, but the app should not make more feel
        required.
      </p>

      <h2 id="memory">Memory needs space</h2>
      <p>
        Japanese sticks when you meet it more than once, with space in between.
        A small batch helps with that. You can give each card a little attention
        instead of rushing through a pile.
      </p>
      <p>
        Inku still uses spaced review under the surface. Five cards at a time is
        the door, not the whole house. The deeper system decides what comes
        back later. The small stack helps you show up today.
      </p>
      <p>
        That is the whole idea: Japanese that sticks, without your phone
        yelling at you. Read more in{" "}
        <Link href="/blog/streak-trap-vs-study-habit">
          the study habit post
        </Link>.
      </p>
    </BlogPostLayout>
  );
}
