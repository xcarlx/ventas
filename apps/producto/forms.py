from django import forms
from .models import Producto

class ProductoForm(forms.ModelForm):
	descripcion = forms.CharField(max_length=100)
	precio = forms.DecimalField(max_digits=10, decimal_places=2)
	# imagen = forms.FileField()
	class Meta:
		model = Producto
		fields = ["descripcion","precio"]

class ProductoFotoForm(forms.Form):
	imagen = forms.FileField()
