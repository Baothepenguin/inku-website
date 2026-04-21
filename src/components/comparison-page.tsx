import Link from "next/link";
import { ChevronRight, Check, X, Minus } from "lucide-react";
import { DownloadCard } from "@/components/download-card";
import { QuoteBlock } from "@/components/quote-block";
import { LongFormLayout } from "@/components/long-form-layout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  productComparisonSchema,
} from "@/lib/schema";
import type { ComparisonRecord } from "@/lib/comparisons";

export function ComparisonPage({ data }: { data: ComparisonRecord }) {
  const title = `Inku vs ${data.competitorName} for Japanese`;
  const subtitle = data.tagline;
  const slug = `/vs/${data.slug}`;

  return (
    <>
      <JsonLd
        id={`vs-${data.slug}`}
        data={[
          articleSchema({
            title,
            description: subtitle,
            slug,
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 2800,
          }),
          productComparisonSchema({
            name: title,
            description: subtitle,
            slug,
            competitorName: data.competitorName,
          }),
          faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/vs" },
            { name: data.competitorName, path: slug },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow={`Inku vs ${data.competitorShortName}`}
        title={title}
        subtitle={subtitle}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="12 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/vs" },
          { name: data.competitorName, href: slug },
        ]}
        toc={[
          { id: "intro", label: "Intro" },
          { id: "inku-wins", label: "When Inku is the better pick" },
          { id: "competitor-wins", label: `When ${data.competitorShortName} wins` },
          { id: "features", label: "Feature-by-feature" },
          { id: "honest-take", label: "The honest take" },
          { id: "verdict", label: "Verdict" },
          { id: "faqs", label: "Common questions" },
        ]}
        sidebar={<DownloadCard campaign={`vs-${data.slug}`} />}
      >
        <section id="summary" className="not-prose mb-10 rounded-lg border border-border bg-cream-raised p-8">
          <p className="label-eyebrow mb-3 text-matcha">Short answer</p>
          <p className="font-serif text-[1.1rem] leading-relaxed text-ink">
            {data.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-ink-muted">
            <span>
              <strong className="text-ink">Category:</strong>{" "}
              {data.competitorCategory}
            </span>
            <span>
              <strong className="text-ink">Pricing:</strong>{" "}
              {data.competitorPricing}
            </span>
            {data.releaseYear && (
              <span>
                <strong className="text-ink">Since:</strong> {data.releaseYear}
              </span>
            )}
          </div>
        </section>

        <h2 id="intro">Intro</h2>
        <p>{data.intro}</p>

        <h2 id="inku-wins">When Inku is the better pick</h2>
        <ul>
          {data.inkuWins.map((item) => (
            <li key={item.scenario}>
              <strong>{item.scenario}.</strong> {item.explanation}
            </li>
          ))}
        </ul>

        <h2 id="competitor-wins">
          When {data.competitorShortName} is the better pick
        </h2>
        <ul>
          {data.competitorWins.map((item) => (
            <li key={item.scenario}>
              <strong>{item.scenario}.</strong> {item.explanation}
            </li>
          ))}
        </ul>

        <h2 id="features">Feature-by-feature</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-[0.96rem]">
            <thead className="bg-cream-deep text-left">
              <tr>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Feature
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink">
                  Inku
                </th>
                <th className="border-b border-border px-4 py-3 font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  {data.competitorShortName}
                </th>
                <th className="border-b border-border px-4 py-3 text-center font-sans text-xs font-medium uppercase tracking-breath text-ink-muted">
                  Winner
                </th>
              </tr>
            </thead>
            <tbody>
              {data.features.map((row) => (
                <tr key={row.feature}>
                  <td className="border-b border-border px-4 py-3 align-top font-sans font-medium text-ink">
                    {row.feature}
                  </td>
                  <td className="border-b border-border px-4 py-3 align-top text-ink">
                    {row.inku}
                  </td>
                  <td className="border-b border-border px-4 py-3 align-top text-ink">
                    {row.competitor}
                  </td>
                  <td className="border-b border-border px-4 py-3 text-center">
                    {row.winner === "inku" && (
                      <Check
                        className="inline h-4 w-4 text-matcha"
                        aria-label="Inku wins"
                      />
                    )}
                    {row.winner === "competitor" && (
                      <X
                        className="inline h-4 w-4 text-sakura"
                        aria-label={`${data.competitorShortName} wins`}
                      />
                    )}
                    {row.winner === "tie" && (
                      <Minus
                        className="inline h-4 w-4 text-ink-subtle"
                        aria-label="Tie"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="not-prose mt-3 font-sans text-xs text-ink-subtle">
          <Check className="inline h-3.5 w-3.5 text-matcha" /> Inku&apos;s
          favor · <X className="inline h-3.5 w-3.5 text-sakura" />{" "}
          {data.competitorShortName}&apos;s favor ·{" "}
          <Minus className="inline h-3.5 w-3.5 text-ink-subtle" /> roughly
          even
        </p>

        <h2 id="honest-take">The honest take</h2>
        <p>{data.honestTake}</p>

        <h2 id="verdict">Verdict</h2>
        <p className="font-serif text-[1.08rem] leading-relaxed">
          {data.verdict}
        </p>
        <p className="mt-4">{data.recommendation}</p>

        <QuoteBlock
          quote="I came from this app, bounced off, and Inku gave me something I could actually finish. That is the whole pitch."
          attribution={`A learner who tried ${data.competitorShortName} first`}
          eyebrow="From a learner"
          className="my-10"
        />

        <h2 id="faqs">Common questions</h2>
        <div className="not-prose mt-6 space-y-4">
          {data.faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-border bg-cream-raised p-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-serif text-lg text-ink">
                {faq.q}
                <span className="mt-1 shrink-0 font-sans text-xl text-matcha transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-serif text-[1rem] leading-relaxed text-ink-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-10">
          See more comparisons:{" "}
          <Link href="/vs">all comparison pages</Link>. Or start with{" "}
          <Link href="/guides/how-to-learn-japanese">
            the full learning roadmap
          </Link>
          .
        </p>

        <p className="mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-sans font-medium text-matcha hover:underline"
          >
            Try Inku free for 7 days
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </LongFormLayout>
    </>
  );
}
