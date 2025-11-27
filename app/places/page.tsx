"use client"

import { useContext, useEffect } from "react"
import { NavigationContext } from "@/app/layout-client"
import Places from "@/components/pages/places"

export default function PlacesPage() {
  const { setCurrentPage } = useContext(NavigationContext)

  useEffect(() => {
    setCurrentPage("places")
  }, [setCurrentPage])

  return <Places />
}
