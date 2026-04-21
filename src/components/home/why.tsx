import { FeatureRow } from "@/components/feature-row";
import { IPhoneMockup } from "@/components/iphone-mockup";
import {
  HomeScreen,
  FlashcardScreen,
  VocabScreen,
} from "@/components/sample-screens";

export function Why() {
  return (
    <section className="border-t border-border/70 bg-cream-deep/30 py-24 md:py-32">
      <div className="container space-y-24 md:space-y-32">
        <FeatureRow
          eyebrow="How it works"
          title="One quiet screen a day."
          body={
            <>
              <p>
                Open Inku and it already knows what you need to see. A handful
                of kana, a few vocabulary cards, one or two phrases. The review
                ends when today&apos;s review ends. There is no infinite feed.
              </p>
              <p>
                Under the hood, Inku uses a modern spaced-repetition scheduler
                (FSRS) to decide what to surface. You see it as a short, finite
                session. The machinery stays out of your way.
              </p>
            </>
          }
        >
          <IPhoneMockup
            className="w-[280px]"
            ariaLabel="Inku home screen with today's review card"
          >
            <HomeScreen />
          </IPhoneMockup>
        </FeatureRow>

        <FeatureRow
          eyebrow="Every word, spoken aloud"
          title="A real actor recorded every card."
          reverse
          body={
            <>
              <p>
                Inku ships with native voice acting for every character, word,
                and phrase. Not a text-to-speech engine. A real voice actor
                recorded in a studio, and the audio lives on your device.
              </p>
              <p>
                That means your pronunciation has something faithful to copy,
                and the app never has to phone home to speak. It sounds the
                same on the subway as it does on your couch.
              </p>
            </>
          }
        >
          <IPhoneMockup
            className="w-[280px]"
            ariaLabel="Inku flashcard review with audio"
          >
            <FlashcardScreen />
          </IPhoneMockup>
        </FeatureRow>

        <FeatureRow
          eyebrow="Built like a notebook, not a game"
          title="No streaks. No notifications. No guilt."
          body={
            <>
              <p>
                Most language apps punish you for missing a day. Inku does not.
                You can pick it up after a week away and the cards you need
                will still be the cards you need.
              </p>
              <p>
                The home screen shows your progress as ink drops collected, not
                a streak flame you&apos;re afraid to lose. You&apos;ll look
                forward to opening it. That is the whole idea.
              </p>
            </>
          }
          reverse
        >
          <IPhoneMockup
            className="w-[280px]"
            ariaLabel="Inku vocabulary library screen"
          >
            <VocabScreen />
          </IPhoneMockup>
        </FeatureRow>
      </div>
    </section>
  );
}
