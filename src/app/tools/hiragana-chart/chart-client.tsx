"use client";

import { useState, useCallback } from "react";

const HIRAGANA = [
  { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" }, { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
  { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" },
  { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" }, { char: "す", romaji: "su" }, { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" },
  { char: "た", romaji: "ta" }, { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" }, { char: "て", romaji: "te" }, { char: "と", romaji: "to" },
  { char: "な", romaji: "na" }, { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" }, { char: "の", romaji: "no" },
  { char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" }, { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
  { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" }, { char: "め", romaji: "me" }, { char: "も", romaji: "mo" },
  { char: "や", romaji: "ya" }, { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" },
  { char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" }, { char: "れ", romaji: "re" }, { char: "ろ", romaji: "ro" },
  { char: "わ", romaji: "wa" }, { char: "を", romaji: "wo" }, { char: "ん", romaji: "n" },
];

// Row boundaries for rendering in a 5-column grid with empty slots
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

export function HiraganaChartClient() {
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
              const item = HIRAGANA[cellIdx];
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
