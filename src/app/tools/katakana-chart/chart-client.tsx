"use client";

import { useState, useCallback } from "react";

const KATAKANA = [
  { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" }, { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" },
  { char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" },
  { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" }, { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" },
  { char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" }, { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" },
  { char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" }, { char: "ノ", romaji: "no" },
  { char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" }, { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
  { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" }, { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" },
  { char: "ヤ", romaji: "ya" }, { char: "ユ", romaji: "yu" }, { char: "ヨ", romaji: "yo" },
  { char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" }, { char: "ロ", romaji: "ro" },
  { char: "ワ", romaji: "wa" }, { char: "ヲ", romaji: "wo" }, { char: "ン", romaji: "n" },
];

const ROWS = [
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],
  [25,26,27,28,29],
  [30,31,32,33,34],
  [35, null, 36, null, 37],
  [38,39,40,41,42],
  [43, null, null, null, 44],
  [45, null, null, null, null],
];

function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "ja-JP";
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

export function KatakanaChartClient() {
  const [showRomaji, setShowRomaji] = useState(true);
  const [lit, setLit] = useState<number | null>(null);

  const handleClick = useCallback((index: number, char: string) => {
    speak(char);
    setLit(index);
    setTimeout(() => setLit(null), 400);
  }, []);

  return (
    <div className="not-prose my-8">
      {/* Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <p className="font-sans text-sm text-ink-muted">
          Click any character to hear its pronunciation.
        </p>
        <button
          onClick={() => setShowRomaji((v) => !v)}
          aria-pressed={showRomaji}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-cream-raised px-3 py-1.5 font-sans text-sm text-ink transition-colors hover:border-matcha hover:text-matcha"
        >
          <span
            className={`block h-3.5 w-7 rounded-full transition-colors ${showRomaji ? "bg-matcha" : "bg-ink-subtle"}`}
          >
            <span
              className={`block h-3.5 w-3.5 rounded-full bg-cream shadow transition-transform ${showRomaji ? "translate-x-3.5" : "translate-x-0"}`}
            />
          </span>
          {showRomaji ? "Romaji on" : "Romaji off"}
        </button>
      </div>

      {/* Grid */}
      <div className="overflow-hidden rounded-lg border border-border bg-cream-raised">
        <div className="grid grid-cols-5">
          {ROWS.map((row, rowIdx) =>
            row.map((cellIdx, colIdx) => {
              if (cellIdx === null) {
                return (
                  <div
                    key={`${rowIdx}-${colIdx}-empty`}
                    className="flex min-h-[72px] items-center justify-center border-b border-r border-border/60 md:min-h-[88px]"
                  >
                    <span className="jp text-xl text-ink-subtle">・</span>
                  </div>
                );
              }
              const item = KATAKANA[cellIdx];
              const isLit = lit === cellIdx;
              return (
                <button
                  key={`${rowIdx}-${colIdx}`}
                  onClick={() => handleClick(cellIdx, item.char)}
                  aria-label={`${item.char}, pronounced ${item.romaji}`}
                  className={`flex min-h-[72px] flex-col items-center justify-center border-b border-r border-border/60 p-2 transition-all duration-150 last:border-r-0 hover:bg-matcha/10 md:min-h-[88px] ${isLit ? "ring-2 ring-inset ring-matcha" : ""}`}
                >
                  <span
                    className={`jp text-3xl leading-none text-ink transition-transform duration-150 md:text-4xl ${isLit ? "scale-110" : ""}`}
                  >
                    {item.char}
                  </span>
                  {showRomaji && (
                    <span className="mt-1 font-sans text-xs text-ink-muted">
                      {item.romaji}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>

      <p className="mt-3 font-sans text-xs text-ink-subtle">
        Pronunciation uses your browser&apos;s built-in Japanese voice. Quality varies by device.
      </p>
    </div>
  );
}
