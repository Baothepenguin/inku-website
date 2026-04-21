import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { GUIDE_POSTS } from "@/lib/posts";

const TITLE = "Japanese Learning Guides";
const SUBTITLE =
  "Six long-form guides that cover everything Inku teaches, end to end. Written from the founder's own path through the language.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Long-form guides to learning Japanese: hiragana, katakana, N5 vocabulary, spaced repetition, particles, and an honest roadmap.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        id="guides-index"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <LongFormLayout
        eyebrow="Guides"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
        sidebar={<DownloadCard campaign="guides-index-sidebar" />}
      >
        <p>
          These are the pillars. Each one stands alone, and together they map a
          path from zero Japanese to comfortable N5 reading and listening. They
          are long because Japanese deserves the room.
        </p>

        <ul className="not-prose mt-10 grid gap-4">
          {GUIDE_POSTS.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={guide.slug}
                className="group block rounded-lg border border-border bg-cream-raised p-7 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-serif text-2xl text-ink group-hover:text-matcha">
                    {guide.title}
                  </h2>
                  <span className="whitespace-nowrap font-sans text-xs uppercase tracking-breath text-ink-subtle">
                    {guide.readingTime}
                  </span>
                </div>
                <p className="mt-3 font-serif text-[1.02rem] leading-relaxed text-ink-muted">
                  {guide.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-cream px-3 py-1 font-sans text-[0.72rem] uppercase tracking-breath text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </LongFormLayout>
    </>
  );
}
