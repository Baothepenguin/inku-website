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
  "pitch-accent": {
    slug: "pitch-accent",
    title: "Japanese Pitch Accent",
    tagline:
      "The high/low tone pattern most learners (and most apps) skip. Why it matters and when to study it.",
    summary:
      "Japanese pitch accent is the high-low tonal pattern attached to each word that distinguishes meaning (橋 hashi, bridge vs 箸 hashi, chopsticks). Japanese is not tonal like Mandarin, but pitch patterns are real and learnable.",
    content: [
      {
        heading: "What pitch accent actually is",
        paragraphs: [
          "Every Japanese word has a pitch contour: each mora (sound unit) is either high or low, and the pattern is part of the word's identity. There are four named patterns in standard Tokyo Japanese: heiban (flat), atamadaka (head-high), nakadaka (middle-high), and odaka (tail-high).",
          "Unlike Mandarin's four tones, you cannot 'change a word's tone for emphasis.' The pattern is fixed per word, the way English word stress is fixed (PROject vs proJECT).",
        ],
      },
      {
        heading: "Why most apps skip it",
        paragraphs: [
          "Pitch accent is invisible in normal Japanese writing. Hiragana, katakana, and kanji all carry zero pitch information. This makes it hard to teach inside a text-first flashcard or lesson app — you have to encode it in audio or with custom diacritics.",
          "Most learners can be understood without correct pitch. Native speakers are forgiving. The cost-benefit calculation for app makers usually comes out in favor of skipping it, which is why it's chronically underserved.",
        ],
      },
      {
        heading: "When to start studying it",
        paragraphs: [
          "There are two schools of thought. Camp A: from day one, so you don't have to unlearn bad habits. Camp B: only after you have a few hundred words under your belt, so the patterns can build on top of vocabulary you already know.",
          "Both work. Camp A produces more native-sounding learners faster. Camp B is more forgiving for adults who get overwhelmed by a fourth axis to track. If you choose Camp B, do not push pitch study past month 6.",
        ],
      },
      {
        heading: "How to study pitch accent",
        paragraphs: [
          "Use a pitch-accent dictionary (OJAD is the canonical free resource). Listen to native audio for every new word and explicitly mark which pattern it is. Drill minimal pairs (はし for bridge vs chopsticks; あめ for rain vs candy) until the contour is automatic.",
          "Shadowing — listening to native audio and mimicking immediately — is the highest-leverage technique. Pure flashcards drill recognition; shadowing drills production.",
        ],
      },
    ],
    quickFacts: [
      { label: "Number of patterns (Tokyo)", value: "4 (heiban, atamadaka, nakadaka, odaka)" },
      { label: "Required for understanding?", value: "No, but improves clarity" },
      { label: "Required for sounding native?", value: "Yes" },
      { label: "Best free resource", value: "OJAD (ojad.ninjal.ac.jp)" },
    ],
    relatedLinks: [
      { href: "/blog/japanese-pitch-accent", label: "Pitch accent: when to care" },
      { href: "/japanese/pronunciation", label: "Japanese pronunciation overview" },
    ],
    faqs: [
      {
        q: "Is Japanese a tonal language?",
        a: "No. Japanese has pitch accent (high/low), not tones (rising, falling, contour shapes like Mandarin). It's structurally simpler but it does carry meaning.",
      },
      {
        q: "Will I be misunderstood if I get pitch wrong?",
        a: "Usually no. Native speakers infer from context. The exception is short common words with minimal-pair pitch distinctions (hashi, ame, kami) where wrong pitch reads as a mistake even mid-sentence.",
      },
      {
        q: "Do dialects use different pitch?",
        a: "Yes. Tokyo standard pitch is the variety taught in textbooks, but Kansai (Osaka, Kyoto) inverts many patterns. Most learners stick with Tokyo unless they live in Kansai.",
      },
    ],
  },
  keigo: {
    slug: "keigo",
    title: "Keigo: Japanese Honorific Speech",
    tagline:
      "The polite, humble, and respectful registers that change Japanese sentences depending on who is speaking to whom.",
    summary:
      "Keigo (敬語) is the system of Japanese honorifics that changes sentence structure based on social hierarchy and formality. It has three primary registers: teineigo (polite), sonkeigo (respectful), and kenjōgo (humble).",
    content: [
      {
        heading: "What keigo is",
        paragraphs: [
          "Keigo is not just 'polite Japanese.' It's a structural system: nouns, verbs, and even some pronouns shift form based on who is speaking, who is being spoken about, and the social distance between them. The same English sentence — 'I am here' — can come out as いる, います, おります, depending on register.",
          "There are three primary keigo registers. Teineigo (-desu/-masu) is the polite default safe in almost every situation. Sonkeigo elevates the listener or subject ('they came' = いらっしゃった). Kenjōgo lowers the speaker ('I came' = まいりました). Most adult learners need passive recognition of all three; production starts with teineigo and grows from there.",
        ],
      },
      {
        heading: "When to use which register",
        paragraphs: [
          "Casual (タメ口) — close friends and family. Drop -desu/-masu, use plain forms.",
          "Teineigo — strangers, classmates, anyone you're meeting for the first time, customer service. The safe default.",
          "Sonkeigo — speaking about someone above you (boss, elder, customer) or addressing them directly with elevated language.",
          "Kenjōgo — speaking about yourself or your in-group when the listener is above you (business calls, formal interviews, traditional service).",
        ],
      },
      {
        heading: "How to learn it",
        paragraphs: [
          "Start with teineigo. It is the form Japanese textbooks teach in the first three months and the form you'll use in 80% of real interactions.",
          "Add sonkeigo and kenjōgo around month 9-12, when you have enough vocabulary that the keigo verb substitutions don't overwhelm you. Service-industry phrasebooks (the ones aimed at Japanese workers) are surprisingly good at teaching the patterns in context.",
          "Watch service interactions in Japanese — convenience stores, hotels, train stations. The scripts are tightly keigo-loaded and you'll hear the same constructions hundreds of times.",
        ],
      },
    ],
    quickFacts: [
      { label: "Registers", value: "Casual + 3 keigo (teineigo, sonkeigo, kenjōgo)" },
      { label: "Safe default", value: "Teineigo (-desu/-masu)" },
      { label: "When to learn", value: "Teineigo from day 1, keigo after month 9" },
      { label: "Most exposure", value: "Customer service, business calls" },
    ],
    relatedLinks: [
      { href: "/japanese/grammar", label: "Japanese grammar overview" },
      { href: "/guides/how-to-learn-japanese", label: "Full learning roadmap" },
    ],
    faqs: [
      {
        q: "Do I need to learn keigo to live in Japan?",
        a: "Recognition, yes. Production, only at the level your job requires. Tourists and casual residents survive on teineigo. Office workers need sonkeigo and kenjōgo for client interactions. Restaurant workers and hotel staff use them constantly.",
      },
      {
        q: "Is keigo dying out in modern Japanese?",
        a: "It's narrowing, especially among younger speakers in casual contexts. But it remains essential in business, formal service, and traditional settings. Knowing keigo passively is non-negotiable for working in a Japanese company.",
      },
      {
        q: "How do natives feel about foreigners using keigo?",
        a: "Generally appreciative. Mistakes are forgiven. Most natives are pleased that a foreigner tried at all and will not punish errors the way a native peer might.",
      },
    ],
  },
  verbs: {
    slug: "verbs",
    title: "Japanese Verbs",
    tagline:
      "The two main verb classes (ru-verbs, u-verbs) plus two irregulars. The whole system fits in a page.",
    summary:
      "Japanese verbs come in two regular classes — ichidan (ru-verbs) and godan (u-verbs) — plus two irregulars (する, 来る). All verbs end in u-row hiragana in the dictionary form. Conjugation is regular within each class.",
    content: [
      {
        heading: "The two regular classes",
        paragraphs: [
          "Ichidan (ru-verbs): dictionary form ends in -iru or -eru and the stem stays put when conjugated. Examples: 食べる (taberu, to eat), 見る (miru, to see), 起きる (okiru, to wake up). To conjugate: drop the る, add the ending.",
          "Godan (u-verbs): dictionary form ends in any u-row hiragana, and the stem changes vowel depending on the conjugation. Examples: 飲む (nomu, to drink), 書く (kaku, to write), 話す (hanasu, to speak). To conjugate: change the final mora to a different row, then add the ending.",
          "Most -iru and -eru verbs are ichidan, but a handful of common ones are godan despite ending in -iru/-eru (帰る kaeru, 走る hashiru, 知る shiru). Memorize these as exceptions; the rest follow the rule.",
        ],
      },
      {
        heading: "The two irregulars",
        paragraphs: [
          "する (suru, to do) — the most common verb in Japanese, used both alone and in compound verbs (勉強する benkyō suru, to study). Conjugates uniquely: する → します → した → して.",
          "来る (kuru, to come) — the second irregular. Conjugates: 来る → 来ます (kimasu) → 来た (kita) → 来て (kite). The kanji stays put while the reading shifts.",
        ],
      },
      {
        heading: "Tenses you need first",
        paragraphs: [
          "Japanese has essentially two tenses: present/future (the dictionary form) and past (the -ta form). Future is marked by context, not a separate conjugation. The polite versions are -masu (present/future) and -mashita (past).",
          "Then learn the -te form. It's not a tense; it's a glue form used to connect verbs into sequences and to build many other constructions (-te imasu for ongoing actions, -te kudasai for requests, -te aru for resultative states). The -te form is the most useful single conjugation in Japanese.",
        ],
      },
    ],
    quickFacts: [
      { label: "Verb classes", value: "2 regular (ichidan, godan) + 2 irregular (する, 来る)" },
      { label: "Tenses", value: "Present/future and past" },
      { label: "Most useful conjugation", value: "-te form (connects verbs)" },
      { label: "N5 verb count", value: "~100 high-frequency verbs" },
    ],
    relatedLinks: [
      { href: "/japanese/grammar", label: "Japanese grammar overview" },
      { href: "/guides/japanese-particles-masterclass", label: "Particles" },
      { href: "/jlpt/n5", label: "JLPT N5 prep" },
    ],
    faqs: [
      {
        q: "How do I tell if a verb is ichidan or godan?",
        a: "If the dictionary form ends in -iru or -eru, it's most likely ichidan. The famous exceptions (帰る, 走る, 知る, 切る, 入る, 要る, etc.) are godan despite ending in -iru/-eru. There are about 25 of these; memorize them as a list.",
      },
      {
        q: "What's the difference between -masu form and dictionary form?",
        a: "-masu form is polite; dictionary form is plain. They mean the same thing. Use -masu form with strangers, coworkers, and anyone you're not close to. Use dictionary form with close friends and family.",
      },
      {
        q: "Is Japanese grammar really simpler than English?",
        a: "Yes for verbs. No subject-verb agreement, no person/number, no progressive vs simple distinction (covered by -te imasu), and only two real tenses. The complexity sits in particles and politeness levels, not conjugation.",
      },
    ],
  },
  numbers: {
    slug: "numbers",
    title: "Japanese Numbers",
    tagline:
      "How to count from 1 to a billion in Japanese. The two reading systems, the counters, and the big four irregularities.",
    summary:
      "Japanese has two number systems (the native wa-go for 1-10, the Sino-Japanese kan-go for everything) plus counters that change the reading depending on what you're counting. The full system fits in a single study session.",
    content: [
      {
        heading: "The two systems",
        paragraphs: [
          "Wa-go (native Japanese): hitotsu, futatsu, mittsu, yottsu, itsutsu... — used for objects up to 10. Falls out of use beyond that.",
          "Kan-go (Sino-Japanese): ichi, ni, san, shi, go, roku, shichi, hachi, kyū, jū — the system used for everything else. Counts up cleanly into the millions and billions.",
          "Both systems coexist for 1-10. You'll hear both in real Japanese: hitotsu (one thing) vs ichi (the number 1). Beyond 10, kan-go takes over completely.",
        ],
      },
      {
        heading: "The four irregular readings",
        paragraphs: [
          "4 has two readings: yon (native) and shi (Sino-Japanese, also the word for death — usually avoided). Yon is the safer default.",
          "7 has two readings: nana (native) and shichi. Nana is the safer default in counting.",
          "9 has two readings: kyū (default) and ku (used in 9 o'clock, 9 months). Kyū is the safer default.",
          "0 is rei (formal) or zero (English loan). Both are common.",
        ],
      },
      {
        heading: "Counters",
        paragraphs: [
          "Japanese requires counter words attached to numbers depending on what you're counting. People use -nin (一人 hitori, 二人 futari, 三人 sannin). Long thin objects use -hon (鉛筆一本 enpitsu ippon, one pencil). Flat objects use -mai. Small animals use -hiki. Large animals use -tō.",
          "You don't have to memorize all 350+ counters. Learn 10 high-frequency ones (people, days, months, hours, minutes, ages, floors, generic things with -tsu) and you cover ~95% of daily speech. The generic counter -tsu (hitotsu, futatsu) works as a fallback when you forget the specific counter.",
        ],
      },
    ],
    quickFacts: [
      { label: "Number systems", value: "2 (native + Sino-Japanese)" },
      { label: "Counters in active use", value: "~350, but 10 cover daily life" },
      { label: "Safe fallback counter", value: "-tsu (hitotsu, futatsu...)" },
      { label: "Critical irregulars", value: "4, 7, 9 each have two readings" },
    ],
    relatedLinks: [
      { href: "/japanese/grammar", label: "Grammar overview" },
      { href: "/guides/jlpt-n5-vocabulary", label: "N5 vocabulary list" },
    ],
    faqs: [
      {
        q: "How do I say my age in Japanese?",
        a: "Use the -sai (歳) counter: 25-sai is twenty-five years old. The exception is 20, which is hatachi (二十歳). Hatachi is a fixed reading you have to memorize.",
      },
      {
        q: "How do I count days vs days-of-the-month?",
        a: "Day-of-the-month: tsuitachi (1st), futsuka (2nd), mikka (3rd)... up to 10, then jūichi-nichi (11th), jūni-nichi (12th)... Numbers of days: ichinichi (1 day, irregular), futsuka (2 days), mikka (3 days)... Same readings, different meaning by context.",
      },
      {
        q: "Are Japanese numbers used in math?",
        a: "Mostly Sino-Japanese (ichi, ni, san) for arithmetic. Native readings (hitotsu, futatsu) appear in counting objects but not in equations. Computer programming and academic math use Sino-Japanese.",
      },
    ],
  },
};
