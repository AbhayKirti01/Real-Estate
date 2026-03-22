'use client'

import { motion, useSpring, useMotionValue } from 'motion/react'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <>
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-8 h-8 bg-accent/20 rounded-full blur-xl pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
