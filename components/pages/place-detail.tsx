"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, MapPin, Clock, Star } from "lucide-react"

const placesData: Record<number, any> = {
  1: {
    name: "Kerala Backwaters",
    region: "Kerala",
    rating: 4.8,
    description:
      "Experience the serene beauty of Kerala's famous backwaters with houseboat cruises, local villages, and pristine natural landscapes.",
    mainImage: "/kerala-backwaters-mainimage.jpg",
    spots: [
      {
        id: 1,
        name: "Kumarakom Backwaters",
        description: "Popular houseboat destination with scenic views",
        image: "/kumarakom-backwaters.jpg",
        duration: "4-6 hours",
        pricePerPerson: 2500,
      },
      {
        id: 2,
        name: "Alleppey Houseboats",
        description: "Traditional Kerala houseboat experience",
        image: "/placeholder.svg?height=250&width=300",
        duration: "6-8 hours",
        pricePerPerson: 3000,
      },
      {
        id: 3,
        name: "Vembanad Lake",
        description: "Largest lake in Kerala with bird watching",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 1800,
      },
    ],
  },
  2: {
    name: "Taj Mahal",
    region: "Agra, Uttar Pradesh",
    rating: 4.9,
    description:
      "The iconic symbol of love and one of the Seven Wonders of the World. Marvel at the stunning white marble architecture.",
    mainImage: "/placeholder.svg?height=500&width=800",
    spots: [
      {
        id: 1,
        name: "Taj Mahal Main Monument",
        description: "The iconic white marble mausoleum",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 1500,
      },
      {
        id: 2,
        name: "Agra Fort",
        description: "Red sandstone fort with Mughal architecture",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 800,
      },
      {
        id: 3,
        name: "Mehtab Bagh",
        description: "Garden with best sunset view of Taj Mahal",
        image: "/placeholder.svg?height=250&width=300",
        duration: "1-2 hours",
        pricePerPerson: 600,
      },
    ],
  },
  3: {
    name: "Goa Beaches",
    region: "Goa",
    rating: 4.7,
    description:
      "Tropical beaches, Portuguese colonial architecture, and vibrant nightlife make Goa a perfect beach destination.",
    mainImage: "/placeholder.svg?height=500&width=800",
    spots: [
      {
        id: 1,
        name: "Baga Beach",
        description: "Popular beach with water sports and nightlife",
        image: "/placeholder.svg?height=250&width=300",
        duration: "4-6 hours",
        pricePerPerson: 1200,
      },
      {
        id: 2,
        name: "Anjuna Beach",
        description: "Scenic beach with rocky formations",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 900,
      },
      {
        id: 3,
        name: "Old Goa Basilica",
        description: "Historic church with Portuguese architecture",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 500,
      },
    ],
  },
  4: {
    name: "Himalayan Peaks",
    region: "Himachal Pradesh",
    rating: 4.6,
    description:
      "Majestic mountain peaks, adventure trekking, and scenic beauty perfect for nature lovers and thrill-seekers.",
    mainImage: "/himalayan-mountains.jpg",
    spots: [
      {
        id: 1,
        name: "Manali Trek",
        description: "Popular trekking destination with scenic trails",
        image: "/placeholder.svg?height=250&width=300",
        duration: "5-7 days",
        pricePerPerson: 8000,
      },
      {
        id: 2,
        name: "Shimla Ridge Walk",
        description: "Scenic walking trail with panoramic views",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 1500,
      },
      {
        id: 3,
        name: "Rohtang Pass",
        description: "High altitude pass with snow activities",
        image: "/placeholder.svg?height=250&width=300",
        duration: "4-5 hours",
        pricePerPerson: 2000,
      },
    ],
  },
  5: {
    name: "Rajasthan Forts",
    region: "Rajasthan",
    rating: 4.7,
    description:
      "Magnificent forts and palaces showcasing royal heritage and ancient Rajasthani architecture and culture.",
    mainImage: "/placeholder.svg?height=500&width=800",
    spots: [
      {
        id: 1,
        name: "Mehrangarh Fort",
        description: "Massive cliff-top fort with city views",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 1000,
      },
      {
        id: 2,
        name: "City Palace",
        description: "Royal palace with blend of Rajasthani and Mughal architecture",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 800,
      },
      {
        id: 3,
        name: "Hawa Mahal",
        description: "The iconic pink palace with unique latticed windows",
        image: "/placeholder.svg?height=250&width=300",
        duration: "1-2 hours",
        pricePerPerson: 500,
      },
    ],
  },
  6: {
    name: "Varanasi Ghats",
    region: "Uttar Pradesh",
    rating: 4.5,
    description:
      "Spiritual heart of India with sacred ghats, temples, and ancient rituals along the holy Ganges river.",
    mainImage: "/placeholder.svg?height=500&width=800",
    spots: [
      {
        id: 1,
        name: "Dashashwamedh Ghat",
        description: "Main ghat with evening Aarti ceremony",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 600,
      },
      {
        id: 2,
        name: "Ganges River Boat Tour",
        description: "Morning boat ride to see temples and ghats",
        image: "/placeholder.svg?height=250&width=300",
        duration: "1-2 hours",
        pricePerPerson: 500,
      },
      {
        id: 3,
        name: "Kashi Vishwanath Temple",
        description: "Ancient temple dedicated to Lord Shiva",
        image: "/placeholder.svg?height=250&width=300",
        duration: "1-2 hours",
        pricePerPerson: 300,
      },
    ],
  },
  7: {
    name: "Darjeeling Tea Gardens",
    region: "West Bengal",
    rating: 4.6,
    description:
      "Scenic tea plantations nestled in the Himalayas with stunning mountain views and authentic tea experiences.",
    mainImage: "/placeholder.svg?height=500&width=800",
    spots: [
      {
        id: 1,
        name: "Tea Garden Tour",
        description: "Visit working tea plantations and learn about tea production",
        image: "/placeholder.svg?height=250&width=300",
        duration: "4-5 hours",
        pricePerPerson: 1800,
      },
      {
        id: 2,
        name: "Tiger Hill Sunrise",
        description: "View sunrise over Kanchendzonga mountain",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 1000,
      },
      {
        id: 3,
        name: "Toy Train Ride",
        description: "Historic narrow gauge railway with scenic views",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 1200,
      },
    ],
  },
  8: {
    name: "Jaipur City Palace",
    region: "Rajasthan",
    rating: 4.5,
    description:
      "Pink city with stunning architecture, markets, and royal heritage attractions perfect for culture enthusiasts.",
    mainImage: "/placeholder.svg?height=500&width=800",
    spots: [
      {
        id: 1,
        name: "City Palace Complex",
        description: "Royal palace with museum and royal residence",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 900,
      },
      {
        id: 2,
        name: "Jantar Mantar",
        description: "Ancient astronomical measurement instruments",
        image: "/placeholder.svg?height=250&width=300",
        duration: "1-2 hours",
        pricePerPerson: 600,
      },
      {
        id: 3,
        name: "Jaipur City Market",
        description: "Vibrant market with local crafts and cuisine",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 500,
      },
    ],
  },
  9: {
    name: "Andaman Islands",
    region: "Andaman and Nicobar",
    rating: 4.8,
    description: "Tropical island paradise with pristine beaches, crystal clear waters, and water sports activities.",
    mainImage: "/andaman-islands-beach.jpg",
    spots: [
      {
        id: 1,
        name: "Radhanagar Beach",
        description: "Pristine beach with crystal clear water",
        image: "/placeholder.svg?height=250&width=300",
        duration: "4-6 hours",
        pricePerPerson: 2000,
      },
      {
        id: 2,
        name: "Scuba Diving",
        description: "Underwater marine life exploration",
        image: "/placeholder.svg?height=250&width=300",
        duration: "3-4 hours",
        pricePerPerson: 4500,
      },
      {
        id: 3,
        name: "Cellular Jail",
        description: "Historic colonial jail with museum",
        image: "/placeholder.svg?height=250&width=300",
        duration: "2-3 hours",
        pricePerPerson: 700,
      },
    ],
  },
}

export default function PlaceDetail({ placeId }: { placeId: number }) {
  const place = placesData[placeId] || placesData[1]
  const [selectedSpot, setSelectedSpot] = useState<any>(place.spots[0])

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={place.mainImage || "/placeholder.svg"} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <Link href="/places" className="absolute top-6 left-6 z-10">
          <Button variant="outline" className="gap-2 bg-white/90 hover:bg-white">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </div>

      {/* Content Section */}
      <div className="p-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{place.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <p className="text-lg">{place.region}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-lg">
                <Star className="w-6 h-6 fill-secondary text-secondary" />
                <span className="text-2xl font-bold text-secondary">{place.rating}</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{place.description}</p>
          </div>

          {/* Spots Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Best Spots to Visit</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Spot List */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {place.spots.map((spot: any) => (
                    <Card
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot)}
                      className={`p-5 cursor-pointer transition-all border-2 ${
                        selectedSpot.id === spot.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex gap-4">
                        <img
                          src={spot.image || "/placeholder.svg"}
                          alt={spot.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground text-lg">{spot.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{spot.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {spot.duration}
                            </div>
                            <div className="font-bold text-primary">₹{spot.pricePerPerson}/person</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Booking Card */}
              <div>
                <Card className="sticky top-8 p-6 bg-card border-border">
                  <div className="mb-6">
                    <img
                      src={selectedSpot.image || "/placeholder.svg"}
                      alt={selectedSpot.name}
                      className="w-full h-40 rounded-lg object-cover mb-4"
                    />
                    <h3 className="font-bold text-lg text-foreground mb-1">{selectedSpot.name}</h3>
                    <p className="text-sm text-muted-foreground">₹{selectedSpot.pricePerPerson} per person</p>
                  </div>

                  <Link href={`/booking?spot=${selectedSpot.id}&place=${placeId}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6">
                      Book Now
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
