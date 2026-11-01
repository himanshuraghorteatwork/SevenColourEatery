import { ReservationForm } from '../components/ReservationForm'
import { site } from '../lib/site'

export function Reserve() {
  return (
    <div className="pt-28">
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs tracking-[0.32em] text-burnt uppercase">Reservations</p>
          <h1 className="mt-3 font-display text-5xl">Hold a table by the canal</h1>
          <p className="mt-5 text-charcoal/70">
            Complete the form, then send it on WhatsApp or email. Nothing is booked until the
            restaurant confirms.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {site.hours.map((item) => (
              <li key={item.label} className="rounded-2xl bg-white p-4">
                <p className="font-medium">{item.label}</p>
                <p>{item.detail}</p>
                <p className="text-charcoal/60">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <ReservationForm />
      </section>
    </div>
  )
}
