from rest_framework.views import APIView
from rest_framework.response import Response

from alohomora.serializers import UserProfileSerializer
from alohomora.models import UserProfile

class SelfUserView(APIView):
    """
    Get view to get the avatar of the user making the request.
    """
    
    def get(self, request, format=None):
        """
        Get function to retrieve self userprofile information.
        """
        user = request.user
        serializer = UserProfileSerializer(user.userprofile, context={'request': request})
        
        return Response(serializer.data)