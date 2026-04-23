import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FeatureRowProps {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function FeatureRow({
  eyebrow,
  title,
  body,
  children,
  reverse = false,
  className,
}: FeatureRowProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] md:gap-16",
        reverse && "md:[&>*:first-child]:order-2",
        className,
      )}
    >
      <div className="max-w-[44ch]">
        {eyebrow && <p className="label-eyebrow mb-4">{eyebrow}</p>}
        <h2 className="font-serif text-display-md tracking-tight text-balance">
          {title}
        </h2>
        <div className="prose-inku mt-5 max-w-none">{body}</div>
      </div>
      <div className="flex w-full items-center justify-center md:min-h-[560px]">
        {children}
      </div>
    </div>
  );
}
