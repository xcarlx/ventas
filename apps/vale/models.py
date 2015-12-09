from django.db import models
from apps.inicio.models import *
from apps.cliente.models import * 
from apps.venta.models import * 
from apps.producto.models import * 
# Create your models here.


class Vale(Auditoria):
	fecha = models.DateField()
	numero = models.CharField(max_length=10)
	total = models.DecimalField(max_digits=10, decimal_places=2)
	observaciones = models.TextField()
	cliente = models.ForeignKey(Cliente)
	venta = models.ForeignKey(Venta, blank=True, null=True)
	detallevales = models.ManyToManyField(Producto, through='DetalleVale')

	def __str__(self):
		return self.cliente +" nro: "+self.numero

class DetalleVale(Auditoria):
	vale = models.ForeignKey(Vale)
	producto = models.ForeignKey(Producto)
	cantidad = models.PositiveSmallIntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return self.vale.numero+" "+self.producto
