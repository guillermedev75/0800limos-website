# 🚀 Deploy do Site 0800 Limos

## Opção 1: Deploy Manual na Vercel (Recomendado)

### Passo 1: Criar conta na Vercel
1. Acesse https://vercel.com/signup
2. Faça signup com GitHub (usando conta guillermedev75)

### Passo 2: Importar Projeto
1. Na dashboard da Vercel, clique em "Add New..." > "Project"
2. Selecione o repositório `0800limos-website`
3. Configure as seguintes opções:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (deixe como está)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Passo 3: Deploy
1. Clique em "Deploy"
2. Aguarde o build (geralmente 1-2 minutos)
3. O site estará disponível em: `https://0800limos-website.vercel.app`

### Passo 4: Configurar Domínio Customizado
1. No projeto Vercel, vá em "Settings" > "Domains"
2. Adicione: `0800limos.com`
3. Siga as instruções para configurar o DNS no GoDaddy

---

## Opção 2: Deploy via Vercel CLI

### Requisitos
- Node.js instalado
- Conta na Vercel

### Passos

```bash
# Navegar até o projeto
cd /Users/guillerme/.openclaw/workspace/0800limos-website

# Instalar Vercel CLI
npm i -g vercel

# Login (abrirá navegador)
vercel login

# Link projeto
vercel link

# Deploy produção
vercel --prod
```

---

## 🔧 Configuração de DNS no GoDaddy

Após configurar o domínio na Vercel:

### Opção A: Usando Nameservers da Vercel (Recomendado)
1. Acesse GoDaddy > Domains > Manage > 0800limos.com
2. Vá em "Nameservers" > "Change"
3. Selecione "Enter my own nameservers"
4. Adicione:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Salve

### Opção B: Usando Records DNS
1. Acesse GoDaddy > DNS Management
2. Adicione os registros fornecidos pela Vercel:
   - **Tipo A:** `@` → `76.76.21.21`
   - **Tipo CNAME:** `www` → `cname.vercel-dns.com`
3. Aguarde propagação (até 48h)

---

## ✅ Verificação Pós-Deploy

Após o deploy, verifique:

1. [ ] Site carrega corretamente
2. [ ] Hero com carrossel funciona
3. [ ] Navegação smooth scroll
4. [ ] Widget Moovs carrega
5. [ ] Responsividade mobile
6. [ ] SSL/HTTPS ativo

---

## 📊 URLs Importantes

- **Repositório:** https://github.com/guillermedev75/0800limos-website
- **Staging:** https://0800limos-website.vercel.app (após deploy)
- **Produção:** https://0800limos.com (após DNS)

---

## 🆘 Troubleshooting

### Build falha
```bash
# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

### Widget Moovs não carrega
- Verificar se `operator.moovs.app` está acessível
- Verificar console do navegador para erros

### Imagens não aparecem
- As imagens usam Unsplash (CDN externo)
- Verificar conexão com internet

---

**Última atualização:** 2026-03-27
