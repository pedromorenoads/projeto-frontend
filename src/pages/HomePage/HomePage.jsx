import { Link } from 'react-router-dom'
import Gallery from '../../components/Gallery/Gallery.jsx'
import ProductListing from '../../components/ProductListing/ProductListing.jsx'
import Section from '../../components/Section/Section.jsx'
import { collections, heroImages, productsWithGallery } from '../../data/products.js'
import Layout from '../Layout/Layout.jsx'
import styles from './HomePage.module.css'

function HomePage() {
  const featuredProducts = productsWithGallery.slice(0, 8)

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
          <ProductListing products={featuredProducts} />
        </Section>
      </div>
    </Layout>
  )
}

export default HomePage
