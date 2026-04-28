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
          title="Open Inku. Do today&apos;s cards. Stop."
          body={
            <>
              <p>
                Open Inku and it shows a small review for today. You may see
                kana, words, and phrases. When the review is done, you are done.
                There is no infinite feed.
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
          eyebrow="Audio"
          title="Hear each card before you copy it."
          reverse
          body={
            <>
              <p>
                Inku bundles pronunciation audio for the main card library. You
                can listen first, then repeat it without leaving the review.
              </p>
              <p>
                If a small surface is missing bundled audio, your iPhone can
                fall back to its Japanese voice. The goal is still simple: hear
                the card and keep moving.
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
          eyebrow="Daily habit"
          title="A soft habit you can return to."
          reverse
          body={
            <>
              <p>
                Inku has streak and progress tracking, but the tone is gentle.
                Miss a day and come back. The app still shows the cards you
                need next.
              </p>
              <p>
                The home screen also uses ink drops to show daily practice. It
                feels more like filling a notebook than chasing a scoreboard.
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
