from django import forms
from .models import Vale

class ValeForm(forms.ModelForm):

	class Meta:
		model = Vale
		fields = ('fecha', 'numero', 'total', 'observaciones', 'cliente',)