import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx'
import styles from './OrdersPage.module.css'

function OrdersPage() {
  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <span className={styles.eyebrow}>Minha conta</span>
        <h1 className={styles.title}>Meus pedidos</h1>

        <div className={styles.empty}>
          <div className={styles.icon} aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="m4 7.5 8 4.5 8-4.5M12 12v9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2>Você ainda não tem pedidos</h2>
          <p>
            Quando finalizar uma compra, seus pedidos vão aparecer aqui com o status
            e o código de rastreio.
          </p>
          <Link to="/products" className={styles.button}>
            Ver produtos
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default OrdersPage
