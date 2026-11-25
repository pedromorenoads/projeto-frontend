const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatCurrency(value) {
  return currencyFormatter.format(value)
}

export function formatDiscount(price, priceDiscount) {
  if (!priceDiscount || priceDiscount >= price) {
    return null
  }

  return Math.round((1 - priceDiscount / price) * 100)
}
