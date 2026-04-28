export interface AlternativeRecord {
  slug: string;
  competitorName: string;
  tagline: string;
  summary: string;
  intro: string;
  whySearching: string[];
  whatLooksLike: string;
  howInkuDiffers: string[];
  faqs: { q: string; a: string }[];
}

export const ALTERNATIVES: Record<string, AlternativeRecord> = {
  duolingo: {
    slug: "duolingo",
    competitorName: "Duolingo",
    tagline:
      "The calm, adult-grade Duolingo alternative for learning Japanese.",
    summary:
      "If Duolingo's gamification burned you out, Inku is the calm, grown-up alternative for learning Japanese. It focuses on flashcards, audio support, spaced repetition, and a softer habit.",
    intro:
      "Many learners start with Duolingo because it is easy to try. Some later want a quieter Japanese-only review app with fewer moving parts. This page is for that moment.",
    whySearching: [
      "You built a big Duolingo streak and still cannot read hiragana fluently",
      "The gamification feels like it is taking more than it gives",
      "You want to learn Japanese, not play a progress game",
      "You are tired of the heart system forcing you to repeat lessons",
      "You have noticed the voice-over is TTS and starting to ingrain bad pronunciation",
    ],
    whatLooksLike:
      "A Duolingo alternative should teach useful vocabulary, respect your time with finite sessions, and make daily review feel calm.",
    howInkuDiffers: [
      "Bundled pronunciation audio. Inku ships with audio for the main card library, bundled into the app.  Your ear has a clear model to copy.",
      "Spaced repetition tuned to your memory. Inku uses FSRS (the same modern algorithm Anki switched to in 2024) to schedule reviews around when you would actually forget. No grinding, no wasted reps.",
      "Quiet progress, no leagues, no mascot guilt-tripping. Open the app, do today's review, close.",
      "Local-first. No account and no cloud sync for learning progress. Your review history lives on your iPhone.",
      "One subscription unlocks everything. No paywalled levels you have to grind through.",
    ],
    faqs: [
      {
        q: "Will I lose my Duolingo streak if I switch?",
        a: "Yes. You can keep Duolingo installed if that streak means something emotional, but you are not required to give up learning progress when you switch tools.",
      },
      {
        q: "How long until I catch up on what Duolingo taught me?",
        a: "If you had a typical 100-day Duolingo Japanese run, Inku will cover that material in 7-10 days.",
      },
      {
        q: "Is Inku's Japanese course bigger than Duolingo's?",
        a: "Different shapes. Duolingo's Japanese course has more content across grammar and sentences. Inku has fewer units but deeper audio, better SRS, and a clear kana-to-N5 path.",
      },
    ],
  },

  anki: {
    slug: "anki",
    competitorName: "Anki",
    tagline:
      "An Anki alternative for Japanese that comes with cards and audio built in.",
    summary:
      "Anki is infinitely flexible and infinitely bare. Inku is the Japanese-specific alternative that ships with curated cards, audio support, and zero setup.",
    intro:
      "Anki is the right tool for power users and medical students. It is the wrong tool for most Japanese beginners because the first week is a full setup project: find a deck, evaluate its quality, install add-ons, hope the audio works. Inku is the alternative for everyone who wants to just start learning.",
    whySearching: [
      "You looked at Anki's UI and immediately felt exhausted",
      "The idea of spending a weekend building a deck is a showstopper",
      "You tried a shared Anki deck and found it outdated or full of TTS audio",
      "You want a Japanese-specific app, not a generalist tool",
      "AnkiMobile's $25 one-time is fine, but you want something that feels like a product, not a tool",
    ],
    whatLooksLike:
      "An Anki alternative should keep the useful core (spaced repetition, flashcards, daily queues) while removing the pain (setup cost, UI clutter, having to make your own cards).",
    howInkuDiffers: [
      "Pre-built N5 deck. Every card is hand-curated and organized by category. No time lost building, evaluating, or hunting for decent shared decks.",
      "Japanese audio support, not TTS.",
      "One review session a day with finite length. You are not staring at a queue of 800 cards wondering if you will ever get through it.",
      "No scheduler dials to tune. FSRS runs underneath; you never see it.",
      "iPhone-native UI, not a port of a desktop app.",
    ],
    faqs: [
      {
        q: "Can I import my Anki deck into Inku?",
        a: "Not currently. If you have a deck you love, keep Anki for that deck. Inku is a curated product, not a general-purpose SRS.",
      },
      {
        q: "Does Inku use the same SRS math as Anki?",
        a: "Yes. FSRS, tuned for Japanese learners. Anki's default is also FSRS as of 2024.",
      },
      {
        q: "Will I miss Anki's power features?",
        a: "If you love custom card templates, image occlusion, and multi-domain study, yes. If you just want to learn Japanese, no.",
      },
    ],
  },

  "rosetta-stone": {
    slug: "rosetta-stone",
    competitorName: "Rosetta Stone",
    tagline:
      "A modern Rosetta Stone alternative for Japanese at a fraction of the price.",
    summary:
      "Rosetta Stone is a long-running immersion product. Inku is a lighter iPhone alternative built around flashcards, audio support, and short review sessions.",
    intro:
      "Rosetta Stone is a long-running language product built around immersion. Inku is a modern alternative that fits in a pocket and focuses on short Japanese review.",
    whySearching: [
      "Rosetta Stone is too expensive for how much you want to spend on this",
      "The image-matching method feels slow to you",
      "You want something that fits on your phone, not a desktop or tablet",
      "You are a beginner and need more scaffolding than pure immersion provides",
    ],
    whatLooksLike:
      "A Rosetta Stone alternative should teach Japanese through voice and visuals without requiring $200 upfront. It should work on a phone and fit into 10-minute daily sessions.",
    howInkuDiffers: [
      "A 7-day free trial, no big upfront commitment.",
      "Flashcards plus audio, not image-matching. Faster vocabulary acquisition for adult learners.",
      "Modern iPhone-native UI.",
      "Core review and progress work from the app library.",
      "No account, no cloud sync required.",
    ],
    faqs: [
      {
        q: "Does Inku use the immersion method?",
        a: "Partially. The app uses Japanese audio and does not translate unnecessarily. You also get kana, furigana, and English explanations where they help.",
      },
      {
        q: "Is Rosetta Stone's method actually effective for Japanese?",
        a: "For some learners, yes. For most adults, the pace is slow and the pedagogy is dated. Inku's flashcard-plus-audio approach produces faster N5 progress for the same time investment.",
      },
    ],
  },

  babbel: {
    slug: "babbel",
    competitorName: "Babbel",
    tagline:
      "A Japanese-first Babbel alternative for serious beginners.",
    summary:
      "Babbel's Japanese catalogue is limited compared to its European languages. Inku is built Japanese-first with audio-supported review and a curated N5 deck.",
    intro:
      "Babbel is a strong app for European languages. Its Japanese course is thinner, and the lesson-based structure does not match how most adult Japanese learners actually progress. Inku is a Japanese-first alternative.",
    whySearching: [
      "You are frustrated with Babbel's smaller Japanese catalogue",
      "The lesson-based pacing feels slow for how much time you have",
      "You want an app built for Japanese, not a European-language app with a Japanese track bolted on",
    ],
    whatLooksLike:
      "A Babbel alternative for Japanese should be Japanese-first, pocket-sized, and built for spaced repetition rather than lesson completion.",
    howInkuDiffers: [
      "Japanese-only focus. Every design decision is for Japanese learners.",
      "Flashcard-based, not lesson-based. Dip in for 10 minutes without committing to a lesson.",
      "Japanese audio support.",
      "Hiragana and katakana guides included.",
      "One-third the annual price.",
    ],
    faqs: [
      {
        q: "Does Inku have Babbel-style grammar lessons?",
        a: "No. Inku teaches vocabulary and kana with example sentences that demonstrate grammar in context, but it does not have structured grammar lessons. Pair with a grammar tool like Bunpo if you want that.",
      },
      {
        q: "Is Babbel's Japanese course bad?",
        a: "It is fine for absolute beginners. It just stops short of where most learners want to continue. Inku extends the runway with deeper vocab and audio.",
      },
    ],
  },

  pimsleur: {
    slug: "pimsleur",
    competitorName: "Pimsleur",
    tagline:
      "A Pimsleur alternative for Japanese, for learners who need to see the script.",
    summary:
      "Pimsleur is audio-only. Inku is audio plus visual plus writing, so you learn to read hiragana and katakana at the same time you learn to hear them.",
    intro:
      "Pimsleur's audio-only method is wonderful for getting your ear used to the rhythm of a language. For Japanese, though, it means you finish 30 half-hour lessons and still cannot read the script. Inku gives you the audio without hiding the written language.",
    whySearching: [
      "You have done 10+ Pimsleur lessons and still cannot read kana",
      "You are a visual learner and audio-only does not stick",
      "You want to read Japanese signs, menus, and messages, not just speak it",
      "Pimsleur's subscription is steep ($20/mo) for audio only",
    ],
    whatLooksLike:
      "A Pimsleur alternative should keep the high-quality audio but add the visual script work Japanese requires. It should be faster-paced and more affordable.",
    howInkuDiffers: [
      "Pronunciation audio with the written script on the same card. Your eye and ear learn together.",
      "Kana drill built in. You leave Inku able to read hiragana and katakana, not just hear them.",
      "$70.99/year vs $240/year.",
      "iPhone native with finite 10-minute sessions. Pimsleur's 30-minute lessons can feel long.",
    ],
    faqs: [
      {
        q: "Is Pimsleur's audio method actually better for listening?",
        a: "For pure listening comprehension, it is excellent. For reading and writing, it is insufficient. Most learners need both.",
      },
      {
        q: "Can I use both Inku and Pimsleur?",
        a: "Yes, and it is a good combination. Pimsleur for listening practice during commutes, Inku for reading and vocabulary.",
      },
    ],
  },
};
