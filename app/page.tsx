"use client"

import { useContext, useEffect } from "react"
import { NavigationContext } from "@/app/layout-client"
import Dashboard from "@/components/pages/dashboard"

export default function Home() {
  const { setCurrentPage } = useContext(NavigationContext)

  useEffect(() => {
    setCurrentPage("dashboard")
  }, [setCurrentPage])

  return <Dashboard />
}
