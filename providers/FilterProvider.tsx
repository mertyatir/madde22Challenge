"use client"

import { Dispatch, createContext, useState } from "react"

type FilterProviderProps = {
  children: React.ReactNode
}

type FilterContextType = {
  selectedFilter: string[]
  setSelectedFilter: Dispatch<React.SetStateAction<string[]>>
  eventType: string
  setEventType: Dispatch<React.SetStateAction<string>>
}

export const FilterContext = createContext({} as FilterContextType)

export function FilterProvider({ children }: FilterProviderProps) {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([])

  const [eventType, setEventType] = useState("Tüm Etkinlikler")

  return (
    <FilterContext.Provider
      value={{ selectedFilter, setSelectedFilter, eventType, setEventType }}
    >
      {children}
    </FilterContext.Provider>
  )
}
