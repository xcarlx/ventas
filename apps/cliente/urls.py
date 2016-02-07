from django.conf.urls import url
from apps.cliente.views import *

urlpatterns = [
	url(r'clientes.cliente/listar/$', ClienteListar),
	url(r'clientes.cliente/eliminar/$', ClienteEliminar),
	url(r'clientes.cliente/crear/$', ClienteCrear),
	url(r'clientes.cliente/editar/$', ClienteEditar),
	# url(r'clientes.cliente/editar/$', "apps.cliente.views.ClienteEditar", name='cliente_editar'),
]

