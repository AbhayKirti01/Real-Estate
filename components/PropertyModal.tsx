'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { X, MapPin, DollarSign, Bed, Bath, Maximize, CheckCircle2, Phone, Mail } from 'lucide-react'
import { useEffect } from 'react'

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

interface PropertyModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!property) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Images */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-2 p-2">
                {property.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${property.title} - ${i + 1}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-gradient-to-br from-[#0a0a0a] to-[#111]">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest mb-4 font-bold">
                  <span className="w-4 h-[1px] bg-accent" />
                  {property.type}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-tight mb-4">
                  {property.title}
                </h2>
                <div className="flex items-center gap-2 text-white/40 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="text-3xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-accent" />
                  {property.price}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-white/5">
                <div className="flex flex-col items-center gap-2">
                  <Bed className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">{property.beds} Beds</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Bath className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">{property.baths} Baths</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Maximize className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">{property.sqft}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h3 className="text-lg font-serif font-bold mb-4 text-white/90">Description</h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-lg font-serif font-bold mb-6 text-white/90">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    onClose()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 bg-accent text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-accent transition-all duration-500"
                >
                  <Phone className="w-4 h-4" />
                  Book a Tour
                </button>
                <button 
                  onClick={() => {
                    onClose()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 glass py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-500"
                >
                  <Mail className="w-4 h-4" />
                  Inquire Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
