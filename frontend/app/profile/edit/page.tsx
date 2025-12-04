"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: "علی محمدی",
    email: "ali.mohammadi@example.com",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    postNumber: "۱۲۳۴۵۶۷۸۹۰",
    address: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("اطلاعات با موفقیت ذخیره شد")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-wood-medium hover:text-wood-dark mb-6 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>بازگشت به پروفایل</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-wood-dark mb-8">ویرایش پروفایل</h1>

          <Card className="border-2 border-wood-light/40 wood-texture">
            <CardHeader>
              <CardTitle className="text-wood-dark">اطلاعات شخصی</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Avatar Upload */}
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="w-32 h-32 mb-4 border-4 border-wood-light">
                    <AvatarImage src="/placeholder.svg?height=120&width=120" alt="Profile" />
                    <AvatarFallback className="text-2xl bg-wood-light text-white">ع م</AvatarFallback>
                  </Avatar>
                  <Button type="button" variant="outline" className="border-wood-medium text-wood-dark bg-transparent">
                    تغییر تصویر
                  </Button>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-wood-dark">
                    نام و نام خانوادگی
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-wood-light focus:border-wood-medium"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-wood-dark">
                    ایمیل
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-wood-light focus:border-wood-medium"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-wood-dark">
                    شماره تماس
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-wood-light focus:border-wood-medium"
                    required
                  />
                </div>

                {/* Post Number */}
                <div className="space-y-2">
                  <Label htmlFor="postNumber" className="text-wood-dark">
                    کد پستی
                  </Label>
                  <Input
                    id="postNumber"
                    name="postNumber"
                    value={formData.postNumber}
                    onChange={handleChange}
                    className="border-wood-light focus:border-wood-medium"
                    required
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-wood-dark">
                    آدرس
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border-wood-light focus:border-wood-medium"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-wood-medium hover:bg-wood-dark text-white">
                    ذخیره تغییرات
                  </Button>
                  <Link href="/profile" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-wood-medium text-wood-dark bg-transparent"
                    >
                      انصراف
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
