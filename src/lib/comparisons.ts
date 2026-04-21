export interface FeatureRow {
  feature: string;
  inku: string;
  competitor: string;
  winner: "inku" | "competitor" | "tie";
}

export interface ScenarioItem {
  scenario: string;
  explanation: string;
}

export interface ComparisonRecord {
  slug: string;
  competitorName: string;
  competitorShortName: string;
  tagline: string;
  summary: string;
  releaseYear?: number;
  competitorCategory: string;
  competitorPricing: string;
  intro: string;
  inkuWins: ScenarioItem[];
  competitorWins: ScenarioItem[];
  features: FeatureRow[];
  honestTake: string;
  verdict: string;
  recommendation: string;
  faqs: { q: string; a: string }[];
}

export const COMPARISONS: Record<string, ComparisonRecord> = {
  duolingo: {
    slug: "duolingo",
    competitorName: "Duolingo",
    competitorShortName: "Duolingo",
    tagline:
      "Duolingo is the giant gamified language app. Inku is the calm iPhone flashcard app. Different tools for different temperaments.",
    summary:
      "Duolingo is free, gamified, and designed to make you come back daily. Inku is subscription, calm, and designed to teach you Japanese.",
    releaseYear: 2012,
    competitorCategory: "Gamified multi-language app",
    competitorPricing: "Free with ads, $7/mo Super",
    intro:
      "Duolingo is probably the app that got you thinking about Japanese. It is the most downloaded language app in the world and, for millions of people, the first tool they ever opened. Inku exists because a lot of those people bounced off after 100 days of streak-chasing without feeling like they had learned anything. Here is the honest comparison.",
    inkuWins: [
      {
        scenario: "You want to actually speak Japanese in 6 months",
        explanation:
          "Inku is built around spaced repetition with real vocabulary and native voice acting. Six months with Inku takes you through hiragana, katakana, and 200+ N5 words. Six months of Duolingo Japanese is mostly about owning a streak.",
      },
      {
        scenario: "You are an adult who finds gamification exhausting",
        explanation:
          "No fireworks, no leagues, no mascot giving you a guilt trip. Inku opens, presents today's cards, and closes. The whole thing is built for people who feel patronized by streak flames.",
      },
      {
        scenario: "You want offline access and privacy",
        explanation:
          "Inku runs fully on-device with no account required. No data collected, no behavioral profile built. Duolingo uses aggressive tracking and behavioral nudges.",
      },
      {
        scenario: "You care about authentic pronunciation",
        explanation:
          "Every word in Inku is recorded by an actor. Duolingo uses text-to-speech that gets pitch accent and tone wrong for Japanese. Your ear will learn whatever it hears first.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want free and do not plan to subscribe",
        explanation:
          "Duolingo has a real free tier. Inku is subscription-first with a 7-day trial. If budget is the constraint, Duolingo wins.",
      },
      {
        scenario: "You want multiple languages in one app",
        explanation:
          "Duolingo teaches 40+ languages. Inku is Japanese-only and plans to stay that way.",
      },
      {
        scenario: "You like the motivation of a big community",
        explanation:
          "Duolingo has leaderboards, leagues, and millions of users. Inku is a solo tool with no social features.",
      },
    ],
    features: [
      { feature: "Free tier", inku: "7-day trial only", competitor: "Free with ads", winner: "competitor" },
      { feature: "Native voice acting", inku: "Yes, actor-recorded", competitor: "TTS only", winner: "inku" },
      { feature: "Spaced repetition", inku: "FSRS algorithm", competitor: "Basic interval", winner: "inku" },
      { feature: "Hiragana + katakana", inku: "Full guide + drill", competitor: "Covered in early lessons", winner: "inku" },
      { feature: "Offline mode", inku: "Always (all on-device)", competitor: "Limited (Super only)", winner: "inku" },
      { feature: "Account required", inku: "No", competitor: "Yes", winner: "inku" },
      { feature: "Languages supported", inku: "Japanese", competitor: "40+", winner: "competitor" },
      { feature: "Gamification", inku: "None", competitor: "Heavy", winner: "tie" },
      { feature: "Ads", inku: "None", competitor: "Yes (free tier)", winner: "inku" },
      { feature: "Pricing", inku: "$29.99/yr or $4.99/mo", competitor: "$84/yr Super", winner: "inku" },
    ],
    honestTake:
      "Duolingo is not a bad app. It is a good app built for mass-market retention, and that retention comes from gamification. If you thrive on streaks and leaderboards, it can be a genuinely fun way to spend 10 minutes a day. If you find those things exhausting (or, like many people, shame-inducing), you are the exact person Inku was built for.",
    verdict:
      "Use Duolingo if: you want free, multiple languages, and enjoy gamification. Use Inku if: you are a serious adult learner who wants to actually produce Japanese and is willing to pay $30 a year for a calmer experience.",
    recommendation:
      "If you have tried Duolingo for Japanese and are not happy with how much (or little) you've learned, Inku is worth a 7-day trial. Most of our users were Duolingo users for 100+ days first.",
    faqs: [
      {
        q: "Can I use Inku and Duolingo at the same time?",
        a: "You can, but most people find it counterproductive. The two apps have different review schedules, so you double your time commitment without doubling your progress. Most learners who switch choose one.",
      },
      {
        q: "Does Inku have a streak feature?",
        a: "No. We deliberately removed streak mechanics. The home screen shows ink drops collected instead, which accumulate at your own pace.",
      },
      {
        q: "How does Duolingo's TTS compare to Inku's audio?",
        a: "Duolingo's TTS is serviceable for kana reading but misses Japanese pitch accent entirely. Inku uses an actor recorded at studio quality. The difference is audible within the first minute of using Inku.",
      },
    ],
  },

  anki: {
    slug: "anki",
    competitorName: "Anki",
    competitorShortName: "Anki",
    tagline:
      "Anki is the open-source SRS warhorse. Inku is the opinionated iPhone flashcard app. Power vs polish.",
    summary:
      "Anki is infinitely flexible and infinitely bare. Inku is pre-built and opinionated with native voice and curated cards.",
    releaseYear: 2006,
    competitorCategory: "Open-source flashcard SRS",
    competitorPricing: "Free (desktop/Android), $25 one-time (iOS)",
    intro:
      "Anki is the grandparent of spaced-repetition apps. It has powered Japanese learners to N1 level for 18 years. It is also famously bare, which is a feature or a flaw depending on who you ask. Inku is shaped like Anki's younger, more opinionated sibling.",
    inkuWins: [
      {
        scenario: "You don't want to build your own deck",
        explanation:
          "Inku ships with 600+ hand-crafted cards with native audio. Anki requires you to find (or build) a deck, vet the content, and hope the TTS is passable.",
      },
      {
        scenario: "You want a calm, beautiful daily session",
        explanation:
          "Inku's review session is designed for the calm, quiet 10 minutes before bed. Anki's UI is utilitarian; the cards are whatever you made them look like.",
      },
      {
        scenario: "You want audio on every card",
        explanation:
          "Every Inku card has actor-recorded audio bundled into the app. Anki decks typically use TTS or no audio at all.",
      },
      {
        scenario: "You want to start today, not set up for a week",
        explanation:
          "Inku works after a 2-minute onboarding. Anki requires finding a deck, installing add-ons, maybe running a custom scheduler. The setup cost is real.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want complete control over your cards",
        explanation:
          "Anki lets you customize everything: card templates, scheduler, interval modifier, add-ons. If you like tinkering, Anki wins on depth.",
      },
      {
        scenario: "You need to study non-Japanese material",
        explanation:
          "Inku is Japanese-only. Anki handles medical school, law, chess openings, and any other fact-based domain.",
      },
      {
        scenario: "You already have a large deck built",
        explanation:
          "If you have spent 6 months curating your own Anki deck, switching costs are high. Stick with it.",
      },
      {
        scenario: "You need advanced features (occlusion, cloze, LaTeX)",
        explanation:
          "Anki's add-on ecosystem supports image occlusion, cloze deletions, MathJax, and a thousand other niche needs. Inku is flashcard-shaped by design.",
      },
    ],
    features: [
      { feature: "Setup time", inku: "2 minutes", competitor: "1-8 hours", winner: "inku" },
      { feature: "Native audio", inku: "Yes, on every card", competitor: "TTS or none", winner: "inku" },
      { feature: "Pre-built Japanese deck", inku: "Yes, curated", competitor: "User-made, variable quality", winner: "inku" },
      { feature: "Customization", inku: "Limited", competitor: "Total", winner: "competitor" },
      { feature: "SRS algorithm", inku: "FSRS", competitor: "FSRS (2024+) or SM-2", winner: "tie" },
      { feature: "iOS app", inku: "Native SwiftUI", competitor: "AnkiMobile, $25", winner: "inku" },
      { feature: "Price (iOS)", inku: "$29.99/yr", competitor: "$25 one-time", winner: "competitor" },
      { feature: "Sync across devices", inku: "Local only", competitor: "AnkiWeb", winner: "competitor" },
      { feature: "Multi-language/domain support", inku: "Japanese only", competitor: "Anything", winner: "competitor" },
      { feature: "UI polish", inku: "High", competitor: "Utilitarian", winner: "inku" },
    ],
    honestTake:
      "Anki is a nuclear reactor. It is incredibly powerful and it will happily let you turn it into a shrine. If you enjoy that, stay. Inku is the opposite: a single-purpose tool that does one thing without asking you to configure it. The choice is mostly about whether you want to build a study system or just use one.",
    verdict:
      "Use Anki if: you love customization, need multi-domain SRS, or already have a large personal deck. Use Inku if: you want Japanese flashcards with native audio, ready to use, without a weekend of setup.",
    recommendation:
      "Most learners do not need Anki's power. If you want to learn Japanese and you want to start today, Inku is the faster path.",
    faqs: [
      {
        q: "Can I import my Anki deck into Inku?",
        a: "Not yet. Inku ships with a curated deck and there's no import path. If you have a beloved Anki deck, you can keep Anki for that deck and use Inku as a second app.",
      },
      {
        q: "Does Inku use the same FSRS algorithm as Anki?",
        a: "Yes, the underlying scheduler math is FSRS with parameters tuned for Japanese learning. The difference is that Inku hides the scheduler entirely; Anki exposes every dial.",
      },
      {
        q: "Is $30 a year worth it over Anki's $25 one-time?",
        a: "If you value the native audio, the curated deck, and the calmer UI, yes. If you are a power user who will build your own deck anyway, no.",
      },
    ],
  },

  wanikani: {
    slug: "wanikani",
    competitorName: "WaniKani",
    competitorShortName: "WaniKani",
    tagline:
      "WaniKani is the gold-standard kanji SRS. Inku starts earlier and covers more of the basics. Different phases of the same journey.",
    summary:
      "WaniKani is a 2000-kanji SRS organized by radicals. Inku is a kana + N5 vocab + phrases app for beginners.",
    releaseYear: 2012,
    competitorCategory: "Kanji-focused SRS",
    competitorPricing: "$9/mo, $89/yr, $299 lifetime",
    intro:
      "WaniKani is the most respected kanji app of the last decade. If your goal is to read novels in Japanese, there is no single tool more useful. But WaniKani assumes you already know hiragana, katakana, and some vocabulary. Inku covers exactly that prerequisite phase.",
    inkuWins: [
      {
        scenario: "You do not know hiragana and katakana yet",
        explanation:
          "WaniKani expects you to already know kana. Inku teaches kana from scratch.",
      },
      {
        scenario: "You want vocabulary and phrases, not just kanji",
        explanation:
          "WaniKani teaches kanji and the words that contain them. Inku teaches vocabulary across categories, plus conversational phrases.",
      },
      {
        scenario: "You want native audio on every card",
        explanation:
          "Inku has actor-recorded audio. WaniKani uses a single native speaker for audio on vocabulary, but not on kanji readings individually.",
      },
      {
        scenario: "You want a shorter daily commitment",
        explanation:
          "WaniKani requires 15-45 minutes a day for years to complete. Inku's sessions average 10-15 minutes.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want to read Japanese novels, manga, news",
        explanation:
          "Finishing WaniKani gets you through 2,000 kanji. No other tool approaches that scale for Japanese kanji.",
      },
      {
        scenario: "You love structured progression",
        explanation:
          "WaniKani's 60 levels are the clearest 'leveling up' arc in Japanese learning. Each level unlocks concrete new kanji.",
      },
      {
        scenario: "You are past the beginner stage (N4+)",
        explanation:
          "Inku's current deck is N5-focused. If you are past that, WaniKani has more runway.",
      },
    ],
    features: [
      { feature: "Hiragana/katakana coverage", inku: "Full guide + drill", competitor: "Assumed known", winner: "inku" },
      { feature: "Kanji count", inku: "Minimal (starts in N4)", competitor: "2,000+", winner: "competitor" },
      { feature: "Vocabulary count", inku: "600+", competitor: "6,000+ (through 60 levels)", winner: "competitor" },
      { feature: "Audio quality", inku: "Actor-recorded, every card", competitor: "Native speaker, vocab only", winner: "inku" },
      { feature: "SRS algorithm", inku: "FSRS", competitor: "Custom interval", winner: "inku" },
      { feature: "Mobile experience", inku: "Native iPhone app", competitor: "Web or third-party apps", winner: "inku" },
      { feature: "Price per year", inku: "$29.99", competitor: "$89 or $299 lifetime", winner: "inku" },
      { feature: "Time to first kanji", inku: "~2 months in", competitor: "Day 1", winner: "competitor" },
      { feature: "Community", inku: "Small, email only", competitor: "Large forum", winner: "competitor" },
    ],
    honestTake:
      "WaniKani and Inku are not really competing. They are sequential. Inku gets you through the doorway (kana + N5 vocabulary + phrases). WaniKani takes you through the 2,000-kanji hallway. Most serious learners will use both, just at different stages.",
    verdict:
      "Use WaniKani if: you already know kana and want to read Japanese novels eventually. Use Inku if: you are still learning kana, or want a calmer, more phrase-focused beginner app.",
    recommendation:
      "If you are a total beginner, start with Inku. Add WaniKani around month 4, once you are comfortable with hiragana, katakana, and a few hundred N5 words.",
    faqs: [
      {
        q: "Do WaniKani and Inku overlap?",
        a: "Minimally. They target different phases: Inku for the first 4-6 months, WaniKani for the kanji deep-dive after.",
      },
      {
        q: "Is WaniKani's $89/yr worth it?",
        a: "If you stick with it through level 10+, yes. If you quit by level 3 like most people, no. The lifetime ($299, often on sale for less) pays off at around 4 years.",
      },
      {
        q: "Does Inku plan to build a kanji deck like WaniKani's?",
        a: "We are expanding the kanji coverage in N4 and N3 decks, but we are not trying to replicate WaniKani's 2,000-kanji arc. That is a different product.",
      },
    ],
  },

  bunpo: {
    slug: "bunpo",
    competitorName: "Bunpo",
    competitorShortName: "Bunpo",
    tagline:
      "Bunpo is the grammar-drill specialist for Japanese. Inku is a kana and vocabulary app with native audio. Sequential, not alternative.",
    summary:
      "Bunpo drills JLPT grammar patterns through structured lessons. Inku drills vocabulary and kana through spaced flashcards.",
    releaseYear: 2015,
    competitorCategory: "Grammar-drill Japanese app",
    competitorPricing: "$9/mo, $69/yr",
    intro:
      "Bunpo is built around grammar: JLPT-level patterns, conjugation drills, and sentence construction. Inku is built around vocabulary and kana. Most serious learners eventually use both, but for different reasons.",
    inkuWins: [
      {
        scenario: "You are at the absolute beginner stage",
        explanation:
          "Bunpo's first lesson assumes you can read hiragana. Inku teaches hiragana from scratch.",
      },
      {
        scenario: "You want vocabulary with authentic pronunciation",
        explanation:
          "Inku's actor-recorded audio is on every card. Bunpo focuses on grammar patterns; pronunciation is secondary.",
      },
      {
        scenario: "You want a calm, un-gamified experience",
        explanation:
          "Bunpo has XP bars and progress badges. Inku deliberately has neither.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want to pass the JLPT",
        explanation:
          "Bunpo is organized by JLPT level with thousands of grammar drills. Inku is vocab-centric.",
      },
      {
        scenario: "You need grammar drills with feedback",
        explanation:
          "Bunpo's fill-in-the-blank drills with explanations are its core feature. Inku does not drill grammar in that structured way.",
      },
      {
        scenario: "You are past beginner level (N4+)",
        explanation:
          "Bunpo goes deep to N1 grammar. Inku's current deck focuses on N5/N4 vocabulary.",
      },
    ],
    features: [
      { feature: "Focus", inku: "Vocabulary + kana", competitor: "Grammar", winner: "tie" },
      { feature: "Native audio", inku: "Actor-recorded", competitor: "Limited TTS", winner: "inku" },
      { feature: "Grammar drills", inku: "None", competitor: "Extensive, by JLPT level", winner: "competitor" },
      { feature: "Spaced repetition", inku: "FSRS", competitor: "Built-in but lighter", winner: "inku" },
      { feature: "JLPT alignment", inku: "N5 complete, N4 partial", competitor: "N5-N1", winner: "competitor" },
      { feature: "Pricing", inku: "$29.99/yr", competitor: "$69/yr", winner: "inku" },
      { feature: "Platform", inku: "iPhone only", competitor: "iOS + Android", winner: "competitor" },
      { feature: "Beginner-friendly", inku: "Yes, from zero", competitor: "Assumes kana", winner: "inku" },
    ],
    honestTake:
      "Bunpo is the tool you reach for when grammar starts becoming the limiting factor. That usually happens around month 4-6 of learning. Before that, you need vocabulary. Use Inku first, add Bunpo when grammar becomes the bottleneck.",
    verdict:
      "Use Bunpo if: you have the kana basics and want to drill JLPT grammar hard. Use Inku if: you are starting from scratch or your bottleneck is vocabulary, not grammar.",
    recommendation:
      "Sequential, not alternative. Inku at the beginning, Bunpo when grammar starts to matter.",
    faqs: [
      {
        q: "Should I use Inku and Bunpo together?",
        a: "Yes, once you are a few months in. Inku for vocabulary and kana review, Bunpo for grammar drilling. They complement each other well.",
      },
      {
        q: "Does Inku plan to add grammar drills?",
        a: "Not structured JLPT-style drills. The phrase packs teach grammar implicitly through example sentences, but structured fill-in-the-blank is out of scope.",
      },
    ],
  },

  lingodeer: {
    slug: "lingodeer",
    competitorName: "LingoDeer",
    competitorShortName: "LingoDeer",
    tagline:
      "LingoDeer is a structured curriculum for Asian languages. Inku is a focused flashcard deck for Japanese. Depth vs focus.",
    summary:
      "LingoDeer teaches full Japanese curriculum through lessons. Inku teaches vocabulary, kana, and phrases through spaced flashcards.",
    releaseYear: 2017,
    competitorCategory: "Curriculum-based Japanese app",
    competitorPricing: "$11.99/mo, $69.99/yr, $159.99 lifetime",
    intro:
      "LingoDeer came out of Korean and Japanese teachers who were frustrated with Duolingo's Asian-language handling. It's the app that most seriously covers Japanese grammar in a lesson format. Inku takes a different approach: flashcards and audio, not lessons.",
    inkuWins: [
      {
        scenario: "You want to learn at your own pace, not through lessons",
        explanation:
          "LingoDeer is lesson-based. You go A then B then C. Inku lets you dip in for 10 minutes without committing to a lesson.",
      },
      {
        scenario: "You want native voice acting",
        explanation:
          "Inku's audio is actor-recorded. LingoDeer uses TTS for most content.",
      },
      {
        scenario: "You want a calmer interface",
        explanation:
          "LingoDeer has animations, XP, and streak mechanics. Inku has none.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want a full curriculum, not just vocab",
        explanation:
          "LingoDeer covers grammar, reading, listening, and speaking in a progressive course. Inku covers vocab, kana, and phrases.",
      },
      {
        scenario: "You want lessons with explanations",
        explanation:
          "LingoDeer includes in-app grammar explanations. Inku does not teach grammar directly.",
      },
    ],
    features: [
      { feature: "Format", inku: "Flashcards", competitor: "Lesson-based", winner: "tie" },
      { feature: "Native audio", inku: "Actor-recorded, every card", competitor: "Mixed TTS", winner: "inku" },
      { feature: "Grammar lessons", inku: "None", competitor: "Full course", winner: "competitor" },
      { feature: "Vocabulary breadth", inku: "600+ curated", competitor: "Thousands in course", winner: "competitor" },
      { feature: "Daily time commitment", inku: "10-15 min", competitor: "20-30 min (lesson)", winner: "inku" },
      { feature: "Pricing", inku: "$29.99/yr", competitor: "$69.99/yr", winner: "inku" },
      { feature: "Platform", inku: "iPhone", competitor: "iOS, Android, Web", winner: "competitor" },
      { feature: "Gamification", inku: "None", competitor: "Moderate", winner: "tie" },
    ],
    honestTake:
      "LingoDeer is the right call if you want a structured course and are comfortable with lesson-based pacing. Inku is the right call if you want to spend 10 minutes a day on targeted vocabulary practice without being pulled through a curriculum.",
    verdict:
      "Use LingoDeer if: you want a full Japanese course. Use Inku if: you want focused flashcard practice with native audio and no lesson commitment.",
    recommendation:
      "They can pair. LingoDeer for grammar lessons, Inku for spaced vocab review.",
    faqs: [
      {
        q: "Which is better for absolute beginners?",
        a: "LingoDeer has a more structured first-month experience. Inku has a simpler onboarding. Both work; the lesson-vs-flashcard difference is the real divide.",
      },
      {
        q: "Does LingoDeer teach kanji?",
        a: "In context, yes, as part of its vocabulary. Not as a dedicated deck like WaniKani.",
      },
    ],
  },

  renshuu: {
    slug: "renshuu",
    competitorName: "Renshuu",
    competitorShortName: "Renshuu",
    tagline:
      "Renshuu is a powerful, forum-backed Japanese web tool. Inku is a native iPhone app. Flexibility vs polish.",
    summary:
      "Renshuu offers deep customization, community-made content, and web-first flexibility. Inku offers a curated, native iPhone experience.",
    releaseYear: 2011,
    competitorCategory: "Customizable web-first Japanese SRS",
    competitorPricing: "Free tier, $6/mo, $60/yr Pro",
    intro:
      "Renshuu is a love letter from a small team of Japanese teachers. It has forums, custom schedules, thousands of user decks, and a depth that only 14 years of iteration can produce. Inku is the opposite: one deck, one opinion, built for the 10-minute phone break.",
    inkuWins: [
      {
        scenario: "You want a native iPhone app, not a web app",
        explanation:
          "Inku is SwiftUI native. Renshuu is primarily web-based; the iOS app is lighter than the web.",
      },
      {
        scenario: "You do not want to customize",
        explanation:
          "Renshuu rewards tinkering: custom schedules, custom quiz modes, user decks. Inku gives you one curated deck and one review flow.",
      },
      {
        scenario: "You want native voice acting",
        explanation:
          "Inku's audio is actor-recorded. Renshuu uses TTS.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want a generous free tier",
        explanation:
          "Renshuu's free tier covers a lot. Inku is subscription-first.",
      },
      {
        scenario: "You like community-built decks",
        explanation:
          "Renshuu has a large library of user-generated Japanese decks.",
      },
      {
        scenario: "You want a forum for questions",
        explanation:
          "Renshuu has an active community. Inku is email-only.",
      },
    ],
    features: [
      { feature: "Native app", inku: "iPhone", competitor: "Light iOS + web-first", winner: "inku" },
      { feature: "Audio", inku: "Actor-recorded", competitor: "TTS", winner: "inku" },
      { feature: "Deck library", inku: "One curated", competitor: "Thousands", winner: "competitor" },
      { feature: "Free tier", inku: "7-day trial", competitor: "Generous free", winner: "competitor" },
      { feature: "Customization", inku: "None", competitor: "Deep", winner: "competitor" },
      { feature: "UI polish", inku: "High", competitor: "Functional", winner: "inku" },
      { feature: "Community", inku: "Email only", competitor: "Forum", winner: "competitor" },
    ],
    honestTake:
      "Renshuu is the classic power-user Japanese tool. If you want control and community, it is a wonderful and free option. Inku is the opposite: a finished product you just use. The choice is about what you want to do with your 10 minutes a day.",
    verdict:
      "Use Renshuu if: you want web-based, free, and customizable. Use Inku if: you want native iPhone with native audio and no setup.",
    recommendation:
      "Try Renshuu's free tier first; if the web-first feel doesn't land, Inku is the native alternative.",
    faqs: [
      {
        q: "Is Renshuu really free?",
        a: "The free tier is genuinely useful. Paid ($60/yr) unlocks custom decks and more detailed stats.",
      },
      {
        q: "Which has better Japanese-specific features?",
        a: "Renshuu has more depth (pitch accent tracking, custom quiz modes). Inku has better polish. Different tradeoffs.",
      },
    ],
  },

  busuu: {
    slug: "busuu",
    competitorName: "Busuu",
    competitorShortName: "Busuu",
    tagline:
      "Busuu is a multi-language app with human peer feedback. Inku is Japanese-only with native audio. Community vs focus.",
    summary:
      "Busuu offers structured Japanese lessons with native-speaker review on your writing. Inku is flashcard-first with curated content.",
    releaseYear: 2008,
    competitorCategory: "Multi-language lesson app with peer review",
    competitorPricing: "$14/mo, $84/yr Premium",
    intro:
      "Busuu has a unique feature: native speakers of your target language review your writing. It is a strong tool for learners who want human feedback. Inku doesn't compete on that. Inku competes on polish, audio quality, and 10-minute-a-day usability.",
    inkuWins: [
      {
        scenario: "You want actor-recorded audio on every card",
        explanation:
          "Inku has native voice acting. Busuu uses a mix of TTS and short native clips.",
      },
      {
        scenario: "You prefer flashcards over structured lessons",
        explanation:
          "Inku is flashcard-first. Busuu is lesson-first with review exercises.",
      },
      {
        scenario: "You want a calm, single-purpose app",
        explanation:
          "Busuu teaches 14 languages and has a community interaction layer. Inku is Japanese-only and solo.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want peer feedback on your Japanese writing",
        explanation:
          "Busuu's peer review feature is unique. Inku does not offer this.",
      },
      {
        scenario: "You want a full Japanese lesson curriculum",
        explanation:
          "Busuu teaches grammar through structured lessons. Inku does not.",
      },
      {
        scenario: "You want multiple languages in one subscription",
        explanation:
          "Busuu covers 14 languages on one price. Inku is Japanese-only.",
      },
    ],
    features: [
      { feature: "Format", inku: "Flashcards", competitor: "Lessons + peer review", winner: "tie" },
      { feature: "Audio", inku: "Actor-recorded", competitor: "Mix of native + TTS", winner: "inku" },
      { feature: "Peer review", inku: "No", competitor: "Yes, unique", winner: "competitor" },
      { feature: "Languages", inku: "Japanese", competitor: "14", winner: "competitor" },
      { feature: "Pricing", inku: "$29.99/yr", competitor: "$84/yr", winner: "inku" },
      { feature: "Daily commitment", inku: "10-15 min", competitor: "20-30 min (lesson)", winner: "inku" },
      { feature: "Polish", inku: "High", competitor: "High", winner: "tie" },
    ],
    honestTake:
      "Busuu's peer review is a genuinely good feature that no other app has at the same quality. If that matters to you, Busuu wins. If you want flashcards and actor audio and a calmer daily ritual, Inku wins.",
    verdict:
      "Use Busuu if: you want peer review and a structured curriculum. Use Inku if: you want focused flashcard practice with native audio.",
    recommendation:
      "They can pair. Inku for daily flashcards, Busuu for occasional writing practice with peer feedback.",
    faqs: [
      {
        q: "Is Busuu's peer review actually useful?",
        a: "Yes, at beginner to intermediate levels. At advanced levels the feedback becomes thinner because fewer Japanese natives review beyond N3 material.",
      },
      {
        q: "Does Inku offer any community features?",
        a: "No. We deliberately keep Inku social-free.",
      },
    ],
  },

  lingopie: {
    slug: "lingopie",
    competitorName: "Lingopie",
    competitorShortName: "Lingopie",
    tagline:
      "Lingopie teaches through TV shows and native media. Inku teaches through spaced flashcards. Immersion vs drill.",
    summary:
      "Lingopie streams Japanese shows with interactive subtitles. Inku delivers actor-recorded flashcards with FSRS scheduling.",
    releaseYear: 2019,
    competitorCategory: "Media-based language app",
    competitorPricing: "$12/mo, $67/yr",
    intro:
      "Lingopie is the TV-through-Japanese app. You watch shows, tap words for definitions, and build a vocabulary from real media. Inku is the opposite: you build vocabulary from flashcards, then watch Japanese media later with less help. Two methods, same destination.",
    inkuWins: [
      {
        scenario: "You are a complete beginner",
        explanation:
          "Lingopie's shows assume you know kana and some grammar. Inku teaches both from scratch.",
      },
      {
        scenario: "You want efficient vocabulary acquisition",
        explanation:
          "Flashcards move faster than subtitled TV. Inku's 10-minute session covers more new vocab than a 30-minute show.",
      },
      {
        scenario: "You do not have time to watch shows daily",
        explanation:
          "Inku fits in a 10-minute coffee break. Lingopie requires a show-length commitment.",
      },
    ],
    competitorWins: [
      {
        scenario: "You learn better through real media than flashcards",
        explanation:
          "If flashcards bore you and shows energize you, Lingopie wins. Motivation matters more than pedagogy.",
      },
      {
        scenario: "You want cultural exposure",
        explanation:
          "Watching Japanese TV gives you cultural context, slang, and real-world conversation flow that flashcards cannot.",
      },
    ],
    features: [
      { feature: "Format", inku: "Flashcards", competitor: "TV shows", winner: "tie" },
      { feature: "Beginner-friendly", inku: "Yes, from zero", competitor: "Assumes kana + N5", winner: "inku" },
      { feature: "Time per session", inku: "10 min", competitor: "20-40 min", winner: "inku" },
      { feature: "Real media exposure", inku: "No", competitor: "Yes", winner: "competitor" },
      { feature: "Cultural context", inku: "Limited", competitor: "Strong", winner: "competitor" },
      { feature: "Pricing", inku: "$29.99/yr", competitor: "$67/yr", winner: "inku" },
    ],
    honestTake:
      "Lingopie is the tool for intermediate learners who want to boost input while enjoying real shows. It is probably too ambitious for day-one beginners. Inku is the opposite end of that arc.",
    verdict:
      "Use Lingopie if: you are at N5+ and want immersion through TV. Use Inku if: you are starting from zero or want focused flashcard practice.",
    recommendation:
      "Inku first, Lingopie around month 6.",
    faqs: [
      {
        q: "Can a total beginner learn from Lingopie?",
        a: "With effort, yes, but it is slow. The subtitles assume you can read kana and have some vocabulary.",
      },
      {
        q: "How much Japanese is on Lingopie?",
        a: "A solid catalogue, mostly dramas and documentaries. Growing but smaller than Spanish or French.",
      },
    ],
  },

  noji: {
    slug: "noji",
    competitorName: "Noji",
    competitorShortName: "Noji",
    tagline:
      "Noji is a web-based flashcard tool with a powerful tool library. Inku is a native iPhone app with actor-recorded audio.",
    summary:
      "Noji offers custom flashcard creation, a toolbox of utilities, and web-first access. Inku offers a curated iPhone experience.",
    releaseYear: 2021,
    competitorCategory: "Web flashcard tool",
    competitorPricing: "Free tier, $5/mo Pro",
    intro:
      "Noji has emerged as a flexible web-first flashcard tool with a strong set of side utilities (AI deck generators, PDF-to-flashcard tools). Inku is a dedicated iPhone app with a curated deck. Different shapes of the same problem.",
    inkuWins: [
      {
        scenario: "You want a native iPhone app",
        explanation:
          "Noji is web-first with mobile support. Inku is SwiftUI native.",
      },
      {
        scenario: "You want actor audio",
        explanation:
          "Inku has recorded audio. Noji uses TTS.",
      },
      {
        scenario: "You want a finished Japanese deck",
        explanation:
          "Inku ships with a curated N5 deck. Noji expects you to build or import decks.",
      },
    ],
    competitorWins: [
      {
        scenario: "You want to build your own cards easily",
        explanation:
          "Noji has a better deck-building UI than most competitors. Inku does not support custom decks.",
      },
      {
        scenario: "You want AI-powered deck creation",
        explanation:
          "Noji's AI tools can generate cards from a PDF or webpage.",
      },
      {
        scenario: "You want a free tier",
        explanation:
          "Noji has a usable free tier. Inku is subscription-first.",
      },
    ],
    features: [
      { feature: "Native app", inku: "iPhone", competitor: "Web + mobile", winner: "inku" },
      { feature: "Audio", inku: "Actor-recorded", competitor: "TTS", winner: "inku" },
      { feature: "Pre-built Japanese deck", inku: "Yes", competitor: "Some user decks", winner: "inku" },
      { feature: "Custom deck creation", inku: "No", competitor: "Yes, strong tools", winner: "competitor" },
      { feature: "AI tools", inku: "None", competitor: "Deck generators, OCR", winner: "competitor" },
      { feature: "Pricing", inku: "$29.99/yr", competitor: "Free or $60/yr", winner: "competitor" },
    ],
    honestTake:
      "Noji and Inku solve different problems. Noji is a toolbox. Inku is a product. If you want to build your own study system, Noji is powerful. If you want to just learn Japanese, Inku is simpler.",
    verdict:
      "Use Noji if: you like building custom flashcards and experimenting with tools. Use Inku if: you want a ready-made Japanese deck with native audio.",
    recommendation:
      "Different tools for different workflows.",
    faqs: [
      {
        q: "Can I export Inku cards to Noji?",
        a: "Not currently. Inku's deck is product-level IP, not exportable as an Anki-style deck.",
      },
    ],
  },
};
