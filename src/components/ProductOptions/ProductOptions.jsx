import { useState } from 'react'
import styles from './ProductOptions.module.css'

function ProductOptions({
  label,
  options = [],
  shape = 'square',
  type = 'text',
  radius = '4px',
}) {
  const [selected, setSelected] = useState(null)
  const isColor = type === 'color'

  return (
    <div className={styles.group}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.options}>
        {options.map((option) => {
          const isSelected = selected === option
          const shapeClass = shape === 'circle' ? styles.circle : styles.square

          return (
            <button
              key={option}
              type="button"
              className={`${styles.option} ${shapeClass} ${isSelected ? styles.selected : ''}`.trim()}
              style={{
                backgroundColor: isColor ? option : undefined,
                borderRadius: shape === 'square' ? radius : undefined,
              }}
              onClick={() => setSelected(option)}
              aria-label={isColor ? `Selecionar a cor ${option}` : `Selecionar ${option}`}
              aria-pressed={isSelected}
              title={isColor ? option : undefined}
            >
              {!isColor && option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProductOptions
