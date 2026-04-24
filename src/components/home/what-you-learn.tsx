import Link from "next/link";
import { cn } from "@/lib/utils";

const TOPICS = [
  {
    jp: "あ",
    title: "Hiragana",
    count: "46 characters",
    description:
      "The cursive set you will use to read native words, particles, and verb endings.",
    href: "/guides/learn-hiragana",
    className: "lg:col-span-5",
  },
  {
    jp: "ア",
    title: "Katakana",
    count: "46 characters",
    description:
      "The angular set for loanwords. Once you know hiragana, katakana goes fast.",
    href: "/guides/learn-katakana",
    className: "lg:col-span-3",
  },
  {
    jp: "水",
    title: "JLPT N5 vocabulary",
    count: "200 core words",
    description:
      "The words you actually use in your first conversation. Each one recorded.",
    href: "/jlpt/n5",
    className: "lg:col-span-4",
  },
  {
    jp: "話",
    title: "Casual phrases",
    count: "30+ phrases",
    description:
      "What you say to friends. How to apologize, agree, ask for help without sounding textbook.",
    href: "/japanese/phrases",
    className: "lg:col-span-4",
  },
  {
    jp: "礼",
    title: "Polite phrases",
    count: "30+ phrases",
    description:
      "Formal Japanese for work, travel, and your first real conversation.",
    href: "/japanese/phrases",
    className: "lg:col-span-4",
  },
  {
    jp: "旅",
    title: "Travel phrases",
    count: "30+ phrases",
    description:
      "Getting around Tokyo, Kyoto, Osaka. What to say at the station, the counter, the onsen.",
    href: "/japanese/phrases",
    className: "lg:col-span-4",
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

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {TOPICS.map((t) => (
            <li key={t.title} className={cn("min-h-[15rem]", t.className)}>
              <Link
                href={t.href}
                className="group flex h-full flex-col rounded-[1.35rem] bg-cream-raised p-1.5 shadow-[inset_0_0_0_1px_rgba(228,221,199,0.85),0_18px_48px_-36px_rgba(26,26,26,0.45)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
              >
                <div className="flex h-full flex-col rounded-[1rem] border border-border/70 bg-cream px-6 py-6">
                  <div className="flex items-center justify-between gap-5">
                    <span className="jp text-5xl leading-none text-ink transition-colors duration-500 group-hover:text-matcha">
                      {t.jp}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-breath text-ink-subtle">
                      {t.count}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ink">{t.title}</h3>
                  <p className="mt-2 max-w-[34ch] font-body text-[0.98rem] leading-relaxed text-ink-muted text-pretty">
                    {t.description}
                  </p>
                  <span className="mt-auto pt-5 font-sans text-sm text-matcha opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
