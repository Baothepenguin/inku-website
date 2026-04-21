import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { TOPICS } from "@/lib/topics";

export async function generateStaticParams() {
  return Object.keys(TOPICS).map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const data = TOPICS[topic];
  if (!data) return {};
  return pageMetadata({
    title: data.title,
    description: data.summary,
    path: `/japanese/${topic}`,
    keywords: [data.title.toLowerCase(), `Japanese ${topic}`],
  });
}

export default async function JapaneseTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = TOPICS[topic];
  if (!data) notFound();

  return (
    <>
      <JsonLd
        id={`japanese-${topic}`}
        data={[
          articleSchema({
            title: data.title,
            description: data.summary,
            slug: `/japanese/${topic}`,
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 1800,
          }),
          faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Japanese", path: "/japanese" },
            { name: data.title, path: `/japanese/${topic}` },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Topic hub"
        title={data.title}
        subtitle={data.tagline}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="8 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Japanese", href: "/japanese" },
          { name: data.title, href: `/japanese/${topic}` },
        ]}
        toc={[
          { id: "summary", label: "Summary" },
          ...data.content.map((c, i) => ({
            id: `section-${i}`,
            label: c.heading,
          })),
          { id: "related", label: "Related reading" },
          { id: "faqs", label: "Common questions" },
        ]}
        sidebar={<DownloadCard campaign={`topic-${topic}`} />}
      >
        <AnswerBox>{data.summary}</AnswerBox>

        <dl className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-border bg-cream-raised p-5"
            >
              <dt className="label-eyebrow mb-2">{fact.label}</dt>
              <dd className="font-serif text-lg text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {data.content.map((section, i) => (
          <section key={i} id={`section-${i}`}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </section>
        ))}

        <h2 id="related">Related reading</h2>
        <ul>
          {data.relatedLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

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
      </LongFormLayout>
    </>
  );
}
