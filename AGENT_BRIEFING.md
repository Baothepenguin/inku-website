# Agent briefing: build the Inku marketing site end to end

You are building the complete marketing website for **Inku**, a native iOS Japanese learning app. Domain is registered: **inkujapanese.com**. This is a dedicated marketing channel responsible for driving organic installs, hosting legal docs, ranking on "best japanese learning app" queries, and converting Reddit/HN/Twitter traffic into App Store downloads.

You are building the ENTIRE SITE START TO FINISH in one pass. Not a v1. Not a phased release. The site ships complete: homepage, about, privacy, terms, guides, comparison pages, alternative pages, blog, JLPT hubs, topic hubs, tools. You deploy to Vercel when every page is done.

Do not rush to code. Read this entire document, invoke the skills listed near the end, confirm the plan in one paragraph, then execute.

---

## Part 1. Product context

- **Inku** is an iPhone app (iOS 18+, SwiftUI + SwiftData, local-first, no server-side accounts).
- Teaches Japanese through flashcards and spaced repetition: hiragana, katakana, N5 vocab (200 words), N4 vocab (~65 words), four phrase packs (casual, polite, travel, anime).
- Native voice acting via ElevenLabs (Shizuka voice). Every word and phrase has a pre-recorded pronunciation bundled in the app.
- Aesthetic: calm, calligraphic, sumi ink on washi paper. Deliberately the opposite of Duolingo. Not gamified, not streaks-pressuring.
- Monetization: Inku Pro subscription (yearly with 7-day free trial, monthly) via Apple IAP and RevenueCat.
- Target persona: adults 25 to 40 who tried Duolingo and bounced off the gamification. "Serious beginner who wants a calm tool, not a game."
- Legal operator: Bao Hua, sole proprietor, Calgary, Alberta, Canada.
- Support email: `app@inkujapanese.com`.
- Domain: `inkujapanese.com` (primary).
- Brand hard rule: NO em dashes (`—`). Anywhere. Ever. Use hyphens or rewrite. If you catch one in your own output, rewrite it before shipping.

---

## Part 2. Competitive research synthesis

Eight competing sites were studied. Here's what matters for Inku.

### What Calai.app does exceptionally well (design reference)

- **Device auto-detect + single App Store CTA.** No "Download on iOS / Android" choice. `getDeviceType()` runs on page load and every CTA badge redirects accordingly. Zero decision friction. Copy this pattern.
- **Influencer-testimonial card wall as primary social proof.** A 6-card asymmetric grid of real creators (photo background with pull-quote overlay), each card links to the original Instagram Reel. Not press logos. User-generated videos as trust signal.
- **Programmatic SEO via 3 blog templates:** "X vs Y" (20+ comparison pages targeting competitor searches), "X alternative" (capturing competitor branded traffic), "how many / best X" (top-of-funnel). 100+ posts, each 2500-3700 words, 3 App Store CTAs embedded inline.
- **Built on Astro plus Vercel.** Fast by default.
- **Calai's miss (we fix it):** No JSON-LD anywhere. No per-page OG images. We ship schema and auto-generated OG images from day one.

### What Duolingo and Bunpo reveal about mega-player SEO

- Duolingo's blog is on a subdomain (`blog.duolingo.com`, Ghost CMS) with thick internal linking but almost no links back to product. Operates as a standalone publication.
- Bunpo's blog is on-domain at `/blog/{language-slug}/{post-slug}/` (WordPress) with full `BlogPosting` schema. Cleaner for SEO equity.
- Both use a single keyword-first H1 per page, canonical tags, and `apple-itunes-app` smart banner meta.
- Neither has dedicated comparison pages ("vs Anki", "vs WaniKani", "vs Renshuu"). **That is Inku's open lane.**

### What LingoDeer and Lingopie show about programmatic SEO

- LingoDeer has 507 URLs via `/learn-languages/{lang_code}/{interface_lang}/learn-{language}-online` (21 target languages times 16 interface locales). Each renders the actual curriculum (Nationalities, Profession, て-Form, ない-Form, Giving & Receiving) as crawlable HTML. Curriculum-as-SEO-page is a real pattern.
- Lingopie has 2,543 URLs, 1,268 blog posts, 1,157 music-themed URLs, 80 TV-show pages. Content built around media the audience already loves.
- **Steal:** curriculum-as-SEO-page pattern, "learn Japanese with [anime title]" pages, always-on top promo banner.

### What Tofugu, NihongoFlashcards, and Noji teach about content moats

- **Tofugu owns "learn hiragana"** through a 10,000-word illustrated mnemonic guide from 2014. Still ranking. Their moat: custom illustrations plus deep resource reviews (485 tools catalogued). Every article has a named author with `/about/people/{name}/` bio page. BlogPosting schema includes full author object (name, url, jobTitle, description).
- **NihongoFlashcards** ranks on niche long-tail (wasei-eigo, onomatopoeia, body-part-verbs) because nobody else owns those queries. Author byline "nihongo" is weak, E-E-A-T suffers.
- **Noji** runs a 15,625-URL sitemap with programmatic comparison pages (`/ankipro-vs-anki/`, `/ankipro-vs-quizlet/`) and **tool pages** (`/ai-flashcard-generator/`, `/pdf-to-anki/`). Each tool URL targets a high-intent job-to-be-done query.
- **Obvious gap across all 3:** clean JLPT-level organization. NihongoFlashcards has zero JLPT tags. Tofugu buries level structure. **Second open lane for Inku.**

### Summary of patterns to steal

1. Calai's device auto-detect plus single-badge CTA.
2. Calai's influencer-testimonial grid (real UGC videos, Instagram Reel links).
3. LingoDeer's curriculum-as-SEO-page (render lesson tree statically).
4. Noji's programmatic comparison and tool pages.
5. Tofugu's author schema and bio pages (E-E-A-T foundation).
6. JLPT-level hub pages (nobody owns this).

---

## Part 3. Strategic frameworks

Apply these three before publishing anything.

### CORE (Content, Optimization, Relevance, Experience)

- **Content**: every page answers a real search-intent query. If you can't name the query, don't write the page.
- **Optimization**: keyword-first title tags, one H1 per page, proper H2/H3 hierarchy, custom meta description per page, internal linking density.
- **Relevance**: content matches the searcher's stage. Homepage targets decision. Blog posts target awareness. Comparison pages target comparison. Match intent to page type.
- **Experience**: page loads under 1.5s on 4G, Lighthouse Performance ≥ 95, responsive down to 375px, WCAG 4.5:1 contrast for body text.

### E-E-A-T (Google's trust framework)

- **Experience**: first-person voice in blogs ("I tried Anki for 6 months before building Inku, here's what broke"). Screenshots from the app. Specific timestamps.
- **Expertise**: Bao Hua's founder story on `/about`. Author bio pages at `/authors/[slug]`. Schema.author.url links to bio on every BlogPosting.
- **Authoritativeness**: custom illustrations, original research (run a real user survey post-launch), published-date plus last-updated date visible.
- **Trustworthiness**: accurate legal pages, working contact email (`app@inkujapanese.com`), transparent pricing, no dark patterns, cited sources.

### AEO and GEO (Answer Engine / Generative Engine Optimization)

This is how you get cited by ChatGPT, Perplexity, Google AI Overviews, Claude, and Grok. In 2026 this matters as much as traditional SERP ranking.

- **Structured data is entry cost.** Ship `SoftwareApplication`, `Organization`, `WebSite`, `BlogPosting`, `Product` (for comparison pages), `FAQPage` (for Q&A posts), `BreadcrumbList`, `AggregateRating`.
- **Answer-first writing.** Lead every post with a 1-2 sentence direct answer, then expand. AI engines extract the first answer-shaped chunk.
- **Cite sources inline.** LLMs favor content that cites. Link to primary sources.
- **Use the `geo-*` skills listed at the bottom** to audit every page before publishing.

---

## Part 4. Design spec (match the iOS app)

The site MUST feel like the app. Same aesthetic, same fonts, same palette. A visitor who goes site → App Store → app should feel one continuous brand.

### Fonts (all SIL OFL 1.1, free commercial use)

- **Fraunces** (variable serif, Production Type) — display headings, body serif. Via `next/font` from Google Fonts.
- **Satoshi** (sans, Indian Type Foundry) — UI labels, buttons, captions. Self-host woff2 files.
- **Klee One** (Japanese brush textbook style, Fontworks) — any Japanese characters on the page.

### Colors

- Cream background: `#FAF8F2`
- Ink text: `#1A1A1A`
- Matcha accent: `#2D8659` (primary CTAs, links, progress bars)
- Sakura pink: `#E85C5F` (hover states, sakura-themed pages only)
- Sun amber: `#F5A623` (sparingly, N3 JLPT color)
- Muted text: `#6B6B6B`
- Subtle text: `#8A8A8A` (WCAG-passing on cream)

### Texture and motifs

- **Washi paper grain** via inline SVG filter using `feTurbulence` at about 8% opacity, applied as fixed background. Never a bitmap.
- **Sumi brushstrokes** as SVG paths, decorative accents. One horizontal sweep on the hero, one diagonal slash behind quote blocks, one comma-shaped brush behind the paywall section.
- **iPhone mockups**: static WebP at 2x, about 700 x 700 per mockup. No animations on initial load (hurts LCP). Optional scroll-triggered parallax lift.

### Typography rules

- Hero headline: Fraunces 72-96px, weight 600, line-height 1.05.
- Body copy: Fraunces 18-20px, line-height 1.6.
- Uppercase tracking 1.6-2.0em for small labels ("FROM A LEARNER", "BEST VALUE").
- Lowercase serifs for a calm editorial feel.
- Never use emoji in product copy or legal pages. Emoji is for Twitter and TikTok only.

---

## Part 5. Tech stack (non-negotiable)

- **Next.js 15** App Router, TypeScript strict mode, `src/` dir.
- **Tailwind CSS 4** plus **shadcn/ui** for components. Configure theme tokens to match the color and font system above.
- **MDX** for blog, guides, comparison pages. Content in repo: `/content/blog/*.mdx`, `/content/guides/*.mdx`, `/content/vs/*.mdx`, `/content/alternatives/*.mdx`, `/content/jlpt/*.mdx`, `/content/japanese/*.mdx`. Use `@next/mdx` plus remark-gfm, rehype-slug, rehype-autolink-headings.
- **`@vercel/og`** for auto-generated OpenGraph images. Templates: homepage (brand hero), blog post (title + author + date on washi texture), comparison page (Inku vs X side-by-side).
- **`next-sitemap`** for sitemap.xml and robots.txt with ISR-friendly regeneration.
- **JSON-LD** via Next.js Metadata API. Every page ships structured data inline.
- **Analytics: Google Analytics 4** (GA4). Install via `next/script` with `strategy="afterInteractive"`. Measurement ID goes in `NEXT_PUBLIC_GA_ID` env var (Bao provides). Respect DNT where possible.
- **Deploy to Vercel.** Use the `vercel` CLI, never the dashboard.
- **Create a new Vercel project** named `inku-website` and link it via `vercel link` in this directory.

---

## Part 6. Site architecture (URL map)

```
/                              Homepage (decision-stage)
/download                      302 redirect to App Store with UTM params
/privacy                       Privacy Policy
/terms                         Terms of Service
/about                         Founder story, mission, E-E-A-T anchor
/authors/[slug]                Per-author bio page with linked posts
/blog                          Blog index (newest first, paginated)
/blog/[slug]                   Individual blog posts (short, opinionated)
/guides                        Pillar guides index
/guides/[slug]                 Ultimate Guide pillars (5000+ words each)
/vs                            Comparison pages index
/vs/[competitor]               One page per competitor
/alternatives/[competitor]     Separate template targeting "X alternative" queries
/jlpt                          JLPT hub index
/jlpt/[level]                  JLPT level hub (N5/N4/N3/N2/N1)
/japanese/[topic]              Topic hubs (hiragana, katakana, particles, kanji)
/tools/[name]                  Small interactive tools (hiragana chart, stroke order, kana quiz)
```

Rule: if you can't explain which search intent a URL targets, don't create it.

---

## Part 7. Content to write (not a priority list, a full scope)

Everything below ships before launch.

### Pillar guides (5000+ words each, custom illustrations, ultimate-guide format)

1. `/guides/learn-hiragana` — challenger to Tofugu's hiragana guide. Your own mnemonic system. 46 hiragana mnemonic illustrations (SVG, not stock), downloadable PDF worksheet, embedded audio clips. Title: "Learn Hiragana: Inku's Complete Guide".
2. `/guides/learn-katakana` — same treatment for katakana.
3. `/guides/jlpt-n5-vocabulary` — the definitive N5 list. 600 words organized by category and frequency. Downloadable Anki-compatible CSV.
4. `/guides/how-to-learn-japanese` — founder-voiced "how I'd do it from scratch now" guide. 6000 words. The backlink magnet.
5. `/guides/spaced-repetition-explained` — the science of SRS in plain English. 4000 words.
6. `/guides/japanese-particles-masterclass` — every core particle (は が を に で へ と から まで の も や など) explained with examples. 5000 words.

### Comparison pages

Template: honest trade-off table + scenarios where each wins + which app Inku is for + explicit "here's where we lose to them."

- `/vs/duolingo`
- `/vs/anki`
- `/vs/wanikani`
- `/vs/bunpo`
- `/vs/lingodeer`
- `/vs/renshuu`
- `/vs/busuu`
- `/vs/lingopie`
- `/vs/noji`

### Alternative pages (separate template, targets "X alternative" searches)

- `/alternatives/duolingo`
- `/alternatives/anki`
- `/alternatives/rosetta-stone`
- `/alternatives/babbel`
- `/alternatives/pimsleur`

### JLPT hub pages

- `/jlpt` — overview of all 5 levels, what each unlocks
- `/jlpt/n5` — N5 vocab + grammar + practice, tied to Inku's N5 deck
- `/jlpt/n4` — N4 vocab + grammar + practice, tied to Inku's N4 deck
- `/jlpt/n3` — skeletal for now (content waiting on app support)
- `/jlpt/n2` — skeletal for now
- `/jlpt/n1` — skeletal for now

### Topic hubs

- `/japanese/hiragana`
- `/japanese/katakana`
- `/japanese/kanji`
- `/japanese/particles`
- `/japanese/grammar`
- `/japanese/pronunciation`
- `/japanese/phrases`

### Blog posts (1500-2500 words, shorter, opinionated)

- "Can you actually learn Japanese in 10 minutes a day?"
- "Duolingo for 100 days: what I learned, what I wish I'd done differently"
- "The spaced repetition mistake that wastes 90% of learners' time"
- "Wasei-eigo: 50 English words the Japanese changed beyond recognition"
- "Moshi moshi: why Japanese phones aren't answered like yours"
- "Why I stopped using Anki (and what I built instead)" — founder story
- "How long does it take to learn Japanese? (A brutally honest timeline)"
- "The best way to learn hiragana in 3 days"
- "Japanese pitch accent: why most apps skip it and whether you should care"
- "Kanji learning strategies that actually stick"

### Tool pages (500 words plus embedded utility each)

- `/tools/hiragana-chart` — interactive grid with audio playback
- `/tools/katakana-chart` — same for katakana
- `/tools/stroke-order` — pick a kana, watch stroke animation
- `/tools/kana-quiz` — timed recognition quiz
- `/tools/japanese-name-generator` — fun, viral-potential utility

### Content rules

- **Experience-first voice.** First person. Specific. Date-stamped. Screenshots.
- **Answer-first paragraph.** Lead with the answer in 1-2 sentences, then expand.
- **One keyword target per page.** Title, H1, URL slug, first-paragraph all aligned.
- **Never generic AI content.** If it could describe any language app, rewrite it.
- **No em dashes.** Ever.
- **Custom illustrations over stock.** Pillar guides need illustrations. For shorter posts, use app screenshots.
- **Internal linking.** Every blog post links to at least 2 other posts + 1 pillar guide + 1 comparison page. Every comparison page links to the /vs index + at least 2 related comparisons. Every guide links to 3 related blog posts.

---

## Part 8. Technical requirements

- **Performance budget**: Lighthouse ≥ 95 on homepage. LCP < 1.5s on 4G. CLS < 0.05. INP < 200ms.
- **SEO**: Every page has `next/metadata` with title/description/OG/Twitter/canonical. Custom OG images via `@vercel/og`. JSON-LD structured data server-side.
- **Accessibility**: WCAG 2.1 AA. 4.5:1 contrast body text, 3:1 large text. Keyboard navigation. `aria-label` on every icon-only button. Dynamic Type respect (use `rem` for all typography).
- **Responsive**: mobile-first. 375px minimum width. Tested on iPhone SE 3 viewport.
- **Schema.org**:
  - Homepage: `Organization` + `WebSite` + `SoftwareApplication` + `AggregateRating`
  - Blog posts: `BlogPosting` with full `author` object (name, url, jobTitle, description)
  - Guides: `Article` (longer-form than BlogPosting)
  - Comparison pages: `Product` with `offers` + comparison markup
  - Tool pages: `SoftwareApplication` (each tool is itself a lightweight app)
  - All: `BreadcrumbList`
- **Apple smart banner meta tag**: `<meta name="apple-itunes-app" content="app-id=<ID>">` on every page.
- **GA4**: inject via `next/script`. Respect `Do-Not-Track`. Provide an opt-out UI in `/privacy`.

---

## Part 9. Conversion patterns (mandatory)

1. **Device auto-detect → single App Store badge.** Write a `<DownloadCTA />` client component that runs `getDeviceType()` on mount. iPhone → App Store. Android → Play Store placeholder (route to `/download/android-soon` for now). Desktop → QR code modal + App Store link. No "Choose your device" button.
2. **Apple smart banner meta** on every page.
3. **Sticky header** with minimal nav (Logo, Guides, Blog, Compare, Download) plus a prominent Download CTA.
4. **Download CTA injected 3x per blog post** (inline between sections).
5. **Influencer testimonial grid** on homepage — 6 asymmetric cards. Use placeholder video stills for now (take from public Pexels or Unsplash); Bao will source real user videos post-launch. Placeholder images should be tastefully credited.
6. **"From a learner" quote block** on homepage (same pattern as the in-app paywall). Italicized serif pull-quote with attribution.
7. **Single CTA focus per page.** Homepage primary = Download. Blog primary = Download. Comparison primary = Download. Never two primary CTAs on one page.

---

## Part 10. Skills to invoke

Invoke these as their turn comes up in the build order. Do not run all upfront.

- **`frontend-design`** — homepage and key landing page visual design.
- **`ui-ux-pro-max`** — overall IA and interaction design decisions.
- **`site-architecture`** — URL structure plan.
- **`ai-seo`** — AI-search (ChatGPT, Perplexity, AI Overviews) optimization.
- **`geo-technical`** — technical GEO audit before launch.
- **`geo-content`** — E-E-A-T content review.
- **`geo-schema`** — structured data generation plus validation.
- **`geo-citability`** — making content LLM-citable.
- **`schema-markup`** — specific schema types per page.
- **`programmatic-seo`** — comparison plus alternatives plus JLPT hub generation.
- **`content-strategy`** — editorial calendar and topic cluster planning.
- **`copywriting`** — all marketing copy (homepage, CTAs, metadata).
- **`page-cro`** — homepage conversion optimization.
- **`analytics-tracking`** — GA4 event setup.
- **`seo-audit`** — final pre-deploy audit of every page.

---

## Part 11. Execution order

1. **Confirm the mission** in one paragraph. Before writing code. Demonstrate understanding.
2. **Verify working directory.** You should be in `/Users/bao/Documents/Claude/App Dev/Inku/Inku Website/`. Run `pwd` to confirm. If not, cd into it.
3. **Scaffold Next.js 15.** `pnpm create next-app@latest .` with: TypeScript strict, Tailwind, App Router, src/, `@/*` alias, no turbo. Say yes to ESLint. Name the project `inku-website`.
4. **Initialize git.** `git init` and make a first commit after the scaffold.
5. **Install shadcn/ui** (`pnpm dlx shadcn@latest init`) and configure theme tokens matching the color + font system.
6. **Install MDX** plus plugins (`pnpm add @next/mdx @mdx-js/loader @mdx-js/react remark-gfm rehype-slug rehype-autolink-headings reading-time gray-matter`). Configure `next.config.mjs`.
7. **Install fonts.** `next/font` for Fraunces. Self-host Satoshi (download .woff2 from Indian Type Foundry). Self-host Klee One (Google Fonts download or variable font from Fontworks).
8. **Build the homepage.** Real copy. No lorem ipsum. Every section shipped at final quality. Show Bao for review before continuing.
9. **Build `/privacy` and `/terms`.** Paste verbatim from `/Users/bao/Documents/Claude/App Dev/Inku/Privacy Policy.md` and `/Users/bao/Documents/Claude/App Dev/Inku/Terms of Service.md`. Style as long-form reading pages.
10. **Build `/about`.** Founder story in Bao Hua's voice, from first principles (the app is anti-Duolingo, calm, for adult learners).
11. **Build the 6 pillar guides.** The `/guides/learn-hiragana` is the longest single piece; expect a full day of work on it alone. Real copy, custom SVG illustrations you write from scratch or adapt from Japanese-language-learning fair-use references.
12. **Build all 9 comparison pages.** Single template, populated per-competitor from factual research. Honest. Include places where Inku loses.
13. **Build all 5 alternative pages.** Similar template, different search intent.
14. **Build all 6 JLPT hub pages.** The N5/N4 ones are full content; N3/N2/N1 get "coming soon" pattern but still render useful skeletal content (overview, level description, recommended paths).
15. **Build all 7 topic hubs.**
16. **Build all 10 blog posts.**
17. **Build all 5 tool pages.** Interactive components with real utility (the hiragana chart must actually play audio on tap).
18. **Ship OG image generation** via `@vercel/og` with 3 templates: homepage, article, comparison.
19. **Ship sitemap + robots.** Auto-generated on build.
20. **Ship structured data** per the list in Part 8.
21. **Wire GA4** via `next/script`.
22. **Run all SEO skills** (`geo-technical`, `geo-content`, `geo-schema`, `geo-citability`, `seo-audit`) over the full site. Fix every finding before deployment.
23. **Create a new Vercel project.** `pnpm add -g vercel` (if needed) → `vercel link` → pick "Create new project" → name it `inku-website`.
24. **Configure environment variables** in Vercel: `NEXT_PUBLIC_GA_ID` (Bao provides), `NEXT_PUBLIC_APP_STORE_ID` (Bao provides), `NEXT_PUBLIC_APP_STORE_URL` (Bao provides).
25. **Deploy to production**: `vercel --prod`.
26. **Connect the domain**: `vercel domains add inkujapanese.com` and follow the DNS instructions. Bao will flip the DNS at his registrar.
27. **Run a Lighthouse audit** against the production URL. Report scores.
28. **Write `README.md`** covering: how to run locally, how to add a blog post, how to add a comparison page, how to add a guide, how to add a tool, how to regenerate OG images, how to redeploy, where env vars live, how to update the domain connection.
29. **Push to GitHub.** `gh repo create Baothepenguin/inku-website --public --source=. --remote=origin --push`. Link the GitHub repo to the Vercel project so future pushes auto-deploy.
30. **Final report to Bao.** What shipped, what's pending DNS, Lighthouse scores, any content Bao needs to review personally.

---

## Part 12. Hard constraints (never violate)

- NEVER write Lorem Ipsum or placeholder content. Real copy or ask.
- NEVER use em dashes anywhere. In copy, legal docs, or display comments.
- NEVER use emoji in product copy or legal pages.
- NEVER ship content that reads like generic AI. If it could describe any Japanese learning app, rewrite it in Bao's voice.
- NEVER add third-party trackers beyond GA4 without explicit approval.
- NEVER skip schema, OG images, or sitemap. Entry cost, not polish.
- NEVER create a URL you can't name the search intent for.
- NEVER phase the build. Ship everything end to end.
- ALWAYS write in second person, short paragraphs, scannable headings.
- ALWAYS push to GitHub as you complete each milestone.
- ALWAYS prefer CLI over dashboard. `vercel`, `gh`, `pnpm` — in that order.
- ALWAYS use the existing skills before writing original strategy.

---

## Part 13. Source files to reference

- **Privacy Policy** to paste verbatim: `/Users/bao/Documents/Claude/App Dev/Inku/Privacy Policy.md`
- **Terms of Service** to paste verbatim: `/Users/bao/Documents/Claude/App Dev/Inku/Terms of Service.md`
- **Product and ops context**: `/Users/bao/Documents/Claude/App Dev/Inku/CLAUDE.md`
- **iOS codebase** (for screenshots, exact color hex values, exact font files): `/tmp/yugen-work/rork-yugen/ios/Inku/`. Specifically `Theme.swift` for the canonical palette.
- **App Store badges**: download the latest official Apple badge SVGs from Apple's marketing assets page.

---

## Part 14. Start now

Step 1: confirm the mission in one paragraph. Demonstrate you understand you're building the ENTIRE site start to finish, that you'll match the app's aesthetic, that every page has a search intent and structured data, that you'll follow Alberta-law sole-prop branding (Bao Hua), and that you'll deploy to Vercel with the `inkujapanese.com` domain.

Then step 2.
