# Drip Store | Digital Store

Projeto final do curso de Desenvolvimento Full Stack da Digital College. A aplicação reproduz a interface da Digital Store com React, React Router e CSS Modules, cobrindo as três páginas pedidas na documentação: home, listagem de produtos e visualização do produto.

## Funcionalidades

- Home com carrossel de destaques, coleções e os 8 produtos em alta.
- Busca no cabeçalho, com redirecionamento para `/products?filter=...`.
- Listagem com filtros por marca, categoria e gênero, ordenação por preço e contagem dinâmica de resultados.
- Página de produto com galeria de imagens (setas e miniaturas), seleção de tamanho e cor, preço com desconto e produtos recomendados.
- Layout compartilhado com `<Header />` e `<Footer />` em todas as páginas.
- Menu com estado ativo, página 404 e telas de login, cadastro e pedidos para apoiar a navegação.

## Tecnologias

- React 18
- React Router DOM 6
- Vite 6
- CSS Modules e CSS variables para os tokens de cor e tipografia
- ESLint

## Como rodar

Pré-requisitos: Node.js 18 ou superior e a API (`projeto-back-end`) rodando.

```bash
npm install
npm run dev
```

O projeto abre em `http://localhost:5173`.

Por padrão o front consome a API em `http://localhost:3000`. Para apontar para outro endereço, copie `.env.example` para `.env` e ajuste `VITE_API_URL`.

Outros scripts:

```bash
npm run build    # build de produção
npm run preview  # pré-visualização do build
npm run lint     # análise estática
```

## Rotas

| Rota           | Página                                              |
| -------------- | --------------------------------------------------- |
| `/`            | Home                                                |
| `/products`    | Listagem, aceita o parâmetro `?filter=`             |
| `/product/:id` | Visualização do produto                             |
| `/login`       | Entrar (interface sem integração com back-end)      |
| `/register`    | Criar conta (interface sem integração com back-end) |
| `/orders`      | Meus pedidos (estado vazio)                         |

A rota `/produtos` também existe e redireciona para `/products`.

## Estrutura

```text
src/
├── assets/          # logos, ícones e setas em SVG
├── components/
│   ├── BuyBox/
│   ├── FilterGroup/
│   ├── Footer/
│   ├── FooterInfo/
│   ├── Gallery/
│   ├── Header/
│   ├── Logo/
│   ├── ProductCard/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── data/
│   └── products.js  # produtos, galerias e coleções
├── pages/
│   ├── AuthPage/
│   ├── HomePage/
│   ├── Layout/
│   ├── NotFoundPage/
│   ├── OrdersPage/
│   ├── ProductListingPage/
│   └── ProductViewPage/
├── services/
│   ├── api.js           # cliente HTTP da Digital Store API
│   └── productMapper.js # adapta a resposta da API para o formato da UI
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Sobre os dados

Os produtos, categorias e imagens dos produtos vêm da API (`GET /v1/product` e `GET /v1/category`). As coleções e o carrossel da home continuam sendo imagens locais em `public/`.

Busca, filtros e ordenação são aplicados no cliente sobre os produtos retornados pela API. Os formulários de login/cadastro e a página de pedidos ainda são apenas interface.

## Deploy

O projeto está pronto para Vercel ou Netlify. Os arquivos `vercel.json` e `public/_redirects` já configuram o redirecionamento das rotas para o `index.html`, evitando 404 ao atualizar uma página interna.

## Autoria

Projeto individual desenvolvido por Pedro.
