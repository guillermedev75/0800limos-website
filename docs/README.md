---
created: 2026-08-14
updated: 2026-08-14
type: meta
tags: [0800limos, meta]
projeto: "[[0800limos]]"
---

# Vault de documentação — 0800 Limos

Memória de longo prazo do projeto, versionada junto do código. Comece por [[STATUS]].

## Desvios em relação à convenção padrão

- **`CHANGELOG.md` fica na raiz do repo**, não aqui dentro. É onde já estava e é onde
  quem clona procura primeiro.
- **`README.md` e `CLAUDE.md` também ficam na raiz.** O `CLAUDE.md` é a doc de
  arquitetura e carrega sozinho no contexto do Claude Code; movê-lo quebraria isso.
- **Não existe `2-Areas/`.** Projeto de uma pessoa só, sem responsabilidade contínua
  separada do próprio site.
- **Idioma: português.** As notas são para o Guillerme; a interface do site é que é
  trilíngue.

## Ordem de leitura

1. [[STATUS]] — estado vivo, bloqueio atual, próximo passo
2. [[ROADMAP]] — o que fazer agora
3. [[INDEX]] — quem manda em cada assunto, e o que está obsoleto
4. A nota do assunto, seguindo o INDEX
5. `CLAUDE.md` na raiz — arquitetura e invariantes de código

## Ao terminar trabalho substantivo

Atualize [[STATUS]] se mudou o bloqueio ou o próximo passo, marque o [[ROADMAP]], some uma
entrada no `CHANGELOG.md` da raiz e escreva `5-AI/sessions/YYYY-MM-DD-<titulo>.md`.
Sempre mexa no `updated:` do frontmatter.

**Nunca escreva credencial aqui.** `VITE_GA_ID`, `VITE_LEAD_ENDPOINT` e afins vivem na env
da Vercel; a doc aponta para o nome da variável, nunca para o valor.
