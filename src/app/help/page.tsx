import type { Metadata } from "next";
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
import { HELP_SECTIONS } from "@/lib/help";

const TITLE = "Inku Help Center";
const SUBTITLE =
  "Everything you might need to know about using Inku — getting started, studying, billing, content, privacy, and troubleshooting. All on one page, all with answers.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Inku help center: how to start the free trial, how spaced repetition works, how to cancel, what's in the deck, privacy details, and troubleshooting. Single-page FAQ.",
  path: "/help",
});

export default function HelpPage() {
  // Flatten every Q&A across all sections into one big FAQPage schema.
  // AI Overviews and search engines extract individual Q&As without
  // needing the section structure — we keep that visual hierarchy for
  // humans only.
  const allFaqs = HELP_SECTIONS.flatMap((s) =>
    s.questions.map((q) => ({ question: q.q, answer: q.a })),
  );

  return (
    <>
      <JsonLd
        id="help-center"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/help",
            datePublished: "2026-04-30",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            about: ["Inku", "Help center", "Customer support"],
            keywords: [
              "Inku help",
              "Inku support",
              "Inku FAQ",
              "Japanese app help",
            ],
          }),
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Help", path: "/help" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Help center"
        title={TITLE}
        subtitle={SUBTITLE}
        updated="April 30, 2026"
        readingTime="12 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Help", href: "/help" },
        ]}
        toc={HELP_SECTIONS.map((s) => ({ id: s.slug, label: s.title }))}
        sidebar={<DownloadCard campaign="help-center" />}
      >
        <AnswerBox>
          Inku is a calm Japanese flashcard app for iPhone. The most common
          help questions: <strong>How do I cancel?</strong> iPhone Settings →
          your name → Subscriptions → Inku.{" "}
          <strong>How does the free trial work?</strong> Full access for 7
          days, then your subscription begins automatically.{" "}
          <strong>Where is my data stored?</strong> Locally on your iPhone, no
          account required. Everything else is below.
        </AnswerBox>

        {HELP_SECTIONS.map((section) => (
          <section key={section.slug}>
            <h2 id={section.slug}>{section.title}</h2>
            <p>{section.description}</p>
            <div className="not-prose mt-6 space-y-4">
              {section.questions.map((q) => (
                <details
                  key={q.slug}
                  id={q.slug}
                  className="group rounded-lg border border-border bg-cream-raised p-5"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-serif text-lg text-ink">
                    {q.q}
                    <span className="mt-1 shrink-0 font-sans text-xl text-matcha transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-serif text-[1rem] leading-relaxed text-ink-muted">
                    {q.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}

        <hr />

        <p>
          Didn&apos;t find what you needed?{" "}
          <a href="mailto:app@inkujapanese.com">Email Bao directly</a>. Every
          email gets a personal reply, usually within a day. For wider
          context, see the{" "}
          <Link href="/about">about page</Link> or the{" "}
          <Link href="/learn-japanese">learn Japanese hub</Link>.
        </p>
      </LongFormLayout>
    </>
  );
}
