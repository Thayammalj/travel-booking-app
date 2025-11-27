"use client"

import { type ReactNode, createContext, useState } from "react"
import Sidebar from "@/components/sidebar"

export const NavigationContext = createContext<any>(null)

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode
}) {
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </NavigationContext.Provider>
  )
}
