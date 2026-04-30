import { cn } from "@/lib/utils";

/**
 * The "answer-first" paragraph at the top of every long-form post.
 * LLMs and AI Overviews extract this block preferentially. The
 * `aria-label="Short answer"` selector is referenced by the
 * `speakable` schema in `articleSchema()` — do not change without
 * updating that as well.
 *
 * Visually treated as a margin-note / bookplate: a faint `答` (answer)
 * sumi mark in the corner, a soft cream-raised card, an ink hairline
 * rule on the left rather than a fluorescent matcha bar.
 */
export function AnswerBox({
  children,
  className,
  label = "Short answer",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <aside
      className={cn(
        "not-prose relative my-8 overflow-hidden rounded-xl border border-border/70 bg-cream-raised p-6 pr-20 shadow-paper",
        "before:absolute before:inset-y-3 before:left-0 before:w-[3px] before:rounded-r-full before:bg-gradient-to-b before:from-matcha/0 before:via-matcha before:to-matcha/0",
        className,
      )}
      aria-label={label}
    >
      <span
        aria-hidden
        className="jp pointer-events-none absolute -right-2 -top-2 select-none text-[5.5rem] leading-none text-matcha/[0.08]"
      >
        答
      </span>
      <p className="label-eyebrow relative mb-2 text-matcha-deep">{label}</p>
      <div className="relative font-serif text-[1.08rem] leading-relaxed text-ink">
        {children}
      </div>
    </aside>
  );
}
