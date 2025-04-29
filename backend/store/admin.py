from django.contrib import admin
from .models import Product, OrderItem, Order, CustomerProfile

# Register your models here.
admin.site.register(Product)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(CustomerProfile)

