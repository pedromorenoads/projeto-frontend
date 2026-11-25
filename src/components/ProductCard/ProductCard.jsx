import { Link } from 'react-router-dom'
import { formatCurrency, formatDiscount } from '../../utils/format.js'
import styles from './ProductCard.module.css'

function ProductCard({ id, name, image, price, priceDiscount }) {
  const discount = formatDiscount(price, priceDiscount)

  return (
    <Link to={`/product/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
        {discount && <span className={styles.badge}>-{discount}%</span>}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>

        <div className={styles.prices}>
          {priceDiscount ? (
            <>
              <span className={styles.oldPrice}>{formatCurrency(price)}</span>
              <span className={styles.price}>{formatCurrency(priceDiscount)}</span>
            </>
          ) : (
            <span className={styles.price}>{formatCurrency(price)}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
