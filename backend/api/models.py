from django.db import models

# Create your models here.

class Employee(models.Model):
    name= models.CharField(max_length=100)
    id= models.CharField(max_length=100)
    position= models.CharField(max_length=100)
    availablity= models.JSONField()

    def __str__(self):
        return self.name
