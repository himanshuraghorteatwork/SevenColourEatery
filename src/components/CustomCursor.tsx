import { useEffect, useState } from 'react'
import { useDesktopCursor } from '../hooks/useDesktopCursor'

export function CustomCursor() {
  const enabled = useDesktopCursor()
  const [pos, setPos] = useState({ x: -80, y: -80 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const move = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY })
      const target = event.target
      if (!(target instanceof Element)) {
        setHover(false)
        return
      }
      setHover(Boolean(target.closest('a, button, [role="button"], input, textarea, select')))
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[80] h-3 w-3 rounded-full bg-burnt mix-blend-multiply"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[79] rounded-full border border-burnt/70 mix-blend-multiply transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[40] h-40 w-40 rounded-full bg-mustard/20 blur-3xl"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
