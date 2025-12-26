"use client"

import { useEffect, useState } from "react"
import axiosInstance from "@/lib/axiosInstance"
import { BookCard } from "@/components/book-card"

interface Book {
  id: number
  title: string
  author: string
  description: string
  year: string
  genre: string
  image: string
}

export function BookShowcase() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    async function fetchPublishedBooks() {
      try {
        const res = await axiosInstance.get("v1/shop/books/recommended/published/")
        const fetched = res.data?.books || []

        const normalized: Book[] = fetched.map((book: any) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          description: book.description,
          year: book.year || "—",
          genre: book.genre || "—",
          image: book.cover_image,
        }))

        setBooks(normalized.slice(0, 2))
      } catch (err) {
        console.error("Failed to load published books:", err)
      }
    }

    fetchPublishedBooks()
  }, [])

  return (
    <section id="books" className="py-24 px-6 wood-texture bg-wood-light/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            تازه‌های تشر 
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
تازه‌ها در کافه کتاب‌ شالپلاته          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p className="text-center text-muted-foreground col-span-2">
              در حال بارگذاری کتاب‌ها...
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
