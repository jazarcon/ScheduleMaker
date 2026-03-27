from django.db import models

# Create your models here.

class Employee(models.Model):
    name= models.CharField(max_length=100)
    store_id= models.CharField(max_length=100, default='150001')
    position= models.CharField(max_length=100)
    availablity= models.JSONField()

    def __str__(self):
        return self.name
