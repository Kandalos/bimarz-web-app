# core/views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework import permissions
from .serializers import UserRegistrationSerializer
from .serializers import UserSerializer

class UserRegistrationView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegistrationSerializer


class UserMeView(generics.RetrieveUpdateAPIView):   # <-- Update allowed here
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user