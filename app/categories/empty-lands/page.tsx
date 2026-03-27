'use client'

import CategoryPageTemplate from '@/components/CategoryPageTemplate'

const PROPERTIES = [
  {
    title: "Golden Valley Acres",
    price: "$450,000",
    location: "Raipur",
    type: "Agricultural Land",
    image: "https://picsum.photos/seed/farmland/800/1000",
    images: ["https://picsum.photos/seed/farmland/800/1000", "https://picsum.photos/seed/farmland-2/800/1000", "https://picsum.photos/seed/farmland-3/800/1000"],
    description: "Prime agricultural land in the heart of Raipur. Perfect for a vineyard or a private estate.",
    features: ["Fertile Soil", "Water Rights", "Paved Access", "Scenic Views"],
    sqft: "5 Acres",
    beds: 0,
    baths: 0
  },
  {
    title: "Sunset Ridge Plot",
    price: "$280,000",
    location: "Bhilai",
    type: "Residential Plot",
    image: "https://picsum.photos/seed/empty-lot/800/1000",
    images: ["https://picsum.photos/seed/empty-lot/800/1000", "https://picsum.photos/seed/empty-lot-2/800/1000", "https://picsum.photos/seed/empty-lot-3/800/1000"],
    description: "Breathtaking residential plot with panoramic views in Bhilai. Ideal for a custom luxury home.",
    features: ["City Views", "Utilities Ready", "Quiet Neighborhood", "Parks Nearby"],
    sqft: "2.5 Acres",
    beds: 0,
    baths: 0
  },
  {
    title: "Riverfront Haven",
    price: "$620,000",
    location: "Durg",
    type: "Riverfront Land",
    image: "https://picsum.photos/seed/river-land/800/1000",
    images: ["https://picsum.photos/seed/river-land/800/1000", "https://picsum.photos/seed/river-land-2/800/1000", "https://picsum.photos/seed/river-land-3/800/1000"],
    description: "Exclusive riverfront access in the beautiful Durg area. A rare opportunity for a private retreat.",
    features: ["River Access", "Private Dock Potential", "Lush Vegetation", "Abundant Wildlife"],
    sqft: "10 Acres",
    beds: 0,
    baths: 0
  },
  {
    title: "Pine Crest Estate",
    price: "$350,000",
    location: "Bilaspur",
    type: "Wooded Land",
    image: "https://picsum.photos/seed/forest-land/800/1000",
    images: ["https://picsum.photos/seed/forest-land/800/1000", "https://picsum.photos/seed/forest-land-2/800/1000", "https://picsum.photos/seed/forest-land-3/800/1000"],
    description: "Beautifully wooded land in Bilaspur perfect for a luxury cabin or a secluded getaway.",
    features: ["Mature Trees", "Elevation", "Proximity to Resorts", "Gated Access"],
    sqft: "4 Acres",
    beds: 0,
    baths: 0
  },
  {
    title: "Desert Oasis Lot",
    price: "$190,000",
    location: "Raipur",
    type: "Residential Land",
    image: "https://picsum.photos/seed/desert-land/800/1000",
    images: ["https://picsum.photos/seed/desert-land/800/1000", "https://picsum.photos/seed/desert-land-2/800/1000", "https://picsum.photos/seed/desert-land-3/800/1000"],
    description: "Unique landscape in Raipur. A perfect spot for an architectural marvel.",
    features: ["Iconic Landscape", "Starry Skies", "Off-grid Potential", "Artist Community Nearby"],
    sqft: "1.5 Acres",
    beds: 0,
    baths: 0
  }
]

export default function EmptyLandsPage() {
  return (
    <CategoryPageTemplate 
      title="EMPTY LANDS" 
      subtitle="Premium Plots" 
      properties={PROPERTIES} 
    />
  )
}
