from django.db import models
from apps.inicio.models import *
from apps.producto.models import Producto

# Create your models here.

class Cliente(Auditoria):
	DNI = 'DNI'
	RUC = 'RUC'
	
	TIPO_DOCUMENTO_IDENTIDAD = (
		(DNI, 'DNI'),
		(RUC, 'RUC'),
	)

	JURIDICA = 'JURIDICA'
	NATURAL = 'NATURAL'
	
	TIPO_PERSONA = (
		(JURIDICA, 'JURIDICA'),
		(NATURAL, 'NATURAL'),
	)
	nombres = models.CharField(max_length=150)
	apellidos = models.CharField(max_length=80, blank=True, null=True, default="")
	tipo_documento = models.CharField(max_length=3, choices=TIPO_DOCUMENTO_IDENTIDAD, default=DNI)
	nro_documento = models.CharField(max_length=11)
	email = models.CharField(max_length=45, blank=True, null=True)
	telefono = models.CharField(max_length=45, blank=True, null=True)
	direccion = models.CharField(max_length=150,blank=True, null=True)
	area = models.CharField(max_length=200,blank=True, null=True)
	responsable = models.CharField(max_length=45, blank=True, null=True)
	tipocliente = models.CharField(max_length=8, choices=TIPO_PERSONA, default=NATURAL)
	prestamos = models.ManyToManyField(Producto, through='Prestamo')

	def __str__(self):
		return self.nombres+ ' - '+self.apellidos

class Prestamo(Auditoria):
	BOLETA = 'BOLETA'
	FACTURA = 'FACTURA'
	VALE = 'VALE'
	GUIA_REMISION = 'GUIA_REMISION'
	
	TIPO_DOCUMENTO = (
		(BOLETA, 'DNI'),
		(FACTURA, 'RUC'),
		(VALE, 'RUC'),
		(GUIA_REMISION, 'RUC'),
	)
	cliente = models.ForeignKey(Cliente)
	producto = models.ForeignKey(Producto)
	cantidad_entrega = models.PositiveSmallIntegerField()
	cantidad_devuelta = models.PositiveSmallIntegerField()
	tipo_documento = models.CharField(max_length=30, choices=TIPO_DOCUMENTO, default=BOLETA)
	nro_documento = models.CharField(max_length=45, blank=True, null=True)

	def __str__(self):
		return self.tipo_documento+ ' ' +self.nro_documento

