import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Story' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reserve', label: 'Reserve' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const home = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !home || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        solid ? 'bg-cream/95 text-charcoal shadow-sm backdrop-blur' : 'bg-transparent text-cream'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-cream focus:p-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-11 w-11 object-contain" />
          <span className="font-display text-xl leading-none tracking-wide">
            Seven Colours
            <span className="block text-[10px] tracking-[0.28em] uppercase">Eatery · Cape Town</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs tracking-[0.22em] uppercase transition ${
                  isActive ? 'text-burnt' : 'hover:text-burnt'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reserve"
            className="rounded-full bg-burnt px-5 py-2 text-xs tracking-[0.2em] text-cream uppercase"
          >
            Book a table
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-cream text-charcoal lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="font-display text-2xl"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
