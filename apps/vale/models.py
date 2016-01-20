from django.db import models
from apps.inicio.models import *
from apps.cliente.models import * 
from apps.venta.models import * 
from apps.producto.models import * 
from django.utils import timezone
# Create your models here.


class Vale(Auditoria):
	fecha = models.DateField(default=timezone.now, blank=True)
	numero = models.CharField(max_length=10, blank=True, null=True)
	total = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	observaciones = models.TextField(blank=True, null=True)
	cliente = models.ForeignKey(Cliente, on_delete = models.PROTECT)
	venta = models.ForeignKey(Venta, blank=True, null=True, on_delete = models.PROTECT)
	detallevales = models.ManyToManyField(Producto, through='DetalleVale')

	def __str__(self):
		return str(self.cliente) +" nro: "+self.numero

class DetalleVale(Auditoria):
	vale = models.ForeignKey(Vale)
	producto = models.ForeignKey(Producto)
	cantidad = models.PositiveSmallIntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return self.vale.numero+" "+self.producto.descripcion
		
	def sub_total(self):
		return self.cantidad*self.precio
