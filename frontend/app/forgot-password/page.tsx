// frontend/app/forgot-password/page.tsx
"use client"

import type React from "react"

import { useState } from "react"
// --- API Import ---
import apiService from "@/lib/apiService" 
// --- Your UI/Component Imports ---
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // --- NEW STATE FOR API MANAGEMENT ---
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  // -----------------------------------

  const handleRequest = async () => {
    setLoading(true)
    setApiError(null)

    try {
      // 1. POST request to Django/Djoser endpoint to trigger email
      // We assume the endpoint is: POST /api/v1/auth/users/reset_password/
      await apiService.post('v1/auth/users/reset_password/', { email }) 
      
      // 2. On successful API response, switch to the confirmation screen
      setIsSubmitted(true)

    } catch (err: any) {
      // 3. Handle errors (e.g., 400 Bad Request if email not found or invalid)
      let errorMessage = "خطا در ارسال. لطفاً آدرس ایمیل را بررسی کنید."
      if (err.response?.status === 400) {
          // If Django/Djoser sends specific field errors
          if (err.response.data.email) {
              errorMessage = `ایمیل: ${err.response.data.email.join(' ')}`
          } else {
              // General API error for invalid email/user not found
              errorMessage = "حساب کاربری با این ایمیل یافت نشد."
          }
      }
      setApiError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Trigger the API request
    handleRequest()
  }

  return (
    <main className="min-h-screen bg-background relative">
      {/* Bookshop background image (Your original code) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/classic-library-with-old-books-and-warm-lighting.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-wood-light/40 shadow-xl wood-texture backdrop-blur-sm bg-card/95">
              {!isSubmitted ? (
                <>
                  <CardHeader className="text-center space-y-2">
                    <div className="mx-auto w-16 h-16 bg-wood-light/20 rounded-full flex items-center justify-center mb-2">
                      <Mail className="w-8 h-8 text-wood-medium" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-wood-dark">فراموشی رمز عبور</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-wood-dark font-medium">
                          ایمیل
                        </Label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-medium" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pr-10 border-wood-light/60 focus:border-wood-medium"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* --- API Error Display --- */}
                      {apiError && (
                          <p className="text-sm text-red-500 text-center font-medium p-2 border border-red-200 rounded">
                              {apiError}
                          </p>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full bg-wood-medium hover:bg-wood-dark text-white"
                        disabled={loading} // Disable button while loading
                      >
                        {loading ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
                      </Button>

                      <div className="text-center text-sm text-muted-foreground">
                        <Link
                          href="/login"
                          className="text-wood-medium hover:text-wood-dark font-medium inline-flex items-center gap-1"
                        >
                          <ArrowRight className="w-4 h-4" />
                          بازگشت به صفحه ورود
                        </Link>
                      </div>
                    </form>
                  </CardContent>
                </>
              ) : (
                <>
                  {/* --- Success Screen (Your original code) --- */}
                  <CardHeader className="text-center space-y-2">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-wood-dark">ایمیل ارسال شد</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      لینک بازیابی رمز عبور به ایمیل شما ارسال شد
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="bg-wood-light/10 border border-wood-light/30 rounded-lg p-4 text-sm text-muted-foreground text-center leading-relaxed">
                      لطفا ایمیل خود را بررسی کنید و روی لینک ارسال شده کلیک کنید تا رمز عبور خود را تغییر دهید. اگر
                      ایمیل را دریافت نکردید، پوشه اسپم را بررسی کنید.
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      <Link
                        href="/login"
                        className="text-wood-medium hover:text-wood-dark font-medium inline-flex items-center gap-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                        بازگشت به صفحه ورود
                      </Link>
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}