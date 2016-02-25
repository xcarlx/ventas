from django.conf.urls import url
from apps.vale.views import *
urlpatterns = [
	url(r'vales.vale/listar/$', ValeListar),
	url(r'vales.vale/eliminar/$', ValeEliminar),
	url(r'vales.vale/crear/$',ValeCrear),
	url(r'vales.vale/editar/$',ValeEditar),

	url(r'vales.producto/listar/$', ProductoListar),
	url(r'vales.detallevale/listar/$', DetalleValeListar),
	url(r'vales.detallevale/crear/$', DetalleValeCrear),
	url(r'vales.detallevale/eliminar/$', DetalleValeEliminar),

	url(r'vales.ventavale/crear/$', VentaValeCrear),
]