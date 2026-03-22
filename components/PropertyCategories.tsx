'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { LandPlot, Building2, Home } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = [
  {
    title: "Empty Lands",
    description: "Premium plots for your future vision.",
    icon: LandPlot,
    color: "from-accent/20 to-transparent",
    href: "/categories/empty-lands"
  },
  {
    title: "Constructed Properties",
    description: "Modern commercial and residential spaces.",
    icon: Building2,
    color: "from-orange-900/20 to-transparent",
    href: "/categories/constructed-properties"
  },
  {
    title: "Ready Homes",
    description: "Move-in ready luxury residences.",
    icon: Home,
    color: "from-white/10 to-transparent",
    href: "/categories/ready-homes"
  }
]

function CategoryCard({ category, index }: { category: typeof CATEGORIES[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={category.href}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group h-[450px] w-full rounded-2xl glass p-8 flex flex-col justify-end overflow-hidden cursor-pointer"
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <category.icon className="text-accent w-8 h-8" />
          </div>
          
          <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight">
            {category.title}
          </h3>
          
          <p className="text-white/40 text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors duration-500">
            {category.description}
          </p>
          
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span>View Listings</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function PropertyCategories() {
  return (
    <section className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-4 font-bold"
            >
              Our Portfolio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight"
            >
              CURATED <br /> <span className="italic text-accent">CATEGORIES</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-sm leading-relaxed"
          >
            We offer a diverse range of real estate opportunities, from raw land to fully realized luxury homes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category, i) => (
            <CategoryCard key={i} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
