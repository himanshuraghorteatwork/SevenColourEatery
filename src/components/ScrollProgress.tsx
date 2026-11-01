import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
  const reduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[70] h-[3px] origin-left bg-linear-to-r from-green via-mustard to-burnt"
      style={{ scaleX: reduce ? 1 : scaleX }}
    />
  )
}
