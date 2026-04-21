import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Static iPhone 15 frame. No animation on initial paint (LCP). The <slot> fills
 * the screen area; pass either an <img> at 360 x 780 or a composed screen
 * built from inline JSX + CSS.
 */
export function IPhoneMockup({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-[300px] overflow-hidden rounded-[44px] bg-ink shadow-card",
        "ring-[10px] ring-ink/90",
        className,
      )}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      {/* Dynamic island */}
      <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
      {/* Screen surface */}
      <div className="absolute inset-[2px] overflow-hidden rounded-[36px] bg-cream">
        {children}
      </div>
    </div>
  );
}
