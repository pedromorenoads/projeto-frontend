const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(
  /\/$/,
  '',
)

async function request(path) {
  const response = await fetch(`${API_URL}${path}`)

  if (!response.ok) {
    let message = `Não foi possível carregar os dados (${response.status}).`

    try {
      const body = await response.json()
      if (body?.message) {
        message = body.message
      }
    } catch {
      // Resposta sem corpo JSON: mantém a mensagem padrão.
    }

    throw new Error(message)
  }

  return response.json()
}

function toQueryString(params) {
  const search = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, value)
    }
  })

  const query = search.toString()
  return query ? `?${query}` : ''
}

export function fetchProducts(params = {}) {
  const query = toQueryString({ limit: -1, ...params })
  return request(`/v1/product/search${query}`)
}

export function fetchProduct(identifier) {
  return request(`/v1/product/${encodeURIComponent(identifier)}`)
}

export function fetchCategories() {
  return request('/v1/category/search?limit=-1')
}
