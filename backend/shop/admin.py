# shop/admin.py
from django.contrib import admin
from .models import Genre, Book, Order, OrderItem

@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ("id", "name")

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "author", "price", "stock", "is_active")
    list_filter = ("is_active", "genres")
    search_fields = ("title", "author", "isbn")
    filter_horizontal = ("genres",)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "status", "total_price", "created_at")
    readonly_fields = ("created_at", "updated_at")

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("id", "order", "book_title_snapshot", "quantity", "price_at_purchase")

from django.contrib import admin
from .models import RecommendedGroup

@admin.register(RecommendedGroup)
class RecommendedGroupAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active")
    prepopulated_fields = {"slug": ("name",)}
    filter_horizontal = ("books",)
