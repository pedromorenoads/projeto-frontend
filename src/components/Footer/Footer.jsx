import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import twitterIcon from '../../assets/twitter.svg'
import FooterInfo from '../FooterInfo/FooterInfo.jsx'
import Logo from '../Logo/Logo.jsx'
import styles from './Footer.module.css'

const informations = [
  {
    title: 'Informações',
    links: [
      { text: 'Sobre a Drip Store', link: '/about' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Política de Privacidade', link: '/privacy' },
      { text: 'Meus Pedidos', link: '/orders' },
    ],
  },
  {
    title: 'Categorias',
    links: [
      { text: 'Camisetas', link: '/products?filter=camiseta' },
      { text: 'Calças', link: '/products?filter=calca' },
      { text: 'Tênis', link: '/products?filter=tenis' },
      { text: 'Bonés', link: '/products?filter=bone' },
      { text: 'Headphones', link: '/products?filter=headphone' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { text: 'contato@dripstore.com.br', link: 'mailto:contato@dripstore.com.br' },
      { text: '(11) 99999-9999', link: 'tel:+5511999999999' },
      { text: 'WhatsApp', link: 'https://wa.me/5511999999999' },
      { text: 'Trocas e devoluções', link: '/exchanges' },
    ],
  },
]

const socialLinks = [
  { icon: facebookIcon, label: 'Facebook', href: 'https://www.facebook.com' },
  { icon: instagramIcon, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: twitterIcon, label: 'Twitter', href: 'https://twitter.com' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo variant="footer" />

          <p className={styles.description}>
            A Drip Store é uma loja de sneakers e streetwear para quem gosta de
            estilo, conforto e lançamento. Do clássico ao mais recente, aqui você
            encontra aquele par que combina com a sua vibe.
          </p>

          <div className={styles.socials}>
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        {informations.map(({ title, links }) => (
          <FooterInfo key={title} title={title} informations={links} />
        ))}
      </div>

      <div className="container">
        <hr className={styles.divider} />
        <p className={styles.copy}>
          © {year} Digital Store. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
