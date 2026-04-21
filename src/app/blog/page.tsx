import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/posts";

const TITLE = "The Inku Blog";
const SUBTITLE =
  "Opinionated writing on learning Japanese, flashcard apps, and the quiet pleasures of picking up a language slowly.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Essays and field notes from Bao Hua on learning Japanese as an adult, flashcard methodology, and why Inku is built the way it is.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <JsonLd
        id="blog-index"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <LongFormLayout
        eyebrow="Blog"
        title={TITLE}
        subtitle={SUBTITLE}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
        sidebar={<DownloadCard campaign="blog-index" />}
      >
        <p>
          Shorter, more opinionated than the pillar guides. Field notes,
          method essays, and the occasional rant.
        </p>

        <ul className="not-prose mt-10 grid gap-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={post.slug}
                className="group block rounded-lg border border-border bg-cream-raised p-7 transition-all hover:-translate-y-0.5 hover:shadow-paper"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-serif text-2xl text-ink group-hover:text-matcha">
                    {post.title}
                  </h2>
                  <span className="whitespace-nowrap font-sans text-xs uppercase tracking-breath text-ink-subtle">
                    {post.readingTime}
                  </span>
                </div>
                <p className="mt-3 font-serif text-[1.02rem] leading-relaxed text-ink-muted">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
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
