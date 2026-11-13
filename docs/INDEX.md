---
created: 2026-08-14
updated: 2026-08-14
type: index
tags: [0800limos, index]
projeto: "[[0800limos]]"
---

# INDEX — quem manda em cada assunto

Tabela canônica. Se duas notas discordarem, **vale a listada aqui como dona do assunto**;
e se o código discordar da nota, vale o código — corrigir a nota faz parte da mesma sessão.

| Assunto | Documento dono | Estado |
|---|---|---|
| Onde estamos agora, bloqueios, achados | [[STATUS]] | ✅ atual |
| O que falta fazer | [[ROADMAP]] | ✅ atual |
| O que já foi feito, com datas | `CHANGELOG.md` (raiz do repo) | ✅ atual |
| Arquitetura do código, invariantes, convenções | `CLAUDE.md` (raiz do repo) | ✅ atual |
| Rodar o projeto, stack, comandos | `README.md` (raiz do repo) | ✅ atual |
| Deploy, domínio, DNS, endpoint de leads | [[deploy]] | ✅ atual |
| Banco de imagens da frota — prompts, lista de veículos, decisões | [[banco-de-imagens-frota]] | ✅ atual |
| Resumo pré-lançamento de 2026-05 | [[project-summary-2026-05-obsoleto]] | ⛔ **obsoleto, não seguir** |
| Sessões de trabalho | `5-AI/sessions/` | — |

## Por que o `project-summary` está marcado obsoleto

Ele descreve o site como era antes do lançamento (seção "Fleet" que não existe mais, 6
áreas em vez de 17, nada de blog, i18n ou SEO) e, pior, **recomenda registros A/CNAME no
GoDaddy** — o caminho que depois quebrou a emissão do certificado SSL. Guardado como
registro histórico; para deploy, use [[deploy]].

## Convenção de fontes fora do repo

O contexto **comercial** deste projeto — preço fechado, âncora dos US$ 150, proposta de
retainer, leitura do cliente — mora no vault pessoal do Guillerme
(`~/Documents/ObsidianVault/1-Projects/0800limos.md`), **não aqui**. Este `docs/` é
versionado e o cliente pode acabar vendo.
