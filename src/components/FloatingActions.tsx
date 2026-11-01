import { ArrowUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site, whatsappUrl } from '../lib/site'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href={whatsappUrl(`Sawubona ${site.name}, I would like to book a table.`)}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      {showTop ? (
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-cream shadow-lg"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  )
}
