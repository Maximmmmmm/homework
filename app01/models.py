from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)

class Transport(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='app01/transport')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

