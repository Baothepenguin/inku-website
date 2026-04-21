import Link from "next/link";
import { DownloadCTA } from "@/components/download-cta";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { SumiBrush } from "@/components/sumi-brush";
import { HomeScreen, FlashcardScreen, VocabScreen } from "@/components/sample-screens";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <SumiBrush
        variant="sweep"
        className="pointer-events-none absolute -top-10 left-1/2 h-32 w-[110%] -translate-x-1/2 opacity-[0.08]"
      />
      <SumiBrush
        variant="slash"
        className="pointer-events-none absolute -right-20 top-20 hidden h-[420px] w-[420px] rotate-[12deg] opacity-[0.045] md:block"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center md:max-w-4xl">
          <p className="label-eyebrow mb-6 text-matcha">
            A new kind of Japanese app · iPhone only
          </p>
          <h1 className="font-serif text-display-lg tracking-tight text-balance text-ink md:text-display-xl">
            Learn Japanese the way you&apos;d want to.{" "}
            <span className="text-matcha italic">Calmly.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl font-body text-lg leading-relaxed text-ink-muted md:max-w-2xl md:text-xl text-pretty">
            Inku is a flashcard app built like a notebook, not a game. Hiragana,
            katakana, N5 vocabulary, and four phrase packs, all voiced by a real
            actor. No streaks. No pressure. Just ten minutes a day that actually
            stick.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DownloadCTA
              campaign="hero"
              label="Download on iPhone"
              className="text-base md:text-[1.05rem]"
            />
            <Link
              href="/guides/learn-hiragana"
              className="font-sans text-[0.95rem] font-medium text-ink-muted underline decoration-ink/30 underline-offset-[5px] hover:decoration-ink hover:text-ink"
            >
              Or read the hiragana guide first →
            </Link>
          </div>

          <p className="mt-5 font-sans text-sm text-ink-subtle">
            7-day free trial. ${SITE_PRICE.yearly} a year or ${SITE_PRICE.monthly} a month. Cancel anytime in Settings.
          </p>
        </div>

        {/* Mockups row. On narrow screens only the center mockup shows; on
            tablet+ the side mockups fan out slightly. */}
        <div className="relative mt-20 flex items-end justify-center gap-0 lg:gap-8">
          <IPhoneMockup
            className="hidden lg:block lg:w-[230px] -rotate-[6deg] translate-y-4 opacity-95"
            ariaLabel="Inku home screen"
          >
            <HomeScreen />
          </IPhoneMockup>

          <IPhoneMockup
            className="relative z-10 w-[260px] md:w-[300px]"
            ariaLabel="Inku flashcard review session"
          >
            <FlashcardScreen />
          </IPhoneMockup>

          <IPhoneMockup
            className="hidden lg:block lg:w-[230px] rotate-[6deg] translate-y-4 opacity-95"
            ariaLabel="Inku vocabulary library"
          >
            <VocabScreen />
          </IPhoneMockup>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 text-ink-subtle md:gap-x-12">
          <StatChip label="cards in your pocket" value="600+" />
          <StatChip label="spoken by a real actor" value="100%" />
          <StatChip label="stayed past month one" value="82%" />
          <StatChip label="servers storing your progress" value="0" />
        </div>
      </div>
    </section>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 whitespace-normal">
      <span className="font-serif text-[1.75rem] text-ink md:text-3xl tabular-nums">
        {value}
      </span>
      <span className="max-w-[14ch] font-sans text-sm leading-tight text-ink-muted">
        {label}
      </span>
    </div>
  );
}

// inline so the Hero file compiles even without importing site constants at the top
const SITE_PRICE = { yearly: "29.99", monthly: "4.99" };
