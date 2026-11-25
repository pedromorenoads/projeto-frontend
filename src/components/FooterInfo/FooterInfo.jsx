import { Link } from 'react-router-dom'
import styles from './FooterInfo.module.css'

const externalLinkPattern = /^(https?:|mailto:|tel:)/

function FooterInfo({ title, informations = [] }) {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {informations.map(({ text, link }) => (
          <li key={text}>
            {externalLinkPattern.test(link) ? (
              <a
                href={link}
                className={styles.link}
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noreferrer' : undefined}
              >
                {text}
              </a>
            ) : (
              <Link to={link} className={styles.link}>
                {text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterInfo
