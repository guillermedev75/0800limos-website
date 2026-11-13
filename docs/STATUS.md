---
created: 2026-08-14
updated: 2026-08-14
type: status
tags: [0800limos, status]
projeto: "[[0800limos]]"
---

# STATUS — 0800 Limos

Estado vivo. Histórico fica no `CHANGELOG.md` da raiz do repo; o que se planeja fazer,
no [[ROADMAP]].

## Em uma linha

Site no ar em `https://0800limos.com`, três idiomas, 37 campos de golfe no mapa e a
landing de promoção `/offer` publicada. O trabalho aberto é o **banco de imagens da
frota** — e ele está parado numa pergunta de uma linha ao cliente.

## O que está no ar e funcionando

- Landing trilíngue com URL por idioma (`/`, `/pt`, `/es`) e hreflang consistente
- Blog com 5 posts pesquisados em EN, lazy-loaded (`/blog`, `/blog/:slug`)
- Mapa Leaflet com três abas: 17 áreas atendidas, 40 restaurantes Michelin, 37 campos
  de golfe com filtro por região
- `/offer` — promoção "1st Trip 20% Off", código `0800FIRST`, paleta azul royal
- Barra de contato mobile com três botões: Ligar · SMS · WhatsApp
- SEO técnico: JSON-LD, sitemap, canonical, security headers, cache imutável
- Apex `0800limos.com` é o domínio primário e o `www` redireciona preservando o path
  (resolvido em 2026-07-29 — antes o canonical apontava para uma URL que redirecionava)

## Bloqueio atual

**Uma pergunta ao Hussein trava a última entrega:** o que diferencia o Mercedes Sprinter
"luxury" do "premium" — número de lugares, layout dos bancos, comodidades. Sem isso os
dois prompts de imagem saem idênticos e a galeria mostra a mesma van duas vezes.

Os outros 11 modelos podem ser gerados agora; só as duas vans dependem da resposta.

## Próximo passo

1. Perguntar sobre os dois Sprinter **e** fechar **1 rodada de ajustes** antes de gerar —
   sem trava de revisão esse item vira loop infinito
2. Gerar um modelo inteiro (3 tomadas), aprovar o padrão visual, e só então rodar os
   outros 12. Ver [[banco-de-imagens-frota]]
3. Depois da entrega, propor o retainer mensal (contexto comercial fica no vault
   pessoal, não aqui)

## O que não é medido — e por quê

`VITE_GA_ID` nunca chegou. **Não existe contador de visitas nem funil.** E mesmo com o
GA4 ligado, a conversão real continua invisível: o plano do Moovs do cliente não inclui
tracking, então o único sinal é o **clique de saída** para o Moovs com UTM. Ninguém sabe
se a reserva foi concluída. Não desenhar relatório que finja o contrário.

## Achados que custam caro se forem esquecidos

- **Nunca ranquear campo de golfe.** Sem estrelas, sem nota, sem "top 10" — pedido
  explícito do cliente para que nenhum campo se sinta diminuído. Agrupar por região
- **Não voltar para registros A/CNAME no GoDaddy.** Só nameservers Vercel; o caminho
  A/CNAME já falhou na geração do certificado SSL
- **Chave de locale faltando cai silenciosamente para pt-BR** — invisível em dev. Ao
  adicionar string, editar os três arquivos de locale
- **`MobileContactBar` tem que ficar depois do `<Footer />`** no JSX: o espaçador que
  reserva a altura dela precisa cair no fim real do documento, e o footer está fora do
  `<main>`
- **Moovs não tem cupom** no plano do cliente. O desconto da `/offer` é aplicado à mão na
  confirmação, e a página instrui o cliente a colar o código nas notas da reserva. Se
  essa instrução sumir, a página promete um desconto que o checkout não aplica
- **Spanish Bay está fechado** para reforma até a primavera de 2027, e Palo Corona (ex-
  Rancho Cañada) virou parque público em 2017. Flag desatualizada = vender corrida para
  campo que ninguém joga

## Pendências do lado do cliente

| O que | Desde | Impacto de não ter |
|---|---|---|
| Diferença entre os dois Sprinter | 2026-07-24 | **Bloqueia** 2 dos 13 modelos |
| `VITE_GA_ID` | 2026-05-05 | Zero medição |
| `VITE_LEAD_ENDPOINT` (Apps Script) | 2026-07-28 | Form da `/offer` não renderiza |
| OG image real e `apple-touch-icon.png` | 2026-05-05 | Preview pobre ao compartilhar |
| Google Business Profile reivindicado | 2026-05-05 | Sem Place ID, sem AggregateRating |
