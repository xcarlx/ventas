from django.db import models
from apps.inicio.models import *
from apps.cliente.models import * 
from apps.venta.models import * 
from apps.producto.models import *
# Create your models here.

class GuiaRemision(Auditoria):
	punto_partida = models.CharField(max_length=500)
	punto_llegada = models.CharField(max_length=500)
	fecha_emision = models.DateField()
	fecha_translado = models.DateField()
	cliente = models.ForeignKey(Cliente)
	venta = models.ForeignKey(Venta, blank=True,null=True)
	detalleguias = models.ManyToManyField(Producto, through='DetalleGuia')

	def __str__(self):
		return self.cliente.nombres


class DetalleGuia(Auditoria):
	guia_remision = models.ForeignKey(GuiaRemision)
	producto = models.ForeignKey(Producto)
	cantidad = models.PositiveSmallIntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return self.guia_remision.cliente.nombres+" "+self.producto.descripcion
