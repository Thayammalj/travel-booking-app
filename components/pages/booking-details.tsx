"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin } from "lucide-react"

export default function BookingDetails() {
  const [bookings, setBookings] = useState<any[]>([])

  useEffect(() => {
    // Load bookings from localStorage
    const stored = localStorage.getItem("bookings")
    if (stored) {
      setBookings(JSON.parse(stored))
    }
  }, [])

  const getTransportIcon = (transport: string) => {
    const icons: Record<string, string> = {
      bus: "🚌",
      train: "🚆",
      flight: "✈️",
    }
    return icons[transport] || "🚗"
  }

  return (
    <div className="p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">Booking Details</h1>
          <p className="text-lg text-muted-foreground">View all your confirmed travel bookings</p>
        </div>

        {bookings.length === 0 ? (
          <Card className="p-12 text-center bg-card border-border">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground">No bookings yet. Start exploring destinations!</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Booking ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Transport</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">People</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Total Price</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr
                      key={booking.id}
                      className={`border-b border-border hover:bg-muted/50 ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/20"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-foreground font-mono">
                        #{booking.id.toString().slice(-6)}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{booking.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{booking.email}</td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        <span className="flex items-center gap-2">
                          {getTransportIcon(booking.transport)}
                          <span className="capitalize">{booking.transport}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{booking.people}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">
                        ₹{booking.totalPrice.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          Confirmed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="p-4 bg-card border-border">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Booking ID: #{booking.id.toString().slice(-6)}</p>
                        <p className="font-bold text-foreground text-lg">{booking.name}</p>
                      </div>
                      <span className="flex items-center gap-1 text-green-600 font-semibold">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">{booking.email}</p>
                      <p className="text-muted-foreground">{booking.phone}</p>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="flex items-center gap-2 text-foreground">
                          {getTransportIcon(booking.transport)}
                          <span className="capitalize">{booking.transport}</span>
                        </span>
                        <span className="text-foreground">
                          {booking.people} {"person" + (booking.people > 1 ? "s" : "")}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-foreground">Total:</span>
                        <span className="text-lg font-bold text-primary">₹{booking.totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Stats Summary */}
        {bookings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Total Bookings</p>
              <p className="text-3xl font-bold text-foreground">{bookings.length}</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Total Travelers</p>
              <p className="text-3xl font-bold text-foreground">{bookings.reduce((sum, b) => sum + b.people, 0)}</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
              <p className="text-3xl font-bold text-primary">
                ₹{bookings.reduce((sum, b) => sum + b.totalPrice, 0).toLocaleString()}
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
