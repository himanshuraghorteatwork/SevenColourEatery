import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react'
import { Magnetic } from '../components/MagneticButton'
import { MenuExplorer } from '../components/MenuExplorer'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useRestaurant } from '../context/RestaurantContext'
import { images } from '../data/images'
import { site } from '../lib/site'

export function Home() {
  const { testimonials, settings, gallery } = useRestaurant()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const reduce = useReducedMotion()

  return (
    <div>
      <section ref={heroRef} className="relative flex min-h-svh items-end overflow-hidden">
        <motion.img
          src={images.hero}
          alt="Cinematic South African feast photography"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ y: reduce ? 0 : y, scale: 1.12 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/55 to-charcoal/25" />
        <div className="african-pattern absolute inset-0 opacity-30 mix-blend-soft-light" />
        <motion.div
          aria-hidden
          className="float-slow absolute top-28 right-10 h-24 w-24 rounded-full border border-mustard/40"
        />
        <motion.div
          aria-hidden
          className="float-slow absolute bottom-40 left-8 h-16 w-16 rotate-12 border border-cream/30"
          style={{ animationDelay: '1.2s' }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-20">
          <p className="text-xs tracking-[0.4em] text-mustard uppercase">
            Battery Park · V&A Waterfront
          </p>
          <motion.h1
            className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {site.tagline}
          </motion.h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">{site.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <Link
                to="/menu"
                className="inline-block rounded-full bg-burnt px-8 py-3 text-xs tracking-[0.24em] text-cream uppercase"
              >
                Explore menu
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/reserve"
                className="inline-block rounded-full border border-cream px-8 py-3 text-xs tracking-[0.24em] text-cream uppercase"
              >
                Reserve a table
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {settings.announcement ? (
        <p className="bg-green px-5 py-3 text-center text-sm text-cream">{settings.announcement}</p>
      ) : null}

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.32em] text-burnt uppercase">Namkelekile</p>
            <h2 className="mt-3 font-display text-5xl">Welcome to Seven Colours</h2>
            <p className="mt-6 text-lg text-charcoal/75">
              Chef Nolu Dube-Cele transforms traditional South African flavours into a vibrant feast
              for the senses. Picture beetroot red, sunshine yellow rice, garden-fresh veg and
              succulent meat sharing the same plate — the legendary seven colours experience.
            </p>
            <Link
              to="/story"
              className="mt-8 inline-block text-xs tracking-[0.22em] text-burnt uppercase"
            >
              Meet Chef Nolu
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img
              src={images.plate}
              alt="Loaded colourful plate"
              className="h-[520px] w-full rounded-[2.5rem] object-cover"
            />
            <img
              src={images.canal}
              alt="Cape Town waterfront"
              className="absolute -bottom-8 -left-6 hidden h-40 w-56 rounded-3xl object-cover shadow-xl md:block"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-cream">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            light
            eyebrow="Signature plates"
            title="A rainbow on one plate"
            copy="Dishes named here are documented on the restaurant’s public pages. Prices stay as editable placeholders until the kitchen confirms them."
          />
          <div className="mt-14">
            <MenuExplorer featuredOnly compact />
          </div>
          <div className="mt-10 text-center">
            <Link to="/menu" className="text-xs tracking-[0.24em] text-mustard uppercase">
              Open the full digital menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading
          eyebrow="Voices from the table"
          title="Memories, not just meals"
          copy="These quotes are layout placeholders, not claimed Google reviews."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="font-display text-2xl leading-snug">“{item.quote}”</p>
              <p className="mt-6 text-sm font-medium">{item.name}</p>
              <p className="text-xs text-charcoal/50">{item.context}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-green text-cream">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16">
              <p className="text-xs tracking-[0.32em] text-mustard uppercase">Instagram</p>
              <h2 className="mt-3 font-display text-5xl">Colour, steam and Sunday plates</h2>
              <p className="mt-4 text-cream/80">
                Follow {site.instagramHandle} for kitchen moments. The grid below uses editorial
                photography as a stand-in until an Instagram API token is connected.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-xs tracking-[0.2em] text-charcoal uppercase"
              >
                <Camera className="h-4 w-4" /> Visit Instagram
              </a>
            </div>
            <div className="grid grid-cols-3">
              {gallery.slice(0, 6).map((item) => (
                <img key={item.id} src={item.src} alt={item.alt} className="h-40 w-full object-cover" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
