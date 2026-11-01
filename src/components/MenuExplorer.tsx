import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRestaurant } from '../context/RestaurantContext'
import { MENU_CATEGORIES, type Dish } from '../types'
import { DishModal } from './DishModal'
import { SafeImage } from './SafeImage'

type Props = {
  featuredOnly?: boolean
  compact?: boolean
}

export function MenuExplorer({ featuredOnly = false, compact = false }: Props) {
  const { menu } = useRestaurant()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')
  const [active, setActive] = useState<Dish | null>(null)
  const navigate = useNavigate()

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menu.filter((dish) => {
      if (featuredOnly && !dish.featured) return false
      if (category !== 'All' && dish.category !== category) return false
      if (!q) return true
      return (
        dish.name.toLowerCase().includes(q) ||
        dish.description.toLowerCase().includes(q) ||
        dish.category.toLowerCase().includes(q)
      )
    })
  }, [menu, query, category, featuredOnly])

  return (
    <div>
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${compact ? 'hidden' : ''}`}
      >
        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">Search the menu</span>
          <Search className="pointer-events-none absolute top-3.5 left-3 h-4 w-4 text-charcoal/40" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes"
            className="w-full rounded-full border border-charcoal/15 bg-cream py-3 pr-4 pl-10 outline-none focus:border-burnt"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
          {['All', ...MENU_CATEGORIES].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-xs tracking-[0.16em] uppercase ${
                category === item ? 'bg-charcoal text-cream' : 'bg-charcoal/8 text-charcoal'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="mt-12 text-center text-charcoal/60">
          No dishes match that search. Try another word or category.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((dish) => (
            <li key={dish.id}>
              <button
                type="button"
                onClick={() => setActive(dish)}
                className="group w-full overflow-hidden rounded-3xl bg-white text-left shadow-sm"
              >
                <div className="overflow-hidden">
                  <SafeImage
                    src={dish.image}
                    alt={dish.name}
                    className="h-56 w-full transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] tracking-[0.24em] text-burnt uppercase">
                    {dish.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl">{dish.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-charcoal/70">{dish.description}</p>
                  <p className="mt-3 text-sm font-medium text-green">{dish.priceLabel}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      <DishModal
        dish={active}
        onClose={() => setActive(null)}
        onReserve={(name) =>
          navigate(`/reserve?dish=${encodeURIComponent(name)}`)
        }
      />
    </div>
  )
}
