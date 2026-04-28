const FAQS = [
  {
    q: "Is Inku a Duolingo alternative?",
    a: "Yes. Inku is for learners who want flashcards, audio-supported review, and short sessions instead of a busy game-style lesson feed.",
  },
  {
    q: "Do I need an account?",
    a: "No. Inku does not ask for your email, your Apple ID, or anything else. Your progress lives on your iPhone.",
  },
  {
    q: "Is there a free tier?",
    a: "Inku has a 7-day free trial. After that, it is paid. There are no ads.",
  },
  {
    q: "What level of Japanese does Inku cover?",
    a: "Inku covers 184 kana, 515 N5 cards, 391 N4 cards, topic decks, and four phrase packs. It is best for beginners and early JLPT study.",
  },
  {
    q: "Does Inku work offline?",
    a: "Core reviews, saved progress, and the bundled audio archive live on your iPhone. Purchases, restores, diagnostics, and any missing-audio fallback may use Apple or app services.",
  },
  {
    q: "What about Android?",
    a: "Inku is iPhone-only for now. An Android version is not on the roadmap yet. If you want to be notified, email app@inkujapanese.com.",
  },
  {
    q: "Can I use Inku with Anki?",
    a: "Yes. Use Inku for ready-made Japanese review and use Anki for custom cards outside Inku's library.",
  },
  {
    q: "Is the content accurate?",
    a: "Each card is reviewed before release. If something looks wrong, flag it in the app and we can review it.",
  },
];

export function HomeFAQ() {
  return (
    <section className="border-t border-border/70 bg-cream-deep/30 py-24 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="label-eyebrow mb-4 text-matcha">Common questions</p>
          <h2 className="font-serif text-display-md tracking-tight text-balance">
            Answers, up front.
          </h2>
          <div className="mt-10 divide-y divide-border">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group py-5 [&[open]>summary>span:last-child]:rotate-45"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-[1.12rem] text-ink md:text-xl">
                  {faq.q}
                  <span className="mt-1 shrink-0 font-sans text-xl text-matcha transition-transform">
                    +
                  </span>
                </summary>
                <div className="prose-inku mt-3 max-w-none">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const HOME_FAQS = FAQS;
