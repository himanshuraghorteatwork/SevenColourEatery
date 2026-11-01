import { useState, type FormEvent } from 'react'
import { useRestaurant } from '../context/RestaurantContext'
import { site } from '../lib/site'
import { MagneticButton } from './MagneticButton'

const inputClass =
  'w-full rounded-2xl border border-charcoal/15 bg-cream px-4 py-3 outline-none focus:border-burnt'

export function ContactForm() {
  const { addMessage } = useRestaurant()
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.message.trim().length < 10) {
      setError('Please add a name, valid email and a message of at least 10 characters.')
      return
    }
    addMessage({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    })
    setSent(true)
  }

  if (sent) {
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`
    return (
      <div className="rounded-3xl bg-white p-8">
        <h3 className="font-display text-3xl">Message drafted</h3>
        <p className="mt-3 text-charcoal/70">
          Nothing was sent from this browser. Open email to reach {site.email}.
        </p>
        <a
          className="mt-6 inline-block rounded-full bg-charcoal px-5 py-3 text-xs tracking-[0.18em] text-cream uppercase"
          href={`mailto:${site.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`}
        >
          Open email
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl bg-white p-6 md:p-8" noValidate>
      <label className="grid gap-2 text-sm">
        Name
        <input
          className={inputClass}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label className="grid gap-2 text-sm">
        Email
        <input
          className={inputClass}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label className="grid gap-2 text-sm">
        Message
        <textarea
          className={inputClass}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>
      {error ? <p className="text-sm text-burnt">{error}</p> : null}
      <MagneticButton
        type="submit"
        className="justify-self-start rounded-full bg-burnt px-8 py-3 text-xs tracking-[0.22em] text-cream uppercase"
      >
        Draft message
      </MagneticButton>
    </form>
  )
}
