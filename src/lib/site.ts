export const site = {
  name: 'Seven Colours Eatery',
  chef: 'Chef Nolu Dube-Cele',
  chefFull: 'Nolukhanyo Dube-Cele',
  tagline: 'A TASTE OF HOME. A CELEBRATION OF SOUTH AFRICA.',
  subtitle:
    'Discover the colours, flavours and traditions of authentic South African home cooking.',
  addressLine: 'Battery Park, Canal District, V&A Waterfront',
  city: 'Cape Town, South Africa',
  unit: 'Ground Level, Unit 3, Battery Parkade',
  phoneDisplay: '+27 87 265 8762',
  phoneTel: '+27872658762',
  email: 'bookings@sevencolourseatery.co.za',
  eventsEmail: 'reservations@sevencolourseatery.co.za',
  website: 'https://sevencolourseatery.co.za/',
  instagram: 'https://www.instagram.com/sevencolours_eatery/',
  instagramHandle: '@sevencolours_eatery',
  mapsShare: 'https://maps.app.goo.gl/s5sCsHnXWwLCG6yM9',
  mapsEmbed:
    'https://maps.google.com/maps?q=Seven%20Colours%20Eatery%20Battery%20Park%20V%26A%20Waterfront%20Cape%20Town&t=&z=16&ie=UTF8&iwloc=&output=embed',
  hours: [
    {
      label: 'Breakfast & lunch',
      detail: 'Monday to Sunday, 09h00 to 18h00',
      note: 'Bookings essential for groups of 6 or more',
    },
    {
      label: 'Dinner',
      detail: 'Thursday to Saturday, 18h00 to 21h00',
      note: 'Bookings essential for dinners',
    },
  ],
} as const

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      `Sawubona, I would like to enquire about ${site.name} at the V&A Waterfront.`,
  )
  return `https://wa.me/${site.phoneTel.replace('+', '')}?text=${text}`
}
