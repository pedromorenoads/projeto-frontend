import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import cartIcon from '../../assets/mini-cart.svg'
import Logo from '../Logo/Logo.jsx'
import styles from './Header.module.css'

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Header() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSearch(event) {
    event.preventDefault()
    const term = search.trim()

    navigate(term ? `/products?filter=${encodeURIComponent(term)}` : '/products')
    setSearch('')
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.top}`}>
        <Link to="/" className={styles.logoLink} aria-label="Página inicial">
          <Logo />
        </Link>

        <form className={styles.search} onSubmit={handleSearch} role="search">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
          />
          <button type="submit" className={styles.searchButton} aria-label="Buscar">
            <SearchIcon />
          </button>
        </form>

        <div className={styles.actions}>
          <Link to="/register" className={styles.register}>
            Cadastre-se
          </Link>
          <Link to="/login" className={styles.login}>
            Entrar
          </Link>
          <button type="button" className={styles.cart} aria-label="Carrinho de compras">
            <img src={cartIcon} alt="" width="22" height="23" />
          </button>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        <div className={`container ${styles.navInner}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`.trim()
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`.trim()
            }
          >
            Produtos
          </NavLink>
          <Link to="/products" className={styles.navLink}>
            Categorias
          </Link>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`.trim()
            }
          >
            Meus Pedidos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
