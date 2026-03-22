'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { MapPin, DollarSign, ArrowLeft, LayoutGrid, Bed, Bath, Maximize } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import PropertyModal from './PropertyModal'

interface Property {
  title: string
  price: string
  location: string
  type: string
  image: string
  images: string[]
  description: string
  features: string[]
  sqft: string
  beds: number
  baths: number
}

interface CategoryPageProps {
  title: string
  subtitle: string
  properties: Property[]
}

export default function CategoryPageTemplate({ title, subtitle, properties }: CategoryPageProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (property: Property) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <Link 
            href="/#home" 
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-12 hover:gap-4 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-4 font-bold"
          >
            {subtitle}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-tight"
          >
            {title.split(' ')[0]} <br /> <span className="italic text-accent">{title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
              onClick={() => openModal(property)}
            >
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">
                  {property.type}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <MapPin className="w-3 h-3" />
                    {property.location}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {property.price}
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-[10px] text-white/60">
                      <Bed className="w-3 h-3" /> {property.beds}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-white/60">
                      <Bath className="w-3 h-3" /> {property.baths}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-white/60">
                      <Maximize className="w-3 h-3" /> {property.sqft}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PropertyModal 
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}
