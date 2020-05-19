from django.contrib import admin
from django.urls import path, re_path
from django.contrib.auth import views as auth_views
from django.conf.urls import url, include
from django.views import generic

from django.conf import settings
from django.conf.urls.static import static

from rest_framework.schemas import get_schema_view

from rest_framework import views, serializers, status
from rest_framework.response import Response

from allauth.account.views import ConfirmEmailView 
from rest_auth.views import PasswordResetConfirmView

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


@api_view()
@permission_classes([AllowAny])
def complete_view(request):
    return Response("Email account is activated")

@api_view()
def do_nothing(request):
    return Response()

@api_view()
def verification_email_sent(request):
    return Response("Verification Email sent to the registered email")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alohomora/', include('alohomora.urls')),
    url(r'^$', generic.RedirectView.as_view(url='/api/', permanent=False)),    
    url(r'^api/$', get_schema_view()),
    url(r'^api/registration/account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(), name='account_confirm_email'),
    url(r'^api/registration/verification_sent', verification_email_sent, name='account_email_verification_sent'),
    url(r'^api/registration/complete/$', complete_view, name='account_confirm_complete'),
    url(r'^api/registration/', include('rest_auth.registration.urls')),
    url(r'^api/auth/', include('rest_auth.urls')),

    re_path(r'^api/auth/password/reset/confirm/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    url(r'^api/auth/password/reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),    
 
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

