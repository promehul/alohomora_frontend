from django.conf import settings
from django.contrib.auth.models import User

from rest_framework import serializers
from alohomora.models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for User
    """

    class Meta:
        """
        Meta class for UserSerializer
        """

        model = User
        fields = ['username','email', 'pk']
        read_only_fields = ['username', 'email', 'pk']

class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for profile of user
    """

    user = UserSerializer(read_only=True)

    class Meta:
        """
        Meta class for UserProfileSerializer
        """

        model = UserProfile
        exclude = []
        read_only_fields = ['question_on']
    