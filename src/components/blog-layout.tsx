import type { ReactNode } from "react";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { AnswerBox } from "@/components/answer-box";
import { QuoteBlock } from "@/components/quote-block";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";

interface BlogPostLayoutProps {
  slug: string;
  title: string;
  subtitle?: string;
  answer?: string;
  readingTime: string;
  wordCount: number;
  datePublished: string;
  tags?: string[];
  toc?: { id: string; label: string }[];
  faqs?: { q: string; a: string }[];
  keywords?: string[];
  children: ReactNode;
  related?: { href: string; label: string }[];
}

export function BlogPostLayout({
  slug,
  title,
  subtitle,
  answer,
  readingTime,
  wordCount,
  datePublished,
  tags,
  toc,
  faqs,
  keywords,
  children,
  related,
}: BlogPostLayoutProps) {
  return (
    <>
      <JsonLd
        id={`blog-${slug.replace(/\//g, "-")}`}
        data={[
          articleSchema({
            title,
            description: subtitle ?? title,
            slug,
            datePublished,
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "BlogPosting",
            wordCount,
            keywords,
          }),
          ...(faqs
            ? [faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))]
            : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: title, path: slug },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Blog"
        title={title}
        subtitle={subtitle}
        updated={datePublished}
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime={readingTime}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: title, href: slug },
        ]}
        toc={toc}
        sidebar={<DownloadCard campaign={`blog-${slug.split("/").pop()}`} />}
      >
        {answer && <AnswerBox>{answer}</AnswerBox>}

        {children}

        {faqs && faqs.length > 0 && (
          <>
            <h2 id="faqs">Common questions</h2>
            <div className="not-prose mt-6 space-y-4">
              {faqs.map((faq) => (
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
          </>
        )}

        {related && related.length > 0 && (
          <>
            <h2 id="related" className="mt-12">
              Related reading
            </h2>
            <ul>
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-8">
          <Link href="/">Try Inku, free for 7 days</Link>, or read{" "}
          <Link href="/guides/how-to-learn-japanese">the full roadmap</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}

export { QuoteBlock };
