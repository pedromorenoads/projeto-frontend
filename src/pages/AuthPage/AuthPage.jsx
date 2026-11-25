import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx'
import styles from './AuthPage.module.css'

const content = {
  login: {
    title: 'Entrar',
    subtitle: 'Acesse sua conta para acompanhar pedidos e salvar seus favoritos.',
    submit: 'Entrar',
    switchText: 'Ainda não tem conta?',
    switchLinkText: 'Cadastre-se',
    switchTo: '/register',
  },
  register: {
    title: 'Criar conta',
    subtitle: 'Cadastre-se para acompanhar seus pedidos e guardar seus favoritos.',
    submit: 'Criar conta',
    switchText: 'Já tem uma conta?',
    switchLinkText: 'Entrar',
    switchTo: '/login',
  },
}

function AuthPage({ mode = 'login' }) {
  const [submitted, setSubmitted] = useState(false)
  const isRegister = mode === 'register'
  const page = content[mode]

  useEffect(() => {
    setSubmitted(false)
  }, [mode])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.card}>
          <h1 className={styles.title}>{page.title}</h1>
          <p className={styles.subtitle}>{page.subtitle}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {isRegister && (
              <label className={styles.field}>
                Nome
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  required
                />
              </label>
            )}

            <label className={styles.field}>
              E-mail
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="voce@email.com"
                required
              />
            </label>

            <label className={styles.field}>
              Senha
              <input
                type="password"
                name="password"
                autoComplete={isRegister ? 'new-password' : 'current-password'}
                placeholder="Mínimo de 6 caracteres"
                minLength="6"
                required
              />
            </label>

            <button type="submit" className={styles.submit}>
              {page.submit}
            </button>
          </form>

          {submitted && (
            <p className={styles.note}>
              Este projeto é apenas front-end, então o formulário ainda não está
              conectado a um back-end.
            </p>
          )}

          <p className={styles.switch}>
            {page.switchText}{' '}
            <Link to={page.switchTo}>{page.switchLinkText}</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AuthPage
