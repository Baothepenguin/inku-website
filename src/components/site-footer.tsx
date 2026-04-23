import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { SITE } from "@/lib/site";

const SECTIONS = [
  {
    title: "Learn",
    links: [
      { href: "/guides/learn-hiragana", label: "Learn hiragana" },
      { href: "/guides/learn-katakana", label: "Learn katakana" },
      { href: "/guides/jlpt-n5-vocabulary", label: "JLPT N5 vocabulary" },
      { href: "/guides/how-to-learn-japanese", label: "How to learn Japanese" },
      { href: "/guides/spaced-repetition-explained", label: "Spaced repetition" },
      { href: "/guides/japanese-particles-masterclass", label: "Particles" },
    ],
  },
  {
    title: "Compare",
    links: [
      { href: "/vs/duolingo", label: "Inku vs Duolingo" },
      { href: "/vs/anki", label: "Inku vs Anki" },
      { href: "/vs/wanikani", label: "Inku vs WaniKani" },
      { href: "/vs/bunpo", label: "Inku vs Bunpo" },
      { href: "/vs/renshuu", label: "Inku vs Renshuu" },
      { href: "/alternatives/duolingo", label: "Duolingo alternative" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/tools/hiragana-chart", label: "Hiragana chart" },
      { href: "/tools/katakana-chart", label: "Katakana chart" },
      { href: "/tools/stroke-order", label: "Stroke order" },
      { href: "/tools/kana-quiz", label: "Kana quiz" },
      { href: "/tools/japanese-name-generator", label: "Japanese name generator" },
    ],
  },
  {
    title: "Inku",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: `mailto:${SITE.supportEmail}`, label: SITE.supportEmail },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-ink text-cream">
      <svg
        aria-hidden="true"
        viewBox="0 0 520 260"
        className="pointer-events-none absolute -left-20 top-4 h-72 w-[34rem] text-cream opacity-[0.045]"
        fill="currentColor"
      >
        <path d="M90 135c26-52 74-76 128-69 62 8 87 59 151 62 52 2 83-26 119-55-13 62-46 110-101 137-74 36-170 19-240-10-43-18-70-35-57-65Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 180 180"
        className="pointer-events-none absolute bottom-8 right-10 h-32 w-32 text-matcha opacity-20"
        fill="currentColor"
      >
        <path d="M91 15c28 35 52 64 52 99 0 31-22 52-52 52s-52-21-52-52c0-35 24-64 52-99Z" />
      </svg>
      <div className="container relative py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl text-cream">
              <LogoMark className="bg-cream text-ink" />
              <span className="font-semibold">Inku</span>
            </Link>
            <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-cream/70">
              A calm way to learn Japanese. Built in Calgary by{" "}
              {SITE.operator.legalName}, one quiet screen at a time.
            </p>
            <p className="mt-6 label-eyebrow text-cream/50">Available on iPhone</p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="label-eyebrow mb-3 text-cream/50">{section.title}</p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-[0.92rem] text-cream/70 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent" />

        <div className="mt-6 flex flex-col gap-2 text-[0.82rem] text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; 2026 {SITE.operator.legalName}, sole proprietor. Operated
            from Calgary, Alberta, Canada.
          </p>
          <p>
            Inku is not affiliated with Duolingo, Anki, WaniKani, Bunpo, or any
            other app referenced here.
          </p>
        </div>
      </div>
    </footer>
  );
}
