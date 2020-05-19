from django.contrib import admin
from django.urls import path, re_path
from django.contrib.auth import views as auth_views
from django.conf.urls import url, include
from django.views import generic
from rest_framework.schemas import get_schema_view

from rest_framework import views, serializers, status
from rest_framework.response import Response
from allauth.account.views import ConfirmEmailView

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view()
def complete_view(request):
    return Response("Email account is activated")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alohomora/', include('alohomora.urls')),
    url(r'^$', generic.RedirectView.as_view(url='/api/', permanent=False)),    
    url(r'^api/$', get_schema_view()),
    url(r'^api/registration/account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(), name='account_confirm_email'),
    url(r'^api/registration/complete/$', complete_view, name='account_confirm_complete'),
    url(r'^api/registration/', include('rest_auth.registration.urls')),

    url(r'^api/auth/', include('rest_auth.urls')),
    re_path(r'^api/auth/password/reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    url(r'^api/auth/password/reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),    
 
]




