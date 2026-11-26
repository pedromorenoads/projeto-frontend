import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BuyBox from '../../components/BuyBox/BuyBox.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'
import ProductListing from '../../components/ProductListing/ProductListing.jsx'
import ProductOptions from '../../components/ProductOptions/ProductOptions.jsx'
import Section from '../../components/Section/Section.jsx'
import { fetchProduct, fetchProducts } from '../../services/api.js'
import { mapProduct, mapProducts } from '../../services/productMapper.js'
import Layout from '../Layout/Layout.jsx'
import styles from './ProductViewPage.module.css'

function ProductViewPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    setLoading(true)
    setError('')
    setProduct(null)

    fetchProduct(id)
      .then((result) => {
        if (active) {
          setProduct(mapProduct(result))
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
  }, [id])

  useEffect(() => {
    let active = true

    fetchProducts({ limit: 5 })
      .then((result) => {
        if (active) {
          setRecommended(
            mapProducts(result.data)
              .filter((item) => item.id !== id)
              .slice(0, 4),
          )
        }
      })
      .catch(() => {
        if (active) {
          setRecommended([])
        }
      })

    return () => {
      active = false
    }
  }, [id])

  if (loading) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <p>Carregando produto...</p>
        </div>
      </Layout>
    )
  }

  if (error || !product) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <h1>Produto não encontrado</h1>
          <p>
            {error ||
              'O produto que você procura não está mais disponível ou o endereço está incorreto.'}
          </p>
          <Link to="/products" className={styles.backLink}>
            Voltar para produtos
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <div className={styles.product}>
          <Gallery
            images={product.images}
            width="700"
            height="570"
            radius="4px"
            showThumbs
            alt={product.name}
          />

          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.rating}
            rating={product.reviews}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <div className={styles.options}>
              <ProductOptions
                label="Tamanhos"
                options={product.sizes}
                shape="square"
                type="text"
                radius="4px"
              />
              <ProductOptions
                label="Cores"
                options={product.colors}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>

        {recommended.length > 0 && (
          <Section
            className={styles.recommended}
            title="Produtos recomendados"
            titleAlign="left"
            link={{ text: 'Ver todos', href: '/products' }}
          >
            <ProductListing products={recommended} />
          </Section>
        )}
      </div>
    </Layout>
  )
}

export default ProductViewPage
