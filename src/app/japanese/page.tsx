import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { TOPICS } from "@/lib/topics";

const TITLE = "Japanese: Topic Hubs";
const SUBTITLE =
  "Short orientations to every major area of Japanese. Start here if you want a map of the terrain.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Quick-start hubs for hiragana, katakana, kanji, particles, grammar, pronunciation, and phrases. The back of the book for all things Japanese.",
  path: "/japanese",
});

export default function JapaneseHubPage() {
  const entries = Object.values(TOPICS);
  return (
    <>
      <JsonLd
        id="japanese-hub"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Japanese", path: "/japanese" },
        ])}
      />
      <LongFormLayout
        eyebrow="Topic hubs"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Japanese", href: "/japanese" },
        ]}
        sidebar={<DownloadCard campaign="japanese-hub" />}
      >
        <p>
          Each of these is a compact briefing on an area of Japanese. The
          deep work lives in the pillar{" "}
          <Link href="/guides">guides</Link>; these hubs are the map.
        </p>

        <ul className="not-prose mt-10 grid gap-4 md:grid-cols-2">
          {entries.map((topic) => (
            <li key={topic.slug}>
              <Link
                href={`/japanese/${topic.slug}`}
                className="group block rounded-lg border border-border bg-cream-raised p-6 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <h2 className="font-serif text-xl text-ink group-hover:text-matcha">
                  {topic.title}
                </h2>
                <p className="mt-2 font-serif text-[0.98rem] leading-snug text-ink-muted">
                  {topic.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </LongFormLayout>
    </>
  );
}
