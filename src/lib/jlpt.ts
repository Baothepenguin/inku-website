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
      "Month 1-2: Build vocabulary through the 200 core N5 words. Aim for 10 new words a day.",
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
    status: "coming-soon",
  },
};
