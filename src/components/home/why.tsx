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
          title="Hear each card before you copy it."
          reverse
          body={
            <>
              <p>
                Inku gives every character, word, and phrase a clear
                pronunciation recording. You can listen first, then repeat it
                without leaving the review.
              </p>
              <p>
                The audio lives on your device, so review feels the same on the
                train as it does at home. No loading state, no extra tool, just
                the sound when you need it.
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
