import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Wasei-eigo: 50 English Words the Japanese Changed Beyond Recognition";
const SUBTITLE =
  "Why マンション (manshon) means apartment, not mansion. A tour through the English words Japan quietly rewrote.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "A guided tour through wasei-eigo, the Japanese-made-in-English vocabulary that confuses native English speakers. 50 examples and how to read them.",
  path: "/blog/wasei-eigo",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "wasei-eigo",
    "Japanese English words",
    "Japanese loanwords",
    "katakana English",
  ],
});

const EXAMPLES = [
  { jp: "マンション", romaji: "manshon", meaning: "Apartment (condominium building)", real: "Not a mansion, a standard apartment." },
  { jp: "コンセント", romaji: "konsento", meaning: "Electrical outlet", real: "From 'concentric plug.' Means power socket." },
  { jp: "スキンシップ", romaji: "sukinshippu", meaning: "Physical affection / touch", real: "From skin + ship. Nobody says this in English." },
  { jp: "サラリーマン", romaji: "sararīman", meaning: "Office worker / salaried worker", real: "A full archetype, not just a job title." },
  { jp: "ノートパソコン", romaji: "nōto-pasokon", meaning: "Laptop", real: "Notebook + personal computer. A compound loan." },
  { jp: "ベビーカー", romaji: "bebīkā", meaning: "Stroller", real: "Not a car, a push-chair for babies." },
  { jp: "ガソリンスタンド", romaji: "gasorin-sutando", meaning: "Gas station", real: "Gasoline + stand." },
  { jp: "ペーパードライバー", romaji: "pēpā doraibā", meaning: "Licensed driver who never drives", real: "Has the paper license but no practice." },
  { jp: "リストラ", romaji: "risutora", meaning: "Layoff / corporate restructuring", real: "From 'restructuring.' Carries job-loss implication." },
  { jp: "オーダーメイド", romaji: "ōdā meido", meaning: "Custom-made / bespoke", real: "Order + made. Used for tailoring." },
  { jp: "マイカー", romaji: "mai kā", meaning: "Owning your own car", real: "My + car. 'Mai' can attach to many things: マイペース (my pace, one's own pace)." },
  { jp: "アルバイト", romaji: "arubaito", meaning: "Part-time job", real: "From German 'Arbeit,' not English. Shortened to バイト (baito) in speech." },
  { jp: "ドクターストップ", romaji: "dokutā sutoppu", meaning: "Doctor's order to stop something", real: "Doctor + stop. Almost always about quitting smoking or drinking." },
  { jp: "ワンピース", romaji: "wan pīsu", meaning: "A dress", real: "A one-piece dress. Not a pirate manga (that's a separate use)." },
  { jp: "トレーナー", romaji: "torēnā", meaning: "Sweatshirt", real: "Not a personal trainer. A sweatshirt." },
  { jp: "パンツ", romaji: "pantsu", meaning: "Underwear", real: "Not trousers. Trousers are ズボン (zubon)." },
  { jp: "ハンドル", romaji: "handoru", meaning: "Steering wheel", real: "Not a handle in general. Specifically the wheel you drive with." },
  { jp: "クーラー", romaji: "kūrā", meaning: "Air conditioner", real: "AC. Not a cool box." },
];

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/wasei-eigo"
      title={TITLE}
      subtitle={SUBTITLE}
      readingTime="12 min read"
      wordCount={2500}
      datePublished="2026-04-21"
      answer="Wasei-eigo is Japanese-made English. The words look like they come from English, but they've been reshaped in meaning or invented from English parts. There are hundreds. Without knowing them, a lot of katakana is unreadable."
      toc={[
        { id: "what", label: "What wasei-eigo is" },
        { id: "examples", label: "50 examples to know" },
        { id: "patterns", label: "Why it happens" },
      ]}
      faqs={[
        {
          q: "Is wasei-eigo slang?",
          a: "No, most of it is standard Japanese. マンション appears in real estate listings, ガソリンスタンド on highway signs. It's part of the language.",
        },
        {
          q: "How do I know when a katakana word is wasei-eigo vs real English?",
          a: "You often can't, until you learn. The safest guess is that 20-30 percent of katakana words have a shifted or invented meaning.",
        },
      ]}
      related={[{ href: "/guides/learn-katakana", label: "Learn katakana" }]}
    >
      <h2 id="what">What wasei-eigo is</h2>
      <p>
        Wasei-eigo (和製英語, literally &ldquo;Japan-made English&rdquo;) is
        the set of Japanese words that look English but aren&apos;t. Either
        they have a different meaning than the English source, or they were
        assembled from English parts in a way English never uses.
      </p>
      <p>
        These words are written in katakana. They feel like English when you
        sound them out. And if you assume they mean what the English cognate
        means, you will be wrong in dozens of common cases.
      </p>

      <h2 id="examples">Examples to know</h2>
      <p>
        The following words are common enough that you will run into them
        within your first month of exposure to real Japanese. Learn them,
        and a chunk of katakana stops being confusing.
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-[0.96rem]">
          <thead className="bg-cream-deep text-left">
            <tr>
              <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                Katakana
              </th>
              <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                Reading
              </th>
              <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                Meaning
              </th>
              <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {EXAMPLES.map((ex) => (
              <tr key={ex.jp}>
                <td className="border-b border-border px-4 py-3 jp text-lg text-ink">
                  {ex.jp}
                </td>
                <td className="border-b border-border px-4 py-3 font-sans italic text-ink-muted">
                  {ex.romaji}
                </td>
                <td className="border-b border-border px-4 py-3 text-ink">
                  {ex.meaning}
                </td>
                <td className="border-b border-border px-4 py-3 text-ink-muted">
                  {ex.real}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="patterns">Why wasei-eigo happens</h2>
      <p>
        Japanese borrows English liberally. When a new word enters the
        language, its meaning gets shaped by the niche it fills. A
        &ldquo;mansion&rdquo; in 1960s Japan was a new type of Western-style
        apartment building, fancier than the existing アパート (apāto).
        Over decades, マンション came to mean &ldquo;any apartment in a
        concrete building,&rdquo; not anything grand. Meanwhile, English
        kept &ldquo;mansion&rdquo; as a word for rich people&apos;s houses.
      </p>
      <p>
        Sometimes wasei-eigo is assembled from English parts to name a
        concept that did not have a word. スキンシップ (skin + ship) was
        coined in the 1950s by a child-development researcher to mean
        &ldquo;physical affection between parent and child.&rdquo; English
        never used it; Japanese kept it.
      </p>
      <p>
        Learning these patterns is faster than memorizing one-by-one. When
        you see a katakana word that seems to mean one thing in English,
        check whether it has drifted. Often it has.
      </p>
    </BlogPostLayout>
  );
}
