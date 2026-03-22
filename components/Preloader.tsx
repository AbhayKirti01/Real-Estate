'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase text-accent">
                Abhay Kirti
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-[1px] bg-accent/30 w-full max-w-[200px]"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-4 font-sans text-[10px] uppercase tracking-[0.5em] text-white/40"
            >
              Luxury Real Estate Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
