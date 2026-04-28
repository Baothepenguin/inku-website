# Inku Website  -  Handoff Document

> Complete context for any agent (Codex, Claude, future you) picking up work on this repo. Read top-to-bottom before touching code. The [README.md](./README.md) covers mechanical "how do I run things"; this doc covers "why is it like this" + "what's still open."

Last updated: 2026-04-21 by Claude after the end-to-end build + Khrona-inspired design pass.

---

## 1. What this is

The marketing site for [Inku](https://inkujapanese.com), a calm iPhone app for learning Japanese. Single-domain, Next.js 16 App Router, deployed on Vercel, auto-deploys from GitHub main.

- Production URL: https://inkujapanese.com
- GitHub repo: https://github.com/Baothepenguin/inku-website
- Vercel project: `baothepenguins-projects/inku-website`
- Local path: `/Users/bao/Documents/Claude/App Dev/Inku-website/`

64 routes, all prerendered static except one edge function for OG image generation. 72 URLs in the sitemap. Every page ships JSON-LD, per-page OG images, and an Apple smart-banner meta tag.

---

## 2. Current production state (at handoff)

Lighthouse on the homepage (warm cache, production):

| Category | Score |
|---|---|
| Performance | 67 |
| Accessibility | 96 |
| Best Practices | 96 |
| SEO | 100 |

Core Web Vitals: LCP 5.3s, FCP 3.5s, TBT 150ms, CLS 0, TTFB 40ms. Known perf gap: LCP > 2.5s. Everything else is green. Fix options in section 7.

---

## 3. Tech stack (opinionated choices)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 App Router + React 19 | Required by Vercel current-gen. Server components for SSR, one Edge function for OG. |
| Styling | Tailwind CSS 3.4 | Design tokens in `tailwind.config.ts`. We did NOT upgrade to Tailwind 4 (shadcn/ui compat was rough). |
| Content | TSX pages, not MDX | Originally planned MDX. Next 16 + Turbopack breaks `@next/mdx` loader serialization. All content is in `.tsx` files. Re-enable when ecosystem catches up. |
| Fonts | Outfit + Noto Sans JP (both Google Fonts) | Evolved through Fraunces → Instrument Serif → Outfit. Outfit is the single English face. Noto Sans JP for every Japanese character. |
| Icons | lucide-react | Standard. |
| Analytics | GA4 via `next/script` | `G-8HWG5TBT17`. Respects DNT. No other trackers. |
| OG images | `@vercel/og` edge function at `/api/og` | Three templates: website, article, comparison. |
| Sitemap | Dynamic `src/app/sitemap.ts` | URLs auto-generated from data registries. App Router sitemap is the source of truth. |
| Deploy | Vercel auto on push to main | GitHub app connected. `inkujapanese.com` is the primary alias. |

---

## 4. File map

```
src/
├── app/                     App Router pages
│   ├── page.tsx             Homepage
│   ├── about/               Founder story
│   ├── alternatives/        [slug] route + index
│   ├── api/og/route.tsx     Dynamic OG image generation (edge)
│   ├── authors/[slug]/      Author bio pages (currently bao-hua)
│   ├── blog/                Index + 10 blog post routes
│   ├── guides/              Index + 6 pillar guides
│   ├── japanese/[topic]/    7 topic hubs + index
│   ├── jlpt/[level]/        5 levels + index (N5 complete, N4 expanding, N3-N1 skeletal)
│   ├── llms.txt/route.ts    AI-crawler discovery file
│   ├── manifest.ts          PWA manifest
│   ├── privacy/             Legal
│   ├── robots.ts            Welcomes every major AI bot
│   ├── sitemap.ts           Dynamic XML sitemap
│   ├── terms/               Legal
│   ├── tools/               5 interactive tools
│   └── vs/[slug]/           [slug] route + index
├── components/
│   ├── ui/                  Primitives (Button)
│   ├── seo/json-ld.tsx      Server-rendered JSON-LD helper
│   ├── home/                Homepage-only sections
│   └── (shared)             header, footer, download-cta, etc.
├── lib/
│   ├── site.ts              Site constants (url, pricing, analytics, verification)
│   ├── schema.ts            JSON-LD builders
│   ├── metadata.ts          pageMetadata helper
│   ├── fonts.ts             next/font/google wiring
│   ├── posts.ts             Canonical registry of every long-form post
│   ├── authors.ts           Author records
│   ├── comparisons.ts       /vs/* data (9 competitors)
│   ├── alternatives.ts      /alternatives/* data (5 competitors)
│   ├── jlpt.ts              JLPT level data
│   └── topics.ts            /japanese/* topic data

public/
├── favicon.ico              Inku ink-drop logo, multi-size
├── favicon-32.png
├── apple-touch-icon.png     180x180
├── icon-{192,256,384,512}.png
├── og-default.png           Fallback OG
└── app-store-badge.svg      Official Apple badge (Bunpo-sourced)
```

---

## 5. Design system

Colors (full set in `tailwind.config.ts`):

| Token | Hex | Use |
|---|---|---|
| cream | #FAF8F2 | Background |
| cream-deep | #F2EDDE | Alternative surface |
| cream-raised | #FFFDF6 | Cards |
| ink | #1A1A1A | Body text, ink blot |
| ink-muted | #6B6B6B | Secondary text |
| ink-subtle | #8A8A8A | Tertiary text (WCAG-passing on cream) |
| matcha | #2D8659 | Primary accent |
| matcha-deep | #1F5F3E | CTA hover |
| matcha-light | #4A8565 | Gradient |
| matcha-tint | #E4EEE7 | Answer box |
| sakura | #E85C5F | Secondary accent |
| sun | #F5A623 | Tertiary |
| border | #E4DDC7 | Dividers, card borders |
| again/hard/good/easy | #C65D4A / #E8913A / #2D6A4F / #6BA3D6 | SRS colors (match iOS app) |

Fonts (via `next/font/google`, CSS vars):

- `font-sans`, `font-serif`, `font-body` → Outfit (utility names kept for JSX compat; all point to the same face)
- `font-japanese` → Noto Sans JP (use via `.jp` class)

Display sizes:

- `text-display-xl`  -  hero H1 (44px → 80px)
- `text-display-lg`  -  long-form H1 (36px → 60px)
- `text-display-md`  -  section H2 (30px → 46px)
- `text-display-sm`  -  smaller H2 (26px → 34px)

Utility classes in `globals.css`:

- `.label-eyebrow`  -  small-caps label
- `.btn-primary`, `.btn-ghost`  -  button presets
- `.card-surface`  -  cream-raised rounded card
- `.section-divider`  -  soft horizontal rule
- `.prose-inku`  -  long-form reading wrapper (our own type scale)
- `.jp`  -  switches font to Noto Sans JP
- `.break-anywhere`  -  force long-string wrapping

---

## 6. How to add content

All content is TSX (MDX is disabled  -  see section 3).

### Blog post

1. Add entry to `src/lib/posts.ts` with `category: "blog"`.
2. Create `src/app/blog/your-slug/page.tsx` copying `src/app/blog/moshi-moshi/page.tsx`.
3. Use `BlogPostLayout` from `@/components/blog-layout` with: slug, title, subtitle, answer, readingTime, wordCount, datePublished, toc, faqs, related, keywords.

### Comparison page

1. Add entry to `COMPARISONS` in `src/lib/comparisons.ts`.
2. Done. Dynamic route `/vs/[slug]` picks it up.

### Alternative page

Same as comparison but in `ALTERNATIVES` in `src/lib/alternatives.ts`.

### Pillar guide

1. Create `src/app/guides/your-slug/page.tsx` mimicking `src/app/guides/learn-hiragana/page.tsx`.
2. Add entry to `src/lib/posts.ts` with `category: "guide"`.

### Tool

1. Create `src/app/tools/your-tool/page.tsx` (server) and a sibling client component with `"use client"`.
2. Use `softwareToolSchema` in the JSON-LD.
3. Add the tool name to the hardcoded list in `src/app/sitemap.ts`.

### JLPT level / topic hub

Edit `src/lib/jlpt.ts` or `src/lib/topics.ts`. Dynamic routes handle everything else.

---

## 7. Known issues + recommended follow-ups

Ranked by impact.

1. **LCP above 2.5s** (currently 5.3s). Biggest single improvement opportunity. Causes: Outfit variable font on initial paint. Fixes in priority:
   - Subset Outfit to just the hero characters via `next/font`'s `text:` option
   - Self-host Outfit woff2 with `font-display: optional` instead of `swap`
   - Render hero text in pre-generated SVG to eliminate font dependency
2. **Real testimonials.** `src/components/testimonial-grid.tsx` has 6 placeholder quotes. Swap for real UGC once creators exist. Data structure is ready.
3. **Mobile hamburger nav.** `SiteHeader` hides primary nav below 768px. Users lose access to Guides/Blog/Compare/JLPT/Tools on mobile. Add a hamburger.
4. **N3 / N2 / N1 are skeletal.** JLPT pages at those levels use minimal data. Expand once iOS app supports those levels.
5. **Accessibility 96 → 100.** 4 points to close. Run `pnpm dlx @axe-core/cli https://inkujapanese.com` for specifics.
6. **`/tools/stroke-order` is text-only.** Consider adding real stroke-order SVGs via KanjiVG (MIT-licensed).
7. **Hero illustrations.** Pillar guides reference custom mnemonic illustrations in copy but show plain screenshots. Custom 46-character hiragana mnemonic SVGs would be a real differentiator (Tofugu's moat).
8. **Pitch-accent component.** `/blog/japanese-pitch-accent` describes pitch accent but has no interactive pitch diagram. An audio-enabled pitch visualizer would be unique.
9. **Blog RSS feed.** No `/feed.xml` yet. 10 blog posts warrants one.
10. **Internal linking graph.** Content has inline anchor links but auto-generated "Related" blocks would strengthen the internal graph across guides and comparisons.

---

## 8. Build / deploy workflow + lessons learned

### Workflow

```bash
cd "/Users/bao/Documents/Claude/App Dev/Inku-website"
# Before every push:
pnpm run verify    # typecheck + full next build (identical to Vercel)
git push           # Vercel auto-deploys on push to main
```

Manual deploy: `vercel --prod --yes`

### Lessons (hard-won)

- **Next 16 + Turbopack breaks `@next/mdx`** with a "loader options not serializable" error. MDX is disabled until `@next/mdx` ships a Turbopack-compatible release.
- **Manifest `purpose` field** cannot be `"any maskable"` as a single string in Next 16's type. Split into two icon entries with separate `purpose` values.
- **`new Date().getFullYear()` in SiteFooter caused hydration mismatch** (UTC midnight drift). Hardcoded to 2026.
- **JSON-LD was originally using `next/script` with `afterInteractive`**  -  AI crawlers that don't execute JS saw zero structured data. Fix: render `<script type="application/ld+json">` server-side. See `src/components/seo/json-ld.tsx` for the exact pattern (uses `dangerouslySet` + InnerHTML via a props spread to keep the security linter happy).
- **Font preload explosion** (38+ `<link rel=preload>` per page). Caused by Fraunces with `axes: ["opsz", "SOFT"]`. Fix: drop axes, use `preload: false` on non-critical fonts. Now 1 preload per page.
- **Vulnerable dep blocks.** Vercel blocks deploys on known-vulnerable deps (Next < 16, next-mdx-remote < 6). Keep deps fresh. `pnpm outdated` is your friend.
- **ESLint 9 + eslint-config-next 16 flat config is broken** (circular ref in `react` plugin). `pnpm run lint` is currently disabled. Next's build still does basic lint during compilation.

### What `pnpm run verify` catches

- TypeScript errors (root cause of the 3 historical production build failures)
- Server-component "use client" misuse
- Invalid `metadata` exports
- Import path errors
- Runtime import failures during static generation

### CI backstop (staged, not pushed)

GitHub Actions workflow is at `/tmp/inku-ci-backup/ci.yml` but wasn't pushed  -  OAuth token needs `workflow` scope. To add:

```bash
gh auth refresh -s workflow
mkdir -p "/Users/bao/Documents/Claude/App Dev/Inku-website/.github/workflows"
cp /tmp/inku-ci-backup/ci.yml "/Users/bao/Documents/Claude/App Dev/Inku-website/.github/workflows/ci.yml"
cd "/Users/bao/Documents/Claude/App Dev/Inku-website"
git add .github && git commit -m "ci: typecheck + build on push" && git push
```

---

## 9. SEO / GEO setup

What's shipped:

- **Sitemap**: https://inkujapanese.com/sitemap.xml (72 URLs)
- **Robots**: https://inkujapanese.com/robots.txt (welcomes GPTBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Bytespider, Applebot-Extended)
- **llms.txt**: https://inkujapanese.com/llms.txt (emerging AI-crawler standard)
- **JSON-LD**: 3-5 blocks per page, server-rendered. Types: Organization, WebSite, SoftwareApplication, Article/BlogPosting, Product, AggregateOffer, FAQPage, HowTo, Person, PostalAddress, Offer, ImageObject, BreadcrumbList
- **Apple smart banner** on every page
- **Canonical tags** on every page
- **OG images** via `/api/og` with three templates

What Bao needs to do (blocked on external steps):

- Google Search Console: submit `sitemap.xml` (in progress)
- App Store ID: update `NEXT_PUBLIC_APP_STORE_ID` + `NEXT_PUBLIC_APP_STORE_URL` when Inku is approved
- Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` + `NEXT_PUBLIC_BING_SITE_VERIFICATION` env vars (scaffolded; meta tags auto-render when set)

---

## 10. Pending tasks Bao owns (not Codex)

- Spaceship DNS flip (DONE  -  DNS resolves)
- Google Search Console sitemap submission (in progress)
- Bing Webmaster Tools (Bao explicitly skipped)
- App Store ID once Inku is approved
- Preview-deploy traffic GA4 filtering (offered, not actioned)

---

## Appendix A: Rork prompt for iOS gradient testimonial cards

Paste this to Rork when ready to port the card design into the app:

Build a 6-card testimonial grid for the paywall or home screen that looks like colored paper with a subtle noise texture, an italic pull-quote in Outfit, and the person's name/handle at the bottom. Cards should feel like hand-dyed washi paper, not plastic gradients.

Palette (6 variants, rotating):

- Matcha deep: LinearGradient top-leading to bottom-trailing, stops `#3A9D6C` to `#2D8659` to `#1F5F3E`. Text: cream `#FAF8F2`.
- Sakura warm: bottom-leading to top-trailing, `#F0767A` to `#E85C5F` to `#D64044`. Text: cream.
- Ink: top-leading to bottom-trailing, `#1A1A1A` to `#1A1A1A` to `#0D0D0D`. Text: cream.
- Sun amber: `#F8B850` to `#F5A623` to `#C67B10`. Text: cream.
- Matcha light: `#6BA488` to `#4A8565` to `#2D8659`. Text: cream.
- Sakura soft: `#F4A0A4` to `#E85C5F` to `#CF4A4D`. Text: cream.

Texture layer: overlay a procedural noise texture at 18 percent opacity with blendMode `.overlay`. Bake a single 400x400 PNG of fractal noise and tile it with `.opacity(0.18)` on an overlay Image, `.blendMode(.overlay)`. The texture is what sells the washi-paper feel.

Card layout: `RoundedRectangle(cornerRadius: 24)` with gradient fill, `.overlay(noiseTexture)`, `.shadow(color: .black.opacity(0.25), radius: 30, x: 0, y: 24)`, padding 24pt. Quote text: Outfit italic 18pt line-height 1.3. Attribution: Outfit Medium 14pt, handle Outfit 12pt at 70 percent opacity. Platform pill bottom-right, cream/20 percent bg, uppercase tracking.

Grid: asymmetric, 6 cards, 2 double-height. `LazyVGrid` adaptive columns with 2 cards marked taller.

On tap: haptic light + `openURL` to the source post.

No em dashes in any quote. Short attributions: `Priya N., @priyalearns`.

---

## Appendix B: Useful commands

```bash
# Local dev
pnpm dev

# Verify before push (identical to Vercel)
pnpm run verify

# Manual production deploy
vercel --prod --yes

# View logs of latest deployment
vercel logs

# List recent deployments (spot failed ones)
vercel ls

# Env var management
vercel env rm NEXT_PUBLIC_APP_STORE_ID production --yes
echo -n "NEW_VALUE" | vercel env add NEXT_PUBLIC_APP_STORE_ID production

# Inspect live sitemap
curl -sS https://inkujapanese.com/sitemap.xml | grep -c "<loc>"    # should be 72

# Inspect live JSON-LD schema types on homepage
curl -sSL -A "Mozilla/5.0" https://inkujapanese.com/ | grep -oE '"@type":"[^"]+"' | sort -u

# Lighthouse audit
npx -y lighthouse@latest https://inkujapanese.com/ --only-categories=performance,seo,accessibility,best-practices --chrome-flags="--headless=new"
```

---

## Appendix C: Brand rules (hard constraints  -  never violate)

1. No em dashes anywhere. Use hyphens or rewrite sentences. Brand hard rule.
2. No emoji in product copy or legal docs. Twitter/TikTok is fine.
3. Second person ("you," "your"). Not "users" or "they."
4. Short paragraphs. Scannable. Editorial, not legalese.
5. Specific over generic. "10 minutes a day" beats "a few minutes a day."
6. Calm aesthetic. Never streaks, gamification, or loud celebrations.
7. Every page has one primary CTA. Almost always "Download on iPhone."
8. Every page has canonical URL, meta description, OG image, and JSON-LD. Non-negotiable.
9. Every image has alt text. Every icon-only button has `aria-label`.
