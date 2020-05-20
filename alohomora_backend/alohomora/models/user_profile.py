from django.conf import settings
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    """
    This model contains information of profile that the user will make.
    """
    def user_directory_path(instance, filename):
        import os.path
        fn, ext = os.path.splitext(filename)
        return 'profile/{0}{1}'.format(instance.user.username, ext)

    user = models.OneToOneField(
        User, 
        on_delete = models.CASCADE,
        primary_key = True,
    )

    profile_image = models.ImageField(
        upload_to=user_directory_path,
        default = 'default_profile_image.png',
    )

    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)

    question_on = models.IntegerField(default=1)
    last_question_done = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        """
        Return the string representation of the model:
        Return the string representation of the model
        """

        username = self.user.username

        return f'{username}'

    @receiver(post_save, sender=User)
    def create_profile(sender, instance, created, **kwargs):
        """Create a matching profile whenever a user object is created."""
        if created: 
            profile, new = UserProfile.objects.get_or_create(user=instance)  