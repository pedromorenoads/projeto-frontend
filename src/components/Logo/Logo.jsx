import logoFooter from '../../assets/logo-footer.svg'
import logoHeader from '../../assets/logo-header.svg'
import styles from './Logo.module.css'

function Logo({ variant = 'header', className = '' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader

  return (
    <img
      src={src}
      alt="Digital Store"
      width="253"
      height="44"
      className={`${styles.logo} ${className}`.trim()}
    />
  )
}

export default Logo
