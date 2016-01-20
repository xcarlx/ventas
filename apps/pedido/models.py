from django.db import models
from apps.inicio.models import *
from apps.cliente.models import Cliente
from apps.producto.models import Producto
from django.utils import timezone
# Create your models here.

class Pedido(Auditoria):
	fecha_pedido = models.DateField(default=timezone.now, blank=True)
	fecha_entrega = models.DateField(blank=True, null=True)
	nro_dias = models.PositiveSmallIntegerField(default=1)
	nro_pedido = models.CharField(max_length=10)
	cliente = models.ForeignKey(Cliente)
	estado = models.BooleanField(default=False)
	detallepedidos = models.ManyToManyField(Producto, through='DetallePedido')

	def __str__(self):
		return self.cliente.nombres+"  Nro pedido  "+self.nro_pedido

class DetallePedido(Auditoria):
	pedido = models.ForeignKey(Pedido)
	producto = models.ForeignKey(Producto)
	cantidad = models.PositiveSmallIntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return "Productos > "+self.producto.descripcion