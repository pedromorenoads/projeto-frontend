import { Link, useParams } from 'react-router-dom'
import BuyBox from '../../components/BuyBox/BuyBox.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'
import ProductListing from '../../components/ProductListing/ProductListing.jsx'
import ProductOptions from '../../components/ProductOptions/ProductOptions.jsx'
import Section from '../../components/Section/Section.jsx'
import products from '../../data/products.js'
import Layout from '../Layout/Layout.jsx'
import styles from './ProductViewPage.module.css'

function ProductViewPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <h1>Produto não encontrado</h1>
          <p>
            O produto que você procura não está mais disponível ou o endereço está
            incorreto.
          </p>
          <Link to="/products" className={styles.backLink}>
            Voltar para produtos
          </Link>
        </div>
      </Layout>
    )
  }

  const recommended = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4)

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

        <Section
          className={styles.recommended}
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  )
}

export default ProductViewPage
