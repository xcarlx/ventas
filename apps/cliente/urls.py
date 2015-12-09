from django.conf.urls import url

urlpatterns = [
	url(r'clientes.cliente/listar/$', "apps.cliente.views.ClienteListar", name='cliente_listar'),
	url(r'clientes.cliente/eliminar/$', "apps.cliente.views.ClienteEliminar", name='cliente_eliminar'),
	url(r'clientes.cliente/crear/$', "apps.cliente.views.ClienteCrear", name='cliente_crear'),
	url(r'clientes.cliente/editar/$', "apps.cliente.views.ClienteEditar", name='cliente_editar'),
	
]

