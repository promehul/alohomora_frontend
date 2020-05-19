from django.db import models

class Question(models.Model):
    """
    Contains questions to the Quiz
    """
    def user_directory_path(instance, filename):
        import os.path
        fn, ext = os.path.splitext(filename)
        return 'question{0}{1}'.format(instance.pk, ext)

    image = models.ImageField(
        upload_to=user_directory_path,
        null=True,
    )

    text = models.TextField(
        max_length = 1000,
        blank = True,
    )