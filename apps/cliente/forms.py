from django import forms
from .models import Cliente

class ClienteForm(forms.ModelForm):
	# nombres = forms.CharField(max_length=200)
	# apellidos = forms.CharField(max_length=100)
	# tipo_documento = forms.CharField(max_length=45)
	# nro_documento = forms.CharField(max_length=12)
	# email = forms.CharField(max_length=150)
	# telefono = forms.CharField(max_length=11)
	# direccion = forms.CharField(max_length=200)


	class Meta:
		model = Cliente
		fields = ["nombres","apellidos","tipo_documento","nro_documento","email","telefono","direccion","area","responsable" ,"referencia", "frecuencia"]