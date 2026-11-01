import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { CustomCursor } from './CustomCursor'
import { FloatingActions } from './FloatingActions'
import { Footer } from './Footer'
import { Header } from './Header'
import { Loader } from './Loader'
import { ScrollProgress } from './ScrollProgress'

export function Layout() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </>
  )
}
