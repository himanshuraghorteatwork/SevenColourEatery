export const MENU_CATEGORIES = [
  'Breakfast',
  'Traditional Meals',
  'Main Courses',
  'Vegetarian',
  'Sides',
  'Desserts',
  'Drinks',
] as const

export type MenuCategory = (typeof MENU_CATEGORIES)[number]

export type Dish = {
  id: string
  name: string
  description: string
  category: MenuCategory
  priceLabel: string
  image: string
  featured?: boolean
  placeholder?: boolean
}

export type GalleryItem = {
  id: string
  src: string
  alt: string
  caption: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  context: string
  placeholder: boolean
}

export type Reservation = {
  id: string
  createdAt: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  occasion: string
  notes: string
  status: 'new' | 'noted'
}

export type ContactMessage = {
  id: string
  createdAt: string
  name: string
  email: string
  message: string
}

export type RestaurantSettings = {
  announcement: string
}
