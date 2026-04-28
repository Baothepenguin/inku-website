import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE =
  "I Built the Japanese App I Wanted After Quitting Noisy Language Apps";
const DESCRIPTION =
  "A short launch note about why Inku exists: Japanese that sticks, without a phone that yells at you.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog/i-built-the-japanese-app-i-wanted",
  ogType: "article",
  publishedTime: "2026-04-28T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: ["Inku launch", "Japanese app", "calm language app"],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/i-built-the-japanese-app-i-wanted"
      title={TITLE}
      subtitle="I wanted a Japanese app I could open at night without feeling yelled at."
      readingTime="4 min read"
      wordCount={850}
      datePublished="2026-04-28"
      answer="Inku exists for learners who want Japanese to stick, but do not want their phone to yell at them. It is a calm iPhone flashcard app for kana, beginner vocabulary, phrases, audio-supported review, handwriting, progress, and a soft daily habit."
      toc={[
        { id: "why", label: "Why I built it" },
        { id: "what", label: "What Inku is" },
        { id: "for-who", label: "Who it is for" },
      ]}
      related={[
        { href: "/why-inku", label: "Why Inku exists" },
        { href: "/best-japanese-flashcard-apps", label: "Best Japanese flashcard apps" },
      ]}
    >
      <h2 id="why">Why I built it</h2>
      <p>
        I started with the usual apps. They were good at getting me to come
        back. They were less good at helping Japanese stay in my head.
      </p>
      <p>
        The habit worked, but the learning felt thin. I could keep a streak and
        still feel slow with kana. I could finish a lesson and still not know
        what I had learned. The app was loud. The Japanese was quiet.
      </p>
      <p>
        I wanted something else. I wanted a Japanese app I could open at night
        without feeling yelled at.
      </p>

      <h2 id="what">What Inku is</h2>
      <p>
        Inku is a calm Japanese flashcard app for iPhone. It teaches kana,
        beginner vocabulary, useful phrases, handwriting, and spaced review.
        The main card library has bundled audio, and progress lives on your
        phone.
      </p>
      <p>
        The review is meant to feel finite. You open the app. You do a few
        cards. You stop. That is not a growth hack. It is the product.
      </p>

      <h2 id="for-who">Who it is for</h2>
      <p>
        Inku is for people who want Japanese to stick, but do not want their
        phone to yell at them. It is for the person who studies after work, on
        the train, or right before bed. It is for the learner who wants a small
        honest session instead of another scoreboard.
      </p>
      <p>
        If that sounds like you, read <Link href="/why-inku">why Inku exists</Link>{" "}
        or start with <Link href="/">the homepage</Link>.
      </p>
    </BlogPostLayout>
  );
}
