import { cn } from "@/lib/utils";

/**
 * Red Japanese square seal (角印 / kakuin). Used as a visual stamp of
 * approval — currently on the pricing "Best value" card. Treated as
 * decoration, with the human-readable label still rendered as
 * accessible text via the `srOnly` prop.
 *
 * The faux-stamp is built from CSS rather than an image so it scales,
 * stays sharp on retina, and inherits brand colors.
 */
export function HankoStamp({
  text = "推奨",
  srOnly,
  className,
  rotate = -8,
}: {
  /** Up to 4 Japanese characters that read top-down, right-to-left. */
  text?: string;
  /** Plain-English label read by screen readers. */
  srOnly?: string;
  className?: string;
  /** Stamp tilt in degrees. -8 reads hand-pressed, 0 reads sterile. */
  rotate?: number;
}) {
  const characters = Array.from(text).slice(0, 4);
  // Lay out as a 2-column right-to-left grid so 推 sits top-right and
  // 奨 sits bottom-left — the canonical reading order for a kakuin.
  const padded = [...characters];
  while (padded.length < 4) padded.push("");

  return (
    <div
      aria-hidden={srOnly ? undefined : true}
      role={srOnly ? "img" : undefined}
      aria-label={srOnly}
      className={cn(
        "select-none",
        "[--stamp-color:theme(colors.sakura.DEFAULT)]",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="grid h-[78px] w-[78px] grid-cols-2 grid-rows-2 place-items-center rounded-[6px] border-[3px] p-[6px] font-serif"
        style={{
          borderColor: "var(--stamp-color)",
          color: "var(--stamp-color)",
          // Slight uneven ink-pressure: a soft inner shadow + tiny
          // outer shadow makes the stamp read as pressed rather than
          // printed.
          boxShadow:
            "inset 0 0 6px 0 rgba(199,62,45,0.25), 0 1px 0 0 rgba(0,0,0,0.04)",
          // CSS-only "uneven ink" — a subtle radial mask gives the
          // stamp the slight fade of physical ink on paper.
          maskImage:
            "radial-gradient(circle at 35% 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.7) 100%)",
        }}
      >
        {/* Read right-to-left, top-to-bottom: 0,1 / 2,3 → grid order
            should be 1,0 / 3,2 in column terms. We write CSS so the
            second character of each row appears in the left column. */}
        <span className="jp col-start-2 row-start-1 text-[1.45rem] leading-none">
          {padded[0]}
        </span>
        <span className="jp col-start-1 row-start-1 text-[1.45rem] leading-none">
          {padded[1]}
        </span>
        <span className="jp col-start-2 row-start-2 text-[1.45rem] leading-none">
          {padded[2]}
        </span>
        <span className="jp col-start-1 row-start-2 text-[1.45rem] leading-none">
          {padded[3]}
        </span>
      </div>
    </div>
  );
}
