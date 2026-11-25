import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.text}>
          O endereço que você tentou acessar não existe ou foi movido para outro
          lugar.
        </p>
        <Link to="/" className={styles.button}>
          Voltar para a home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
