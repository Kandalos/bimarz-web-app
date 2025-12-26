import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Coffee, Book, Users, Heart } from "lucide-react";

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              کافه‌ کتاب شالپلاته
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              خانه‌ای برای فرهنگ، کتاب، موسیقی و دورهمی ایرانیان
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* About Cafe */}
          <div className="mb-16">
            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-8 md:p-12 wood-texture">
              <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-6 text-center">
                ما که هستیم
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  کافه‌ کتاب شالپلاته در سال ۲۰۱۷ به مدیریت پدرام فرهادی‌فر افتتاح
                  شد؛ با ایده‌ای ساده اما دوراندیشانه: ایجاد فضایی فرهنگی با
                  محوریت تدریس موسیقی و گردهمایی ایرانی‌ها و دوست‌داران فرهنگ و
                  هنر.
                </p>

                <p>
                  از همان ابتدا، کافه‌ شالپلاته به محلی برای اجرای کنسرت‌های کوچک،
                  برنامه‌های هنری و رویدادهای فرهنگی تبدیل شد و خیلی زود مورد
                  استقبال گسترده‌ی ایرانیان مقیم کلن-آلمان قرار گرفت. برنامه‌هایی
                  مانند داستان‌خوانی، نمایشنامه‌خوانی، رونمایی کتاب، نمایش فیلم،
                  اجراهای موسیقی زنده، استندآپ کمدی و سایر رویدادهای هنری متنوع،
                  هویت این فضا را شکل دادند.
                </p>

                <p>
                  به‌تدریج کافه کتاب شالپلاته جایگاه خود را نه‌تنها در شهر کلن،
                  بلکه در سراسر اروپا پیدا کرد؛ به‌گونه‌ای که امروز به یکی از
                  توقف‌گاه‌های مهم هنرمندان و فعالان فرهنگی ایرانی تبدیل شده است.
                </p>

                <p>
                  در کنار این فعالیت‌ها، بخش کتاب‌فروشی نیز در سال ۲۰۱۹
                  راه‌اندازی شد؛ و از آن زمان تا امروز می‌توانید کتاب دلخواه‌تان
                  را بردارید، ورق بزنید و بخوانید. همچنین تازه‌ترین نشریات و
                  مجلات روز ایران نیز همیشه در دسترس هستند.
                </p>

                <p>
                  در کافه‌ کتاب شالپلاته کافی‌ست قهوه، دم‌نوش یا عرقیجاتی که
                  مستقیم از ایران می‌رسد را سفارش دهید تا بتوانید ساعت‌ها در
                  فضایی صمیمی بنشینید، کتاب بخوانید، موسیقی گوش دهید و از محیطی
                  آرام و فرهنگی لذت ببرید. اینجا فقط یک کافه نیست؛
                  <strong> خانه‌ی ما در غربت است.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">
                کافه‌ای صمیمی
              </h3>
              <p className="text-sm text-muted-foreground">
                قهوه، دم‌نوش و نوشیدنی‌هایی با حال‌وهوای خانه
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">
                کتاب و نشریات
              </h3>
              <p className="text-sm text-muted-foreground">
                کتاب‌فروشی فعال با تازه‌ترین کتاب‌ها و مجلات فارسی
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">
                رویدادهای فرهنگی
              </h3>
              <p className="text-sm text-muted-foreground">
                کنسرت، کتاب‌خوانی، فیلم، نمایشنامه و اجراهای زنده
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-wood-light/40 p-6 wood-texture text-center">
              <div className="bg-wood-light/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-wood-medium" />
              </div>
              <h3 className="font-bold text-wood-dark mb-2">
گالری              </h3>
              <p className="text-sm text-muted-foreground">
                جایی برای بودن، گفتگو، شنیدن و احساس تعلق
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
