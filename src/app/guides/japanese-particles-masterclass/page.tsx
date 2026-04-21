import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { Callout } from "@/components/callout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Japanese Particles: The Masterclass";
const SUBTITLE =
  "Every core Japanese particle, with example sentences, the edge cases, and the common mistakes. Built for adult learners who want the pattern, not just the rule.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "A complete, example-dense guide to every core Japanese particle: は, が, を, に, で, へ, と, から, まで, の, も, や.",
  path: "/guides/japanese-particles-masterclass",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "japanese particles",
    "particles guide",
    "wa vs ga",
    "ni vs de",
    "japanese grammar",
  ],
});

const PARTICLES = [
  {
    id: "wa",
    char: "は",
    romaji: "wa",
    name: "Topic marker",
    short:
      "Marks the topic of the sentence. 'As for X...' Pronounced 'wa' even though it's written with the hiragana 'ha.'",
    examples: [
      {
        jp: "私は学生です。",
        kana: "わたしはがくせいです。",
        en: "I am a student.",
        note: "The topic is 'me,' and the sentence tells you what I am.",
      },
      {
        jp: "コーヒーは好きです。",
        kana: "こーひーはすきです。",
        en: "I like coffee. (As for coffee, it is liked.)",
        note: "は frames coffee as the topic. The speaker is implied.",
      },
    ],
    notes: [
      "は marks topic, not subject. 'Topic' means 'what we're talking about right now.'",
      "The character is written は but pronounced wa when used as a particle.",
      "Use it to introduce a new topic or contrast one thing with another.",
    ],
  },
  {
    id: "ga",
    char: "が",
    romaji: "ga",
    name: "Subject marker",
    short:
      "Marks the grammatical subject. The thing doing the verb or being described, often newly introduced.",
    examples: [
      {
        jp: "犬がいます。",
        kana: "いぬがいます。",
        en: "There is a dog.",
        note: "が introduces the existence of the dog as new information.",
      },
      {
        jp: "誰が来ましたか？",
        kana: "だれがきましたか？",
        en: "Who came?",
        note: "Question words always take が, never は.",
      },
      {
        jp: "日本語が好きです。",
        kana: "にほんごがすきです。",
        en: "I like Japanese.",
        note: "With 好き (like), the liked thing is marked with が.",
      },
    ],
    notes: [
      "が introduces new or emphasized information. は is 'as for X,' が is 'it's X that...'",
      "Interrogative words (who, what, where) always pair with が.",
      "After words like 好き (like), 嫌い (dislike), 欲しい (want), 上手 (skilled), the object of feeling takes が.",
    ],
  },
  {
    id: "wo",
    char: "を",
    romaji: "wo / o",
    name: "Direct object marker",
    short:
      "Marks the direct object of a transitive verb. The thing that the verb is acting on.",
    examples: [
      {
        jp: "本を読みます。",
        kana: "ほんをよみます。",
        en: "I read a book.",
        note: "を marks 'book' as the object of 'read.'",
      },
      {
        jp: "水を飲む。",
        kana: "みずをのむ。",
        en: "Drink water.",
      },
    ],
    notes: [
      "Pronounced just 'o,' though written wo. It only appears as a particle.",
      "Transitive verbs (to read, to eat, to drink, to see, to write) all take を.",
      "Intransitive verbs (to rise, to arrive, to exist) do not take を.",
    ],
  },
  {
    id: "ni",
    char: "に",
    romaji: "ni",
    name: "Direction, time, and existence marker",
    short:
      "Points to a destination, a specific time, or a place where something exists. The arrow-tip particle.",
    examples: [
      {
        jp: "学校に行きます。",
        kana: "がっこうにいきます。",
        en: "I go to school.",
        note: "Destination of motion.",
      },
      {
        jp: "七時に起きます。",
        kana: "しちじにおきます。",
        en: "I wake up at 7 o'clock.",
        note: "Specific clock time.",
      },
      {
        jp: "机の上に本があります。",
        kana: "つくえのうえにほんがあります。",
        en: "There is a book on the desk.",
        note: "Location of existence.",
      },
    ],
    notes: [
      "Direction (to X): with 行く (go), 来る (come), 帰る (return).",
      "Time point (at X): with clock times, dates, days of the week.",
      "Location (at X): with exist verbs like ある and いる.",
      "Receiver (to X): 友達に手紙を書く (write a letter to a friend).",
    ],
  },
  {
    id: "de",
    char: "で",
    romaji: "de",
    name: "Activity location and means",
    short:
      "Marks the place where an action happens, or the tool/means used for an action.",
    examples: [
      {
        jp: "図書館で勉強します。",
        kana: "としょかんでべんきょうします。",
        en: "I study at the library.",
        note: "Location of activity.",
      },
      {
        jp: "バスで行く。",
        kana: "ばすでいく。",
        en: "Go by bus.",
        note: "Means of transportation.",
      },
      {
        jp: "箸でご飯を食べる。",
        kana: "はしでごはんをたべる。",
        en: "Eat rice with chopsticks.",
        note: "Tool or instrument.",
      },
    ],
    notes: [
      "Action location (at X): で marks where an activity happens. に marks where something exists, で marks where something happens.",
      "Means (by X, with X): で marks the tool or transport used.",
      "Classic confusable: に vs で. 学校に行く (go to school, destination) vs 学校で勉強する (study at school, activity location).",
    ],
  },
  {
    id: "e",
    char: "へ",
    romaji: "e",
    name: "Direction toward",
    short:
      "Similar to に, but specifically marking direction of movement. Pronounced 'e' even though written with the hiragana 'he.'",
    examples: [
      {
        jp: "東京へ行きます。",
        kana: "とうきょうへいきます。",
        en: "I'm going toward Tokyo.",
        note: "へ emphasizes the direction.",
      },
    ],
    notes: [
      "Written へ, pronounced 'e.'",
      "In beginner Japanese, に and へ are often interchangeable with motion verbs. へ sounds slightly more formal or directional.",
      "Only used for spatial direction. Can't replace に for time or existence.",
    ],
  },
  {
    id: "to",
    char: "と",
    romaji: "to",
    name: "And / with",
    short:
      "Joins two nouns ('X and Y') or marks a person you did something with ('X with me').",
    examples: [
      {
        jp: "コーヒーとパンを買う。",
        kana: "こーひーとぱんをかう。",
        en: "Buy coffee and bread.",
      },
      {
        jp: "友達と映画を見る。",
        kana: "ともだちとえいがをみる。",
        en: "Watch a movie with a friend.",
      },
    ],
    notes: [
      "Complete 'and' list: A と B と C (A, B, and C). Unlike English, commas aren't used within the list.",
      "'With' sense: の方 or 一緒に can add emphasis. 友達と一緒に (together with a friend).",
    ],
  },
  {
    id: "kara-made",
    char: "から / まで",
    romaji: "kara / made",
    name: "From / until",
    short:
      "から marks a starting point in space or time. まで marks an ending point.",
    examples: [
      {
        jp: "九時から五時まで働きます。",
        kana: "くじからごじまではたらきます。",
        en: "I work from 9 to 5.",
      },
      {
        jp: "東京から京都まで新幹線で行く。",
        kana: "とうきょうからきょうとまでしんかんせんでいく。",
        en: "Go from Tokyo to Kyoto by shinkansen.",
      },
    ],
    notes: [
      "から can also mean 'because' when attached to a verb or clause: 疲れたから寝る (I'm tired, so I'm going to sleep).",
    ],
  },
  {
    id: "no",
    char: "の",
    romaji: "no",
    name: "Possession / attribute",
    short:
      "Links two nouns. Most commonly marks possession ('X's Y'), but also modifies one noun with another.",
    examples: [
      {
        jp: "私の本",
        kana: "わたしのほん",
        en: "My book.",
      },
      {
        jp: "日本語の先生",
        kana: "にほんごのせんせい",
        en: "Japanese (language) teacher.",
        note: "Not necessarily a teacher from Japan. A teacher of Japanese.",
      },
    ],
    notes: [
      "Possessive: X の Y = X's Y.",
      "Attributive: X の Y = Y of kind X. 日本 (Japan) の 車 (car) = Japanese-style car.",
      "Also used as a sentence-ending question marker in casual speech: 大丈夫なの？ (are you okay?).",
    ],
  },
  {
    id: "mo",
    char: "も",
    romaji: "mo",
    name: "Also / even",
    short:
      "Replaces は or を to mean 'also,' 'too,' or 'even.' Marks that the statement applies equally to something else.",
    examples: [
      {
        jp: "私も学生です。",
        kana: "わたしもがくせいです。",
        en: "I am also a student.",
      },
      {
        jp: "コーヒーも飲みます。",
        kana: "こーひーものみます。",
        en: "I drink coffee too.",
      },
    ],
    notes: [
      "Replaces は or を when it attaches. は + も → も, not はも.",
      "With a question word: 誰も (anyone/no one), 何も (anything/nothing). 誰も来ません = nobody is coming.",
    ],
  },
  {
    id: "ya",
    char: "や",
    romaji: "ya",
    name: "Non-exhaustive and",
    short:
      "Similar to と, but implies 'and some others' rather than a complete list.",
    examples: [
      {
        jp: "本やペンを買いました。",
        kana: "ほんやぺんをかいました。",
        en: "I bought a book, a pen, and other things.",
        note: "や implies the list is a sample, not exhaustive.",
      },
    ],
    notes: [
      "Use と if the list is complete, や if it is representative.",
      "Often paired with など (etc.): 本やペンなど (books, pens, and so on).",
    ],
  },
];

const FAQS = [
  {
    q: "What is the single most confusing Japanese particle pair?",
    a: "は vs が. The short version: は marks the topic (what we're talking about), が marks the grammatical subject (who is doing the verb). In practice, use は for known information and が for new or emphasized information.",
  },
  {
    q: "Why is は pronounced 'wa' but written with the hiragana 'ha'?",
    a: "It's a historical leftover. Several particles (は, へ, を) were written one way in classical Japanese and pronounced another way after sound changes. Modern Japanese kept the spelling even after the pronunciation shifted.",
  },
  {
    q: "How do I know when to use に vs で?",
    a: "に marks a destination or a specific point (of time, of existence). で marks where an action takes place or what tool is used. 学校に行く (go to school, destination) but 学校で勉強する (study at school, activity location).",
  },
  {
    q: "Do I have to learn particles before starting to speak?",
    a: "Yes, but not perfectly. Learn は, が, を, に, で, の, と as a first pass. You will make mistakes and that is fine. Particles click after you hear and read them in hundreds of sentences.",
  },
  {
    q: "Can I drop particles in casual Japanese?",
    a: "Natives sometimes drop は, を, and が in casual spoken Japanese when context is clear. Don't do this as a beginner. Master the full forms first, then copy what you hear.",
  },
];

export default function ParticlesPage() {
  return (
    <>
      <JsonLd
        id="particles"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/guides/japanese-particles-masterclass",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 5200,
            keywords: ["japanese particles", "wa vs ga", "ni vs de"],
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            {
              name: "Japanese Particles Masterclass",
              path: "/guides/japanese-particles-masterclass",
            },
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
        readingTime="26 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          {
            name: "Japanese Particles Masterclass",
            href: "/guides/japanese-particles-masterclass",
          },
        ]}
        toc={[
          { id: "intro", label: "What particles are" },
          ...PARTICLES.map((p) => ({
            id: p.id,
            label: `${p.char} ${p.name}`,
          })),
          { id: "faq", label: "Common questions" },
        ]}
        sidebar={<DownloadCard campaign="particles-guide" />}
      >
        <AnswerBox>
          Japanese particles are one- or two-syllable markers that tell you
          how each word in a sentence relates to the others. The twelve core
          particles cover roughly 95 percent of everyday usage. Learn them
          with example sentences, not with rules.
        </AnswerBox>

        <h2 id="intro">What particles are</h2>
        <p>
          English marks grammatical role through word order (subject verb
          object). Japanese marks it through particles. The same three
          words can appear in different orders; the particles tell you who
          did what to whom.
        </p>
        <p>
          A Japanese sentence is a stack of phrases, each ending in a
          particle that labels its role. Once you internalize the twelve
          particles below, reading Japanese stops feeling like a puzzle
          and starts feeling like grammar.
        </p>

        <Callout tone="tip" title="Read the examples aloud">
          <p>
            Particles are pronunciation features. Reading them in your
            head treats them like punctuation, and they are not. Read
            every example aloud so the particle becomes part of the
            rhythm of the sentence.
          </p>
        </Callout>

        {PARTICLES.map((particle) => (
          <section key={particle.id} id={particle.id} className="mt-14">
            <div className="flex items-baseline gap-4">
              <span className="jp text-5xl font-serif text-matcha">
                {particle.char}
              </span>
              <h2 className="font-serif text-2xl">
                {particle.name}
                <span className="ml-3 font-sans text-sm font-normal text-ink-muted">
                  ({particle.romaji})
                </span>
              </h2>
            </div>
            <p className="mt-3 text-ink-muted">{particle.short}</p>

            <div className="not-prose my-6 space-y-4">
              {particle.examples.map((ex) => (
                <div
                  key={ex.jp}
                  className="rounded-lg border border-border bg-cream-raised p-5"
                >
                  <p className="jp text-xl text-ink">{ex.jp}</p>
                  <p className="jp mt-1 text-sm text-ink-muted">{ex.kana}</p>
                  <p className="mt-3 font-serif text-[1.02rem] text-ink">
                    {ex.en}
                  </p>
                  {ex.note && (
                    <p className="mt-2 font-sans text-sm italic text-ink-muted">
                      {ex.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <ul>
              {particle.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </section>
        ))}

        <h2 id="faq" className="mt-16">
          Common questions
        </h2>
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
          Related:{" "}
          <Link href="/guides/how-to-learn-japanese">
            the full learning roadmap
          </Link>
          ,{" "}
          <Link href="/guides/jlpt-n5-vocabulary">JLPT N5 vocabulary</Link>,
          or <Link href="/japanese/grammar">more grammar topics</Link>. If
          you want to drill particle usage in real sentences,{" "}
          <Link href="/">Inku&apos;s phrase packs</Link> have examples for
          every particle here.
        </p>
      </LongFormLayout>
    </>
  );
}
