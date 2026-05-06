# Changelog

## Roadmap — Milestones planejados

| Status | Milestone | Descrição | Prazo estimado |
|--------|-----------|-----------|----------------|
| 🔲 | Pré-renderização estática | Migrar de SPA pura para `vite-ssg` para que Googlebot indexe HTML pronto, não shell | Semana de 2026-05-18 |
| 🔲 | Tradução do blog (pt-BR + es) | Traduzir os 5 posts existentes e criar rotas `/pt/blog` e `/es/blog` | Semana de 2026-05-25 |
| 🔲 | Imagens otimizadas (WebP/AVIF) | Converter heros e imagens de áreas, adicionar `<picture>` responsivo | Semana de 2026-06-01 |
| 🔲 | Mais 5 posts de blog | LinkedIn corporate, Lake Tahoe ski, Half Moon Bay, Yountville Michelin guide, SF wedding | Semana de 2026-06-08 |
| 🔲 | Setup GA4 + Google Business Profile | Após cliente fornecer IDs e reivindicar GBP | Aguarda cliente |
| 🔲 | Tradução das 5 áreas e blog para pt-BR/es | Conteúdo do blog hoje só em EN; áreas estão localizadas | Pós-pré-render |

---

## Histórico

## [2026-05-05] — Milestone: SEO foundation + blog launch

### Adicionado
- Estrutura SEO completa: meta tags otimizadas, 3 blocos de JSON-LD (`LimousineService`, `WebSite`, `Organization`), canonical, hreflang pt-BR/en-US/es, OG/Twitter, geo tags, theme-color, DNS prefetch
- `public/robots.txt` e `public/sitemap.xml` com hreflang alternates e URLs do blog
- Favicon dourado "0800" + `public/site.webmanifest`
- React Router com rotas locale-aware: `/` (EN), `/pt`, `/es`, `/blog`, `/blog/:slug`
- Hook `useSeo` (`src/hooks/useSeo.ts`) que atualiza title, canonical, OG, JSON-LD por rota
- Componente `Analytics.tsx` para GA4 + GTM, gated por `VITE_GA_ID` / `VITE_GTM_ID` (desativado até cliente fornecer)
- Sistema de blog: `src/data/posts.ts` (registry tipado), `src/lib/markdown.tsx` (renderer zero-deps), páginas Index e Post com hero, progress bar, FAQ accordion, breadcrumbs, related posts, CTA
- 5 posts publicados (EN, pesquisados): Napa wineries, SFO FBO guide, Bay Area weddings, Pebble Beach golf, Silicon Valley roadshow
- Per-post JSON-LD: `BlogPosting` + `BreadcrumbList` + `FAQPage`
- `vercel.json`: SPA rewrites, headers de segurança (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy), cache imutável para assets, redirect permanente de `/en` → `/`

### Alterado
- LanguageSwitcher agora navega entre URLs `/`, `/pt`, `/es` em rotas de landing (em vez de só trocar i18n state); fora do landing, só troca runtime locale
- Code-split de `BlogIndex` e `BlogPost` via `React.lazy` → bundle inicial de 585kb → 318kb (gzip 96kb)
- Locale padrão da landing trocada de pt-BR para en-US (mercado primário é US)

### Corrigido
- Typo "Fast response" → "Fast responses" / "Respostas rápidas" / "Respuestas rápidas" nos 3 locales

## [pré-2026-05-05] — Milestones anteriores

Antes deste registro, o projeto entregou: layout completo da landing (Hero, Services, Destinations, WhyUs, Testimonials, Areas, BookingWidget), sistema i18n trilíngue, mapa Leaflet com 13 áreas e 40 restaurantes Michelin, integração Moovs no CTA "Book Now", botão de email com copy-to-clipboard e toast, accordion de Services mobile-only, deploy Vercel com domínio `0800limos.com` via nameservers Vercel.
