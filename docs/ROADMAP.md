---
created: 2026-08-14
updated: 2026-08-14
type: status
tags: [0800limos, roadmap]
projeto: "[[0800limos]]"
---

# ROADMAP — 0800 Limos

Placar. O raciocínio de cada item mora na nota do assunto; aqui fica só o estado.
Migrado do `CHANGELOG.md` da raiz em 2026-08-14 — o changelog agora é só histórico.

## Aberto

| Status | Milestone | Descrição | Prazo estimado |
|--------|-----------|-----------|----------------|
| 🔲 | Banco de imagens IA da frota | 13 modelos × 3 tomadas = 39 imagens, pretos 2026, geração no Gemini + WebP + galeria. Prompts prontos em [[banco-de-imagens-frota]]. **Bloqueado** nas duas vans até o cliente dizer o que as diferencia | Semana de 2026-08-17 |
| 🔲 | Refactor seção de descoberta | Remover "Bay Area Destinations" e mover o que sobrar para dentro da `Areas` + CTA no topo que rola até as abas. Pedido do cliente via áudio 2026-05-05. As 3 abas já existem | Semana de 2026-08-17 |
| 🔲 | Pré-renderização estática | Migrar de SPA pura para `vite-ssg` para que o Googlebot indexe HTML pronto, não shell. O `useSeo` já foi escrito pensando em injeção estática | A definir |
| 🔲 | Tradução do blog (pt-BR + es) | Traduzir os 5 posts e criar rotas `/pt/blog` e `/es/blog` | Pós-pré-render |
| 🔲 | Imagens otimizadas (WebP/AVIF) | Converter heros e imagens de áreas, adicionar `<picture>` responsivo | A definir |
| 🔲 | Mais 5 posts de blog | LinkedIn corporate, Lake Tahoe ski, Half Moon Bay, Yountville Michelin guide, SF wedding | A definir |
| 🔲 | GA4 + Google Business Profile | Aguarda o cliente fornecer os IDs e reivindicar o GBP | Aguarda cliente |

## Concluído

| Status | Milestone | Concluído em |
|--------|-----------|--------------|
| ✅ | Expansão do golfe para 37 campos, com estrelas nos dois mais procurados e selo de clube privado | 2026-08-01 |
| ✅ | Rodada de ajustes da `/offer` (6 áudios do cliente) + paleta azul royal + 4 destinos novos | 2026-08-01 |
| ✅ | Apex vs www alinhados na Vercel — canonical deixou de apontar para URL que redireciona | 2026-07-29 |
| ✅ | Aba Golf Courses com comentários positivos, sem ranking, filtro por região | 2026-07-28 |
| ✅ | CTAs de contato no mobile — Ligar · SMS · WhatsApp na primeira dobra | 2026-07-28 |
| ✅ | Landing de promoção `/offer` com código `0800FIRST` | 2026-07-28 |
| ✅ | Fundação de SEO + lançamento do blog com 5 posts | 2026-05-05 |

## Fora de escopo (não reabrir sem conversa)

- **Pipeline de SMS / mala direta** (Twilio, registro A2P 10DLC, consentimento TCPA) —
  abortado pelo cliente. É por isso que o formulário da `/offer` **não pede telefone**
- **Cupom automático no Moovs** — o plano dele não expõe a funcionalidade
- **Ranking de campos de golfe** — pedido explícito do cliente
