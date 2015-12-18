from django.conf.urls import url

urlpatterns = [
	url(r'vales.vale/listar/$', "apps.vale.views.ValeListar", name='vale_listar'),
	url(r'vales.vale/eliminar/$', "apps.vale.views.ValeEliminar", name='vale_eliminar'),
	url(r'vales.vale/crear/$', "apps.vale.views.ValeCrear", name='vale_crear'),
	url(r'vales.vale/editar/$', "apps.vale.views.ValeEditar", name='vale_editar'),

	url(r'vales.producto/listar/(?P<idVa>\d+)$', "apps.vale.views.ProductoListar", name='productos_listar'),
	url(r'vales.detallevales/listar/(?P<idVa>\d+)$', "apps.vale.views.DetalleValeListar", name='detallevale_listar'),
	url(r'vales.detallevale/crear/$', "apps.vale.views.DetalleValeCrear", name='detallevale_crear'),
	url(r'vales.detallevale/eliminar/$', "apps.vale.views.DetalleValeEliminar", name='detallevale_eliminar'),
]