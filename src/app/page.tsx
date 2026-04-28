import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Why } from "@/components/home/why";
import { WhatYouLearn } from "@/components/home/what-you-learn";
import { Pricing } from "@/components/home/pricing";
import { HomeFAQ, HOME_FAQS } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Inku: A calm way to learn Japanese on iPhone",
  description:
    "Inku is a calm Japanese flashcard app for iPhone. Learn kana, JLPT vocabulary, useful phrases, audio-supported cards, handwriting, and spaced review without ads or accounts.",
  path: "/",
  keywords: [
    "learn Japanese",
    "Japanese app iPhone",
    "hiragana katakana app",
    "JLPT N5 vocabulary",
    "Duolingo alternative",
    "Anki alternative",
    "spaced repetition Japanese",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        id="home"
        data={[
          faqSchema(HOME_FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Hero />
      <Why />
      <WhatYouLearn />
      <Pricing />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
