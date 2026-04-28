import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { Callout } from "@/components/callout";
import { KanaChart } from "@/components/kana-chart";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Learn Katakana: A Practical Guide for Adults";
const SUBTITLE =
  "Forty-six angular characters, a three-day plan, and the loanword patterns that finally make katakana click.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "The complete katakana guide. 46 characters, side-by-side with hiragana, pronunciation, and the loanword patterns that make katakana click.",
  path: "/guides/learn-katakana",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: ["learn katakana", "katakana chart", "katakana guide", "katakana mnemonics"],
});

const TOC = [
  { id: "answer", label: "Short answer" },
  { id: "why", label: "What katakana is for" },
  { id: "chart", label: "The 46-character chart" },
  { id: "loanwords", label: "Katakana loanword patterns" },
  { id: "schedule", label: "A three-day schedule" },
  { id: "confusables", label: "The confusables" },
  { id: "extended", label: "Sounds only katakana can write" },
  { id: "practice", label: "How to practice in the wild" },
  { id: "faq", label: "Common questions" },
];

const FAQS = [
  {
    q: "Should I learn katakana before or after hiragana?",
    a: "After. Hiragana is used in roughly 40 percent of everyday Japanese text and every single verb ending. Katakana shows up less often and is easier to pick up once hiragana is automatic.",
  },
  {
    q: "Why does katakana look so different from hiragana?",
    a: "Historically, hiragana was the cursive form developed from simplified kanji, while katakana was the pared-down form used by Buddhist monks for pronunciation notes. The shapes diverged on purpose; they are two scripts written with different hands.",
  },
  {
    q: "Can I live in Japan knowing only hiragana?",
    a: "You can survive, but you'll struggle. Train station names, restaurant menus, foreign product names, and most tech vocabulary are in katakana. You will also feel like a tourist more than you have to.",
  },
  {
    q: "Which katakana are the hardest to tell apart?",
    a: "The classic confusables are シ (shi) vs ツ (tsu) and ン (n) vs ソ (so). Also ク (ku) vs ワ (wa), and ナ (na) vs メ (me) in certain fonts. Drill them in pairs from day one.",
  },
  {
    q: "Is it true that katakana is harder than hiragana?",
    a: "Most adult learners find it equally hard to learn the shapes but harder to read in context. That is because your brain is faster at recognizing cursive shapes (hiragana) than angular ones, and because katakana words are often distorted English that you have to decode twice.",
  },
];

export default function LearnKatakanaPage() {
  return (
    <>
      <JsonLd
        id="learn-katakana"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/guides/learn-katakana",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 4200,
            keywords: ["katakana", "learn katakana"],
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Learn Katakana", path: "/guides/learn-katakana" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Pillar guide"
        title={TITLE}
        subtitle={SUBTITLE}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="22 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Learn Katakana", href: "/guides/learn-katakana" },
        ]}
        toc={TOC}
        sidebar={<DownloadCard campaign="katakana-guide" />}
      >
        <AnswerBox>
          Katakana is the angular Japanese script used almost exclusively
          for foreign loanwords, brand names, and emphasis. Most adults
          already know hiragana can pick up all 46 katakana in three to five
          days. The sounds are identical to hiragana; only the shapes change.
        </AnswerBox>

        <h2 id="why">What katakana is for</h2>
        <p>
          If hiragana is the cursive workhorse of Japanese, katakana is the
          block-letter sibling. Same phonetic system, 46 syllables, written
          in a different hand. But the scripts are not interchangeable: they
          do different jobs.
        </p>
        <p>
          Katakana appears in three main contexts:
        </p>
        <ol>
          <li>
            <strong>Foreign loanwords</strong> (gairaigo). Coffee is コーヒー
            (ko-hi-). Computer is コンピューター (konpyu-ta-). Menu, taxi,
            piano, television, hotel, beer, beef, and thousands more are
            written in katakana because they arrived from another language.
          </li>
          <li>
            <strong>Brand names, foreign personal names, country names.</strong>
            Tokyo (東京) is kanji, but your name, if it is non-Japanese, will
            appear in katakana on Japanese documents.
          </li>
          <li>
            <strong>Emphasis and onomatopoeia.</strong> The Japanese
            equivalent of italics. Manga especially uses katakana for sound
            effects and emotional stress. ドキドキ (dokidoki, a beating
            heart) or ワクワク (wakuwaku, excitement) are katakana.
          </li>
        </ol>

        <h2 id="chart">The 46-character chart</h2>
        <p>
          Here is the complete katakana set. Same sounds as hiragana, read
          the same way (top to bottom, left to right in aiueo order).
        </p>

        <KanaChart mode="katakana" />

        <p>
          Notice the sharper, straighter forms compared with hiragana. Where
          hiragana flows, katakana stacks. This is a useful mental model: if
          a character feels crisp and geometric, it is katakana; if it feels
          cursive and looping, it is hiragana.
        </p>

        <h2 id="loanwords">Katakana loanword patterns</h2>
        <p>
          Reading katakana is a strange hybrid skill because most of what
          you read is warped English. Once you learn the warping patterns,
          a huge amount of Japanese becomes instantly readable. Here are
          the big ones.
        </p>

        <h3 id="vowel-endings">Vowels attach to every consonant</h3>
        <p>
          Japanese syllables end in vowels, so English words have to be
          padded. "Cat" becomes キャット (kyatto). "Bus" becomes バス (basu).
          "Desk" becomes デスク (desuku). When you read an unfamiliar
          katakana word, try stripping the trailing vowels first.
        </p>

        <h3 id="long-vowel">The long-vowel dash (ー)</h3>
        <p>
          Katakana uses a horizontal bar to extend a vowel: コーヒー
          (ko-hi-, coffee), カード (ka-do, card), スーパー (su-pa-, supermarket).
          It always takes the same sound as the vowel before it.
        </p>

        <h3 id="th-to-s">"Th" becomes "s" or "z"</h3>
        <p>
          Japanese has no "th" sound. "Thank you" becomes サンキュー
          (sankyu-). "Mother" becomes マザー (maza-). If you see a word that
          looks like it should start with a TH, try S or Z first.
        </p>

        <h3 id="l-to-r">"L" becomes "r"</h3>
        <p>
          Japanese has a single sound that English hears as halfway between
          L and R. Loanwords reflect this: "lemon" is レモン (remon),
          "love" is ラブ (rabu), "light" is ライト (raito).
        </p>

        <h3 id="v-to-b">"V" becomes "b" (usually)</h3>
        <p>
          "Video" is ビデオ (bideo). "Violin" is バイオリン (baiorin).
          Recent loanwords sometimes use ヴ (a modified ウ) to preserve the
          V sound: ヴァイオリン. Both are correct.
        </p>

        <h3 id="try-saying-it">When in doubt, say it out loud</h3>
        <p>
          If you can sound out a katakana word and the result resembles an
          English word (or German, or Dutch, or Portuguese, or French), you
          have probably got it. The famous example is アルバイト (arubaito,
          part-time job) from the German Arbeit.
        </p>

        <Callout tone="tip" title="A shortcut that actually works">
          <p>
            Walk into any Starbucks in Japan. The menu is 95 percent
            katakana. カフェラテ (kafe rate), キャラメルマキアート
            (kyarameru makia-to), カプチーノ (kapuchi-no). Five minutes of
            reading a coffee menu out loud teaches you more katakana than
            an hour of flashcards.
          </p>
        </Callout>

        <h2 id="schedule">A three-day schedule</h2>
        <p>
          If hiragana took you three focused days, katakana will take two
          to three. The shapes are new, but your brain is already trained
          on the sounds.
        </p>

        <h3 id="day-one-kat">Day 1  -  21 characters</h3>
        <p>
          Learn rows ア, カ, サ, タ, and ン. Same process as hiragana:
          shape, audio, compare each katakana against its hiragana
          counterpart ("This is the angular version of か") and write each
          three times. Morning session 45 minutes, evening session 20.
        </p>

        <h3 id="day-two-kat">Day 2  -  15 more</h3>
        <p>
          Add rows ナ, ハ, マ. Review Day 1 first, then introduce new.
          Shuffle all 36 and drill.
        </p>

        <h3 id="day-three-kat">Day 3  -  the last 10 and cleanup</h3>
        <p>
          Add ヤ, ラ, ワ rows and ヲ. Drill the full 46. Isolate the
          confusables (see below) and drill them together. Read a few
          katakana words in context.
        </p>

        <h2 id="confusables">The confusables</h2>
        <p>
          Katakana has sharper shapes than hiragana, which means small
          differences matter more. These are the pairs that trip up nearly
          every learner.
        </p>

        <h3 id="shi-tsu">シ vs ツ</h3>
        <p>
          Both are three strokes with dashes on the left. The difference is
          direction. シ (shi) has dashes that lean towards the lower left
          and a long stroke that finishes upward from bottom-right to
          top-right. ツ (tsu) has dashes that hang from the top, pointing
          downward, and a long final stroke that finishes downward.
        </p>
        <p>
          Think of it as "shi smiles sideways, tsu frowns downward."
        </p>

        <h3 id="n-so">ン vs ソ</h3>
        <p>
          One-stroke characters that look almost identical. ン (n) has its
          final stroke moving from bottom-left to upper-right (rising). ソ
          (so) has its final stroke moving from upper-right to lower-left
          (falling). In handwriting, angle matters more than anything.
        </p>

        <h3 id="ku-wa">ク vs ワ</h3>
        <p>
          Both are two strokes. ク (ku) has a short diagonal that extends
          off the left side. ワ (wa) has a continuous box-like shape with
          no extension. Lean into the shape difference: ク kicks out, ワ
          stays in.
        </p>

        <h3 id="na-me">ナ vs メ</h3>
        <p>
          ナ (na) is a plus-sign-ish horizontal with a vertical tail. メ
          (me) is an X. In clean fonts the difference is obvious; in
          handwritten notes it is not. Drill them side by side.
        </p>

        <h2 id="extended">Sounds only katakana can write</h2>
        <p>
          Modern loanwords sometimes need sounds that standard Japanese
          doesn&apos;t have. Katakana has extensions to cover them.
        </p>
        <ul>
          <li>
            <strong>ファ, フィ, フェ, フォ</strong>  -  fa, fi, fe, fo (for
            words like ファミリー, family).
          </li>
          <li>
            <strong>ヴァ, ヴィ, ヴ, ヴェ, ヴォ</strong>  -  va, vi, vu, ve, vo
            (rare, and younger speakers often just use B instead).
          </li>
          <li>
            <strong>ティ, ディ</strong>  -  ti, di (for パーティ (party) and
            ディナー (dinner)).
          </li>
          <li>
            <strong>チェ, ジェ</strong>  -  che, je (for チェス (chess) and
            ジェット (jet)).
          </li>
          <li>
            <strong>ウィ, ウェ, ウォ</strong>  -  wi, we, wo (for
            ウェブ (web) and ウィスキー (whiskey)).
          </li>
        </ul>
        <p>
          You do not need to memorize these upfront. Recognize them when
          you see them.
        </p>

        <h2 id="practice">How to practice katakana in the wild</h2>
        <p>
          Katakana practice rewards volume more than depth because the
          words you encounter will almost always be warped English. You
          want to see thousands of warped words so the decoding becomes
          automatic.
        </p>

        <h3 id="airports">Airports, hotels, vending machines</h3>
        <p>
          Any touristic Japanese environment is katakana-heavy. Vending
          machines have カフェオレ, コーラ, コーヒー, and so on. Reading
          these in the wild is how your brain builds the pattern library.
        </p>

        <h3 id="product-labels">Product labels</h3>
        <p>
          Japanese grocery stores are a katakana playground. Walk past the
          snack aisle and you will see ポテトチップス, バター, ミルク,
          チョコレート  -  and also the occasional Japanese product that
          uses katakana for a marketing edge (the Japanese confection
          オレオ is Oreo, yes).
        </p>

        <h3 id="your-name">Write your name</h3>
        <p>
          Look up the standard katakana version of your own name. Write
          it ten times. Say it aloud. You will hear it every time someone
          asks you to repeat it in a Japanese context, and the sound of
          your own name in another script is weirdly motivating.
        </p>

        <h2 id="faq">Common questions</h2>
        <div className="not-prose mt-6 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-border bg-cream-raised p-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-serif text-lg text-ink">
                {faq.q}
                <span className="mt-1 shrink-0 font-sans text-xl text-matcha transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-serif text-[1rem] leading-relaxed text-ink-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8">
          Next step:{" "}
          <Link href="/guides/jlpt-n5-vocabulary">start building vocabulary</Link>,
          or jump to{" "}
          <Link href="/guides/how-to-learn-japanese">
            the full learning roadmap
          </Link>
          . If you want to see both hiragana and katakana drilled in one
          app,{" "}
          <Link href="/">download Inku on iPhone</Link>. The first week is
          free.
        </p>
      </LongFormLayout>
    </>
  );
}
