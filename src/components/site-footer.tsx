import Link from "next/link";
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
    <footer className="mt-32 border-t border-border/70 bg-cream-deep/40">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl text-ink">
              <span className="jp text-[1.35rem] text-matcha">墨</span>
              <span className="font-semibold">Inku</span>
            </Link>
            <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-ink-muted">
              A calm way to learn Japanese. Built in Calgary by{" "}
              {SITE.operator.legalName}, one quiet screen at a time.
            </p>
            <p className="mt-6 label-eyebrow">Available on iPhone</p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="label-eyebrow mb-3">{section.title}</p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-[0.92rem] text-ink-muted transition-colors hover:text-ink"
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

        <div className="section-divider mt-12" />

        <div className="mt-6 flex flex-col gap-2 text-[0.82rem] text-ink-subtle md:flex-row md:items-center md:justify-between">
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
