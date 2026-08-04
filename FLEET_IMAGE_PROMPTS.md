# Banco de imagens da frota — kit de prompts

Guia para gerar as imagens da frota no Gemini de forma **consistente**. O risco desse job
não é gerar imagem bonita: é gerar 50 imagens que não parecem da mesma frota. Ângulo,
altura de câmera, luz e fundo precisam ser idênticos entre modelos.

Referência: pedido do cliente por WhatsApp em 2026-07-24.

---

## Decisões do cliente (confirmadas em 2026-08-04)

- **3 tomadas por veículo**, não 4 → **39 imagens no total**.
  A tomada cortada foi a do **painel**: quem contrata o serviço viaja no banco de trás,
  não dirige. O painel é a única das quatro que mostra a área do motorista.
  *Se ele preferir outra combinação, é só trocar — os quatro prompts seguem abaixo.*
- **Cadillac CT5** no lugar do CTS, que saiu de linha em 2019.
- **Mercedes-Benz E-Class** (o nome "E Series" não existe).
- **Os dois Sprinter são diferentes de verdade** — falta ele dizer *o que* muda entre
  eles (número de lugares, layout dos bancos, comodidades) para os prompts refletirem.

Ainda em aberto: confirmar se o Freightliner é de 35 lugares (ele escreveu com "?").

---

## Regras de consistência

Fixe estes elementos em **todos** os prompts e varie apenas o modelo do veículo:

- **Cor**: preto, pintura metálica, acabamento polido
- **Ambiente**: mesma locação para todos (ver abaixo)
- **Hora**: fim de tarde, luz difusa, sem sol duro
- **Câmera**: altura do peito (~1,4 m), lente 35 mm nas externas, 24 mm nas internas
- **Sem pessoas** em nenhuma imagem
- **Sem placa** legível
- **Proporção**: 16:9 nas externas, 3:2 nas internas

### Locação padrão

> Porte-cochère de hotel executivo, piso de concreto polido, colunas claras, vegetação
> discreta ao fundo, cidade fora de foco à distância.

Usar a mesma descrição em todas as externas. Se mudar de locação entre modelos, a galeria
perde a unidade.

---

## Prompt base

Substituir `{VEÍCULO}` pelo modelo. Manter todo o resto igual.

### Tomada 1 — externa 3/4 dianteira

```
Professional automotive photograph of a black 2026 {VEÍCULO}, three-quarter front view,
parked under the porte-cochère of an upscale executive hotel. Polished concrete floor,
pale columns, discreet landscaping, blurred city in the far background. Late afternoon
diffused light, no harsh sun, soft reflections on the metallic black paint. Camera at
chest height, 35mm lens, eye-level perspective. No people, no readable license plate.
Clean, editorial, luxury transportation catalogue style. 16:9.
```

### Tomada 2 — externa com porta traseira aberta

```
Professional automotive photograph of a black 2026 {VEÍCULO} with the rear passenger door
open, three-quarter front view, parked under the porte-cochère of an upscale executive
hotel. The open door reveals the rear seat interior. Polished concrete floor, pale
columns, discreet landscaping, blurred city in the far background. Late afternoon diffused
light, soft reflections on the metallic black paint. Camera at chest height, 35mm lens.
No people, no readable license plate. Clean, editorial, luxury transportation catalogue
style. 16:9.
```

### Tomada 3 — interior, visão do passageiro traseiro

```
Interior photograph of a black 2026 {VEÍCULO}, seen from the rear passenger seat behind
the front passenger seat, looking forward. Dark leather upholstery, rear legroom visible,
front seatbacks and centre console in frame, ambient interior lighting. Soft daylight
through the windows. 24mm lens, natural perspective, no distortion. No people. Clean,
editorial, luxury transportation catalogue style. 3:2.
```

### Tomada extra (fora das 3) — interior, painel

```
Interior photograph of a black 2026 {VEÍCULO}, dashboard and front console view from the
driver's seat position. Dark leather, brushed metal and piano-black trim, ambient interior
lighting, instrument cluster and centre screen switched on. Soft late-afternoon daylight
through the windshield. 24mm lens, natural perspective, no distortion. No people. Clean,
editorial, luxury transportation catalogue style. 3:2.
```

### Negative prompt (usar em todas)

```
people, faces, hands, text overlay, watermark, readable license plate, distorted
proportions, extra wheels, warped steering wheel, melted dashboard, duplicated mirrors,
cartoon, illustration, HDR halo, oversaturated colours
```

---

## Lista de veículos

| # | Categoria | Modelo no prompt |
|---|---|---|
| 1 | Sedan | Cadillac CT5 |
| 2 | Sedan | Volvo S90 |
| 3 | Sedan | Mercedes-Benz E-Class |
| 4 | Premium | Mercedes-Benz S-Class |
| 5 | Premium | BMW 7 Series |
| 6 | SUV | Chevrolet Suburban |
| 7 | SUV | GMC Yukon |
| 8 | SUV | Lincoln Navigator |
| 9 | SUV | Ford Expedition |
| 10 | SUV | Cadillac Escalade ESV |
| 11 | Van | Mercedes-Benz Sprinter — *aguardando o que diferencia* |
| 12 | Van | Mercedes-Benz Sprinter — *aguardando o que diferencia* |
| 13 | Bus | Freightliner 35-passenger shuttle bus |

---

## Fluxo de trabalho sugerido

1. Gerar **um modelo inteiro** (as 3 tomadas) e aprovar o padrão visual antes de seguir.
   Ajustar o prompt base uma vez sai muito mais barato que refazer 39 imagens.
2. Gerar de 3 a 4 variações por tomada e escolher a melhor. Interior de carro é onde a IA
   mais erra — volante deformado, painel inventado, banco com proporção errada.
3. Descartar sem dó qualquer imagem com volante torto, retrovisor duplicado ou logo
   deformado. Uma imagem ruim contamina a percepção da galeria inteira.
4. Nomear os arquivos como `modelo-tomada.jpg`, por exemplo `escalade-esv-exterior.jpg`,
   `escalade-esv-porta-aberta.jpg` e `escalade-esv-traseira.jpg`.
5. Entregar os arquivos que a conversão para WebP e a montagem da galeria acontecem no
   código.

---

## Nota sobre uso

São imagens geradas por IA de carros de marca, apresentadas como a frota. Se o veículo
real for diferente do que o cliente viu no site, isso vira reclamação. Duas mitigações,
a decidir com o Hussein:

- Legenda discreta de "illustrative image" na galeria
- Substituir por fotos reais da frota assim que ele tiver — fotos reais também rankeiam
  melhor no Google que imagem genérica
