# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

Institutional/marketing site for **0800 Limos**, a luxury executive transportation company in the San Francisco Bay Area. Client: Hussein. This is a personal project of Guillerme (not LuminaLab, not DreamTeam) — see `~/Documents/ObsidianVault/1-Projects/0800limos.md` for the canonical project note.

The site is **static-content only** — no backend, no database, no auth. Bookings happen on Moovs (`https://customer.moovs.app/0800-limos-inc/request/new`); contact happens via WhatsApp / phone / email. Everything you see is rendered from in-repo content.

## Commands

```bash
npm run dev       # Vite dev server, http://localhost:5173
npm run build     # tsc -b && vite build → dist/
npm run lint      # eslint .
npm run preview   # Preview production build locally
```

There is no test suite. TypeScript strict mode is on; the build does `tsc -b` first, so type errors fail CI. Push to `main` deploys automatically via Vercel.

## Architecture

### Routing & locales

`src/App.tsx` defines the route table. Locale and URL are coupled — each language has its own URL so Google can index it independently:

| Path | Locale |
|---|---|
| `/`   | `en-US` (default) |
| `/pt` | `pt-BR` |
| `/es` | `es` |
| `/blog`, `/blog/:slug` | EN-only for now |

`src/pages/Landing.tsx` receives `locale` as a prop and calls `i18n.changeLanguage(locale)` on mount. Do **not** add a locale-switching mechanism that doesn't update the URL — it breaks hreflang and SEO.

`vercel.json` permanently redirects the legacy `/en` path to `/`. The 404 catch-all also lands on the EN landing.

### i18n

`src/i18n/index.ts` registers three locale files in `src/i18n/locales/` (`pt-BR.ts`, `en-US.ts`, `es.ts`). **Keys must stay in sync across all three files** — missing keys fall back to pt-BR silently, which is invisible during dev. When adding a translatable string, edit all three.

`LanguageSwitcher` navigates between `/`, `/pt`, `/es` when on a landing route. On the blog (which is EN-only), it switches the i18n runtime locale only — the URL stays put.

### SEO architecture (this is the heart of the site)

Three layers cooperate:

1. **Static `index.html`** — base meta, OG defaults, three JSON-LD blocks (`LimousineService` / `WebSite` / `Organization`), default canonical and hreflang. This is what crawlers see before JS runs.
2. **`src/hooks/useSeo.ts`** — per-route override. Each page calls `useSeo({ title, description, canonical, lang, jsonLd, ... })` and the hook mutates the `<head>` (title, meta tags, canonical, OG/Twitter, `<html lang>`, plus a `data-page-jsonld` script that's removed/replaced on every route change). Article-type pages also emit `article:*` OG tags.
3. **`public/sitemap.xml`** — manually curated. **When you add a new page or blog post, add the URL here** (and to `robots.txt` if needed). There is no auto-generation.

The site is a client-rendered SPA; Googlebot does execute JS but indexes the post-hydration DOM less reliably than static HTML. If we ever add `vite-ssg` / pre-rendering, the `useSeo` hook is designed to work with static head injection too.

### Blog system

- **Content registry**: `src/data/posts.ts` exports `POSTS: BlogPost[]`. Each post is fully self-contained (title, meta, body markdown, FAQs, `published` flag). Drafts (`published: false`) are excluded from listings. To add a post: append to the array, add the URL to `public/sitemap.xml`.
- **Markdown**: `src/lib/markdown.tsx` is a custom zero-dep renderer supporting only: `##`/`###` headings, paragraphs, `**bold**`, `*italic*`, `[text](url)`, `- ` and `1. ` lists, `>` blockquote, `---` hr. Don't author posts using features outside this subset (no tables, no code blocks, no images-in-markdown).
- **Pages**: `src/pages/BlogIndex.tsx` (grid with first card featured) and `src/pages/BlogPost.tsx` (hero, reading-progress bar, FAQ accordion, related posts, CTA). Both lazy-loaded from `App.tsx` via `React.lazy` — they don't ship in the landing bundle.
- **Schema**: each post emits `BlogPosting` + `BreadcrumbList` + (if `faqs` present) `FAQPage` JSON-LD via `useSeo`.

### Landing sections

`src/pages/Landing.tsx` composes sections from `src/components/sections/`. Two sections have non-trivial behavior worth knowing:

- **`Areas.tsx`** — Leaflet 2D map (NOT react-leaflet) with two modes: "Service Areas" (13 city pins) and "Michelin Stars" (40 restaurants, filterable by stars). Coordinates and content are **hardcoded inside the component**, not in i18n locales. The map container has `position: relative; zIndex: 0` to create a stacking context so the navbar (`z-50`) and modal (`z-[9999]`) sit above it. Leaflet CSS is statically imported (used to be dynamic — caused FOUC).
- **`Services.tsx`** — accordion is **mobile-only**. Desktop renders all cards expanded. Active card is determined by scroll position (`getBoundingClientRect`), not IntersectionObserver — observers caused two-cards-open glitches.

### Analytics — disabled by default

`src/components/Analytics.tsx` injects GA4 / GTM scripts at runtime, but only if `VITE_GA_ID` (`G-XXXXXXX`) and/or `VITE_GTM_ID` are set in the Vercel environment. Until the client provides those IDs, the component renders nothing. Don't hard-code an ID.

## Conventions

- **Tailwind v4** with custom tokens defined in `src/index.css` and `tailwind.config.js`. Brand colors: `gold` (#C9A961), `gold-hover`, gradient utility `text-gradient-gold`. Use these tokens, not raw hex values.
- **No emoji in committed code** unless the user asks.
- **No new markdown libraries** — use the existing `Markdown` component for any rendered prose.
- **External links** that open in a new tab need `target="_blank" rel="noopener noreferrer"`.
- Phone/WhatsApp number (`650-666-9333` / `+16506669333`) and email (`hussein@0800limos.com`) appear in many places. If they ever change, grep widely.

## Deploy & domain

- Hosting: **Vercel**, auto-deploy from `main`.
- Domain: **0800limos.com** on **GoDaddy**, switched to **Vercel nameservers** (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Do not revert to A/CNAME records — that path triggered SSL cert generation failures in the past.
- `vercel.json` handles SPA rewrites, security headers (HSTS, X-Frame-Options, etc.) and immutable cache for static assets.

## What's pending vs. shipped (P0 done; P1+ open)

Shipped: full SEO meta + JSON-LD, robots/sitemap, locale URLs with hreflang, lazy-loaded blog with 5 researched posts (EN), analytics scaffolding, security headers.

Open / not started: pre-rendering (vite-ssg), pt-BR/es translations of the 5 posts, more posts, WebP/AVIF + `<picture>`, Google Business Profile setup, real OG image at `/public/og-image.jpg`, real `apple-touch-icon.png`. Several of these wait on credentials/assets from the client.
