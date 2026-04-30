export interface HelpQuestion {
  q: string;
  a: string;
  /** Anchor slug for in-page deep links. */
  slug: string;
}

export interface HelpSection {
  /** Section title shown as H2. */
  title: string;
  /** Anchor slug for the H2. */
  slug: string;
  /** One-line description used in the section overview. */
  description: string;
  questions: HelpQuestion[];
}

export const HELP_SECTIONS: HelpSection[] = [
  {
    title: "Getting started with Inku",
    slug: "getting-started",
    description:
      "Installing Inku, the 7-day free trial, the first review, and the basics of how the app works.",
    questions: [
      {
        q: "How do I download Inku?",
        slug: "download",
        a: "Inku is on the iPhone App Store. It runs on iOS 18 or later. There is no Android version yet, no iPad-only version yet (it works on iPad in compatibility mode), and no Mac version. Search 'Inku Japanese' or visit inkujapanese.com and tap the download button.",
      },
      {
        q: "Do I need an account to use Inku?",
        slug: "account",
        a: "No. Inku is local-first. Your learning progress is stored on your iPhone and never leaves the device unless you explicitly export it. Apple ID is used only for the In-App Purchase subscription, not for the learning data.",
      },
      {
        q: "What does the 7-day free trial cover?",
        slug: "trial",
        a: "All 17 unlocked study bundles, all bundled audio, all card types, full FSRS scheduling. There are no feature limits during the trial. After 7 days, your subscription begins automatically unless you cancel in iPhone Settings → Apple ID → Subscriptions.",
      },
      {
        q: "What's my first review session like?",
        slug: "first-session",
        a: "Inku starts you with the hiragana deck. The first session shows 5 brand-new cards, each with a romaji prompt, the kana, the audio, and a writing trace. You answer Again, Hard, Good, or Easy on each. The session ends when those 5 cards are reviewed.",
      },
      {
        q: "How long does a review session take?",
        slug: "session-length",
        a: "Most users finish a daily session in 8–15 minutes. The length depends on how many cards are due plus how many new cards you've added (default: 5 per day). The session ends when today's queue ends. There's no infinite feed.",
      },
    ],
  },
  {
    title: "Studying with Inku",
    slug: "studying",
    description:
      "How spaced repetition works in Inku, how to read each card, and the keyboard shortcuts that exist on iPad.",
    questions: [
      {
        q: "How does spaced repetition work in Inku?",
        slug: "srs",
        a: "Inku uses FSRS (Free Spaced Repetition Scheduler), the same modern algorithm Anki adopted in 2024. After each card, you grade your recall as Again, Hard, Good, or Easy. FSRS uses your grade and recall history to predict when you'll forget the card and surfaces it just before that moment.",
      },
      {
        q: "Can I change how many new cards I see per day?",
        slug: "new-card-cap",
        a: "Yes. Settings → Study → New Cards Per Day lets you set anywhere from 0 to 50. The default is 5. Going higher than 15 a day generally produces a review pile-up that hurts long-term retention.",
      },
      {
        q: "Can I skip cards I already know?",
        slug: "skip",
        a: "Yes. Mark a known card 'Easy' on its first appearance and the scheduler will give it a long initial interval. You can also use Settings → Study → Suspend Card to permanently remove a card you don't want to see.",
      },
      {
        q: "What do Again / Hard / Good / Easy actually mean?",
        slug: "grading",
        a: "Again: you didn't recall it (the card returns soon). Hard: you got it but with effort (shorter next interval). Good: you recalled it cleanly (the standard next interval). Easy: you recalled it instantly (longer next interval). Grade honestly — the scheduler uses your grades to predict your forgetting curve.",
      },
      {
        q: "Does Inku teach me new words or just review old ones?",
        slug: "new-vs-review",
        a: "Both. Each session starts with a small batch of new cards (usually 5) followed by reviews of cards due today. New cards get a learning phase before they enter the standard SRS interval ladder.",
      },
      {
        q: "What's the handwriting practice mode?",
        slug: "handwriting",
        a: "Tap the pencil icon on any kana card to enter trace mode. The screen shows the stroke order with numbered guides; you trace each stroke with your finger or Apple Pencil. The mode does not score your handwriting; it builds motor memory through repetition.",
      },
    ],
  },
  {
    title: "Subscription, billing, and trial",
    slug: "billing",
    description:
      "Pricing, how to cancel, what happens after the trial, refunds, and family sharing.",
    questions: [
      {
        q: "How much does Inku cost?",
        slug: "price",
        a: "$70.99 per year or $12.99 per month, billed through Apple In-App Purchase. The yearly plan works out to about $5.92 per month and includes the same 7-day free trial.",
      },
      {
        q: "How do I cancel my subscription?",
        slug: "cancel",
        a: "Open iPhone Settings → tap your name at the top → Subscriptions → Inku → Cancel Subscription. You can do this any time during or after the trial. Apple handles all subscription management; Inku has no separate billing portal.",
      },
      {
        q: "What happens when the trial ends?",
        slug: "trial-end",
        a: "Your subscription begins automatically and you're charged for the plan you selected. You keep all access. To avoid being charged, cancel in iPhone Settings before day 7. Apple will email you a billing receipt the day the charge happens.",
      },
      {
        q: "Can I get a refund?",
        slug: "refund",
        a: "Apple, not Inku, handles refund requests. Visit reportaproblem.apple.com within 90 days of purchase. Apple typically grants refunds for accidental purchases and unused subscriptions; we cannot override their decisions.",
      },
      {
        q: "Does Inku support Family Sharing?",
        slug: "family-sharing",
        a: "Yes. Family Sharing is enabled on Inku Pro. One person in your family group can purchase and the rest can use Inku without a separate subscription, subject to Apple's Family Sharing rules.",
      },
      {
        q: "Is there a lifetime purchase option?",
        slug: "lifetime",
        a: "Not currently. Lifetime pricing for an actively-developed app is hard to sustain. We may revisit this if the curriculum reaches a steady state, but for now Inku is subscription-only.",
      },
    ],
  },
  {
    title: "Curriculum and content",
    slug: "curriculum",
    description:
      "What's actually in Inku's deck on day one, what's coming, and how the audio works.",
    questions: [
      {
        q: "What's in Inku's deck at launch?",
        slug: "deck-contents",
        a: "184 kana (hiragana + katakana with dakuon, handakuon, and yōon), 515 N5 cards, 391 N4 cards, 4 phrase packs (casual, polite, travel, anime — 349 phrases total), and a handful of topic decks. 17 study bundles unlocked from day one.",
      },
      {
        q: "What does the bundled audio cover?",
        slug: "audio",
        a: "The main card library has bundled pronunciation audio recorded for the cards in that library. Smaller surfaces (some sample sentences, some niche phrases) fall back to the iPhone's built-in Japanese voice when bundled audio isn't present.",
      },
      {
        q: "Is the audio human-recorded or TTS?",
        slug: "audio-source",
        a: "The bundled main library audio uses ElevenLabs voice synthesis (Shizuka voice) recorded at build time and shipped inside the app. It is not the iPhone's built-in TTS. Apple Japanese voice fallback is reserved for the small number of surfaces where bundled audio doesn't exist.",
      },
      {
        q: "Is there a kanji-only mode?",
        slug: "kanji-mode",
        a: "Not yet. Kanji currently appears on N5 and N4 cards in context with vocabulary. A dedicated kanji recognition mode (similar to WaniKani) is on the roadmap but not in the current release.",
      },
      {
        q: "Will Inku get N3, N2, N1 content?",
        slug: "higher-jlpt",
        a: "N3 is on the roadmap. N4 expansion is happening through 2026. N2 and N1 are not currently scoped — they're large enough projects that we'll evaluate based on user demand and our pace through N3.",
      },
      {
        q: "Can I add my own cards?",
        slug: "custom-cards",
        a: "Not currently. Inku ships as a curated product, not a card-builder. If you want to build your own decks, Anki is the right tool. We may add light card-flagging (suggest improvements to existing cards) but a full custom-card editor isn't planned.",
      },
    ],
  },
  {
    title: "Privacy and data",
    slug: "privacy",
    description:
      "What Inku stores, where it stores it, and what (very little) leaves your phone.",
    questions: [
      {
        q: "Does Inku collect my data?",
        slug: "data-collection",
        a: "Anonymous diagnostics only. Crash reports go to Sentry (no personal data). Subscription state is handled by Apple In-App Purchase via RevenueCat. Your learning data — every card grade, every interval, every progress mark — stays on your iPhone and is never uploaded.",
      },
      {
        q: "Is my progress synced to the cloud?",
        slug: "sync",
        a: "No. Learning progress is stored locally in SwiftData on your iPhone. iCloud sync is on the roadmap but not in the current release. For now, your iPhone is the canonical store.",
      },
      {
        q: "Can I export my learning data?",
        slug: "export",
        a: "Currently no. Export is a roadmap item. If you need this urgently, email app@inkujapanese.com and we'll discuss your case.",
      },
      {
        q: "Does Inku show ads?",
        slug: "ads",
        a: "No. Inku is subscription-supported. There are no banner ads, no interstitials, no sponsored content. The only commercial messages you'll see are upgrade prompts during the free trial.",
      },
      {
        q: "What happens if I delete the app?",
        slug: "delete",
        a: "Your learning data is removed with the app. Reinstalling starts a fresh deck. Your subscription continues unless you also cancel it in iPhone Settings.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    slug: "troubleshooting",
    description:
      "What to try when something feels off — audio not playing, reviews missing, sync issues.",
    questions: [
      {
        q: "Audio isn't playing during my reviews",
        slug: "audio-broken",
        a: "Check your iPhone's silent switch (the side toggle) and volume. Inku respects the silent setting. If the side switch is off, audio plays normally; if it's on, audio is muted. If audio still doesn't work, force-quit the app and reopen.",
      },
      {
        q: "I missed a day. Will my schedule be ruined?",
        slug: "missed-day",
        a: "No. FSRS handles late reviews gracefully — overdue cards just get scheduled appropriately when you next see them. The streak counter pauses; the underlying schedule does not.",
      },
      {
        q: "I see fewer due cards than I expected",
        slug: "few-due",
        a: "FSRS schedules cards based on your individual grading history. Lower-than-expected due counts usually mean your grades have been consistently 'Good' or 'Easy', which pushes intervals out. This is the system working correctly.",
      },
      {
        q: "I think a card has wrong content",
        slug: "wrong-card",
        a: "Tap the flag icon at the top of any card to report it. The flag includes the card ID, your reported reason (typo, wrong audio, wrong meaning), and an optional comment. We review every flag personally.",
      },
      {
        q: "How do I contact support?",
        slug: "contact",
        a: "Email app@inkujapanese.com. Bao (the founder) personally answers every email. Response time is typically within 1-2 business days, often same-day for urgent issues.",
      },
    ],
  },
];
