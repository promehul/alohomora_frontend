from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from django.http import HttpResponseBadRequest, HttpResponse
from django.shortcuts import get_object_or_404

from alohomora.models import UserProfile, Question

class CheckAnswer(APIView):
    """
    View to check answer by the respective UserProfile
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        """
        Post data to  check answer
        """
        answer = request.data.get("answer", "")

        userprofile_object = request.user.userprofile
        question_on = userprofile_object.question_on
        question_object = get_object_or_404(Question, pk= question_on)
        correct_answer = question_object.answer

        if (question_object is None):
            return HttpResponseBadRequest("Invalid Question") 
        elif (answer == correct_answer):
            userprofile_object.question_on = (question_on+1)
            userprofile_object.save()
            return HttpResponse("Correct", status=200)       
        elif (answer != correct_answer):
            return HttpResponse("Incorrect", status=200)
        else:
            return HttpResponseBadRequest("Something went wrong")    
                

    def get(self, request):
        return Response("get_request")