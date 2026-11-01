import { useRef, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

type MagnetProps = {
  children: ReactNode
  className?: string
}

function useMagnet() {
  const ref = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()

  return {
    ref,
    onMouseMove: (event: MouseEvent<HTMLElement>) => {
      if (reduce || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
    },
    onMouseLeave: () => {
      if (ref.current) ref.current.style.transform = 'translate(0, 0)'
    },
  }
}

export function Magnetic({ children, className }: MagnetProps) {
  const magnet = useMagnet()
  return (
    <span
      ref={(node) => {
        magnet.ref.current = node
      }}
      className={`inline-block transition-transform duration-150 ${className ?? ''}`}
      onMouseMove={magnet.onMouseMove}
      onMouseLeave={magnet.onMouseLeave}
    >
      {children}
    </span>
  )
}

export function MagneticButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const magnet = useMagnet()
  return (
    <button
      ref={(node) => {
        magnet.ref.current = node
      }}
      className={`transition-transform duration-150 ${className}`}
      onMouseMove={magnet.onMouseMove}
      onMouseLeave={magnet.onMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}
