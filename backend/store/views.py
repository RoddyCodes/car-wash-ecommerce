# store/views.py
from rest_framework import viewsets, permissions
from .models import Product, Order, CustomerProfile
from .serializers import (
    ProductSerializer,
    OrderSerializer,
    CustomerProfileSerializer
)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [permissions.IsAuthenticated] ## Revert this when publishing
    permission_classes = [permissions.AllowAny] ## For Testing Purposes
 

    def perform_create(self, serializer):
        # automatically set the user on order creation
        serializer.save(user=self.request.user)

class CustomerProfileViewSet(viewsets.ModelViewSet):
    queryset = CustomerProfile.objects.all()
    serializer_class = CustomerProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
