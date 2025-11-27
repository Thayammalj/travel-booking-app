"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"

const allPlaces = [
  {
    id: 1,
    name: "Kerala Backwaters",
    region: "Kerala",
    rating: 4.8,
    image: "/kerala-backwaters.jpg",
    description: "Scenic waterways and houseboats",
    spots: 8,
  },
  {
    id: 2,
    name: "Taj Mahal",
    region: "Agra, Uttar Pradesh",
    rating: 4.9,
    image: "/taj-mahal-mausoleum.png",
    description: "Iconic white marble monument",
    spots: 12,
  },
  {
    id: 3,
    name: "Goa Beaches",
    region: "Goa",
    rating: 4.7,
    image: "/goa-beaches.jpg",
    description: "Tropical beaches and nightlife",
    spots: 15,
  },
  {
    id: 4,
    name: "Himalayan Peaks",
    region: "Himachal Pradesh",
    rating: 4.6,
    image: "/himalayan-mountains.jpg",
    description: "Mountain trekking and adventure",
    spots: 10,
  },
  {
    id: 5,
    name: "Rajasthan Forts",
    region: "Rajasthan",
    rating: 4.7,
    image: "/rajasthan-fort.jpg",
    description: "Ancient forts and palaces",
    spots: 9,
  },
  {
    id: 6,
    name: "Varanasi Ghats",
    region: "Uttar Pradesh",
    rating: 4.5,
    image: "/varanasi-ghats.jpg",
    description: "Spiritual and cultural hub",
    spots: 7,
  },
  {
    id: 7,
    name: "Darjeeling Tea Gardens",
    region: "West Bengal",
    rating: 4.6,
    image: "/darjeeling-tea-gardens-mountains.jpg",
    description: "Scenic tea plantations and views",
    spots: 6,
  },
  {
    id: 8,
    name: "Jaipur City Palace",
    region: "Rajasthan",
    rating: 4.5,
    image: "/jaipur-city-palace.jpg",
    description: "Royal architecture and heritage",
    spots: 8,
  },
  {
    id: 9,
    name: "Andaman Islands",
    region: "Andaman and Nicobar",
    rating: 4.8,
    image: "/andaman-islands-beach.jpg",
    description: "Tropical island paradise",
    spots: 11,
  },
]

export default function Places() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">All Travel Destinations</h1>
          <p className="text-lg text-muted-foreground">Browse all amazing places across India</p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPlaces.map((place) => (
            <Link key={place.id} href={`/place/${place.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-card border-border h-full flex flex-col">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg text-balance">{place.name}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm">{place.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-accent/20 px-2.5 py-1.5 rounded-md">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-sm font-bold text-secondary">{place.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{place.description}</p>
                  <div className="text-xs text-muted-foreground font-medium">{place.spots} spots to explore</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
