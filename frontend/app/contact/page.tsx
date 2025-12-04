import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wood-dark mb-4">تماس با ما</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ما همیشه مشتاق شنیدن نظرات شما هستیم. با ما در ارتباط باشید
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-8 wood-texture">
              <h2 className="text-2xl font-bold text-wood-dark mb-6">فرم تماس</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wood-dark mb-2">
                    نام و نام خانوادگی
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="border-wood-medium/30 focus:border-wood-dark"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wood-dark mb-2">
                    ایمیل
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="border-wood-medium/30 focus:border-wood-dark"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wood-dark mb-2">
                    شماره تماس
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="border-wood-medium/30 focus:border-wood-dark"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-wood-dark mb-2">
                    موضوع
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="موضوع پیام خود را وارد کنید"
                    className="border-wood-medium/30 focus:border-wood-dark"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wood-dark mb-2">
                    پیام
                  </label>
                  <Textarea
                    id="message"
                    placeholder="پیام خود را بنویسید..."
                    rows={5}
                    className="border-wood-medium/30 focus:border-wood-dark resize-none"
                  />
                </div>

                <Button className="w-full bg-wood-medium hover:bg-wood-dark text-white">ارسال پیام</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg border-2 border-wood-light/40 p-8 wood-texture">
                <h2 className="text-2xl font-bold text-wood-dark mb-6">اطلاعات تماس</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-wood-light/50 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-wood-medium" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wood-dark mb-1">آدرس</h3>
                      <p className="text-muted-foreground">تهران، خیابان انقلاب، نبش خیابان فلسطین، پلاک ۱۲۳</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-wood-light/50 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-wood-medium" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wood-dark mb-1">تلفن</h3>
                      <p className="text-muted-foreground" dir="ltr">
                        +98 21 1234 5678
                      </p>
                      <p className="text-muted-foreground" dir="ltr">
                        +98 912 345 6789
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-wood-light/50 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-wood-medium" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wood-dark mb-1">ایمیل</h3>
                      <p className="text-muted-foreground">info@nashrbimarz.com</p>
                      <p className="text-muted-foreground">support@nashrbimarz.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border-2 border-wood-light/40 p-8 wood-texture">
                <h2 className="text-2xl font-bold text-wood-dark mb-4">ساعات کاری</h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>شنبه تا چهارشنبه:</span>
                    <span className="font-medium text-wood-dark">۹:۰۰ - ۱۸:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>پنج‌شنبه:</span>
                    <span className="font-medium text-wood-dark">۹:۰۰ - ۱۴:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>جمعه:</span>
                    <span className="font-medium text-wood-dark">تعطیل</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
