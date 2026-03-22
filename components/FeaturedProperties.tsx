'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { MapPin, DollarSign, LayoutGrid } from 'lucide-react'
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

const PROPERTIES: Property[] = [
  {
    title: "The Golden Horizon",
    price: "$1,200,000",
    location: "Malibu, CA",
    type: "Luxury Home",
    image: "https://picsum.photos/seed/luxury1/800/1000",
    images: [
      "https://picsum.photos/seed/luxury1/800/1000",
      "https://picsum.photos/seed/luxury1-2/800/1000",
      "https://picsum.photos/seed/luxury1-3/800/1000",
      "https://picsum.photos/seed/luxury1-4/800/1000"
    ],
    description: "Experience unparalleled luxury in this stunning Malibu estate. Perched on a cliffside with panoramic ocean views, this architectural masterpiece features floor-to-ceiling glass walls, a private infinity pool, and state-of-the-art smart home technology. Every detail has been meticulously crafted to provide the ultimate coastal living experience.",
    features: ["Infinity Pool", "Smart Home Tech", "Private Beach Access", "Wine Cellar", "Home Theater", "Chef's Kitchen"],
    sqft: "4,500 sqft",
    beds: 4,
    baths: 5
  },
  {
    title: "Aether Gardens",
    price: "$850,000",
    location: "Austin, TX",
    type: "Modern Villa",
    image: "https://picsum.photos/seed/luxury2/800/1000",
    images: [
      "https://picsum.photos/seed/luxury2/800/1000",
      "https://picsum.photos/seed/luxury2-2/800/1000",
      "https://picsum.photos/seed/luxury2-3/800/1000",
      "https://picsum.photos/seed/luxury2-4/800/1000"
    ],
    description: "A contemporary oasis in the heart of Austin. This modern villa blends industrial aesthetics with organic warmth. Featuring sustainable materials, an open-concept layout, and a lush private garden, Aether Gardens is designed for the modern professional seeking tranquility and style.",
    features: ["Solar Panels", "Rainwater Harvesting", "Outdoor Kitchen", "Home Office", "EV Charging Station", "Zen Garden"],
    sqft: "3,200 sqft",
    beds: 3,
    baths: 3
  },
  {
    title: "Skyline Terrace",
    price: "$2,400,000",
    location: "New York, NY",
    type: "Penthouse",
    image: "https://picsum.photos/seed/luxury3/800/1000",
    images: [
      "https://picsum.photos/seed/luxury3/800/1000",
      "https://picsum.photos/seed/luxury3-2/800/1000",
      "https://picsum.photos/seed/luxury3-3/800/1000",
      "https://picsum.photos/seed/luxury3-4/800/1000"
    ],
    description: "Elevate your lifestyle in this breathtaking New York City penthouse. Located in a premier high-rise, this residence offers 360-degree views of the Manhattan skyline. With a private rooftop terrace, bespoke finishes, and access to world-class building amenities, this is urban living at its finest.",
    features: ["Private Rooftop", "24/7 Concierge", "Fitness Center", "Steam Room", "Custom Cabinetry", "Floor-to-Ceiling Windows"],
    sqft: "5,800 sqft",
    beds: 5,
    baths: 6
  },
  {
    title: "Emerald Estate",
    price: "$1,800,000",
    location: "Miami, FL",
    type: "Waterfront",
    image: "https://picsum.photos/seed/luxury4/800/1000",
    images: [
      "https://picsum.photos/seed/luxury4/800/1000",
      "https://picsum.photos/seed/luxury4-2/800/1000",
      "https://picsum.photos/seed/luxury4-3/800/1000",
      "https://picsum.photos/seed/luxury4-4/800/1000"
    ],
    description: "A tropical paradise awaits at Emerald Estate. This waterfront property in Miami features a private dock, lush landscaping, and expansive outdoor living spaces. The interior is a masterclass in modern coastal design, with light-filled rooms and high-end finishes throughout.",
    features: ["Private Dock", "Outdoor Firepit", "Guest House", "Gated Community", "Impact Windows", "Summer Kitchen"],
    sqft: "4,200 sqft",
    beds: 4,
    baths: 4
  }
]

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (property: Property) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
              Exclusive Listings
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight"
            >
              FEATURED <br /> <span className="italic text-accent">PROPERTIES</span>
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass px-8 py-4 rounded-full flex items-center gap-3 group hover:bg-white/10 transition-all duration-500"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="font-bold uppercase tracking-widest text-xs">View All Listings</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROPERTIES.map((property, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openModal(property)}
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest mb-3 font-bold">
                    <span className="w-4 h-[1px] bg-accent" />
                    {property.type}
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                    {property.title}
                  </h3>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{property.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <DollarSign className="w-4 h-4 text-accent" />
                      <span>{property.price}</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Hover Reveal Button */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <button 
                    className="w-full py-4 glass rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent hover:text-white transition-all duration-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(property);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PropertyModal 
        property={selectedProperty} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}
