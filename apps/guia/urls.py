from django.conf.urls import url

urlpatterns = [
	url(r'guias.guia/listar/$', "apps.guia.views.GuiaListar", name='guia_listar'),
	url(r'guias.guia/eliminar/$', "apps.guia.views.GuiaEliminar", name='guia_eliminar'),
	url(r'guias.guia/crear/$', "apps.guia.views.GuiaCrear", name='guia_crear'),
	url(r'guias.guia/editar/$', "apps.guia.views.GuiaEditar", name='guia_editar'),

	url(r'guias.producto/listar/(?P<idGuia>\d+)$', "apps.guia.views.ProductoListar", name='productos_listar'),
	url(r'guias.detalleguia/listar/(?P<idGuia>\d+)$', "apps.guia.views.DetalleGuiaListar", name='detalleguia_listar'),
	url(r'guias.detalleguia/crear/$', "apps.guia.views.DetalleGuiaCrear", name='detalleguia_crear'),
	url(r'guias.detalleguia/eliminar/$', "apps.guia.views.DetalleGuiaEliminar", name='detalleguia_eliminar'),
]