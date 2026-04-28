import { SITE } from "@/lib/site";

const origin = SITE.url;

export type SchemaObject = Record<string, unknown>;

export function organizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: SITE.name,
    url: origin,
    logo: {
      "@type": "ImageObject",
      url: `${origin}/icon-512.png`,
      width: 512,
      height: 512,
    },
    email: SITE.supportEmail,
    founder: {
      "@type": "Person",
      name: SITE.operator.legalName,
      jobTitle: "Founder",
    },
    foundingDate: "2026-04",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.operator.address.street,
      addressLocality: SITE.operator.address.locality,
      addressRegion: SITE.operator.address.region,
      postalCode: SITE.operator.address.postalCode,
      addressCountry: "CA",
    },
    sameAs: [
      `https://twitter.com/${SITE.social.twitter.replace("@", "")}`,
      `https://instagram.com/${SITE.social.instagram.replace("@", "")}`,
    ],
  };
}

export function websiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: origin,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${origin}/#organization` },
    inLanguage: "en-US",
  };
}

export function softwareApplicationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${origin}/#app`,
    name: SITE.name,
    operatingSystem: "iOS 18.0",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Language Learning",
    description: SITE.description,
    url: origin,
    downloadUrl: SITE.appStore.urlBase,
    publisher: { "@id": `${origin}/#organization` },
    offers: [
      {
        "@type": "Offer",
        name: "Inku Pro (yearly)",
        price: "70.99",
        priceCurrency: "USD",
        description: "7-day free trial. Auto-renews yearly via Apple.",
      },
      {
        "@type": "Offer",
        name: "Inku Pro (monthly)",
        price: "12.99",
        priceCurrency: "USD",
        description: "Auto-renews monthly via Apple.",
      },
    ],
    featureList: [
      "Hiragana and katakana flashcards",
      "JLPT N5 and N4 vocabulary",
      "Four phrase packs (casual, polite, travel, anime)",
      "Bundled pronunciation audio for the main card library",
      "Spaced repetition based on FSRS",
      "Handwriting practice mode",
      "Four themes: Matcha, Sakura, Sun, Moon",
      "Local-first, no account required",
    ],
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  authorSlug,
  authorJobTitle = "Founder of Inku",
  wordCount,
  type = "BlogPosting",
  image,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorSlug: string;
  authorJobTitle?: string;
  wordCount?: number;
  type?: "BlogPosting" | "Article";
  image?: string;
  keywords?: string[];
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${origin}${slug}#article`,
    headline: title,
    description,
    url: `${origin}${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image:
      image ??
      `${origin}/api/og?type=article&title=${encodeURIComponent(title)}&author=${encodeURIComponent(authorName)}`,
    author: {
      "@type": "Person",
      "@id": `${origin}/authors/${authorSlug}#person`,
      name: authorName,
      url: `${origin}/authors/${authorSlug}`,
      jobTitle: authorJobTitle,
    },
    publisher: { "@id": `${origin}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${origin}${slug}`,
    },
    wordCount,
    keywords: keywords?.join(", "),
    inLanguage: "en-US",
  };
}

export function personSchema({
  name,
  slug,
  jobTitle,
  description,
  sameAs = [],
}: {
  name: string;
  slug: string;
  jobTitle: string;
  description: string;
  sameAs?: string[];
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${origin}/authors/${slug}#person`,
    name,
    jobTitle,
    description,
    url: `${origin}/authors/${slug}`,
    sameAs,
    worksFor: { "@id": `${origin}/#organization` },
  };
}

export function productComparisonSchema({
  name,
  description,
  slug,
  competitorName,
}: {
  name: string;
  description: string;
  slug: string;
  competitorName: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@id": `${origin}/#organization` },
    url: `${origin}${slug}`,
    category: `Japanese learning app (vs ${competitorName})`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "12.99",
      highPrice: "70.99",
      offerCount: 2,
      url: SITE.appStore.urlBase,
    },
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function howToSchema({
  name,
  description,
  slug,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  slug: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: `${origin}${slug}`,
    totalTime,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function softwareToolSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${origin}${slug}`,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any (web)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isPartOf: { "@id": `${origin}/#website` },
  };
}
