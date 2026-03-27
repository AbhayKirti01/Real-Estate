'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { MapPin, DollarSign, LayoutGrid, Heart, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import PropertyModal from './PropertyModal'
import { useSavedProperties } from './SavedPropertiesContext'

interface Property {
  id: string
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
    id: 'luxury-1',
    title: "The Golden Horizon",
    price: "$1,200,000",
    location: "Raipur",
    type: "Luxury Home",
    image: "/input_file_1.png",
    images: [
      "/input_file_1.png",
      "https://picsum.photos/seed/luxury-mansion-2/800/1000",
      "https://picsum.photos/seed/luxury-mansion-3/800/1000",
      "https://picsum.photos/seed/luxury-mansion-4/800/1000"
    ],
    description: "Experience unparalleled luxury in this stunning Raipur estate. Perched on a cliffside with panoramic city views, this architectural masterpiece features floor-to-ceiling glass walls, a private infinity pool, and state-of-the-art smart home technology. Every detail has been meticulously crafted to provide the ultimate urban living experience.",
    features: ["Infinity Pool", "Smart Home Tech", "Private Access", "Wine Cellar", "Home Theater", "Chef's Kitchen"],
    sqft: "4,500 sqft",
    beds: 4,
    baths: 5
  },
  {
    id: 'luxury-2',
    title: "Aether Gardens",
    price: "$850,000",
    location: "Bhilai",
    type: "Modern Villa",
    image: "/input_file_0.png",
    images: [
      "/input_file_0.png",
      "https://picsum.photos/seed/modern-villa-2/800/1000",
      "https://picsum.photos/seed/modern-villa-3/800/1000",
      "https://picsum.photos/seed/modern-villa-4/800/1000"
    ],
    description: "A contemporary oasis in the heart of Bhilai. This modern villa blends industrial aesthetics with organic warmth. Featuring sustainable materials, an open-concept layout, and a lush private garden, Aether Gardens is designed for the modern professional seeking tranquility and style.",
    features: ["Solar Panels", "Rainwater Harvesting", "Outdoor Kitchen", "Home Office", "EV Charging Station", "Zen Garden"],
    sqft: "3,200 sqft",
    beds: 3,
    baths: 3
  },
  {
    id: 'luxury-3',
    title: "Skyline Terrace",
    price: "$2,400,000",
    location: "Durg",
    type: "Penthouse",
    image: "https://picsum.photos/seed/penthouse-view/800/1000",
    images: [
      "https://picsum.photos/seed/penthouse-view/800/1000",
      "https://picsum.photos/seed/penthouse-view-2/800/1000",
      "https://picsum.photos/seed/penthouse-view-3/800/1000",
      "https://picsum.photos/seed/penthouse-view-4/800/1000"
    ],
    description: "Elevate your lifestyle in this breathtaking Durg penthouse. Located in a premier high-rise, this residence offers 360-degree views of the skyline. With a private rooftop terrace, bespoke finishes, and access to world-class building amenities, this is urban living at its finest.",
    features: ["Private Rooftop", "24/7 Concierge", "Fitness Center", "Steam Room", "Custom Cabinetry", "Floor-to-Ceiling Windows"],
    sqft: "5,800 sqft",
    beds: 5,
    baths: 6
  },
  {
    id: 'luxury-4',
    title: "Emerald Estate",
    price: "$1,800,000",
    location: "Bilaspur",
    type: "Waterfront",
    image: "https://picsum.photos/seed/waterfront-mansion/800/1000",
    images: [
      "https://picsum.photos/seed/waterfront-mansion/800/1000",
      "https://picsum.photos/seed/waterfront-mansion-2/800/1000",
      "https://picsum.photos/seed/waterfront-mansion-3/800/1000",
      "https://picsum.photos/seed/waterfront-mansion-4/800/1000"
    ],
    description: "A tropical paradise awaits at Emerald Estate. This waterfront property in Bilaspur features a private dock, lush landscaping, and expansive outdoor living spaces. The interior is a masterclass in modern coastal design, with light-filled rooms and high-end finishes throughout.",
    features: ["Private Dock", "Outdoor Firepit", "Guest House", "Gated Community", "Impact Windows", "Summer Kitchen"],
    sqft: "4,200 sqft",
    beds: 4,
    baths: 4
  }
]

const PropertyCard = ({ property, index, onOpenModal, onToggleSave, isSaved }: { 
  property: Property, 
  index: number, 
  onOpenModal: (p: Property) => void,
  onToggleSave: (e: React.MouseEvent, p: Property) => void,
  isSaved: (id: string) => boolean
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMousePos({ x, y })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onOpenModal(property)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 glass border border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: isHovering ? 1.15 : 1,
              x: mousePos.x,
              y: mousePos.y
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 0.6, ease: "easeOut" },
              x: { type: "spring", stiffness: 100, damping: 20 },
              y: { type: "spring", stiffness: 100, damping: 20 }
            }}
            className="absolute inset-0"
          >
            <Image 
              src={property.images[currentImageIndex]} 
              alt={property.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {/* Carousel Controls */}
        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-accent z-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-accent z-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {property.images.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentImageIndex ? 'w-4 bg-accent' : 'w-1 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-6 right-6 z-20">
          <button 
            onClick={(e) => onToggleSave(e, property)}
            className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 ${
              isSaved(property.id) ? 'bg-accent border-accent' : 'bg-black/20 hover:bg-accent'
            }`}
          >
            <Heart className={`w-5 h-5 transition-transform duration-500 ${isSaved(property.id) ? 'fill-white scale-110' : 'group-hover/btn:scale-110'}`} />
          </button>
        </div>

        <div className="absolute top-6 left-6">
          <div className="px-4 py-2 glass rounded-full border border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent italic">{property.type}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-bold tracking-tight group-hover:text-accent transition-colors duration-300">{property.title}</h3>
          <span className="text-accent font-sans font-bold text-lg">{property.price}</span>
        </div>
        
        <div className="flex items-center gap-2 text-white/40 group-hover:bg-accent/10 p-1 rounded transition-colors duration-300">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-xs uppercase tracking-widest font-bold">{property.location}</span>
        </div>

        <div className="flex items-center gap-6 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold">{property.beds}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold">{property.baths}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold">{property.sqft.split(' ')[0]}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Sqft</span>
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="w-full mt-4 py-3 glass rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all duration-300"
        >
          Book a Tour
        </button>
      </div>
    </motion.div>
  )
}

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { saveProperty, removeProperty, isSaved } = useSavedProperties()

  // Filter States
  const [typeFilter, setTypeFilter] = useState<string>('All')
  const [locationFilter, setLocationFilter] = useState<string>('All')
  const [openDropdown, setOpenDropdown] = useState<'type' | 'location' | null>(null)

  const typeRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(event.target as Node) &&
          locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Get unique types and locations for filters
  const types = ['All', ...Array.from(new Set(PROPERTIES.map(p => p.type)))]
  const locations = ['All', ...Array.from(new Set(PROPERTIES.map(p => p.location)))]

  const filteredProperties = PROPERTIES.filter(property => {
    const matchesType = typeFilter === 'All' || property.type === typeFilter
    const matchesLocation = locationFilter === 'All' || property.location === locationFilter
    return matchesType && matchesLocation
  })

  const openModal = (property: Property) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const toggleSave = (e: React.MouseEvent, property: Property) => {
    e.stopPropagation()
    if (isSaved(property.id)) {
      removeProperty(property.id)
    } else {
      saveProperty(property)
    }
  }

  const handleReset = () => {
    setTypeFilter('All')
    setLocationFilter('All')
    setOpenDropdown(null)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
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

        {/* Filters Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-4 mb-16 p-4 glass rounded-2xl border border-white/5 z-50 relative"
        >
          <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
            {/* Property Type Dropdown */}
            <div className="relative w-full md:w-64" ref={typeRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                className="w-full px-6 py-4 glass rounded-xl flex items-center justify-between group hover:bg-accent transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold mb-1">Property Type</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{typeFilter}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-500 ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'type' && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.95, filter: 'blur(10px)' },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        filter: 'blur(0px)',
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          staggerChildren: 0.05,
                          delayChildren: 0.05
                        }
                      },
                      exit: { 
                        opacity: 0, 
                        y: 10, 
                        scale: 0.95, 
                        filter: 'blur(10px)',
                        transition: { duration: 0.2 }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 right-0 mt-2 p-2 glass rounded-xl border border-white/10 z-[60] shadow-2xl backdrop-blur-2xl origin-top"
                  >
                    <div className="space-y-1">
                      {types.map((type) => (
                        <motion.button
                          key={type}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 5, backgroundColor: "rgba(var(--accent-rgb), 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setTypeFilter(type)
                            setOpenDropdown(null)
                          }}
                          className={`w-full px-4 py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold text-left transition-all duration-200 ${
                            typeFilter === type 
                            ? 'bg-accent text-white' 
                            : 'text-white/60 hover:text-white'
                          }`}
                        >
                          {type}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-white/10" />

            {/* Location Dropdown */}
            <div className="relative w-full md:w-64" ref={locationRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
                className="w-full px-6 py-4 glass rounded-xl flex items-center justify-between group hover:bg-accent transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold mb-1">Location</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{locationFilter}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-500 ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'location' && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.95, filter: 'blur(10px)' },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        filter: 'blur(0px)',
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          staggerChildren: 0.05,
                          delayChildren: 0.05
                        }
                      },
                      exit: { 
                        opacity: 0, 
                        y: 10, 
                        scale: 0.95, 
                        filter: 'blur(10px)',
                        transition: { duration: 0.2 }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 right-0 mt-2 p-2 glass rounded-xl border border-white/10 z-[60] shadow-2xl backdrop-blur-2xl origin-top"
                  >
                    <div className="space-y-1">
                      {locations.map((loc) => (
                        <motion.button
                          key={loc}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 5, backgroundColor: "rgba(var(--accent-rgb), 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setLocationFilter(loc)
                            setOpenDropdown(null)
                          }}
                          className={`w-full px-4 py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold text-left transition-all duration-200 ${
                            locationFilter === loc 
                            ? 'bg-accent text-white' 
                            : 'text-white/60 hover:text-white'
                          }`}
                        >
                          {loc}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={handleReset}
              className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-accent transition-colors duration-300"
            >
              Reset
            </button>
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/20 whitespace-nowrap">
              {filteredProperties.length} Results
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[600px]">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, i) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={i} 
                onOpenModal={openModal}
                onToggleSave={toggleSave}
                isSaved={isSaved}
              />
            ))
          ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <LayoutGrid className="w-8 h-8 text-white/20" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">No properties found</h3>
            <p className="text-white/40 text-sm max-w-xs mx-auto">
              Try adjusting your filters to find the perfect luxury property.
            </p>
            <button 
              onClick={handleReset}
              className="mt-8 text-accent text-[10px] uppercase tracking-widest font-bold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
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
