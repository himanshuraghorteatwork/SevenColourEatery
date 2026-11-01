import { ContactForm } from '../components/ContactForm'
import { site } from '../lib/site'

export function Contact() {
  return (
    <div className="pt-28">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.32em] text-burnt uppercase">Find us</p>
          <h1 className="mt-3 font-display text-5xl">Battery Park, V&A Waterfront</h1>
          <p className="mt-4 text-charcoal/70">
            {site.unit}. Park at Battery Park Parking. {site.addressLine}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-burnt px-5 py-3 text-xs tracking-[0.18em] text-cream uppercase"
              href={site.mapsShare}
              target="_blank"
              rel="noreferrer"
            >
              Google Maps directions
            </a>
            <a
              className="rounded-full border border-charcoal px-5 py-3 text-xs tracking-[0.18em] uppercase"
              href={`tel:${site.phoneTel}`}
            >
              Call {site.phoneDisplay}
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-charcoal/10">
            <iframe
              title="Seven Colours Eatery on Google Maps"
              src={site.mapsEmbed}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
