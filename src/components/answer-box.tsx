import { cn } from "@/lib/utils";

/**
 * The "answer-first" paragraph at the top of every long-form post.
 * LLMs and AI Overviews extract this block preferentially. Keep it short,
 * direct, and factually specific.
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
        "not-prose my-8 rounded-lg border-l-4 border-matcha bg-matcha-tint/40 p-6",
        className,
      )}
      aria-label={label}
    >
      <p className="label-eyebrow mb-2 text-matcha-deep">{label}</p>
      <div className="font-serif text-[1.05rem] leading-relaxed text-ink">
        {children}
      </div>
    </aside>
  );
}
