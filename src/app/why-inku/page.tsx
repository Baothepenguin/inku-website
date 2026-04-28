import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { DownloadCard } from "@/components/download-card";
import { LongFormLayout } from "@/components/long-form-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Why Inku Exists";
const DESCRIPTION =
  "The short founder story behind Inku, a calm Japanese flashcard app for iPhone.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/why-inku",
  ogType: "article",
  keywords: ["why Inku", "Japanese app founder story", "calm Japanese app"],
});

export default function WhyInkuPage() {
  return (
    <>
      <JsonLd
        id="why-inku"
        data={[
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/why-inku",
            datePublished: "2026-04-28",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 900,
            keywords: ["Inku", "founder story", "Japanese learning"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Why Inku", path: "/why-inku" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Founder note"
        title={TITLE}
        subtitle="I wanted a Japanese app I could open at night without feeling yelled at."
        updated="April 28, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="4 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Why Inku", href: "/why-inku" },
        ]}
        toc={[
          { id: "short-answer", label: "Short answer" },
          { id: "what-broke", label: "What broke" },
          { id: "what-i-wanted", label: "What I wanted" },
          { id: "what-inku-does", label: "What Inku does" },
        ]}
        sidebar={<DownloadCard campaign="why-inku" />}
      >
        <section id="short-answer">
          <AnswerBox>
            Inku exists because learning Japanese should feel steady, not loud.
            It is for people who want Japanese to stick, but do not want their
            phone to yell at them.
          </AnswerBox>
        </section>

        <h2 id="what-broke">What broke</h2>
        <p>
          I tried the noisy apps first. They worked for opening the app. They
          did not always work for learning Japanese. I could keep a streak and
          still feel unsure about hiragana. I could finish a lesson and still
          not know what I had learned.
        </p>
        <p>
          That was the strange part. The apps were full of motion, points, and
          reminders, but the Japanese felt small inside all of it. I wanted the
          language to be the main thing.
        </p>

        <h2 id="what-i-wanted">What I wanted</h2>
        <p>
          I wanted a Japanese app I could open at night without feeling yelled
          at. One quiet screen. A few cards. A clear sound. A sense that I had
          done enough for today.
        </p>
        <p>
          I did not want a blank tool that made me build my own study system. I
          also did not want a game that treated my attention like a score. I
          wanted something closer to good stationery: useful, calm, and easy to
          return to.
        </p>

        <h2 id="what-inku-does">What Inku does</h2>
        <p>
          Inku starts with kana, beginner vocabulary, useful phrases, audio-
          supported review, handwriting, progress, and a soft daily habit. It
          is not trying to be the loudest Japanese app. It is trying to be the
          one you can keep using.
        </p>
        <p>
          The product idea is simple: show fewer cards at once, make the review
          feel finite, and let progress feel like ink on paper instead of a
          siren on your phone.
        </p>
        <p>
          If that is the kind of Japanese app you wanted too, start with{" "}
          <Link href="/">the homepage</Link> or read the{" "}
          <Link href="/best-japanese-flashcard-apps">
            fair flashcard app comparison
          </Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
