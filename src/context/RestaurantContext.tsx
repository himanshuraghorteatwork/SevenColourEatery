import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  loadGallery,
  loadMenu,
  loadMessages,
  loadReservations,
  loadSettings,
  loadTestimonials,
  saveGallery,
  saveMenu,
  saveMessages,
  saveReservations,
  saveSettings,
  saveTestimonials,
} from '../lib/storage'
import type {
  ContactMessage,
  Dish,
  GalleryItem,
  Reservation,
  RestaurantSettings,
  Testimonial,
} from '../types'

type RestaurantState = {
  menu: Dish[]
  gallery: GalleryItem[]
  testimonials: Testimonial[]
  reservations: Reservation[]
  messages: ContactMessage[]
  settings: RestaurantSettings
  setMenu: (menu: Dish[]) => void
  setGallery: (items: GalleryItem[]) => void
  setTestimonials: (items: Testimonial[]) => void
  addReservation: (item: Reservation) => void
  addMessage: (item: ContactMessage) => void
  setReservations: (items: Reservation[]) => void
  setSettings: (settings: RestaurantSettings) => void
}

const RestaurantContext = createContext<RestaurantState | null>(null)

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const [menu, setMenuState] = useState<Dish[]>(() => loadMenu())
  const [gallery, setGalleryState] = useState<GalleryItem[]>(() => loadGallery())
  const [testimonials, setTestimonialsState] = useState<Testimonial[]>(() =>
    loadTestimonials(),
  )
  const [reservations, setReservationsState] = useState<Reservation[]>(() =>
    loadReservations(),
  )
  const [messages, setMessagesState] = useState<ContactMessage[]>(() =>
    loadMessages(),
  )
  const [settings, setSettingsState] = useState<RestaurantSettings>(() =>
    loadSettings(),
  )

  const setMenu = useCallback((next: Dish[]) => {
    setMenuState(next)
    saveMenu(next)
  }, [])

  const setGallery = useCallback((next: GalleryItem[]) => {
    setGalleryState(next)
    saveGallery(next)
  }, [])

  const setTestimonials = useCallback((next: Testimonial[]) => {
    setTestimonialsState(next)
    saveTestimonials(next)
  }, [])

  const addReservation = useCallback((item: Reservation) => {
    setReservationsState((prev) => {
      const next = [item, ...prev]
      saveReservations(next)
      return next
    })
  }, [])

  const setReservations = useCallback((next: Reservation[]) => {
    setReservationsState(next)
    saveReservations(next)
  }, [])

  const addMessage = useCallback((item: ContactMessage) => {
    setMessagesState((prev) => {
      const next = [item, ...prev]
      saveMessages(next)
      return next
    })
  }, [])

  const setSettings = useCallback((next: RestaurantSettings) => {
    setSettingsState(next)
    saveSettings(next)
  }, [])

  const value = useMemo(
    () => ({
      menu,
      gallery,
      testimonials,
      reservations,
      messages,
      settings,
      setMenu,
      setGallery,
      setTestimonials,
      addReservation,
      addMessage,
      setReservations,
      setSettings,
    }),
    [
      menu,
      gallery,
      testimonials,
      reservations,
      messages,
      settings,
      setMenu,
      setGallery,
      setTestimonials,
      addReservation,
      addMessage,
      setReservations,
      setSettings,
    ],
  )

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  )
}

export function useRestaurant() {
  const ctx = useContext(RestaurantContext)
  if (!ctx) throw new Error('useRestaurant must be used within RestaurantProvider')
  return ctx
}
