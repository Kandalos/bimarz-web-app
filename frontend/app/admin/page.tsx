"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Package, Plus, X, Edit2, Trash2, Grid3X3, List } from "lucide-react"

type Event = {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  category?: string
  tags?: string[]
}

type Book = {
  id: number
  title: string
  author: string
  pages: number
  year: number
  description: string
  cover?: string
  genre?: string
  isbn?: string
  price?: number
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"events" | "books">("books")
  const [booksViewMode, setBooksViewMode] = useState<"grid" | "list">("grid")
  const [eventsViewMode, setEventsViewMode] = useState<"grid" | "list">("grid")

  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "نشست کتابخوانی",
      date: "2024-03-15",
      time: "18:00",
      location: "سالن اصلی",
      description: "بحث و گفتگو درباره آخرین کتاب منتشر شده",
    },
    {
      id: 2,
      title: "رونمایی کتاب جدید",
      date: "2024-03-20",
      time: "17:00",
      location: "تالار وحدت",
      description: "معرفی و رونمایی از کتاب جدید نویسنده برجسته",
    },
  ])

  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "سفر به ستارگان",
      author: "علی محمدی",
      pages: 320,
      year: 1402,
      description: "داستانی جذاب درباره کاوش فضایی",
      genre: "fiction",
      cover: "https://example.com/book-cover.jpg",
    },
    {
      id: 2,
      title: "راز باغ",
      author: "سارا احمدی",
      pages: 280,
      year: 1401,
      description: "رمانی عاشقانه با پایانی غیرمنتظره",
      genre: "fiction",
      cover: "https://example.com/book-cover2.jpg",
    },
  ])

  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [editingBook, setEditingBook] = useState<Book | null>(null)
  const [showEventForm, setShowEventForm] = useState(false)
  const [showBookForm, setShowBookForm] = useState(false)

  const [eventFormData, setEventFormData] = useState<Partial<Event>>({})
  const [bookFormData, setBookFormData] = useState<Partial<Book>>({})

  const handleDeleteEvent = (id: number) => {
    if (confirm("آیا از حذف این رویداد اطمینان دارید؟")) {
      setEvents(events.filter((event) => event.id !== id))
    }
  }

  const handleDeleteBook = (id: number) => {
    if (confirm("آیا از حذف این کتاب اطمینان دارید؟")) {
      setBooks(books.filter((book) => book.id !== id))
    }
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setEventFormData(event)
    setShowEventForm(true)
  }

  const handleEditBook = (book: Book) => {
    setEditingBook(book)
    setBookFormData(book)
    setShowBookForm(true)
  }

  const handleCancelEvent = () => {
    setEditingEvent(null)
    setEventFormData({})
    setShowEventForm(false)
  }

  const handleCancelBook = () => {
    setEditingBook(null)
    setBookFormData({})
    setShowBookForm(false)
  }

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingEvent) {
      setEvents(events.map((event) => (event.id === editingEvent.id ? { ...event, ...eventFormData } : event)))
    } else {
      const newEvent: Event = {
        id: Math.max(...events.map((e) => e.id), 0) + 1,
        title: eventFormData.title || "",
        date: eventFormData.date || "",
        time: eventFormData.time || "",
        location: eventFormData.location || "",
        description: eventFormData.description || "",
        ...eventFormData,
      }
      setEvents([...events, newEvent])
    }
    handleCancelEvent()
  }

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingBook) {
      setBooks(books.map((book) => (book.id === editingBook.id ? { ...book, ...bookFormData } : book)))
    } else {
      const newBook: Book = {
        id: Math.max(...books.map((b) => b.id), 0) + 1,
        title: bookFormData.title || "",
        author: bookFormData.author || "",
        pages: bookFormData.pages || 0,
        year: bookFormData.year || new Date().getFullYear(),
        description: bookFormData.description || "",
        ...bookFormData,
      }
      setBooks([...books, newBook])
    }
    handleCancelBook()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with Title and Navigation */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-wood-dark mb-2 text-center">پنل مدیریت</h1>
            <p className="text-center text-wood-medium text-lg mb-8">مدیریت رویدادها و کتاب‌های شما</p>

            {/* Quick Navigation Link */}
            <div className="flex justify-center mb-8">
              <Link href="/admin/purchases">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2">
                  <Package className="w-5 h-5 ml-2" />
                  مدیریت خریدها
                </Button>
              </Link>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 border-b-2 border-wood-light/30">
            <button
              onClick={() => setActiveTab("books")}
              className={`px-6 py-4 font-bold text-lg transition-all duration-200 ${
                activeTab === "books"
                  ? "text-white bg-wood-medium rounded-t-lg border-b-4 border-wood-dark"
                  : "text-wood-medium hover:text-wood-dark hover:bg-wood-light/20"
              }`}
            >
              مدیریت کتاب‌ها
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-4 font-bold text-lg transition-all duration-200 ${
                activeTab === "events"
                  ? "text-white bg-wood-medium rounded-t-lg border-b-4 border-wood-dark"
                  : "text-wood-medium hover:text-wood-dark hover:bg-wood-light/20"
              }`}
            >
              مدیریت رویدادها
            </button>
          </div>

          {/* Books Section */}
          {activeTab === "books" && (
            <div className="space-y-8">
              {/* Add Book Button and View Mode Toggle */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <button
                  onClick={() => setShowBookForm(true)}
                  disabled={showBookForm}
                  className="flex items-center gap-2 bg-wood-dark hover:bg-wood-medium text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-5 h-5" />
                  افزودن کتاب جدید
                </button>

                <div className="flex gap-2 bg-wood-light/20 p-2 rounded-lg">
                  <button
                    onClick={() => setBooksViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      booksViewMode === "grid" ? "bg-wood-dark text-white" : "text-wood-medium hover:text-wood-dark"
                    }`}
                    title="نمایش جدولی"
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setBooksViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      booksViewMode === "list" ? "bg-wood-dark text-white" : "text-wood-medium hover:text-wood-dark"
                    }`}
                    title="نمایش فهرستی"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Books Form */}
              {showBookForm && (
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2 border-wood-light/40 wood-texture">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-wood-dark">
                      {editingBook ? "ویرایش کتاب" : "افزودن کتاب جدید"}
                    </h2>
                    <button onClick={handleCancelBook} className="text-gray-500 hover:text-gray-700">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleBookSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="book-title" className="text-wood-dark font-bold mb-2 block">
                          عنوان کتاب
                        </Label>
                        <Input
                          id="book-title"
                          placeholder="عنوان کتاب را وارد کنید"
                          className="border-wood-light focus:border-wood-medium"
                          value={bookFormData.title || ""}
                          onChange={(e) => setBookFormData({ ...bookFormData, title: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="book-author" className="text-wood-dark font-bold mb-2 block">
                          نویسنده
                        </Label>
                        <Input
                          id="book-author"
                          placeholder="نام نویسنده را وارد کنید"
                          className="border-wood-light focus:border-wood-medium"
                          value={bookFormData.author || ""}
                          onChange={(e) => setBookFormData({ ...bookFormData, author: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="book-pages" className="text-wood-dark font-bold mb-2 block">
                          تعداد صفحات
                        </Label>
                        <Input
                          id="book-pages"
                          type="number"
                          placeholder="0"
                          className="border-wood-light focus:border-wood-medium"
                          value={bookFormData.pages || ""}
                          onChange={(e) =>
                            setBookFormData({
                              ...bookFormData,
                              pages: Number.parseInt(e.target.value),
                            })
                          }
                        />
                      </div>

                      <div>
                        <Label htmlFor="book-year" className="text-wood-dark font-bold mb-2 block">
                          سال انتشار
                        </Label>
                        <Input
                          id="book-year"
                          type="number"
                          placeholder={new Date().getFullYear().toString()}
                          className="border-wood-light focus:border-wood-medium"
                          value={bookFormData.year || ""}
                          onChange={(e) =>
                            setBookFormData({
                              ...bookFormData,
                              year: Number.parseInt(e.target.value),
                            })
                          }
                        />
                      </div>

                      <div>
                        <Label htmlFor="book-genre" className="text-wood-dark font-bold mb-2 block">
                          ژانر
                        </Label>
                        <select
                          id="book-genre"
                          className="w-full px-4 py-2 border-2 border-wood-light rounded-lg focus:border-wood-medium focus:outline-none"
                          value={bookFormData.genre || ""}
                          onChange={(e) => setBookFormData({ ...bookFormData, genre: e.target.value })}
                        >
                          <option value="">انتخاب ژانر</option>
                          <option value="fiction">داستان</option>
                          <option value="poetry">شاعری</option>
                          <option value="history">تاریخی</option>
                          <option value="philosophy">فلسفی</option>
                          <option value="science">علمی</option>
                          <option value="children">کودکان</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="book-description" className="text-wood-dark font-bold mb-2 block">
                        توضیحات
                      </Label>
                      <Textarea
                        id="book-description"
                        placeholder="توضیحات کتاب را وارد کنید"
                        rows={4}
                        className="border-wood-light focus:border-wood-medium"
                        value={bookFormData.description || ""}
                        onChange={(e) =>
                          setBookFormData({
                            ...bookFormData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="book-cover" className="text-wood-dark font-bold mb-2 block">
                        تصویر جلد کتاب
                      </Label>
                      <Input
                        id="book-cover"
                        type="text"
                        placeholder="https://example.com/book-cover.jpg"
                        className="border-wood-light focus:border-wood-medium"
                        value={bookFormData.cover || ""}
                        onChange={(e) => setBookFormData({ ...bookFormData, cover: e.target.value })}
                      />
                      {bookFormData.cover && (
                        <div className="mt-2 rounded-lg overflow-hidden border border-wood-light/40">
                          <img
                            src={bookFormData.cover || "/placeholder.svg"}
                            alt="پیش‌نمایش جلد"
                            className="w-20 h-28 object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="book-isbn" className="text-wood-dark font-bold mb-2 block">
                          شماره شناسایی (ISBN)
                        </Label>
                        <Input
                          id="book-isbn"
                          placeholder="978-3-16-148410-0"
                          className="border-wood-light focus:border-wood-medium"
                          value={bookFormData.isbn || ""}
                          onChange={(e) => setBookFormData({ ...bookFormData, isbn: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="book-price" className="text-wood-dark font-bold mb-2 block">
                          قیمت (تومان)
                        </Label>
                        <Input
                          id="book-price"
                          type="number"
                          placeholder="0"
                          className="border-wood-light focus:border-wood-medium"
                          value={bookFormData.price || ""}
                          onChange={(e) =>
                            setBookFormData({
                              ...bookFormData,
                              price: Number.parseInt(e.target.value),
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-wood-medium hover:bg-wood-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        {editingBook ? "ذخیره تغییرات" : "افزودن کتاب"}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancelBook}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        انصراف
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Books List/Grid */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2 border-wood-light/40 wood-texture">
                <h2 className="text-2xl font-bold text-wood-dark mb-6">کتاب‌ها ({books.length})</h2>
                {books.length === 0 ? (
                  <p className="text-wood-medium text-center py-8">کتابی موجود نیست</p>
                ) : (
                  <div
                    className={
                      booksViewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "grid gap-4"
                    }
                  >
                    {books.map((book) => (
                      <div
                        key={book.id}
                        className={`p-4 border-l-4 border-wood-medium bg-wood-light/10 rounded-lg hover:shadow-md transition-shadow ${
                          booksViewMode === "grid"
                            ? "flex flex-row gap-4 items-start"
                            : "flex flex-row gap-4 items-start"
                        }`}
                      >
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-wood-dark mb-1">{book.title}</h3>
                          <p className="text-wood-medium mb-2">
                            <span className="font-bold">نویسنده:</span> {book.author}
                          </p>
                          <p className="text-sm text-wood-dark/70 mb-2">
                            {book.genre && (
                              <>
                                <span className="font-bold">ژانر:</span> {book.genre} |{" "}
                              </>
                            )}
                            <span className="font-bold">صفحات:</span> {book.pages} |{" "}
                            <span className="font-bold">سال:</span> {book.year}
                          </p>
                          {book.description && (
                            <p className="text-wood-dark/80 text-sm line-clamp-2 mb-4">{book.description}</p>
                          )}
                          <div className="flex gap-2 mt-auto">
                            <button
                              onClick={() => handleEditBook(book)}
                              className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-2.5 rounded text-xs transition-colors"
                              title="ویرایش"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteBook(book.id)}
                              className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 px-2.5 rounded text-xs transition-colors"
                              title="حذف"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {book.cover && (
                          <div className="flex-shrink-0">
                            <img
                              src={book.cover || "/placeholder.svg"}
                              alt={book.title}
                              className="w-20 h-28 object-cover rounded-lg border border-wood-light/40 shadow-md"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Events Section */}
          {activeTab === "events" && (
            <div className="space-y-8">
              {/* Add Event Button and View Mode Toggle */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <button
                  onClick={() => setShowEventForm(true)}
                  disabled={showEventForm}
                  className="flex items-center gap-2 bg-wood-dark hover:bg-wood-medium text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-5 h-5" />
                  افزودن رویداد جدید
                </button>

                <div className="flex gap-2 bg-wood-light/20 p-2 rounded-lg">
                  <button
                    onClick={() => setEventsViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      eventsViewMode === "grid" ? "bg-wood-dark text-white" : "text-wood-medium hover:text-wood-dark"
                    }`}
                    title="نمایش جدولی"
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setEventsViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      eventsViewMode === "list" ? "bg-wood-dark text-white" : "text-wood-medium hover:text-wood-dark"
                    }`}
                    title="نمایش فهرستی"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Events List/Grid */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2 border-wood-light/40 wood-texture">
                <h2 className="text-2xl font-bold text-wood-dark mb-6">رویدادهای موجود ({events.length})</h2>
                {events.length === 0 ? (
                  <p className="text-wood-medium text-center py-8">رویدادی موجود نیست</p>
                ) : (
                  <div className={eventsViewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "grid gap-4"}>
                    {events.map((event) => (
                      <div
                        key={event.id}
                        className={`p-4 border-2 border-wood-light/40 rounded-lg hover:border-wood-medium/60 transition-colors ${
                          eventsViewMode === "grid"
                            ? "flex flex-col"
                            : "flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        }`}
                      >
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-wood-dark mb-2">{event.title}</h3>
                          <p className="text-wood-medium mb-2">
                            <span className="font-bold">تاریخ:</span> {event.date} - {event.time}
                          </p>
                          <p className="text-wood-medium mb-2">
                            <span className="font-bold">مکان:</span> {event.location}
                          </p>
                          <p className="text-wood-dark/80 line-clamp-2">{event.description}</p>
                        </div>
                        <div className={`flex gap-2 ${eventsViewMode === "grid" ? "flex-row" : "md:flex-col"}`}>
                          <Button
                            onClick={() => handleEditEvent(event)}
                            className="bg-blue-600 hover:bg-blue-700 text-white flex-1 md:flex-none"
                          >
                            ویرایش
                          </Button>
                          <Button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="bg-red-600 hover:bg-red-700 text-white flex-1 md:flex-none"
                          >
                            حذف
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Events Form */}
              {showEventForm && (
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-wood-light/40 wood-texture">
                  <h2 className="text-2xl font-bold text-wood-dark mb-6">
                    {editingEvent ? "ویرایش رویداد" : "افزودن رویداد جدید"}
                  </h2>
                  <form onSubmit={handleEventSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="event-title" className="text-wood-dark font-bold mb-2 block">
                        عنوان رویداد
                      </Label>
                      <Input
                        id="event-title"
                        placeholder="عنوان رویداد را وارد کنید"
                        className="border-wood-light focus:border-wood-medium"
                        value={eventFormData.title || ""}
                        onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="event-date" className="text-wood-dark font-bold mb-2 block">
                          تاریخ
                        </Label>
                        <Input
                          id="event-date"
                          type="date"
                          className="border-wood-light focus:border-wood-medium"
                          value={eventFormData.date || ""}
                          onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="event-time" className="text-wood-dark font-bold mb-2 block">
                          ساعت
                        </Label>
                        <Input
                          id="event-time"
                          type="time"
                          className="border-wood-light focus:border-wood-medium"
                          value={eventFormData.time || ""}
                          onChange={(e) => setEventFormData({ ...eventFormData, time: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="event-location" className="text-wood-dark font-bold mb-2 block">
                        مکان
                      </Label>
                      <Input
                        id="event-location"
                        placeholder="مکان برگزاری را وارد کنید"
                        className="border-wood-light focus:border-wood-medium"
                        value={eventFormData.location || ""}
                        onChange={(e) => setEventFormData({ ...eventFormData, location: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="event-description" className="text-wood-dark font-bold mb-2 block">
                        توضیحات
                      </Label>
                      <Textarea
                        id="event-description"
                        placeholder="توضیحات رویداد را وارد کنید"
                        rows={5}
                        className="border-wood-light focus:border-wood-medium"
                        value={eventFormData.description || ""}
                        onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="event-category" className="text-wood-dark font-bold mb-2 block">
                        دسته‌بندی
                      </Label>
                      <select
                        id="event-category"
                        className="w-full px-4 py-2 border-2 border-wood-light rounded-lg focus:border-wood-medium focus:outline-none"
                        value={eventFormData.category || ""}
                        onChange={(e) => setEventFormData({ ...eventFormData, category: e.target.value })}
                      >
                        <option value="">انتخاب دسته‌بندی</option>
                        <option value="literary">ادبی</option>
                        <option value="cultural">فرهنگی</option>
                        <option value="workshop">کارگاه</option>
                        <option value="launch">رونمایی</option>
                        <option value="discussion">نشست</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="event-tags" className="text-wood-dark font-bold mb-2 block">
                        برچسب‌ها (با کاما جدا کنید)
                      </Label>
                      <Input
                        id="event-tags"
                        placeholder="مثال: شعر، رمان، داستان"
                        className="border-wood-light focus:border-wood-medium"
                        value={eventFormData.tags?.join(", ") || ""}
                        onChange={(e) =>
                          setEventFormData({
                            ...eventFormData,
                            tags: e.target.value.split(",").map((tag) => tag.trim()),
                          })
                        }
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-wood-medium hover:bg-wood-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        {editingEvent ? "ذخیره تغییرات" : "افزودن رویداد"}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancelEvent}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        انصراف
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
