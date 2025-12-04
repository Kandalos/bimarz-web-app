import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BookShowcase } from "@/components/book-showcase"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { PartnershipSection } from "@/components/partnership-section"
import { RecommendedBooksSection } from "@/components/recommended-books-section"
import { MostBoughtBooksSection } from "@/components/most-bought-books-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-32 pointer-events-none z-10 opacity-40 burned-edge-left">
        <div
          className="h-full w-full bg-gradient-to-r from-[#2c1810] via-[#3d2415]/80 to-transparent"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000' preserveAspectRatio='none'%3E%3Cpath d='M100,0 L100,1000 L0,1000 Q10,950 5,900 Q15,850 8,800 Q12,750 6,700 Q14,650 7,600 Q11,550 5,500 Q13,450 8,400 Q10,350 6,300 Q15,250 7,200 Q12,150 5,100 Q10,50 0,0 Z' fill='black'/%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000' preserveAspectRatio='none'%3E%3Cpath d='M100,0 L100,1000 L0,1000 Q10,950 5,900 Q15,850 8,800 Q12,750 6,700 Q14,650 7,600 Q11,550 5,500 Q13,450 8,400 Q10,350 6,300 Q15,250 7,200 Q12,150 5,100 Q10,50 0,0 Z' fill='black'/%3E%3C/svg%3E\")",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        />
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-32 pointer-events-none z-10 opacity-40 burned-edge-right">
        <div
          className="h-full w-full bg-gradient-to-l from-[#2c1810] via-[#3d2415]/80 to-transparent"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,1000 L100,1000 Q90,950 95,900 Q85,850 92,800 Q88,750 94,700 Q86,650 93,600 Q89,550 95,500 Q87,450 92,400 Q90,350 94,300 Q85,250 93,200 Q88,150 95,100 Q90,50 100,0 Z' fill='black'/%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,1000 L100,1000 Q90,950 95,900 Q85,850 92,800 Q88,750 94,700 Q86,650 93,600 Q89,550 95,500 Q87,450 92,400 Q90,350 94,300 Q85,250 93,200 Q88,150 95,100 Q90,50 100,0 Z' fill='black'/%3E%3C/svg%3E\")",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        />
      </div>

      <Navbar />
      <HeroSection />
      <EventsSection />
      <PartnershipSection />
      <AboutSection />
      <BookShowcase />
      <RecommendedBooksSection />
      <MostBoughtBooksSection />
      <Footer />
    </main>
  )
}
