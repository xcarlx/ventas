from django.db import models
from apps.inicio.models import *




# Create your models here.

class Producto(Auditoria):

	descripcion = models.CharField(max_length=200)
	cantidad_actual = models.PositiveSmallIntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	imagen = models.ImageField(upload_to = 'photos', blank=True, null=True)
	
	def __str__(self):
		return self.descripcion
