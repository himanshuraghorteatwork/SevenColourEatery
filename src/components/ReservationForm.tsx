import { useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useRestaurant } from '../context/RestaurantContext'
import { site, whatsappUrl } from '../lib/site'
import { MagneticButton } from './MagneticButton'

const occasions = ['Lunch', 'Dinner', 'Celebration', 'Group of 6+', 'Event enquiry']

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'date' | 'time' | 'guests', string>>

const inputClass =
  'w-full rounded-2xl border border-charcoal/15 bg-cream px-4 py-3 outline-none focus:border-burnt'

export function ReservationForm() {
  const [params] = useSearchParams()
  const dish = params.get('dish')
  const { addReservation } = useRestaurant()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Lunch',
    notes: dish ? `Interested in ${dish}` : '',
  })

  const wa = useMemo(() => {
    const message = `Reservation request for ${site.name}
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Date: ${form.date} ${form.time}
Guests: ${form.guests}
Occasion: ${form.occasion}
Notes: ${form.notes}`
    return whatsappUrl(message)
  }, [form])

  function validate() {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (form.phone.replace(/\D/g, '').length < 9) next.phone = 'Enter a valid phone number.'
    if (!form.date) next.date = 'Choose a date.'
    if (!form.time) next.time = 'Choose a time.'
    const guests = Number(form.guests)
    if (!guests || guests < 1 || guests > 40) next.guests = 'Guests must be between 1 and 40.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!validate()) return
    addReservation({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      date: form.date,
      time: form.time,
      guests: Number(form.guests),
      occasion: form.occasion,
      notes: form.notes.trim(),
      status: 'new',
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="font-display text-3xl">Your request is ready to send</h3>
        <p className="mt-3 text-charcoal/70">
          This site does not email the restaurant automatically. Open WhatsApp or your mail app to
          complete the booking with the team.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-[#25D366] px-5 py-3 text-xs tracking-[0.18em] text-white uppercase"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Send on WhatsApp
          </a>
          <a
            className="rounded-full bg-charcoal px-5 py-3 text-xs tracking-[0.18em] text-cream uppercase"
            href={`mailto:${site.email}?subject=${encodeURIComponent('Table reservation')}&body=${encodeURIComponent(
              `Name: ${form.name}\nDate: ${form.date} ${form.time}\nGuests: ${form.guests}\n${form.notes}`,
            )}`}
          >
            Open email
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-8"
      noValidate
    >
      <label className="grid gap-2 text-sm">
        Name
        <input
          className={inputClass}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <span className="text-xs text-burnt">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2 text-sm">
        Email
        <input
          className={inputClass}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <span className="text-xs text-burnt">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2 text-sm">
        Phone
        <input
          className={inputClass}
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <span className="text-xs text-burnt">{errors.phone}</span> : null}
      </label>
      <label className="grid gap-2 text-sm">
        Guests
        <input
          className={inputClass}
          type="number"
          min={1}
          max={40}
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          aria-invalid={Boolean(errors.guests)}
        />
        {errors.guests ? <span className="text-xs text-burnt">{errors.guests}</span> : null}
      </label>
      <label className="grid gap-2 text-sm">
        Date
        <input
          className={inputClass}
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          aria-invalid={Boolean(errors.date)}
        />
        {errors.date ? <span className="text-xs text-burnt">{errors.date}</span> : null}
      </label>
      <label className="grid gap-2 text-sm">
        Time
        <input
          className={inputClass}
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          aria-invalid={Boolean(errors.time)}
        />
        {errors.time ? <span className="text-xs text-burnt">{errors.time}</span> : null}
      </label>
      <label className="grid gap-2 text-sm md:col-span-2">
        Occasion
        <select
          value={form.occasion}
          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          className={inputClass}
        >
          {occasions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm md:col-span-2">
        Notes
        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className={inputClass}
        />
      </label>
      <p className="text-sm text-charcoal/60 md:col-span-2">
        Groups of 10 or more: email {site.eventsEmail}. Dinners Thursday to Saturday require a
        booking.
      </p>
      <div className="md:col-span-2">
        <MagneticButton
          type="submit"
          className="rounded-full bg-burnt px-8 py-3 text-xs tracking-[0.22em] text-cream uppercase"
        >
          Review & send request
        </MagneticButton>
      </div>
    </form>
  )
}
