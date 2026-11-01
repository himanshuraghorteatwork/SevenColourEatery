import { Camera, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../lib/site'

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="editorial-rule" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/logo.png" alt="" className="h-16 w-16 object-contain" />
          <p className="mt-4 font-display text-3xl">Seven Colours Eatery</p>
          <p className="mt-3 max-w-md text-cream/70">
            Chef Nolu Dube-Cele’s home-style South African kitchen at Battery Park, V&A
            Waterfront. Nostalgia, diversity and Mzansi joy on one plate.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-mustard uppercase">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {site.addressLine}, {site.city}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-2">
              <Camera className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={site.instagram} target="_blank" rel="noreferrer">
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-mustard uppercase">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/menu">Digital menu</Link>
            </li>
            <li>
              <Link to="/story">Chef Nolu</Link>
            </li>
            <li>
              <Link to="/reserve">Reservations</Link>
            </li>
            <li>
              <Link to="/contact">Maps & contact</Link>
            </li>
            <li>
              <Link to="/admin">Kitchen notes (local)</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Seven Colours Eatery. Independent website inspired by the
        restaurant at the V&A Waterfront. Menu prices are placeholders until confirmed by the
        kitchen.
      </div>
    </footer>
  )
}
