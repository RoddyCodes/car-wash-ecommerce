# backend/store/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from store.views import ProductViewSet, OrderViewSet, CustomerProfileViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'orders', OrderViewSet, basename='order')
router.register(r'profiles', CustomerProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
]
