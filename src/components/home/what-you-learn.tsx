import Link from "next/link";
import { cn } from "@/lib/utils";

const TOPICS = [
  {
    jp: "あ",
    title: "Hiragana and katakana",
    count: "184 kana",
    description:
      "Basic kana, voiced kana, and yoon forms for reading Japanese from the start.",
    href: "/guides/learn-hiragana",
    className: "lg:col-span-4",
  },
  {
    jp: "水",
    title: "JLPT N5 cards",
    count: "515 cards",
    description:
      "Beginner words for daily life, study, food, time, people, and places.",
    href: "/jlpt/n5",
    className: "lg:col-span-4",
  },
  {
    jp: "語",
    title: "JLPT N4 cards",
    count: "391 cards",
    description:
      "The next step after N5, already available in the app library.",
    href: "/jlpt/n4",
    className: "lg:col-span-4",
  },
  {
    jp: "話",
    title: "Casual phrases",
    count: "187 phrases",
    description:
      "What you say to friends. How to apologize, agree, ask for help without sounding textbook.",
    href: "/japanese/phrases",
    className: "lg:col-span-4",
  },
  {
    jp: "礼",
    title: "Polite phrases",
    count: "107 phrases",
    description:
      "Formal Japanese for work, travel, and your first real conversation.",
    href: "/japanese/phrases",
    className: "lg:col-span-4",
  },
  {
    jp: "旅",
    title: "Travel and anime phrases",
    count: "55 phrases",
    description:
      "Getting around Tokyo, Kyoto, Osaka. What to say at the station, the counter, the onsen.",
    href: "/japanese/phrases",
    className: "lg:col-span-4",
  },
];

export function WhatYouLearn() {
  return (
    <section id="whats-inside" className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow mb-4 text-matcha">What&apos;s inside</p>
          <h2 className="font-serif text-display-md tracking-tight text-balance">
            What is inside on day one.
          </h2>
          <p className="mt-4 font-serif text-lg text-ink-muted">
            Inku opens with 17 unlocked study bundles: kana, JLPT vocabulary,
            topic decks, and useful phrase packs.
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
