'use client'

import CategoryPageTemplate from '@/components/CategoryPageTemplate'

const PROPERTIES = [
  {
    title: "Modernist Mansion",
    price: "$3,200,000",
    location: "Raipur",
    type: "Luxury Residence",
    image: "/input_file_0.png",
    images: ["/input_file_0.png", "https://picsum.photos/seed/modern-mansion-2/800/1000", "https://picsum.photos/seed/modern-mansion-3/800/1000"],
    description: "Ultra-modern mansion with sleek lines and open spaces in Raipur. A masterpiece of contemporary architecture.",
    features: ["Infinity Pool", "Home Theater", "Smart Home System", "Gourmet Kitchen"],
    sqft: "6,500 sqft",
    beds: 6,
    baths: 7
  },
  {
    title: "Classic Colonial",
    price: "$1,450,000",
    location: "Bhilai",
    type: "Traditional Home",
    image: "/input_file_1.png",
    images: ["/input_file_1.png", "https://picsum.photos/seed/colonial-house-2/800/1000", "https://picsum.photos/seed/colonial-house-3/800/1000"],
    description: "Timeless colonial elegance in a prestigious Bhilai neighborhood. Beautifully maintained with classic details.",
    features: ["Hardwood Floors", "Fireplace", "Manicured Lawn", "Formal Dining Room"],
    sqft: "4,200 sqft",
    beds: 4,
    baths: 3
  },
  {
    title: "Beachfront Bungalow",
    price: "$2,100,000",
    location: "Durg",
    type: "Coastal Retreat",
    image: "https://picsum.photos/seed/beach-house/800/1000",
    images: ["https://picsum.photos/seed/beach-house/800/1000", "https://picsum.photos/seed/beach-house-2/800/1000", "https://picsum.photos/seed/beach-house-3/800/1000"],
    description: "Charming bungalow with direct access in the beautiful Durg area. The perfect getaway.",
    features: ["Scenic Views", "Private Deck", "Outdoor Shower", "Open Layout"],
    sqft: "2,800 sqft",
    beds: 3,
    baths: 2
  },
  {
    title: "Mountain Retreat",
    price: "$1,850,000",
    location: "Bilaspur",
    type: "Mountain Lodge",
    image: "https://picsum.photos/seed/mountain-cabin/800/1000",
    images: ["https://picsum.photos/seed/mountain-cabin/800/1000", "https://picsum.photos/seed/mountain-cabin-2/800/1000", "https://picsum.photos/seed/mountain-cabin-3/800/1000"],
    description: "Cozy and spacious lodge with stunning views in Bilaspur. A true sanctuary.",
    features: ["Vaulted Ceilings", "Stone Fireplace", "Hot Tub", "Modern Access"],
    sqft: "5,200 sqft",
    beds: 5,
    baths: 4
  },
  {
    title: "Urban Loft",
    price: "$950,000",
    location: "Raipur",
    type: "Industrial Loft",
    image: "https://picsum.photos/seed/industrial-loft/800/1000",
    images: ["https://picsum.photos/seed/industrial-loft/800/1000", "https://picsum.photos/seed/industrial-loft-2/800/1000", "https://picsum.photos/seed/industrial-loft-3/800/1000"],
    description: "Industrial chic loft in a vibrant Raipur neighborhood. Exposed brick and high ceilings.",
    features: ["Exposed Brick", "High Ceilings", "Large Windows", "Modern Finishes"],
    sqft: "1,800 sqft",
    beds: 2,
    baths: 2
  }
]

export default function ReadyHomesPage() {
  return (
    <CategoryPageTemplate 
      title="READY HOMES" 
      subtitle="Luxury Residences" 
      properties={PROPERTIES} 
    />
  )
}
