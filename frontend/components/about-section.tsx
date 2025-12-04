export function AboutSection() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/vintage-library-books-wooden-shelves.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-wood-dark/80"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-8">
          <img src="/bimarz.svg" alt="Logo" className="w-48 h-48 mx-auto mb-6  opacity-90" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wood-light mb-6 text-balance">نشر بی مرز</h2>

        <p className="text-lg md:text-xl text-wood-light/90 leading-relaxed text-pretty max-w-3xl mx-auto">
          با ما در نشر بی‌مرز با نگاهی تازه به دنیای نشر آماده‌ایم؛ چاپ حرفه‌ای٬ پشتیبانی واقعی از نویسنده‌ها٬ همراه شما در مسیر خلق کتاب های ماندگار. 
نویسنده و خواننده عزیز جای شما به عنوان نویسنده و خواننده کتاب در بی‌مرز خالیست! 
        </p>
      </div>
    </section>
  )
}
