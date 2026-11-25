import starIcon from '../../assets/star-icon.svg'
import { formatCurrency } from '../../utils/format.js'
import styles from './BuyBox.module.css'

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div className={styles.buyBox}>
      <div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.reference}>REF: {reference}</p>
      </div>

      <div className={styles.rating}>
        <span className={styles.stars}>
          {stars}
          <img src={starIcon} alt="" width="14" height="14" />
        </span>
        <span className={styles.reviews}>({rating} avaliações)</span>
      </div>

      <div className={styles.prices}>
        {priceDiscount ? (
          <>
            <span className={styles.priceDiscount}>{formatCurrency(priceDiscount)}</span>
            <span className={styles.oldPrice}>{formatCurrency(price)}</span>
          </>
        ) : (
          <span className={styles.price}>{formatCurrency(price)}</span>
        )}
      </div>

      <p className={styles.description}>{description}</p>

      {children}

      <button type="button" className={styles.cta}>
        COMPRAR
      </button>
    </div>
  )
}

export default BuyBox
