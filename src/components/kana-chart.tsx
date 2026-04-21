/**
 * Static kana chart used in pillar guides and tools.
 * Mode picks hiragana or katakana. Each cell shows character + romaji.
 * Empty cells are marked with a middle dot.
 */
import { cn } from "@/lib/utils";

const HIRAGANA_ROWS: { label: string; cells: (string | null)[] }[] = [
  { label: "a", cells: ["あ a", "い i", "う u", "え e", "お o"] },
  { label: "k", cells: ["か ka", "き ki", "く ku", "け ke", "こ ko"] },
  { label: "s", cells: ["さ sa", "し shi", "す su", "せ se", "そ so"] },
  { label: "t", cells: ["た ta", "ち chi", "つ tsu", "て te", "と to"] },
  { label: "n", cells: ["な na", "に ni", "ぬ nu", "ね ne", "の no"] },
  { label: "h", cells: ["は ha", "ひ hi", "ふ fu", "へ he", "ほ ho"] },
  { label: "m", cells: ["ま ma", "み mi", "む mu", "め me", "も mo"] },
  { label: "y", cells: ["や ya", null, "ゆ yu", null, "よ yo"] },
  { label: "r", cells: ["ら ra", "り ri", "る ru", "れ re", "ろ ro"] },
  { label: "w", cells: ["わ wa", null, null, null, "を wo"] },
  { label: "n", cells: ["ん n", null, null, null, null] },
];

const KATAKANA_ROWS: { label: string; cells: (string | null)[] }[] = [
  { label: "a", cells: ["ア a", "イ i", "ウ u", "エ e", "オ o"] },
  { label: "k", cells: ["カ ka", "キ ki", "ク ku", "ケ ke", "コ ko"] },
  { label: "s", cells: ["サ sa", "シ shi", "ス su", "セ se", "ソ so"] },
  { label: "t", cells: ["タ ta", "チ chi", "ツ tsu", "テ te", "ト to"] },
  { label: "n", cells: ["ナ na", "ニ ni", "ヌ nu", "ネ ne", "ノ no"] },
  { label: "h", cells: ["ハ ha", "ヒ hi", "フ fu", "ヘ he", "ホ ho"] },
  { label: "m", cells: ["マ ma", "ミ mi", "ム mu", "メ me", "モ mo"] },
  { label: "y", cells: ["ヤ ya", null, "ユ yu", null, "ヨ yo"] },
  { label: "r", cells: ["ラ ra", "リ ri", "ル ru", "レ re", "ロ ro"] },
  { label: "w", cells: ["ワ wa", null, null, null, "ヲ wo"] },
  { label: "n", cells: ["ン n", null, null, null, null] },
];

export function KanaChart({
  mode = "hiragana",
  className,
}: {
  mode?: "hiragana" | "katakana";
  className?: string;
}) {
  const rows = mode === "hiragana" ? HIRAGANA_ROWS : KATAKANA_ROWS;
  return (
    <div
      className={cn(
        "not-prose my-8 overflow-hidden rounded-lg border border-border bg-cream-raised",
        className,
      )}
    >
      <div className="grid grid-cols-5">
        {rows.map((row) =>
          row.cells.map((cell, colIndex) => (
            <div
              key={`${row.label}-${colIndex}`}
              className="flex min-h-[72px] flex-col items-center justify-center border-b border-r border-border/60 p-2 last:border-r-0 md:min-h-[88px]"
            >
              {cell ? (
                <>
                  <span className="jp text-3xl leading-none text-ink md:text-4xl">
                    {cell.split(" ")[0]}
                  </span>
                  <span className="mt-1 font-sans text-xs text-ink-muted">
                    {cell.split(" ")[1]}
                  </span>
                </>
              ) : (
                <span className="jp text-xl text-ink-subtle">・</span>
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
