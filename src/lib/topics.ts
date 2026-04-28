export interface TopicHub {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  content: { heading: string; paragraphs: string[] }[];
  quickFacts: { label: string; value: string }[];
  relatedLinks: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const TOPICS: Record<string, TopicHub> = {
  hiragana: {
    slug: "hiragana",
    title: "Hiragana: The Japanese Cursive Script",
    tagline:
      "The 46-character cursive script used for native Japanese words, particles, and verb endings.",
    summary:
      "Hiragana (ひらがな) is the cursive phonetic script used to write native Japanese. It has 46 base characters plus voiced and combined variants, and it's the first script every learner should master.",
    content: [
      {
        heading: "What hiragana is",
        paragraphs: [
          "Hiragana is one of three Japanese scripts (alongside katakana and kanji). It represents sounds, not meanings. Every Japanese syllable can be written in hiragana, which makes it the foundation for reading the language.",
          "Most hiragana characters are curvy and compact, descended from cursive forms of simplified kanji. The script was developed roughly 1,000 years ago and was historically associated with women's writing (men wrote in kanji and Chinese-style prose). Today it is universal.",
        ],
      },
      {
        heading: "Where you see it",
        paragraphs: [
          "Verb endings and conjugations are entirely in hiragana. Particles (the tiny grammatical markers like は, が, を) are always in hiragana. And many native Japanese words, especially common everyday vocabulary, are written in hiragana even when a kanji exists, because it looks softer.",
          "Children's books, early-reader manga, and the small 'ruby' characters above kanji (furigana) are also in hiragana.",
        ],
      },
      {
        heading: "How long it takes to learn",
        paragraphs: [
          "Most adult learners can recognize all 46 hiragana in two to four focused sessions of 30 minutes each. Writing them from memory takes about a week. Fluent reading comes with exposure over the following month.",
          "See our complete three-day guide for the full schedule and mnemonic system.",
        ],
      },
    ],
    quickFacts: [
      { label: "Character count", value: "46 base + ~25 variants" },
      { label: "First seen in", value: "~900 CE" },
      { label: "Strokes per character", value: "1 to 4" },
      { label: "Used for", value: "Native words, particles, conjugations" },
    ],
    relatedLinks: [
      { href: "/guides/learn-hiragana", label: "Complete hiragana guide" },
      { href: "/tools/hiragana-chart", label: "Interactive hiragana chart" },
      { href: "/tools/kana-quiz", label: "Kana quiz" },
      { href: "/blog/hiragana-in-3-days", label: "Hiragana in 3 days" },
    ],
    faqs: [
      {
        q: "Should I learn hiragana or katakana first?",
        a: "Hiragana. It appears in roughly 40 percent of Japanese text and handles every grammar function. Katakana is easier once hiragana is locked in.",
      },
      {
        q: "Do I need to learn to write hiragana by hand?",
        a: "At least once per character. Writing by hand is the fastest way to lock the shapes into memory. After that, recognition is what matters day-to-day.",
      },
      {
        q: "What's the most commonly confused hiragana pair?",
        a: "し (shi) and つ (tsu), followed by ね/れ/わ as a triplet. Drill them side by side from the beginning.",
      },
    ],
  },
  katakana: {
    slug: "katakana",
    title: "Katakana: The Japanese Angular Script",
    tagline:
      "The 46-character angular script used for foreign loanwords, brand names, and emphasis.",
    summary:
      "Katakana (カタカナ) is the angular phonetic script used mostly for foreign loanwords, company and product names, and onomatopoeia. It maps one-to-one with hiragana in sound.",
    content: [
      {
        heading: "What katakana is",
        paragraphs: [
          "Katakana is the blockier cousin of hiragana. Same 46 syllables, entirely different shapes. Where hiragana flows, katakana stacks. Historically it was used by Buddhist monks as pronunciation shorthand in the margins of Chinese texts.",
          "Today its main job is to write the thousands of foreign words Japanese has absorbed (コーヒー kōhī, coffee) and brand or company names.",
        ],
      },
      {
        heading: "Where you see it",
        paragraphs: [
          "Foreign words are almost always katakana. Product and brand names are katakana. Japanese scientific and technical terms borrowed from English are katakana. Personal names of foreigners are katakana. And occasionally, for emphasis (the Japanese equivalent of italics), a native word might be written in katakana.",
          "You see a lot of katakana at airports, in tech catalogs, and on fashion or food packaging.",
        ],
      },
      {
        heading: "Loanword patterns",
        paragraphs: [
          "Katakana words are often warped English. 'Coffee' becomes コーヒー. 'Computer' becomes コンピューター. 'Bus' becomes バス. Learn a few transformation rules (L becomes R, vowels get attached to final consonants) and a huge amount of katakana becomes decodable.",
        ],
      },
    ],
    quickFacts: [
      { label: "Character count", value: "46 base + variants" },
      { label: "Used for", value: "Loanwords, names, emphasis" },
      { label: "Hardest pair", value: "シ (shi) vs ツ (tsu)" },
    ],
    relatedLinks: [
      { href: "/guides/learn-katakana", label: "Complete katakana guide" },
      { href: "/tools/katakana-chart", label: "Interactive katakana chart" },
      { href: "/blog/wasei-eigo", label: "Wasei-eigo: English words Japan rewrote" },
    ],
    faqs: [
      {
        q: "Why is katakana so angular?",
        a: "Historical origin. Katakana was derived from parts of kanji characters used as pronunciation notes. The shapes kept the angular feel of printed kanji.",
      },
      {
        q: "Can I skip katakana if I only want to speak?",
        a: "You cannot. Katakana shows up in menus, train station signs, and every foreign name you'll encounter. You need it.",
      },
    ],
  },
  kanji: {
    slug: "kanji",
    title: "Kanji: The Japanese Imported Characters",
    tagline:
      "The thousands of Chinese-derived characters that carry meaning in Japanese. The long tail of Japanese learning.",
    summary:
      "Kanji (漢字) are the logographic characters borrowed from Chinese. They carry meaning and (usually) multiple readings. Daily-use Japanese needs about 2,000 kanji to read without constant dictionary checks.",
    content: [
      {
        heading: "What kanji is",
        paragraphs: [
          "Kanji is the imported Chinese writing system that Japan adopted roughly 1,500 years ago. Each kanji is a character that represents a meaning (sometimes several) and one or more sounds. The Japanese government maintains a list of 2,136 'common-use' kanji (jōyō kanji) that are taught in schools.",
          "Unlike hiragana and katakana, kanji is not phonetic. You cannot sound out a kanji you have never seen. You have to learn each one, or at least its most common reading in context.",
        ],
      },
      {
        heading: "How many you actually need",
        paragraphs: [
          "JLPT N5 expects about 100 kanji. N4 expects around 300. N3 expects 650, N2 around 1,000, and N1 roughly 2,000. Reaching 1,000 kanji is where Japanese text starts feeling readable without a dictionary.",
          "You don't have to hit 2,000 to enjoy reading. With the top 500 kanji you can read most everyday signs, menus, and simple articles.",
        ],
      },
      {
        heading: "Readings (on-yomi and kun-yomi)",
        paragraphs: [
          "Most kanji have multiple readings. The on-yomi is the Chinese-derived reading, used mostly in compound words (学生 gaku-sei, student). The kun-yomi is the native Japanese reading, used when the kanji stands alone or with hiragana endings (学ぶ mana-bu, to learn).",
          "Beginners get stuck here because it feels arbitrary. The trick is not to memorize both readings for every kanji. Memorize the word, and the readings fall out.",
        ],
      },
    ],
    quickFacts: [
      { label: "Common-use kanji", value: "2,136" },
      { label: "Readings per kanji", value: "2 to 6 (on + kun)" },
      { label: "N5 kanji target", value: "~100" },
      { label: "Daily-use threshold", value: "~1,000" },
    ],
    relatedLinks: [
      { href: "/guides/how-to-learn-japanese", label: "Full learning roadmap" },
      { href: "/blog/kanji-learning-strategies", label: "Kanji learning strategies" },
      { href: "/vs/wanikani", label: "Inku vs WaniKani for kanji" },
    ],
    faqs: [
      {
        q: "When should I start learning kanji?",
        a: "After hiragana and katakana, and after you have 100-200 words of vocabulary. Not on day one. Kanji needs word-context to stick.",
      },
      {
        q: "Can I just use furigana forever?",
        a: "You can for a year or two. Past that, pure furigana-assisted reading is a crutch that blocks you from reading native adult material.",
      },
    ],
  },
  particles: {
    slug: "particles",
    title: "Japanese Particles",
    tagline:
      "The one- and two-syllable markers that do in Japanese what word order does in English.",
    summary:
      "Japanese particles are small grammatical words that attach to the end of nouns, verbs, or clauses and mark their role in the sentence. Mastering the core twelve is the single biggest unlock for reading Japanese.",
    content: [
      {
        heading: "What particles do",
        paragraphs: [
          "English uses word order to mark who does what to whom (subject verb object). Japanese uses particles. Every noun in a sentence has a particle attached that names its role: topic, subject, object, location, destination, and so on.",
          "Because of this, Japanese word order is more flexible than English. You can rearrange phrases for emphasis without changing the core meaning, as long as each phrase keeps its particle.",
        ],
      },
      {
        heading: "The core twelve",
        paragraphs: [
          "The particles that cover roughly 95 percent of everyday Japanese usage are: は (topic), が (subject), を (object), に (destination, time, existence), で (activity location, means), へ (direction), と (and, with), から (from), まで (until), の (possession), も (also), や (non-exhaustive 'and').",
          "You do not learn them by memorizing definitions. You learn them by reading enough example sentences that the pattern clicks.",
        ],
      },
    ],
    quickFacts: [
      { label: "Core particles", value: "12" },
      { label: "Most confusing pair", value: "は vs が (topic vs subject)" },
      { label: "Particles in one sentence", value: "1-4 typically" },
    ],
    relatedLinks: [
      { href: "/guides/japanese-particles-masterclass", label: "Particles masterclass" },
      { href: "/japanese/grammar", label: "Grammar overview" },
    ],
    faqs: [
      {
        q: "Can I drop particles in casual Japanese?",
        a: "Natives sometimes do in spoken conversation. Beginners should not. Learn the full forms first.",
      },
      {
        q: "What's the most common particle mistake?",
        a: "Mixing up は and が. Short rule: は marks the topic (already known), が marks the subject (new or emphasized).",
      },
    ],
  },
  grammar: {
    slug: "grammar",
    title: "Japanese Grammar: What You Actually Need",
    tagline:
      "The grammar patterns that cover most real-world Japanese. Shorter than the textbook makes it look.",
    summary:
      "Japanese grammar is simpler than English grammar in most ways (no gender, no plural, relatively few verb tenses) and much stricter in others (particles, politeness levels). The backbone fits in about 100 patterns.",
    content: [
      {
        heading: "How Japanese sentences are built",
        paragraphs: [
          "A Japanese sentence ends with the verb. Almost everything else can move around. The structure is typically: (Topic は) Subject が Object を Verb. Particles glue the phrases together; the verb closes them.",
          "There's no grammatical gender. No singular vs plural distinction (usually). Adjectives come in two flavors (i-adjectives and na-adjectives). Verbs conjugate for tense, politeness, and a few aspects but not for person.",
        ],
      },
      {
        heading: "Politeness levels",
        paragraphs: [
          "This is the feature Japanese has that most learners are unprepared for. The same sentence can be expressed in casual, polite (-desu/-masu), honorific (keigo), or humble forms depending on the relationship between speaker and listener.",
          "Start with the -desu/-masu polite form. It's safe in almost every situation. Casual and keigo come later.",
        ],
      },
      {
        heading: "Tense",
        paragraphs: [
          "Japanese has essentially two tenses: present/future and past. Future is marked by context, not a separate conjugation. The -te form strings events together. The -ta form is past. The -masu form is polite present/future.",
          "This is dramatically simpler than English's 12 tenses.",
        ],
      },
    ],
    quickFacts: [
      { label: "Core patterns for N5", value: "~30" },
      { label: "Core patterns for N4", value: "~60" },
      { label: "Gender/plural", value: "None" },
      { label: "Sentence order", value: "SOV (subject-object-verb)" },
    ],
    relatedLinks: [
      { href: "/guides/japanese-particles-masterclass", label: "Particles masterclass" },
      { href: "/vs/bunpo", label: "Bunpo for grammar drilling" },
      { href: "/guides/how-to-learn-japanese", label: "Full roadmap" },
    ],
    faqs: [
      {
        q: "Is Japanese grammar hard?",
        a: "It's different from English but structurally simpler. The hard parts are politeness levels and particles, not conjugation.",
      },
      {
        q: "Do I need a grammar textbook?",
        a: "For the first year, yes. Genki or Tae Kim's free guide will both take you from zero to N4 grammar.",
      },
    ],
  },
  pronunciation: {
    slug: "pronunciation",
    title: "Japanese Pronunciation",
    tagline:
      "Phonetically simpler than English, but with pitch accent that most apps ignore.",
    summary:
      "Japanese has five pure vowels, a small consonant inventory, and a mora-timed rhythm. It's pronounceable for English speakers within weeks. The tricky part is pitch accent, a feature most apps (and many learners) skip.",
    content: [
      {
        heading: "The vowels",
        paragraphs: [
          "Japanese has five vowels: a (as in father), i (as in machine), u (somewhere between English 'oo' and 'uh'), e (as in egg), o (as in go). They are always pronounced the same way. No silent vowels, no 'magic e.'",
          "Long vowels (marked with an extra vowel character in hiragana or a dash in katakana) hold the vowel for twice as long. This changes meaning: obasan (aunt) vs obaasan (grandmother).",
        ],
      },
      {
        heading: "Mora timing",
        paragraphs: [
          "English is stress-timed (some syllables are louder and longer). Japanese is mora-timed: every syllable gets roughly equal length. Saying Tokyo (東京) aloud, 'to-u-kyo-u' has four beats of equal length, not two stressed ones.",
          "This is what makes Japanese sound 'flat' to English ears when spoken by beginners. It's also the rhythm natives listen for.",
        ],
      },
      {
        heading: "Pitch accent",
        paragraphs: [
          "Japanese is not tonal like Chinese, but it does have pitch accent: each word has a pattern of high/low pitch that matters for comprehension. 橋 (hashi, bridge) and 箸 (hashi, chopsticks) are distinguished by pitch pattern.",
          "Most beginner apps ignore pitch accent. Most native speakers are lenient with learners who get it wrong. But if you want to sound fluent, it's worth learning the patterns once you're past N4.",
        ],
      },
    ],
    quickFacts: [
      { label: "Vowels", value: "5 pure vowels" },
      { label: "Timing", value: "Mora-timed" },
      { label: "Tones", value: "Pitch accent (non-tonal)" },
    ],
    relatedLinks: [
      { href: "/blog/japanese-pitch-accent", label: "Pitch accent explained" },
      { href: "/guides/learn-hiragana", label: "Hiragana (the sound map)" },
    ],
    faqs: [
      {
        q: "Is Japanese hard to pronounce?",
        a: "No, for English speakers Japanese pronunciation is relatively easy. The sound inventory is small and consistent.",
      },
      {
        q: "Do I need to master pitch accent?",
        a: "Not to be understood. To sound natural, yes, eventually.",
      },
    ],
  },
  phrases: {
    slug: "phrases",
    title: "Essential Japanese Phrases",
    tagline:
      "The phrases you actually need in your first week of using Japanese.",
    summary:
      "Inku teaches four phrase packs (casual, polite, travel, anime) with audio-supported review. These are the conversations you'll have in the first week of using Japanese in the wild.",
    content: [
      {
        heading: "Why phrases, not just vocabulary",
        paragraphs: [
          "Vocabulary lets you name things. Phrases let you do things. There's a huge gap between knowing the word 'thank you' and knowing when, how politely, and in what form to say it.",
          "Japanese has at least six ways to say thank you, each appropriate to a different context. Learning phrase-first teaches you to pattern-match to situations, which is how natives actually speak.",
        ],
      },
      {
        heading: "Core phrase categories",
        paragraphs: [
          "Greetings and goodbyes. Self-introduction and basic biographical questions. Restaurant ordering. Directions and getting around. Shopping. Apologies and thanks. Dealing with misunderstandings.",
          "You can get through a week in Japan on about 40 phrases, plus vocabulary you already know.",
        ],
      },
    ],
    quickFacts: [
      { label: "Inku phrase packs", value: "4 (casual, polite, travel, anime)" },
      { label: "Phrases to live in Japan (survival)", value: "~40" },
    ],
    relatedLinks: [
      { href: "/blog/moshi-moshi", label: "Moshi moshi: the phone phrase" },
      { href: "/guides/how-to-learn-japanese", label: "Full roadmap" },
    ],
    faqs: [
      {
        q: "Should I learn phrases before or after vocabulary?",
        a: "In parallel. Phrases give you usable output; vocabulary gives you scaffolding to build new phrases on.",
      },
      {
        q: "Is polite or casual more useful for beginners?",
        a: "Polite (-desu/-masu). It's safe in nearly every real context, including speaking to strangers, coworkers, and anyone older than you.",
      },
    ],
  },
};
