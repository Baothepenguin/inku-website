export interface JlptLevel {
  level: "n5" | "n4" | "n3" | "n2" | "n1";
  title: string;
  tagline: string;
  description: string;
  wordCount: number;
  kanjiCount: number;
  hoursEstimate: string;
  whatYouCanDo: string[];
  grammarExamples: { pattern: string; meaning: string; example: string }[];
  vocabularyExamples: { jp: string; kana: string; en: string }[];
  studyPlan: string[];
  relatedPaths: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
  status: "complete" | "partial" | "coming-soon";
}

export const JLPT_LEVELS: Record<string, JlptLevel> = {
  n5: {
    level: "n5",
    title: "JLPT N5",
    tagline:
      "The first JLPT level. Basic Japanese, around 800 words and 100 kanji. The floor of 'can hold a simple conversation.'",
    description:
      "N5 is the entry-level JLPT. It certifies that you can read and listen to basic Japanese in classroom-paced conversations and on simple written material. For most adult learners, reaching N5 takes 3 to 6 months of consistent study.",
    wordCount: 800,
    kanjiCount: 100,
    hoursEstimate: "150-300 hours of study",
    whatYouCanDo: [
      "Read hiragana, katakana, and about 100 basic kanji",
      "Introduce yourself, your family, your job, your hometown",
      "Order food at a restaurant and ask for directions",
      "Read simple signs, menus, and app interfaces",
      "Hold a short, slow-paced conversation about daily life",
    ],
    grammarExamples: [
      {
        pattern: "N は N です",
        meaning: "Basic 'A is B' sentence structure",
        example: "私は学生です。 (I am a student.)",
      },
      {
        pattern: "V-ます / V-ません",
        meaning: "Polite present tense (affirmative and negative)",
        example: "日本語を勉強します。 (I study Japanese.)",
      },
      {
        pattern: "N が あります / います",
        meaning: "Existence ('there is X')",
        example: "机の上に本があります。 (There is a book on the desk.)",
      },
    ],
    vocabularyExamples: [
      { jp: "水", kana: "みず", en: "water" },
      { jp: "学校", kana: "がっこう", en: "school" },
      { jp: "食べる", kana: "たべる", en: "to eat" },
      { jp: "大きい", kana: "おおきい", en: "big" },
      { jp: "今日", kana: "きょう", en: "today" },
    ],
    studyPlan: [
      "Week 1-2: Hiragana and katakana to full recognition.",
      "Month 1-2: Build vocabulary through the 515 N5 cards. Aim for 10 new words a day.",
      "Month 2-3: Expand to the full N5 list (~800 words). Add basic grammar patterns.",
      "Month 3-4: Start reading simple Japanese (NHK Web Easy, graded readers).",
      "Month 4-5: Take the JLPT N5 practice test. Identify weak areas and drill.",
      "Month 5-6: Sit the real N5 in July or December, or skip the certification and move to N4 prep.",
    ],
    relatedPaths: [
      { href: "/guides/learn-hiragana", label: "Learn hiragana" },
      { href: "/guides/learn-katakana", label: "Learn katakana" },
      { href: "/guides/jlpt-n5-vocabulary", label: "JLPT N5 vocabulary list" },
      { href: "/guides/japanese-particles-masterclass", label: "Particles" },
    ],
    faqs: [
      {
        q: "How long does it take to pass JLPT N5?",
        a: "Most adult learners reach N5 in 3 to 6 months of consistent study at 30 minutes a day. Total study time runs 150 to 300 hours, including hiragana, katakana, ~800 vocabulary words, and ~30 grammar patterns.",
      },
      {
        q: "Is JLPT N5 worth taking?",
        a: "If your career, visa, or school requires it, yes. For most learners, N5 is a useful milestone, not a goal. Many people skip the certification and use the N5 syllabus as a checklist instead.",
      },
      {
        q: "How many kanji are on the JLPT N5?",
        a: "Approximately 100 kanji. The official list is not published by the JLPT, but reference vocabulary lists consistently include around 100 jōyō kanji at this level.",
      },
      {
        q: "Can I pass JLPT N5 with only flashcard apps?",
        a: "You can pass the vocabulary and kanji sections, but the listening and reading sections require exposure beyond flashcards. Pair an SRS app like Inku with NHK Easy and a beginner podcast for a balanced prep.",
      },
    ],
    status: "complete",
  },
  n4: {
    level: "n4",
    title: "JLPT N4",
    tagline:
      "The second JLPT level. About 1,500 words and 300 kanji. Where Japanese starts feeling like a real second language.",
    description:
      "N4 covers slightly more complex grammar and expands vocabulary to about 1,500 words and 300 kanji. At N4, you can hold a slow but real conversation about daily topics and read simple paragraphs.",
    wordCount: 1500,
    kanjiCount: 300,
    hoursEstimate: "300-600 hours of cumulative study",
    whatYouCanDo: [
      "Follow slow conversations about everyday topics",
      "Read short articles with kanji and furigana aid",
      "Express past, present, and future tense naturally",
      "Talk about plans, preferences, and experiences",
      "Recognize polite vs casual forms in context",
    ],
    grammarExamples: [
      {
        pattern: "V-て form chains",
        meaning: "Connecting verbs ('and then...')",
        example: "朝起きて、コーヒーを飲んで、仕事に行きます。 (I wake up, drink coffee, then go to work.)",
      },
      {
        pattern: "V-たい / V-たくない",
        meaning: "Expressing desire",
        example: "日本に行きたいです。 (I want to go to Japan.)",
      },
      {
        pattern: "~ことができる",
        meaning: "Can do / ability",
        example: "日本語を話すことができます。 (I can speak Japanese.)",
      },
    ],
    vocabularyExamples: [
      { jp: "旅行", kana: "りょこう", en: "travel, trip" },
      { jp: "将来", kana: "しょうらい", en: "future" },
      { jp: "説明する", kana: "せつめいする", en: "to explain" },
      { jp: "親切", kana: "しんせつ", en: "kind (na-adj)" },
      { jp: "最近", kana: "さいきん", en: "recently" },
    ],
    studyPlan: [
      "Month 1-3: Finish N5 if not already done.",
      "Month 4-6: Add N4 vocabulary (700 new words).",
      "Month 5-7: Learn 200 new kanji while reading.",
      "Month 6-9: Work through a full N4 grammar text like Genki 2.",
      "Month 9-12: Daily reading (NHK Web Easy, simple manga). Start speaking weekly.",
    ],
    relatedPaths: [
      { href: "/guides/how-to-learn-japanese", label: "Full learning roadmap" },
      { href: "/guides/japanese-particles-masterclass", label: "Particles deep-dive" },
      { href: "/jlpt/n5", label: "N5 prerequisites" },
    ],
    faqs: [
      {
        q: "How long does N4 take after N5?",
        a: "Plan another 6 to 12 months at 30 to 45 minutes a day. Total cumulative time from zero to N4 is around 300 to 600 hours.",
      },
      {
        q: "How many kanji are on JLPT N4?",
        a: "About 300 kanji total, including the ~100 from N5. The N4 syllabus also expects fluent reading of common compound words written in those kanji.",
      },
      {
        q: "Should I skip N5 and go straight for N4?",
        a: "Only if you've already mastered N5 material. The JLPT does not require you to pass N5 first, but the levels build on each other; weak N5 grammar is the most common reason candidates fail N4.",
      },
      {
        q: "Is N4 enough to live in Japan?",
        a: "For survival, mostly yes. For real conversation and reading, no. Most people aim for N3 as the 'comfortable in Japan' threshold.",
      },
    ],
    status: "partial",
  },
  n3: {
    level: "n3",
    title: "JLPT N3",
    tagline:
      "The middle JLPT level. About 3,750 words and 650 kanji. The bridge between 'student' and 'can actually live in Japan.'",
    description:
      "N3 is the most commonly cited 'real Japanese' milestone. You can read a newspaper article with some effort, follow TV shows aimed at natives, and handle everyday interactions in Japan. Most learners reach N3 after 18-24 months of consistent study.",
    wordCount: 3750,
    kanjiCount: 650,
    hoursEstimate: "600-1,200 hours",
    whatYouCanDo: [
      "Read everyday topics at near-normal speed",
      "Understand TV and podcasts aimed at Japanese natives (with effort)",
      "Write emails and informal letters in Japanese",
      "Hold longer conversations on abstract topics",
      "Navigate daily life in Japan without an interpreter",
    ],
    grammarExamples: [
      {
        pattern: "~てしまう / ~ちゃう",
        meaning: "Regret or completion",
        example: "全部食べてしまいました。 (I ended up eating it all.)",
      },
      {
        pattern: "~ように",
        meaning: "In order to, so that",
        example: "聞こえるように大きい声で話してください。 (Please speak loudly so I can hear.)",
      },
    ],
    vocabularyExamples: [
      { jp: "経験", kana: "けいけん", en: "experience" },
      { jp: "状況", kana: "じょうきょう", en: "situation" },
      { jp: "関係", kana: "かんけい", en: "relationship" },
    ],
    studyPlan: [
      "Reach solid N4 level first.",
      "Months 1-3: Add 1,000+ N3 vocabulary words.",
      "Months 3-6: Add 200+ new kanji through reading, not rote.",
      "Months 6-12: Immersive reading and listening with gradually less support.",
    ],
    relatedPaths: [
      { href: "/jlpt/n4", label: "N4 prerequisites" },
      { href: "/guides/how-to-learn-japanese", label: "Full learning roadmap" },
    ],
    faqs: [
      {
        q: "How long does it take to reach JLPT N3?",
        a: "Total cumulative study time runs 600 to 1,200 hours from zero. Most adult learners reach N3 in 18 to 24 months of consistent study, including the time spent on N5 and N4.",
      },
      {
        q: "Is N3 enough to read Japanese novels?",
        a: "Light novels and YA fiction become accessible at N3 with effort. Adult novels and news still need a dictionary. N2 is the threshold where dictionary use becomes occasional rather than constant.",
      },
      {
        q: "Why is there no Inku N3 deck yet?",
        a: "We're focused on shipping a deep N5 deck and expanding N4 first. N3 is on the roadmap but not yet available. Use the official N3 vocabulary list and a generic SRS app in the meantime.",
      },
    ],
    status: "coming-soon",
  },
  n2: {
    level: "n2",
    title: "JLPT N2",
    tagline:
      "The near-professional JLPT level. About 6,000 words and 1,000 kanji. 'Can work in a Japanese company.'",
    description:
      "N2 certifies that you can read a wide range of Japanese text fluently, understand conversational Japanese without aid, and work in many Japanese-language professional contexts. Most learners reach N2 in 3-4 years of consistent study.",
    wordCount: 6000,
    kanjiCount: 1000,
    hoursEstimate: "1,500-2,500 hours",
    whatYouCanDo: [
      "Read novels and news articles with minimal dictionary use",
      "Work in a Japanese office environment",
      "Follow nuanced conversations on abstract topics",
      "Write business-level Japanese",
    ],
    grammarExamples: [
      {
        pattern: "~に違いない",
        meaning: "Must be (strong certainty)",
        example: "彼は日本人に違いない。 (He must be Japanese.)",
      },
    ],
    vocabularyExamples: [
      { jp: "政策", kana: "せいさく", en: "policy" },
      { jp: "柔軟", kana: "じゅうなん", en: "flexible" },
    ],
    studyPlan: [
      "Build fluent comprehension of native media.",
      "Memorize 2,000+ new words.",
      "Master 350+ new kanji.",
      "Daily immersive input (news, novels, podcasts).",
    ],
    relatedPaths: [{ href: "/jlpt/n3", label: "N3 prerequisites" }],
    faqs: [
      {
        q: "How long does it take to reach JLPT N2?",
        a: "Most adult learners reach N2 after 3 to 4 years of consistent study, with cumulative study time around 1,500 to 2,500 hours including N5 through N4.",
      },
      {
        q: "Is N2 required to work in Japan?",
        a: "Many Japanese companies require N2 for non-engineering roles. Engineering and tech roles often accept N3 or even no JLPT, but N2 opens significantly more opportunities.",
      },
      {
        q: "How does N2 differ from N3?",
        a: "N2 doubles the vocabulary (6,000 vs 3,750), adds ~350 kanji, and introduces formal/business Japanese. The reading section uses native-speed news and academic excerpts, not graded material.",
      },
    ],
    status: "coming-soon",
  },
  n1: {
    level: "n1",
    title: "JLPT N1",
    tagline:
      "The highest JLPT level. Near-native reading and listening. Deep kanji familiarity and nuanced comprehension.",
    description:
      "N1 is the highest level of the JLPT. It tests your ability to read and understand Japanese across a wide range of contexts, including specialized vocabulary, cultural allusions, and complex grammar. Most learners reach N1 after 4-7 years of serious study.",
    wordCount: 10000,
    kanjiCount: 2000,
    hoursEstimate: "3,000-5,000+ hours",
    whatYouCanDo: [
      "Read novels, news, and academic papers with near-native fluency",
      "Understand idiomatic and nuanced expressions",
      "Recognize regional and historical vocabulary",
      "Work in any Japanese-language professional context",
    ],
    grammarExamples: [
      {
        pattern: "~を余儀なくされる",
        meaning: "Be forced to do",
        example: "会社は閉鎖を余儀なくされた。 (The company was forced to close.)",
      },
    ],
    vocabularyExamples: [
      { jp: "矛盾", kana: "むじゅん", en: "contradiction" },
      { jp: "概念", kana: "がいねん", en: "concept" },
    ],
    studyPlan: [
      "Extensive native reading (novels, academic writing).",
      "Advanced grammar drills through N1 prep books.",
      "Regular exposure to formal and literary Japanese.",
    ],
    relatedPaths: [{ href: "/jlpt/n2", label: "N2 prerequisites" }],
    faqs: [
      {
        q: "How long does it take to reach JLPT N1?",
        a: "Most adult learners reach N1 after 4 to 7 years of serious study, with cumulative study time of 3,000 to 5,000+ hours. Native exposure (living in Japan, working in Japanese) accelerates this significantly.",
      },
      {
        q: "Is N1 considered native-level Japanese?",
        a: "Near-native for reading and listening, but not for production. Most N1 holders still write less naturally than natives and can be tripped up by rapid casual speech, slang, and dialects. N1 is professional-grade comprehension.",
      },
      {
        q: "What's tested on the N1 grammar section?",
        a: "Advanced grammar patterns including formal written Japanese, idiomatic expressions, classical-derived constructions (~ざるを得ない, ~を余儀なくされる), and nuanced shades of certainty, regret, and hearsay.",
      },
    ],
    status: "coming-soon",
  },
};
