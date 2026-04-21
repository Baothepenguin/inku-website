import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-layout";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Moshi Moshi: Why Japanese Phones Aren't Answered Like Yours";
const SUBTITLE =
  "The real story behind もしもし, where it came from, and the ghost-related reason it sticks around.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "The origin of 'moshi moshi,' why Japanese phones are answered this way, and why it involves folklore about ghosts and foxes.",
  path: "/blog/moshi-moshi",
  ogType: "article",
  publishedTime: "2026-04-21T09:00:00Z",
  authors: ["Bao Hua"],
  keywords: [
    "moshi moshi meaning",
    "why Japanese say moshi moshi",
    "Japanese phone etiquette",
  ],
});

export default function Post() {
  return (
    <BlogPostLayout
      slug="/blog/moshi-moshi"
      title={TITLE}
      subtitle={SUBTITLE}
      readingTime="7 min read"
      wordCount={1600}
      datePublished="2026-04-21"
      answer="Moshi moshi (もしもし) is how Japanese people answer a casual phone call. It comes from 申します (mōshimasu), meaning 'I will speak.' It is repeated twice because, according to folklore, ghosts and yōkai cannot say it twice. That part is mostly a joke, but it has survived."
      toc={[
        { id: "origin", label: "Where it came from" },
        { id: "ghost", label: "The ghost story" },
        { id: "formal", label: "When not to use it" },
        { id: "alternatives", label: "Alternatives" },
      ]}
      faqs={[
        {
          q: "Can I say moshi moshi in a business call?",
          a: "No. It's for casual calls. Business calls open with 'はい、〇〇会社です' (yes, this is X company) or a proper self-introduction.",
        },
        {
          q: "Do Japanese people really believe the ghost thing?",
          a: "It's folklore, like knocking on wood. Nobody actually thinks ghosts can't say moshi moshi. But the story is why the doubled form stuck.",
        },
      ]}
      related={[
        { href: "/japanese/phrases", label: "Essential Japanese phrases" },
      ]}
    >
      <h2 id="origin">Where it came from</h2>
      <p>
        In the 1890s, Japan started installing its first telephone lines. The
        standard way to start a conversation in person, もしもし, which means
        something like &ldquo;I say, I say&rdquo; or &ldquo;excuse me,&rdquo;
        was already in use. It is a polite softener. Phone operators adopted
        it as the formal greeting when connecting calls.
      </p>
      <p>
        The word itself is a contracted reduplication of 申す (mōsu), the
        humble form of the verb &ldquo;to say.&rdquo; 申す + 申す becomes 申し
        + 申し, which contracts to もうしもうし, then simplifies to
        もしもし. Literally: &ldquo;I say, I say.&rdquo;
      </p>

      <h2 id="ghost">The ghost story</h2>
      <p>
        Here is where Japanese folklore gets fun. There is a long-running
        cultural belief that yōkai (spirits, ghosts, fox-monsters) cannot
        repeat themselves twice. A fox-spirit trying to trick a traveler
        into following it into the mountains can manage one &ldquo;もし&rdquo;
        but not two.
      </p>
      <p>
        So when Japanese speakers adopted もしもし, saying it twice became a
        way to quietly confirm: I am human, not a fox. The teller is never
        quite sure if the recipient believed it, of course; that is the
        joke.
      </p>
      <p>
        Nobody is seriously warding off foxes on their phone today. But the
        doubled form stuck, partly because it sounds good, partly because
        it feels less abrupt than saying &ldquo;hello&rdquo; at a stranger.
      </p>

      <h2 id="formal">When not to use it</h2>
      <p>
        Moshi moshi is casual. In professional contexts, Japanese phone
        etiquette calls for a full self-introduction on pickup:
      </p>
      <ul>
        <li>
          <strong>Business incoming call:</strong> &ldquo;はい、〇〇株式会社
          の〇〇でございます&rdquo; (Yes, this is [name] at [company
          name]).
        </li>
        <li>
          <strong>Business outgoing call:</strong> Open with &ldquo;お世話に
          なっております&rdquo; (thank you for your continued support), then
          identify yourself.
        </li>
      </ul>
      <p>
        Using moshi moshi to your boss or a client is the equivalent of
        answering an English work call with &ldquo;yo.&rdquo;
      </p>

      <h2 id="alternatives">Alternatives</h2>
      <p>
        Casual alternatives Japanese speakers use:
      </p>
      <ul>
        <li>
          <strong>おーい (oi):</strong> Yelling to someone at a distance. Not
          for the phone.
        </li>
        <li>
          <strong>はい (hai):</strong> Just &ldquo;yes,&rdquo; acknowledging
          the call.
        </li>
        <li>
          <strong>Saying your own name:</strong> Common in informal calls
          from saved contacts. They already know who it is.
        </li>
      </ul>

      <h2 id="closing">The bottom line</h2>
      <p>
        Moshi moshi survives because it is useful, slightly silly, and
        carries a thousand years of ghost folklore underneath it. You will
        use it. You will also notice, after a month in Japan, that native
        speakers drop it in business settings. Language is always a little
        older and a little more layered than the phrasebook admits.
      </p>
    </BlogPostLayout>
  );
}
