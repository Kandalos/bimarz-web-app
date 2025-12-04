import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, Users, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: BookOpen, label: "کتاب منتشر شده", value: "500+" },
    { icon: Users, label: "نویسنده همکار", value: "150+" },
    { icon: Award, label: "جایزه دریافتی", value: "25+" },
    { icon: TrendingUp, label: "سال تجربه", value: "15+" },
  ]

  const values = [
    {
      title: "کیفیت برتر",
      description: "تعهد به چاپ و تولید کتاب‌های با کیفیت بالا و استانداردهای جهانی",
    },
    {
      title: "حمایت از نویسندگان",
      description: "پشتیبانی کامل از نویسندگان در تمام مراحل تولید و انتشار کتاب",
    },
    {
      title: "نوآوری",
      description: "استفاده از جدیدترین روش‌های نشر و توزیع در صنعت کتاب",
    },
    {
      title: "مسئولیت اجتماعی",
      description: "ترویج فرهنگ کتابخوانی و دسترسی آسان به منابع علمی و ادبی",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-wood-light via-[#F5E6D3] to-wood-light">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/publishing-house-interior.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-wood-dark/75"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <img src="/logo.svg" alt="Logo" className="w-32 h-32 mx-auto mb-6 filter brightness-0 invert opacity-90" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-wood-light mb-6 text-balance">
            درباره نشر بی‌مرز
          </h1>

          <p className="text-xl md:text-2xl text-wood-light/90 leading-relaxed text-pretty max-w-3xl mx-auto">
            پلی میان نویسنده و خواننده، خالق آثار ماندگار ادبی و علمی
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="wood-texture bg-wood-light/50 rounded-2xl p-12 border-4 border-wood-medium/40 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-8 text-center">ماموریت ما</h2>
            <p className="text-lg md:text-xl text-wood-dark/80 leading-relaxed text-pretty text-center mb-8">
              نشر بی‌مرز با هدف ارتقای فرهنگ کتابخوانی و حمایت از نویسندگان ایرانی تاسیس شده است. ما معتقدیم که هر
              نویسنده‌ای حق دارد صدایش شنیده شود و هر خواننده‌ای باید به کتاب‌های با کیفیت دسترسی داشته باشد.
            </p>
            <p className="text-lg md:text-xl text-wood-dark/80 leading-relaxed text-pretty text-center">
              با بیش از ۱۵ سال تجربه در صنعت نشر، ما به ارائه خدمات حرفه‌ای از ویراستاری تا چاپ و توزیع متعهد هستیم. تیم
              ما از متخصصان با تجربه در زمینه‌های مختلف ادبی، علمی و هنری تشکیل شده است.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-wood-medium/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-16 text-center">دستاوردهای ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="wood-texture bg-wood-light rounded-xl p-8 border-3 border-wood-medium/40 shadow-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-12 h-12 text-wood-dark mx-auto mb-4" />
                <div className="text-4xl font-bold text-wood-dark mb-2">{stat.value}</div>
                <div className="text-lg text-wood-dark/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-16 text-center">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="wood-texture bg-wood-light/50 rounded-xl p-8 border-3 border-wood-medium/40 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-wood-dark mb-4">{value.title}</h3>
                <p className="text-lg text-wood-dark/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-wood-medium/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-6">آماده همکاری با ما هستید؟</h2>
          <p className="text-xl text-wood-dark/70 mb-8 leading-relaxed">
            اگر نویسنده هستید و می‌خواهید کتاب خود را منتشر کنید، یا به دنبال کتاب‌های با کیفیت هستید، با ما در تماس
            باشید.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="px-8 py-4 bg-wood-dark text-wood-light rounded-lg font-bold hover:bg-wood-medium transition-colors shadow-lg"
            >
              تماس با ما
            </a>
            <a
              href="/shop"
              className="px-8 py-4 bg-wood-light text-wood-dark rounded-lg font-bold border-3 border-wood-dark hover:bg-wood-medium/20 transition-colors shadow-lg"
            >
              مشاهده کتاب‌ها
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
