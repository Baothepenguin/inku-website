import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { AUTHORS } from "@/lib/authors";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Inku authors",
  description: "Author profiles for the Inku Japanese learning site.",
  path: "/authors",
});

export default function AuthorsPage() {
  return (
    <>
      <JsonLd
        id="authors"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Authors", path: "/authors" },
        ])}
      />
      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="label-eyebrow mb-4 text-matcha">Authors</p>
          <h1 className="font-serif text-display-md tracking-tight text-ink">
            People behind Inku.
          </h1>
          <div className="mt-10 grid gap-4">
            {Object.entries(AUTHORS).map(([slug, author]) => (
              <Link
                key={slug}
                href={`/authors/${slug}`}
                className="rounded-lg border border-border bg-cream-raised p-5 shadow-paper transition hover:-translate-y-0.5 hover:border-matcha"
              >
                <h2 className="font-serif text-2xl text-ink">{author.name}</h2>
                <p className="mt-2 font-body text-ink-muted">
                  {author.jobTitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
