import { useEffect, useState } from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import styles from './Gallery.module.css'

function Gallery({
  images = [],
  width,
  height,
  radius = '0px',
  showThumbs = false,
  className = '',
  alt = 'Imagem do produto',
  fluid = false,
}) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setCurrent(0)
  }, [images])

  if (images.length === 0) {
    return null
  }

  const lastIndex = images.length - 1
  const rootClass = `${styles.gallery} ${fluid ? styles.fluid : ''} ${className}`.trim()
  const style = {
    '--gallery-width': width ? `${width}px` : '100%',
    '--gallery-height': height ? `${height}px` : 'auto',
    '--gallery-radius': radius,
    '--gallery-ratio': width && height ? `${width} / ${height}` : '4 / 3',
  }

  function goTo(index) {
    setCurrent(Math.max(0, Math.min(index, lastIndex)))
  }

  return (
    <div className={rootClass} style={style}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={`${image.src}-${index}`} className={styles.slide}>
              <img src={image.src} alt={`${alt} ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" width="14" height="24" />
        </button>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => goTo(current + 1)}
          disabled={current === lastIndex}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" width="14" height="24" />
        </button>
      </div>

      {showThumbs && (
        <div className={styles.thumbs}>
          {images.map((image, index) => (
            <button
              key={`thumb-${image.src}-${index}`}
              type="button"
              className={`${styles.thumb} ${current === index ? styles.thumbActive : ''}`.trim()}
              onClick={() => goTo(index)}
              aria-label={`Ver imagem ${index + 1}`}
              aria-current={current === index}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
