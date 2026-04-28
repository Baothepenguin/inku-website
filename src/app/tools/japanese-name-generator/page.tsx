import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { softwareToolSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { JapaneseNameGeneratorClient } from "./generator-client";

const TITLE = "Japanese Name Generator";
const DESCRIPTION =
  "Convert your English name to katakana and get a kanji name suggestion by theme. See how your name sounds in Japanese. Free, instant, no sign-up.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/tools/japanese-name-generator",
  keywords: [
    "japanese name generator",
    "english name in japanese",
    "name in katakana",
    "japanese name converter",
    "my name in japanese",
    "katakana name",
  ],
});

export default function JapaneseNameGeneratorPage() {
  return (
    <>
      <JsonLd
        id="japanese-name-generator"
        data={[
          softwareToolSchema({
            name: TITLE,
            description: DESCRIPTION,
            slug: "/tools/japanese-name-generator",
          }),
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            slug: "/tools/japanese-name-generator",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 720,
            keywords: ["japanese name generator", "english name in japanese", "katakana name"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Japanese Name Generator", path: "/tools/japanese-name-generator" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Tool"
        title={TITLE}
        subtitle="Type your English name and see it in katakana - the script Japanese uses for foreign names. Also get a kanji name suggestion based on a theme you choose."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Japanese Name Generator", href: "/tools/japanese-name-generator" },
        ]}
        sidebar={<DownloadCard campaign="name-generator-tool" />}
      >
        <AnswerBox>
          Foreign names are usually written in katakana in Japanese. This tool
          turns an English name into katakana and gives a creative kanji-style
          option for study and fun.
        </AnswerBox>

        <p>
          This tool does two things: it converts your English name into katakana using sound
          matching, and it suggests a kanji name based on a theme you pick. The katakana
          transliteration is the practical one - it is how a Japanese person would write your name
          on a form or in a message. The kanji suggestion is creative and thematic, showing the
          kind of single-character names common in Japan.
        </p>

        <JapaneseNameGeneratorClient />

        <h2 id="how-katakana-names-work">How katakana names work</h2>
        <p>
          Japan uses katakana to write foreign names, words, and concepts that have no native
          Japanese equivalent. When someone from another country introduces themselves in Japan,
          their name gets written in katakana. This process is called transliteration - mapping
          the sounds of one language onto the phonetic system of another.
        </p>
        <p>
          Japanese phonology is simpler than English in one key way: almost every syllable is a
          consonant followed by a vowel (or just a vowel). There are very few consonant clusters.
          So when a foreign name arrives, it gets fitted into this CV syllable structure, sometimes
          adding vowels where English does not have them. &quot;Mike&quot; becomes マイク (Ma-i-ku).
          &quot;Chris&quot; becomes クリス (Ku-ri-su). The vowel insertions are predictable once you
          know the pattern.
        </p>

        <h2 id="l-to-r">Why L sounds become R</h2>
        <p>
          Japanese does not have a native L sound. The closest equivalent is the R sound, which
          is itself quite different from English R - it is more like a flapped sound between L and
          R. When English names with L are written in katakana, the L gets mapped to this R-like
          sound. So &quot;Laura&quot; becomes ローラ (Roo-ra), not &quot;Lowla.&quot;
        </p>
        <p>
          The same applies to V sounds - Japanese traditionally does not have V, so V is often
          mapped to B, though modern katakana uses ヴ (a modified ウ) for foreign V sounds in
          loanwords.
        </p>

        <h2 id="gairaigo">Gairaigo - foreign words in Japanese</h2>
        <p>
          Katakana names for foreign people fall into a broader category called gairaigo, which
          means &quot;words coming from outside.&quot; A huge portion of modern Japanese vocabulary
          consists of gairaigo: アイスクリーム (ice cream), テレビ (television), コンピューター
          (computer), スマートフォン (smartphone). These words all follow the same phonological
          adaptation rules as names. Once you understand the katakana phonology, you can decode
          most foreign loanwords even without knowing Japanese vocabulary.
        </p>

        <h2 id="kanji-names">How kanji names work for Japanese people</h2>
        <p>
          Japanese names are typically written in kanji, not katakana. A Japanese person&apos;s
          name has both a written form (kanji) and a reading (how it is pronounced). The kanji
          chosen for a name usually carry meaning that the parents value - nature, virtue, beauty,
          strength. This is why two people named &quot;Yuki&quot; might have completely different
          kanji: 幸 (happiness), 雪 (snow), 由紀 (reason + chronicle), and so on.
        </p>
        <p>
          The kanji suggestions in this tool are thematic - they show single characters and two-
          character combinations that are common in Japanese names with their associated meanings.
          They are not personalized names in the traditional sense, but they illustrate the kind
          of meaning-rich naming that Japanese culture values.
        </p>

        <h2 id="learning-katakana">Learning to read katakana yourself</h2>
        <p>
          The tool transliterates your name automatically, but reading katakana yourself is a
          skill worth having. Once you know katakana, you can read your own name in Japanese, read
          loanwords on menus and packaging, and recognize brand names and product names in Japan.
        </p>
        <p>
          Katakana is usually learned right after hiragana. The sounds are identical - only the
          shapes differ. Most adults can learn all 46 katakana in two to four focused sessions.
          Start with the{" "}
          <Link href="/tools/katakana-chart">interactive katakana chart</Link>, then test yourself
          with the <Link href="/tools/kana-quiz">kana quiz</Link>. Or jump into the full{" "}
          <Link href="/guides/learn-katakana">katakana learning guide</Link> for a structured
          schedule.
        </p>
        <p>
          If you want to practice kana on your phone with spaced repetition and audio support,
          Inku has both hiragana and katakana with handwriting practice.{" "}
          <Link href="/">Download Inku on iPhone with a 7-day free trial.</Link>
        </p>
      </LongFormLayout>
    </>
  );
}
