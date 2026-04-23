import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-cream",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <path
          d="M16 3.5c4.1 4.9 7.8 9.1 7.8 14.4 0 5-3.4 8.6-7.8 8.6s-7.8-3.6-7.8-8.6c0-5.3 3.7-9.5 7.8-14.4Z"
          fill="currentColor"
        />
        <path
          d="M12.6 18.2c.2 2.9 1.7 4.4 4.1 4.8"
          stroke="#FAF8F2"
          strokeLinecap="round"
          strokeWidth="1.6"
          opacity="0.55"
        />
      </svg>
    </span>
  );
}
