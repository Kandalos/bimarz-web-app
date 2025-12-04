import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Coffee, Book, Users, Heart } from "lucide-react"

export default function CafePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cozy-cafe-with-books-and-coffee.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">کافه کتاب بی‌مرز</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">جایی که قهوه و کتاب در هم می‌آمیزند</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* About Cafe */}
          <div className="mb-16">
            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-8 md:p-12 wood-texture">
              <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-6 text-center">درباره کافه ما</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  کافه کتاب بی‌مرز، فضایی است دنج و آرام که در آن می‌توانید با یک فنجان قهوه معطر، در دنیای کتاب‌ها غرق
                  شوید. ما باور داریم که بهترین لحظات زندگی، آن‌هایی هستند که با یک کتاب خوب و یک نوشیدنی دلچسب سپری
                  می‌شوند.
                </p>
                <p>
                  کافه ما با طراحی گرم و دلنشین، قفسه‌های پر از کتاب‌های منتخب، و فضایی آرام برای مطالعه و گفتگو، مکانی
                  ایده‌آل برای کتاب‌دوستان و علاقه‌مندان به فرهنگ است. چه به تنهایی بیایید و چه با دوستان، ما آماده‌ایم تا
                  تجربه‌ای به‌یادماندنی برای شما خلق کنیم.
                </p>
                <p>
                  در کنار قهوه‌های تخصصی و نوشیدنی‌های متنوع، ما میزبان رویدادهای فرهنگی، باشگاه کتاب‌خوانی، و نشست‌های ادبی
                  هستیم. کافه بی‌مرز، بیش از یک کافه است؛ جامعه‌ای از اهل فکر و فرهنگ است.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">قهوه تخصصی</h3>
              <p className="text-sm text-muted-foreground">بهترین دانه‌های قهوه از سراسر جهان</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">کتابخانه غنی</h3>
              <p className="text-sm text-muted-foreground">هزاران کتاب در دسترس برای مطالعه</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">رویدادهای فرهنگی</h3>
              <p className="text-sm text-muted-foreground">نشست‌های ادبی و باشگاه کتاب‌خوانی</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">فضای دلنشین</h3>
              <p className="text-sm text-muted-foreground">محیطی آرام و الهام‌بخش</p>
            </div>
          </div>

          {/* Menu Highlights */}
          <div className="bg-white rounded-lg border-2 border-wood-light/40 p-8 md:p-12 wood-texture">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-8 text-center">منوی ویژه</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-wood-medium mb-4">نوشیدنی‌های گرم</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">اسپرسو</span>
                    <span className="text-muted-foreground">۳۵,۰۰۰ تومان</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">کاپوچینو</span>
                    <span className="text-muted-foreground">۴۵,۰۰۰ تومان</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">لاته</span>
                    <span className="text-muted-foreground">۵۰,۰۰۰ تومان</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">موکا</span>
                    <span className="text-muted-foreground">۵۵,۰۰۰ تومان</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-wood-medium mb-4">نوشیدنی‌های سرد</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">آیس لاته</span>
                    <span className="text-muted-foreground">۵۵,۰۰۰ تومان</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">فراپوچینو</span>
                    <span className="text-muted-foreground">۶۰,۰۰۰ تومان</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">آیس آمریکانو</span>
                    <span className="text-muted-foreground">۴۵,۰۰۰ تومان</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-wood-dark">شیک شکلات</span>
                    <span className="text-muted-foreground">۵۵,۰۰۰ تومان</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
