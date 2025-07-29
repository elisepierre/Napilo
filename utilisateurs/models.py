from django.contrib.auth.models import User
from django.db import models

class Profil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)
    bio = models.TextField(blank=True)
    date_naissance = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username


# Create your models here.
