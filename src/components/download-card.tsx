import { DownloadCTA } from "@/components/download-cta";
import { SumiBrush } from "@/components/sumi-brush";

export function DownloadCard({
  title = "Learn it on paper-coloured glass.",
  body = "Inku has kana, words, and phrases with audio-supported review. 7-day free trial, iPhone only.",
  campaign = "inline-sidebar",
}: {
  title?: string;
  body?: string;
  campaign?: string;
}) {
  return (
    <aside className="relative overflow-hidden rounded-lg border border-border bg-cream-raised p-6 shadow-paper">
      <SumiBrush
        variant="comma"
        className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 opacity-[0.08]"
      />
      <p className="label-eyebrow mb-3 text-matcha">Get the app</p>
      <h3 className="font-serif text-[1.25rem] leading-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 font-serif text-[0.95rem] leading-relaxed text-ink-muted">
        {body}
      </p>
      <DownloadCTA
        campaign={campaign}
        label="Start your free week"
        className="mt-5 w-full text-sm"
      />
    </aside>
  );
}
