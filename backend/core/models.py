# core/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    customer_id = models.CharField(max_length=50, unique=True, blank=True, null=True, help_text=_("Internal customer ID for loyalty or tracking."))
    is_verified_buyer = models.BooleanField(default=False, help_text=_("Designates whether the user has completed a purchase."))
    phone_number = models.CharField(max_length=15, blank=True, null=True, help_text=_("The user's contact phone number for delivery."))
    address = models.TextField(blank=True, null=True, help_text=_("The user's primary delivery address."))
    postal_code = models.CharField(max_length=20, blank=True, null=True, help_text=_("The user's postal code for shipping."))
    email = models.EmailField(_('email address'), unique=True)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)

    # Use email as the identifier for authentication
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]  # username still required by AbstractUser internals

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    def __str__(self):
        # return a stable identifier (email is unique)
        return self.email or self.username
