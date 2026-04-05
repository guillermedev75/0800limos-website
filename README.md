# 0800 Limos Website

## Transporte Executivo

Site executivo/premium para 0800 Limos em React + TypeScript + Tailwind CSS, com integração Moovs API.

## 🚀 Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 🎨 Design System

- **Cores:**
  - Midnight Black: `#0A0A0A`
  - Executive Gold: `#C9A961`
  - Success Green: `#27AE60`
  
- **Fontes:**
  - Headlines: Montserrat
  - Body: Inter

## 📁 Estrutura

```
src/
├── components/
│   ├── layout/      # Header, Footer, Container
│   ├── sections/    # Hero, Services, Fleet, etc.
│   ├── ui/          # Button, etc.
│   └── moovs/       # Widget Moovs
├── hooks/           # Custom hooks
├── lib/             # Utils
└── types/           # TypeScript types
```

## 🔧 Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build produção
npm run build

# Preview build
npm run preview
```

## 🌐 Deploy na Vercel

### Opção 1: Deploy via GitHub Integration (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Importe o repositório `guillermedev75/0800limos-website`
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 🔌 Integração Moovs

O widget Moovs está integrado na seção de Booking. O script é carregado automaticamente:

```
https://operator.moovs.app/widget.js
```

Configurações:
- Operator ID: `0800limos`
- Theme: `dark`
- Primary Color: `#C9A961`

## 📝 Configuração de DNS (GoDaddy)

Após o deploy na Vercel, configure o domínio customizado:

1. Na dashboard da Vercel, vá em Project Settings > Domains
2. Adicione o domínio: `0800limos.com`
3. A Vercel fornecerá registros DNS:
   - Tipo A: `76.76.21.21`
   - ou CNAME: `cname.vercel-dns.com`

4. No GoDaddy:
   - Acesse DNS Management
   - Adicione o registro A ou CNAME conforme fornecido pela Vercel
   - Remova registros antigos conflitantes
   - Aguarde propagação (até 48h)

## ✅ Checklist

- [x] Site responsivo (mobile-first)
- [x] Hero com carrossel animado (5 slides)
- [x] Widget Moovs integrado
- [x] Seções: Services, Fleet, WhyUs, Testimonials, Areas
- [x] Animações com Framer Motion
- [x] Build otimizado
- [x] Deploy configurado

## 📞 Contatos

- **Site:** [0800limos.com](https://0800limos.com)
- **Telefone:** 650-666-9333
- **Email:** hussein@0800limos.com
- **Moovs:** operator.moovs.app

---

**Transporte Executivo**

Sua jornada de luxo começa aqui.
