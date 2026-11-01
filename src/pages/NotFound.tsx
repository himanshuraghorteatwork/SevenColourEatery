import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-xs tracking-[0.3em] text-burnt uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl">This table is empty</h1>
      <p className="mt-4 text-charcoal/70">That page is not on the menu.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-charcoal px-6 py-3 text-xs tracking-[0.2em] text-cream uppercase"
      >
        Back home
      </Link>
    </div>
  )
}
