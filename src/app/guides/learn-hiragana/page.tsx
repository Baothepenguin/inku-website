import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { Callout } from "@/components/callout";
import { KanaChart } from "@/components/kana-chart";
import { QuoteBlock } from "@/components/quote-block";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Learn Hiragana: Inku's Complete Guide";
const SUBTITLE =
  "Everything you need to read your first Japanese sentence. 46 characters, a three-day schedule, mnemonics that stick, and the gotchas most guides skip.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Learn all 46 hiragana in three days with Inku's complete illustrated guide. Audio, mnemonics, stroke order, and a practice schedule you can actually keep.",
  path: "/guides/learn-hiragana",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "learn hiragana",
    "hiragana chart",
    "hiragana guide",
    "hiragana in 3 days",
    "hiragana mnemonics",
    "Japanese alphabet",
  ],
});

const TOC = [
  { id: "answer", label: "Short answer" },
  { id: "why", label: "Why hiragana first" },
  { id: "chart", label: "The 46-character chart" },
  { id: "order", label: "The order to learn them in" },
  { id: "schedule", label: "A three-day schedule" },
  { id: "mnemonics", label: "Mnemonics that actually stick" },
  { id: "dakuten", label: "Dakuten, handakuten, and yōon" },
  { id: "stroke", label: "Stroke order, briefly" },
  { id: "traps", label: "Gotchas most guides skip" },
  { id: "practice", label: "How to practice after day three" },
  { id: "faq", label: "Common questions" },
  { id: "next", label: "What to do next" },
];

const FAQS = [
  {
    q: "How long does it actually take to learn hiragana?",
    a: "Most adult learners can recognize all 46 hiragana after two to four focused 30-minute sessions. Writing them from memory takes longer, usually a week of daily practice. Fluent reading (hiragana in context, without pausing) takes four to eight weeks of regular exposure.",
  },
  {
    q: "Should I learn hiragana or katakana first?",
    a: "Hiragana first. Native Japanese words, grammar, and particles are written in hiragana, so you encounter it more often. Once hiragana is automatic, katakana takes a fraction of the time because the sound system is identical.",
  },
  {
    q: "Should I learn to write hiragana by hand?",
    a: "Yes, at least once. Writing each character three to five times on paper locks it into motor memory far faster than reading alone. After you can write them once, recognition is what matters day to day.",
  },
  {
    q: "Do I need to learn stroke order?",
    a: "You don't need to memorize every stroke count, but the general direction (top to bottom, left to right) matters. It makes your handwriting legible and sets you up for kanji later, where stroke order is non-negotiable.",
  },
  {
    q: "What are the easiest hiragana to mix up?",
    a: "The classic pairs: し (shi) and つ (tsu), ね (ne) and れ (re) and わ (wa), ぬ (nu) and め (me), ろ (ro) and る (ru). Drill these pairs together until they split in your head.",
  },
  {
    q: "How many hiragana do I need to start reading?",
    a: "You can start reading simple text once you know all 46 plus dakuten (the voiced versions like が, ざ, だ). That is about 71 symbols total. You can start decoding children's books and app menus at that point.",
  },
];

const STEPS = [
  {
    name: "Day 1: The first 21 characters",
    text: "Learn rows a, ka, sa, and ta (plus the lone n). That is 21 characters. Spend 45 minutes in the morning and 20 minutes in the evening, alternating between mnemonic study and recognition drill.",
  },
  {
    name: "Day 2: The next 15, plus reviews",
    text: "Add rows na, ha, and ma. Review the 21 from Day 1 first. Then introduce the new 15. Finish by recognizing all 36 from a shuffled deck.",
  },
  {
    name: "Day 3: The last 10 and cleanup",
    text: "Add rows ya, ra, and wa (plus を). That closes the set at 46. Review all 46, isolate the ones that still feel sticky, and drill the classic confusables.",
  },
  {
    name: "Days 4-7: Lock it in",
    text: "Do a 10-minute daily review. Start reading hiragana-only text (children's books, simple social posts). Add dakuten and yōon as you see them.",
  },
];

export default function LearnHiraganaPage() {
  return (
    <>
      <JsonLd
        id="learn-hiragana"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/guides/learn-hiragana",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 5900,
            keywords: ["hiragana", "learn hiragana", "hiragana chart"],
          }),
          howToSchema({
            name: "Learn hiragana in three days",
            description:
              "A three-day practice schedule to go from zero hiragana to recognition of all 46 characters.",
            slug: "/guides/learn-hiragana",
            totalTime: "P3D",
            steps: STEPS,
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Learn Hiragana", path: "/guides/learn-hiragana" },
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
        readingTime="28 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Learn Hiragana", href: "/guides/learn-hiragana" },
        ]}
        toc={TOC}
        sidebar={<DownloadCard campaign="hiragana-guide" />}
      >
        <AnswerBox>
          Hiragana is the cursive Japanese script used for native words,
          grammar endings, and particles. Most adults can recognize all 46
          characters after two or three focused 30-minute sessions. Writing
          them from memory takes about a week of daily practice. This guide
          gives you the chart, the order, the mnemonics, and a three-day plan.
        </AnswerBox>

        <h2 id="why">Why hiragana first</h2>
        <p>
          Every beginner book will tell you to learn hiragana first. Almost
          none tell you why.
        </p>
        <p>
          Japanese is written with three scripts. Hiragana is the cursive set
          used for native Japanese words, verb endings, and particles (the
          small connector words that glue sentences together). Katakana is the
          angular set used for foreign loanwords. Kanji are the imported
          Chinese characters that carry most of the meaning.
        </p>
        <p>
          Hiragana is the script you will see most often, by a wide margin. A
          typical sentence is maybe 40 percent hiragana, 30 percent kanji, 20
          percent katakana, 10 percent punctuation. Hiragana also covers every
          sound in the language: 46 characters, plus their voiced and combined
          variants, represent every syllable you will ever need to say.
        </p>
        <p>
          Once you know hiragana, two things change. First, you can pronounce
          anything written in the language, even if you do not know what it
          means. Second, katakana becomes a three-day project because the
          sounds are identical; only the shapes change.
        </p>

        <Callout tone="tip" title="Why not romaji (English letters)?">
          <p>
            Romaji is a scaffold that becomes a cage. Every minute you spend
            reading Japanese in romaji is a minute you are not building the
            visual pattern recognition that makes actual reading feel
            automatic. Skip it. The slight friction of learning hiragana first
            is paid back ten times over.
          </p>
        </Callout>

        <h2 id="chart">The 46-character chart</h2>
        <p>
          Here is the complete set. Each character is a syllable (a consonant
          plus a vowel, except for the vowels themselves and the lone ん).
          Read it top to bottom, left to right, the way Japanese kana is
          traditionally ordered (aiueo).
        </p>

        <KanaChart mode="hiragana" />

        <p>
          That chart is 46 symbols. They map one-to-one to sounds. There are
          no silent letters, no double consonants hiding, no "magic e." If you
          can say the sound, you can write it in hiragana.
        </p>

        <h2 id="order">The order to learn them in</h2>
        <p>
          Textbooks teach hiragana row by row: a, ka, sa, ta, na, and so on.
          That is the order we&apos;ll use here because it&apos;s the order the
          language is indexed in, and because it naturally spreads the
          confusable characters across days.
        </p>
        <p>
          There is a school of thought that says you should learn the five
          vowels first, then whichever rows give you the most common words
          soonest. That works. It is also more complicated, and it loses the
          aiueo ordering that makes dictionaries and phone books navigable.
          Stick with row order.
        </p>

        <h2 id="schedule">A three-day schedule you can actually keep</h2>
        <p>
          The biggest mistake beginners make is spreading hiragana across
          weeks. At that pace you forget the first row by the time you meet
          the fifth. Three days works better because the spacing is tight
          enough to hold.
        </p>
        <p>
          Here is the schedule. Each day is two sessions, morning and
          evening, totaling about an hour.
        </p>

        <h3 id="day-one">Day 1  -  the first 21 characters</h3>
        <p>
          Morning (45 minutes). Introduce a, ka, sa, and ta rows plus the
          standalone ん (n). That is 21 characters. For each row, look at the
          shape, listen to the audio, read the mnemonic, write the character
          three times on paper. Move on when you can recognize all five in a
          row from a shuffled set.
        </p>
        <p>
          Evening (20 minutes). Shuffle all 21 together. Drill until you can
          name every one in under two seconds. Flag the ones that hesitate.
        </p>

        <h3 id="day-two">Day 2  -  the next 15</h3>
        <p>
          Morning (45 minutes). Do a 5-minute review of Day 1 first. Then
          introduce na, ha, and ma rows. That is 15 new characters. Same
          process: shape, audio, mnemonic, write three times.
        </p>
        <p>
          Evening (20 minutes). Shuffle all 36. Drill recognition. You will
          find that some from Day 1 have decayed; that is normal. Treat the
          drill as the learning, not the test.
        </p>

        <h3 id="day-three">Day 3  -  the last 10 and cleanup</h3>
        <p>
          Morning (45 minutes). Review all 36 first. Then introduce ya, ra,
          and wa rows plus を (wo). That closes the set at 46. The wa row is
          small (three characters) because most of its slots are extinct.
        </p>
        <p>
          Evening (30 minutes). Do the full 46 in a shuffled drill. Then
          isolate the confusable pairs (see{" "}
          <a href="#traps">Gotchas</a> below) and drill them side by side
          until they feel like different letters.
        </p>

        <Callout tone="success" title="At the end of Day 3">
          <p>
            You should be able to read any hiragana word aloud, even slowly.
            That is the bar. Fluent speed comes from the next week of
            contact, not from more drilling.
          </p>
        </Callout>

        <h3 id="days-4-7">Days 4-7  -  locking it in</h3>
        <p>
          Your brain will forget half of Day 1 by Day 5 if you stop. Do a
          10-minute shuffled drill every day for the rest of the week. Start
          reading simple hiragana-only text: children&apos;s books, the
          captions on kids&apos; TV, the names of stations on a Japanese map.
        </p>
        <p>
          Inku&apos;s hiragana deck is built exactly on this schedule.
          Each session ends when today&apos;s review ends. A softer habit. The
          math handles spacing so you do not have to.{" "}
          <Link href="/">Download Inku on iPhone</Link> and let the app drive
          it.
        </p>

        <h2 id="mnemonics">Mnemonics that actually stick</h2>
        <p>
          Rote memorization works, but it is slow. A good mnemonic turns a
          shape into a story, and stories stay. Here is the approach that
          takes most people through hiragana without pain.
        </p>
        <p>
          For each character, look at what it resembles. Give it a little
          narrative that includes the sound. The sillier the image, the
          stickier it is.
        </p>

        <h3 id="vowel-row">The vowel row (aiueo)</h3>
        <ul>
          <li>
            <strong>あ (a)</strong>  -  an antelope with crossed antlers. It
            lunges at you saying "ah!"
          </li>
          <li>
            <strong>い (i)</strong>  -  two stick figures, one tall, one short.
            "I, I, me."
          </li>
          <li>
            <strong>う (u)</strong>  -  a person bowing. "Oooo, sorry."
          </li>
          <li>
            <strong>え (e)</strong>  -  an exotic bird with a floppy feather.
            "Hey!"
          </li>
          <li>
            <strong>お (o)</strong>  -  a pitcher with a handle. You lift it and
            say "Oh, that is heavy."
          </li>
        </ul>

        <h3 id="k-row">The k-row (ka ki ku ke ko)</h3>
        <ul>
          <li>
            <strong>か (ka)</strong>  -  a sword stabbing into wood. "Ka-chunk."
          </li>
          <li>
            <strong>き (ki)</strong>  -  an old-fashioned key shape.
          </li>
          <li>
            <strong>く (ku)</strong>  -  a bird&apos;s beak opening. "Koo-koo."
          </li>
          <li>
            <strong>け (ke)</strong>  -  a keg on a stand.
          </li>
          <li>
            <strong>こ (ko)</strong>  -  two horizontal lines, a stubby cocoon.
          </li>
        </ul>

        <h3 id="s-row">The s-row (sa shi su se so)</h3>
        <ul>
          <li>
            <strong>さ (sa)</strong>  -  a boxing sword (the vertical with a
            hook). "Sah!"
          </li>
          <li>
            <strong>し (shi)</strong>  -  a fishhook hanging down. "She is
            hooked."
          </li>
          <li>
            <strong>す (su)</strong>  -  a loop like a lasso. "Swoop."
          </li>
          <li>
            <strong>せ (se)</strong>  -  a seatbelt clipping across.
          </li>
          <li>
            <strong>そ (so)</strong>  -  a zig-zag like a needle threading.
            "So-so stitching."
          </li>
        </ul>

        <p>
          You do not need to memorize this whole table of mnemonics at once.
          Read the story, look at the shape, move on. When the shape shows
          up later in a drill, you will hear the story in your head before
          you consciously read the character. That is the point.
        </p>

        <Callout tone="tip" title="Make your own mnemonics too">
          <p>
            The strongest mnemonics are the ones you invent. If the antelope
            doesn&apos;t land for あ, give it your own image. The rule is
            vividness, not cleverness.
          </p>
        </Callout>

        <h2 id="dakuten">Dakuten, handakuten, and yōon</h2>
        <p>
          Once you know the 46, three small additions unlock roughly 25 more
          sounds without any new shapes to memorize.
        </p>

        <h3 id="dakuten-marks">Dakuten (゛) and handakuten (゜)</h3>
        <p>
          Add two small marks (dakuten) to the upper right of a character to
          voice it. か (ka) becomes が (ga). さ (sa) becomes ざ (za). た (ta)
          becomes だ (da). は (ha) becomes ば (ba). Add a small circle
          (handakuten) to は-row to get ぱ (pa). That is it. Five rows become
          ten.
        </p>

        <h3 id="yoon">Yōon (combined sounds)</h3>
        <p>
          Small や, ゆ, ょ attached to an i-column character combine into a
          single syllable. き (ki) plus small ゃ becomes きゃ (kya). し (shi)
          plus small ゅ becomes しゅ (shu). These are how you write words
          like きょう (kyou, today) and しゃしん (shashin, photograph).
        </p>

        <h2 id="stroke">Stroke order, briefly</h2>
        <p>
          Three rules cover most hiragana:
        </p>
        <ol>
          <li>Top to bottom.</li>
          <li>Left to right.</li>
          <li>Horizontal before vertical when they cross.</li>
        </ol>
        <p>
          You do not need to memorize which character is three strokes versus
          four. You need to write them in a direction that is legible and
          consistent. Inku&apos;s handwriting practice mode walks you through
          each character&apos;s stroke order with a finger-tracing overlay.
          That is the one mode where watching the animation first actually
          helps.
        </p>

        <h2 id="traps">Gotchas most guides skip</h2>

        <h3 id="confusable-pairs">Confusable pairs</h3>
        <p>
          There are five pairs that trip nearly every adult learner. Drill
          them together, not apart.
        </p>
        <ul>
          <li>
            <span className="jp text-lg">し</span> (shi) looks like a fishhook
            hanging down. <span className="jp text-lg">つ</span> (tsu) looks
            like a fishhook lying on its side. Write them next to each other
            ten times.
          </li>
          <li>
            <span className="jp text-lg">ね</span> (ne),{" "}
            <span className="jp text-lg">れ</span> (re), and{" "}
            <span className="jp text-lg">わ</span> (wa) share the same left
            side. The right side is what distinguishes them. Practice the
            difference in pairs: ね vs れ, then れ vs わ.
          </li>
          <li>
            <span className="jp text-lg">ぬ</span> (nu) and{" "}
            <span className="jp text-lg">め</span> (me). The ぬ has an extra
            loop.
          </li>
          <li>
            <span className="jp text-lg">ろ</span> (ro) and{" "}
            <span className="jp text-lg">る</span> (ru). The る has a loop at
            the bottom.
          </li>
          <li>
            <span className="jp text-lg">は</span> (ha),{" "}
            <span className="jp text-lg">ほ</span> (ho), and{" "}
            <span className="jp text-lg">ま</span> (ma). Three cousins. Drill
            them as a triplet until the small visual differences feel loud.
          </li>
        </ul>

        <h3 id="long-vowels">Long vowels</h3>
        <p>
          Japanese distinguishes short from long vowels, and the difference
          can change meaning. おばさん (obasan, aunt) and おばあさん
          (obaasan, grandmother) are different words. In hiragana, a long
          vowel is usually written with an extra vowel character matching the
          one before it: おかあさん (okaasan, mother), おとうさん (otousan,
          father). The exception is え followed by い, which is usually
          written that way but pronounced as a long え.
        </p>

        <h3 id="small-tsu">Small っ</h3>
        <p>
          A small っ (tsu) means the next consonant is doubled, as in きっぷ
          (kippu, ticket) or まって (matte, wait). It represents a slight
          pause in speech and, when you read it aloud, a beat where you
          close your mouth on the following consonant.
        </p>

        <h3 id="wo-particle">The を particle</h3>
        <p>
          を is pronounced "o" but written "wo." It exists almost exclusively
          as the object-marking particle. You will see it often and never in
          a native word. Burn that into your head early.
        </p>

        <h2 id="practice">How to practice after day three</h2>
        <p>
          The real learning happens after you know the shapes, when you
          start reading hiragana in the wild. Four habits speed this up.
        </p>

        <h3 id="habit-1">Read every menu item you pass</h3>
        <p>
          Japanese restaurant menus, sushi counter displays, the Kirin can
          in the convenience store. If you see hiragana, sound it out. Even
          if you do not know the word, the act of decoding is what moves
          reading from conscious to automatic.
        </p>

        <h3 id="habit-2">Use the app on your phone, not paper</h3>
        <p>
          You read phones. You do not read paper flashcards. Put hiragana
          review on your phone screen and you will do it. Inku&apos;s
          review session is shaped to fit a subway ride or a coffee break.
        </p>

        <h3 id="habit-3">Write one word a day on paper</h3>
        <p>
          Recognition and production are different skills. Pick one new
          word (or review one you met earlier that day) and write it three
          times on paper. After a week you will have written 21 words. After
          a month you will have a small notebook of real handwriting.
        </p>

        <h3 id="habit-4">Read one childrens book a week</h3>
        <p>
          Any bookstore in Japan, or any digital Japanese bookstore, has
          hiragana-only books written for early readers. They are simple,
          short, and meant to be read out loud. The kanji show up with
          furigana (tiny hiragana glosses) so you can decode without
          stopping.
        </p>

        <QuoteBlock
          quote="Use drills to learn the shape. Then read real Japanese as soon as you can. The goal is not to win the drill. The goal is to recognize hiragana when it appears in your day."
          attribution="Inku study note"
          eyebrow="Study note"
          className="my-10"
        />

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

        <h2 id="next">What to do next</h2>
        <p>
          Once hiragana feels comfortable, the obvious next step is{" "}
          <Link href="/guides/learn-katakana">katakana</Link>. Do not wait
          weeks; do it the following weekend while hiragana is fresh. Then
          start building vocabulary with the{" "}
          <Link href="/jlpt/n5">JLPT N5 deck</Link> and a{" "}
          <Link href="/guides/spaced-repetition-explained">
            proper spaced-repetition routine
          </Link>
          . If you are picking a tool, our comparison pages on{" "}
          <Link href="/vs/duolingo">Duolingo</Link>,{" "}
          <Link href="/vs/anki">Anki</Link>, and{" "}
          <Link href="/vs/wanikani">WaniKani</Link> will save you a few days
          of research.
        </p>
        <p>
          The whole premise of Inku is that the ten minutes a day you give
          Japanese should feel like time well spent, not a lap around a
          track.{" "}
          <Link href="/">
            Download Inku on iPhone with a 7-day free trial
          </Link>{" "}
          and see if the way it is shaped fits you.
        </p>
      </LongFormLayout>
    </>
  );
}
