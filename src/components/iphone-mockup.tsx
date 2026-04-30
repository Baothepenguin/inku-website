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
        // Bezel: thin titanium-style rim instead of a flat 10px ring.
        // Layered shadows give a real key + ambient + contact shadow
        // stack so the device floats with weight.
        "relative mx-auto aspect-[9/19.5] w-[300px] overflow-hidden rounded-[44px] bg-ink p-[5px]",
        "[box-shadow:_inset_0_0_0_1px_rgba(255,253,246,0.06),_inset_0_1px_0_0_rgba(255,253,246,0.12),_0_2px_4px_-1px_rgba(26,26,26,0.35),_0_18px_38px_-12px_rgba(26,26,26,0.45),_0_42px_70px_-30px_rgba(26,26,26,0.55)]",
        className,
      )}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      {/* Dynamic island — sits ~10px from the top with a thin inner highlight. */}
      <div className="pointer-events-none absolute left-1/2 top-[10px] z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_0_0_rgba(255,253,246,0.08)]" />
      {/* Screen surface — slightly inset from the bezel so the rim reads. */}
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-cream">
        {children}
      </div>
    </div>
  );
}
