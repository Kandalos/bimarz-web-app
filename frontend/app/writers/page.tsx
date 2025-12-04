import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, Award, Calendar } from "lucide-react"

export default function WritersPage() {
  const writers = [
    {
      id: 1,
      name: "دکتر محمد رضایی",
      image: "/writer-portrait-1.jpg",
      bio: "نویسنده و پژوهشگر برجسته در حوزه ادبیات معاصر فارسی با بیش از ۲۰ سال تجربه تدریس و تالیف",
      genre: "ادبیات معاصر",
      books: ["سایه‌های شهر", "باغ خاطرات", "آوای سکوت"],
      awards: ["جایزه کتاب سال ۱۴۰۰", "جایزه ادبی گلشیری"],
      joinYear: "۱۳۹۵",
    },
    {
      id: 2,
      name: "فاطمه احمدی",
      image: "/writer-portrait-2.jpg",
      bio: "شاعر و نویسنده داستان کوتاه، برنده جوایز متعدد ادبی و عضو انجمن نویسندگان ایران",
      genre: "شعر و داستان کوتاه",
      books: ["باران در شب", "پرنده‌های مهاجر", "نقطه‌های روشن"],
      awards: ["جایزه شعر جوان", "جایزه داستان کوتاه فجر"],
      joinYear: "۱۳۹۷",
    },
    {
      id: 3,
      name: "علی کریمی",
      image: "/writer-portrait-3.jpg",
      bio: "نویسنده رمان‌های تاریخی و اجتماعی، با تمرکز بر تاریخ معاصر ایران و مسائل اجتماعی",
      genre: "رمان تاریخی",
      books: ["خیابان‌های قدیمی", "زمستان ۵۷", "روزهای آرام"],
      awards: ["جایزه بهترین رمان سال", "جایزه کتاب ماه"],
      joinYear: "۱۳۹۳",
    },
    {
      id: 4,
      name: "مریم صادقی",
      image: "/writer-portrait-4.jpg",
      bio: "نویسنده کتاب‌های کودک و نوجوان، مترجم و کارگردان تئاتر کودک با آثار متعدد منتشر شده",
      genre: "ادبیات کودک و نوجوان",
      books: ["ماجراهای پری کوچولو", "سفر به سرزمین رنگین‌کمان", "دوستان جنگل"],
      awards: ["جایزه کتاب کودک و نوجوان", "جایزه تصویرگری"],
      joinYear: "۱۳۹۸",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-wood-light via-[#F5E6D3] to-wood-light">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-wood-dark mb-6 text-balance">نویسندگان ما</h1>
          <p className="text-xl md:text-2xl text-wood-dark/70 leading-relaxed text-pretty max-w-3xl mx-auto">
            آشنایی با نویسندگان برجسته همکار نشر بی‌مرز
          </p>
        </div>
      </section>

      {/* Writers Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {writers.map((writer, index) => (
              <div
                key={writer.id}
                className={`wood-texture bg-wood-light rounded-2xl overflow-hidden border-4 border-wood-medium/40 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                {/* Writer Image */}
                <div className="lg:w-1/3 relative overflow-hidden">
                  <img
                    src={writer.image || "/placeholder.svg"}
                    alt={writer.name}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/50 to-transparent"></div>
                </div>

                {/* Writer Info */}
                <div className="lg:w-2/3 p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-2">{writer.name}</h2>
                      <p className="text-lg text-wood-dark/60 font-medium">{writer.genre}</p>
                    </div>
                    <div className="flex items-center gap-2 text-wood-dark/60">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">عضو از {writer.joinYear}</span>
                    </div>
                  </div>

                  <p className="text-lg text-wood-dark/80 leading-relaxed mb-6">{writer.bio}</p>

                  {/* Books */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-wood-dark" />
                      <h3 className="text-xl font-bold text-wood-dark">آثار منتشر شده:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {writer.books.map((book, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-wood-medium/30 text-wood-dark rounded-lg text-sm font-medium border-2 border-wood-medium/40"
                        >
                          {book}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-wood-dark" />
                      <h3 className="text-xl font-bold text-wood-dark">جوایز و افتخارات:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {writer.awards.map((award, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-wood-dark/10 text-wood-dark rounded-lg text-sm font-medium border-2 border-wood-dark/20"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-wood-medium/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-6">نویسنده هستید؟</h2>
          <p className="text-xl text-wood-dark/70 mb-8 leading-relaxed">
            اگر به دنبال انتشار اثر خود هستید، ما آماده همکاری با شما هستیم. با تیم حرفه‌ای نشر بی‌مرز در تماس باشید.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-wood-dark text-wood-light rounded-lg font-bold hover:bg-wood-medium transition-colors shadow-lg"
          >
            درخواست همکاری
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
