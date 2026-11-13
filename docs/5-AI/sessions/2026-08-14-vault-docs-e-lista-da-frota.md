---
created: 2026-08-14
updated: 2026-08-14
type: sessao
tags: [0800limos, docs, frota]
projeto: "[[0800limos]]"
---

# 2026-08-14 — Vault `docs/` e fechamento da lista da frota

## O que foi pedido

Analisar a mensagem original do cliente com os 3 pedidos (2026-07-24), ver o que já estava
documentado, e organizar a documentação do projeto. No meio da sessão o cliente reenviou a
lista de veículos do banco de imagens.

## O que foi feito

### 1. Auditoria: os 3 pedidos já estavam documentados

| Pedido | Estado |
|---|---|
| Ícones call/WhatsApp no mobile | ✅ entregue 2026-07-28, virou 3 botões (Ligar · SMS · WhatsApp) |
| Golfe com comentários, sem ranking | ✅ entregue 2026-07-28 com 16 campos, expandido para 37 em 2026-08-01 |
| Banco de imagens IA | 🔲 prompts prontos, geração não começou |

Sobre o "CALL US NOW" que o cliente queria comparar: **a variante longa não sobreviveu à
entrada do terceiro botão.** Três botões dividem 320px, e `SHOW_LABELS` hoje está `true`
com rótulos curtos. Se ele insistir no texto longo, é preciso voltar para dois botões.

### 2. Documentação desatualizada, corrigida

Achados por conferência contra o código, não por leitura das notas:

- `CLAUDE.md` dizia **16 campos de golfe e 13 áreas**; contagem real no código é **37 e
  17** (`grep -c "key: '" src/data/golf.ts` e o array `AREAS` em `Areas.tsx:12`)
- `CLAUDE.md` listava o "3 ou 4 tomadas?" como pendência do cliente, mas ele já tinha
  respondido em 2026-08-04
- O roadmap ainda contava **52 imagens** (13 × 4) em vez de 39

### 3. Lista da frota fechada

O nome do sedã Cadillac deu três voltas: o cliente escreveu **CTS** (fora de linha desde
2019) → eu propus **CT5** → o reenvio dele pediu **CT4** → decisão final **CT5**. O CT4 é
o compacto da linha e tem o banco de trás como ponto fraco justamente onde o passageiro do
serviço viaja. Registrado com o motivo em [[banco-de-imagens-frota]] para ninguém
"corrigir" de volta daqui a três meses.

Freightliner confirmado em 35 lugares (antes vinha com "?").

### 4. Vault `docs/` criado

Estrutura nova: `STATUS.md`, `ROADMAP.md`, `INDEX.md`, `README.md`, com `DEPLOY.md`,
`FLEET_IMAGE_PROMPTS.md` e `PROJECT_SUMMARY.md` movidos para dentro via `git mv` (histórico
preservado). O `CHANGELOG.md` ficou na raiz de propósito — é onde quem clona procura.

**A tabela de milestones saiu do `CHANGELOG.md` e virou o `ROADMAP.md`.** Placar e
histórico no mesmo arquivo faziam o changelog ser reescrito para trás toda vez que uma
tarefa mudava de estado.

O `PROJECT_SUMMARY.md` foi arquivado com aviso de obsoleto em vez de apagado: ele
apresentava **registros A/CNAME no GoDaddy** como opção válida de DNS, e é exatamente o
caminho que quebrou a emissão do SSL depois. Vale mais como armadilha sinalizada do que
como arquivo deletado.

## Método que funcionou

Contar no código antes de acreditar na doc. As três divergências encontradas eram todas
"a doc parou numa entrega anterior" — nenhuma teria aparecido lendo só as notas.

## Aberto

- **Única pergunta que trava a geração das imagens:** o que diferencia o Sprinter
  "luxury" do "premium". Os outros 11 modelos podem ser gerados hoje
- Combinar **1 rodada de ajustes** antes de gerar — sem isso o item vira loop
- A lista reenviada repete a contradição "3 imagens" + quatro tomadas descritas; segue
  valendo a confirmação de 2026-08-04 (3 tomadas, painel cortado)
