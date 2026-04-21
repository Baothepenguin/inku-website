import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { ALTERNATIVES } from "@/lib/alternatives";

const TITLE = "Japanese Learning App Alternatives";
const SUBTITLE =
  "If your current app is not working, you have options. Five side-by-side alternatives for Duolingo, Anki, Rosetta Stone, Babbel, and Pimsleur.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "The best alternatives to Duolingo, Anki, Rosetta Stone, Babbel, and Pimsleur for learning Japanese. Honest comparisons from a founder.",
  path: "/alternatives",
});

export default function AlternativesIndexPage() {
  const entries = Object.values(ALTERNATIVES);
  return (
    <>
      <JsonLd
        id="alt-index"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Alternatives", path: "/alternatives" },
        ])}
      />
      <LongFormLayout
        eyebrow="Alternatives"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives" },
        ]}
        sidebar={<DownloadCard campaign="alt-index-sidebar" />}
      >
        <p>
          Most apps we compare against are good at something. When they stop
          being good for you, you start looking for alternatives. These pages
          are written for that moment, with an honest answer: sometimes the
          best alternative is Inku, sometimes it isn&apos;t.
        </p>

        <ul className="not-prose mt-10 grid gap-4">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/alternatives/${entry.slug}`}
                className="group block rounded-lg border border-border bg-cream-raised p-6 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <h2 className="font-serif text-xl text-ink group-hover:text-matcha">
                  The best {entry.competitorName} alternative for Japanese
                </h2>
                <p className="mt-3 font-serif text-[0.98rem] leading-snug text-ink-muted">
                  {entry.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </LongFormLayout>
    </>
  );
}
