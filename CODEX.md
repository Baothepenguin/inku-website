# Instructions for Codex (or any agent continuing this work)

You are picking up the Inku marketing website. Production is already live at https://inkujapanese.com. Your job is to improve it visually, structurally, and in performance, not to rebuild it.

## Before you write any code

1. Read `HANDOFF.md` top to bottom. It contains the full history: stack decisions, lessons learned, known issues, brand rules, and the commands you need. Most of your questions are answered there.
2. Read `README.md` for the mechanical "how do I run this" reference.
3. Read `src/lib/site.ts`, `src/lib/posts.ts`, `src/lib/comparisons.ts`, `src/lib/alternatives.ts`, `src/lib/jlpt.ts`, `src/lib/topics.ts`. These data files drive most of the site.
4. Before every push, run `pnpm run verify`. It runs typecheck + build, identical to Vercel. All three historical production build failures in this repo would have been caught by this locally.

## Brand rules (hard constraints)

- No em dashes anywhere in copy, code comments, or git messages. Use hyphens.
- No emoji in product copy.
- Second person voice ("you," "your"). Never "users."
- Calm aesthetic. Sumi ink on washi paper. Never streaks, never gamified.
- Fonts: Outfit for English, Noto Sans JP for Japanese. Do not change this without Bao.
- Palette: cream `#FAF8F2`, ink `#1A1A1A`, matcha `#2D8659`, sakura `#E85C5F`, sun `#F5A623`. Full tokens in `tailwind.config.ts`.

## Priorities (roughly ordered by impact)

1. **LCP under 2.5s.** Currently 5.3s. Font is the bottleneck. Pick one: subset Outfit to hero characters, self-host with `font-display: optional`, or pre-render hero headline as SVG. Ship it.
2. **Mobile navigation.** `SiteHeader` hides primary nav below 768px. Add a hamburger surfacing Guides / Blog / Compare / JLPT / Tools.
3. **Real testimonials.** `src/components/testimonial-grid.tsx` has 6 placeholder quotes. Swap for real UGC when Bao has creators. Data structure is ready.
4. **Accessibility 96 to 100.** Run `npx -y @axe-core/cli https://inkujapanese.com/` to find the 4 remaining violations.
5. **Internal linking.** Every guide and comparison page should have a "Related" block at the bottom, auto-generated from `ALL_POSTS` in `src/lib/posts.ts` filtered by overlapping tags. Currently anchors are manually authored.
6. **JLPT N3/N2/N1 expansion.** They are skeletal. Fill them to match N5/N4 depth.
7. **Custom pillar illustrations.** Hiragana and katakana guides reference mnemonic illustrations but render plain text. 46 custom SVG mnemonics each would be a real moat (Tofugu-style).
8. **Interactive pitch-accent visualizer.** `/blog/japanese-pitch-accent` describes pitch but has no diagram. Audio + pitch-curve component would be unique.
9. **RSS feed** at `/feed.xml` auto-generated from `BLOG_POSTS`. Standard Next.js App Router RSS helpers.
10. **OG images**: currently dynamic via `/api/og`. Consider baking the homepage + top guide OGs as static files to avoid edge-function cold start on social previews.

## What NOT to do

- Don't swap the tech stack. Next.js 16 + Tailwind 3 + Outfit is deliberate.
- Don't re-enable `@next/mdx` until a Turbopack-compatible release exists (see HANDOFF section 3).
- Don't introduce new third-party trackers. GA4 is the only analytics. Full stop.
- Don't change the homepage structure without talking to Bao. Hero, feature rows, testimonials, pricing, FAQ order is intentional.
- Don't add a chatbot, AI search, or generative feature to the site. Inku is a calm product; the site matches that.
- Don't use client-side injection of HTML as strings anywhere except the existing `JsonLd` component. Server-rendered JSON-LD is the only exception, and it's already correctly implemented.

## Workflow

```bash
cd "/Users/bao/Documents/Claude/App Dev/Inku-website"

# Make changes
pnpm dev                # local server at http://localhost:3000
pnpm run verify         # typecheck + build, identical to Vercel
git add -A && git commit -m "..."
git push                # Vercel auto-deploys from main
```

If a deploy fails on Vercel: `vercel ls` shows recent statuses, `vercel inspect <deployment-url>` shows the error. Fix locally, `pnpm run verify`, push again.

## Environment variables (Vercel production)

- `NEXT_PUBLIC_GA_ID=G-8HWG5TBT17` (live)
- `NEXT_PUBLIC_APP_STORE_ID=0000000000` (placeholder, waiting on Apple approval)
- `NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/id0000000000` (placeholder)

When Bao provides the real App Store ID, update via:

```bash
vercel env rm NEXT_PUBLIC_APP_STORE_ID production --yes
echo -n "REAL_ID" | vercel env add NEXT_PUBLIC_APP_STORE_ID production
vercel --prod --yes     # redeploy to bake in the new value
```

## When you're stuck

Check `HANDOFF.md` section 8 (lessons learned) first. Most weird build errors have been hit and fixed once in this repo.
