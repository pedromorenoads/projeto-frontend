const extraImages = [
  '/produc-image-1.jpeg',
  '/produc-image-2.jpeg',
  '/produc-image-3.jpeg',
  '/produc-image-4.jpeg',
  '/produc-image-5.jpeg',
  '/product-thumb-1.jpeg',
  '/product-thumb-2.jpeg',
  '/product-thumb-3.jpeg',
  '/product-thumb-4.jpeg',
  '/product-thumb-5.jpeg',
]

function buildImages(mainImage) {
  const others = extraImages.filter((src) => src !== mainImage).slice(0, 4)

  return [{ src: mainImage }, ...others.map((src) => ({ src }))]
}

const products = [
  {
    id: 'air-jordan-1-retro-high-chicago',
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    reference: 'AJ1-CHI-001',
    brand: 'Jordan',
    category: 'Tênis',
    gender: 'Masculino',
    price: 1299.9,
    priceDiscount: 999.9,
    rating: 4.9,
    reviews: 132,
    image: '/product-thumb-2.jpeg',
    description:
      'O clássico que dispensa apresentações. Cabedal em couro premium, combinação icônica de vermelho, preto e branco e amortecimento Air no calcanhar. Uma peça que funciona tanto no dia a dia quanto na coleção.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['#d62828', '#ffffff', '#1f1f1f'],
  },
  {
    id: 'air-jordan-1-mid-white-red',
    name: "Air Jordan 1 Mid 'White University Red'",
    reference: 'AJ1-MID-014',
    brand: 'Jordan',
    category: 'Tênis',
    gender: 'Masculino',
    price: 899.9,
    priceDiscount: 719.9,
    rating: 4.7,
    reviews: 96,
    image: '/product-thumb-1.jpeg',
    description:
      'Silhueta inspirada no modelo de 1985, com cabedal em couro e detalhes em vermelho. O cano médio deixa o visual mais versátil para combinar com calça jeans, short ou alfaiataria.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['#ffffff', '#d62828', '#1f1f1f'],
  },
  {
    id: 'levis-skate-brown',
    name: "Levi's Skate Tênis Couro",
    reference: 'LVS-SKT-220',
    brand: "Levi's",
    category: 'Casual',
    gender: 'Unissex',
    price: 349.9,
    rating: 4.5,
    reviews: 58,
    image: '/product-thumb-3.jpeg',
    description:
      'Tênis de skate com cabedal em couro marrom escuro e solado vulcanizado. A palmilha acolchoada segura a onda nos rolês e o design discreto combina com qualquer look.',
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    colors: ['#6b4226', '#1f1f1f'],
  },
  {
    id: 'saucony-jazz-original-teal',
    name: 'Saucony Jazz Original Vintage',
    reference: 'SCN-JZZ-087',
    brand: 'Saucony',
    category: 'Corrida',
    gender: 'Unissex',
    price: 499.9,
    priceDiscount: 399.9,
    rating: 4.6,
    reviews: 71,
    image: '/product-thumb-4.jpeg',
    description:
      'Um clássico dos anos 80 que voltou com tudo. Mix de suede e nylon, detalhes em verde e laranja e entressola EVA para garantir conforto o dia inteiro.',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
    colors: ['#1d6f6d', '#d97a38', '#e8e1d5'],
  },
  {
    id: 'nike-air-zoom-neon',
    name: 'Nike Air Zoom Rival Fly Verde',
    reference: 'NKE-ZM-551',
    brand: 'Nike',
    category: 'Corrida',
    gender: 'Masculino',
    price: 749.9,
    rating: 4.8,
    reviews: 43,
    image: '/product-thumb-5.jpeg',
    description:
      'Feito para corridas leves e treinos na academia. Cabedal em mesh respirável, espuma responsiva e um toque de verde neon que não passa despercebido.',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['#c6f432', '#ffffff', '#1f1f1f'],
  },
  {
    id: 'nike-dunk-high-salmon',
    name: 'Nike Dunk High Premium Salmon',
    reference: 'NKE-DNK-309',
    brand: 'Nike',
    category: 'Tênis',
    gender: 'Feminino',
    price: 899.9,
    priceDiscount: 749.9,
    rating: 4.9,
    reviews: 210,
    image: '/produc-image-3.jpeg',
    description:
      'Cano alto com combinação de rosa salmão, azul claro e bege. O cabedal em suede e a entressola gum entregam um visual retrô que combina fácil com peças neutras.',
    sizes: ['34', '35', '36', '37', '38', '39', '40'],
    colors: ['#e9a08a', '#bfd7ea', '#efe6c8'],
  },
  {
    id: 'converse-chuck-70-beige',
    name: 'Converse Chuck 70 Hi Bege',
    reference: 'CVS-C70-118',
    brand: 'Converse',
    category: 'Casual',
    gender: 'Unissex',
    price: 429.9,
    rating: 4.7,
    reviews: 187,
    image: '/produc-image-4.jpeg',
    description:
      'Versão premium do Chuck Taylor, com lona mais grossa, costura reforçada e solado de borracha. O bege envelhece bem e acompanha qualquer estilo.',
    sizes: ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
    colors: ['#d9ceb2', '#ffffff'],
  },
  {
    id: 'nike-air-max-1-orange',
    name: 'Nike Air Max 1 Branco Laranja',
    reference: 'NKE-AM1-726',
    brand: 'Nike',
    category: 'Corrida',
    gender: 'Masculino',
    price: 699.9,
    priceDiscount: 599.9,
    rating: 4.8,
    reviews: 154,
    image: '/produc-image-5.jpeg',
    description:
      'O primeiro tênis com unidade Air visível completa 35 anos e continua atual. Base branca, detalhes em laranja e amortecimento que você sente no primeiro passo.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['#f26b3a', '#ffffff', '#1f1f1f'],
  },
  {
    id: 'air-jordan-1-pine-green',
    name: "Air Jordan 1 High 'Pine Green'",
    reference: 'AJ1-PGR-902',
    brand: 'Jordan',
    category: 'Tênis',
    gender: 'Masculino',
    price: 1199.9,
    rating: 4.9,
    reviews: 88,
    image: '/produc-image-1.jpeg',
    description:
      'Combinação de cinza, verde e amarelo em um dos modelos mais desejados dos últimos anos. Couro macio, cano alto e muita personalidade.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['#2e6b4f', '#c9c9c9', '#e8b93a'],
  },
  {
    id: 'adidas-originals-beige',
    name: 'Adidas Originals Bege Premium',
    reference: 'ADS-BGE-441',
    brand: 'Adidas',
    category: 'Casual',
    gender: 'Unissex',
    price: 579.9,
    priceDiscount: 489.9,
    rating: 4.6,
    reviews: 64,
    image: '/produc-image-2.jpeg',
    description:
      'Modelo casual com cabedal em couro bege e solado branco. Minimalista na medida, é a escolha certa para quem gosta de um visual limpo sem abrir mão do conforto.',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
    colors: ['#c7b299', '#ffffff'],
  },
]

export const heroImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/home-slide-${index + 1}.jpeg`,
}))

export const collections = [
  {
    src: '/collection-1.png',
    alt: 'Novo drop Supreme',
    href: '/products',
  },
  {
    src: '/collection-2.png',
    alt: 'Coleção Adidas',
    href: '/products?filter=adidas',
  },
  {
    src: '/collection-3.png',
    alt: 'Novo Beats Bass',
    href: '/products',
  },
]

export const productsWithGallery = products.map((product) => ({
  ...product,
  images: buildImages(product.image),
}))

export default productsWithGallery
