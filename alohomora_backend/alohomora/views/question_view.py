from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination

from alohomora.serializers import QuestionSerializer
from alohomora.models import Question

class QuestionViewSet(ModelViewSet):
    serializer_class = QuestionSerializer    
    pagination_class = PageNumberPagination
    page_size = 12
    queryset = Question.objects.all()