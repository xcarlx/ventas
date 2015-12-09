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
	nro_documento = models.CharField(max_length=11, unique=True)
	email = models.CharField(max_length=45, unique=True,blank=True, null=True)
	telefono = models.CharField(max_length=10, unique=True,blank=True, null=True)
	direccion = models.CharField(max_length=150,blank=True, null=True)
	area = models.CharField(max_length=200,blank=True, null=True)
	responsable = models.CharField(max_length=45, blank=True, null=True)
	tipocliente = models.CharField(max_length=8, choices=TIPO_PERSONA, default=NATURAL)
	prestamos = models.ManyToManyField(Producto, through='Prestamo')

	def __str__(self):
		return self.nombres+ ' - '+self.apellidos

	def getDepaId(self):
		return self.ubigeo[:2] if len(self.ubigeo) >= 2 else ""

	def getProvId(self):
		return self.ubigeo[2:4] if len(self.ubigeo) >= 4 else ""

	def getDistId(self):
		return self.ubigeo[4:6] if len(self.ubigeo) >= 6 else ""

	def getDepaName(self):
		return "" if len(self.getDepaId())==0 else Ubigeo.objects.get(coddpto=self.getDepaId(),codprov="00",coddist="00").nombre

	def getProvName(self):
		return "" if len(self.getProvId())==0 else Ubigeo.objects.get(coddpto=self.getDepaId(),codprov=self.getProvId(),coddist="00").nombre

	def getDistName(self):
		return "" if len(self.getDistId())==0 else Ubigeo.objects.get(coddpto=self.getDepaId(),codprov=self.getProvId(),coddist=self.getDistId()).nombre

	def getUbigeo(self):
		return self.getDepaName() + " / " + self.getProvName() + " / " + self.getDistName()

	def getUbigeoProv(self):
		return self.getDepaName() + " / " + self.getProvName()

class Prestamo(Auditoria):
	cliente = models.ForeignKey(Cliente)
	producto = models.ForeignKey(Producto)
	cantidad_entrega = models.PositiveSmallIntegerField()
	cantidad_devuelta = models.PositiveSmallIntegerField()
	venta = models.CharField(max_length=8, blank=True, null=True, default="")
	guia_remision = models.CharField(max_length=8,blank=True, null=True, default="")
	vale = models.CharField(max_length=8,blank=True, null=True, default="")

