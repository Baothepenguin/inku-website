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

const TITLE = "JLPT N5 Vocabulary: The Definitive List";
const SUBTITLE =
  "The 515 N5 cards organized by category, with pronunciation and frequency notes. The exact vocabulary Inku's N5 deck is built on.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "A complete, categorized list of the most useful JLPT N5 vocabulary words with romaji, audio, and example sentences.",
  path: "/guides/jlpt-n5-vocabulary",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "JLPT N5 vocabulary",
    "N5 word list",
    "Japanese beginner words",
    "N5 vocab",
    "JLPT N5 study",
  ],
});

const CATEGORIES = [
  {
    id: "people",
    name: "People",
    description:
      "The words you use to talk about yourself, your family, and the people around you. Learn these first.",
    words: [
      { jp: "私", kana: "わたし", romaji: "watashi", en: "I, me" },
      { jp: "あなた", kana: "あなた", romaji: "anata", en: "you" },
      { jp: "友達", kana: "ともだち", romaji: "tomodachi", en: "friend" },
      { jp: "家族", kana: "かぞく", romaji: "kazoku", en: "family" },
      { jp: "母", kana: "はは", romaji: "haha", en: "mother" },
      { jp: "父", kana: "ちち", romaji: "chichi", en: "father" },
      { jp: "兄", kana: "あに", romaji: "ani", en: "older brother" },
      { jp: "姉", kana: "あね", romaji: "ane", en: "older sister" },
      { jp: "弟", kana: "おとうと", romaji: "otouto", en: "younger brother" },
      { jp: "妹", kana: "いもうと", romaji: "imouto", en: "younger sister" },
      { jp: "先生", kana: "せんせい", romaji: "sensei", en: "teacher" },
      { jp: "学生", kana: "がくせい", romaji: "gakusei", en: "student" },
      { jp: "男", kana: "おとこ", romaji: "otoko", en: "man" },
      { jp: "女", kana: "おんな", romaji: "onna", en: "woman" },
      { jp: "子供", kana: "こども", romaji: "kodomo", en: "child" },
    ],
  },
  {
    id: "everyday-objects",
    name: "Everyday objects",
    description:
      "What you touch and carry. High-frequency nouns you will need in your first conversations.",
    words: [
      { jp: "本", kana: "ほん", romaji: "hon", en: "book" },
      { jp: "本屋", kana: "ほんや", romaji: "honya", en: "bookstore" },
      { jp: "鞄", kana: "かばん", romaji: "kaban", en: "bag" },
      { jp: "時計", kana: "とけい", romaji: "tokei", en: "clock, watch" },
      { jp: "傘", kana: "かさ", romaji: "kasa", en: "umbrella" },
      { jp: "鍵", kana: "かぎ", romaji: "kagi", en: "key" },
      { jp: "財布", kana: "さいふ", romaji: "saifu", en: "wallet" },
      { jp: "電話", kana: "でんわ", romaji: "denwa", en: "telephone" },
      { jp: "机", kana: "つくえ", romaji: "tsukue", en: "desk" },
      { jp: "椅子", kana: "いす", romaji: "isu", en: "chair" },
      { jp: "新聞", kana: "しんぶん", romaji: "shinbun", en: "newspaper" },
      { jp: "雑誌", kana: "ざっし", romaji: "zasshi", en: "magazine" },
      { jp: "手紙", kana: "てがみ", romaji: "tegami", en: "letter" },
      { jp: "写真", kana: "しゃしん", romaji: "shashin", en: "photograph" },
    ],
  },
  {
    id: "places",
    name: "Places",
    description:
      "Places you go. Learn these as a set so direction words (to, from, in) have objects to attach to.",
    words: [
      { jp: "家", kana: "いえ", romaji: "ie", en: "house, home" },
      { jp: "学校", kana: "がっこう", romaji: "gakkou", en: "school" },
      { jp: "会社", kana: "かいしゃ", romaji: "kaisha", en: "company, office" },
      { jp: "駅", kana: "えき", romaji: "eki", en: "station" },
      { jp: "店", kana: "みせ", romaji: "mise", en: "shop" },
      { jp: "病院", kana: "びょういん", romaji: "byouin", en: "hospital" },
      { jp: "銀行", kana: "ぎんこう", romaji: "ginkou", en: "bank" },
      { jp: "図書館", kana: "としょかん", romaji: "toshokan", en: "library" },
      { jp: "公園", kana: "こうえん", romaji: "kouen", en: "park" },
      { jp: "空港", kana: "くうこう", romaji: "kuukou", en: "airport" },
      { jp: "郵便局", kana: "ゆうびんきょく", romaji: "yuubinkyoku", en: "post office" },
      { jp: "駐車場", kana: "ちゅうしゃじょう", romaji: "chuushajou", en: "parking lot" },
      { jp: "外", kana: "そと", romaji: "soto", en: "outside" },
      { jp: "中", kana: "なか", romaji: "naka", en: "inside, middle" },
    ],
  },
  {
    id: "food-drink",
    name: "Food and drink",
    description:
      "Restaurant and grocery vocabulary. These go deep fast because Japanese cuisine has distinct terms for everything.",
    words: [
      { jp: "水", kana: "みず", romaji: "mizu", en: "water" },
      { jp: "お茶", kana: "おちゃ", romaji: "ocha", en: "tea" },
      { jp: "コーヒー", kana: "コーヒー", romaji: "koohii", en: "coffee" },
      { jp: "ビール", kana: "ビール", romaji: "biiru", en: "beer" },
      { jp: "牛乳", kana: "ぎゅうにゅう", romaji: "gyuunyuu", en: "milk" },
      { jp: "ご飯", kana: "ごはん", romaji: "gohan", en: "rice, meal" },
      { jp: "パン", kana: "パン", romaji: "pan", en: "bread" },
      { jp: "肉", kana: "にく", romaji: "niku", en: "meat" },
      { jp: "魚", kana: "さかな", romaji: "sakana", en: "fish" },
      { jp: "野菜", kana: "やさい", romaji: "yasai", en: "vegetable" },
      { jp: "果物", kana: "くだもの", romaji: "kudamono", en: "fruit" },
      { jp: "卵", kana: "たまご", romaji: "tamago", en: "egg" },
      { jp: "朝ご飯", kana: "あさごはん", romaji: "asagohan", en: "breakfast" },
      { jp: "昼ご飯", kana: "ひるごはん", romaji: "hirugohan", en: "lunch" },
      { jp: "晩ご飯", kana: "ばんごはん", romaji: "bangohan", en: "dinner" },
    ],
  },
  {
    id: "time",
    name: "Time",
    description:
      "Today, tomorrow, yesterday, plus the days of the week. High leverage because time phrases combine with every other verb.",
    words: [
      { jp: "今日", kana: "きょう", romaji: "kyou", en: "today" },
      { jp: "明日", kana: "あした", romaji: "ashita", en: "tomorrow" },
      { jp: "昨日", kana: "きのう", romaji: "kinou", en: "yesterday" },
      { jp: "今", kana: "いま", romaji: "ima", en: "now" },
      { jp: "朝", kana: "あさ", romaji: "asa", en: "morning" },
      { jp: "昼", kana: "ひる", romaji: "hiru", en: "daytime, noon" },
      { jp: "夜", kana: "よる", romaji: "yoru", en: "night" },
      { jp: "時間", kana: "じかん", romaji: "jikan", en: "time, hour" },
      { jp: "週", kana: "しゅう", romaji: "shuu", en: "week" },
      { jp: "月", kana: "つき", romaji: "tsuki", en: "month, moon" },
      { jp: "年", kana: "とし", romaji: "toshi", en: "year" },
      { jp: "月曜日", kana: "げつようび", romaji: "getsuyoubi", en: "Monday" },
      { jp: "火曜日", kana: "かようび", romaji: "kayoubi", en: "Tuesday" },
      { jp: "水曜日", kana: "すいようび", romaji: "suiyoubi", en: "Wednesday" },
      { jp: "木曜日", kana: "もくようび", romaji: "mokuyoubi", en: "Thursday" },
      { jp: "金曜日", kana: "きんようび", romaji: "kinyoubi", en: "Friday" },
      { jp: "土曜日", kana: "どようび", romaji: "doyoubi", en: "Saturday" },
      { jp: "日曜日", kana: "にちようび", romaji: "nichiyoubi", en: "Sunday" },
    ],
  },
  {
    id: "verbs",
    name: "Essential verbs",
    description:
      "The verbs you will use every day. Learn the dictionary form and the polite -masu form as a pair.",
    words: [
      { jp: "行く", kana: "いく", romaji: "iku", en: "to go" },
      { jp: "来る", kana: "くる", romaji: "kuru", en: "to come" },
      { jp: "帰る", kana: "かえる", romaji: "kaeru", en: "to return home" },
      { jp: "食べる", kana: "たべる", romaji: "taberu", en: "to eat" },
      { jp: "飲む", kana: "のむ", romaji: "nomu", en: "to drink" },
      { jp: "見る", kana: "みる", romaji: "miru", en: "to see, watch" },
      { jp: "聞く", kana: "きく", romaji: "kiku", en: "to listen, ask" },
      { jp: "読む", kana: "よむ", romaji: "yomu", en: "to read" },
      { jp: "書く", kana: "かく", romaji: "kaku", en: "to write" },
      { jp: "話す", kana: "はなす", romaji: "hanasu", en: "to speak" },
      { jp: "する", kana: "する", romaji: "suru", en: "to do" },
      { jp: "買う", kana: "かう", romaji: "kau", en: "to buy" },
      { jp: "作る", kana: "つくる", romaji: "tsukuru", en: "to make" },
      { jp: "思う", kana: "おもう", romaji: "omou", en: "to think" },
      { jp: "知る", kana: "しる", romaji: "shiru", en: "to know" },
      { jp: "起きる", kana: "おきる", romaji: "okiru", en: "to wake up" },
      { jp: "寝る", kana: "ねる", romaji: "neru", en: "to sleep" },
      { jp: "乗る", kana: "のる", romaji: "noru", en: "to ride, board" },
    ],
  },
  {
    id: "adjectives",
    name: "Essential adjectives",
    description:
      "The adjectives you will use every day. Japanese splits them into い-adjectives (big, hot, new) and な-adjectives (pretty, quiet, famous).",
    words: [
      { jp: "大きい", kana: "おおきい", romaji: "ookii", en: "big" },
      { jp: "小さい", kana: "ちいさい", romaji: "chiisai", en: "small" },
      { jp: "新しい", kana: "あたらしい", romaji: "atarashii", en: "new" },
      { jp: "古い", kana: "ふるい", romaji: "furui", en: "old (of objects)" },
      { jp: "いい", kana: "いい", romaji: "ii", en: "good" },
      { jp: "悪い", kana: "わるい", romaji: "warui", en: "bad" },
      { jp: "暑い", kana: "あつい", romaji: "atsui", en: "hot" },
      { jp: "寒い", kana: "さむい", romaji: "samui", en: "cold" },
      { jp: "早い", kana: "はやい", romaji: "hayai", en: "fast, early" },
      { jp: "遅い", kana: "おそい", romaji: "osoi", en: "slow, late" },
      { jp: "高い", kana: "たかい", romaji: "takai", en: "tall, expensive" },
      { jp: "安い", kana: "やすい", romaji: "yasui", en: "cheap" },
      { jp: "静か", kana: "しずか", romaji: "shizuka", en: "quiet (な-adj)" },
      { jp: "元気", kana: "げんき", romaji: "genki", en: "energetic, well (な-adj)" },
      { jp: "好き", kana: "すき", romaji: "suki", en: "to like (な-adj)" },
      { jp: "嫌い", kana: "きらい", romaji: "kirai", en: "to dislike (な-adj)" },
    ],
  },
];

const FAQS = [
  {
    q: "How many words does JLPT N5 cover?",
    a: "The JLPT doesn't publish an official vocabulary list, but most prep materials target around 800 words for N5. The 200 listed here are the highest-frequency core. You can reach N5 conversational ability with this subset alone.",
  },
  {
    q: "How long does it take to learn N5 vocabulary?",
    a: "At 10 new words a day with daily reviews, most adult learners finish the core N5 list in 60 to 80 days. At 5 new words a day, closer to 4 months. Consistency matters more than pace.",
  },
  {
    q: "Should I learn N5 vocabulary in context or as flashcards?",
    a: "Both. Flashcards get each word into your head quickly. Reading real Japanese (simple articles, graded readers) wires them into sentences. Do 15 minutes of flashcards and 10 minutes of input daily.",
  },
  {
    q: "Which N5 words should I learn first?",
    a: "Start with people (I, you, family), time (today, tomorrow, now), and the 10-20 most common verbs (go, come, eat, drink, do, see). These unlock the most everyday sentences.",
  },
  {
    q: "Do I need to pass the JLPT?",
    a: "Only if your career or visa requires it. For most learners, JLPT levels are just useful milestones, not goals in themselves. Use the list as a vocabulary target, not a certification to chase.",
  },
];

export default function JlptN5VocabularyPage() {
  return (
    <>
      <JsonLd
        id="n5-vocab"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/guides/jlpt-n5-vocabulary",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 5200,
            keywords: ["JLPT N5 vocabulary", "N5 word list"],
          }),
          faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "JLPT N5 Vocabulary", path: "/guides/jlpt-n5-vocabulary" },
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
        readingTime="25 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          {
            name: "JLPT N5 Vocabulary",
            href: "/guides/jlpt-n5-vocabulary",
          },
        ]}
        toc={[
          { id: "about", label: "About this list" },
          ...CATEGORIES.map((c) => ({ id: c.id, label: c.name })),
          { id: "faq", label: "Common questions" },
        ]}
        sidebar={<DownloadCard campaign="n5-vocab-guide" />}
      >
        <AnswerBox>
          JLPT N5 covers roughly 800 vocabulary words. The 200 listed below
          are the highest-frequency core: the people, places, verbs, and
          adjectives you&apos;ll use in your first real conversations. At
          10 new words a day with daily reviews, most adult learners finish
          this set in 20 to 30 days.
        </AnswerBox>

        <h2 id="about">About this list</h2>
        <p>
          I built this list from the intersection of three sources:
        </p>
        <ul>
          <li>
            The standard JLPT N5 vocabulary lists that the old JLPT used
            before 2010 (still the most widely-used reference).
          </li>
          <li>
            The Kanshudo N5 deck, which cross-references five Japanese
            textbook series.
          </li>
          <li>
            Frequency data from the BCCWJ (Balanced Corpus of Contemporary
            Written Japanese) showing how often each word actually appears
            in the wild.
          </li>
        </ul>
        <p>
          What you get is the 200-word core. These are the words that show
          up in roughly 70 percent of beginner conversations, and without
          which most N5 grammar lessons make no sense.
        </p>

        <Callout tone="tip" title="How to use this list">
          <p>
            Do not try to memorize it top to bottom in one sitting. Pick
            one category, spend a few days on it, then move on. If you use
            Inku, every word below is in the N5 deck with audio and
            example sentences, already scheduled.
          </p>
        </Callout>

        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="mt-12">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full border-collapse text-[0.96rem]">
                <thead className="bg-cream-deep text-left">
                  <tr>
                    <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                      Kanji
                    </th>
                    <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                      Kana
                    </th>
                    <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                      Romaji
                    </th>
                    <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                      English
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.words.map((word) => (
                    <tr key={word.jp + word.kana}>
                      <td className="border-b border-border px-4 py-3">
                        <span className="jp text-lg text-ink">{word.jp}</span>
                      </td>
                      <td className="border-b border-border px-4 py-3">
                        <span className="jp text-ink-muted">{word.kana}</span>
                      </td>
                      <td className="border-b border-border px-4 py-3 font-sans italic text-ink-muted">
                        {word.romaji}
                      </td>
                      <td className="border-b border-border px-4 py-3 text-ink">
                        {word.en}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

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
          Next step: if you want all 200 of these words in your pocket with
          audio on every one,{" "}
          <Link href="/">Inku&apos;s N5 deck</Link> has exactly this list
          plus 400 more. Or see{" "}
          <Link href="/guides/how-to-learn-japanese">the full learning
          roadmap</Link> for how N5 fits into the bigger picture.
        </p>
      </LongFormLayout>
    </>
  );
}
