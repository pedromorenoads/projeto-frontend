import { Link } from 'react-router-dom'
import styles from './Section.module.css'

const externalLinkPattern = /^(https?:|mailto:|tel:)/

function Section({ title, titleAlign = 'left', link, children, className = '' }) {
  const headerClass =
    `${styles.header} ${titleAlign === 'center' ? styles.center : ''}`.trim()

  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <div className={headerClass}>
        <h2 className={styles.title}>{title}</h2>

        {link &&
          (externalLinkPattern.test(link.href) ? (
            <a
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          ) : (
            <Link to={link.href} className={styles.link}>
              {link.text}
            </Link>
          ))}
      </div>

      {children}
    </section>
  )
}

export default Section
