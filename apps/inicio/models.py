from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
	user = models.OneToOneField(User)
	tipousuario = models.CharField(max_length=1)

	def __str__(self):
		return self.user.username

class Auditoria(models.Model):
	creado = models.DateTimeField(auto_now_add=True, editable=False)
	actualizado = models.DateTimeField(auto_now=True)
	creador = models.ForeignKey(User, related_name='+')
	editor = models.ForeignKey(User, related_name='+', blank=True, null=True)

	class Meta:
		abstract = True

class Ubigeo(models.Model):
	coddpto = models.CharField(max_length=2)
	codprov = models.CharField(max_length=2)
	coddist = models.CharField(max_length=2)
	nombre = models.CharField(max_length=100)
	capital = models.CharField(max_length=100)
	regionid = models.IntegerField()

	def __str__(self):
		return self.nombre

	def getNombreFull(self):
		fullName = ""
		if self.coddist != "00":
			fullName = self.nombre
		if self.codprov != "00":
			if len(fullName) > 0:
				 fullName = " / " + fullName
			fullName = Ubigeo.objects.get(coddpto=self.coddpto,codprov=self.codprov,coddist="00").nombre + fullName
		if self.coddpto != "00":
			if len(fullName) > 0:
				 fullName = " / " + fullName
			fullName = Ubigeo.objects.get(coddpto=self.coddpto,codprov="00",coddist="00").nombre + fullName

		return fullName
		



class Modulo(Auditoria):
	nombre = models.CharField(max_length=20)
	orden = models.SmallIntegerField()

	def __str__(self):
		return self.nombre

class Menu(Auditoria):
	nombre = models.CharField(max_length=100)
	iconoclase = models.CharField(max_length=100, blank=True,null=True)
	modulo = models.ForeignKey(Modulo)
	menupadre = models.ForeignKey('self', related_name='+', blank=True, null=True)
	orden = models.SmallIntegerField(default=1)
	control = models.CharField(max_length=250, default="")
	
	def __str__(self):
		return self.nombre