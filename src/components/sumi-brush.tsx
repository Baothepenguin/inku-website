import { cn } from "@/lib/utils";

/**
 * Decorative SVG sumi brushstrokes. Static, not animated on initial render
 * (LCP-friendly). `variant` picks a specific stroke path.
 */
export function SumiBrush({
  variant = "sweep",
  className,
  color = "#1A1A1A",
  opacity = 0.9,
}: {
  variant?: "sweep" | "slash" | "comma" | "enso";
  className?: string;
  color?: string;
  opacity?: number;
}) {
  if (variant === "sweep") {
    return (
      <svg
        viewBox="0 0 800 100"
        className={cn(className)}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M12 62 C 110 34, 230 22, 360 30 S 620 74, 788 40"
          fill="none"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (variant === "slash") {
    return (
      <svg
        viewBox="0 0 400 400"
        className={cn(className)}
        aria-hidden="true"
      >
        <path
          d="M30 330 C 140 250, 240 180, 370 60"
          fill="none"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="28"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (variant === "comma") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={cn(className)}
        aria-hidden="true"
      >
        <path
          d="M40 50 C 120 40, 170 90, 160 140 C 140 170, 110 180, 90 170 C 120 150, 130 115, 100 95 C 70 80, 45 75, 40 50 Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    );
  }
  // enso — open circle
  return (
    <svg
      viewBox="0 0 220 220"
      className={cn(className)}
      aria-hidden="true"
    >
      <path
        d="M160 30 C 70 20, 10 80, 30 150 C 60 210, 160 210, 195 150 C 210 115, 200 75, 170 50"
        fill="none"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}
