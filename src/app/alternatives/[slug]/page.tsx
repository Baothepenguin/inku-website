import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALTERNATIVES } from "@/lib/alternatives";
import { AlternativePage } from "@/components/alternative-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return Object.keys(ALTERNATIVES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = ALTERNATIVES[slug];
  if (!data) return {};
  const title = `The Best ${data.competitorName} Alternative for Japanese`;
  return pageMetadata({
    title,
    description: data.summary,
    path: `/alternatives/${slug}`,
    ogType: "article",
    publishedTime: "2026-04-21T09:00:00Z",
    authors: ["Bao Hua"],
    keywords: [
      `${data.competitorName} alternative`,
      `${data.competitorName} replacement`,
      `apps like ${data.competitorName}`,
      "Japanese learning app",
    ],
  });
}

export default async function AlternativeCompetitorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = ALTERNATIVES[slug];
  if (!data) notFound();
  return <AlternativePage data={data} />;
}
