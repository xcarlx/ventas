from django import forms
from .models import GuiaRemision

class GuiaForm(forms.ModelForm):

	class Meta:
		model = GuiaRemision
		fields = ('punto_partida', 'punto_llegada', 'fecha_emision', 'fecha_translado', 'cliente', 'venta')