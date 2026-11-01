import { useState, type FormEvent } from 'react'
import { defaultMenu } from '../data/menu'
import { useRestaurant } from '../context/RestaurantContext'
import { MENU_CATEGORIES, type Dish, type MenuCategory } from '../types'

const SESSION_KEY = 'sce.admin'

export function Admin() {
  const unlocked = sessionStorage.getItem(SESSION_KEY) === '1'
  const [ok, setOk] = useState(unlocked)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const configured = Boolean(import.meta.env.VITE_ADMIN_PASSWORD)
  const supabase = Boolean(import.meta.env.VITE_SUPABASE_URL)

  function login(event: FormEvent) {
    event.preventDefault()
    const expected = import.meta.env.VITE_ADMIN_PASSWORD
    if (!expected) {
      setError('No VITE_ADMIN_PASSWORD is set. Admin stays locked so this cannot pretend to be live.')
      return
    }
    if (password === expected) {
      sessionStorage.setItem(SESSION_KEY, '1')
      setOk(true)
      setError('')
      return
    }
    setError('That password does not match VITE_ADMIN_PASSWORD.')
  }

  if (!ok) {
    return (
      <div className="mx-auto max-w-md px-5 pt-36 pb-24">
        <h1 className="font-display text-4xl">Kitchen notes</h1>
        <p className="mt-3 text-sm text-charcoal/70">
          Local browser tools only. {supabase ? 'Supabase URL is present but this app is not wired to it.' : 'Supabase is not configured.'}{' '}
          {configured
            ? 'Enter the password from your .env file.'
            : 'Set VITE_ADMIN_PASSWORD in a .env file to unlock.'}
        </p>
        <form onSubmit={login} className="mt-8 grid gap-3">
          <input
            type="password"
            className="rounded-2xl border border-charcoal/15 bg-white px-4 py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
          />
          {error ? <p className="text-sm text-burnt">{error}</p> : null}
          <button type="submit" className="rounded-full bg-charcoal px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase">
            Unlock
          </button>
        </form>
      </div>
    )
  }

  return <AdminDesk />
}

function AdminDesk() {
  const {
    menu,
    setMenu,
    reservations,
    setReservations,
    settings,
    setSettings,
    messages,
  } = useRestaurant()
  const [draft, setDraft] = useState<Dish>({
    id: '',
    name: '',
    description: '',
    category: 'Main Courses',
    priceLabel: 'Price on request',
    image: '',
    placeholder: true,
  })

  function addDish() {
    if (!draft.name.trim() || !draft.image.trim()) return
    setMenu([
      {
        ...draft,
        id: draft.id.trim() || crypto.randomUUID(),
      },
      ...menu,
    ])
    setDraft({
      ...draft,
      id: '',
      name: '',
      description: '',
      image: '',
    })
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-5 pt-32 pb-24">
      <div>
        <h1 className="font-display text-5xl">Kitchen notes</h1>
        <p className="mt-3 text-charcoal/70">
          Changes save in this browser only. They are not a live restaurant backend.
        </p>
      </div>

      <section className="rounded-3xl bg-white p-6">
        <h2 className="font-display text-3xl">Announcement</h2>
        <textarea
          className="mt-4 w-full rounded-2xl border border-charcoal/15 p-3"
          rows={3}
          value={settings.announcement}
          onChange={(e) => setSettings({ announcement: e.target.value })}
        />
      </section>

      <section className="rounded-3xl bg-white p-6">
        <h2 className="font-display text-3xl">Menu</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            className="rounded-2xl border border-charcoal/15 px-3 py-2"
            placeholder="Name"
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
          <select
            className="rounded-2xl border border-charcoal/15 px-3 py-2"
            value={draft.category}
            onChange={(e) =>
              setDraft({ ...draft, category: e.target.value as MenuCategory })
            }
          >
            {MENU_CATEGORIES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <input
            className="rounded-2xl border border-charcoal/15 px-3 py-2"
            placeholder="Price label"
            value={draft.priceLabel}
            onChange={(e) => setDraft({ ...draft, priceLabel: e.target.value })}
          />
          <input
            className="rounded-2xl border border-charcoal/15 px-3 py-2"
            placeholder="Image URL"
            value={draft.image}
            onChange={(e) => setDraft({ ...draft, image: e.target.value })}
          />
          <textarea
            className="rounded-2xl border border-charcoal/15 px-3 py-2 md:col-span-2"
            placeholder="Description"
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          />
        </div>
        <button
          type="button"
          onClick={addDish}
          className="mt-4 rounded-full bg-burnt px-5 py-2 text-xs tracking-[0.18em] text-cream uppercase"
        >
          Add dish locally
        </button>
        <ul className="mt-6 divide-y divide-charcoal/10">
          {menu.map((dish) => (
            <li key={dish.id} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="font-medium">{dish.name}</p>
                <p className="text-sm text-charcoal/60">
                  {dish.category} · {dish.priceLabel}
                </p>
              </div>
              <button
                type="button"
                className="text-xs text-burnt"
                onClick={() => setMenu(menu.filter((item) => item.id !== dish.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-4 text-sm underline"
          onClick={() => setMenu(defaultMenu)}
        >
          Restore default menu
        </button>
      </section>

      <section className="rounded-3xl bg-white p-6">
        <h2 className="font-display text-3xl">Reservation requests</h2>
        {reservations.length === 0 ? (
          <p className="mt-3 text-charcoal/60">None stored in this browser yet.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {reservations.map((item) => (
              <li key={item.id} className="rounded-2xl bg-cream p-4 text-sm">
                <p className="font-medium">
                  {item.name} · {item.date} {item.time} · {item.guests} guests
                </p>
                <p>
                  {item.email} · {item.phone}
                </p>
                <p className="text-charcoal/70">{item.notes}</p>
                <button
                  type="button"
                  className="mt-2 text-xs text-burnt"
                  onClick={() =>
                    setReservations(reservations.filter((row) => row.id !== item.id))
                  }
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-3xl bg-white p-6">
        <h2 className="font-display text-3xl">Contact drafts</h2>
        {messages.length === 0 ? (
          <p className="mt-3 text-charcoal/60">None stored in this browser yet.</p>
        ) : (
          <ul className="mt-4 space-y-3 text-sm">
            {messages.map((item) => (
              <li key={item.id} className="rounded-2xl bg-cream p-4">
                <p className="font-medium">
                  {item.name} · {item.email}
                </p>
                <p>{item.message}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
