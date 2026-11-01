import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { RestaurantProvider } from './context/RestaurantContext'
import { Admin } from './pages/Admin'
import { Contact } from './pages/Contact'
import { GalleryPage } from './pages/Gallery'
import { Home } from './pages/Home'
import { MenuPage } from './pages/Menu'
import { NotFound } from './pages/NotFound'
import { Reserve } from './pages/Reserve'
import { Story } from './pages/Story'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <RestaurantProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<Navigate to="/story" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </RestaurantProvider>
  )
}
