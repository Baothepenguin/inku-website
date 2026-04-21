import type { Metadata } from "next";
import { BlogPostLayout, QuoteBlock } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Why I Stopped Using Anki (and What I Built Instead)";
const SUBTITLE =
  "Anki works. It is also a blank sheet of graph paper. After three years, here is why I stopped opening it.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "After three years and 4,000 cards in Anki, the setup cost and blank-canvas UI consumed time that should have been learning. Here is what went wrong and what Inku fixes.",
  path: "/blog/why-i-stopped-using-anki",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "why stop using anki",
    "anki alternative",
    "anki burnout",
    "anki problems",
  ],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/why-i-stopped-using-anki"
      title={TITLE}
      subtitle={SUBTITLE}
      readingTime="10 min read"
      wordCount={2000}
      datePublished="2026-04-21"
      answer="After three years and 4,000 cards in Anki, I realized the setup cost and blank-canvas UI were consuming time that should have been learning. I built Inku to be the version of Anki I actually opened. Here is what changed."
      toc={[
        { id: "the-love", label: "Why I loved Anki at the start" },
        { id: "the-drift", label: "The slow drift away" },
        { id: "tipping-point", label: "The tipping point" },
        { id: "what-inku-does", label: "What Inku does differently" },
        { id: "using-both", label: "Can you use both?" },
      ]}
      faqs={[
        {
          q: "Is switching from Anki to a different app worth losing my progress?",
          a: "Your retention data stays in Anki. If you have thousands of mature cards, those are worth something. The honest answer: start a new deck in Inku for Japanese specifically, and let your Anki decks sit. Most people with Anki burnout are not actively reviewing them anyway.",
        },
        {
          q: "Can I use Anki and Inku at the same time?",
          a: "Yes, and for the first few weeks this is smart. Inku handles kana, N5-N4 vocabulary, and phrases with native audio out of the box. Anki handles anything outside that scope. The risk is review fatigue from two queues. Pick one as primary.",
        },
        {
          q: "Does Inku use spaced repetition like Anki does?",
          a: "Yes. Inku uses an SM-2 derived algorithm with per-card scheduling based on your rating. The difference is that the cards are pre-built, the audio is pre-recorded, and there is no configuration required.",
        },
      ]}
      related={[
        { href: "/vs/anki", label: "Inku vs Anki: full comparison" },
        { href: "/alternatives/anki", label: "Best Anki alternatives for Japanese" },
        { href: "/guides/spaced-repetition-explained", label: "How spaced repetition works" },
      ]}
    >
      <h2 id="the-love">Why I loved Anki at the start</h2>
      <p>
        I discovered Anki the way most people do: someone in a language forum swore
        it was the reason they passed JLPT N2, and I spent an afternoon reading
        about the forgetting curve and felt like I had found a cheat code. Anki is
        genuinely powerful. The spaced repetition algorithm is battle-tested, the
        data format is open, and the desktop app is free. If you use it consistently,
        it works. That is not in dispute.
      </p>
      <p>
        In the first three months I was disciplined. I reviewed every morning before
        work. My retention hovered around 85 percent, which felt good. I was learning
        words I would not have otherwise touched, and when I came across them in reading
        they felt like old friends. That feedback loop is real and I do not want to
        pretend it is not. The first year with Anki was the most structured vocabulary
        learning I had ever done.
      </p>
      <p>
        I also made the mistake most enthusiastic Anki users make: I spent too much
        time optimizing the tool instead of using it. New card templates. Custom fonts.
        A plugin for pitch accent, a plugin for dictionary lookups, a plugin that
        showed example sentences from a corpus. Every weekend I was tweaking something
        instead of reviewing. Anki rewards tinkerers. That is part of its charm and
        part of its problem.
      </p>

      <h2 id="the-drift">The slow drift away</h2>
      <p>
        By year two, the card count was somewhere above 3,000. My daily review queue
        had grown to 150-200 cards on days I kept up, and if I missed two or three
        days it became a wall. Anki does not forgive absence. The reviews pile up
        mathematically, and opening the app to find 400 due cards feels more like
        debt than learning.
      </p>
      <p>
        The subtler problem was that creating cards had become the bottleneck. To
        add a new word properly, I needed to: look up the word in a dictionary, copy
        the reading, find an example sentence, optionally add an audio clip, check if
        the card would conflict with something already in my deck. A thorough card
        took five minutes. I was spending more time building the tool than using it.
        The irony was not lost on me, but I kept telling myself this upfront investment
        would pay off.
      </p>
      <p>
        Around month eighteen, I noticed I was opening Anki less. Not dramatically, not
        in a single moment of decision. Just: some mornings I chose not to. Then some
        weeks. The app sat on my phone, the icon unchanged, a small number badge
        climbing. At its peak, I had over 600 cards due. I did not feel guilty in the
        old way. I felt finished with the whole project.
      </p>

      <QuoteBlock
        quote="The reviews pile up mathematically, and opening the app to find 400 due cards feels more like debt than learning."
        attribution="From this post"
        className="my-10"
      />

      <h2 id="tipping-point">The tipping point</h2>
      <p>
        The moment I remember clearly was a Sunday morning. I had about forty minutes
        before a commitment. I sat down to do Japanese. I opened Anki. There were 312
        reviews due. I looked at that number, closed the app, and opened YouTube instead.
        Not because I did not want to learn Japanese. Because 312 felt like punishment
        for having a life that week.
      </p>
      <p>
        That day I started thinking about what I actually wanted from a flashcard app.
        I wanted to open it and immediately be in a session, not managing a backlog.
        I wanted cards that already had audio, so I was not guessing at pronunciation.
        I wanted the algorithm to handle itself, not surface options I had to understand
        before I could use them. I wanted the aesthetic to feel like something I chose
        rather than a tool built for power users.
      </p>
      <p>
        Anki was built for people who want maximum control and are willing to pay for
        it with their time. That used to be me. It stopped being me somewhere in year
        two. The app had not changed. I had.
      </p>

      <h2 id="what-inku-does">What Inku does differently</h2>
      <p>
        I built Inku around one constraint: it has to be something I actually open. That
        sounds trivial. It is not. The hardest problem in language-learning software is not
        the algorithm, it is getting the learner to show up. Every decision in Inku flows
        from that.
      </p>
      <p>
        The decks are pre-built. Hiragana, katakana, 200 core N5 words, 65 N4 words,
        four phrase packs. You do not build anything. You open the app and the cards are
        there. The audio is pre-recorded by a native voice actor, not synthesized on the
        fly, not a text-to-speech robot. Every card you flip, you hear a real human voice
        say the word the way a real human would say it.
      </p>
      <p>
        The session model is different too. Rather than surfacing 150 due cards at once,
        Inku shows you a manageable chunk and ends the session cleanly. There is no
        accumulating debt. If you miss a day, the algorithm adjusts. You do not come back
        to a wall. You come back to a session.
      </p>
      <p>
        The aesthetic matters more than I expected. Sumi ink on washi paper. Calm type.
        No streaks, no badges, no points. Studying Japanese should feel like a practice,
        not a game you are losing. The difference in how I feel opening Inku versus how
        I felt opening Anki at the end is not small. One felt like a chore I had let slide.
        The other feels like something I am choosing.
      </p>

      <h2 id="using-both">Can you use both?</h2>
      <p>
        Yes. They serve different learners and different stages. If you have a
        well-maintained Anki deck with 2,000 mature cards and you are reviewing consistently,
        do not stop. Mature cards are valuable and migration costs are real. Anki&apos;s
        power-user features, custom note types, filtered decks, add-ons, are genuinely useful
        if you want to go deep into an unconventional study method.
      </p>
      <p>
        Where Inku fits better: you are starting Japanese from scratch and do not want to
        spend two weeks configuring before you learn a single word. You tried Anki, burned out,
        and need a reset. You want native-quality audio without hunting for audio packs. You
        want an app that handles the curriculum so you can focus on the language.
      </p>
      <p>
        Anki is a power tool. Some learners need power tools. I stopped being one of them.
        What I needed was a tool that got out of the way and let me spend my forty minutes
        actually learning Japanese instead of managing a vocabulary database.
      </p>
    </BlogPostLayout>
  );
}
