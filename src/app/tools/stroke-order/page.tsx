import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { softwareToolSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { StrokeOrderClient } from "./stroke-client";

const TITLE = "Japanese Stroke Order Viewer";
const DESCRIPTION =
  "See the correct stroke order for common hiragana characters. Numbered stroke descriptions with tips. Free reference tool, no sign-up needed.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/tools/stroke-order",
  keywords: [
    "japanese stroke order",
    "hiragana stroke order",
    "how to write hiragana",
    "japanese writing order",
    "stroke order guide",
  ],
});

export default function StrokeOrderPage() {
  return (
    <>
      <JsonLd
        id="stroke-order"
        data={[
          softwareToolSchema({
            name: TITLE,
            description: DESCRIPTION,
            slug: "/tools/stroke-order",
          }),
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/tools/stroke-order",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 680,
            keywords: ["japanese stroke order", "hiragana stroke order", "how to write hiragana"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Stroke Order Viewer", path: "/tools/stroke-order" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Tool"
        title={TITLE}
        subtitle="Select a hiragana character to see its stroke order, stroke count, and tips for getting the shape right."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Stroke Order", href: "/tools/stroke-order" },
        ]}
        sidebar={<DownloadCard campaign="stroke-order-tool" />}
      >
        <AnswerBox>
          Stroke order is the order used to write Japanese characters. Learn the
          basic rules first: top to bottom, left to right, and horizontal before
          vertical. Then practice common hiragana shapes.
        </AnswerBox>

        <p>
          This viewer shows the correct stroke order for 10 common hiragana characters. Select a
          character from the picker to see the number of strokes, a numbered description of each
          stroke in order, and a tip for remembering the shape. At the top, three rules cover the
          general principles that apply to nearly all Japanese characters.
        </p>

        <StrokeOrderClient />

        <h2 id="why-stroke-order">Why stroke order matters</h2>
        <p>
          Stroke order might seem like an unnecessary detail when you are just trying to read
          Japanese. Most characters look fine no matter what order you draw them in, especially at
          the level of a beginner writing slowly. So why bother?
        </p>
        <p>
          There are three practical reasons. First, speed. When you write the same character
          hundreds of times, muscle memory takes over. If your muscle memory encodes the correct
          order, your handwriting becomes faster and more fluid naturally. If it encodes a random
          order, you have to consciously think through each character every time.
        </p>
        <p>
          Second, legibility at speed. Handwritten Japanese - especially cursive and semi-cursive
          styles - assumes standard stroke order. A character written quickly in the correct order
          has a predictable flow that other Japanese readers recognize instantly. Out-of-order
          characters start to look like scribbles.
        </p>
        <p>
          Third, kanji. You are going to learn kanji eventually. Kanji stroke order is not
          optional; it is part of how characters are taught, indexed in dictionaries, and
          remembered. Building the stroke-order habit in hiragana and katakana means the habit is
          automatic by the time kanji demands it.
        </p>

        <h2 id="three-principles">The three principles in practice</h2>
        <p>
          The three rules at the top of the tool - top to bottom, left to right, horizontal before
          vertical at crossings - cover maybe 80 percent of cases. The remaining 20 percent are
          exceptions you learn on a per-character basis. But starting with these three principles
          means you will be correct most of the time even on characters you have never explicitly
          studied.
        </p>
        <p>
          A practical exercise: pick any hiragana you have not studied for stroke order. Apply the
          three rules and guess the order. Then look it up. You will be right more often than not.
          That gives you a foundation to build from rather than memorizing every character from
          scratch.
        </p>

        <h2 id="handwriting-practice">Handwriting practice method</h2>
        <p>
          The most effective way to practice stroke order is also the most low-tech: paper and a
          pencil. Write each character 5 to 10 times in a row while narrating the strokes quietly
          to yourself. The combination of motor memory, verbal rehearsal, and visual feedback is
          much more effective than watching an animation passively.
        </p>
        <p>
          Start with the characters you see most often. The vowel row (a, i, u, e, o) and the
          k-row (ka, ki, ku, ke, ko) appear constantly. Get those clean first, then move outward.
          You do not need perfect stroke order on all 46 before you start reading and listening.
          Prioritize the characters you encounter.
        </p>

        <h2 id="common-mistakes">Mistakes beginners make</h2>
        <p>
          The most common error is writing characters right-to-left because the eye reads from the
          rightmost point of the character. Watch for this with characters like き (ki) and は (ha),
          where the eye is drawn to the right side first but the left strokes come first.
        </p>
        <p>
          Another common error is guessing diagonal strokes as one stroke when they are two, or
          vice versa. あ (a) and さ (sa) have loops that new learners often draw as single curves
          when the brush-style origin requires separate strokes.
        </p>

        <h2 id="deeper-learning">Deeper learning</h2>
        <p>
          This tool covers 10 characters with text descriptions. For the full set with stroke
          animations and handwriting practice on your phone, Inku&apos;s handwriting practice mode
          walks through every hiragana and katakana with a finger-tracing overlay. See the{" "}
          <Link href="/guides/learn-hiragana">complete hiragana guide</Link> for the full learning
          system, or go to the{" "}
          <Link href="/tools/hiragana-chart">hiragana chart</Link> to hear each character
          pronounced.
        </p>
      </LongFormLayout>
    </>
  );
}
