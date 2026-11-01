import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { Dish } from '../types'
import { MagneticButton } from './MagneticButton'

type Props = {
  dish: Dish | null
  onClose: () => void
  onReserve: (dishName: string) => void
}

export function DishModal({ dish, onClose, onReserve }: Props) {
  useEffect(() => {
    if (!dish) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dish, onClose])

  if (!dish) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-cream shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img src={dish.image} alt={dish.name} className="h-72 w-full object-cover" />
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-cream/90 p-2"
            onClick={onClose}
            aria-label="Close dish details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-8">
          <p className="text-xs tracking-[0.28em] text-burnt uppercase">{dish.category}</p>
          <h3 id="dish-title" className="mt-2 font-display text-4xl">
            {dish.name}
          </h3>
          <p className="mt-4 text-charcoal/75">{dish.description}</p>
          <p className="mt-4 font-medium text-green">{dish.priceLabel}</p>
          {dish.placeholder ? (
            <p className="mt-2 text-sm text-charcoal/60">
              Placeholder item — confirm availability with the restaurant.
            </p>
          ) : null}
          <MagneticButton
            className="mt-6 rounded-full bg-burnt px-6 py-3 text-xs tracking-[0.2em] text-cream uppercase"
            onClick={() => onReserve(dish.name)}
          >
            Reserve around this dish
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}
