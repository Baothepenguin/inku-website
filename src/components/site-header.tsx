"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { DownloadCTA } from "@/components/download-cta";
import { LogoMark } from "@/components/logo-mark";

const NAV = [
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/vs", label: "Compare" },
  { href: "/jlpt", label: "JLPT" },
  { href: "/tools/hiragana-chart", label: "Tools" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-cream/80 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl tracking-tight text-ink hover:text-matcha"
          aria-label="Inku home"
        >
          <LogoMark className="bg-matcha text-cream" />
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
          <DownloadCTA
            campaign="header"
            label="Download now"
            className="px-3 py-2 text-sm sm:px-4"
          />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-cream-raised text-ink transition-colors hover:border-matcha hover:text-matcha md:hidden"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-primary-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-primary-nav"
        className={`border-t border-border/60 bg-cream-raised/95 px-5 py-4 shadow-paper md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-sm flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 font-sans text-base font-medium text-ink transition-colors hover:bg-cream-deep hover:text-matcha"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
