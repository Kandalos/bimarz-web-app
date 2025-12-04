// frontend/app/reset-password/page.tsx
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
import { Lock, CheckCircle2 } from "lucide-react"
import { useSearchParams } from "next/navigation"

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  // NOTE: Assuming Django sends both 'token' and 'uid' (uidb64) as URL query parameters
  const token = searchParams.get("token")
  const uid = searchParams.get("uid") 

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  
  // --- NEW STATE FOR API MANAGEMENT ---
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  // -----------------------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setApiError(null)

    if (formData.password !== formData.confirmPassword) {
      setApiError("رمز عبور و تکرار آن یکسان نیستند")
      setLoading(false)
      return
    }

    if (!token || !uid) {
      setApiError("لینک بازیابی نامعتبر است. لطفاً درخواست جدید دهید.")
      setLoading(false)
      return
    }

    try {
        // POST request to the confirmation endpoint
        // Endpoint structure typically: POST /api/v1/auth/users/reset_password_confirm/
        await apiService.post('v1/auth/users/reset_password_confirm/', {
            uid: uid,           // UID from the URL
            token: token,       // Token from the URL
            new_password: formData.password,
        });

        // Success: Switch to the confirmation screen
        setIsSubmitted(true);

    } catch (err: any) {
        // Handle API errors (e.g., token expired, password too simple)
        let errorMessage = "لینک نامعتبر یا منقضی شده است. لطفا درخواست جدید دهید.";
        if (err.response?.data?.new_password) {
             errorMessage = `رمز عبور: ${err.response.data.new_password.join(' ')}`;
        } else if (err.response?.data?.detail) {
             errorMessage = err.response.data.detail;
        }
        setApiError(errorMessage);
    } finally {
        setLoading(false);
    }
  }

  // --- Display Link Invalid/Expired State ---
  // Renders if token or uid is missing, or if the API call failed due to invalid token
  if (!token || !uid) {
    return (
      <Card className="border-2 border-wood-light/40 shadow-xl wood-texture backdrop-blur-sm bg-card/95">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-wood-dark">لینک نامعتبر</CardTitle>
          <CardDescription className="text-muted-foreground">
            لینک بازیابی رمز عبور نامعتبر یا منقضی شده است
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Link href="/forgot-password" className="text-wood-medium hover:text-wood-dark font-medium">
              درخواست لینک جدید
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  // --- Display Password Reset Form ---
  return (
    <Card className="border-2 border-wood-light/40 shadow-xl wood-texture backdrop-blur-sm bg-card/95">
      {!isSubmitted ? (
        <>
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-wood-light/20 rounded-full flex items-center justify-center mb-2">
              <Lock className="w-8 h-8 text-wood-medium" />
            </div>
            <CardTitle className="text-3xl font-bold text-wood-dark">تغییر رمز عبور</CardTitle>
            <CardDescription className="text-muted-foreground">رمز عبور جدید خود را وارد کنید</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-wood-dark font-medium">
                  رمز عبور جدید
                </Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-medium" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="حداقل ۸ کاراکتر"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pr-10 border-wood-light/60 focus:border-wood-medium"
                    required
                    minLength={8}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-wood-dark font-medium">
                  تکرار رمز عبور جدید
                </Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-medium" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="رمز عبور را دوباره وارد کنید"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pr-10 border-wood-light/60 focus:border-wood-medium"
                    required
                    minLength={8}
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
                disabled={loading}
              >
                {loading ? 'در حال تغییر...' : 'تغییر رمز عبور'}
              </Button>
            </form>
          </CardContent>
        </>
      ) : (
        // --- Success State ---
        <>
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-wood-dark">رمز عبور تغییر کرد</CardTitle>
            <CardDescription className="text-muted-foreground">رمز عبور شما با موفقیت تغییر یافت</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="text-center">
              <Link href="/login">
                <Button className="bg-wood-medium hover:bg-wood-dark text-white">ورود به حساب کاربری</Button>
              </Link>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  )
}

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Bookshop background image (Your original code) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/elegant-bookshop-with-leather-bound-books-and-wood.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-md mx-auto">
            <ResetPasswordForm />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}