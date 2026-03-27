'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { MapPin, DollarSign, Trash2, Heart } from 'lucide-react'
import { useSavedProperties } from './SavedPropertiesContext'
import { useState } from 'react'
import PropertyModal from './PropertyModal'

export default function SavedProperties() {
  const { savedProperties, removeProperty } = useSavedProperties()
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (property: any) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  if (savedProperties.length === 0) return null

  return (
    <section id="saved" className="relative py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
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
              Your Collection
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight"
            >
              SAVED <br /> <span className="italic text-accent">PROPERTIES</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {savedProperties.map((property, i) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer glass border border-white/10"
                onClick={() => openModal(property)}
              >
                {/* Image */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Remove Button */}
                <button 
                  className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 group/remove"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeProperty(property.id)
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest mb-3 font-bold">
                    <span className="w-4 h-[1px] bg-accent" />
                    {property.type}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] group-hover:text-accent transition-colors duration-500">
                      <MapPin className="w-3 h-3" />
                      <span>{property.location}</span>
                    </div>
                    
                    <div className="text-white font-bold text-sm">
                      {property.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <PropertyModal 
        property={selectedProperty} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
