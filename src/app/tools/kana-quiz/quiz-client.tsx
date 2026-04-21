"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface KanaItem {
  char: string;
  romaji: string;
  script: "hiragana" | "katakana";
}

const HIRAGANA: KanaItem[] = [
  { char: "あ", romaji: "a", script: "hiragana" }, { char: "い", romaji: "i", script: "hiragana" }, { char: "う", romaji: "u", script: "hiragana" }, { char: "え", romaji: "e", script: "hiragana" }, { char: "お", romaji: "o", script: "hiragana" },
  { char: "か", romaji: "ka", script: "hiragana" }, { char: "き", romaji: "ki", script: "hiragana" }, { char: "く", romaji: "ku", script: "hiragana" }, { char: "け", romaji: "ke", script: "hiragana" }, { char: "こ", romaji: "ko", script: "hiragana" },
  { char: "さ", romaji: "sa", script: "hiragana" }, { char: "し", romaji: "shi", script: "hiragana" }, { char: "す", romaji: "su", script: "hiragana" }, { char: "せ", romaji: "se", script: "hiragana" }, { char: "そ", romaji: "so", script: "hiragana" },
  { char: "た", romaji: "ta", script: "hiragana" }, { char: "ち", romaji: "chi", script: "hiragana" }, { char: "つ", romaji: "tsu", script: "hiragana" }, { char: "て", romaji: "te", script: "hiragana" }, { char: "と", romaji: "to", script: "hiragana" },
  { char: "な", romaji: "na", script: "hiragana" }, { char: "に", romaji: "ni", script: "hiragana" }, { char: "ぬ", romaji: "nu", script: "hiragana" }, { char: "ね", romaji: "ne", script: "hiragana" }, { char: "の", romaji: "no", script: "hiragana" },
  { char: "は", romaji: "ha", script: "hiragana" }, { char: "ひ", romaji: "hi", script: "hiragana" }, { char: "ふ", romaji: "fu", script: "hiragana" }, { char: "へ", romaji: "he", script: "hiragana" }, { char: "ほ", romaji: "ho", script: "hiragana" },
  { char: "ま", romaji: "ma", script: "hiragana" }, { char: "み", romaji: "mi", script: "hiragana" }, { char: "む", romaji: "mu", script: "hiragana" }, { char: "め", romaji: "me", script: "hiragana" }, { char: "も", romaji: "mo", script: "hiragana" },
  { char: "や", romaji: "ya", script: "hiragana" }, { char: "ゆ", romaji: "yu", script: "hiragana" }, { char: "よ", romaji: "yo", script: "hiragana" },
  { char: "ら", romaji: "ra", script: "hiragana" }, { char: "り", romaji: "ri", script: "hiragana" }, { char: "る", romaji: "ru", script: "hiragana" }, { char: "れ", romaji: "re", script: "hiragana" }, { char: "ろ", romaji: "ro", script: "hiragana" },
  { char: "わ", romaji: "wa", script: "hiragana" }, { char: "を", romaji: "wo", script: "hiragana" }, { char: "ん", romaji: "n", script: "hiragana" },
];

const KATAKANA: KanaItem[] = [
  { char: "ア", romaji: "a", script: "katakana" }, { char: "イ", romaji: "i", script: "katakana" }, { char: "ウ", romaji: "u", script: "katakana" }, { char: "エ", romaji: "e", script: "katakana" }, { char: "オ", romaji: "o", script: "katakana" },
  { char: "カ", romaji: "ka", script: "katakana" }, { char: "キ", romaji: "ki", script: "katakana" }, { char: "ク", romaji: "ku", script: "katakana" }, { char: "ケ", romaji: "ke", script: "katakana" }, { char: "コ", romaji: "ko", script: "katakana" },
  { char: "サ", romaji: "sa", script: "katakana" }, { char: "シ", romaji: "shi", script: "katakana" }, { char: "ス", romaji: "su", script: "katakana" }, { char: "セ", romaji: "se", script: "katakana" }, { char: "ソ", romaji: "so", script: "katakana" },
  { char: "タ", romaji: "ta", script: "katakana" }, { char: "チ", romaji: "chi", script: "katakana" }, { char: "ツ", romaji: "tsu", script: "katakana" }, { char: "テ", romaji: "te", script: "katakana" }, { char: "ト", romaji: "to", script: "katakana" },
  { char: "ナ", romaji: "na", script: "katakana" }, { char: "ニ", romaji: "ni", script: "katakana" }, { char: "ヌ", romaji: "nu", script: "katakana" }, { char: "ネ", romaji: "ne", script: "katakana" }, { char: "ノ", romaji: "no", script: "katakana" },
  { char: "ハ", romaji: "ha", script: "katakana" }, { char: "ヒ", romaji: "hi", script: "katakana" }, { char: "フ", romaji: "fu", script: "katakana" }, { char: "ヘ", romaji: "he", script: "katakana" }, { char: "ホ", romaji: "ho", script: "katakana" },
  { char: "マ", romaji: "ma", script: "katakana" }, { char: "ミ", romaji: "mi", script: "katakana" }, { char: "ム", romaji: "mu", script: "katakana" }, { char: "メ", romaji: "me", script: "katakana" }, { char: "モ", romaji: "mo", script: "katakana" },
  { char: "ヤ", romaji: "ya", script: "katakana" }, { char: "ユ", romaji: "yu", script: "katakana" }, { char: "ヨ", romaji: "yo", script: "katakana" },
  { char: "ラ", romaji: "ra", script: "katakana" }, { char: "リ", romaji: "ri", script: "katakana" }, { char: "ル", romaji: "ru", script: "katakana" }, { char: "レ", romaji: "re", script: "katakana" }, { char: "ロ", romaji: "ro", script: "katakana" },
  { char: "ワ", romaji: "wa", script: "katakana" }, { char: "ヲ", romaji: "wo", script: "katakana" }, { char: "ン", romaji: "n", script: "katakana" },
];

type Mode = "hiragana" | "katakana" | "both";
type FeedbackState = "idle" | "correct" | "wrong";

function getPool(mode: Mode): KanaItem[] {
  if (mode === "hiragana") return HIRAGANA;
  if (mode === "katakana") return KATAKANA;
  return [...HIRAGANA, ...KATAKANA];
}

function pickRandom(pool: KanaItem[], exclude?: KanaItem): KanaItem {
  if (pool.length === 1) return pool[0];
  let candidate: KanaItem;
  do {
    candidate = pool[Math.floor(Math.random() * pool.length)];
  } while (exclude && candidate.char === exclude.char);
  return candidate;
}

export function KanaQuizClient() {
  const [mode, setMode] = useState<Mode>("hiragana");
  const [current, setCurrent] = useState<KanaItem>(() => pickRandom(getPool("hiragana")));
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<FeedbackState>("idle");
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const advance = useCallback(
    (pool: KanaItem[], prev: KanaItem) => {
      setCurrent(pickRandom(pool, prev));
      setInput("");
      setFeedback("idle");
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    []
  );

  const handleModeChange = useCallback(
    (newMode: Mode) => {
      setMode(newMode);
      const pool = getPool(newMode);
      setCurrent(pickRandom(pool));
      setInput("");
      setFeedback("idle");
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    []
  );

  const handleReset = useCallback(() => {
    setCorrect(0);
    setTotal(0);
    const pool = getPool(mode);
    setCurrent(pickRandom(pool));
    setInput("");
    setFeedback("idle");
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [mode]);

  const handleSubmit = useCallback(() => {
    if (feedback !== "idle") return;
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const isCorrect = trimmed === current.romaji;
    setFeedback(isCorrect ? "correct" : "wrong");
    setTotal((t) => t + 1);
    if (isCorrect) setCorrect((c) => c + 1);

    setTimeout(() => {
      advance(getPool(mode), current);
    }, 600);
  }, [input, current, feedback, mode, advance]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit]
  );

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const accuracy = total === 0 ? null : Math.round((correct / total) * 100);

  return (
    <div className="not-prose my-8 space-y-5">
      {/* Controls row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Mode toggle */}
        <div
          className="flex rounded-md border border-border overflow-hidden"
          role="group"
          aria-label="Quiz mode"
        >
          {(["hiragana", "katakana", "both"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => handleModeChange(m)}
              aria-pressed={mode === m}
              className={`px-4 py-2 font-sans text-sm capitalize transition-colors ${
                mode === m
                  ? "bg-matcha text-cream"
                  : "bg-cream-raised text-ink hover:bg-matcha/10"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Score + reset */}
        <div className="flex items-center gap-3">
          <div className="font-sans text-sm text-ink-muted">
            Score:{" "}
            <span className="font-semibold text-ink">
              {correct} / {total}
            </span>
            {accuracy !== null && (
              <span className="ml-1 text-ink-subtle">({accuracy}%)</span>
            )}
          </div>
          <button
            onClick={handleReset}
            className="rounded-md border border-border bg-cream-raised px-3 py-1.5 font-sans text-sm text-ink hover:border-matcha hover:text-matcha"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Quiz card */}
      <div className="rounded-lg border border-border bg-cream-raised p-8 text-center">
        {/* Script label */}
        <p className="mb-2 font-sans text-xs uppercase tracking-wider text-ink-subtle">
          {current.script}
        </p>

        {/* Character */}
        <div
          className={`mx-auto flex h-36 w-36 items-center justify-center rounded-xl border-2 transition-colors ${
            feedback === "correct"
              ? "border-matcha bg-matcha/10"
              : feedback === "wrong"
              ? "border-[#E85C5F] bg-[#E85C5F]/10"
              : "border-border bg-cream"
          }`}
          aria-live="polite"
          aria-label={`Character: ${current.char}`}
        >
          <span className="jp text-8xl leading-none text-ink">{current.char}</span>
        </div>

        {/* Feedback message */}
        <div className="mt-4 h-6" aria-live="polite" aria-atomic="true">
          {feedback === "correct" && (
            <p className="font-sans text-sm font-semibold text-matcha">
              Correct - {current.romaji}
            </p>
          )}
          {feedback === "wrong" && (
            <p className="font-sans text-sm font-semibold text-[#E85C5F]">
              The answer is: {current.romaji}
            </p>
          )}
        </div>

        {/* Input */}
        <div className="mt-4 flex justify-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type romaji..."
            aria-label="Your romaji answer"
            disabled={feedback !== "idle"}
            className="w-40 rounded-md border border-border bg-cream px-4 py-2.5 text-center font-sans text-base text-ink placeholder:text-ink-subtle focus:border-matcha focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            disabled={feedback !== "idle" || !input.trim()}
            className="rounded-md bg-matcha px-5 py-2.5 font-sans text-sm font-semibold text-cream transition-opacity disabled:opacity-40"
          >
            Check
          </button>
        </div>
        <p className="mt-3 font-sans text-xs text-ink-subtle">Press Enter to submit</p>
      </div>
    </div>
  );
}
