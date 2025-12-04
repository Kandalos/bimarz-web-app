import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "نشست نقد و بررسی کتاب رصدخانه خاموش",
    date: "۱۵ فروردین ۱۴۰۴",
    time: "ساعت ۱۷:۰۰",
    location: "سالن همایش کتابخانه ملی",
    description: "گفتگو با نویسنده و منتقدان ادبی درباره این اثر تکان‌دهنده",
    type: "نشست ادبی",
    image: "/book-discussion-event-literary.jpg",
  },
  {
    id: 2,
    title: "رونمایی از مجموعه داستان‌های کوتاه بهاری",
    date: "۲۲ فروردین ۱۴۰۴",
    time: "ساعت ۱۸:۳۰",
    location: "فرهنگسرای نیاوران",
    description: "معرفی آثار جدید نویسندگان جوان و استعدادهای نوظهور",
    type: "رونمایی",
    image: "/book-launch-ceremony-spring.jpg",
  },
]
// </CHANGE>

export function EventsSection() {
  return (
    <section id="events" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <i className="lni lni-calendar text-3xl text-wood-dark"></i>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            رویدادها و اطلاعیه‌ها
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            از جدیدترین رویدادهای ادبی و فرهنگی ما مطلع شوید
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-card rounded-lg overflow-hidden border-2 border-wood-medium/20 hover:border-wood-dark/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 wood-texture"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/60 to-transparent"></div>

                {/* Event Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-wood-dark text-white rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Decorative Wood Border */}
              <div className="absolute inset-0 border-4 border-wood-medium/10 rounded-lg pointer-events-none"></div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-balance group-hover:text-wood-dark transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-wood-dark flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-wood-dark flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-wood-dark flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                <Button
                  variant="outline"
                  className="w-full border-wood-medium hover:bg-wood-dark hover:text-white transition-all duration-300 bg-transparent"
                >
                  ثبت‌نام در رویداد
                </Button>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-wood-medium/30 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-wood-medium/30 rounded-bl-lg"></div>
            </div>
          ))}
        </div>
        {/* </CHANGE> */}

        <div className="text-center mt-12">
          <Button size="lg" className="bg-wood-dark hover:bg-wood-dark/90 text-white px-8 py-6 text-lg">
            مشاهده همه رویدادها
          </Button>
        </div>
      </div>
    </section>
  )
}
