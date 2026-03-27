'use client'

import CategoryPageTemplate from '@/components/CategoryPageTemplate'

const PROPERTIES = [
  {
    title: "The Hub Plaza",
    price: "$4,500,000",
    location: "Raipur",
    type: "Commercial Hub",
    image: "https://picsum.photos/seed/office-building/800/1000",
    images: ["https://picsum.photos/seed/office-building/800/1000", "https://picsum.photos/seed/office-building-2/800/1000", "https://picsum.photos/seed/office-building-3/800/1000"],
    description: "Modern office space in the heart of the Raipur tech district. High-tech amenities and flexible floor plans.",
    features: ["Smart Building", "Fiber Optic Ready", "Rooftop Garden", "24/7 Security"],
    sqft: "15,000 sqft",
    beds: 0,
    baths: 0
  },
  {
    title: "Industrial Park Unit",
    price: "$1,200,000",
    location: "Bhilai",
    type: "Industrial Space",
    image: "https://picsum.photos/seed/warehouse/800/1000",
    images: ["https://picsum.photos/seed/warehouse/800/1000", "https://picsum.photos/seed/warehouse-2/800/1000", "https://picsum.photos/seed/warehouse-3/800/1000"],
    description: "High-ceiling warehouse with excellent logistics access in Bhilai. Perfect for manufacturing or distribution.",
    features: ["Loading Docks", "Heavy Power", "Ample Parking", "Office Space Included"],
    sqft: "10,000 sqft",
    beds: 0,
    baths: 0
  },
  {
    title: "Retail Row",
    price: "$2,800,000",
    location: "Durg",
    type: "Retail Center",
    image: "https://picsum.photos/seed/storefront/800/1000",
    images: ["https://picsum.photos/seed/storefront/800/1000", "https://picsum.photos/seed/storefront-2/800/1000", "https://picsum.photos/seed/storefront-3/800/1000"],
    description: "High-traffic storefronts in a premier Durg shopping district. Excellent visibility and foot traffic.",
    features: ["Prime Location", "Large Display Windows", "Outdoor Seating Area", "Modern Architecture"],
    sqft: "8,000 sqft",
    beds: 0,
    baths: 0
  },
  {
    title: "Tech Center",
    price: "$3,900,000",
    location: "Bilaspur",
    type: "Tech Hub",
    image: "https://picsum.photos/seed/tech-office/800/1000",
    images: ["https://picsum.photos/seed/tech-office/800/1000", "https://picsum.photos/seed/tech-office-2/800/1000", "https://picsum.photos/seed/tech-office-3/800/1000"],
    description: "State-of-the-art tech hub designed for innovation in Bilaspur. Collaborative workspaces and high-speed infrastructure.",
    features: ["Data Center", "Co-working Spaces", "Auditorium", "Eco-friendly Design"],
    sqft: "12,000 sqft",
    beds: 0,
    baths: 0
  },
  {
    title: "Logistics Hub",
    price: "$5,200,000",
    location: "Raipur",
    type: "Distribution Center",
    image: "https://picsum.photos/seed/logistics-center/800/1000",
    images: ["https://picsum.photos/seed/logistics-center/800/1000", "https://picsum.photos/seed/logistics-center-2/800/1000", "https://picsum.photos/seed/logistics-center-3/800/1000"],
    description: "Large scale distribution center with advanced logistics capabilities in Raipur. Strategically located for national reach.",
    features: ["Cross-docking", "Cold Storage Potential", "Expansive Yard", "Highway Access"],
    sqft: "25,000 sqft",
    beds: 0,
    baths: 0
  }
]

export default function ConstructedPropertiesPage() {
  return (
    <CategoryPageTemplate 
      title="CONSTRUCTED PROPERTIES" 
      subtitle="Modern Spaces" 
      properties={PROPERTIES} 
    />
  )
}
