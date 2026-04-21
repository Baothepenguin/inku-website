"use client";

import { useState, useCallback } from "react";

// ── Katakana transliteration engine ──────────────────────────────────────────

// Consonant + vowel pairs, longest-match first
const KATAKANA_MAP: [string, string][] = [
  // Two-char combinations first (order matters - longer patterns before shorter)
  ["shi", "シ"], ["chi", "チ"], ["tsu", "ツ"],
  ["sha", "シャ"], ["shu", "シュ"], ["sho", "ショ"],
  ["cha", "チャ"], ["chu", "チュ"], ["cho", "チョ"],
  ["tchi", "ッチ"], ["tti", "ッティ"],
  ["kya", "キャ"], ["kyu", "キュ"], ["kyo", "キョ"],
  ["nya", "ニャ"], ["nyu", "ニュ"], ["nyo", "ニョ"],
  ["rya", "リャ"], ["ryu", "リュ"], ["ryo", "リョ"],
  ["mya", "ミャ"], ["myu", "ミュ"], ["myo", "ミョ"],
  ["hya", "ヒャ"], ["hyu", "ヒュ"], ["hyo", "ヒョ"],
  ["bya", "ビャ"], ["byu", "ビュ"], ["byo", "ビョ"],
  ["pya", "ピャ"], ["pyu", "ピュ"], ["pyo", "ピョ"],
  ["gya", "ギャ"], ["gyu", "ギュ"], ["gyo", "ギョ"],
  ["jya", "ジャ"], ["jyu", "ジュ"], ["jyo", "ジョ"],
  ["dya", "ジャ"], ["dyu", "ジュ"], ["dyo", "ジョ"],
  // Single-char vowels
  ["a", "ア"], ["i", "イ"], ["u", "ウ"], ["e", "エ"], ["o", "オ"],
  // CV pairs
  ["ka", "カ"], ["ki", "キ"], ["ku", "ク"], ["ke", "ケ"], ["ko", "コ"],
  ["ga", "ガ"], ["gi", "ギ"], ["gu", "グ"], ["ge", "ゲ"], ["go", "ゴ"],
  ["sa", "サ"], ["si", "シ"], ["su", "ス"], ["se", "セ"], ["so", "ソ"],
  ["za", "ザ"], ["zi", "ジ"], ["zu", "ズ"], ["ze", "ゼ"], ["zo", "ゾ"],
  ["ta", "タ"], ["ti", "チ"], ["tu", "ツ"], ["te", "テ"], ["to", "ト"],
  ["da", "ダ"], ["di", "ジ"], ["du", "ズ"], ["de", "デ"], ["do", "ド"],
  ["na", "ナ"], ["ni", "ニ"], ["nu", "ヌ"], ["ne", "ネ"], ["no", "ノ"],
  ["ha", "ハ"], ["hi", "ヒ"], ["fu", "フ"], ["hu", "フ"], ["he", "ヘ"], ["ho", "ホ"],
  ["ba", "バ"], ["bi", "ビ"], ["bu", "ブ"], ["be", "ベ"], ["bo", "ボ"],
  ["pa", "パ"], ["pi", "ピ"], ["pu", "プ"], ["pe", "ペ"], ["po", "ポ"],
  ["ma", "マ"], ["mi", "ミ"], ["mu", "ム"], ["me", "メ"], ["mo", "モ"],
  ["ya", "ヤ"], ["yu", "ユ"], ["yo", "ヨ"],
  ["ra", "ラ"], ["ri", "リ"], ["ru", "ル"], ["re", "レ"], ["ro", "ロ"],
  ["la", "ラ"], ["li", "リ"], ["lu", "ル"], ["le", "レ"], ["lo", "ロ"],
  ["wa", "ワ"], ["wi", "ウィ"], ["we", "ウェ"], ["wo", "ウォ"],
  ["va", "ヴァ"], ["vi", "ヴィ"], ["vu", "ヴ"], ["ve", "ヴェ"], ["vo", "ヴォ"],
  ["fa", "ファ"], ["fi", "フィ"], ["fe", "フェ"], ["fo", "フォ"],
  ["ja", "ジャ"], ["ji", "ジ"], ["ju", "ジュ"], ["je", "ジェ"], ["jo", "ジョ"],
  // Standalone n before consonant
  ["n", "ン"],
  // Fallback consonants (add ウ)
  ["b", "ブ"], ["c", "ク"], ["d", "ド"], ["f", "フ"], ["g", "グ"],
  ["h", "フ"], ["j", "ジュ"], ["k", "ク"], ["l", "ル"], ["m", "ム"],
  ["p", "プ"], ["q", "ク"], ["r", "ル"], ["s", "ス"], ["t", "ト"],
  ["v", "ヴ"], ["w", "ウ"], ["x", "クス"], ["y", "ユ"], ["z", "ズ"],
];

// Build a sorted list (longest pattern first) for greedy matching
const SORTED_MAP = [...KATAKANA_MAP].sort((a, b) => b[0].length - a[0].length);

function toKatakana(input: string): string {
  const lower = input.toLowerCase().replace(/[^a-z]/g, "");
  if (!lower) return "";

  let result = "";
  let i = 0;

  while (i < lower.length) {
    let matched = false;
    for (const [roman, kata] of SORTED_MAP) {
      if (lower.startsWith(roman, i)) {
        result += kata;
        i += roman.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Skip unknown character
      i++;
    }
  }

  return result;
}

// ── Kanji name themes ─────────────────────────────────────────────────────────

type Theme = "nature" | "strong" | "beautiful" | "calm" | "clever";

interface KanjiName {
  kanji: string;
  reading: string;
  meaning: string;
}

const KANJI_THEMES: Record<Theme, { label: string; names: KanjiName[] }> = {
  nature: {
    label: "Nature",
    names: [
      { kanji: "春", reading: "Haru", meaning: "spring" },
      { kanji: "森", reading: "Mori", meaning: "forest" },
      { kanji: "光", reading: "Hikari", meaning: "light" },
      { kanji: "海", reading: "Umi", meaning: "sea" },
      { kanji: "空", reading: "Sora", meaning: "sky" },
      { kanji: "風", reading: "Kaze", meaning: "wind" },
      { kanji: "川", reading: "Kawa", meaning: "river" },
      { kanji: "雪", reading: "Yuki", meaning: "snow" },
    ],
  },
  strong: {
    label: "Strong",
    names: [
      { kanji: "勇", reading: "Isamu", meaning: "courage" },
      { kanji: "力", reading: "Chikara", meaning: "power" },
      { kanji: "剛", reading: "Tsuyoshi", meaning: "sturdy" },
      { kanji: "武", reading: "Takeshi", meaning: "warrior" },
      { kanji: "豪", reading: "Go", meaning: "mighty" },
      { kanji: "烈", reading: "Retsu", meaning: "fierce" },
    ],
  },
  beautiful: {
    label: "Beautiful",
    names: [
      { kanji: "美", reading: "Yoshimi", meaning: "beauty" },
      { kanji: "優", reading: "Yuu", meaning: "gentle, graceful" },
      { kanji: "華", reading: "Hana", meaning: "flower, brilliance" },
      { kanji: "麗", reading: "Rei", meaning: "lovely" },
      { kanji: "雅", reading: "Miyabi", meaning: "elegance" },
      { kanji: "彩", reading: "Aya", meaning: "color, design" },
    ],
  },
  calm: {
    label: "Calm",
    names: [
      { kanji: "静", reading: "Shizuka", meaning: "quiet" },
      { kanji: "和", reading: "Nagomi", meaning: "harmony" },
      { kanji: "安", reading: "Yasushi", meaning: "peace, ease" },
      { kanji: "穏", reading: "Odayaka", meaning: "gentle, mild" },
      { kanji: "澄", reading: "Sumi", meaning: "clear, pure" },
      { kanji: "凪", reading: "Nagi", meaning: "calm sea" },
    ],
  },
  clever: {
    label: "Clever",
    names: [
      { kanji: "智", reading: "Satoshi", meaning: "wisdom" },
      { kanji: "聡", reading: "Satoru", meaning: "wise, clever" },
      { kanji: "賢", reading: "Ken", meaning: "wise" },
      { kanji: "悟", reading: "Satoru", meaning: "enlightened" },
      { kanji: "哲", reading: "Tetsu", meaning: "philosophy, wise" },
      { kanji: "知", reading: "Tomo", meaning: "knowledge" },
    ],
  },
};

function pickFromTheme(theme: Theme): KanjiName {
  const names = KANJI_THEMES[theme].names;
  return names[Math.floor(Math.random() * names.length)];
}

// ── Component ─────────────────────────────────────────────────────────────────

export function JapaneseNameGeneratorClient() {
  const [nameInput, setNameInput] = useState("");
  const [theme, setTheme] = useState<Theme>("nature");
  const [katakana, setKatakana] = useState<string | null>(null);
  const [kanjiResult, setKanjiResult] = useState<KanjiName | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(() => {
    const trimmed = nameInput.trim();
    if (!trimmed) {
      setError("Please enter a name.");
      return;
    }
    setError(null);
    const kata = toKatakana(trimmed);
    if (!kata) {
      setError("Could not transliterate this name. Try an English name using letters a-z.");
      return;
    }
    setKatakana(kata);
    setKanjiResult(pickFromTheme(theme));
  }, [nameInput, theme]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleGenerate();
    },
    [handleGenerate]
  );

  const themes = Object.entries(KANJI_THEMES) as [Theme, { label: string; names: KanjiName[] }][];

  return (
    <div className="not-prose my-8 space-y-5">
      {/* Input section */}
      <div className="rounded-lg border border-border bg-cream-raised p-6">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div>
            <label
              htmlFor="name-input"
              className="mb-1.5 block font-sans text-sm font-semibold text-ink"
            >
              Your name (English letters)
            </label>
            <input
              id="name-input"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. Sarah, Michael, Aiko"
              aria-describedby={error ? "name-error" : undefined}
              className="w-full rounded-md border border-border bg-cream px-4 py-2.5 font-sans text-base text-ink placeholder:text-ink-subtle focus:border-matcha focus:outline-none"
            />
            {error && (
              <p id="name-error" className="mt-1 font-sans text-sm text-[#E85C5F]">
                {error}
              </p>
            )}
          </div>
          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              className="rounded-md bg-matcha px-6 py-2.5 font-sans font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Theme picker */}
        <div className="mt-4">
          <p className="mb-2 font-sans text-sm font-semibold text-ink">
            Kanji name theme
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Kanji name theme">
            {themes.map(([key, val]) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                aria-pressed={theme === key}
                className={`rounded-md border px-3 py-1.5 font-sans text-sm transition-colors ${
                  theme === key
                    ? "border-matcha bg-matcha/10 text-matcha"
                    : "border-border bg-cream text-ink hover:border-matcha/60"
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {katakana && (
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Katakana result */}
          <div className="rounded-lg border border-border bg-cream-raised p-6">
            <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-wider text-matcha">
              Your name in katakana
            </p>
            <p className="font-sans text-sm text-ink-muted">
              How your name sounds in Japanese
            </p>
            <p
              className="jp mt-4 text-center text-5xl leading-none text-ink"
              aria-label={`${nameInput} in katakana`}
            >
              {katakana}
            </p>
            <p className="mt-3 text-center font-sans text-sm text-ink-muted">
              {nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase()}
            </p>
          </div>

          {/* Kanji result */}
          {kanjiResult && (
            <div className="rounded-lg border border-border bg-cream-raised p-6">
              <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-wider text-matcha">
                Kanji name suggestion
              </p>
              <p className="font-sans text-sm text-ink-muted">
                Theme: {KANJI_THEMES[theme].label}
              </p>
              <p
                className="jp mt-4 text-center text-5xl leading-none text-ink"
                aria-label={`${kanjiResult.reading}, meaning ${kanjiResult.meaning}`}
              >
                {kanjiResult.kanji}
              </p>
              <div className="mt-3 text-center">
                <p className="font-sans text-base font-semibold text-ink">{kanjiResult.reading}</p>
                <p className="font-sans text-sm text-ink-muted">meaning: {kanjiResult.meaning}</p>
              </div>
              <button
                onClick={() => setKanjiResult(pickFromTheme(theme))}
                className="mt-4 w-full rounded-md border border-border bg-cream px-3 py-1.5 font-sans text-sm text-ink hover:border-matcha hover:text-matcha"
              >
                Try another
              </button>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <p className="rounded-md border border-border/60 bg-cream px-4 py-3 font-sans text-xs leading-relaxed text-ink-muted">
        These are fun approximations, not official Japanese names. Katakana transliterations are
        based on approximate sound matching. Kanji suggestions are thematic - real Japanese names
        are chosen with care by parents and have personal significance. If you are getting an
        official name for legal or cultural purposes, consult a native speaker.
      </p>
    </div>
  );
}
