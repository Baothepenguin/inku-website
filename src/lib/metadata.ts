import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
}

export function pageMetadata({
  title,
  description,
  path,
  ogType = "website",
  ogImage,
  publishedTime,
  modifiedTime,
  authors,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  // Root layout's metadata.title.template already appends " | Inku".
  // Return the raw title so we do not double up.
  const og =
    ogImage ??
    `${SITE.url}/api/og?title=${encodeURIComponent(title)}&type=${ogType}`;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    authors: authors?.map((name) => ({ name })),
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: ogType,
      locale: "en_US",
      images: [{ url: og, width: 1200, height: 630, alt: title }],
      publishedTime,
      modifiedTime,
      authors,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [og],
      creator: SITE.social.twitter,
      site: SITE.social.twitter,
    },
    other: {
      "apple-itunes-app": `app-id=${SITE.appStore.id}`,
    },
  };
}
