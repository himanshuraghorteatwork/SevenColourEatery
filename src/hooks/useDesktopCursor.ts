import { useEffect, useState } from 'react'

export function useDesktopCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(fine.matches && !reduce.matches && window.innerWidth >= 1024)
    }

    update()
    fine.addEventListener('change', update)
    reduce.addEventListener('change', update)
    window.addEventListener('resize', update)
    return () => {
      fine.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('has-custom-cursor', enabled)
    return () => document.body.classList.remove('has-custom-cursor')
  }, [enabled])

  return enabled
}
