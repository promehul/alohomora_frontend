from rest_framework import routers
from django.urls import path
from django.conf.urls import url, include

from alohomora.views.user_profile_view import UserProfileViewSet
from alohomora.views.question_view import QuestionViewSet
from alohomora.views.check_answer import CheckAnswer

router = routers.SimpleRouter()
router.register(
    'profile',
    UserProfileViewSet,
    base_name = 'profile',
)

router.register(
    'question',
    QuestionViewSet,
    base_name = 'question',
)

urlpatterns = [
    path('', include(router.urls)),
    path('check_answer', CheckAnswer.as_view(), name = 'check_answer'),
]