# Merchandising Co. — Site Institucional

Site institucional para uma empresa fictícia de merchandising personalizado, desenvolvido como projeto de portfólio (MVP). Design **dark mode luxuoso**: fundo escuro, cartões sólidos elevados, tipografia serifada nos títulos e **dourado** como cor de destaque única.

## 🚀 Stack

- **[Next.js](https://nextjs.org/)** (App Router) — framework React com renderização híbrida (SSR/CSR)
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[styled-components](https://styled-components.com/)** — CSS-in-JS com tema tipado
- **[lucide-react](https://lucide.dev/)** — ícones
- **[Pexels](https://www.pexels.com/)** — banco de imagens gratuito, licenciado para uso comercial, usado nos cards de produto

> Projeto **front-end only** — não há integração com back-end, banco de dados ou serviço de analytics. O formulário de contato simula o envio no client-side, com um ponto de integração já preparado para serviços como Formspree ou EmailJS.

## 🎨 Identidade visual

### Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `background` | `#141414` | Fundo principal |
| `backgroundAlt` | `#1C1C1C` | Fundo de inputs e áreas alternadas |
| `surface` | `#1F1F1F` | Cards padrão |
| `surfaceRaised` | `#262626` | Cards de destaque (ex: banner de CTA) |
| `text` | `#F5F3EE` | Texto principal (branco quebrado, não puro) |
| `textMuted` | `#9B9892` | Texto secundário |
| `primary` | `#D9A94E` | Dourado — CTAs, ícones, badges, acentos |
| `border` | `rgba(255,255,255,0.07)` | Bordas sutis dos cards |

O dourado é usado **com moderação**, apenas em elementos de ação e destaque (botões, ícones, eyebrows, badges de categoria) — nunca como cor de fundo extensa, para manter a leitura limpa e sóbria.

### Tipografia

- **Display**: `Playfair Display` (serifada) — títulos, headlines
- **Corpo**: `Inter` — texto corrido

Fontes carregadas via `<link>` do Google Fonts no `<head>` (não via `next/font/google`), para evitar falhas de build em redes com bloqueio a `fonts.gstatic.com` durante o fetch em tempo de build.

### Linguagem visual

- **Cards sólidos elevados**: sombra profunda (`box-shadow`), sem blur/glassmorphism
- **CTAs em pílula**: botões com `border-radius` total, fundo dourado, texto escuro
- **Menu mobile**: painel flutuante compacto (não tela cheia), ancorado no canto superior direito

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz, metadata, fontes, integra Header/Footer
│   └── page.tsx            # Composição das seções da home
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Header fixo + menu mobile flutuante
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── HowItWorks.tsx
│       ├── Products.tsx    # Grid de produtos com filtro por categoria
│       ├── Clients.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx         # Accordion com transição via CSS Grid
│       ├── FinalCTA.tsx
│       └── Contact.tsx     # Formulário validado no client-side
├── lib/
│   └── registry.tsx        # StyledComponentsRegistry (SSR + ThemeProvider consolidados)
└── styles/
    ├── theme.ts             # Design tokens (cores, fontes, raios, sombras)
    ├── styled.d.ts          # Tipagem do tema para o styled-components
    └── GlobalStyle.ts
```

## 🧩 Seções da página

1. **Hero** — apresentação principal com card de produto em destaque
2. **Sobre** — diferenciais da empresa em cards
3. **Como Funciona** — processo em 4 etapas (briefing → design → produção → entrega)
4. **Produtos** — catálogo filtrável por categoria, com imagens via Pexels
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

As imagens dos cards em **Produtos** são linkadas diretamente de URLs do [Pexels](https://www.pexels.com/), banco de imagens gratuito com uso comercial permitido e sem exigência de atribuição. O domínio `images.pexels.com` está liberado em `next.config.ts` via `images.remotePatterns`. Para trocar ou adicionar produtos, edite o array `products` em `src/components/sections/Products.tsx`.

## 🔒 Conformidade com a LGPD

Este projeto é um MVP de portfólio, mas segue princípios básicos da **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)** no que se aplica a um site institucional sem back-end:

### Dados pessoais coletados

O único ponto de coleta de dados pessoais é o **formulário de contato** (`Contact.tsx`), que solicita nome, e-mail e mensagem. Atualmente:

- Os dados **não são enviados a nenhum servidor** — o envio é simulado no client-side (`setTimeout`), sem persistência ou transmissão real.
- Não há cookies de rastreamento, pixels de terceiros ou ferramentas de analytics implementadas.
- Não há coleta de dados sensíveis (saúde, biometria, origem racial, etc.).

### Antes de publicar em produção

Ao ativar o envio real do formulário (Formspree, EmailJS ou API própria), as seguintes práticas passam a ser **obrigatórias** para conformidade com a LGPD:

- [ ] **Política de Privacidade**: criar uma página informando quais dados são coletados, com qual finalidade, por quanto tempo são retidos, e com quem podem ser compartilhados (ex: provedor de e-mail transacional).
- [ ] **Base legal**: para formulário de contato B2B, a base legal costuma ser o **legítimo interesse** ou **consentimento** — declarar isso na política.
- [ ] **Consentimento explícito**: adicionar um checkbox de aceite (não pré-marcado) vinculado à Política de Privacidade antes do envio do formulário.
- [ ] **Canal para exercício de direitos**: informar um e-mail de contato do Encarregado de Dados (DPO) ou responsável, permitindo que o titular solicite acesso, correção ou exclusão dos seus dados.
- [ ] **Minimização de dados**: manter a coleta restrita ao necessário (nome, e-mail, mensagem já são o mínimo razoável para um contato comercial).
- [ ] **Cookies e analytics**: se for adicionado Google Analytics, Meta Pixel ou similar, implementar um **banner de consentimento de cookies** antes de carregar os scripts, com opção de recusa.
- [ ] **Retenção e exclusão**: definir prazo de retenção dos dados de contato e processo de exclusão mediante solicitação.

### Sobre as imagens de banco (Pexels)

O uso de fotos de banco de imagens como o Pexels reduz o risco de tratamento indevido de dados pessoais de imagem: fotos com pessoas identificáveis publicadas nesses bancos já possuem autorização de uso (model release) do fotógrafo/modelo, diferente de fotos capturadas e publicadas sem consentimento do titular.

### Dados fictícios no código

Nomes de clientes, depoimentos e informações de contato atualmente no código são **fictícios**, usados apenas para preencher a estrutura visual — ver seção abaixo.

## ⚠️ Conteúdo placeholder

Os seguintes dados são fictícios e devem ser substituídos por informações reais antes de qualquer uso em produção:

- Nomes de clientes/parceiros (`Clients.tsx`)
- Depoimentos (`Testimonials.tsx`) — depoimentos reais exigem autorização do cliente para uso do nome/cargo
- Informações de contato — e-mail, telefone, endereço (`Contact.tsx`)
- Textos e categorias de produtos (`Products.tsx`)
- Favicon (ainda no padrão do Next.js)

## 📌 Próximos passos possíveis

- Integração real do formulário de contato (Formspree, EmailJS ou API própria) + checkbox de consentimento LGPD
- Página de Política de Privacidade e Termos de Uso
- Deploy na Vercel
- Testes de acessibilidade e performance (Lighthouse)
- Conteúdo, imagens e depoimentos definitivos da marca (com autorização de uso)

## 📄 Licença

Projeto desenvolvido para fins de portfólio.