import { Reveal } from '../components/Reveal'
import { images } from '../data/images'
import { site } from '../lib/site'

export function Story() {
  return (
    <div className="pt-28">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-burnt uppercase">Our story</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Chef Nolu, from Tsengiwe to the Waterfront</h1>
          <p className="mt-6 text-lg text-charcoal/75">
            {site.chefFull} — Chef Nolu — grew up in Tsengiwe village in the Eastern Cape. Seven
            Colours Eatery began as home catering in 2016, found its voice in Cape Town’s markets,
            and now welcomes guests to a sit-down table in Battery Park’s canal district.
          </p>
        </Reveal>
        <Reveal>
          <img
            src={images.chef}
            alt="Chef at work in a warm kitchen"
            className="h-[540px] w-full rounded-[2.5rem] object-cover"
          />
        </Reveal>
      </section>

      <section className="african-pattern py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          {[
            {
              title: 'The Sunday plate',
              copy: 'Seven colours is the nickname for the meal South African families cook on Sundays: beetroot, yellow rice, greens, starch and a proud protein sharing one plate.',
            },
            {
              title: 'A hidden-gem table',
              copy: 'The eatery sits in Battery Park, a quieter canal-side pocket of the V&A Waterfront — a pause from the bustle, still in the heart of the city.',
            },
            {
              title: 'Mzansi on purpose',
              copy: 'From tshisanyama feasts to plant-led plates, the kitchen is about nostalgia, diversity and joy. Local Black- and women-owned drinks sit alongside the food.',
            },
          ].map((card) => (
            <Reveal key={card.title} className="rounded-3xl bg-cream/90 p-8">
              <h2 className="font-display text-3xl">{card.title}</h2>
              <p className="mt-4 text-charcoal/70">{card.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="font-display text-3xl md:text-4xl">
          “It is about celebrating Nolukhanyo. I am Xhosa, I grew up in the Eastern Cape, I’ve
          travelled, I love food. I love drinks and of course I love my country.”
        </p>
        <p className="mt-6 text-sm tracking-[0.2em] text-burnt uppercase">Chef Nolu Dube-Cele</p>
      </section>
    </div>
  )
}
