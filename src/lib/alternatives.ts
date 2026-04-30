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

  wanikani: {
    slug: "wanikani",
    competitorName: "WaniKani",
    tagline:
      "A WaniKani alternative for the kana-and-vocabulary phase WaniKani assumes you've already done.",
    summary:
      "WaniKani is the gold-standard kanji SRS but assumes you already know hiragana, katakana, and basic vocabulary. Inku is the alternative for the prerequisite phase WaniKani skips.",
    intro:
      "WaniKani is brilliant once you can read kana and have a few hundred words. The first three months it doesn't help you with — kana, basic vocabulary, conversational phrases — Inku covers exactly. Most serious learners eventually use both, just at different stages.",
    whySearching: [
      "You bounced off WaniKani's first level because you didn't know kana yet",
      "You want to start before you're ready for 2,000 kanji",
      "You want vocabulary and phrases, not radicals and mnemonics",
      "You want a calmer daily ritual than WaniKani's queue",
      "You want pronunciation audio bundled with each card",
    ],
    whatLooksLike:
      "A WaniKani alternative for the prerequisite phase should teach kana from scratch, build N5 vocabulary, and prepare you to actually use WaniKani when the time comes.",
    howInkuDiffers: [
      "Teaches hiragana and katakana from zero. WaniKani assumes both.",
      "Curated N5 + N4 vocabulary deck with bundled audio. WaniKani teaches vocabulary as a kanji byproduct.",
      "Phrase packs (casual, polite, travel, anime). WaniKani has none.",
      "Native iPhone app with finite daily sessions. WaniKani is web-first.",
      "$70.99/year unlocks everything. No level gating, no SRS dials.",
    ],
    faqs: [
      {
        q: "Should I use Inku before WaniKani or instead of WaniKani?",
        a: "Before. Most learners use Inku for the first 3-6 months (kana through ~500 N5 words), then add WaniKani for the long kanji journey. They're sequential, not competing.",
      },
      {
        q: "Will Inku ever cover 2,000 kanji like WaniKani?",
        a: "Not in the same shape. We're expanding kanji coverage in N4 and N3 decks, but we're not trying to replicate WaniKani's 2,000-kanji arc. That's a different product with a different scope.",
      },
      {
        q: "Is WaniKani worth the $89/year?",
        a: "If you stick with it past level 10, yes. The lifetime ($299, often discounted) pays off after about 4 years. WaniKani's bigger problem is the dropout rate, not the price.",
      },
    ],
  },

  bunpo: {
    slug: "bunpo",
    competitorName: "Bunpo",
    tagline:
      "A Bunpo alternative for the vocabulary side Bunpo deliberately skips.",
    summary:
      "Bunpo is the grammar-drill specialist for JLPT levels. Inku is the vocabulary-and-kana alternative that complements grammar drills with actual word retention.",
    intro:
      "Bunpo is excellent at one specific thing: drilling JLPT grammar patterns. It doesn't try to be your vocabulary tool, your kana tool, or your audio tool. Inku is the alternative for those jobs. Use them together; don't pick.",
    whySearching: [
      "Bunpo doesn't teach kana, and you're starting from zero",
      "Bunpo's vocabulary coverage is thinner than its grammar coverage",
      "You want pronunciation audio bundled with each card",
      "You want a Japanese-only app that includes phrases, not just grammar patterns",
    ],
    whatLooksLike:
      "A Bunpo alternative for vocabulary and kana should ship with curated decks, bundled audio, and a calm daily flow that pairs with Bunpo's grammar drills.",
    howInkuDiffers: [
      "Hiragana and katakana taught from zero. Bunpo assumes both.",
      "515 N5 cards and 391 N4 cards, all curated and audio-supported.",
      "Four phrase packs (casual, polite, travel, anime). Bunpo focuses on isolated grammar.",
      "FSRS scheduling tuned for vocabulary retention.",
      "No XP, no progress badges, no streak gamification.",
    ],
    faqs: [
      {
        q: "Should I replace Bunpo with Inku?",
        a: "No — pair them. Bunpo for grammar drilling, Inku for vocabulary, kana, and phrases. They're complementary, not overlapping.",
      },
      {
        q: "Does Inku have Bunpo-style grammar drills?",
        a: "No. Inku teaches grammar implicitly through example sentences in the phrase packs but doesn't drill JLPT patterns the way Bunpo does. If grammar drilling matters, keep Bunpo.",
      },
    ],
  },

  memrise: {
    slug: "memrise",
    competitorName: "Memrise",
    tagline:
      "A Memrise alternative for Japanese learners who want a focused app, not a 22-language platform.",
    summary:
      "Memrise teaches Japanese inside a multi-language platform with native speaker videos. Inku is the Japanese-only alternative with FSRS scheduling and bundled audio.",
    intro:
      "Memrise's native speaker videos are a real innovation, but the rest of the experience is generic — leaderboards, streaks, multi-language UI, light SRS. Inku is the Japanese-only alternative for learners who don't need 22 languages and do need modern spaced repetition.",
    whySearching: [
      "You're only learning Japanese and don't need 22 languages in one subscription",
      "You want a real spaced-repetition scheduler, not Memrise's lighter system",
      "Memrise's gamification (points, daily targets, leaderboards) is exhausting",
      "You want a calmer iPhone app, not a generalist platform",
    ],
    whatLooksLike:
      "A Memrise alternative for Japanese should be Japanese-first, calm, audio-rich, and built around modern spaced repetition.",
    howInkuDiffers: [
      "Japanese-only product, not a multi-language template.",
      "FSRS spaced repetition. Memrise's scheduler is lighter.",
      "Bundled per-card audio.",
      "Curated N5 and N4 decks plus phrase packs.",
      "No leaderboards, points, or daily targets.",
    ],
    faqs: [
      {
        q: "Does Inku have native speaker videos like Memrise?",
        a: "No. Inku has bundled per-card pronunciation audio but does not include user-submitted video clips. If watching real Japanese speakers is your main learning method, keep Memrise.",
      },
      {
        q: "Is Memrise's free tier still worth it for Japanese?",
        a: "It's narrowed over time. The free Japanese course is light on grammar and the Pro paywall has expanded. If you're committed to Japanese long-term, a focused tool is more efficient.",
      },
    ],
  },

  drops: {
    slug: "drops",
    competitorName: "Drops",
    tagline:
      "A Drops alternative for Japanese learners who want longer sessions and stronger retention.",
    summary:
      "Drops is a beautiful 5-minute illustrated vocabulary app. Inku is the alternative for learners who want unlimited daily study, bundled audio, and proper FSRS scheduling.",
    intro:
      "Drops is genuinely lovely. The illustrations are custom, the UI is calm, and the 5-minute daily cap is a real design choice. The cap is also why some learners outgrow Drops — once you want to study 15 or 20 minutes a day, the free tier locks you out and the paid tier is shallower than its competitors.",
    whySearching: [
      "Drops' 5-minute daily cap is too short once you're serious",
      "You want pronunciation audio with every card",
      "You want a real spaced-repetition scheduler",
      "You want kanji coverage, not just illustrations",
    ],
    whatLooksLike:
      "A Drops alternative should preserve the calm UI but lift the time cap, add pronunciation audio, and use modern spaced repetition.",
    howInkuDiffers: [
      "No daily time cap. Study as long as your attention holds.",
      "Bundled pronunciation audio for the main card library.",
      "FSRS scheduling, not Drops' lighter custom system.",
      "Japanese-specific kanji coverage in N5 and N4.",
      "Curated phrase packs alongside vocabulary.",
    ],
    faqs: [
      {
        q: "Are Inku's illustrations as nice as Drops'?",
        a: "Different aesthetic. Inku is typographic and uses Japanese characters as design accents. Drops is illustration-first. If illustrations are what kept you on Drops, you may miss them in Inku.",
      },
      {
        q: "Will I outgrow Drops?",
        a: "Most serious learners do. Drops' deliberate-shallowness is a feature for casual learners and a wall for committed ones.",
      },
    ],
  },
};
