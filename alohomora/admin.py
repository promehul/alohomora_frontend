from django.contrib import admin

from alohomora.models import UserProfile, Question
from django.contrib.auth.admin import UserAdmin

admin.site.register(UserProfile)
admin.site.register(Question)