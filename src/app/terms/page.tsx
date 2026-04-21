import type { Metadata } from "next";
import { LongFormLayout } from "@/components/long-form-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The rules of using Inku. Plain language, sole-proprietor, Alberta governing law.",
  path: "/terms",
});

const UPDATED = "April 21, 2026";

export default function TermsPage() {
  return (
    <>
      <JsonLd
        id="terms"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LongFormLayout
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Your agreement for using Inku. Plain language. Alberta governing law. Apple-routed billing."
        updated={UPDATED}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ]}
      >
        <p>
          These Terms govern your use of Inku, the Japanese learning app for
          iPhone. By using Inku, you agree to these Terms. If you disagree,
          please do not use the app.
        </p>
        <p>
          We wrote this in plain language. If something is unclear, email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and we
          will explain.
        </p>

        <hr />

        <h2 id="who">1. Who we are</h2>
        <p>
          Inku is operated by {SITE.operator.legalName}, a sole proprietor
          based in Calgary, Alberta, Canada (&ldquo;we&rdquo;, &ldquo;us&rdquo;). You are
          &ldquo;you&rdquo;.
        </p>

        <hr />

        <h2 id="eligibility">2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use Inku. If you are under the
          age of majority in your country, your parent or guardian must review
          and accept these Terms on your behalf.
        </p>
        <p>
          By installing and opening the app you confirm that you meet these
          age requirements.
        </p>

        <hr />

        <h2 id="your-data">3. Your data lives on your device</h2>
        <p>
          Inku does not require an account. Your learning progress, settings,
          and plan live on your iPhone.
        </p>
        <p>That means:</p>
        <ul>
          <li>If you delete the app, your data is gone.</li>
          <li>If you use iCloud Backup, Apple may include Inku in your encrypted backup.</li>
          <li>If you install Inku on a new iPhone without restoring from backup, you start fresh.</li>
        </ul>
        <p>
          We do not store your learning data on our own servers. See the{" "}
          <a href="/privacy">Privacy Policy</a> for the full list of what we
          do receive.
        </p>

        <hr />

        <h2 id="subscriptions">4. Subscriptions and payments</h2>

        <h3 id="how-it-works">How it works</h3>
        <p>
          Inku offers an optional subscription, Inku Pro. Inku Pro is billed
          through Apple In-App Purchase and managed via RevenueCat.
        </p>
        <ul>
          <li>You can pick a monthly or yearly plan.</li>
          <li>
            The yearly plan may include a free trial. If it does, we will tell
            you before you sign up.
          </li>
          <li>
            Your subscription starts immediately after Apple processes the
            payment (or at the end of the trial, if applicable).
          </li>
        </ul>

        <h3 id="auto-renewal">Auto-renewal</h3>
        <p>
          Subscriptions renew automatically at the end of each billing period.
          Apple charges the Apple ID on file. You will not be asked to
          reconfirm each time.
        </p>
        <p>
          Apple will try to renew your subscription within 24 hours of
          expiration. If the renewal fails, Apple will retry and may pause
          access until the payment succeeds.
        </p>

        <h3 id="cancel">How to cancel</h3>
        <p>You can cancel at any time in your iPhone:</p>
        <ol>
          <li>
            Open <strong>Settings</strong>.
          </li>
          <li>
            Tap your <strong>name</strong> at the top.
          </li>
          <li>
            Tap <strong>Subscriptions</strong>.
          </li>
          <li>
            Tap <strong>Inku</strong> and then <strong>Cancel Subscription</strong>.
          </li>
        </ol>
        <p>
          Cancellation takes effect at the end of the current billing period.
          You keep Inku Pro until then.
        </p>

        <h3 id="refunds">Refunds</h3>
        <p>
          Because Apple handles billing, Apple handles refunds. We do not issue
          refunds from Inku directly.
        </p>
        <p>
          If you believe a charge is a mistake, request a refund through Apple:
        </p>
        <ul>
          <li>
            On iPhone: <strong>reportaproblem.apple.com</strong>.
          </li>
          <li>
            Or tap the receipt in your email and follow Apple&apos;s
            instructions.
          </li>
        </ul>
        <p>
          Apple evaluates every refund request individually. We have no
          visibility into the decision.
        </p>

        <h3 id="price">Price changes</h3>
        <p>
          If we change the price of a subscription plan, we will notify you
          before the change takes effect. The new price applies only to the
          next billing cycle after the notice period Apple requires. You can
          cancel before the new price takes effect and keep the old price
          until your current period ends.
        </p>

        <hr />

        <h2 id="acceptable">5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use Inku for anything illegal.</li>
          <li>Reverse-engineer, decompile, or tamper with the app.</li>
          <li>Share, resell, or sublicense your access to Inku Pro.</li>
          <li>Use automated tools to scrape content out of the app.</li>
          <li>Submit abusive content through the feedback or flag features.</li>
        </ul>
        <p>
          If you break these rules we may restrict your access to Inku Pro
          without a refund.
        </p>

        <hr />

        <h2 id="content">6. Content ownership</h2>

        <h3 id="our-content">Our content</h3>
        <p>
          All learning content in Inku (vocabulary, phrases, audio recordings,
          illustrations, copywriting, curriculum design, visual design) belongs
          to us. We license it to you for personal, non-commercial use while
          you have the app installed.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Copy, mirror, or republish our content outside Inku.</li>
          <li>Use our content to train AI models.</li>
          <li>Pass off our content as your own.</li>
        </ul>

        <h3 id="your-content">Your content</h3>
        <p>
          Anything you produce in Inku (feedback you send us through the flag
          feature, notes you make, data you generate through use) belongs to
          you. Because it lives on your device, you control it directly.
        </p>

        <h3 id="feedback-policy">Feedback</h3>
        <p>
          If you send us feedback, a feature request, or a bug report, we may
          use it to improve Inku without owing you anything. You keep any
          rights you already had.
        </p>

        <hr />

        <h2 id="disclaimer">7. Disclaimer of warranties</h2>
        <p>
          Inku is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
          We try hard to make it reliable and accurate, but we cannot promise:
        </p>
        <ul>
          <li>That every translation or pronunciation is perfect.</li>
          <li>That the app will be available 100 percent of the time.</li>
          <li>That your learning will produce any specific result.</li>
          <li>
            That we will preserve your data if you do not back it up yourself
            through your iCloud account.
          </li>
        </ul>
        <p>Language learning depends on you. Inku is a tool, not a guarantee.</p>
        <p>
          To the fullest extent allowed by law, we disclaim all warranties,
          express or implied, including warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
        </p>

        <hr />

        <h2 id="liability">8. Limitation of liability</h2>
        <p>
          To the fullest extent allowed by law, our total liability to you for
          any claim arising out of these Terms or your use of Inku is limited
          to the amount you paid us in the 12 months before the claim, or 50 US
          dollars, whichever is greater.
        </p>
        <p>
          We are not responsible for indirect, incidental, special, or
          consequential damages, or for lost profits or lost data.
        </p>
        <p>
          Some jurisdictions do not allow these limitations. If you live in
          one of those jurisdictions, our liability is limited to the maximum
          extent allowed by the law where you live.
        </p>

        <hr />

        <h2 id="termination">9. Termination</h2>

        <h3 id="by-you">By you</h3>
        <p>
          You can stop using Inku at any time. Delete the app from your iPhone.
          If you are a subscriber, cancel your subscription in the App Store
          first so you are not billed again.
        </p>

        <h3 id="by-us">By us</h3>
        <p>
          We may restrict your access to Inku Pro if you break these Terms, or
          remove the app from the App Store entirely, with reasonable notice.
        </p>
        <p>
          If we remove Inku Pro from sale, active subscribers keep their access
          through the end of the current billing cycle.
        </p>

        <hr />

        <h2 id="changes-to-app">10. Changes to the app</h2>
        <p>We are an indie product and we change quickly. We may:</p>
        <ul>
          <li>Add, remove, or redesign features.</li>
          <li>Change what is included in the free tier versus Inku Pro.</li>
          <li>Discontinue the app entirely, with reasonable notice.</li>
        </ul>
        <p>
          If we make a change that meaningfully reduces what you are paying
          for, we will surface a notice in the app before it takes effect so
          you can cancel.
        </p>

        <hr />

        <h2 id="changes-to-terms">11. Changes to these Terms</h2>
        <p>
          If we change these Terms in a way that affects you, we will surface
          a notice in the app and update the date at the top. Continued use of
          Inku after the change means you accept the new Terms.
        </p>
        <p>
          Small editorial edits (typos, clearer phrasing) do not require notice.
        </p>

        <hr />

        <h2 id="law">12. Governing law</h2>
        <p>
          These Terms are governed by the laws of{" "}
          <strong>Province of Alberta, Canada</strong>, without regard to its
          conflict-of-law rules. Any dispute arising out of these Terms or your
          use of Inku will be brought in the courts of{" "}
          <strong>Province of Alberta, Canada</strong>, and you consent to the
          jurisdiction of those courts.
        </p>
        <p>
          If you live in a country that gives you the right to bring a claim
          in your local courts under local consumer-protection law, nothing
          here takes that right away.
        </p>

        <hr />

        <h2 id="severability">13. Severability</h2>
        <p>
          If any part of these Terms is found to be unenforceable, the rest
          still applies.
        </p>

        <hr />

        <h2 id="contact-terms">14. Contact us</h2>
        <p>Questions about these Terms, your subscription, or anything else:</p>
        <p>
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
        </p>
        <p>
          Inku is operated by {SITE.operator.legalName}, a sole proprietor
          based at {SITE.operator.address.street},{" "}
          {SITE.operator.address.locality}, {SITE.operator.address.region}{" "}
          {SITE.operator.address.postalCode}, {SITE.operator.address.country}.
        </p>
      </LongFormLayout>
    </>
  );
}
