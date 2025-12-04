"use client"

import React from "react"
import { AuthProvider } from "@/components/useAuth"

/**
 * Wraps all global client-side providers.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
