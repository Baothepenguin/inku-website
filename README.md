# Inku Website

The marketing site for [Inku](https://inkujapanese.com), a calm iPhone app for learning Japanese.

Built with Next.js 15 (App Router) + TypeScript + Tailwind + MDX. Deployed on Vercel.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- **Next.js 15** App Router + React 19
- **TypeScript** strict mode
- **Tailwind CSS 3** with a custom design system matching the iOS app palette
- **shadcn/ui** style components (Button, primitives)
- **MDX** via `@next/mdx` for future blog content (current posts are TSX)
- **`@vercel/og`** for dynamic OG image generation
- **App Router sitemap** from `src/app/sitemap.ts`
- **GA4** via `next/script` with DNT respect
- **Vercel** for hosting

## Project structure

```
src/
├── app/                    App Router pages
│   ├── (root)              Homepage + shared layout
│   ├── about/              Founder story
│   ├── alternatives/       "X alternative" pages
│   ├── api/og/             Dynamic OG image generation
│   ├── authors/[slug]      Author bio pages
│   ├── blog/               Blog index + 10 posts
│   ├── guides/             6 pillar guides
│   ├── japanese/[topic]    Topic hubs (hiragana, katakana, ...)
│   ├── jlpt/[level]        JLPT level pages (n5 through n1)
│   ├── privacy/            Privacy policy
│   ├── terms/              Terms of service
│   ├── tools/              Interactive kana/stroke/quiz tools
│   ├── vs/[slug]           Competitor comparison pages
│   ├── robots.ts           Dynamic robots.txt
│   └── sitemap.ts          Dynamic sitemap.xml
├── components/             UI components
│   ├── ui/                 Primitives
│   ├── home/               Homepage sections
│   └── seo/                JSON-LD helper
├── lib/                    Constants + data
│   ├── site.ts             Global site constants (name, url, prices)
│   ├── schema.ts           JSON-LD builders (Organization, Article, etc.)
│   ├── metadata.ts         Per-page metadata helper
│   ├── posts.ts            Canonical post registry
│   ├── authors.ts          Author bios
│   ├── comparisons.ts      /vs/* data
│   ├── alternatives.ts     /alternatives/* data
│   ├── jlpt.ts             JLPT level data
│   └── topics.ts           /japanese/* topic data
└── public/
    ├── fonts/              Self-hosted Satoshi woff2 files
    └── favicon.svg

```

## How to add a blog post

1. Add a registry entry in `src/lib/posts.ts` (category: `"blog"`).
2. Create a new directory under `src/app/blog/your-slug/` with a `page.tsx`.
3. Copy the structure from an existing post (e.g., `src/app/blog/moshi-moshi/page.tsx`).
4. Use `<BlogPostLayout>` from `@/components/blog-layout` with the required metadata.
5. Write real content. No lorem ipsum.

The sitemap and blog index will pick it up automatically from the `ALL_POSTS` registry.

## How to add a comparison page (/vs/*)

1. Add an entry to the `COMPARISONS` record in `src/lib/comparisons.ts`.
2. That's it. The dynamic route `/vs/[slug]/page.tsx` picks it up via `generateStaticParams`.

## How to add an alternative page (/alternatives/*)

Same as comparison pages, but add to `ALTERNATIVES` in `src/lib/alternatives.ts`.

## How to add a pillar guide

1. Create `src/app/guides/your-slug/page.tsx`.
2. Follow the template from `src/app/guides/learn-hiragana/page.tsx`.
3. Add a matching entry in `src/lib/posts.ts` (category: `"guide"`).

## How to add a tool

1. Create `src/app/tools/your-tool/page.tsx` (server) and a sibling client component file.
2. Client component must have `"use client"` at the top.
3. Use `softwareToolSchema` in the JSON-LD on the page.
4. Add the tool to the static list in `src/app/sitemap.ts`.

## OG image generation

Dynamic OG images are rendered at `/api/og?title=...&type=website`. The route lives at `src/app/api/og/route.tsx`. Templates:

- `type=website` (default)  -  homepage brand hero
- `type=article`  -  blog post title + author
- `type=comparison`  -  Inku vs [competitor] side-by-side

Every page sets its OG URL via the `pageMetadata` helper in `src/lib/metadata.ts`. If you pass `ogImage: "/api/og?..."` to that helper, it overrides the default.

## Environment variables

Create `.env.local` in the repo root. See `.env.example` for the complete list.

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | Optional in dev |
| `NEXT_PUBLIC_APP_STORE_ID` | Apple App Store numeric app ID | Required for real CTAs |
| `NEXT_PUBLIC_APP_STORE_URL` | Full App Store URL for Inku | Required for real CTAs |
| `SITE_URL` | Override site origin (defaults to `https://inkujapanese.com`) | Optional |

In Vercel, set these under Project Settings → Environment Variables. Production and Preview can share the same values.

## How to redeploy

Pushing to the `main` branch on GitHub triggers a production deploy on Vercel automatically.

To redeploy from the CLI:

```bash
vercel --prod
```

## How to update the domain connection

Once the Vercel project is linked:

```bash
vercel domains add inkujapanese.com
```

Follow the DNS instructions that the CLI prints. Bao updates the registrar.

## Design system (quick reference)

Colors (from `src/lib/site.ts` and `tailwind.config.ts`):

| Token | Hex | Use |
|---|---|---|
| cream | `#FAF8F2` | Background |
| cream-deep | `#F2EDDE` | Alternative surface |
| ink | `#1A1A1A` | Body text |
| ink-muted | `#6B6B6B` | Secondary text |
| ink-subtle | `#8A8A8A` | Tertiary text (WCAG-passing) |
| matcha | `#2D8659` | Primary accent (CTAs, links) |
| matcha-deep | `#1F5F3E` | CTA hover |
| sakura | `#E85C5F` | Secondary accent |
| border | `#E4DDC7` | Dividers, card borders |

Fonts:

- **Fraunces** (variable serif)  -  display headings, body serif
- **Satoshi** (sans)  -  UI labels, buttons, captions (self-hosted in `public/fonts/`)
- **Klee One**  -  Japanese characters (via `jp` utility class)

## Brand rules (never violate)

- No em dashes ( - ). Use hyphens or rewrite.
- No emoji in product copy or legal.
- Second person voice ("you").
- Calm, not gamified.
- Apple smart banner meta tag on every page.
- JSON-LD on every page.

## Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Run the built app
pnpm lint         # ESLint check
```

## License

Content copyright Bao Hua. Code available under whatever license we eventually pick; for now, proprietary.

## Contact

Email: `app@inkujapanese.com`
