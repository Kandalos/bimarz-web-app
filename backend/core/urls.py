from django.urls import path, include
from .views import UserRegistrationView, UserMeView

urlpatterns = [
    path('', include('djoser.urls')),
    path('jwt/', include('djoser.urls.jwt')),   # optional
    path('register/', UserRegistrationView.as_view(), name='custom-register'),
    path("users/me/", UserMeView.as_view(), name="user-me"),

]
