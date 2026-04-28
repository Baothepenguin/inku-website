import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { softwareToolSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { KanaQuizClient } from "./quiz-client";

const TITLE = "Free Kana Quiz (Hiragana + Katakana)";
const DESCRIPTION =
  "Test your hiragana and katakana reading. A random character appears - type the romaji and get instant feedback. Tracks your score. Free, no sign-up.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/tools/kana-quiz",
  keywords: [
    "kana quiz",
    "hiragana quiz",
    "katakana quiz",
    "japanese kana test",
    "hiragana practice online",
    "free japanese quiz",
  ],
});

export default function KanaQuizPage() {
  return (
    <>
      <JsonLd
        id="kana-quiz"
        data={[
          softwareToolSchema({
            name: TITLE,
            description: DESCRIPTION,
            slug: "/tools/kana-quiz",
          }),
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/tools/kana-quiz",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 650,
            keywords: ["kana quiz", "hiragana quiz", "katakana quiz"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Kana Quiz", path: "/tools/kana-quiz" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Tool"
        title={TITLE}
        subtitle="A random kana character appears. Type the romaji and press Enter. Covers all 46 hiragana and 46 katakana. Tracks your score as you go."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Kana Quiz", href: "/tools/kana-quiz" },
        ]}
        sidebar={<DownloadCard campaign="kana-quiz-tool" />}
      >
        <AnswerBox>
          This kana quiz tests hiragana and katakana reading. Choose a mode,
          type the romaji for each character, and check your score as you go.
          It is best after one pass through the kana charts.
        </AnswerBox>

        <p>
          This quiz shows one kana character at a time and asks you to type its romaji reading.
          Choose hiragana only, katakana only, or both together. After you type and submit, you
          get immediate right-or-wrong feedback, then the next character appears automatically.
          Your score tracks correct answers out of total attempts, with accuracy percentage once
          you have answered at least one question.
        </p>

        <KanaQuizClient />

        <h2 id="how-to-use">How to use the quiz effectively</h2>
        <p>
          This quiz is most useful after you have done an initial pass through the{" "}
          <Link href="/tools/hiragana-chart">hiragana chart</Link> or{" "}
          <Link href="/tools/katakana-chart">katakana chart</Link>. Use the chart to learn the
          shapes first, then use this quiz to test whether the learning stuck. The difference
          between seeing a character and actively retrieving its name is where real memorization
          happens.
        </p>
        <p>
          A typical session: 50 questions with hiragana only. Then check your score. Below 80
          percent means there are characters you need to review. Above 90 percent means you are
          ready to add katakana. Aim for three sessions per day for the first three days, then one
          session per day for the rest of the week. That schedule is usually enough to reach
          reliable recognition.
        </p>

        <h2 id="active-recall">Why this kind of quiz works</h2>
        <p>
          The technique this quiz uses is called active recall - retrieving information from memory
          rather than recognizing it from a multiple-choice list. Studies on memory consistently
          show that active recall builds stronger retention than re-reading or passive review. The
          difficulty is the point. When you struggle to remember つ versus し, your brain is doing
          the work that makes the distinction permanent.
        </p>
        <p>
          Multiple-choice kana quizzes are easier but less effective. Seeing the right answer as
          one of four options means you only need partial recognition. This quiz requires full
          recall, which is harder and produces better long-term retention.
        </p>

        <h2 id="memorization-tips">Tips for faster kana memorization</h2>
        <p>
          A few techniques that consistently speed up kana acquisition:
        </p>
        <ul>
          <li>
            <strong>Use mnemonics for the shape.</strong> あ looks like an antelope with crossed
            antlers. し looks like a fishhook. The more vivid the image, the faster it sticks.
            Make up your own if the standard ones do not land.
          </li>
          <li>
            <strong>Drill confusable pairs together.</strong> Do not avoid し and つ - seek them
            out as a pair. Once your brain has formed a clear contrast between two similar shapes,
            it will not confuse them again.
          </li>
          <li>
            <strong>Write before you quiz.</strong> Physically writing each character three to five
            times before the quiz session anchors it in motor memory and makes the shape more
            distinctive.
          </li>
          <li>
            <strong>Mix old and new.</strong> When you add a new row, do not drop the previous
            rows from practice. Interleaving older material with new material slows initial
            learning but produces much stronger long-term retention.
          </li>
          <li>
            <strong>Read in the wild.</strong> After the quiz, go find hiragana in the world.
            Japanese product names, restaurant menus, subtitles. Every real-world reading
            encounter reinforces what the quiz built.
          </li>
        </ul>

        <h2 id="what-comes-next">What to do when you pass this quiz</h2>
        <p>
          Once you consistently score above 90 percent on both hiragana and katakana in combined
          mode, you are ready for the next layer: vocabulary. The JLPT N5 word list is the
          standard starting point - around 800 words that cover everyday Japanese. From there, N4
          adds another 1500 words and starts to make real conversations accessible.
        </p>
        <p>
          If you want spaced repetition - which automatically schedules reviews at the optimal
          intervals for your memory rather than asking you to do it manually - Inku handles that
          on iPhone. The same kana you practiced here, plus vocabulary, phrases, and handwriting,
          are all in the app with audio support.{" "}
          <Link href="/">Download Inku with a 7-day free trial.</Link>
        </p>
      </LongFormLayout>
    </>
  );
}
