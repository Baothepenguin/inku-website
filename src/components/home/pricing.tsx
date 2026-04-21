import { DownloadCTA } from "@/components/download-cta";
import { SumiBrush } from "@/components/sumi-brush";

const INCLUDED = [
  "All six decks: hiragana, katakana, N5 vocab, casual, polite, travel",
  "Native voice acting on every card",
  "Handwriting practice for every kana",
  "Spaced repetition tuned for adult learners",
  "Four themes: Matcha, Sakura, Sun, Moon",
  "Works offline; your progress lives on your phone",
  "One-tap flag for any card that looks wrong",
  "New N4 vocabulary landing every month",
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
            No chapters to grind, no ads, no upsells. Start with a 7-day free
            trial. Cancel from Settings with two taps if it is not for you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border-2 border-matcha bg-cream-raised p-8 shadow-card md:p-10">
            <SumiBrush
              variant="comma"
              className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rotate-12 opacity-[0.08]"
            />
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <p className="label-eyebrow text-matcha">Best value</p>
              <span className="rounded-full bg-matcha px-2.5 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-breath text-cream">
                Save 50%
              </span>
            </div>
            <h3 className="font-serif text-[1.85rem] text-ink md:text-3xl">Yearly</h3>
            <p className="mt-3 flex items-baseline font-serif text-[2.75rem] leading-none text-ink md:text-5xl">
              <span className="tabular-nums">$29.99</span>
              <span className="ml-1 font-sans text-base font-normal text-ink-muted">
                / year
              </span>
            </p>
            <p className="mt-3 font-body text-sm text-ink-muted">
              That is $2.50 a month, billed once a year.
            </p>
            <p className="mt-1 font-sans text-sm text-matcha">
              7-day free trial. No charge until day 8.
            </p>
            <DownloadCTA
              campaign="pricing-yearly"
              label="Start free trial"
              className="mt-8 w-full"
            />
          </div>

          <div className="rounded-lg border border-border bg-cream-raised p-8 md:p-10">
            <p className="label-eyebrow mb-2">Flexible</p>
            <h3 className="font-serif text-[1.85rem] text-ink md:text-3xl">Monthly</h3>
            <p className="mt-3 flex items-baseline font-serif text-[2.75rem] leading-none text-ink md:text-5xl">
              <span className="tabular-nums">$4.99</span>
              <span className="ml-1 font-sans text-base font-normal text-ink-muted">
                / month
              </span>
            </p>
            <p className="mt-3 font-body text-sm text-ink-muted">
              Cancel any billing cycle. No long commitment.
            </p>
            <p className="mt-1 font-sans text-sm text-ink-subtle">
              No trial on monthly plans (Apple rule).
            </p>
            <DownloadCTA
              campaign="pricing-monthly"
              label="Get the monthly plan"
              className="mt-8 w-full"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-lg border border-border bg-cream-raised p-8 md:p-10">
          <p className="label-eyebrow mb-5">Both plans include</p>
          <ul className="grid gap-3 md:grid-cols-2">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-serif text-[1.02rem] text-ink"
              >
                <span className="jp mt-0.5 text-matcha">・</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
