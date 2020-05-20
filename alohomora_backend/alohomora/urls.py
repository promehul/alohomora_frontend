from rest_framework import routers
from django.urls import path
from django.conf.urls import url, include

from alohomora.views.user_profile_view import UserProfileViewSet
from alohomora.views.question_view import QuestionViewSet

router = routers.SimpleRouter()
router.register(
    'user_profile',
    UserProfileViewSet,
    base_name = 'user_profile',
)

router.register(
    'question',
    QuestionViewSet,
    base_name = 'question',
)

urlpatterns = [
    path('', include(router.urls)),
]