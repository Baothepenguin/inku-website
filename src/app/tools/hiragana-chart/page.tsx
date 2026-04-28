import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { softwareToolSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { HiraganaChartClient } from "./chart-client";

const TITLE = "Interactive Hiragana Chart";
const DESCRIPTION =
  "Click any hiragana character to hear its pronunciation. All 46 characters in a clean reference grid with romaji toggle. Free, no sign-up.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/tools/hiragana-chart",
  keywords: [
    "hiragana chart",
    "hiragana table",
    "hiragana with audio",
    "hiragana pronunciation",
    "japanese alphabet chart",
    "hiragana reference",
  ],
});

export default function HiraganaChartPage() {
  return (
    <>
      <JsonLd
        id="hiragana-chart"
        data={[
          softwareToolSchema({
            name: TITLE,
            description: DESCRIPTION,
            slug: "/tools/hiragana-chart",
          }),
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/tools/hiragana-chart",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 700,
            keywords: ["hiragana chart", "hiragana pronunciation", "japanese alphabet"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Hiragana Chart", path: "/tools/hiragana-chart" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Tool"
        title={TITLE}
        subtitle="All 46 hiragana with audio. Click any character to hear it spoken in Japanese. Toggle romaji on or off to test your recognition."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Hiragana Chart", href: "/tools/hiragana-chart" },
        ]}
        sidebar={<DownloadCard campaign="hiragana-chart-tool" />}
      >
        <AnswerBox>
          Hiragana is one of the two Japanese kana scripts. This chart shows all
          46 basic hiragana in the standard order. Click a character to hear its
          sound, then hide romaji when you want to test your memory.
        </AnswerBox>

        <p>
          This chart shows all 46 hiragana characters arranged in the traditional aiueo order.
          Click any cell to hear its pronunciation spoken aloud using your device&apos;s Japanese
          voice. Use the romaji toggle to hide the English readings and test whether you can
          recall each sound from the character shape alone.
        </p>

        <HiraganaChartClient />

        <h2 id="how-to-use">How to use this chart</h2>
        <p>
          Start with romaji on. Read each row left to right, clicking each character to hear the
          sound. Then switch romaji off and go through the same rows again, trying to recall the
          reading before you click. The brief green highlight and audio confirm whether you were
          right. This is active recall, the technique that research consistently shows beats
          re-reading by a wide margin.
        </p>
        <p>
          A session of 10-15 minutes per day for three days is enough for most adults to reach
          confident recognition of all 46. Writing them from memory takes a bit longer, roughly a
          week of daily practice, but recognition is the first milestone and this chart gets you
          there.
        </p>

        <h2 id="reading-the-grid">Reading the grid</h2>
        <p>
          Japanese kana are traditionally organized into rows (consonant groups) and columns
          (vowels). The five columns are always a, i, u, e, o in that order. The rows go: vowels,
          k, s, t, n, h, m, y, r, w, and the standalone n. You will notice the y-row and w-row
          have empty slots because those sounds do not exist in Japanese. Every character in a row
          shares the same consonant; every character in a column shares the same vowel. Once you
          see that structure, the chart becomes a map rather than a random list.
        </p>

        <h2 id="dakuten-and-handakuten">Dakuten and handakuten</h2>
        <p>
          This chart shows the 46 base hiragana. Japanese also has voiced and semi-voiced variants
          produced by adding small marks to the upper-right corner of certain characters.
        </p>
        <p>
          Two small strokes (dakuten, &#xe3;&#x82;&#x9a;) voice the consonant: か (ka) becomes が (ga),
          さ (sa) becomes ざ (za), た (ta) becomes だ (da), は (ha) becomes ば (ba). A small circle
          (handakuten) on the ha-row gives you the p-sounds: は (ha) becomes ぱ (pa), and so on.
          These modifications add roughly 25 more syllables without any new shapes to learn. They
          come naturally after you know the base chart.
        </p>

        <h2 id="confusable-characters">Characters people mix up most</h2>
        <p>
          A handful of hiragana look similar and trip up nearly every learner. The classic pairs
          worth drilling together:
        </p>
        <ul>
          <li>
            <strong>し (shi) vs. つ (tsu)</strong> - both are fishhook shapes. し hangs vertically;
            つ lies on its side curling to the right.
          </li>
          <li>
            <strong>ね (ne), れ (re), and わ (wa)</strong> - share the same left side. The right
            half is what separates them.
          </li>
          <li>
            <strong>ぬ (nu) vs. め (me)</strong> - ぬ has an extra looping tail.
          </li>
          <li>
            <strong>ろ (ro) vs. る (ru)</strong> - る has a small loop at the bottom right.
          </li>
          <li>
            <strong>は (ha), ほ (ho), and ま (ma)</strong> - three close cousins. Drill them side
            by side until the differences feel obvious.
          </li>
        </ul>
        <p>
          The strategy: whenever you meet a confusable pair, drill them together, not apart. Put
          them side by side in your head until the distinction feels automatic.
        </p>

        <h2 id="stroke-order-basics">A note on stroke order</h2>
        <p>
          If you want to write hiragana by hand rather than just recognize them, stroke order
          matters for legibility and for later when you tackle kanji. Three rules cover the vast
          majority of hiragana: write top to bottom, write left to right, and when horizontal and
          vertical strokes cross, write the horizontal first. You do not need to memorize every
          character&apos;s exact stroke count. You need enough consistency that your handwriting
          is readable.
        </p>
        <p>
          For animated stroke-by-stroke guidance, see the{" "}
          <Link href="/tools/stroke-order">stroke order viewer</Link>, or jump to the{" "}
          <Link href="/guides/learn-hiragana">complete hiragana learning guide</Link> for
          mnemonics, a three-day schedule, and practice advice.
        </p>

        <h2 id="next-steps">After you know the chart</h2>
        <p>
          Once you can identify all 46 hiragana reliably, the natural next step is{" "}
          <Link href="/tools/katakana-chart">katakana</Link>. The shapes are different but the
          sounds are identical, so the second script takes a fraction of the time. After both
          scripts, move into vocabulary with the JLPT N5 deck.
        </p>
        <p>
          If you want spaced repetition built into a mobile app so you are not maintaining your
          own review schedule, Inku handles that on iPhone. Every hiragana and katakana character
          in this chart is in the app with audio-supported review audio and handwriting practice.{" "}
          <Link href="/">Download Inku with a 7-day free trial.</Link>
        </p>
      </LongFormLayout>
    </>
  );
}
