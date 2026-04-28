# Inku SEO and AEO Report

Last updated: April 28, 2026

## Claims Ledger

| Claim | Approved site fact | Source checked |
| --- | --- | --- |
| Kana taught | 184 kana total: hiragana and katakana, including basic, dakuon, and yoon forms | iOS DataSeeder |
| Basic kana charts | 46 basic hiragana and 46 basic katakana | Website tool pages and iOS seed data |
| N5 cards | 515 cards in the `jlpt-n5` bundle | iOS content catalog |
| N4 cards | 391 cards in the `jlpt-n4` bundle | iOS content catalog |
| Phrase packs | 4 packs: casual, polite, travel, anime | iOS content catalog |
| Phrase count | 349 phrases total | iOS content catalog |
| Visible launch bundles | 17 unlocked bundles | iOS content catalog |
| Audio | Main card library has bundled pronunciation audio. Missing surfaces can fall back to Apple voice. | iOS AudioManifest and AudioService |
| Progress | Learning progress is saved locally on iPhone with SwiftData | iOS app container setup |
| Offline | Core review content, progress, and bundled audio are local. Purchases, restores, diagnostics, and fallback voices may use Apple or app services. | iOS app services |
| Habit mechanics | Inku has streak and progress tracking, plus ink drops | iOS Home and Progress views |
| Pricing | $70.99 per year, $12.99 per month, 7-day free trial | Website pricing source of truth |

## Route-by-Route SEO Report

| Route | Status | Notes |
| --- | --- | --- |
| `/` | Fixed | Homepage copy now uses verified counts, removes fake testimonials, removes unsupported rating schema, and uses consistent CTA copy. |
| `/about` | Fixed | Replaced stale counts and false streak language. |
| `/privacy` | Fixed | Marked noindex. Breadcrumb remains valid. |
| `/terms` | Fixed | Marked noindex. Breadcrumb remains valid. |
| `/tools` | Added | New tools index prevents broken `/tools` breadcrumb targets. |
| `/tools/hiragana-chart` | Fixed | Added short answer box and kept Article, Tool, and Breadcrumb schema. |
| `/tools/katakana-chart` | Fixed | Added short answer box and kept Article, Tool, and Breadcrumb schema. |
| `/tools/kana-quiz` | Fixed | Added short answer box and kept Article, Tool, and Breadcrumb schema. |
| `/tools/stroke-order` | Fixed | Added short answer box and kept Article, Tool, and Breadcrumb schema. |
| `/tools/japanese-name-generator` | Fixed | Added short answer box and kept Article, Tool, and Breadcrumb schema. |
| `/authors` | Added | New authors index prevents broken `/authors` breadcrumb targets. |
| `/authors/bao-hua` | Covered | Person schema and breadcrumb now point to a real parent route. |
| `/guides` | Fixed | Added short answer box. |
| `/guides/*` | Partially fixed | Existing Article and Breadcrumb schema retained. Stale counts and unsupported audio claims were cleaned where found. |
| `/blog` | Covered | Existing metadata and internal links retained. |
| `/blog/*` | Partially fixed | Existing Article schema retained. Risky audio and fake attribution copy cleaned where found. |
| `/jlpt` | Fixed | Added short answer box and updated Inku N5/N4 counts. |
| `/jlpt/n5` to `/jlpt/n1` | Covered | Existing short answer boxes, metadata, Article schema, FAQ schema, and Breadcrumb schema retained. |
| `/japanese` | Covered | Existing metadata and internal links retained. |
| `/japanese/*` | Partially fixed | Existing topic pages retained. Audio wording cleaned where found. |
| `/vs` | Fixed | Added short answer box. |
| `/vs/*` | Fixed | Comparison pages now use shared AnswerBox, show official source links, show pricing last checked date, include affiliation note, and remove fake quote blocks. |
| `/alternatives` | Fixed | Added short answer box. |
| `/alternatives/*` | Fixed | Removed rendered fake testimonial section and cleaned stale claims. |
| `/sitemap.xml` | Fixed | App Router sitemap is now the only sitemap source and dedupes URLs. |
| `/robots.txt` | Fixed | App Router robots file is now the only robots source. |
| `/llms.txt` | Fixed | Updated counts, audio wording, privacy wording, and habit wording. |
| `/manifest.webmanifest` | Fixed | Removed false no-streak language. |

## Technical SEO Changes

- Removed unsupported `AggregateRating` schema.
- Removed `SearchAction` schema because there is no `/search` route.
- Changed Organization logo schema from missing `/logo.png` to `/icon-512.png`.
- Fixed Article schema image URL to the real `/api/og` route.
- Removed `next-sitemap` postbuild and generated public sitemap files.
- Kept `src/app/sitemap.ts` as the single sitemap source and added URL dedupe.
- Added `/tools` and `/authors` parent pages so breadcrumbs point to real pages.
- Marked legal pages noindex.

## Changed Pages and Components

- Homepage: hero, how it works, audio, daily habit, what is inside, pricing, FAQ, final CTA.
- About page.
- Guides index and selected guide/blog copy with stale or unsupported claims.
- JLPT hub.
- Tools index and five tool pages.
- Comparison index and all comparison detail pages through the shared component.
- Alternatives index and all alternative detail pages through the shared component.
- SEO schema helpers.
- Sitemap and robots setup.
- `llms.txt` and web manifest.
- Repo docs that referenced removed `next-sitemap`.

## Unresolved Assumptions

- App Store ID is still a placeholder until the iOS app is approved.
- Competitor pricing is shown with official source links and a last checked date, but exact competitor checkout prices can vary by country, platform, tax, and promotion.
- I did not add review or rating schema because there are no verified public reviews in the repo.
- I did not claim full offline behavior because purchases, restores, diagnostics, and missing-audio fallback are outside the pure local app path.
- I did not claim every card has native human recording because the app has bundled audio plus fallback behavior.

## Launch Checklist

- Run `pnpm run verify` before every push.
- Check production after Vercel deploy at `https://inkujapanese.com`.
- When App Store approval lands, set the real App Store ID and URL in Vercel.
- Re-run a route crawl after the App Store URL is live.
- Add real testimonials or App Store reviews only after they are public and verifiable.
- Keep pricing source of truth at $70.99 per year, $12.99 per month, and 7-day free trial unless Bao changes it.
