from rest_framework import viewsets, mixins, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db import IntegrityError

from .models import Event, EventRegistration
from .serializers import EventSerializer, EventRegistrationSerializer

# --- Event Listing (Public Read) ---
class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.filter(is_public=True).order_by('date_time')
    serializer_class = EventSerializer
    # No permission required for listing events

# --- Automated Registration (Authenticated Write) ---

class RegisterForEventViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    # Endpoint for users to sign up for an event
    queryset = EventRegistration.objects.all()
    serializer_class = EventRegistrationSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        event_id = request.data.get('event')
        
        try:
            event = get_object_or_404(Event, pk=event_id)
        except:
            return Response({"event": "Event not found."}, status=status.HTTP_404_NOT_FOUND)

        # Check capacity automation
        if event.remaining_capacity <= 0:
            return Response({"detail": "This event is fully booked."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # AUTOMATION: Create the registration record
            registration = EventRegistration.objects.create(
                user=request.user, # User is automatically set from the request
                event=event
            )
            serializer = self.get_serializer(registration)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except IntegrityError:
            # Handles the unique_together constraint (user already registered)
            return Response({"detail": "You are already registered for this event."}, status=status.HTTP_400_BAD_REQUEST)