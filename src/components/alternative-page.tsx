import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  productComparisonSchema,
} from "@/lib/schema";
import type { AlternativeRecord } from "@/lib/alternatives";

export function AlternativePage({ data }: { data: AlternativeRecord }) {
  const title = `The Best ${data.competitorName} Alternative for Japanese`;
  const slug = `/alternatives/${data.slug}`;

  return (
    <>
      <JsonLd
        id={`alt-${data.slug}`}
        data={[
          articleSchema({
            title,
            description: data.summary,
            slug,
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 2400,
          }),
          productComparisonSchema({
            name: title,
            description: data.summary,
            slug,
            competitorName: data.competitorName,
          }),
          faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Alternatives", path: "/alternatives" },
            { name: data.competitorName, path: slug },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow={`${data.competitorName} alternative`}
        title={title}
        subtitle={data.tagline}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="10 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives" },
          { name: data.competitorName, href: slug },
        ]}
        toc={[
          { id: "why", label: "Why you are searching" },
          { id: "what", label: `What to look for` },
          { id: "differs", label: "How Inku is different" },
          { id: "faqs", label: "Common questions" },
        ]}
        sidebar={<DownloadCard campaign={`alt-${data.slug}`} />}
      >
        <AnswerBox>{data.summary}</AnswerBox>

        <p>{data.intro}</p>

        <h2 id="why">Why you are probably searching this</h2>
        <p>
          The usual path to looking for a {data.competitorName} alternative
          goes through at least one of these:
        </p>
        <ul>
          {data.whySearching.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2 id="what">What a good alternative looks like</h2>
        <p>{data.whatLooksLike}</p>

        <h2 id="differs">How Inku is different</h2>
        <ol>
          {data.howInkuDiffers.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ol>

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
          See our full{" "}
          <Link href={`/vs/${data.slug}`}>
            Inku vs {data.competitorName} comparison
          </Link>{" "}
          for a feature-by-feature breakdown, or{" "}
          <Link href="/">start a 7-day free trial of Inku</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
