import { DownloadCTA } from "@/components/download-cta";
import { SumiBrush } from "@/components/sumi-brush";
import { SITE } from "@/lib/site";

const INCLUDED = [
  "17 unlocked study bundles from day one",
  "515 N5 cards and 391 N4 cards",
  "4 phrase packs: casual, polite, travel, anime",
  "Bundled audio for the main card library",
  "Handwriting practice for every kana",
  "Spaced repetition tuned for adult learners",
  "Four themes: Matcha, Sakura, Sun, Moon",
  "Core reviews and progress saved on your phone",
  "One-tap flag for any card that looks wrong",
];

export function Pricing() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow mb-4 text-matcha">Inku Pro</p>
          <h2 className="font-serif text-display-md tracking-tight text-balance">
            One subscription. Everything unlocked.
          </h2>
          <p className="mt-4 font-serif text-lg text-ink-muted">
            Try Inku free for 7 days. After that, choose yearly or monthly.
            There are no ads and no extra lesson packs.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border-2 border-matcha bg-cream-raised p-8 shadow-card md:p-10">
            <SumiBrush
              variant="comma"
              className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rotate-12 opacity-[0.08]"
            />
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <p className="label-eyebrow text-matcha">Best value</p>
              <span className="rounded-full bg-matcha px-2.5 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-breath text-cream">
                Free week
              </span>
            </div>
            <h3 className="font-serif text-[1.85rem] text-ink md:text-3xl">Yearly</h3>
            <p className="mt-3 flex items-baseline font-serif text-[2.75rem] leading-none text-ink md:text-5xl">
              <span className="tabular-nums">$70.99</span>
              <span className="ml-1 font-sans text-base font-normal text-ink-muted">
                / year
              </span>
            </p>
            <p className="mt-3 font-body text-sm text-ink-muted">
              Better value if Inku becomes part of your weekly study routine.
            </p>
            <p className="mt-1 font-sans text-sm text-matcha">
              7-day free trial. No charge until day 8.
            </p>
            <DownloadCTA
              campaign="pricing-yearly"
              label="Start your free week"
              className="mt-8 w-full"
            />
          </div>

          <div className="rounded-lg border border-border bg-cream-raised p-8 md:p-10">
            <p className="label-eyebrow mb-2">Flexible</p>
            <h3 className="font-serif text-[1.85rem] text-ink md:text-3xl">Monthly</h3>
            <p className="mt-3 flex items-baseline font-serif text-[2.75rem] leading-none text-ink md:text-5xl">
              <span className="tabular-nums">$12.99</span>
              <span className="ml-1 font-sans text-base font-normal text-ink-muted">
                / month
              </span>
            </p>
            <p className="mt-3 font-body text-sm text-ink-muted">
              Cancel any billing cycle. No long commitment.
            </p>
            <p className="mt-1 font-sans text-sm text-matcha">
              Includes the same 7-day free trial.
            </p>
            <DownloadCTA
              campaign="pricing-monthly"
              label="Start your free week"
              className="mt-8 w-full"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-lg border border-border bg-cream-raised shadow-paper">
          <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex flex-col justify-between bg-ink p-8 text-cream md:p-10">
              <SumiBrush
                variant="enso"
                className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 opacity-[0.12]"
                color="#FAF8F2"
              />
              <div>
                <p className="label-eyebrow mb-4 text-cream/70">Both plans include</p>
                <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                  Everything in the app, from day one.
                </h3>
              </div>
              <p className="relative mt-8 font-sans text-sm text-cream/70">
                {SITE.pricing.trialDays}-day free trial. Cancel anytime in
                Settings.
              </p>
            </div>
            <ul className="grid gap-0 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex min-h-24 items-start gap-3 border-b border-border/70 p-5 font-serif text-[1.02rem] text-ink last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-matcha" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
