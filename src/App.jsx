import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import ProductListingPage from './pages/ProductListingPage/ProductListingPage.jsx'
import ProductViewPage from './pages/ProductViewPage/ProductViewPage.jsx'
import AuthPage from './pages/AuthPage/AuthPage.jsx'
import OrdersPage from './pages/OrdersPage/OrdersPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<Navigate to="/products" replace />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
