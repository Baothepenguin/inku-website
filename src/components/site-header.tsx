"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <header className="sticky top-0 z-30 px-3 pt-3">
      <div className="container flex h-16 items-center justify-between gap-6 rounded-full border border-border/70 bg-cream/86 px-4 shadow-[0_18px_45px_-32px_rgba(26,26,26,0.5)] backdrop-blur supports-[backdrop-filter]:bg-cream/78 md:px-5">
        <Link
          href="/"
          className="group flex items-center gap-2 font-serif text-xl tracking-tight text-ink transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-matcha"
          aria-label="Inku home"
        >
          <LogoMark className="bg-matcha text-cream transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
          <span className="font-semibold">Inku</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 font-sans text-[0.95rem] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                pathname === item.href
                  ? "bg-cream-deep text-ink"
                  : "text-ink-muted hover:bg-cream-deep/70 hover:text-ink"
              }`}
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
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cream-raised text-ink transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-matcha hover:text-matcha active:scale-[0.98] md:hidden"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-primary-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute h-px w-4 bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-primary-nav"
        className={`mx-3 mt-2 rounded-3xl border border-border/70 bg-cream-raised/95 px-5 py-4 shadow-paper backdrop-blur md:hidden ${
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
