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

## Variáveis de ambiente (Vercel → Settings → Environment Variables)

Todas são opcionais: sem elas o site funciona, só perde a funcionalidade correspondente.

| Variável | Para que serve | Sem ela |
|---|---|---|
| `VITE_GA_ID` | Google Analytics 4 (`G-XXXXXXX`) — contador de visitas e eventos de conversão | Nenhum tracking é injetado; `trackEvent` vira no-op |
| `VITE_GTM_ID` | Google Tag Manager, se um dia for usado | GTM não carrega |
| `VITE_LEAD_ENDPOINT` | URL que recebe o POST do formulário da `/offer` | O formulário não é renderizado |

Depois de criar ou alterar qualquer uma delas é preciso **redeployar** — o Vite injeta as
variáveis em build time, não em runtime.

### Criando o `VITE_LEAD_ENDPOINT` com Google Sheets

Caminho mais barato (grátis) e o que o cliente consegue acompanhar sozinho:

1. Criar uma planilha no Google Sheets. Na primeira linha, os cabeçalhos:
   `data | nome | email | codigo | idioma | pagina`
2. Extensões → Apps Script, apagar o conteúdo e colar:

```javascript
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSheet().appendRow([
    new Date(), d.name, d.email, d.promo, d.locale, d.page
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Salvar. Implantar → Nova implantação → engrenagem → **App da Web**.
   - Executar como: **eu**
   - Quem tem acesso: **qualquer pessoa**
4. Autorizar quando o Google pedir (vai aparecer um aviso de "app não verificado" —
   é o seu próprio script, seguir em "Avançado → Acessar projeto").
5. Copiar a URL `/exec` gerada, colar em `VITE_LEAD_ENDPOINT` na Vercel e redeployar.

> **Não troque o `Content-Type` do fetch em `Offer.tsx` para `application/json`.**
> O envio usa `text/plain` de propósito: isso mantém a requisição como "simple request"
> e evita o preflight CORS, que um web app do Apps Script não sabe responder. O corpo
> continua sendo JSON e o `JSON.parse` acima funciona normalmente.

Depois de qualquer alteração no script é preciso criar uma **nova versão** da implantação
(Implantar → Gerenciar implantações → editar → Versão: nova). Salvar o código sozinho não
atualiza o endpoint.

Alternativa sem código: criar um form no Formspree e usar a URL do endpoint deles — aí o
`Content-Type` pode ser `application/json` normalmente.

O formulário coleta **apenas nome e email** — nada de telefone. Capturar telefone só faz
sentido se um dia for montado o pipeline de SMS, que exige registro A2P 10DLC na operadora
e consentimento explícito (TCPA). Enquanto isso não existir, guardar telefone é risco sem
contrapartida.

---

**Última atualização:** 2026-07-28
