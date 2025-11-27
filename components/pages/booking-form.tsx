"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bus, Train, Plane } from "lucide-react"
import Link from "next/link"

const priceMultipliers = {
  bus: 1,
  train: 1.5,
  flight: 2.5,
}

const basePrice = 2500

export default function BookingForm({ spotId, placeId }: any) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: 1,
    transport: "bus",
    date: "",
  })

  const [bookings, setBookings] = useState<any[]>([])
  const [showSuccess, setShowSuccess] = useState(false)

  const transportOptions = [
    { id: "bus", label: "Bus", icon: Bus, multiplier: 1 },
    { id: "train", label: "Train", icon: Train, multiplier: 1.5 },
    { id: "flight", label: "Flight", icon: Plane, multiplier: 2.5 },
  ]

  const calculatePrice = () => {
    const multiplier = priceMultipliers[formData.transport as keyof typeof priceMultipliers]
    return Math.round(basePrice * formData.people * multiplier)
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "people" ? Number.parseInt(value) : value,
    }))
  }

  const handleTransportChange = (transport: string) => {
    setFormData((prev) => ({
      ...prev,
      transport,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const newBooking = {
      id: Date.now(),
      ...formData,
      totalPrice: calculatePrice(),
      bookingDate: new Date().toLocaleDateString(),
      status: "Confirmed",
    }

    setBookings((prev) => [...prev, newBooking])

    // Store in localStorage for persistence
    const stored = localStorage.getItem("bookings")
    const existingBookings = stored ? JSON.parse(stored) : []
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, newBooking]))

    setShowSuccess(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      people: 1,
      transport: "bus",
      date: "",
    })

    // show brief success then redirect to Dashboard (home)
    setTimeout(() => {
      setShowSuccess(false)
      router.push('/bookings')
    }, 900)
  }



  
  return (
    
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Link href={`/place/${placeId}`}>
          <Button variant="outline" className="gap-2 mb-8 bg-transparent">
            <ArrowLeft className="w-4 h-4" />
            Back to Place
          </Button>
        </Link>

        <Card className="p-8 bg-card border-border">
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Booking</h1>
          <p className="text-muted-foreground mb-8">Fill in your details and choose your preferred transport</p>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✓ Booking confirmed! Check Booking Details page for more info.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Personal Information</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Travel Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Travel Details</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of People</label>
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleInputChange}
                  min="1"
                  max="10"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Travel Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Transport Options */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Select Transport</h2>
              <div className="grid grid-cols-3 gap-4">
                {transportOptions.map((transport) => (
                  <button
                    key={transport.id}
                    type="button"
                    onClick={() => handleTransportChange(transport.id)}
                    className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                      formData.transport === transport.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <transport.icon className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">{transport.label}</span>
                    <span className="text-xs text-muted-foreground">x{transport.multiplier}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <Card className="p-4 bg-accent/5 border-accent/20">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground">Base Price:</span>
                  <span className="font-semibold text-foreground">₹{basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Number of People:</span>
                  <span className="font-semibold text-foreground">{formData.people}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Transport Multiplier:</span>
                  <span className="font-semibold text-foreground">
                    x{priceMultipliers[formData.transport as keyof typeof priceMultipliers]}
                  </span>
                </div>
                <div className="border-t border-accent/20 pt-2 flex justify-between">
                  <span className="font-bold text-foreground">Total Price:</span>
                  <span className="text-2xl font-bold text-primary">₹{calculatePrice()}</span>
                </div>
              </div>
            </Card>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6"
            >
              Confirm Booking
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
