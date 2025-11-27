"use client"

import { useSearchParams } from "next/navigation"
import BookingForm from "@/components/pages/booking-form"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const spotId = searchParams.get("spot")
  const placeId = searchParams.get("place")

  return <BookingForm spotId={spotId ? Number.parseInt(spotId) : 1} placeId={placeId ? Number.parseInt(placeId) : 1} />
}
