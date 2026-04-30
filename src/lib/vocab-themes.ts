export interface VocabEntry {
  jp: string;
  kana: string;
  romaji: string;
  en: string;
  /** Optional very short usage / context hint shown under the English. */
  note?: string;
}

export interface VocabTheme {
  slug: string;
  level: "n5" | "n4";
  title: string;
  /** Short subtitle used on the page header and in metadata. */
  tagline: string;
  /** 1-2 sentence definitional answer for AEO/GEO ("Top X Japanese words for Y"). */
  summary: string;
  /** Markdown-ish paragraphs that teach the theme before the table. */
  intro: string[];
  /** Vocabulary items ordered by frequency / importance, not alphabetically. */
  words: VocabEntry[];
  /** 3-4 short FAQs specific to the theme. */
  faqs: { q: string; a: string }[];
  /** Adjacent topics + guides we should cross-link. */
  relatedLinks: { href: string; label: string }[];
}

/**
 * Programmatic SEO surface — one page per JLPT level × theme.
 * Each theme is a hand-curated subset of vocabulary that aligns
 * with how learners actually search ("Japanese food words",
 * "Japanese family terms", "100 Japanese verbs"). Inku N5/N4 source
 * data backs each list.
 */
export const VOCAB_THEMES: Record<string, VocabTheme> = {
  food: {
    slug: "food",
    level: "n5",
    title: "JLPT N5 Japanese Food Vocabulary",
    tagline:
      "The 30 most useful Japanese food words at JLPT N5, with kana, romaji, and short usage notes.",
    summary:
      "JLPT N5 covers the core Japanese vocabulary for food, drink, and meals. The 30 words below are the highest-frequency food terms that appear on the N5 exam and in everyday Japanese conversation.",
    intro: [
      "Japanese food vocabulary at the N5 level is mostly two-syllable native words plus a handful of common loanwords (パン, コーヒー). You'll see most of these on every restaurant menu in Japan and in any beginner Japanese textbook.",
      "Sort priority: foods you'll see daily, then drinks, then meal-related verbs. Skip the rare items until you can name everything on this list without thinking.",
    ],
    words: [
      { jp: "ご飯", kana: "ごはん", romaji: "gohan", en: "rice (cooked); meal" },
      { jp: "パン", kana: "パン", romaji: "pan", en: "bread" },
      { jp: "肉", kana: "にく", romaji: "niku", en: "meat" },
      { jp: "魚", kana: "さかな", romaji: "sakana", en: "fish" },
      { jp: "卵", kana: "たまご", romaji: "tamago", en: "egg" },
      { jp: "野菜", kana: "やさい", romaji: "yasai", en: "vegetables" },
      { jp: "果物", kana: "くだもの", romaji: "kudamono", en: "fruit" },
      { jp: "牛乳", kana: "ぎゅうにゅう", romaji: "gyūnyū", en: "milk" },
      { jp: "水", kana: "みず", romaji: "mizu", en: "water" },
      { jp: "お茶", kana: "おちゃ", romaji: "ocha", en: "tea (green)" },
      { jp: "コーヒー", kana: "コーヒー", romaji: "kōhī", en: "coffee" },
      { jp: "ジュース", kana: "ジュース", romaji: "jūsu", en: "juice" },
      { jp: "ビール", kana: "ビール", romaji: "bīru", en: "beer" },
      { jp: "お酒", kana: "おさけ", romaji: "osake", en: "alcohol; sake" },
      { jp: "りんご", kana: "りんご", romaji: "ringo", en: "apple" },
      { jp: "みかん", kana: "みかん", romaji: "mikan", en: "mandarin orange" },
      { jp: "バナナ", kana: "バナナ", romaji: "banana", en: "banana" },
      { jp: "朝ご飯", kana: "あさごはん", romaji: "asagohan", en: "breakfast" },
      { jp: "昼ご飯", kana: "ひるごはん", romaji: "hirugohan", en: "lunch" },
      { jp: "晩ご飯", kana: "ばんごはん", romaji: "bangohan", en: "dinner" },
      { jp: "食べる", kana: "たべる", romaji: "taberu", en: "to eat" },
      { jp: "飲む", kana: "のむ", romaji: "nomu", en: "to drink" },
      { jp: "美味しい", kana: "おいしい", romaji: "oishii", en: "delicious" },
      { jp: "甘い", kana: "あまい", romaji: "amai", en: "sweet" },
      { jp: "辛い", kana: "からい", romaji: "karai", en: "spicy" },
      { jp: "塩", kana: "しお", romaji: "shio", en: "salt" },
      { jp: "砂糖", kana: "さとう", romaji: "satō", en: "sugar" },
      { jp: "醤油", kana: "しょうゆ", romaji: "shōyu", en: "soy sauce" },
      { jp: "レストラン", kana: "レストラン", romaji: "resutoran", en: "restaurant" },
      { jp: "メニュー", kana: "メニュー", romaji: "menyū", en: "menu" },
    ],
    faqs: [
      {
        q: "How do I order food in Japanese?",
        a: "Use [item] をください ([item] o kudasai), 'please give me X'. For two of something: [item] を二つください. The waiter typically responds with かしこまりました (kashikomarimashita), 'understood'.",
      },
      {
        q: "Why does ご飯 mean both rice and meal?",
        a: "Rice was the historical core of every meal in Japan, so ご飯 came to stand for 'a meal' generally. 朝ご飯 (breakfast), 昼ご飯 (lunch), 晩ご飯 (dinner) all literally include the word for rice.",
      },
      {
        q: "Is お necessary on words like お茶 and お酒?",
        a: "It softens and adds politeness. Native speakers almost always include it — saying 茶 alone sounds blunt. For beginner safety, always use the お form unless you specifically know it's optional.",
      },
    ],
    relatedLinks: [
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
      { href: "/guides/jlpt-n5-vocabulary", label: "Full N5 vocabulary list" },
      { href: "/japanese/phrases", label: "Essential Japanese phrases" },
    ],
  },
  family: {
    slug: "family",
    level: "n5",
    title: "JLPT N5 Japanese Family Vocabulary",
    tagline:
      "The dual-register family terms (humble vs honorific) every Japanese learner needs at N5.",
    summary:
      "Japanese family vocabulary uses two registers: humble forms when talking about your own family (父, 母) and honorific forms when talking about someone else's (お父さん, お母さん). The N5 list covers both registers for the immediate family.",
    intro: [
      "Japanese family vocabulary is one of the few places where N5 forces you to deal with politeness levels right away. Every family term has two forms: a humble version for your own family and an honorific version for someone else's.",
      "The pattern is simple once you see it: humble forms are bare or use plain readings (父 chichi); honorific forms add お~さん (お父さん otōsan). Use humble when speaking about your own; honorific when addressing or referring to someone else's.",
    ],
    words: [
      { jp: "家族", kana: "かぞく", romaji: "kazoku", en: "family" },
      { jp: "両親", kana: "りょうしん", romaji: "ryōshin", en: "parents (formal)" },
      { jp: "父", kana: "ちち", romaji: "chichi", en: "father (own; humble)" },
      { jp: "お父さん", kana: "おとうさん", romaji: "otōsan", en: "father (someone else's; honorific)" },
      { jp: "母", kana: "はは", romaji: "haha", en: "mother (own; humble)" },
      { jp: "お母さん", kana: "おかあさん", romaji: "okāsan", en: "mother (someone else's; honorific)" },
      { jp: "兄", kana: "あに", romaji: "ani", en: "older brother (own)" },
      { jp: "お兄さん", kana: "おにいさん", romaji: "onīsan", en: "older brother (someone else's)" },
      { jp: "姉", kana: "あね", romaji: "ane", en: "older sister (own)" },
      { jp: "お姉さん", kana: "おねえさん", romaji: "onēsan", en: "older sister (someone else's)" },
      { jp: "弟", kana: "おとうと", romaji: "otōto", en: "younger brother" },
      { jp: "妹", kana: "いもうと", romaji: "imōto", en: "younger sister" },
      { jp: "兄弟", kana: "きょうだい", romaji: "kyōdai", en: "siblings" },
      { jp: "祖父", kana: "そふ", romaji: "sofu", en: "grandfather (own)" },
      { jp: "おじいさん", kana: "おじいさん", romaji: "ojīsan", en: "grandfather (someone else's)" },
      { jp: "祖母", kana: "そぼ", romaji: "sobo", en: "grandmother (own)" },
      { jp: "おばあさん", kana: "おばあさん", romaji: "obāsan", en: "grandmother (someone else's)" },
      { jp: "おじさん", kana: "おじさん", romaji: "ojisan", en: "uncle; middle-aged man" },
      { jp: "おばさん", kana: "おばさん", romaji: "obasan", en: "aunt; middle-aged woman" },
      { jp: "夫", kana: "おっと", romaji: "otto", en: "husband (own)" },
      { jp: "妻", kana: "つま", romaji: "tsuma", en: "wife (own)" },
      { jp: "ご主人", kana: "ごしゅじん", romaji: "goshujin", en: "husband (someone else's)" },
      { jp: "奥さん", kana: "おくさん", romaji: "okusan", en: "wife (someone else's)" },
      { jp: "子供", kana: "こども", romaji: "kodomo", en: "child" },
      { jp: "息子", kana: "むすこ", romaji: "musuko", en: "son (own)" },
      { jp: "娘", kana: "むすめ", romaji: "musume", en: "daughter (own)" },
    ],
    faqs: [
      {
        q: "Why do Japanese family words have two forms?",
        a: "It's part of the broader humble/honorific (uchi/soto) distinction. When talking about your own group (family, company, school), you use humble forms; when talking about others, you use honorific forms. Family vocabulary is the most common place beginners encounter this.",
      },
      {
        q: "Can I just use the honorific form for everything?",
        a: "No, it sounds wrong — like calling your own mother 'Mrs. Mom' to a stranger. Japanese requires the humble form when referring to your own family in conversation. Get the pair right from day one.",
      },
      {
        q: "Are these readings the only ones?",
        a: "These are the standard readings. Older or regional speech sometimes uses 父さん (tōsan) or 母さん (kāsan) without the お. For learner safety, stick to the お~さん forms until you have native context to know when to drop them.",
      },
    ],
    relatedLinks: [
      { href: "/japanese/keigo", label: "Keigo (humble vs honorific)" },
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
      { href: "/japanese/phrases", label: "Essential phrases" },
    ],
  },
  time: {
    slug: "time",
    level: "n5",
    title: "JLPT N5 Japanese Time and Date Vocabulary",
    tagline:
      "How to tell time, name the days, and talk about yesterday/today/tomorrow at JLPT N5 level.",
    summary:
      "Japanese time vocabulary at N5 covers the days of the week, the parts of the day (morning, noon, evening), and a handful of relative-time expressions (today, tomorrow, last week). Reading the clock uses the -ji counter for hours and -fun/-pun for minutes.",
    intro: [
      "Time and date vocabulary is the single most useful N5 cluster for daily life. Every appointment, train schedule, and casual question ('When?') uses this vocabulary.",
      "There are two tricky areas: the days of the month have their own irregular readings up to 10 (ついたち, ふつか, みっか...), and the months use the simpler -gatsu counter on top of the kan-go numbers (一月 ichigatsu = January).",
    ],
    words: [
      { jp: "今", kana: "いま", romaji: "ima", en: "now" },
      { jp: "今日", kana: "きょう", romaji: "kyō", en: "today" },
      { jp: "明日", kana: "あした", romaji: "ashita", en: "tomorrow" },
      { jp: "昨日", kana: "きのう", romaji: "kinō", en: "yesterday" },
      { jp: "毎日", kana: "まいにち", romaji: "mainichi", en: "every day" },
      { jp: "朝", kana: "あさ", romaji: "asa", en: "morning" },
      { jp: "昼", kana: "ひる", romaji: "hiru", en: "noon, daytime" },
      { jp: "晩", kana: "ばん", romaji: "ban", en: "evening" },
      { jp: "夜", kana: "よる", romaji: "yoru", en: "night" },
      { jp: "午前", kana: "ごぜん", romaji: "gozen", en: "AM" },
      { jp: "午後", kana: "ごご", romaji: "gogo", en: "PM" },
      { jp: "時間", kana: "じかん", romaji: "jikan", en: "time, hour" },
      { jp: "分", kana: "ふん/ぷん", romaji: "fun/pun", en: "minute (counter)" },
      { jp: "秒", kana: "びょう", romaji: "byō", en: "second" },
      { jp: "日", kana: "にち/ひ", romaji: "nichi/hi", en: "day" },
      { jp: "週", kana: "しゅう", romaji: "shū", en: "week" },
      { jp: "月", kana: "つき/がつ", romaji: "tsuki/gatsu", en: "month; moon" },
      { jp: "年", kana: "とし/ねん", romaji: "toshi/nen", en: "year" },
      { jp: "月曜日", kana: "げつようび", romaji: "getsuyōbi", en: "Monday" },
      { jp: "火曜日", kana: "かようび", romaji: "kayōbi", en: "Tuesday" },
      { jp: "水曜日", kana: "すいようび", romaji: "suiyōbi", en: "Wednesday" },
      { jp: "木曜日", kana: "もくようび", romaji: "mokuyōbi", en: "Thursday" },
      { jp: "金曜日", kana: "きんようび", romaji: "kinyōbi", en: "Friday" },
      { jp: "土曜日", kana: "どようび", romaji: "doyōbi", en: "Saturday" },
      { jp: "日曜日", kana: "にちようび", romaji: "nichiyōbi", en: "Sunday" },
      { jp: "週末", kana: "しゅうまつ", romaji: "shūmatsu", en: "weekend" },
      { jp: "先週", kana: "せんしゅう", romaji: "senshū", en: "last week" },
      { jp: "今週", kana: "こんしゅう", romaji: "konshū", en: "this week" },
      { jp: "来週", kana: "らいしゅう", romaji: "raishū", en: "next week" },
    ],
    faqs: [
      {
        q: "How do I tell time in Japanese?",
        a: "Use [hour] 時 [minute] 分. Three forty-five is 三時四十五分 (sanji yonjūgofun). The minute counter alternates between -fun and -pun depending on the preceding number — memorize the irregulars (ippun, sanpun, yonfun, roppun, jippun).",
      },
      {
        q: "What's the difference between 今日 and 本日?",
        a: "Both mean 'today.' 今日 (kyō) is the everyday spoken form. 本日 (honjitsu) is formal — store announcements, business writing, news. Beginners use 今日 in nearly every situation.",
      },
      {
        q: "Why does 明日 have multiple readings?",
        a: "あした (ashita) is the standard spoken form. あす (asu) is more formal. みょうにち (myōnichi) is rare and very formal. Stick with あした unless you're reading formal text.",
      },
    ],
    relatedLinks: [
      { href: "/japanese/numbers", label: "Japanese numbers + counters" },
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
      { href: "/guides/jlpt-n5-vocabulary", label: "Full N5 vocabulary" },
    ],
  },
  travel: {
    slug: "travel",
    level: "n5",
    title: "JLPT N5 Japanese Travel Vocabulary",
    tagline:
      "Train stations, airports, hotels, and asking for directions — the survival travel vocabulary at N5.",
    summary:
      "JLPT N5 travel vocabulary covers transit (train, station, ticket), accommodation (hotel, room), and direction-asking. The 25 words below are the highest-frequency travel terms that get adult learners through a first trip to Japan.",
    intro: [
      "Travel vocabulary is the most immediately useful N5 cluster for anyone planning a trip to Japan. Train stations, the JR Pass, the airport, the hotel front desk — all of it leans on these 25 words.",
      "Pair this list with the four travel phrase patterns (~は どこですか, ~を ください, ~まで お願いします, すみません) and you can navigate Tokyo, Kyoto, or Osaka without an interpreter app on every street corner.",
    ],
    words: [
      { jp: "駅", kana: "えき", romaji: "eki", en: "train station" },
      { jp: "電車", kana: "でんしゃ", romaji: "densha", en: "train" },
      { jp: "新幹線", kana: "しんかんせん", romaji: "shinkansen", en: "bullet train" },
      { jp: "地下鉄", kana: "ちかてつ", romaji: "chikatetsu", en: "subway" },
      { jp: "バス", kana: "バス", romaji: "basu", en: "bus" },
      { jp: "タクシー", kana: "タクシー", romaji: "takushī", en: "taxi" },
      { jp: "飛行機", kana: "ひこうき", romaji: "hikōki", en: "airplane" },
      { jp: "空港", kana: "くうこう", romaji: "kūkō", en: "airport" },
      { jp: "切符", kana: "きっぷ", romaji: "kippu", en: "ticket" },
      { jp: "ホテル", kana: "ホテル", romaji: "hoteru", en: "hotel" },
      { jp: "旅館", kana: "りょかん", romaji: "ryokan", en: "traditional Japanese inn" },
      { jp: "部屋", kana: "へや", romaji: "heya", en: "room" },
      { jp: "予約", kana: "よやく", romaji: "yoyaku", en: "reservation" },
      { jp: "観光", kana: "かんこう", romaji: "kankō", en: "sightseeing" },
      { jp: "地図", kana: "ちず", romaji: "chizu", en: "map" },
      { jp: "道", kana: "みち", romaji: "michi", en: "road, way" },
      { jp: "右", kana: "みぎ", romaji: "migi", en: "right" },
      { jp: "左", kana: "ひだり", romaji: "hidari", en: "left" },
      { jp: "前", kana: "まえ", romaji: "mae", en: "in front of" },
      { jp: "後ろ", kana: "うしろ", romaji: "ushiro", en: "behind" },
      { jp: "近く", kana: "ちかく", romaji: "chikaku", en: "near" },
      { jp: "遠く", kana: "とおく", romaji: "tōku", en: "far" },
      { jp: "すみません", kana: "すみません", romaji: "sumimasen", en: "excuse me; thanks" },
      { jp: "お願いします", kana: "おねがいします", romaji: "onegaishimasu", en: "please" },
      { jp: "ありがとうございます", kana: "ありがとうございます", romaji: "arigatō gozaimasu", en: "thank you (formal)" },
    ],
    faqs: [
      {
        q: "Can I get around Japan with just JLPT N5 vocabulary?",
        a: "Yes, for transit, hotels, and basic navigation. The JR ticket vending machines have English. Where Japanese is required (small ryokan, rural buses, some onsen) the vocabulary on this list plus a phrasebook covers most situations.",
      },
      {
        q: "How do I ask 'where is X' in Japanese?",
        a: "Use [X] はどこですか (X wa doko desu ka). The most common is 駅はどこですか (where is the station). The answer usually points (with まっすぐ for 'straight ahead') or names a landmark (ローソンの前 — in front of the Lawson convenience store).",
      },
      {
        q: "Should I learn katakana for travel?",
        a: "Yes — most foreign place names, hotel names, and brand names appear in katakana. Pure-hiragana travel is hard because most signage in tourist areas is bilingual katakana + romaji.",
      },
    ],
    relatedLinks: [
      { href: "/japanese/phrases", label: "Essential phrases" },
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
    ],
  },
  body: {
    slug: "body",
    level: "n5",
    title: "JLPT N5 Japanese Body Parts Vocabulary",
    tagline:
      "The 20 body-part terms you'll see at the doctor, in idioms, and in describing yourself.",
    summary:
      "Japanese body vocabulary at N5 covers the head-to-foot anatomy plus the senses (eye, ear, nose, mouth). Most body parts appear in common idioms (頭がいい — smart, literally 'head is good') so the list pays off in reading too.",
    intro: [
      "Body vocabulary is one of the smaller N5 clusters but punches above its weight because the words anchor a huge number of idioms. 頭がいい (atama ga ii, smart). 耳がいい (mimi ga ii, good listener). 口が軽い (kuchi ga karui, can't keep a secret).",
      "Learn the bare list first, then revisit it through idioms in N4. The same vocabulary gets used in increasingly figurative ways as you advance.",
    ],
    words: [
      { jp: "体", kana: "からだ", romaji: "karada", en: "body" },
      { jp: "頭", kana: "あたま", romaji: "atama", en: "head" },
      { jp: "顔", kana: "かお", romaji: "kao", en: "face" },
      { jp: "目", kana: "め", romaji: "me", en: "eye" },
      { jp: "鼻", kana: "はな", romaji: "hana", en: "nose" },
      { jp: "口", kana: "くち", romaji: "kuchi", en: "mouth" },
      { jp: "耳", kana: "みみ", romaji: "mimi", en: "ear" },
      { jp: "歯", kana: "は", romaji: "ha", en: "tooth" },
      { jp: "首", kana: "くび", romaji: "kubi", en: "neck" },
      { jp: "肩", kana: "かた", romaji: "kata", en: "shoulder" },
      { jp: "胸", kana: "むね", romaji: "mune", en: "chest" },
      { jp: "腕", kana: "うで", romaji: "ude", en: "arm" },
      { jp: "手", kana: "て", romaji: "te", en: "hand" },
      { jp: "指", kana: "ゆび", romaji: "yubi", en: "finger" },
      { jp: "お腹", kana: "おなか", romaji: "onaka", en: "stomach, belly" },
      { jp: "背中", kana: "せなか", romaji: "senaka", en: "back" },
      { jp: "足", kana: "あし", romaji: "ashi", en: "leg, foot" },
      { jp: "髪", kana: "かみ", romaji: "kami", en: "hair" },
      { jp: "声", kana: "こえ", romaji: "koe", en: "voice" },
      { jp: "病気", kana: "びょうき", romaji: "byōki", en: "illness" },
    ],
    faqs: [
      {
        q: "Why does 足 mean both leg and foot?",
        a: "Japanese doesn't always distinguish between leg and foot the way English does. Context tells you which. For specifically 'foot,' people sometimes say 足首 (ashikubi, ankle) or specify with descriptions; for 'leg,' 脚 (also ashi) is sometimes used in writing.",
      },
      {
        q: "How do I say 'I have a headache' in Japanese?",
        a: "頭が痛いです (atama ga itai desu). The pattern is [body part] が痛い for any body-part pain. お腹が痛い for stomachache, 歯が痛い for toothache.",
      },
      {
        q: "What does 'kao ga hiroi' literally and idiomatically mean?",
        a: "Literally: 'face is wide.' Idiomatically: 'has a wide social network, knows lots of people.' Body-part idioms are common in Japanese and surprisingly transparent once you learn the pattern.",
      },
    ],
    relatedLinks: [
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
      { href: "/japanese/phrases", label: "Essential phrases" },
    ],
  },
  weather: {
    slug: "weather",
    level: "n5",
    title: "JLPT N5 Japanese Weather Vocabulary",
    tagline:
      "Sunny, rainy, snowy, hot, cold — the everyday weather words at JLPT N5.",
    summary:
      "Japanese weather vocabulary at N5 covers the four seasons, the major weather types (sunny, rainy, cloudy, snowy), and basic temperature description (hot, cold, warm, cool). Weather is the universal small-talk topic in Japan; this list makes the small talk possible.",
    intro: [
      "Weather is the safest small-talk topic in Japan, just like in English. 今日は暑いですね (kyō wa atsui desu ne) — 'It's hot today, isn't it?' — is the conversational warm-up natives use with strangers in elevators, on trains, and at the konbini.",
      "Pair this vocabulary with the four seasonal markers (春 spring, 夏 summer, 秋 autumn, 冬 winter) and you can hold weather small-talk for a full minute by the end of N5.",
    ],
    words: [
      { jp: "天気", kana: "てんき", romaji: "tenki", en: "weather" },
      { jp: "晴れ", kana: "はれ", romaji: "hare", en: "sunny" },
      { jp: "曇り", kana: "くもり", romaji: "kumori", en: "cloudy" },
      { jp: "雨", kana: "あめ", romaji: "ame", en: "rain" },
      { jp: "雪", kana: "ゆき", romaji: "yuki", en: "snow" },
      { jp: "風", kana: "かぜ", romaji: "kaze", en: "wind" },
      { jp: "台風", kana: "たいふう", romaji: "taifū", en: "typhoon" },
      { jp: "暑い", kana: "あつい", romaji: "atsui", en: "hot (weather)" },
      { jp: "寒い", kana: "さむい", romaji: "samui", en: "cold (weather)" },
      { jp: "暖かい", kana: "あたたかい", romaji: "atatakai", en: "warm" },
      { jp: "涼しい", kana: "すずしい", romaji: "suzushii", en: "cool" },
      { jp: "気温", kana: "きおん", romaji: "kion", en: "temperature" },
      { jp: "春", kana: "はる", romaji: "haru", en: "spring" },
      { jp: "夏", kana: "なつ", romaji: "natsu", en: "summer" },
      { jp: "秋", kana: "あき", romaji: "aki", en: "autumn" },
      { jp: "冬", kana: "ふゆ", romaji: "fuyu", en: "winter" },
      { jp: "季節", kana: "きせつ", romaji: "kisetsu", en: "season" },
      { jp: "空", kana: "そら", romaji: "sora", en: "sky" },
      { jp: "雲", kana: "くも", romaji: "kumo", en: "cloud" },
      { jp: "太陽", kana: "たいよう", romaji: "taiyō", en: "sun" },
    ],
    faqs: [
      {
        q: "Why are 雨 (rain) and 飴 (candy) the same reading?",
        a: "They're both pronounced あめ (ame) but distinguished by pitch accent: 雨 is atamadaka (high-low), 飴 is heiban (flat). Native speakers hear the difference immediately. This is why pitch accent matters even for beginners — eventually.",
      },
      {
        q: "How do I say 'it's raining' in Japanese?",
        a: "雨が降っています (ame ga futte imasu) — 'rain is falling.' The verb 降る (furu, to fall) is the canonical weather verb. 雪が降っています for snow. For finished events: 雨が降りました.",
      },
      {
        q: "Are seasonal greetings really common in Japan?",
        a: "Yes. Spoken weather small-talk is universal, and written seasonal greetings (寒中見舞い in winter, 残暑見舞い in late summer) are standard correspondence. N5 weather vocab is the foundation for both.",
      },
    ],
    relatedLinks: [
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
      { href: "/japanese/phrases", label: "Essential phrases" },
    ],
  },
  numbers: {
    slug: "numbers",
    level: "n5",
    title: "JLPT N5 Japanese Numbers and Counters",
    tagline:
      "How to count to a billion in Japanese, plus the 10 essential counters every learner needs.",
    summary:
      "Japanese numbers at N5 use the Sino-Japanese system (ichi, ni, san...) for almost everything, with the native system (hitotsu, futatsu...) only used for counting generic small objects. Plus 10 high-frequency counters (people, days, hours, minutes, ages, etc.) that cover ~95% of daily speech.",
    intro: [
      "Numbers at N5 are deceptively important. Japanese counters mean that the same number changes its reading depending on what you're counting (ichi-jikan, ippun, ichi-mai, hitori). Learning the 10 most common counters early saves you embarrassment in restaurants and at ticket counters.",
      "The four irregular readings (4: yon vs shi; 7: nana vs shichi; 9: kyū vs ku; 0: rei vs zero) cause the most beginner confusion. Memorize which reading is preferred per counter rather than trying to derive a rule.",
    ],
    words: [
      { jp: "一", kana: "いち", romaji: "ichi", en: "one" },
      { jp: "二", kana: "に", romaji: "ni", en: "two" },
      { jp: "三", kana: "さん", romaji: "san", en: "three" },
      { jp: "四", kana: "よん/し", romaji: "yon/shi", en: "four" },
      { jp: "五", kana: "ご", romaji: "go", en: "five" },
      { jp: "六", kana: "ろく", romaji: "roku", en: "six" },
      { jp: "七", kana: "なな/しち", romaji: "nana/shichi", en: "seven" },
      { jp: "八", kana: "はち", romaji: "hachi", en: "eight" },
      { jp: "九", kana: "きゅう/く", romaji: "kyū/ku", en: "nine" },
      { jp: "十", kana: "じゅう", romaji: "jū", en: "ten" },
      { jp: "百", kana: "ひゃく", romaji: "hyaku", en: "hundred" },
      { jp: "千", kana: "せん", romaji: "sen", en: "thousand" },
      { jp: "万", kana: "まん", romaji: "man", en: "ten thousand" },
      { jp: "一つ", kana: "ひとつ", romaji: "hitotsu", en: "one (generic)" },
      { jp: "二つ", kana: "ふたつ", romaji: "futatsu", en: "two (generic)" },
      { jp: "一人", kana: "ひとり", romaji: "hitori", en: "one person" },
      { jp: "二人", kana: "ふたり", romaji: "futari", en: "two people" },
      { jp: "~時", kana: "~じ", romaji: "-ji", en: "o'clock (counter)" },
      { jp: "~分", kana: "~ふん/ぷん", romaji: "-fun/-pun", en: "minute (counter)" },
      { jp: "~歳", kana: "~さい", romaji: "-sai", en: "years old (counter)" },
      { jp: "~枚", kana: "~まい", romaji: "-mai", en: "flat objects (counter)" },
      { jp: "~本", kana: "~ほん/ぽん/ぼん", romaji: "-hon/-pon/-bon", en: "long objects (counter)" },
      { jp: "~階", kana: "~かい", romaji: "-kai", en: "floor of a building (counter)" },
      { jp: "~回", kana: "~かい", romaji: "-kai", en: "times, occurrences (counter)" },
    ],
    faqs: [
      {
        q: "Why does 4 have two readings?",
        a: "Yon is the native Japanese reading; shi is the Sino-Japanese (and homophone with 死 — death). Most counters prefer yon to avoid the death overlap. Shi appears in compound words (四月 shigatsu, April; 四時 yoji has the unique reading yoji not shi-ji).",
      },
      {
        q: "Do I need to learn all the counters?",
        a: "No. Learn 10 high-frequency ones (people, days, hours, minutes, ages, floors, generic things, flat objects, long objects, occurrences) and use the generic -tsu (hitotsu, futatsu) as a fallback when you forget the specific one.",
      },
      {
        q: "How do I say 'twenty years old' in Japanese?",
        a: "Hatachi (二十歳). It's a unique reading you have to memorize — not nijū-sai. Every other age uses the regular -sai counter (25-sai, 30-sai, etc.).",
      },
    ],
    relatedLinks: [
      { href: "/japanese/numbers", label: "Japanese numbers (deep dive)" },
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
    ],
  },
  verbs: {
    slug: "verbs",
    level: "n5",
    title: "JLPT N5 Japanese Verbs (Top 30)",
    tagline:
      "The 30 highest-frequency verbs at JLPT N5, sorted by class (ichidan, godan, irregular).",
    summary:
      "JLPT N5 expects ~100 verbs, but 30 carry most of the load. The list below is sorted by verb class so you can see ichidan (ru-verbs), godan (u-verbs), and the two irregulars (する, 来る) at a glance.",
    intro: [
      "Japanese verbs come in two regular classes plus two irregulars. Once you can recognize whether a verb is ichidan or godan from the dictionary form, conjugation becomes mechanical.",
      "Memorize these 30 first. Conjugate each into the polite -masu form (-imasu / -ます), then the past -mashita, then the -te form. By the time you can do all three for these 30 verbs, the next 70 N5 verbs will fall into the same patterns.",
    ],
    words: [
      // Ichidan (ru-verbs)
      { jp: "見る", kana: "みる", romaji: "miru", en: "to see, to watch", note: "ichidan" },
      { jp: "食べる", kana: "たべる", romaji: "taberu", en: "to eat", note: "ichidan" },
      { jp: "起きる", kana: "おきる", romaji: "okiru", en: "to wake up", note: "ichidan" },
      { jp: "寝る", kana: "ねる", romaji: "neru", en: "to sleep", note: "ichidan" },
      { jp: "出る", kana: "でる", romaji: "deru", en: "to go out, to leave", note: "ichidan" },
      { jp: "教える", kana: "おしえる", romaji: "oshieru", en: "to teach", note: "ichidan" },
      { jp: "覚える", kana: "おぼえる", romaji: "oboeru", en: "to remember", note: "ichidan" },
      { jp: "閉める", kana: "しめる", romaji: "shimeru", en: "to close", note: "ichidan" },
      // Godan (u-verbs)
      { jp: "行く", kana: "いく", romaji: "iku", en: "to go", note: "godan" },
      { jp: "帰る", kana: "かえる", romaji: "kaeru", en: "to return home", note: "godan (irregular -iru/-eru)" },
      { jp: "話す", kana: "はなす", romaji: "hanasu", en: "to speak", note: "godan" },
      { jp: "聞く", kana: "きく", romaji: "kiku", en: "to listen, to ask", note: "godan" },
      { jp: "読む", kana: "よむ", romaji: "yomu", en: "to read", note: "godan" },
      { jp: "書く", kana: "かく", romaji: "kaku", en: "to write", note: "godan" },
      { jp: "飲む", kana: "のむ", romaji: "nomu", en: "to drink", note: "godan" },
      { jp: "買う", kana: "かう", romaji: "kau", en: "to buy", note: "godan" },
      { jp: "作る", kana: "つくる", romaji: "tsukuru", en: "to make", note: "godan" },
      { jp: "持つ", kana: "もつ", romaji: "motsu", en: "to hold, to have", note: "godan" },
      { jp: "立つ", kana: "たつ", romaji: "tatsu", en: "to stand", note: "godan" },
      { jp: "座る", kana: "すわる", romaji: "suwaru", en: "to sit", note: "godan" },
      { jp: "歩く", kana: "あるく", romaji: "aruku", en: "to walk", note: "godan" },
      { jp: "走る", kana: "はしる", romaji: "hashiru", en: "to run", note: "godan (irregular -iru/-eru)" },
      { jp: "待つ", kana: "まつ", romaji: "matsu", en: "to wait", note: "godan" },
      { jp: "会う", kana: "あう", romaji: "au", en: "to meet", note: "godan" },
      { jp: "わかる", kana: "わかる", romaji: "wakaru", en: "to understand", note: "godan" },
      { jp: "ある", kana: "ある", romaji: "aru", en: "to exist (inanimate)", note: "godan" },
      { jp: "いる", kana: "いる", romaji: "iru", en: "to exist (animate)", note: "ichidan" },
      // Irregular
      { jp: "する", kana: "する", romaji: "suru", en: "to do", note: "irregular" },
      { jp: "勉強する", kana: "べんきょうする", romaji: "benkyō suru", en: "to study", note: "irregular (compound)" },
      { jp: "来る", kana: "くる", romaji: "kuru", en: "to come", note: "irregular" },
    ],
    faqs: [
      {
        q: "How do I conjugate Japanese verbs?",
        a: "For ichidan: drop the る, add -masu (食べる → 食べます). For godan: change the final mora to its -i row equivalent, add -masu (飲む → 飲みます). For irregulars: memorize (する → します, 来る → きます).",
      },
      {
        q: "Are 帰る and 走る ichidan or godan?",
        a: "Godan, even though they end in -eru/-iru. They're famous exceptions every learner has to memorize. The rest of the -eru/-iru-ending verbs follow the standard ichidan rule.",
      },
      {
        q: "What's the difference between ある and いる?",
        a: "Both mean 'to exist' but ある is for inanimate things (本がある — there's a book) and いる is for animate things (猫がいる — there's a cat). Use them by what's existing, not where it is.",
      },
    ],
    relatedLinks: [
      { href: "/japanese/verbs", label: "Japanese verb classes (deep dive)" },
      { href: "/jlpt/n5", label: "JLPT N5 study guide" },
    ],
  },
};
