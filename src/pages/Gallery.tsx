import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { SafeImage } from '../components/SafeImage'
import { SectionHeading } from '../components/SectionHeading'
import { useRestaurant } from '../context/RestaurantContext'

export function GalleryPage() {
  const { gallery } = useRestaurant()
  const [index, setIndex] = useState<number | null>(null)

  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Gallery"
          title="Steam, spice and canal light"
          copy="Editorial photography for the website. Replace with restaurant-owned images when available."
        />
        <ul className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, itemIndex) => (
            <li key={item.id} className="mb-4 break-inside-avoid">
              <button
                type="button"
                className="group w-full overflow-hidden rounded-3xl"
                onClick={() => setIndex(itemIndex)}
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  className="w-full transition duration-700 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Lightbox items={gallery} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </div>
  )
}
