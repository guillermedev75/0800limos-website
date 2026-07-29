# Changelog

## Roadmap — Milestones planejados

| Status | Milestone | Descrição | Prazo estimado |
|--------|-----------|-----------|----------------|
| ✅ | Aba Golf Courses | Terceira aba na seção Areas com 16 campos pesquisados, comentários positivos sem ranking, filtro por região | Concluído em 2026-07-28 |
| ✅ | CTAs de contato no mobile | Barra fixa de telefone + WhatsApp visível na primeira dobra | Concluído em 2026-07-28 |
| ✅ | Landing de promoção `/offer` | 1st Trip 20% Off com código FIRST20, captura de email e tracking de conversão | Concluído em 2026-07-28 |
| 🔲 | Banco de imagens IA da frota | 13 modelos × 4 tomadas, pretos 2026, geração no Gemini + WebP + galeria | Semana de 2026-08-03 |
| 🔲 | Refactor seção de descoberta | Remover "Bay Area Destinations" e mover o que sobrar para dentro da Areas + CTA no topo que rola até as abas. Pedido do cliente via áudio 2026-05-05. As 3 abas já existem. | Semana de 2026-08-03 |
| 🔲 | Pré-renderização estática | Migrar de SPA pura para `vite-ssg` para que Googlebot indexe HTML pronto, não shell | Semana de 2026-05-18 |
| 🔲 | Tradução do blog (pt-BR + es) | Traduzir os 5 posts existentes e criar rotas `/pt/blog` e `/es/blog` | Semana de 2026-05-25 |
| 🔲 | Imagens otimizadas (WebP/AVIF) | Converter heros e imagens de áreas, adicionar `<picture>` responsivo | Semana de 2026-06-01 |
| 🔲 | Mais 5 posts de blog | LinkedIn corporate, Lake Tahoe ski, Half Moon Bay, Yountville Michelin guide, SF wedding | Semana de 2026-06-08 |
| 🔲 | Setup GA4 + Google Business Profile | Após cliente fornecer IDs e reivindicar GBP | Aguarda cliente |
| 🔲 | Tradução das 5 áreas e blog para pt-BR/es | Conteúdo do blog hoje só em EN; áreas estão localizadas | Pós-pré-render |

---

## Histórico

## [2026-07-28] — Milestone: Golf, CTAs mobile e landing de promoção

Lote de pedidos do cliente via WhatsApp em 2026-07-24.

### Adicionado
- `MobileContactBar` — barra fixa no rodapé, só no mobile, com telefone e WhatsApp visíveis sem rolagem. Constante `SHOW_LABELS` alterna entre a variante só-ícones e a variante com "CALL US NOW", que o cliente quer comparar
- Aba **Golf Courses** na seção Areas: 16 campos em `src/data/golf.ts` cobrindo Monterey, SF & Costa, Wine Country, Silicon Valley e Lake Tahoe, com filtro por região, pin próprio e modal com arquiteto, ano, buracos, site e Google Maps
- Comentários positivos de cada campo nos 3 locales, **sem ranking ou pontuação** — pedido explícito do cliente para que nenhum campo se sinta diminuído
- Sinalização de campo fechado: The Links at Spanish Bay está em reforma (Gil Hanse) desde 18/03/2026 e reabre na primavera de 2027 — pin cinza + badge no modal, para não vender corrida para um campo fechado
- Landing `/offer` (lazy-loaded) com a promoção "1st Trip 20% Off", código `FIRST20` com botão de copiar, passo a passo de como funciona e JSON-LD `Offer`
- Formulário de captura de nome + email na `/offer`, gated por `VITE_LEAD_ENDPOINT`; sem a env o bloco não renderiza
- `src/lib/analytics.ts` — `trackEvent`, `trackBookingClick` e `moovsUrl` (UTMs por origem). Como o tracking do Moovs só existe no plano caro, o clique de saída para o Moovs é o proxy de conversão
- `/offer` no `public/sitemap.xml`

### Alterado
- Rótulos das abas da seção Areas ("Service Areas" / "Michelin Stars") saíram do código para os locales — antes eram texto fixo em inglês nas três línguas
- `FloatingQuoteButton` sobe para `bottom-24` no mobile para não colidir com a nova barra de contato

### Corrigido
- Removidas as dependências `react-globe.gl` e `react-leaflet`, que estavam instaladas e não eram importadas em lugar nenhum (a `react-globe.gl` arrasta o three.js junto)
- Tipagem do Leaflet em `Areas.tsx`: os quatro `any` viraram `Map`/`LayerGroup`
- `Destinations.tsx`: `mod` e a lista de destinos hoisted para fora do componente e `useCallback` removido — o React Compiler estava pulando a otimização do componente inteiro por causa da memoização manual
- Lint saiu de 5 erros para 0

### Removido do escopo
- Pipeline de SMS / mala direta (Twilio, registro A2P 10DLC, consentimento TCPA) — abortado pelo cliente
- Cupom automático no Moovs — o plano dele não expõe a funcionalidade, então o desconto é aplicado à mão na confirmação

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
