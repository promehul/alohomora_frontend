from django.conf import settings

from rest_framework import serializers

from alohomora.models import Question

class QuestionSerializer(serializers.ModelSerializer):
    """
    Serializer for question
    """

    class Meta:
        """
        Meta class for QuestionSerializer
        """

        model = Question
        fields = ['pk', 'image', 'question_text']
        read_only_fields = ['pk', 'image', 'question_text']