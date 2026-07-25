# Merchandising Co. — Site Institucional

Site institucional para uma empresa fictícia de merchandising personalizado, desenvolvido como projeto de portfólio. Foco em um design **clean, minimalista e orgânico**, com elementos de **glassmorphism** e uma paleta vibrante voltada para conversão.

## 🚀 Stack

- **[Next.js](https://nextjs.org/)** (App Router) — framework React com renderização híbrida (SSR/CSR)
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[styled-components](https://styled-components.com/)** — CSS-in-JS com tema tipado
- **[lucide-react](https://lucide.dev/)** — ícones
- **[Pexels](https://www.pexels.com/)** — banco de imagens gratuito, licenciado para uso comercial, usado nos cards de produto

> Projeto **front-end only** — não há integração com back-end ou banco de dados. O formulário de contato simula o envio no client-side, com um ponto de integração já preparado para serviços como Formspree ou EmailJS.

## 🎨 Identidade visual

### Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `background` | `#FAF9F5` | Fundo principal (branco quebrado) |
| `backgroundAlt` | `#F0EDE6` | Fundo alternado entre seções |
| `text` | `#1A1D24` | Texto principal (grafite, não preto puro) |
| `textMuted` | `#5C606B` | Texto secundário |
| `primary` | `#FF4B3E` | Coral vibrante — CTAs, ações principais |
| `secondary` | `#00B87C` | Verde vívido — badges, contraponto |
| `accent` | `#3D5AFE` | Azul elétrico — detalhes pontuais |
| `pop` | `#FFC93C` | Amarelo vibrante — reservado para destaques futuros (ex: "Mais vendido") |

### Tipografia

- **Display**: `Space Grotesk` — títulos, headlines
- **Corpo**: `Inter` — texto corrido

### Linguagem visual

- **Glassmorphism**: painéis translúcidos com `backdrop-filter: blur()`, usados no Header, cards e formulário
- **Formas orgânicas**: `border-radius` assimétrico variado (`organic1`, `organic2`, `organic3`) em vez de cantos uniformes
- **MorphBlob**: elemento de assinatura — blobs com animação de "respiração" (`border-radius` mutante via `keyframes`), usados como ambientação em seções de destaque
- **SectionDivider**: transições em curva (SVG) entre seções, substituindo cortes retos

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz, metadata, integra Header/Footer
│   └── page.tsx            # Composição das seções da home
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Header fixo com glass effect + menu mobile flutuante
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Products.tsx    # Grid de produtos com filtro por categoria
│   │   ├── Clients.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx         # Accordion com transição via CSS Grid
│   │   ├── FinalCTA.tsx
│   │   └── Contact.tsx     # Formulário validado no client-side
│   └── ui/
│       ├── MorphBlob.tsx
│       └── SectionDivider.tsx
├── lib/
│   └── registry.tsx        # StyledComponentsRegistry (SSR + ThemeProvider consolidados)
└── styles/
    ├── theme.ts             # Design tokens (cores, fontes, raios, sombras)
    ├── styled.d.ts          # Tipagem do tema para o styled-components
    └── GlobalStyle.ts
```

## 🧩 Seções da página

1. **Hero** — apresentação principal com painel de imagem em blob orgânico
2. **Sobre** — diferenciais da empresa em cards de vidro
3. **Como Funciona** — processo em 4 etapas (briefing → design → produção → entrega)
4. **Produtos** — catálogo filtrável por categoria, com imagens reais via Pexels
5. **Clientes** — prova social (logos/parceiros)
6. **Depoimentos** — prova social qualitativa
7. **FAQ** — dúvidas frequentes em accordion
8. **CTA final** — reforço de conversão antes do contato
9. **Contato** — formulário com validação client-side

## 🛠️ Rodando localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone https://github.com/SEU_USUARIO/merchandising-site.git
cd merchandising-site
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm start
```

## 🖼️ Imagens de produto

As imagens dos cards em **Produtos** são linkadas diretamente de URLs do [Pexels](https://www.pexels.com/), banco de imagens gratuito com uso comercial permitido e sem exigência de atribuição. Para trocar ou adicionar produtos, edite o array `products` em `src/components/sections/Products.tsx` com a URL de imagem correspondente.

O domínio `images.pexels.com` está liberado em `next.config.ts` via `images.remotePatterns`, exigência do Next.js para otimização de imagens externas.

## ⚠️ Conteúdo placeholder

Os seguintes dados são fictícios e devem ser substituídos por informações reais antes de qualquer uso em produção:

- Nomes de clientes/parceiros (`Clients.tsx`)
- Depoimentos (`Testimonials.tsx`)
- Informações de contato — e-mail, telefone, endereço (`Contact.tsx`)
- Textos e categorias de produtos (`Products.tsx`)
- Favicon (ainda no padrão do Next.js)

## 📌 Próximos passos possíveis

- Integração real do formulário de contato (Formspree, EmailJS ou API própria)
- Deploy na Vercel
- Testes de acessibilidade e performance (Lighthouse)
- Conteúdo e imagens definitivos da marca

## 📄 Licença

Projeto desenvolvido para fins de portfólio.