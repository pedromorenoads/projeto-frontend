import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterGroup from '../../components/FilterGroup/FilterGroup.jsx'
import ProductListing from '../../components/ProductListing/ProductListing.jsx'
import Section from '../../components/Section/Section.jsx'
import { fetchCategories, fetchProducts } from '../../services/api.js'
import { mapCategories, mapProducts } from '../../services/productMapper.js'
import { normalizeText } from '../../utils/normalizeText.js'
import Layout from '../Layout/Layout.jsx'
import styles from './ProductListingPage.module.css'

function finalPrice(product) {
  return product.priceDiscount ?? product.price
}

function toggleValue(setter, value, checked) {
  setter((current) =>
    checked ? [...current, value] : current.filter((item) => item !== value),
  )
}

function buildOptions(values) {
  return [...new Set(values.filter(Boolean))]
    .sort()
    .map((value) => ({ text: value, value }))
}

function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [reloadKey, setReloadKey] = useState(0)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedGenders, setSelectedGenders] = useState([])
  const [sort, setSort] = useState('')

  const searchTerm = searchParams.get('filter') ?? ''

  useEffect(() => {
    let active = true

    setLoading(true)
    setError('')

    Promise.all([fetchProducts({ limit: -1 }), fetchCategories()])
      .then(([productsResult, categoriesResult]) => {
        if (!active) {
          return
        }

        const categoriesById = mapCategories(categoriesResult.data)
        setProducts(mapProducts(productsResult.data, categoriesById))
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [reloadKey])

  const brandOptions = useMemo(
    () => buildOptions(products.map((product) => product.brand)),
    [products],
  )

  const categoryOptions = useMemo(
    () => buildOptions(products.map((product) => product.category)),
    [products],
  )

  const genderOptions = useMemo(
    () => buildOptions(products.map((product) => product.gender)),
    [products],
  )

  const filteredProducts = useMemo(() => {
    const term = normalizeText(searchTerm.trim())

    const result = products.filter((product) => {
      const searchableText = normalizeText(
        `${product.name} ${product.brand} ${product.category} ${product.gender}`,
      )

      const matchesTerm = !term || searchableText.includes(term)
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
      const matchesGender =
        selectedGenders.length === 0 || selectedGenders.includes(product.gender)

      return matchesTerm && matchesBrand && matchesCategory && matchesGender
    })

    if (sort === 'price-asc') {
      return [...result].sort((a, b) => finalPrice(a) - finalPrice(b))
    }

    if (sort === 'price-desc') {
      return [...result].sort((a, b) => finalPrice(b) - finalPrice(a))
    }

    return result
  }, [products, searchTerm, selectedBrands, selectedCategories, selectedGenders, sort])

  const hasFilters =
    Boolean(searchTerm.trim()) ||
    selectedBrands.length > 0 ||
    selectedCategories.length > 0 ||
    selectedGenders.length > 0

  const resultsTitle =
    filteredProducts.length === 1
      ? '1 produto encontrado'
      : `${filteredProducts.length} produtos encontrados`

  function clearFilters() {
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedGenders([])
    setSort('')
    setSearchParams({}, { replace: true })
  }

  return (
    <Layout>
      <h1 className="sr-only">Produtos</h1>

      <div className={`container ${styles.page}`}>
        <aside className={styles.sidebar}>
          <div className={styles.sort}>
            <label htmlFor="sort" className={styles.sortLabel}>
              Ordenar por
            </label>
            <select
              id="sort"
              className={styles.select}
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="">Mais relevantes</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
            </select>
          </div>

          <div className={styles.filters}>
            <h2 className={styles.filtersTitle}>Filtrar por</h2>

            <div className={styles.groups}>
              <FilterGroup
                title="Marca"
                name="brand"
                options={brandOptions}
                selectedValues={selectedBrands}
                onChange={(value, checked) =>
                  toggleValue(setSelectedBrands, value, checked)
                }
              />

              <FilterGroup
                title="Categoria"
                name="category"
                options={categoryOptions}
                selectedValues={selectedCategories}
                onChange={(value, checked) =>
                  toggleValue(setSelectedCategories, value, checked)
                }
              />

              <FilterGroup
                title="Gênero"
                name="gender"
                options={genderOptions}
                selectedValues={selectedGenders}
                onChange={(value, checked) =>
                  toggleValue(setSelectedGenders, value, checked)
                }
              />
            </div>

            {hasFilters && (
              <button type="button" className={styles.clear} onClick={clearFilters}>
                Limpar filtros
              </button>
            )}
          </div>
        </aside>

        <div className={styles.results}>
          {searchTerm.trim() && (
            <p className={styles.searchInfo}>
              Resultados para <strong>&quot;{searchTerm}&quot;</strong>
            </p>
          )}

          <Section
            title={
              loading ? 'Carregando produtos...' : error ? 'Produtos' : resultsTitle
            }
            titleAlign="left"
          >
            {loading && <p className={styles.status}>Buscando produtos na API...</p>}

            {!loading && error && (
              <div className={styles.empty}>
                <h3>Não foi possível carregar os produtos</h3>
                <p>
                  {error} Verifique se a API está rodando em{' '}
                  {import.meta.env.VITE_API_URL || 'http://localhost:3000'}.
                </p>
                <button
                  type="button"
                  className={styles.emptyButton}
                  onClick={() => setReloadKey((key) => key + 1)}
                >
                  Tentar novamente
                </button>
              </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <ProductListing products={filteredProducts} />
            )}

            {!loading && !error && filteredProducts.length === 0 && (
              <div className={styles.empty}>
                <h3>Nenhum produto encontrado</h3>
                <p>
                  Tente outro termo de busca ou remova os filtros para ver todos os
                  produtos.
                </p>
                <button
                  type="button"
                  className={styles.emptyButton}
                  onClick={clearFilters}
                >
                  Limpar busca
                </button>
              </div>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  )
}

export default ProductListingPage
