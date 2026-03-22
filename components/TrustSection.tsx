'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Handshake, TrendingUp, Award } from 'lucide-react'

const TRUST_POINTS = [
  {
    title: "Verified Properties",
    description: "Every listing is rigorously vetted for legal and structural integrity.",
    icon: ShieldCheck
  },
  {
    title: "Transparent Deals",
    description: "No hidden costs. Clear communication at every step of the process.",
    icon: Handshake
  },
  {
    title: "Long-term Value",
    description: "We focus on properties with high appreciation potential.",
    icon: TrendingUp
  },
  {
    title: "Award Winning",
    description: "Recognized for excellence in luxury real estate consulting.",
    icon: Award
  }
]

export default function TrustSection() {
  return (
    <section className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-4 font-bold"
          >
            Why Choose Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight"
          >
            BUILT ON <span className="italic text-accent">TRUST</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TRUST_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <point.icon className="text-accent w-8 h-8 relative z-10" />
              </div>
              
              <h3 className="text-xl font-serif font-bold mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                {point.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed max-w-[250px] group-hover:text-white/60 transition-colors duration-500">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
