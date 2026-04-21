const FAQS = [
  {
    q: "Is Inku a Duolingo alternative?",
    a: "Yes. If you bounced off Duolingo because the gamification felt patronizing, Inku is built for you. It gives you real vocabulary, real voice, and a finite session so you can close the app and go about your day.",
  },
  {
    q: "Do I need an account?",
    a: "No. Inku does not ask for your email, your Apple ID, or anything else. Your progress lives on your iPhone.",
  },
  {
    q: "Is there a free tier?",
    a: "Inku is subscription-first with a 7-day free trial on the yearly plan. We do not show ads or sell data, so the subscription is how the app keeps existing.",
  },
  {
    q: "What level of Japanese does Inku cover?",
    a: "At launch, Inku covers hiragana and katakana, 200 core N5 words, 65 N4 words, and four phrase packs. We add more N4 content every month, and N3 is planned.",
  },
  {
    q: "Does Inku work offline?",
    a: "Yes. The voice audio is bundled into the app at build time and every review session runs on-device.",
  },
  {
    q: "What about Android?",
    a: "Inku is iPhone-only for now. An Android version is not on the roadmap yet. If you want to be notified, email app@inkujapanese.com.",
  },
  {
    q: "Can I use Inku with Anki?",
    a: "You can use them side by side, but most learners switch because Inku already has the cards you would have built and the pronunciation you could not record yourself.",
  },
  {
    q: "Is the content accurate?",
    a: "We source everything from standard JLPT vocabulary lists and check every card against Japanese-native references before release. If something looks wrong, flag it in the app and we review within a week.",
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
