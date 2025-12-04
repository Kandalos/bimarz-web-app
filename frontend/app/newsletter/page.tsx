"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function NewsletterPage() {
  const [preview, setPreview] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-wood-dark mb-8 text-center">نوشتن خبرنامه</h1>

          <div className="flex gap-4 mb-8 justify-center">
            <Button
              onClick={() => setPreview(false)}
              variant={!preview ? "default" : "outline"}
              className={!preview ? "bg-wood-medium hover:bg-wood-dark" : ""}
            >
              ویرایش
            </Button>
            <Button
              onClick={() => setPreview(true)}
              variant={preview ? "default" : "outline"}
              className={preview ? "bg-wood-medium hover:bg-wood-dark" : ""}
            >
              پیش‌نمایش
            </Button>
          </div>

          {!preview ? (
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-wood-light/40 wood-texture">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="newsletter-title" className="text-wood-dark font-bold mb-2 block">
                    عنوان خبرنامه
                  </Label>
                  <Input
                    id="newsletter-title"
                    placeholder="عنوان خبرنامه را وارد کنید"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-wood-light focus:border-wood-medium text-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="newsletter-date" className="text-wood-dark font-bold mb-2 block">
                    تاریخ انتشار
                  </Label>
                  <Input id="newsletter-date" type="date" className="border-wood-light focus:border-wood-medium" />
                </div>

                <div>
                  <Label htmlFor="newsletter-content" className="text-wood-dark font-bold mb-2 block">
                    محتوای خبرنامه
                  </Label>
                  <Textarea
                    id="newsletter-content"
                    placeholder="محتوای خبرنامه را در اینجا بنویسید..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={20}
                    className="border-wood-light focus:border-wood-medium font-sans leading-relaxed"
                  />
                  <p className="text-sm text-wood-medium mt-2">
                    از این بخش برای نوشتن درباره رویدادهای پیش رو، معرفی کتاب‌های جدید و اخبار انتشارات استفاده کنید.
                  </p>
                </div>

                <div>
                  <Label htmlFor="newsletter-image" className="text-wood-dark font-bold mb-2 block">
                    تصویر شاخص
                  </Label>
                  <Input
                    id="newsletter-image"
                    type="file"
                    accept="image/*"
                    className="border-wood-light focus:border-wood-medium"
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-wood-medium hover:bg-wood-dark text-white font-bold py-3">
                    ذخیره پیش‌نویس
                  </Button>
                  <Button className="flex-1 bg-wood-dark hover:bg-wood-medium text-white font-bold py-3">
                    انتشار خبرنامه
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white p-12 rounded-lg shadow-lg border-2 border-wood-light/40">
              <article className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold text-wood-dark mb-4 text-center">{title || "عنوان خبرنامه"}</h1>
                <p className="text-center text-wood-medium mb-8">{new Date().toLocaleDateString("fa-IR")}</p>
                <div className="text-wood-dark leading-relaxed whitespace-pre-wrap">
                  {content || "محتوای خبرنامه در اینجا نمایش داده می‌شود..."}
                </div>
              </article>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
