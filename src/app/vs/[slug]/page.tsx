import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPARISONS } from "@/lib/comparisons";
import { ComparisonPage } from "@/components/comparison-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return Object.keys(COMPARISONS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = COMPARISONS[slug];
  if (!data) return {};
  const title = `Inku vs ${data.competitorName} for Japanese`;
  return pageMetadata({
    title,
    description: data.summary,
    path: `/vs/${slug}`,
    ogType: "article",
    publishedTime: "2026-04-21T09:00:00Z",
    authors: ["Bao Hua"],
    keywords: [
      `Inku vs ${data.competitorName}`,
      `${data.competitorName} alternative`,
      `${data.competitorName} vs Japanese app`,
      "Japanese learning app comparison",
    ],
  });
}

export default async function VsCompetitorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = COMPARISONS[slug];
  if (!data) notFound();
  return <ComparisonPage data={data} />;
}
