"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function PostsPage() {
  // Sample newsletter post data
  const post = {
    title: "رویدادهای ادبی بهار ۱۴۰۳",
    date: "۱۵ فروردین ۱۴۰۳",
    author: "تیم تحریریه",
    image: "/spring-literary-events.jpg",
    content: `
# رویدادهای ادبی بهار ۱۴۰۳

بهار امسال با برنامه‌های متنوع و جذابی همراه خواهد بود. در این خبرنامه، به معرفی برخی از مهم‌ترین رویدادهای ادبی فصل بهار می‌پردازیم.

## نشست کتابخوانی

نشست‌های کتابخوانی ما در بهار با کتاب‌های منتخب ادبیات معاصر برگزار خواهد شد. این نشست‌ها فرصتی عالی برای تبادل نظر و آشنایی با دیدگاه‌های مختلف درباره آثار ادبی است.

تاریخ: هر دوشنبه، ساعت ۱۷:۰۰
مکان: سالن اصلی انتشارات

## رونمایی کتاب جدید

رونمایی از کتاب "سفر به ناکجاآباد" نوشته علی محمدی در ۲۵ فروردین برگزار خواهد شد. این اثر داستانی است درباره جستجوی معنا در دنیای مدرن.

## کارگاه نویسندگی خلاق

کارگاه نویسندگی خلاق ما با حضور نویسندگان برجسته در اردیبهشت ماه آغاز می‌شود. این کارگاه برای علاقه‌مندان به نویسندگی داستان کوتاه و رمان طراحی شده است.

ظرفیت محدود - ثبت‌نام تا ۳۰ فروردین

## نمایشگاه کتاب

نمایشگاه بهاره کتاب با حضور ناشران و نویسندگان مختلف در خرداد ماه برگزار خواهد شد. این نمایشگاه فرصتی است برای آشنایی با جدیدترین انتشارات و خرید کتاب با تخفیف ویژه.

---

برای اطلاعات بیشتر و ثبت‌نام در رویدادها، با ما تماس بگیرید.
    `,
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-2xl border-2 border-wood-light/40 wood-texture p-8 md:p-12 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-wood-medium hover:text-wood-dark mb-6 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              <span>بازگشت به صفحه اصلی</span>
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wood-dark mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-wood-medium mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="h-1 w-24 bg-wood-medium rounded-full" />
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-wood-light/40 p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-wood-dark">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-wood-dark mt-8 mb-4">
                      {paragraph.replace("# ", "")}
                    </h1>
                  )
                } else if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-wood-dark mt-6 mb-3">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("---")) {
                  return <hr key={index} className="my-8 border-wood-light" />
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-wood-light/20 rounded-lg border-2 border-wood-light/40 p-6 mb-12">
            <h3 className="text-xl font-bold text-wood-dark mb-4">اشتراک‌گذاری</h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-wood-medium text-wood-dark hover:bg-wood-light/30 bg-transparent"
              >
                تلگرام
              </Button>
              <Button
                variant="outline"
                className="border-wood-medium text-wood-dark hover:bg-wood-light/30 bg-transparent"
              >
                واتساپ
              </Button>
              <Button
                variant="outline"
                className="border-wood-medium text-wood-dark hover:bg-wood-light/30 bg-transparent"
              >
                کپی لینک
              </Button>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
