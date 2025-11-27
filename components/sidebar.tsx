"use client"

import { useContext } from "react"
import { NavigationContext } from "@/app/layout-client"
import { MapPin, Plane, BarChart3, PhoneCall, Book } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  const { currentPage, setCurrentPage } = useContext(NavigationContext)

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3, href: "/" },
    { id: "places", label: "Places", icon: MapPin, href: "/places" },
    { id: "bookings", label: "Booking Details", icon:Book, href: "/bookings" },
    { id: "contact", label: "Contact Us", icon: PhoneCall, href: "/contact" },
  ]

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Plane className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-sidebar-foreground">Travel</h1>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
