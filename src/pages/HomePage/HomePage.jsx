import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../../components/Gallery/Gallery.jsx'
import ProductListing from '../../components/ProductListing/ProductListing.jsx'
import Section from '../../components/Section/Section.jsx'
import { collections, heroImages } from '../../data/products.js'
import { fetchProducts } from '../../services/api.js'
import { mapProducts } from '../../services/productMapper.js'
import Layout from '../Layout/Layout.jsx'
import styles from './HomePage.module.css'

function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    setLoading(true)
    setError('')

    fetchProducts({ limit: 8 })
      .then((result) => {
        if (active) {
          setFeaturedProducts(mapProducts(result.data))
        }
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
  }, [])

  return (
    <Layout>
      <h1 className="sr-only">Drip Store</h1>

      <section className={styles.hero} aria-label="Destaques da loja">
        <Gallery
          images={heroImages}
          width="1440"
          height="681"
          radius="0px"
          alt="Destaque Drip Store"
          fluid
        />
      </section>

      <div className={`container ${styles.content}`}>
        <Section title="Coleções em destaque" titleAlign="center">
          <div className={styles.collections}>
            {collections.map((collection) => (
              <Link
                key={collection.src}
                to={collection.href}
                className={styles.collection}
                aria-label={collection.alt}
              >
                <img src={collection.src} alt={collection.alt} />
              </Link>
            ))}
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          {loading && <p className={styles.status}>Carregando produtos...</p>}

          {!loading && error && (
            <p className={styles.error}>
              {error} Verifique se a API está rodando em {import.meta.env.VITE_API_URL || 'http://localhost:3000'}.
            </p>
          )}

          {!loading && !error && <ProductListing products={featuredProducts} />}
        </Section>
      </div>
    </Layout>
  )
}

export default HomePage
