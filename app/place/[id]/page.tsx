"use client"

import { useParams } from "next/navigation"
import PlaceDetail from "@/components/pages/place-detail"

export default function PlaceDetailPage() {
  const params = useParams()
  const id = params.id as string

  return <PlaceDetail placeId={Number.parseInt(id)} />
}
