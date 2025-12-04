interface Book {
  id: number
  title: string
  author: string
  description: string
  year: string
  genre: string
  image: string
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-lg mb-6 bg-wood-light/20 aspect-[2/3] shadow-lg border-2 border-wood-medium/30 wood-texture">
        <img
          src={book.image || "/placeholder.svg"}
          alt={`جلد ${book.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-wood-dark/60">
          <span>{book.genre}</span>
          <span>•</span>
          <span>{book.year}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-wood-dark">{book.title}</h3>
        <p className="text-lg text-wood-dark/70">نویسنده: {book.author}</p>
        <p className="text-base leading-relaxed text-pretty text-wood-dark/80">{book.description}</p>
        <button className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group/btn mt-4 text-wood-medium hover:text-wood-dark">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover/btn:-translate-x-1"
          >
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>اطلاعات بیشتر</span>
        </button>
      </div>
    </article>
  )
}
