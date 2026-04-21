/**
 * Tiny static representations of Inku app screens, rendered as HTML+CSS
 * (not bitmap screenshots). Matches the app palette so the hero looks
 * authentic without needing a 500 KB PNG.
 */
import { cn } from "@/lib/utils";

export function HomeScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-cream", className)}>
      <div className="px-5 pt-8">
        <p className="font-sans text-[10px] uppercase tracking-whisper text-ink-muted">
          Thursday
        </p>
        <h3 className="mt-1 font-serif text-[22px] leading-tight text-ink">
          Good morning.<br />
          <span className="text-matcha">18 cards</span> are waiting.
        </h3>
      </div>

      <div className="mx-5 mt-5 flex items-center justify-between rounded-xl bg-gradient-to-br from-matcha to-matcha-deep p-4 text-cream">
        <div>
          <p className="font-sans text-[9px] uppercase tracking-breath opacity-80">
            Begin session
          </p>
          <p className="font-serif text-[18px] leading-tight">Today&apos;s review</p>
        </div>
        <span className="font-serif text-[26px] leading-none">→</span>
      </div>

      <div className="mx-5 mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border bg-cream-raised p-3">
          <p className="jp text-[22px] text-matcha">墨</p>
          <p className="mt-1 font-serif text-[10px] text-ink-muted">Streak</p>
          <p className="font-serif text-[14px]">12 days</p>
        </div>
        <div className="rounded-lg border border-border bg-cream-raised p-3">
          <p className="jp text-[22px] text-matcha">滴</p>
          <p className="mt-1 font-serif text-[10px] text-ink-muted">Ink drops</p>
          <p className="font-serif text-[14px]">3 / 5</p>
        </div>
      </div>

      <div className="mx-5 mt-5">
        <p className="label-eyebrow mb-2 text-[8px]">Pending</p>
        <div className="rounded-lg border border-border bg-cream-raised p-3">
          <p className="font-serif text-[13px] text-ink">Phrase pack: Travel</p>
          <p className="mt-1 font-serif text-[11px] text-ink-muted">
            4 cards remaining from yesterday
          </p>
        </div>
      </div>
    </div>
  );
}

export function FlashcardScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-between bg-cream px-5 py-6",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <span className="font-sans text-[10px] uppercase tracking-breath text-ink-muted">
          Kana · 3 of 18
        </span>
        <div className="flex gap-1">
          <span className="h-1 w-8 rounded-full bg-matcha" />
          <span className="h-1 w-8 rounded-full bg-matcha" />
          <span className="h-1 w-8 rounded-full bg-matcha" />
          <span className="h-1 w-8 rounded-full bg-border" />
          <span className="h-1 w-8 rounded-full bg-border" />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="label-eyebrow text-[9px] mb-2">Write the sound</p>
        <p className="jp text-[110px] leading-none text-ink">き</p>
        <p className="mt-4 font-serif text-[18px] italic text-ink-muted">ki</p>
      </div>

      <div className="grid w-full grid-cols-4 gap-2">
        {["Again", "Hard", "Good", "Easy"].map((label, i) => (
          <div
            key={label}
            className="rounded-md py-2 text-center font-sans text-[10px] font-medium"
            style={{
              backgroundColor: [
                "#C65D4A",
                "#E8913A",
                "#2D6A4F",
                "#6BA3D6",
              ][i],
              color: "#FAF8F2",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function VocabScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-cream", className)}>
      <div className="px-5 pt-8">
        <p className="label-eyebrow mb-2 text-[9px]">JLPT N5 · 87 of 200</p>
        <h3 className="font-serif text-[22px] leading-tight text-ink">
          Water, sky, home.
        </h3>
      </div>
      <div className="mx-5 mt-4 space-y-2">
        {[
          { jp: "水", kana: "みず", en: "water" },
          { jp: "空", kana: "そら", en: "sky" },
          { jp: "家", kana: "いえ", en: "home, house" },
          { jp: "本", kana: "ほん", en: "book" },
          { jp: "学校", kana: "がっこう", en: "school" },
          { jp: "友達", kana: "ともだち", en: "friend" },
        ].map((row) => (
          <div
            key={row.jp}
            className="flex items-center gap-3 rounded-md border border-border bg-cream-raised p-3"
          >
            <span className="jp text-[22px] text-ink">{row.jp}</span>
            <div className="flex-1">
              <p className="font-serif text-[11px] text-ink-muted">{row.kana}</p>
              <p className="font-serif text-[13px] text-ink">{row.en}</p>
            </div>
            <span className="jp text-[14px] text-matcha">聴</span>
          </div>
        ))}
      </div>
    </div>
  );
}
