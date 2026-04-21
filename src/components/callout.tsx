import { cn } from "@/lib/utils";
import { Info, Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";

type Tone = "note" | "tip" | "warning" | "success";

const TONE_STYLES: Record<
  Tone,
  { bg: string; border: string; icon: React.ComponentType<{ className?: string }>; iconColor: string; label: string }
> = {
  note: {
    bg: "bg-cream-deep/50",
    border: "border-ink-subtle/30",
    icon: Info,
    iconColor: "text-ink",
    label: "Note",
  },
  tip: {
    bg: "bg-matcha-tint/50",
    border: "border-matcha/40",
    icon: Lightbulb,
    iconColor: "text-matcha-deep",
    label: "Tip",
  },
  warning: {
    bg: "bg-sun/10",
    border: "border-sun/50",
    icon: AlertTriangle,
    iconColor: "text-sun-deep",
    label: "Watch out",
  },
  success: {
    bg: "bg-matcha/10",
    border: "border-matcha/40",
    icon: CheckCircle2,
    iconColor: "text-matcha-deep",
    label: "Takeaway",
  },
};

export function Callout({
  tone = "note",
  title,
  children,
  className,
}: {
  tone?: Tone;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const style = TONE_STYLES[tone];
  const Icon = style.icon;
  return (
    <div
      className={cn(
        "not-prose my-7 rounded-lg border px-6 py-5",
        style.bg,
        style.border,
        className,
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon className={cn("h-4 w-4", style.iconColor)} aria-hidden="true" />
        <p className="label-eyebrow">{title ?? style.label}</p>
      </div>
      <div className="font-serif text-[1.02rem] leading-relaxed text-ink">
        {children}
      </div>
    </div>
  );
}
