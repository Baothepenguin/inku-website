import Link from "next/link";
import { DownloadCTA } from "@/components/download-cta";

const NAV = [
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/vs", label: "Compare" },
  { href: "/jlpt", label: "JLPT" },
  { href: "/tools/hiragana-chart", label: "Tools" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-cream/80 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl tracking-tight text-ink hover:text-matcha"
          aria-label="Inku home"
        >
          <span className="jp text-[1.35rem] leading-none text-matcha">墨</span>
          <span className="font-semibold">Inku</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[0.95rem] text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/about"
            className="hidden font-sans text-sm text-ink-muted hover:text-ink md:inline-block"
          >
            About
          </Link>
          <DownloadCTA
            campaign="header"
            label="Download"
            className="px-4 py-2 text-sm"
          />
        </div>
      </div>
    </header>
  );
}
