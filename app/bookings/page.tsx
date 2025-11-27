"use client"

import { useContext, useEffect } from "react"
import { NavigationContext } from "@/app/layout-client"
import BookingDetails from "@/components/pages/booking-details"

export default function BookingsPage() {
  const { setCurrentPage } = useContext(NavigationContext)

  useEffect(() => {
    setCurrentPage("bookings")
  }, [setCurrentPage])

  return <BookingDetails />
}
