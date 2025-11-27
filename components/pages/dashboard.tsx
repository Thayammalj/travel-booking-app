"use client"
import React from "react"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Star, MapPin, TrendingUp } from "lucide-react"

const topPlaces = [
  {
    id: 1,
    name: "Kerala Backwaters",
    region: "Kerala",
    rating: 4.8,
    image: "/kerala-backwaters-houseboat.png",
    description: "Scenic waterways and houseboats",
    visits: "45K+",
  },
  {
    id: 2,
    name: "Taj Mahal",
    region: "Agra, Uttar Pradesh",
    rating: 4.9,
    image: "/taj-mahal-marble-monument.jpg",
    description: "Iconic white marble monument",
    visits: "120K+",
  },
  {
    id: 3,
    name: "Goa Beaches",
    region: "Goa",
    rating: 4.7,
    image: "/goa-beaches-sunset-sand.jpg",
    description: "Tropical beaches and nightlife",
    visits: "85K+",
  },
  {
    id: 4,
    name: "Himalayan Peaks",
    region: "Himachal Pradesh",
    rating: 4.6,
    image: "/himalayan-mountains-snow-peaks.jpg",
    description: "Mountain trekking and adventure",
    visits: "52K+",
  },
  {
    id: 5,
    name: "Rajasthan Forts",
    region: "Rajasthan",
    rating: 4.7,
    image: "/rajasthan-fort-palace-architecture.jpg",
    description: "Ancient forts and palaces",
    visits: "76K+",
  },
  {
    id: 6,
    name: "Varanasi Ghats",
    region: "Uttar Pradesh",
    rating: 4.5,
    image: "/varanasi-river-ghats-spiritual.jpg",
    description: "Spiritual and cultural hub",
    visits: "38K+",
  },
]

export default function Dashboard() {
  const [messages, setMessages] = React.useState<any[]>([])

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('contactMessages')
      setMessages(stored ? JSON.parse(stored) : [])
    } catch (err) {
      setMessages([])
    }
  }, [])

  function reloadMessages() {
    try {
      const stored = localStorage.getItem('contactMessages')
      setMessages(stored ? JSON.parse(stored) : [])
    } catch (err) {
      setMessages([])
    }
  }
  return (
    <div className="p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">Explore India's Best Travel Destinations</h1>
          <p className="text-lg text-muted-foreground">Discover amazing places and book your next adventure</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Destinations</p>
                <p className="text-2xl font-bold text-foreground">25+</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Bookings</p>
                <p className="text-2xl font-bold text-foreground">1.2K+</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold text-foreground">4.7/5</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact area: form + submissions */}
       

        {/* Top Places Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Top Travel Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPlaces.map((place) => (
              <Link key={place.id} href={`/place/${place.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card border-border h-full">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={place.image || "/placeholder.svg"}
                      alt={place.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-foreground text-lg text-balance">{place.name}</h3>
                        <p className="text-sm text-muted-foreground">{place.region}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-accent/20 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span className="text-sm font-semibold text-secondary">{place.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{place.description}</p>
                    <p className="text-xs text-muted-foreground">{place.visits} visits this year</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
