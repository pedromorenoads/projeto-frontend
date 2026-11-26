function getOption(product, type) {
  return (product.options || []).find((option) => option.type === type)
}

function getCategoryName(product, categoriesById) {
  const [categoryId] = product.category_ids || []
  return categoriesById[categoryId] || ''
}

export function mapProduct(product, categoriesById = {}) {
  const images = (product.images || []).map((image) => ({ src: image.content }))
  const sizes = getOption(product, 'text')
  const colors = getOption(product, 'color')

  const price = Number(product.price)
  const priceWithDiscount = Number(product.price_with_discount)
  const hasDiscount =
    Number.isFinite(priceWithDiscount) &&
    priceWithDiscount > 0 &&
    priceWithDiscount < price

  return {
    id: product.slug || String(product.id),
    name: product.name,
    reference: (product.slug || String(product.id)).toUpperCase(),
    brand: product.brand || '',
    category: getCategoryName(product, categoriesById),
    gender: product.gender || 'Unissex',
    price,
    priceDiscount: hasDiscount ? priceWithDiscount : null,
    rating: product.rating ?? 0,
    reviews: product.reviews ?? 0,
    image: images[0]?.src,
    images,
    description: product.description || '',
    sizes: sizes?.values || [],
    colors: colors?.values || [],
  }
}

export function mapProducts(products = [], categoriesById = {}) {
  return products.map((product) => mapProduct(product, categoriesById))
}

export function mapCategories(categories = []) {
  return categories.reduce((result, category) => {
    result[category.id] = category.name
    return result
  }, {})
}
