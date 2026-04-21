import Link from "next/link";

const TOPICS = [
  {
    jp: "あ",
    title: "Hiragana",
    count: "46 characters",
    description:
      "The cursive set you will use to read native words, particles, and verb endings.",
    href: "/guides/learn-hiragana",
  },
  {
    jp: "ア",
    title: "Katakana",
    count: "46 characters",
    description:
      "The angular set for loanwords. Once you know hiragana, katakana goes fast.",
    href: "/guides/learn-katakana",
  },
  {
    jp: "水",
    title: "JLPT N5 vocabulary",
    count: "200 core words",
    description:
      "The words you actually use in your first conversation. Each one recorded.",
    href: "/jlpt/n5",
  },
  {
    jp: "話",
    title: "Casual phrases",
    count: "30+ phrases",
    description:
      "What you say to friends. How to apologize, agree, ask for help without sounding textbook.",
    href: "/japanese/phrases",
  },
  {
    jp: "礼",
    title: "Polite phrases",
    count: "30+ phrases",
    description:
      "Formal Japanese for work, travel, and your first real conversation.",
    href: "/japanese/phrases",
  },
  {
    jp: "旅",
    title: "Travel phrases",
    count: "30+ phrases",
    description:
      "Getting around Tokyo, Kyoto, Osaka. What to say at the station, the counter, the onsen.",
    href: "/japanese/phrases",
  },
];

export function WhatYouLearn() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow mb-4 text-matcha">What&apos;s inside</p>
          <h2 className="font-serif text-display-md tracking-tight text-balance">
            Six decks, all on day one.
          </h2>
          <p className="mt-4 font-serif text-lg text-ink-muted">
            No paywalled chapters you have to grind toward. Every deck is
            unlocked as soon as you subscribe.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TOPICS.map((t) => (
            <li key={t.title}>
              <Link
                href={t.href}
                className="group flex h-full flex-col rounded-lg border border-border bg-cream-raised p-7 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="jp text-5xl leading-none text-ink group-hover:text-matcha">
                    {t.jp}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-breath text-ink-subtle">
                    {t.count}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-ink">{t.title}</h3>
                <p className="mt-2 font-serif text-[1rem] leading-relaxed text-ink-muted">
                  {t.description}
                </p>
                <span className="mt-auto pt-5 font-sans text-sm text-matcha opacity-0 transition-opacity group-hover:opacity-100">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
