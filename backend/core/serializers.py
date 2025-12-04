# core/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    re_password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 're_password', 'first_name', 'last_name', 'phone_number', 'address', 'postal_code')
        extra_kwargs = {'password': {'write_only': True}, 're_password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['re_password']:
            raise serializers.ValidationError({"re_password": "Password fields didn't match."})
        return data

    def create(self, validated_data):
        validated_data.pop('re_password', None)
        password = validated_data.pop('password')
        # Ensure required keys exist
        email = validated_data.pop('email', None)
        username = validated_data.pop('username', None)

        user = User(
            email=email,
            username=username,
            **validated_data
        )
        user.set_password(password)
        user.save()
        return user
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "phone_number",
            "address",
            "avatar",
        ]
        read_only_fields = ["id"]