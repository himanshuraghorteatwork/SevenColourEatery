import { defaultGallery } from '../data/gallery'
import { defaultMenu } from '../data/menu'
import { defaultTestimonials } from '../data/testimonials'
import type {
  ContactMessage,
  Dish,
  GalleryItem,
  Reservation,
  RestaurantSettings,
  Testimonial,
} from '../types'

const KEYS = {
  menu: 'sce.menu',
  gallery: 'sce.gallery',
  testimonials: 'sce.testimonials',
  reservations: 'sce.reservations',
  messages: 'sce.messages',
  settings: 'sce.settings',
} as const

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function writeJson<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function loadMenu(): Dish[] {
  return readJson(KEYS.menu, defaultMenu)
}

export function saveMenu(menu: Dish[]) {
  writeJson(KEYS.menu, menu)
}

export function loadGallery(): GalleryItem[] {
  return readJson(KEYS.gallery, defaultGallery)
}

export function saveGallery(items: GalleryItem[]) {
  writeJson(KEYS.gallery, items)
}

export function loadTestimonials(): Testimonial[] {
  return readJson(KEYS.testimonials, defaultTestimonials)
}

export function saveTestimonials(items: Testimonial[]) {
  writeJson(KEYS.testimonials, items)
}

export function loadReservations(): Reservation[] {
  return readJson(KEYS.reservations, [])
}

export function saveReservations(items: Reservation[]) {
  writeJson(KEYS.reservations, items)
}

export function loadMessages(): ContactMessage[] {
  return readJson(KEYS.messages, [])
}

export function saveMessages(items: ContactMessage[]) {
  writeJson(KEYS.messages, items)
}

export function loadSettings(): RestaurantSettings {
  return readJson(KEYS.settings, {
    announcement:
      'Bookings essential for groups of 6 or more, and for all dinners.',
  })
}

export function saveSettings(settings: RestaurantSettings) {
  writeJson(KEYS.settings, settings)
}
