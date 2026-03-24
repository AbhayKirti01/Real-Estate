'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Property {
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

interface SavedPropertiesContextType {
  savedProperties: Property[]
  saveProperty: (property: Property) => void
  removeProperty: (propertyId: string) => void
  isSaved: (propertyId: string) => boolean
}

const SavedPropertiesContext = createContext<SavedPropertiesContextType | undefined>(undefined)

export function SavedPropertiesProvider({ children }: { children: React.ReactNode }) {
  const [savedProperties, setSavedProperties] = useState<Property[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedProperties')
    if (saved) {
      try {
        setSavedProperties(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse saved properties', e)
      }
    }
  }, [])

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('savedProperties', JSON.stringify(savedProperties))
  }, [savedProperties])

  const saveProperty = (property: Property) => {
    setSavedProperties((prev) => {
      if (prev.find((p) => p.id === property.id)) return prev
      return [...prev, property]
    })
  }

  const removeProperty = (propertyId: string) => {
    setSavedProperties((prev) => prev.filter((p) => p.id !== propertyId))
  }

  const isSaved = (propertyId: string) => {
    return !!savedProperties.find((p) => p.id === propertyId)
  }

  return (
    <SavedPropertiesContext.Provider value={{ savedProperties, saveProperty, removeProperty, isSaved }}>
      {children}
    </SavedPropertiesContext.Provider>
  )
}

export function useSavedProperties() {
  const context = useContext(SavedPropertiesContext)
  if (context === undefined) {
    throw new Error('useSavedProperties must be used within a SavedPropertiesProvider')
  }
  return context
}
