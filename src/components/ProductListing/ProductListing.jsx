import ProductCard from '../ProductCard/ProductCard.jsx'
import styles from './ProductListing.module.css'

function ProductListing({ products = [] }) {
  return (
    <div className={styles.grid}>
      {products.map(({ id, name, image, price, priceDiscount }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          image={image}
          price={price}
          priceDiscount={priceDiscount}
        />
      ))}
    </div>
  )
}

export default ProductListing
