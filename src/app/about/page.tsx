import type { Metadata } from "next";
import Link from "next/link";
import { LongFormLayout } from "@/components/long-form-layout";
import { DownloadCard } from "@/components/download-card";
import { QuoteBlock } from "@/components/quote-block";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  personSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const TITLE = "About Inku";
const SUBTITLE =
  "Why an iPhone app for learning Japanese should feel like a notebook, not a game.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Inku is a calm Japanese learning app built by Bao Hua in Calgary. This is the story of why it exists, and what it is not.",
  path: "/about",
  ogType: "article",
});

const TOC = [
  { id: "the-problem", label: "What we are reacting to" },
  { id: "what-inku-is", label: "What Inku is" },
  { id: "what-inku-is-not", label: "What Inku is not" },
  { id: "why-iphone", label: "Why iPhone only" },
  { id: "how-built", label: "How the app is built" },
  { id: "who-behind", label: "Who is behind it" },
  { id: "what-next", label: "What we are building next" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="about"
        data={[
          articleSchema({
            title: TITLE,
            description: SUBTITLE,
            slug: "/about",
            datePublished: "2026-04-21",
            authorName: "Bao Hua",
            authorSlug: "bao-hua",
            type: "Article",
            wordCount: 1200,
          }),
          personSchema({
            name: "Bao Hua",
            slug: "bao-hua",
            jobTitle: "Founder of Inku",
            description:
              "Independent software maker based in Calgary, Alberta. Building Inku, a calm iPhone app for learning Japanese.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <LongFormLayout
        eyebrow="About"
        title={TITLE}
        subtitle={SUBTITLE}
        updated="April 21, 2026"
        authorName="Bao Hua"
        authorSlug="bao-hua"
        readingTime="6 min read"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        toc={TOC}
        sidebar={<DownloadCard campaign="about-sidebar" />}
      >
        <p>
          Inku is an iPhone app for learning Japanese. It is made by one person
          in Calgary, Alberta. This page exists because people who buy small
          software deserve to know who made it, and why.
        </p>

        <h2 id="the-problem">What we are reacting to</h2>
        <p>
          I tried the usual apps. I used Duolingo for 89 days, then noticed I
          could pass a lesson without reading any of the Japanese. I switched
          to Anki and filled a deck with scraped vocabulary I never reviewed
          because the blank card flow felt like a second job. I tried a handful
          of paid apps that all wanted me to enroll in a system.
        </p>
        <p>
          The pattern I kept hitting was the same. Apps that were designed to
          make me come back tomorrow were not designed to make me learn
          anything today. Streak flames. Heart lives. Notifications at 9:02 PM
          because that is when their data showed I was most likely to tap. The
          interface screamed, and the Japanese whispered.
        </p>
        <p>
          I am almost forty. I do not want another app that thinks my attention
          is the product. I wanted something that treated me like an adult who
          has ten minutes and wants to use them well.
        </p>

        <h2 id="what-inku-is">What Inku is</h2>
        <p>
          Inku is a flashcard app for iPhone, iOS 18 and up. It teaches 184
          kana, 515 N5 cards, 391 N4 cards, topic decks, and four phrase packs
          (casual, polite, travel, anime). The main card library includes
          bundled pronunciation audio.
        </p>
        <p>
          The review session is finite. You open the app, Inku shows you today:
          maybe 15 cards, maybe 25, depending on where you are in the schedule.
          You answer each one, and then you are done. The home screen tells you
          what happened and what is waiting for next time. There is no feed to
          scroll.
        </p>
        <p>
          Scheduling is handled by FSRS (a modern spaced-repetition algorithm).
          It is the same math that makes Anki work. The difference is that in
          Inku you never see the math. You just see a small, warm stack of
          cards that will appear again when they need to.
        </p>

        <h2 id="what-inku-is-not">What Inku is not</h2>
        <ul>
          <li>It is not built around public leaderboards or loud pressure.</li>
          <li>It is not a chatbot. It will not generate cards for you on the fly.</li>
          <li>
            It is not an all-in-one Japanese platform. It will not teach you
            to read a novel. It will teach you enough that the other tools you
            use will make sense.
          </li>
          <li>
            It is not a social network. There is no profile, no leaderboard, no
            shareable score.
          </li>
          <li>
            It is not free. I chose to charge for it so I could build it
            without selling data or running ads. The yearly plan is $70.99 with
            a 7-day trial. The monthly plan is $12.99.
          </li>
        </ul>

        <h2 id="why-iphone">Why iPhone only</h2>
        <p>
          Because I am one person, and shipping one platform well matters more
          than shipping two platforms poorly. iPhone gets the design attention
          it deserves, the haptics, the widgets, the pitch-perfect system
          fonts. Android will come when Android can have the same care.
        </p>
        <p>
          If you are an Android user, email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and I
          will put you on a list to be notified when work begins.
        </p>

        <h2 id="how-built">How the app is built</h2>
        <p>
          Inku is SwiftUI and SwiftData. It is fully local-first. Your progress
          lives on your iPhone, not in a database in Virginia. There is no
          account to create because there is no server to log into.
        </p>
        <p>
          Pronunciation is pre-recorded through ElevenLabs (the Shizuka voice)
          at build time. The mp3s ship inside the app, which means the app
          works on a plane, in a subway tunnel, on a mountain. Furigana is
          pre-computed with kuromoji so every kanji in the app has a rendered
          ruby reading attached.
        </p>
        <p>
          Subscriptions run through RevenueCat and Apple In-App Purchase.
          Crash reporting uses Sentry. That is the entire third-party surface.
          If you use Inku, those three companies see anonymous technical data.
          Nobody else sees anything.
        </p>

        <h2 id="who-behind">Who is behind it</h2>
        <p>
          My name is Bao Hua. I am a sole proprietor. I live and work in
          Calgary, Alberta, Canada. Inku is my current full-time project. If
          you want to know more, the <Link href="/authors/bao-hua">author
          page</Link> has a short bio and links.
        </p>
        <p>
          I answer every email to{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>{" "}
          personally. If you have a suggestion, a bug, a translation fix, or a
          question about something you tried, that is how you reach me.
        </p>

        <QuoteBlock
          quote="The best software I have ever used feels like the person who made it left a small part of themselves in it. That is what I am trying to do with Inku."
          attribution="Bao Hua, founder"
          eyebrow="Founding note"
          className="my-10"
        />

        <h2 id="what-next">What we are building next</h2>
        <ul>
          <li>
            <strong>N4 expansion.</strong> The N5 deck is complete. We are
            filling out N4 through the year.
          </li>
          <li>
            <strong>Kanji recognition mode.</strong> A separate practice flow
            for reading kanji without leaning on furigana.
          </li>
          <li>
            <strong>Widgets.</strong> A home-screen widget that shows today&apos;s
            review count, not a streak.
          </li>
          <li>
            <strong>iPad.</strong> Same app, more room to write kana with a
            finger or Apple Pencil.
          </li>
          <li>
            <strong>Sentence mining.</strong> Optional, opt-in, and done by
            you, not by me.
          </li>
        </ul>

        <hr />

        <p>
          Thank you for reading this far. If you have been waiting for a
          Japanese app that respects your time, try Inku for a week. If it is
          not for you, cancel the trial and keep the hiragana guide.
        </p>

        <p className="text-ink-muted">
          <strong>Where to go next:</strong>{" "}
          <Link href="/guides/how-to-learn-japanese">
            How to learn Japanese from scratch
          </Link>{" "}
          ·{" "}
          <Link href="/vs/duolingo">Inku vs Duolingo</Link> ·{" "}
          <Link href="/blog/why-i-stopped-using-anki">
            Why I stopped using Anki
          </Link>
        </p>
      </LongFormLayout>
    </>
  );
}
