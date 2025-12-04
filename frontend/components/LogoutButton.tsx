"use client"

import * as React from "react"
import { useAuth } from "@/components/useAuth"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

/**
 * A simple button component that triggers the global logout function.
 */
export function LogoutButton() {
  // Access the logout function from the global context
  const { logout, isAuthenticated } = useAuth()
  const router = useRouter()
  
  const handleLogout = () => {
    // 1. Call the global logout function (clears tokens and state)
    logout()
    // 2. Redirect the user to the homepage or login page
    router.push('/') 
  }
  
  if (!isAuthenticated) {
      return null; // Don't show the button if the user is already logged out
  }

  return (
    <Button 
      onClick={handleLogout} 
      className="bg-red-600 hover:bg-red-700 text-white flex items-center shadow-lg transition-all duration-200"
    >
      <LogOut className="w-5 h-5 ml-2" />
      خروج
    </Button>
  )
}