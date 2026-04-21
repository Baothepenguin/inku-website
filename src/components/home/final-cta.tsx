import { DownloadCTA } from "@/components/download-cta";
import { SumiBrush } from "@/components/sumi-brush";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <SumiBrush
        variant="sweep"
        className="pointer-events-none absolute -top-10 left-0 h-48 w-full opacity-[0.05]"
      />
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-ink px-7 py-14 text-cream md:px-14 md:py-20">
          <p className="label-eyebrow mb-5 text-matcha">Ten minutes a day</p>
          <h2 className="font-serif text-display-md tracking-tight text-cream text-balance">
            Let Japanese happen slowly, on paper-coloured glass.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-cream/80 text-pretty">
            Download Inku, spend a week with it, and see if it fits your life.
            If it does not, cancel the trial and no harm done.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <DownloadCTA campaign="final-cta" variant="badge" />
            <a
              href="/guides/learn-hiragana"
              className="font-sans text-sm text-cream/70 underline underline-offset-[5px] hover:text-cream"
            >
              Read the hiragana guide first →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
