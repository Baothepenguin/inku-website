import { DownloadCTA } from "@/components/download-cta";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { SumiBrush } from "@/components/sumi-brush";
import { HomeScreen, FlashcardScreen, VocabScreen } from "@/components/sample-screens";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-12 opacity-[0.42]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 520'><path d='M0 350 C140 260 260 260 390 320 C520 380 650 210 790 255 C920 296 1020 250 1200 170 V520 H0Z' fill='rgb(26 26 26)' fill-opacity='0.055'/><path d='M0 420 C150 340 280 360 430 392 C610 430 710 310 855 330 C1000 352 1080 320 1200 275 V520 H0Z' fill='rgb(45 134 89)' fill-opacity='0.055'/><path d='M110 305 C260 230 360 245 500 275' stroke='rgb(26 26 26)' stroke-opacity='0.08' stroke-width='10' stroke-linecap='round' fill='none'/><path d='M760 260 C890 210 980 205 1120 230' stroke='rgb(26 26 26)' stroke-opacity='0.06' stroke-width='8' stroke-linecap='round' fill='none'/></svg>\")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 26%, black 88%, transparent 100%)",
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
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] lg:gap-6">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-[36rem] lg:text-left">
          <p className="label-eyebrow mb-6 text-matcha">
            Japanese flashcards for iPhone
          </p>
          <h1 className="font-serif text-display-lg tracking-tight text-balance text-ink md:text-display-xl lg:text-[clamp(4.25rem,7vw,6.25rem)]">
            Learn Japanese without the noise.
          </h1>
          <p className="mx-auto mt-7 max-w-xl font-body text-lg leading-relaxed text-ink-muted md:text-xl lg:mx-0 text-pretty">
            Inku helps you learn hiragana, katakana, N5 words, N4 words, and
            useful phrases in short daily sessions. Learn a few cards. Review
            what is due. Keep going without ads, accounts, or a busy screen.
          </p>

          <div className="mt-10 flex flex-col items-center lg:items-start">
            <DownloadCTA
              campaign="hero"
              label="Start your free week"
              className="text-base md:text-[1.05rem]"
            />
          </div>

          <p className="mt-5 font-sans text-sm text-ink-subtle">
            7-day free trial. {SITE.pricing.yearly} or {SITE.pricing.monthly}.
            Cancel anytime in Settings.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[42rem] lg:max-w-none">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[53%] top-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink opacity-90 md:h-[620px] md:w-[620px] lg:h-[680px] lg:w-[680px]"
            style={{
              maskImage:
                "radial-gradient(circle, black 62%, transparent 72%)",
              filter: "blur(1px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[53%] top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 md:h-[760px] md:w-[760px]"
            style={{
              background:
                "radial-gradient(circle, rgba(26,26,26,0.18) 0%, rgba(26,26,26,0.05) 40%, transparent 65%)",
            }}
          />

          <div className="relative flex items-end justify-center gap-0 lg:justify-end lg:gap-5 xl:gap-8">
            <IPhoneMockup
              className="hidden lg:block lg:w-[220px] -rotate-[8deg] translate-y-8 opacity-95 xl:w-[230px]"
              ariaLabel="Inku home screen"
            >
              <HomeScreen />
            </IPhoneMockup>

            <IPhoneMockup
              className="relative z-10 w-[260px] md:w-[300px] lg:w-[320px]"
              ariaLabel="Inku flashcard review session"
            >
              <FlashcardScreen />
            </IPhoneMockup>

            <IPhoneMockup
              className="hidden lg:block lg:w-[220px] rotate-[8deg] translate-y-8 opacity-95 xl:w-[230px]"
              ariaLabel="Inku vocabulary library"
            >
              <VocabScreen />
            </IPhoneMockup>
          </div>
        </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 overflow-hidden rounded-lg border border-border/70 bg-cream-raised/85 shadow-paper backdrop-blur md:grid-cols-4">
          <StatChip label="unlocked bundles" value="17" />
          <StatChip label="N5 cards" value="515" />
          <StatChip label="free trial" value="7 days" />
          <StatChip label="account required" value="0" />
        </div>
      </div>
    </section>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-28 flex-col justify-center border-border/70 px-5 py-6 text-center odd:border-r [&:nth-child(-n+2)]:border-b md:border-b-0 md:border-r md:last:border-r-0">
      <span className="font-serif text-[1.65rem] leading-none text-ink md:text-3xl tabular-nums">
        {value}
      </span>
      <span className="mt-2 font-sans text-xs uppercase tracking-breath text-ink-muted">
        {label}
      </span>
    </div>
  );
}
