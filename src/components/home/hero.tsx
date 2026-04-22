import Link from "next/link";
import { DownloadCTA } from "@/components/download-cta";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { SumiBrush } from "@/components/sumi-brush";
import { HomeScreen, FlashcardScreen, VocabScreen } from "@/components/sample-screens";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      {/* Subtle grid texture — same move as Khrona. Cream-toned to keep
          the washi feel. SVG inlined as data URI so no request. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><path d='M80 0H0v80' fill='none' stroke='rgb(45 134 89 / 0.08)' stroke-width='1'/></svg>\")",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center top, black 0%, black 45%, transparent 75%)",
        }}
      />

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

        {/* Mockups row. Khrona-style ink blot behind the phones so they
            look suspended in a drop of sumi. On narrow screens only the
            center mockup shows; on lg+ the side mockups fan out. */}
        <div className="relative mt-20">
          {/* Sumi ink blot — big charcoal circle behind the mockups. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink opacity-90 md:h-[620px] md:w-[620px]"
            style={{
              maskImage:
                "radial-gradient(circle, black 62%, transparent 72%)",
              filter: "blur(1px)",
            }}
          />
          {/* Soft outer glow to ease the edge into cream */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 md:h-[760px] md:w-[760px]"
            style={{
              background:
                "radial-gradient(circle, rgba(26,26,26,0.18) 0%, rgba(26,26,26,0.05) 40%, transparent 65%)",
            }}
          />

          <div className="relative flex items-end justify-center gap-0 lg:gap-8">
            <IPhoneMockup
              className="hidden lg:block lg:w-[230px] -rotate-[8deg] translate-y-6 opacity-95"
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
              className="hidden lg:block lg:w-[230px] rotate-[8deg] translate-y-6 opacity-95"
              ariaLabel="Inku vocabulary library"
            >
              <VocabScreen />
            </IPhoneMockup>
          </div>
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
