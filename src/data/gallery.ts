import { images } from './images'
import type { GalleryItem } from '../types'

export const defaultGallery: GalleryItem[] = [
  { id: 'g1', src: images.hero, alt: 'Braai and feast photography', caption: 'Fire and colour' },
  { id: 'g2', src: images.plate, alt: 'Loaded plate of South African food', caption: 'The Sunday plate' },
  { id: 'g3', src: images.feast, alt: 'Shared dining table', caption: 'Gathering food' },
  { id: 'g4', src: images.braai, alt: 'Grilled meat', caption: 'Tshisanyama spirit' },
  { id: 'g5', src: images.chicken, alt: 'Slow-cooked chicken', caption: 'Patience in the pot' },
  { id: 'g6', src: images.stew, alt: 'Beef stew', caption: 'Potjie depth' },
  { id: 'g7', src: images.veg, alt: 'Vegetable plate', caption: 'Garden colour' },
  { id: 'g8', src: images.rice, alt: 'Yellow rice', caption: 'Sunshine starch' },
  { id: 'g9', src: images.dessert, alt: 'Milk tart style dessert', caption: 'Sweet Cape finish' },
  { id: 'g10', src: images.canal, alt: 'Cape Town waterfront canals', caption: 'Battery Park calm' },
  { id: 'g11', src: images.hands, alt: 'Hands preparing food', caption: 'Home cooking' },
  { id: 'g12', src: images.spices, alt: 'Spices and colour', caption: 'Mzansi spice' },
]
