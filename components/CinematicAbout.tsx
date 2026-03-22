'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export default function CinematicAbout() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section ref={containerRef} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-4 font-bold">
            The Visionary
          </p>
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-tight text-white">
            About <span className="italic text-accent">Abhay Kirti</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Main Story */}
          <div className="md:col-span-7 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif italic text-white/90 leading-snug"
            >
              Every property has a story — and so does this journey.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-white/60 leading-relaxed"
            >
              What started as a passion for understanding real estate and market opportunities gradually became a mission: to help people make <strong className="text-white font-bold">confident and meaningful property decisions</strong>.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-white/60 leading-relaxed"
            >
              I’m Abhay Kirti, and I believe that buying land or a home is not just about money — it’s about <strong className="text-accent font-bold italic">dreams, security, and future growth</strong>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 pt-8 border-t border-white/5"
            >
              <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Over time, I’ve worked closely with clients who were:</p>
              <ul className="space-y-4">
                {[
                  "Searching for their first home",
                  "Looking to invest wisely in land",
                  "Wanting a safe and reliable property deal"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Philosophy */}
          <div className="md:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10"
            >
              <p className="text-white/80 mb-6 leading-relaxed">
                And I realized one thing — people don’t just need options, they need <span className="text-accent font-bold">clarity and trust</span>.
              </p>
              
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-accent">My Approach</p>
                <ul className="space-y-4">
                  {[
                    "Honest guidance, not pressure",
                    "Long-term value over quick sales",
                    "Ensuring every deal feels clear, safe, and right"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-white/40 text-sm leading-relaxed italic">
                Whether it’s a plot, a constructed property, or a ready home, my goal is simple — to help you make a decision you feel confident about for years to come.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-12 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent border border-white/5"
        >
          <p className="text-2xl md:text-3xl font-serif text-white/90 leading-tight max-w-2xl mx-auto">
            Because at the end of the day, it’s not just about property — it’s about <span className="text-accent font-black">building your future with confidence</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
