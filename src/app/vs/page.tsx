import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { COMPARISONS } from "@/lib/comparisons";

const TITLE = "Inku vs every Japanese learning app";
const SUBTITLE =
  "Nine honest side-by-side comparisons. Where Inku wins, where it loses, which app is right for your stage.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Compare Inku to Duolingo, Anki, WaniKani, Bunpo, LingoDeer, Renshuu, Busuu, Lingopie, and Noji. Honest feature-by-feature breakdowns.",
  path: "/vs",
});

export default function VsIndexPage() {
  const entries = Object.values(COMPARISONS);
  return (
    <>
      <JsonLd
        id="vs-index"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
        ])}
      />
      <LongFormLayout
        eyebrow="Comparisons"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/vs" },
        ]}
        sidebar={<DownloadCard campaign="vs-index-sidebar" />}
      >
        <p>
          If you are weighing Inku against another Japanese app, start here.
          Every comparison includes a feature-by-feature table, scenarios
          where each app wins, and an honest note on where Inku loses.
        </p>
        <p>
          We&apos;re not trying to win every matchup. We&apos;re trying to
          be the clearest signal for whether Inku is right for you.
        </p>

        <ul className="not-prose mt-10 grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/vs/${entry.slug}`}
                className="group block rounded-lg border border-border bg-cream-raised p-6 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif text-xl text-ink group-hover:text-matcha">
                    Inku vs {entry.competitorName}
                  </h2>
                  <span className="whitespace-nowrap font-sans text-xs uppercase tracking-breath text-ink-subtle">
                    {entry.competitorCategory}
                  </span>
                </div>
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
