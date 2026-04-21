import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { softwareToolSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { KatakanaChartClient } from "./chart-client";

const TITLE = "Interactive Katakana Chart";
const DESCRIPTION =
  "Click any katakana character to hear its pronunciation. All 46 characters with audio and romaji toggle. Free reference chart, no sign-up.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/tools/katakana-chart",
  keywords: [
    "katakana chart",
    "katakana table",
    "katakana with audio",
    "katakana pronunciation",
    "katakana reference",
    "japanese katakana",
  ],
});

export default function KatakanaChartPage() {
  return (
    <>
      <JsonLd
        id="katakana-chart"
        data={[
          softwareToolSchema({
            name: TITLE,
            description: DESCRIPTION,
            slug: "/tools/katakana-chart",
          }),
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/tools/katakana-chart",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 720,
            keywords: ["katakana chart", "katakana pronunciation", "japanese katakana"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Katakana Chart", path: "/tools/katakana-chart" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Tool"
        title={TITLE}
        subtitle="All 46 katakana with audio. Click any character to hear it spoken in Japanese. Toggle romaji on or off to practice recognition."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Katakana Chart", href: "/tools/katakana-chart" },
        ]}
        sidebar={<DownloadCard campaign="katakana-chart-tool" />}
      >
        <p>
          This chart shows all 46 katakana characters in the traditional aiueo order. Click any
          cell to hear its pronunciation through your device&apos;s Japanese voice. Toggle romaji
          off once you want to test yourself - try to recall the reading from the shape alone
          before clicking.
        </p>

        <KatakanaChartClient />

        <h2 id="what-is-katakana">What katakana is for</h2>
        <p>
          Katakana is the angular Japanese script used primarily for words borrowed from other
          languages. When a foreign word enters Japanese, it gets transcribed into katakana sounds.
          Coffee becomes コーヒー (koohii). Computer becomes コンピューター (konpyuutaa). Television
          becomes テレビ (terebi). These loanwords, called gairaigo, make up a large chunk of
          everyday Japanese vocabulary.
        </p>
        <p>
          Katakana has other uses too. Brand names and product names often appear in katakana.
          Scientific terms, especially for plants and animals, use katakana by convention. Manga
          and anime use katakana for robotic speech, foreign characters, or words said with unusual
          emphasis. Onomatopoeia - the sound words that Japanese uses constantly - often appear in
          katakana as well.
        </p>

        <h2 id="learning-order">Learning katakana after hiragana</h2>
        <p>
          The single most important thing to know: katakana represents the exact same sounds as
          hiragana. Every syllable you can say in hiragana, you can say in katakana. The sounds do
          not change. Only the shapes change. This means if you already know hiragana, you are not
          learning a new phonetic system - you are learning 46 new shapes that map to sounds you
          already know. Most adults get through katakana in two to four focused sessions.
        </p>
        <p>
          The recommended approach is to learn katakana the same way you did hiragana: row by row,
          with active recall. Learn a row, cover the romaji, try to recall each character. Then add
          the next row and drill both together. By the time you reach the end, the early rows are
          already reinforced.
        </p>

        <h2 id="confusables">Katakana characters that look alike</h2>
        <p>
          Katakana has its own set of visually similar characters that trip up learners. These are
          the pairs worth watching:
        </p>
        <ul>
          <li>
            <strong>ソ (so) vs. ン (n)</strong> - perhaps the most famous. ソ has strokes that
            angle downward-right then curve; ン angles upward-right. Pay attention to the direction
            of the final stroke.
          </li>
          <li>
            <strong>シ (shi) vs. ツ (tsu)</strong> - the katakana version of the hiragana shi/tsu
            confusion. シ has two short strokes on the left going left-to-right; ツ has two short
            strokes going top-to-bottom.
          </li>
          <li>
            <strong>ア (a) vs. マ (ma)</strong> - both have a similar top-left corner. The
            difference is the bottom portion.
          </li>
          <li>
            <strong>ク (ku) vs. タ (ta)</strong> - similar structure, different detail in the upper
            strokes.
          </li>
          <li>
            <strong>テ (te) vs. チ (chi)</strong> - テ has a clean horizontal top with a drop; チ
            has a curved lower portion.
          </li>
        </ul>

        <h2 id="loanwords-in-practice">Reading loanwords in practice</h2>
        <p>
          One of the rewards of learning katakana is that you can start reading foreign loanwords
          immediately. Walk into any convenience store in Japan or open a Japanese website and you
          will see dozens of katakana words you can decode. アイスクリーム (aisukuriimu, ice cream),
          レストラン (resutoran, restaurant), ホテル (hoteru, hotel), バス (basu, bus). The
          pronunciation usually follows English closely enough to be recognizable, though vowel
          lengths and consonant clusters are adjusted to fit Japanese phonology.
        </p>
        <p>
          Japanese sometimes adds vowels to break up consonant clusters that do not exist in
          Japanese. &quot;Strike&quot; becomes ストライク (sutoraiku). &quot;Bed&quot; becomes
          ベッド (beddo). Learning to anticipate these adjustments makes loanword recognition much
          faster.
        </p>

        <h2 id="long-vowels">Long vowels in katakana</h2>
        <p>
          Katakana uses a special character for long vowels: the horizontal dash ー. This character
          means &quot;hold the previous vowel longer.&quot; コーヒー (koohii) has two of them.
          ケーキ (keeki, cake) has one. This is different from hiragana, where long vowels are
          written by adding a second vowel character. The ー mark makes katakana text a bit easier
          to read once you know it.
        </p>

        <h2 id="next-steps">Where to go from here</h2>
        <p>
          Once you can read katakana alongside hiragana, you have the full phonetic foundation for
          Japanese. The next layer is vocabulary - specifically the JLPT N5 word list, which covers
          the 800 most essential words for beginners. You can also look at the{" "}
          <Link href="/guides/learn-katakana">complete katakana learning guide</Link> for a
          structured schedule, or take the{" "}
          <Link href="/tools/kana-quiz">kana quiz</Link> to test both scripts together.
        </p>
        <p>
          If you want a mobile app that handles hiragana, katakana, and vocabulary in one place,
          Inku is available on iPhone with a 7-day free trial.{" "}
          <Link href="/">Download Inku.</Link>
        </p>
      </LongFormLayout>
    </>
  );
}
