import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { GalleryItem } from '../types'

type Props = {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onIndex: (index: number) => void
}

export function Lightbox({ items, index, onClose, onIndex }: Props) {
  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onIndex((index + 1) % items.length)
      if (event.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, items.length, onClose, onIndex])

  if (index === null) return null
  const item = items[index]
  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image"
    >
      <button
        type="button"
        className="absolute top-5 right-5 text-cream"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X />
      </button>
      <button
        type="button"
        className="absolute left-4 text-cream"
        onClick={() => onIndex((index - 1 + items.length) % items.length)}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <figure className="max-w-5xl">
        <img src={item.src} alt={item.alt} className="max-h-[80vh] w-full object-contain" />
        <figcaption className="mt-3 text-center text-cream/80">{item.caption}</figcaption>
      </figure>
      <button
        type="button"
        className="absolute right-4 text-cream"
        onClick={() => onIndex((index + 1) % items.length)}
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
}
