import { cn } from "@/lib/utils";
import { SumiBrush } from "@/components/sumi-brush";

export function QuoteBlock({
  quote,
  attribution,
  eyebrow = "From a learner",
  className,
}: {
  quote: string;
  attribution: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-cream-raised p-10 md:p-14",
        className,
      )}
    >
      <SumiBrush
        variant="comma"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-[18deg] opacity-[0.06]"
      />
      <p className="label-eyebrow mb-6">{eyebrow}</p>
      <blockquote className="font-body text-[1.3rem] italic leading-[1.4] text-ink md:text-[1.65rem] md:leading-[1.35] text-pretty">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 font-sans text-sm text-ink-muted">
        {attribution}
      </figcaption>
    </figure>
  );
}
