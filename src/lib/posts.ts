import type { AuthorSlug } from "@/lib/authors";

export interface PostRecord {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  readingTime: string;
  wordCount: number;
  authorSlug: AuthorSlug;
  tags: string[];
  category: "blog" | "guide" | "vs" | "alternative" | "topic" | "jlpt" | "tool";
  answerBox?: string;
  keywords?: string[];
}

/**
 * Canonical index of long-form pages. Used for:
 * - Sitemap generation
 * - Blog/guide indexes
 * - Author post lists
 * - Internal linking graph
 */
export const ALL_POSTS: PostRecord[] = [
  // --- Pillar guides ---
  {
    slug: "/guides/learn-hiragana",
    title: "Learn Hiragana: Inku's Complete Guide",
    description:
      "Learn all 46 hiragana in three days with this complete illustrated guide. Audio, mnemonics, stroke order, and a printable worksheet.",
    date: "2026-04-21",
    readingTime: "28 min read",
    wordCount: 6100,
    authorSlug: "bao-hua",
    tags: ["Hiragana", "Kana", "Beginners"],
    category: "guide",
    answerBox:
      "Hiragana is the cursive Japanese script used for native words, grammar, and particles. Learn all 46 in roughly three focused sessions using mnemonic images, audio, and short recall drills.",
    keywords: ["learn hiragana", "hiragana chart", "hiragana mnemonics", "hiragana guide"],
  },
  {
    slug: "/guides/learn-katakana",
    title: "Learn Katakana: A Practical Guide for Adults",
    description:
      "The complete katakana guide. 46 characters, side-by-side with hiragana, pronunciation audio, and the loanword patterns that make katakana click.",
    date: "2026-04-21",
    readingTime: "22 min read",
    wordCount: 4800,
    authorSlug: "bao-hua",
    tags: ["Katakana", "Kana", "Beginners"],
    category: "guide",
    answerBox:
      "Katakana is the angular Japanese script used for foreign loanwords and emphasis. Most adult learners pick up the 46 characters in 3 to 5 days once hiragana is under their belt.",
    keywords: ["learn katakana", "katakana chart", "katakana guide"],
  },
  {
    slug: "/guides/jlpt-n5-vocabulary",
    title: "JLPT N5 Vocabulary: The Definitive List",
    description:
      "The 600 most useful N5 words, organized by category, with audio and downloadable flashcards. The exact list Inku's N5 deck is built on.",
    date: "2026-04-21",
    readingTime: "35 min read",
    wordCount: 5900,
    authorSlug: "bao-hua",
    tags: ["JLPT", "N5", "Vocabulary"],
    category: "guide",
    answerBox:
      "JLPT N5 covers roughly 800 words total. The 600 listed here are the highest-frequency core of that list, grouped so you can learn them in useful chunks.",
    keywords: ["JLPT N5 vocabulary", "N5 word list", "JLPT N5 words"],
  },
  {
    slug: "/guides/how-to-learn-japanese",
    title: "How to Learn Japanese: An Honest Roadmap",
    description:
      "If I had to learn Japanese from scratch again, this is exactly what I would do. Six phases, real time estimates, specific tools.",
    date: "2026-04-21",
    readingTime: "32 min read",
    wordCount: 6400,
    authorSlug: "bao-hua",
    tags: ["Learning", "Strategy", "Roadmap"],
    category: "guide",
    answerBox:
      "Plan on 3 to 6 months to cover hiragana, katakana, and N5 vocabulary with 15 minutes a day. Reaching conversational (N4) fluency takes most adult learners 12 to 18 months of consistent work.",
    keywords: ["how to learn japanese", "japanese roadmap", "learn japanese adults"],
  },
  {
    slug: "/guides/spaced-repetition-explained",
    title: "Spaced Repetition, Explained Without the Hype",
    description:
      "The memory science behind Anki, WaniKani, and Inku. Why spaced repetition works, where it breaks, and how to use it without wasting your time.",
    date: "2026-04-21",
    readingTime: "18 min read",
    wordCount: 4200,
    authorSlug: "bao-hua",
    tags: ["Memory", "SRS", "Learning"],
    category: "guide",
    answerBox:
      "Spaced repetition schedules reviews at expanding intervals so you see each item right before you forget it. Done well it can cut the time to retain vocabulary by 3 to 5x compared with cramming.",
    keywords: ["spaced repetition", "SRS explained", "how spaced repetition works"],
  },
  {
    slug: "/guides/japanese-particles-masterclass",
    title: "Japanese Particles: The Masterclass",
    description:
      "A complete, example-dense guide to every core Japanese particle: は, が, を, に, で, へ, と, から, まで, の, も, や.",
    date: "2026-04-21",
    readingTime: "26 min read",
    wordCount: 5300,
    authorSlug: "bao-hua",
    tags: ["Grammar", "Particles"],
    category: "guide",
    answerBox:
      "Japanese particles are single-syllable markers that tell you how each word in a sentence relates to the others. The 12 core particles cover roughly 95 percent of real-world usage.",
    keywords: ["japanese particles", "particles guide", "japanese grammar particles"],
  },

  // --- Blog posts ---
  {
    slug: "/blog/10-minutes-a-day-japanese",
    title: "Can You Actually Learn Japanese in 10 Minutes a Day?",
    description:
      "A brutally honest answer to the question every language app dodges. With real numbers from six months of self-logging.",
    date: "2026-04-21",
    readingTime: "9 min read",
    wordCount: 1900,
    authorSlug: "bao-hua",
    tags: ["Strategy", "Learning"],
    category: "blog",
    answerBox:
      "Yes, if you are consistent and honest about what 10 minutes can cover. Ten minutes a day over a year gets most adults through hiragana, katakana, and JLPT N5 vocabulary. It will not make you fluent.",
  },
  {
    slug: "/blog/duolingo-100-days",
    title: "Duolingo for 100 Days: What I Learned, What I Wish I'd Done Differently",
    description:
      "A journal, a scoreboard, and a reckoning. Ninety-eight green owls later, what actually stuck.",
    date: "2026-04-21",
    readingTime: "11 min read",
    wordCount: 2300,
    authorSlug: "bao-hua",
    tags: ["Duolingo", "Review", "Strategy"],
    category: "blog",
  },
  {
    slug: "/blog/spaced-repetition-mistake",
    title: "The Spaced Repetition Mistake That Wastes 90% of Learners' Time",
    description:
      "Most people set up SRS wrong on day one. Here is the fix that took my retention from 60 percent to 94 percent.",
    date: "2026-04-21",
    readingTime: "8 min read",
    wordCount: 1700,
    authorSlug: "bao-hua",
    tags: ["SRS", "Memory"],
    category: "blog",
  },
  {
    slug: "/blog/wasei-eigo",
    title: "Wasei-eigo: 50 English Words the Japanese Changed Beyond Recognition",
    description:
      "Why マンション (manshon) means apartment, not mansion. A tour through the English words Japan quietly rewrote.",
    date: "2026-04-21",
    readingTime: "12 min read",
    wordCount: 2500,
    authorSlug: "bao-hua",
    tags: ["Culture", "Vocabulary"],
    category: "blog",
  },
  {
    slug: "/blog/moshi-moshi",
    title: "Moshi Moshi: Why Japanese Phones Aren't Answered Like Yours",
    description:
      "The real story behind もしもし, where it came from, and the ghost-related reason it sticks around.",
    date: "2026-04-21",
    readingTime: "7 min read",
    wordCount: 1600,
    authorSlug: "bao-hua",
    tags: ["Culture", "Phrases"],
    category: "blog",
  },
  {
    slug: "/blog/why-i-stopped-using-anki",
    title: "Why I Stopped Using Anki (and What I Built Instead)",
    description:
      "Anki works. It is also a blank sheet of graph paper. After three years, here is why I stopped opening it.",
    date: "2026-04-21",
    readingTime: "10 min read",
    wordCount: 2100,
    authorSlug: "bao-hua",
    tags: ["Anki", "Founder story"],
    category: "blog",
  },
  {
    slug: "/blog/how-long-to-learn-japanese",
    title: "How Long Does It Take to Learn Japanese? A Brutally Honest Timeline",
    description:
      "Working adults, be warned. Here is a realistic month-by-month plan from zero to conversational Japanese.",
    date: "2026-04-21",
    readingTime: "13 min read",
    wordCount: 2700,
    authorSlug: "bao-hua",
    tags: ["Timeline", "Strategy"],
    category: "blog",
  },
  {
    slug: "/blog/hiragana-in-3-days",
    title: "The Best Way to Learn Hiragana in 3 Days",
    description:
      "A schedule, a method, and a set of guardrails against the mistakes that cost most people a week.",
    date: "2026-04-21",
    readingTime: "9 min read",
    wordCount: 1900,
    authorSlug: "bao-hua",
    tags: ["Hiragana", "Strategy"],
    category: "blog",
  },
  {
    slug: "/blog/japanese-pitch-accent",
    title: "Japanese Pitch Accent: Why Most Apps Skip It and Whether You Should Care",
    description:
      "Pitch accent is Japanese's invisible grammar. Here is when to study it, when to ignore it, and how to hear it for the first time.",
    date: "2026-04-21",
    readingTime: "10 min read",
    wordCount: 2100,
    authorSlug: "bao-hua",
    tags: ["Pronunciation", "Advanced"],
    category: "blog",
  },
  {
    slug: "/blog/kanji-learning-strategies",
    title: "Kanji Learning Strategies That Actually Stick",
    description:
      "Radicals, stories, writing practice, and the one strategy nobody recommends but everybody needs.",
    date: "2026-04-21",
    readingTime: "11 min read",
    wordCount: 2400,
    authorSlug: "bao-hua",
    tags: ["Kanji", "Strategy"],
    category: "blog",
  },

  // --- Comparison pages ---
  {
    slug: "/vs/duolingo",
    title: "Inku vs Duolingo for Japanese",
    description:
      "An honest side-by-side. Which one is right for your first week, and which one you will outgrow.",
    date: "2026-04-21",
    readingTime: "14 min read",
    wordCount: 3000,
    authorSlug: "bao-hua",
    tags: ["Duolingo"],
    category: "vs",
  },
  {
    slug: "/vs/anki",
    title: "Inku vs Anki for Japanese",
    description:
      "Anki is infinitely flexible. Inku is opinionated. Here is how to choose, and when to use both.",
    date: "2026-04-21",
    readingTime: "15 min read",
    wordCount: 3200,
    authorSlug: "bao-hua",
    tags: ["Anki"],
    category: "vs",
  },
  {
    slug: "/vs/wanikani",
    title: "Inku vs WaniKani",
    description:
      "WaniKani is the gold standard for kanji. Inku starts earlier. Here is who should use which.",
    date: "2026-04-21",
    readingTime: "13 min read",
    wordCount: 2700,
    authorSlug: "bao-hua",
    tags: ["WaniKani"],
    category: "vs",
  },
  {
    slug: "/vs/bunpo",
    title: "Inku vs Bunpo",
    description:
      "Bunpo owns grammar drilling. Inku owns kana plus vocabulary. Which you should start with.",
    date: "2026-04-21",
    readingTime: "11 min read",
    wordCount: 2300,
    authorSlug: "bao-hua",
    tags: ["Bunpo"],
    category: "vs",
  },
  {
    slug: "/vs/lingodeer",
    title: "Inku vs LingoDeer",
    description:
      "LingoDeer is a full curriculum. Inku is a focused flashcard deck. Here is what that means for you.",
    date: "2026-04-21",
    readingTime: "12 min read",
    wordCount: 2400,
    authorSlug: "bao-hua",
    tags: ["LingoDeer"],
    category: "vs",
  },
  {
    slug: "/vs/renshuu",
    title: "Inku vs Renshuu",
    description:
      "Renshuu is a wonderful web-first tool. Inku is native iPhone. Who each is for.",
    date: "2026-04-21",
    readingTime: "12 min read",
    wordCount: 2500,
    authorSlug: "bao-hua",
    tags: ["Renshuu"],
    category: "vs",
  },
  {
    slug: "/vs/busuu",
    title: "Inku vs Busuu",
    description:
      "Busuu teaches through full lessons and human review. Inku teaches through flashcards and voice. A clear-eyed comparison.",
    date: "2026-04-21",
    readingTime: "11 min read",
    wordCount: 2300,
    authorSlug: "bao-hua",
    tags: ["Busuu"],
    category: "vs",
  },
  {
    slug: "/vs/lingopie",
    title: "Inku vs Lingopie",
    description:
      "Lingopie teaches through TV shows and native media. Inku teaches through spaced cards. How they stack up for Japanese.",
    date: "2026-04-21",
    readingTime: "10 min read",
    wordCount: 2100,
    authorSlug: "bao-hua",
    tags: ["Lingopie"],
    category: "vs",
  },
  {
    slug: "/vs/noji",
    title: "Inku vs Noji",
    description:
      "Noji is a powerful web flashcard tool with a tool library. Inku is iPhone-first with native audio.",
    date: "2026-04-21",
    readingTime: "10 min read",
    wordCount: 2200,
    authorSlug: "bao-hua",
    tags: ["Noji"],
    category: "vs",
  },

  // --- Alternative pages ---
  {
    slug: "/alternatives/duolingo",
    title: "The Best Duolingo Alternative for Japanese",
    description:
      "If Duolingo's gamification burned you out, here is the calm, grown-up alternative for learning Japanese.",
    date: "2026-04-21",
    readingTime: "12 min read",
    wordCount: 2400,
    authorSlug: "bao-hua",
    tags: ["Alternatives"],
    category: "alternative",
  },
  {
    slug: "/alternatives/anki",
    title: "The Best Anki Alternative for Japanese (if You Want Less Setup)",
    description:
      "Anki is infinitely flexible and infinitely bare. Here is the Japanese-specific alternative that has the cards built for you.",
    date: "2026-04-21",
    readingTime: "11 min read",
    wordCount: 2300,
    authorSlug: "bao-hua",
    tags: ["Alternatives"],
    category: "alternative",
  },
  {
    slug: "/alternatives/rosetta-stone",
    title: "A Rosetta Stone Alternative for Japanese (at 1/10th the Price)",
    description:
      "Rosetta Stone's immersion method is decades old and $200. Here is the modern alternative that fits in your pocket.",
    date: "2026-04-21",
    readingTime: "10 min read",
    wordCount: 2100,
    authorSlug: "bao-hua",
    tags: ["Alternatives"],
    category: "alternative",
  },
  {
    slug: "/alternatives/babbel",
    title: "A Babbel Alternative for Japanese Learners",
    description:
      "Babbel's Japanese catalogue is limited. Here is a Japanese-first alternative built by someone who learned Japanese as an adult.",
    date: "2026-04-21",
    readingTime: "10 min read",
    wordCount: 2100,
    authorSlug: "bao-hua",
    tags: ["Alternatives"],
    category: "alternative",
  },
  {
    slug: "/alternatives/pimsleur",
    title: "A Pimsleur Alternative for Japanese (for Visual Learners)",
    description:
      "Pimsleur is audio-only. Inku is audio plus visual plus writing. A side-by-side for the kind of learner who needs to see the kana.",
    date: "2026-04-21",
    readingTime: "9 min read",
    wordCount: 2000,
    authorSlug: "bao-hua",
    tags: ["Alternatives"],
    category: "alternative",
  },
];

export const BLOG_POSTS = ALL_POSTS.filter((p) => p.category === "blog");
export const GUIDE_POSTS = ALL_POSTS.filter((p) => p.category === "guide");
export const VS_POSTS = ALL_POSTS.filter((p) => p.category === "vs");
export const ALTERNATIVE_POSTS = ALL_POSTS.filter(
  (p) => p.category === "alternative",
);
