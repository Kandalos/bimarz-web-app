"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, DollarSign } from "lucide-react"

type Order = {
  id: number
  orderId: string
  items: { title: string; quantity: number; price: number }[]
  totalAmount: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  orderDate: string
}

export default function OrdersPage() {
  const orders: Order[] = [
    {
      id: 1,
      orderId: "ORD-001",
      items: [
        { title: "سفر به ستارگان", quantity: 1, price: 250000 },
        { title: "راز باغ", quantity: 2, price: 180000 },
      ],
      totalAmount: 610000,
      status: "processing",
      orderDate: "۱۴۰۳/۰۱/۱۵",
    },
    {
      id: 2,
      orderId: "ORD-002",
      items: [{ title: "داستان شهر", quantity: 1, price: 320000 }],
      totalAmount: 320000,
      status: "delivered",
      orderDate: "۱۴۰۳/۰۱/۱۰",
    },
  ]

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500"
      case "processing":
        return "bg-blue-500"
      case "shipped":
        return "bg-purple-500"
      case "delivered":
        return "bg-green-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusLabel = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "در انتظار"
      case "processing":
        return "در حال پردازش"
      case "shipped":
        return "ارسال شده"
      case "delivered":
        return "تحویل داده شده"
      case "cancelled":
        return "لغو شده"
      default:
        return status
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/profile">
              <Button variant="outline" className="border-wood-light hover:bg-wood-light/10 bg-transparent">
                <ArrowRight className="w-4 h-4 ml-2" />
                بازگشت به پروفایل
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-wood-dark">تاریخچه خریدها</h1>
          </div>

          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="border-2 border-wood-light/40 wood-texture">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-wood-dark mb-2">سفارش #{order.orderId}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {order.orderDate}
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(order.status)} text-white`}>
                      {getStatusLabel(order.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-wood-dark mb-2">اقلام سفارش:</h3>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-wood-light/10 rounded">
                          <span className="text-wood-dark">
                            {item.title} × {item.quantity}
                          </span>
                          <span className="font-bold text-wood-medium">{item.price.toLocaleString("fa-IR")} تومان</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-wood-medium/10 rounded-lg border-2 border-wood-light/40">
                    <span className="font-bold text-wood-dark flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      مجموع:
                    </span>
                    <span className="text-xl font-bold text-wood-dark">
                      {order.totalAmount.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
