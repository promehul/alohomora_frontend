from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination

from alohomora.serializers import UserProfileSerializer
from alohomora.models import UserProfile


class UserProfileViewSet(ModelViewSet):
    serializer_class = UserProfileSerializer    
    pagination_class = PageNumberPagination
    page_size = 100
    queryset = UserProfile.objects.all().order_by('-question_on', 'last_question_done')
