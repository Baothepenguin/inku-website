import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  handle?: string;
  platform: "instagram" | "tiktok" | "twitter" | "reddit";
  href: string;
  accent?: "matcha" | "sakura" | "sun" | "ink";
  /** background style — gradient angle index 0 .. 5 */
  bgIndex?: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Finally an app that doesn't treat me like a six-year-old. I opened it, learned 20 kana, closed it, kept my day.",
    author: "Priya N.",
    handle: "@priyalearns",
    platform: "instagram",
    href: "https://www.instagram.com/",
    accent: "matcha",
    bgIndex: 0,
  },
  {
    quote:
      "The voice acting is a real human. I stopped second-guessing my pronunciation on day three.",
    author: "Marcos D.",
    handle: "@marcosreads",
    platform: "tiktok",
    href: "https://www.tiktok.com/",
    accent: "sakura",
    bgIndex: 1,
  },
  {
    quote:
      "I was an Anki person. I switched because Inku already had the cards I would have made, and the pronunciation I couldn't.",
    author: "Jen W.",
    handle: "@jwlanguage",
    platform: "twitter",
    href: "https://twitter.com/",
    accent: "ink",
    bgIndex: 2,
  },
  {
    quote:
      "No streaks, no pressure. I do 10 minutes before bed and I actually remember what I learned.",
    author: "Tomás R.",
    handle: "@tomaswords",
    platform: "instagram",
    href: "https://www.instagram.com/",
    accent: "sun",
    bgIndex: 3,
  },
  {
    quote:
      "The handwriting practice is the first tool that has actually made katakana stick for me.",
    author: "Ana K.",
    handle: "u/anak_",
    platform: "reddit",
    href: "https://www.reddit.com/r/LearnJapanese/",
    accent: "matcha",
    bgIndex: 4,
  },
  {
    quote:
      "It looks like a piece of stationery. I keep opening it because it feels good to hold.",
    author: "Dev P.",
    handle: "@dev.reads",
    platform: "instagram",
    href: "https://www.instagram.com/",
    accent: "sakura",
    bgIndex: 5,
  },
];

const BG_STYLES: string[] = [
  "bg-gradient-to-br from-matcha/80 via-matcha to-matcha-deep",
  "bg-gradient-to-tr from-sakura/80 via-sakura to-sakura/60",
  "bg-gradient-to-br from-ink via-ink to-ink/85",
  "bg-gradient-to-br from-sun/70 via-sun to-sun-deep",
  "bg-gradient-to-br from-matcha-light via-matcha to-matcha-deep",
  "bg-gradient-to-tr from-sakura-soft via-sakura to-sakura/80",
];

/**
 * Calai-style asymmetric testimonial wall. Cards are real-looking social
 * pull-quotes, each linked to its source platform. Placeholder gradient
 * backgrounds stand in for video stills until real UGC lands.
 */
export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
      {TESTIMONIALS.map((t, i) => (
        <TestimonialCard key={i} t={t} span={SPANS[i]} />
      ))}
    </div>
  );
}

const SPANS = [
  "md:row-span-2", // tall left
  "",
  "md:row-span-2", // tall right
  "",
  "md:col-span-1",
  "md:col-span-1",
];

function TestimonialCard({ t, span }: { t: Testimonial; span: string }) {
  return (
    <a
      href={t.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden rounded-lg shadow-card transition-transform hover:-translate-y-0.5",
        BG_STYLES[t.bgIndex ?? 0],
        span,
      )}
      aria-label={`Testimonial from ${t.author} on ${t.platform}`}
    >
      {/* subtle paper grain over gradient */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' seed='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="relative flex h-full min-h-[240px] flex-col justify-between gap-6 p-6 text-cream">
        <p className="font-body text-[1rem] italic leading-[1.45] md:text-[1.1rem] md:leading-[1.4] text-pretty">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-sans text-sm font-medium">{t.author}</p>
            {t.handle && (
              <p className="truncate font-sans text-xs opacity-80">
                {t.handle}
              </p>
            )}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-cream/20 px-2.5 py-1 font-sans text-[0.68rem] uppercase tracking-breath backdrop-blur">
            {t.platform}
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
