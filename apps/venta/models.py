from django.db import models
from apps.inicio.models import *
from apps.cliente.models import * 
from apps.pedido.models import * 
from apps.producto.models import Producto
from django.utils import timezone

# Create your models here.

class Venta(Auditoria):

	BOLETA = 'BOLETA'
	FACTURA = 'FACTURA'
	SIN_COMPOROBANTE = 'SIN_COMPOROBANTE' 
	
	TIPO_DOCUMENTO = (
		(BOLETA, 'BOLETA'),
		(FACTURA, 'FACTURA'),
		(SIN_COMPOROBANTE, 'SIN_COMPOROBANTE' ),
	)
	fecha = models.DateField(default=timezone.now, blank=True)
	tipo_documento = models.CharField(max_length=30, choices=TIPO_DOCUMENTO, default=BOLETA)
	numero_documento = models.CharField(max_length=10)
	numero_correlativo = models.CharField(max_length=4)
	sub_total = models.DecimalField(max_digits=10, decimal_places=2, blank=True,null=True)
	igv = models.DecimalField(max_digits=10, decimal_places=2,blank=True,null=True)
	total = models.DecimalField(max_digits=10, decimal_places=2,blank=True,null=True)
	pedido = models.ForeignKey(Pedido)
	detalleventas = models.ManyToManyField(Producto, through='DetalleVenta')

	def __str__(self):
		return self.tipo_documento+" Nro"+self.numero_documento

class DetalleVenta(Auditoria):
	venta = models.ForeignKey(Venta)
	producto = models.ForeignKey(Producto)
	cantidad = models.PositiveSmallIntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	descuento = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return self.venta.numero_documento+" "+self.producto
