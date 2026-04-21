"use client";

import { useState } from "react";

interface CharacterStroke {
  char: string;
  romaji: string;
  name: string;
  strokes: string[];
  tips?: string;
}

const CHARACTERS: CharacterStroke[] = [
  {
    char: "あ",
    romaji: "a",
    name: "a (hiragana)",
    strokes: [
      "Horizontal stroke from left to right across the upper half",
      "Vertical stroke downward from near the center, curving slightly left at the bottom",
      "A curved stroke starting from the right, sweeping left and around in a loop, ending with a small hook",
    ],
    tips: "The most complex hiragana vowel. Think of it as an antelope's crossed antlers.",
  },
  {
    char: "い",
    romaji: "i",
    name: "i (hiragana)",
    strokes: [
      "Short downward stroke angled slightly to the left",
      "Longer curved stroke starting higher, sweeping down and curving right at the bottom",
    ],
    tips: "Two strokes, the second one taller. Picture two people standing.",
  },
  {
    char: "う",
    romaji: "u",
    name: "u (hiragana)",
    strokes: [
      "Short horizontal stroke at the top",
      "Curved stroke starting from the top center, looping outward and ending with a small hook to the right",
    ],
    tips: "Two strokes. The second stroke makes a rounded shape like someone bowing.",
  },
  {
    char: "か",
    romaji: "ka",
    name: "ka (hiragana)",
    strokes: [
      "Horizontal stroke from left to right",
      "Vertical stroke downward from the center of the first stroke",
      "Curved stroke from right, crossing the vertical, ending with a sweeping hook",
    ],
    tips: "Three strokes. Resembles a sword plunging through wood - ka-chunk.",
  },
  {
    char: "き",
    romaji: "ki",
    name: "ki (hiragana)",
    strokes: [
      "Top horizontal stroke from left to right",
      "Second horizontal stroke below the first, slightly longer",
      "Vertical stroke downward through both horizontal strokes",
      "Short diagonal stroke to the lower right",
    ],
    tips: "Four strokes. The shape resembles an old-fashioned key.",
  },
  {
    char: "さ",
    romaji: "sa",
    name: "sa (hiragana)",
    strokes: [
      "Horizontal stroke from left to right",
      "Vertical stroke downward from near the center, curving into a hook",
      "Short diagonal stroke crossing the vertical, pointing lower-right",
    ],
    tips: "Three strokes. The hook at the bottom is characteristic of the sa row.",
  },
  {
    char: "し",
    romaji: "shi",
    name: "shi (hiragana)",
    strokes: [
      "Single curved stroke starting at the top, sweeping downward and curving right at the bottom to form a small hook",
    ],
    tips: "One stroke - a fishhook shape. Note: the hook points right. Compare to tsu (つ), which curves differently.",
  },
  {
    char: "た",
    romaji: "ta",
    name: "ta (hiragana)",
    strokes: [
      "Horizontal stroke from left to right",
      "Vertical stroke downward from the center, with a small horizontal hook to the right near the top",
      "Short curved stroke to the lower left",
      "Short curved stroke to the lower right",
    ],
    tips: "Four strokes. The cross shape is the same as te (て) but with extra bottom strokes.",
  },
  {
    char: "ち",
    romaji: "chi",
    name: "chi (hiragana)",
    strokes: [
      "Horizontal stroke from left to right, curving down at the right end",
      "Vertical stroke starting above the first, curving left and looping under to the right",
    ],
    tips: "Two strokes. The second stroke makes a rounded bottom loop.",
  },
  {
    char: "ね",
    romaji: "ne",
    name: "ne (hiragana)",
    strokes: [
      "Vertical stroke downward, with a small horizontal stroke at the top going right",
      "Curved stroke starting from the right, sweeping left, crossing the vertical, and looping into a long tail to the right",
    ],
    tips: "Two strokes. The long looping tail distinguishes ne from re (れ). Practice them side by side.",
  },
];

const GENERAL_RULES = [
  {
    number: 1,
    title: "Top to bottom",
    description:
      "When strokes are stacked vertically, write the higher stroke first. This applies across all hiragana, katakana, and kanji.",
  },
  {
    number: 2,
    title: "Left to right",
    description:
      "When strokes are side by side horizontally, write the left stroke first. This is the same direction as English reading order.",
  },
  {
    number: 3,
    title: "Horizontal before vertical when they cross",
    description:
      "When a horizontal and vertical stroke intersect, write the horizontal stroke first. Exception: some kanji reverse this - but for kana, horizontal first is safe.",
  },
];

export function StrokeOrderClient() {
  const [selected, setSelected] = useState(0);

  const current = CHARACTERS[selected];

  return (
    <div className="not-prose my-8 space-y-6">
      {/* General rules card */}
      <div className="rounded-lg border border-border bg-cream-raised p-5">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-matcha">
          The three core rules
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {GENERAL_RULES.map((rule) => (
            <div key={rule.number} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-matcha font-sans text-sm font-semibold text-cream">
                {rule.number}
              </span>
              <div>
                <p className="font-sans text-sm font-semibold text-ink">{rule.title}</p>
                <p className="mt-0.5 font-sans text-xs leading-relaxed text-ink-muted">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Character picker */}
      <div>
        <p className="mb-2 font-sans text-sm text-ink-muted">Select a character:</p>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Select character">
          {CHARACTERS.map((c, i) => (
            <button
              key={c.char}
              role="tab"
              aria-selected={selected === i}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center rounded-md border px-3 py-2 transition-colors ${
                selected === i
                  ? "border-matcha bg-matcha/10 text-matcha"
                  : "border-border bg-cream-raised text-ink hover:border-matcha/60"
              }`}
            >
              <span className="jp text-2xl leading-none">{c.char}</span>
              <span className="mt-0.5 font-sans text-[10px] text-ink-muted">{c.romaji}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected character detail */}
      <div
        className="rounded-lg border border-border bg-cream-raised p-6"
        role="tabpanel"
        aria-label={`Stroke order for ${current.char}`}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Large character display */}
          <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-lg border border-border bg-cream shadow-paper">
            <span className="jp text-8xl leading-none text-ink">{current.char}</span>
          </div>

          {/* Stroke details */}
          <div className="flex-1">
            <h3 className="font-serif text-xl font-semibold text-ink">
              {current.char} - {current.name}
            </h3>
            <p className="mt-1 font-sans text-sm text-ink-muted">
              {current.strokes.length} stroke{current.strokes.length !== 1 ? "s" : ""}
            </p>
            <ol className="mt-4 space-y-2">
              {current.strokes.map((stroke, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-matcha font-sans text-xs font-semibold text-matcha">
                    {i + 1}
                  </span>
                  <p className="font-serif text-[0.95rem] leading-relaxed text-ink">{stroke}</p>
                </li>
              ))}
            </ol>
            {current.tips && (
              <div className="mt-4 rounded-md bg-matcha/8 px-4 py-3">
                <p className="font-sans text-sm leading-relaxed text-ink-muted">
                  <span className="font-semibold text-matcha">Tip: </span>
                  {current.tips}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
