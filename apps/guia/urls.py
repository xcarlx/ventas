from django.conf.urls import url
from apps.guia.views import *
urlpatterns = [
	url(r'guias.guia/listar/$', GuiaListar),
	url(r'guias.guia/eliminar/$', GuiaEliminar),
	url(r'guias.guia/crear/$', GuiaCrear),
	url(r'guias.guia/editar/$', GuiaEditar),

	url(r'guias.producto/listar/(?P<idGuia>\d+)$', ProductoListar),
	url(r'guias.detalleguia/listar/(?P<idGuia>\d+)$', DetalleGuiaListar),
	url(r'guias.detalleguia/crear/$', DetalleGuiaCrear),
	url(r'guias.detalleguia/eliminar/$', DetalleGuiaEliminar),

	url(r'guias.ventaguia/crear/$', VentaGuiaCrear),
	
]