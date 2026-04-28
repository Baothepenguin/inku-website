import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/answer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Free Japanese learning tools",
  description:
    "Free Japanese tools for kana, stroke order, quizzes, and Japanese name practice.",
  path: "/tools",
});

const TOOLS = [
  { href: "/tools/hiragana-chart", title: "Hiragana chart" },
  { href: "/tools/katakana-chart", title: "Katakana chart" },
  { href: "/tools/kana-quiz", title: "Kana quiz" },
  { href: "/tools/stroke-order", title: "Stroke order guide" },
  { href: "/tools/japanese-name-generator", title: "Japanese name generator" },
];

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        id="tools"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
        ])}
      />
      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="label-eyebrow mb-4 text-matcha">Japanese tools</p>
          <h1 className="font-serif text-display-md tracking-tight text-ink">
            Free tools for early Japanese study.
          </h1>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink-muted">
            Use these simple tools to practice kana, stroke order, and names.
          </p>
          <AnswerBox>
            Start with the hiragana chart, then use the katakana chart, kana
            quiz, and stroke order guide. These free tools help you practice the
            first reading and writing skills you need before daily flashcard
            review.
          </AnswerBox>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-lg border border-border bg-cream-raised p-5 font-serif text-xl text-ink shadow-paper transition hover:-translate-y-0.5 hover:border-matcha"
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
