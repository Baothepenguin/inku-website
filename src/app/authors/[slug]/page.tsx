import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { AUTHORS, type AuthorSlug } from "@/lib/authors";
import { ALL_POSTS } from "@/lib/posts";

export async function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS[slug as AuthorSlug];
  if (!author) return {};
  return pageMetadata({
    title: `${author.name}  -  ${author.jobTitle}`,
    description: author.bioShort,
    path: `/authors/${slug}`,
    ogType: "article",
  });
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = AUTHORS[slug as AuthorSlug];
  if (!author) notFound();

  const posts = ALL_POSTS.filter((p) => p.authorSlug === slug);

  return (
    <>
      <JsonLd
        id="author"
        data={[
          personSchema({
            name: author.name,
            slug,
            jobTitle: author.jobTitle,
            description: author.bioShort,
            sameAs: author.links.map((l) => l.url),
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Authors", path: "/authors" },
            { name: author.name, path: `/authors/${slug}` },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="Author"
        title={author.name}
        subtitle={author.jobTitle}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: author.name, href: `/authors/${slug}` },
        ]}
        sidebar={<DownloadCard campaign="author-sidebar" />}
      >
        <div className="flex items-center gap-5 not-prose">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-matcha text-3xl font-serif text-cream">
            {author.name.charAt(0)}
          </div>
          <div>
            <p className="label-eyebrow mb-1">
              {author.location}
            </p>
            <div className="flex flex-wrap gap-3 font-sans text-sm">
              {author.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-matcha underline decoration-matcha/40 underline-offset-[3px] hover:decoration-matcha"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {author.bioLong.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <h2 id="posts">Posts by {author.name}</h2>
        {posts.length === 0 ? (
          <p>No posts yet. New writing lands most weeks.</p>
        ) : (
          <ul className="not-prose grid gap-4">
            {posts.map((p) => (
              <li
                key={p.slug}
                className="rounded-lg border border-border bg-cream-raised p-5"
              >
                <Link
                  href={p.slug}
                  className="font-serif text-lg text-ink hover:text-matcha"
                >
                  {p.title}
                </Link>
                <p className="mt-1 font-sans text-sm text-ink-muted">
                  {p.description}
                </p>
                <p className="mt-2 font-sans text-xs text-ink-subtle">
                  {p.date} · {p.readingTime}
                </p>
              </li>
            ))}
          </ul>
        )}
      </LongFormLayout>
    </>
  );
}
