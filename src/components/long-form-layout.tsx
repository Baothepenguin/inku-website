import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { SumiBrush } from "@/components/sumi-brush";

interface Crumb {
  name: string;
  href: string;
}

export function LongFormLayout({
  eyebrow,
  title,
  subtitle,
  updated,
  authorName,
  authorSlug,
  readingTime,
  breadcrumbs,
  toc,
  sidebar,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  updated?: string;
  authorName?: string;
  authorSlug?: string;
  readingTime?: string;
  breadcrumbs?: Crumb[];
  toc?: { id: string; label: string; depth?: number }[];
  sidebar?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="pb-24">
      <header className="relative overflow-hidden border-b border-border/70 bg-cream-deep/40 py-14 md:py-20">
        <SumiBrush
          variant="sweep"
          className="pointer-events-none absolute -top-16 left-0 h-48 w-full opacity-[0.06]"
        />
        <div className="container relative">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 font-sans text-sm text-ink-muted">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <ChevronRight
                        className="h-3.5 w-3.5 text-ink-subtle"
                        aria-hidden="true"
                      />
                    )}
                    {i < breadcrumbs.length - 1 ? (
                      <Link
                        href={crumb.href}
                        className="text-ink-muted hover:text-ink"
                      >
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-ink">{crumb.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && <p className="label-eyebrow mb-4 text-matcha">{eyebrow}</p>}

          <h1 className="max-w-4xl font-serif text-display-lg font-semibold tracking-tight text-balance text-ink">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-3xl font-serif text-xl leading-relaxed text-ink-muted">
              {subtitle}
            </p>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm text-ink-muted">
            {authorName && authorSlug && (
              <Link
                href={`/authors/${authorSlug}`}
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-matcha text-[0.7rem] font-semibold text-cream">
                  {authorName.charAt(0)}
                </span>
                {authorName}
              </Link>
            )}
            {updated && <span>Updated {updated}</span>}
            {readingTime && <span>{readingTime}</span>}
          </div>
        </div>
      </header>

      <div className="container grid gap-14 py-14 md:grid-cols-[minmax(0,1fr)_280px] md:gap-20 md:py-20">
        <div className="prose-inku max-w-none">{children}</div>

        <aside className="relative md:sticky md:top-24 md:self-start">
          {toc && toc.length > 0 && (
            <nav aria-label="On this page" className="mb-10">
              <p className="label-eyebrow mb-4">On this page</p>
              <ol className="space-y-2.5 border-l border-border pl-4">
                {toc.map((entry) => (
                  <li
                    key={entry.id}
                    className="font-sans text-[0.88rem] leading-snug"
                    style={{
                      paddingLeft: entry.depth === 3 ? "0.75rem" : undefined,
                    }}
                  >
                    <a
                      href={`#${entry.id}`}
                      className="text-ink-muted hover:text-matcha"
                    >
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {sidebar}
        </aside>
      </div>
    </article>
  );
}
