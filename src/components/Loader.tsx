import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const dots = ['#C65A32', '#D6A52E', '#526B43', '#F7F1E7', '#C65A32', '#D6A52E', '#526B43']

export function Loader() {
  const [visible, setVisible] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduce ? 200 : 1600)
    return () => window.clearTimeout(timer)
  }, [reduce])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-charcoal text-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/logo.png" alt="" className="mb-8 h-24 w-24 object-contain" />
          <p className="font-display text-3xl tracking-[0.2em]">SEVEN COLOURS</p>
          <div className="mt-8 flex gap-2">
            {dots.map((color, index) => (
              <motion.span
                key={`${color}-${index}`}
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: color }}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: index * 0.08 }}
              />
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
