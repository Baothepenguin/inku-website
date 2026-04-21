import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Why } from "@/components/home/why";
import { WhatYouLearn } from "@/components/home/what-you-learn";
import { Testimonials } from "@/components/home/testimonials";
import { Pricing } from "@/components/home/pricing";
import { HomeFAQ, HOME_FAQS } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { QuoteBlock } from "@/components/quote-block";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Inku — A calm way to learn Japanese on iPhone",
  description:
    "Inku is a flashcard app for iPhone that teaches Japanese the way you would want to learn it: calm, deliberate, native voice. Hiragana, katakana, N5 vocab, phrases, and handwriting mode, all on one quiet screen.",
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
      <section className="container py-16">
        <QuoteBlock
          quote="I tried three apps before Inku. Everyone else wanted me to build a streak. Inku just wanted me to learn."
          attribution="Priya N., learning since February 2026"
        />
      </section>
      <Testimonials />
      <Pricing />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
