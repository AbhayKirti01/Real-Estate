'use client'

import CategoryPageTemplate from '@/components/CategoryPageTemplate'

const PROPERTIES = [
  {
    title: "Modernist Mansion",
    price: "$3,200,000",
    location: "Beverly Hills, CA",
    type: "Luxury Residence",
    image: "https://picsum.photos/seed/home1/800/1000",
    images: ["https://picsum.photos/seed/home1/800/1000", "https://picsum.photos/seed/home1-2/800/1000", "https://picsum.photos/seed/home1-3/800/1000"],
    description: "Ultra-modern mansion with sleek lines and open spaces. A masterpiece of contemporary architecture.",
    features: ["Infinity Pool", "Home Theater", "Smart Home System", "Gourmet Kitchen"],
    sqft: "6,500 sqft",
    beds: 6,
    baths: 7
  },
  {
    title: "Classic Colonial",
    price: "$1,450,000",
    location: "Greenwich, CT",
    type: "Traditional Home",
    image: "https://picsum.photos/seed/home2/800/1000",
    images: ["https://picsum.photos/seed/home2/800/1000", "https://picsum.photos/seed/home2-2/800/1000", "https://picsum.photos/seed/home2-3/800/1000"],
    description: "Timeless colonial elegance in a prestigious neighborhood. Beautifully maintained with classic details.",
    features: ["Hardwood Floors", "Fireplace", "Manicured Lawn", "Formal Dining Room"],
    sqft: "4,200 sqft",
    beds: 4,
    baths: 3
  },
  {
    title: "Beachfront Bungalow",
    price: "$2,100,000",
    location: "Malibu, CA",
    type: "Coastal Retreat",
    image: "https://picsum.photos/seed/home3/800/1000",
    images: ["https://picsum.photos/seed/home3/800/1000", "https://picsum.photos/seed/home3-2/800/1000", "https://picsum.photos/seed/home3-3/800/1000"],
    description: "Charming beachfront bungalow with direct ocean access. The perfect coastal getaway.",
    features: ["Ocean Views", "Private Deck", "Outdoor Shower", "Open Layout"],
    sqft: "2,800 sqft",
    beds: 3,
    baths: 2
  },
  {
    title: "Mountain Retreat",
    price: "$1,850,000",
    location: "Aspen, CO",
    type: "Mountain Lodge",
    image: "https://picsum.photos/seed/home4/800/1000",
    images: ["https://picsum.photos/seed/home4/800/1000", "https://picsum.photos/seed/home4-2/800/1000", "https://picsum.photos/seed/home4-3/800/1000"],
    description: "Cozy and spacious mountain lodge with stunning alpine views. A true sanctuary in the mountains.",
    features: ["Vaulted Ceilings", "Stone Fireplace", "Hot Tub", "Ski-in/Ski-out Access"],
    sqft: "5,200 sqft",
    beds: 5,
    baths: 4
  },
  {
    title: "Urban Loft",
    price: "$950,000",
    location: "New York, NY",
    type: "Industrial Loft",
    image: "https://picsum.photos/seed/home5/800/1000",
    images: ["https://picsum.photos/seed/home5/800/1000", "https://picsum.photos/seed/home5-2/800/1000", "https://picsum.photos/seed/home5-3/800/1000"],
    description: "Industrial chic loft in a vibrant city neighborhood. Exposed brick and high ceilings.",
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
