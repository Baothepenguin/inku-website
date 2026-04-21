import type { Metadata } from "next";
import { LongFormLayout } from "@/components/long-form-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Inku handles your data. Local-first on your iPhone, no account, no trackers, no ads.",
  path: "/privacy",
});

const UPDATED = "April 21, 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        id="privacy"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LongFormLayout
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="What Inku collects, what it does not, and how to erase it. Short, plain, and current."
        updated={UPDATED}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      >
        <p>
          Inku is a Japanese learning app for iPhone. This policy explains what
          information we collect, how we use it, and the choices you have. We
          try to keep it short and plain.
        </p>
        <p>
          If something here is unclear, email us at{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and we
          will explain.
        </p>

        <hr />

        <h2 id="short-version">The short version</h2>
        <ul>
          <li>Your learning lives on your iPhone.</li>
          <li>We do not run our own servers that store your progress.</li>
          <li>We do not sell your data.</li>
          <li>We do not run ads.</li>
          <li>We do not use third-party trackers to follow you around the internet.</li>
          <li>You can wipe everything by deleting the app.</li>
        </ul>

        <hr />

        <h2 id="on-device">Information stored on your device</h2>
        <p>
          Inku saves your learning data locally on your iPhone using Apple&apos;s
          standard on-device storage. This includes:
        </p>
        <ul>
          <li>Which characters, words, and phrases you have reviewed.</li>
          <li>How you answered each review (remembered or did not remember).</li>
          <li>Your streak, daily ink drops, and overall progress.</li>
          <li>
            Your onboarding answers (level, goals, pace) and the plan we built
            from them.
          </li>
          <li>Any cards or phrases you flag as broken.</li>
          <li>
            A random install ID we generate on first launch so we can group
            anonymous diagnostic events (see &ldquo;Diagnostic information&rdquo;
            below). This ID is not linked to your name, email, Apple ID, or
            anything else that identifies you.
          </li>
        </ul>
        <p>
          This data never leaves your device unless you send it yourself (for
          example, by using the &ldquo;Flag&rdquo; feature, which opens your
          email app with a pre-filled message).
        </p>
        <p>
          If you enable iCloud backup on your iPhone, iOS may include Inku&apos;s
          data in your encrypted iCloud backup. That is governed by Apple&apos;s
          privacy policy, not ours.
        </p>

        <hr />

        <h2 id="info-we-receive">Information we receive</h2>

        <h3 id="subscription-status">Subscription status</h3>
        <p>
          If you subscribe to Inku Pro, we receive a signal that says you are
          an active subscriber. We do not see or store your credit card or Apple
          ID. Apple and our subscription partner RevenueCat handle that.
        </p>

        <h3 id="diagnostic">Diagnostic information</h3>
        <p>To keep the app stable, we collect basic technical information:</p>
        <ul>
          <li>Device model and iOS version.</li>
          <li>App version.</li>
          <li>Anonymous crash reports and error logs (through Sentry).</li>
          <li>
            Anonymous in-app events that tell us which screens are used and
            where people get stuck (onboarding completion, session start and
            finish, paywall views). These events are tied to the random install
            ID mentioned above, not to you personally.
          </li>
        </ul>

        <h3 id="feedback">Feedback emails</h3>
        <p>
          If you use the in-app &ldquo;Flag&rdquo; feature or email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>, we
          see whatever you type, plus the email address you send from.
        </p>
        <p>
          We do not collect your location, your contacts, your photos, your
          microphone audio, your browsing history, or anything outside Inku.
        </p>

        <hr />

        <h2 id="how-we-use">How we use this information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Measure whether a change to the app is helping people learn.</li>
          <li>Diagnose and fix bugs.</li>
          <li>Keep your Inku Pro subscription in the right state.</li>
          <li>Respond when you email us.</li>
        </ul>
        <p>
          We do not use your data to train AI models. We do not build a
          behavioral profile of you. We do not share your data with advertisers.
        </p>

        <hr />

        <h2 id="third-parties">Third-party services</h2>
        <p>
          Inku uses a small number of third-party services. Here is what each
          one sees:
        </p>

        <h3 id="apple">Apple</h3>
        <p>
          If you install the app, Apple sees that. If you buy a subscription,
          Apple handles payment and receives the billing information. We follow
          Apple&apos;s own privacy rules for App Store apps.
        </p>

        <h3 id="revenuecat">RevenueCat (subscription management)</h3>
        <p>
          RevenueCat receives a signal when you subscribe, renew, or cancel so
          the app can unlock Pro features correctly. RevenueCat does not receive
          your card information. It sees an anonymous user ID tied to your
          Apple ID.
        </p>

        <h3 id="sentry">Sentry (crash and error reporting)</h3>
        <p>
          Sentry receives anonymous crash reports and error logs. These are used
          only to fix bugs. Sentry does not see your learning data or any
          personal identifier.
        </p>

        <h3 id="elevenlabs">ElevenLabs (voice audio)</h3>
        <p>
          We use ElevenLabs to pre-record the Japanese pronunciations you hear
          in the app. This happens at build time before the app ships. No audio
          is generated on demand; the mp3s are bundled into the app. ElevenLabs
          does not receive any information about you.
        </p>

        <h3 id="future-ai">AI providers (future features)</h3>
        <p>
          If we ship an AI-powered feature later (for example, a conversational
          practice partner or speech feedback), we may send the text or audio
          you produce to a third-party AI service. We will only send what is
          needed for the feature to work, and we will update this policy before
          the feature ships so you know exactly what is involved.
        </p>

        <hr />

        <h2 id="where-stored">Where your data is stored</h2>
        <p>
          Your learning data is stored locally on your iPhone. If you use iCloud
          Backup, a copy may also live in your encrypted iCloud backup under
          Apple&apos;s control.
        </p>
        <p>
          Diagnostic reports and anonymous usage events flow to Sentry (servers
          in the United States). Subscription signals flow to RevenueCat
          (servers in the United States) and Apple.
        </p>
        <p>
          If you are located outside the United States, including in the
          European Economic Area or the United Kingdom, you understand that
          limited diagnostic and subscription data will be processed in the
          United States. We rely on standard contractual clauses and the
          providers&apos; own safeguards.
        </p>

        <hr />

        <h2 id="retention">How long we keep your data</h2>
        <ul>
          <li>
            <strong>On-device data:</strong> as long as you keep Inku installed.
            Deleting the app deletes everything.
          </li>
          <li>
            <strong>Subscription records:</strong> Apple and RevenueCat retain
            their own records for the periods required by their policies and
            by tax law.
          </li>
          <li>
            <strong>Diagnostic data:</strong> retained in anonymous, aggregated
            form for up to 90 days by our providers.
          </li>
        </ul>

        <hr />

        <h2 id="delete">How to delete your data</h2>
        <p>
          Delete the Inku app from your iPhone. That erases your learning
          progress, your settings, and the random install ID.
        </p>
        <p>
          If you also want us to delete the anonymous diagnostic events tied to
          your install ID, email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> with
          the install ID (you can find it in the app&apos;s Settings screen
          under &ldquo;About&rdquo;) and we will purge it within 30 days.
        </p>
        <p>
          You can stop paying for Inku Pro at any time by managing your
          subscription in your iPhone Settings (see our{" "}
          <a href="/terms">Terms of Service</a> for details).
        </p>

        <hr />

        <h2 id="security">Security</h2>
        <p>
          Every network request the app makes is sent over HTTPS. Diagnostic
          data and subscription signals are encrypted in transit.
        </p>
        <p>
          No system is perfect. If we ever discover a breach that affects the
          data we hold, we will let users know through an in-app notice or an
          App Store update note within 72 hours of confirming it.
        </p>

        <hr />

        <h2 id="children">Children&apos;s privacy</h2>
        <p>
          Inku is not directed at children under 13. We do not knowingly collect
          information from children under 13. If you believe a child is using
          the app, email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and we
          will help.
        </p>
        <p>
          Users between 13 and the age of majority in their country should have
          a parent or guardian review this policy first.
        </p>

        <hr />

        <h2 id="rights">Your rights</h2>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access the data we hold about you.</li>
          <li>Correct it.</li>
          <li>Delete it.</li>
          <li>Object to certain processing.</li>
        </ul>
        <p>
          Because most of your data lives on your device, you already have full
          access to it. For the anonymous diagnostic data we hold through our
          providers, email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and we
          will help.
        </p>

        <hr />

        <h2 id="changes">Changes to this policy</h2>
        <p>
          If we change this policy in a way that affects you, we will update the
          app and the date at the top, and surface the update in the App Store
          release notes. Small editorial edits (typos, clearer phrasing) do not
          trigger a notice.
        </p>

        <hr />

        <h2 id="contact">Contact us</h2>
        <p>Questions about this policy or your data:</p>
        <p>
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
        </p>
        <p>
          Inku is operated by {SITE.operator.legalName}, a sole proprietor based
          at {SITE.operator.address.street}, {SITE.operator.address.locality},{" "}
          {SITE.operator.address.region} {SITE.operator.address.postalCode},{" "}
          {SITE.operator.address.country}.
        </p>
      </LongFormLayout>
    </>
  );
}
