from django.conf.urls import url
from apps.producto.views import *
urlpatterns = [
	url(r'productos.producto/listar/$', ProductoListar),
	url(r'productos.producto/eliminar/$', ProductoEliminar),
	url(r'productos.producto/crear/$', ProductoCrear),
	url(r'productos.producto/editar/$', ProductoEditar),
	url(r'productos.producto/subirfoto/$', ProductoFotoSubir),
	url(r'controles.controlproducto/listar/$', ControlProductoListar),
	url(r'controles.controlproducto/crear/$', ControlProductoCrear),
	url(r'controles.controlproducto/editar/$', ControlProductoEditar),
	url(r'controles.controlproducto/eliminar/$', ControlProductoEliminar),
	
	url(r'reportes.reporteenvace/listar/$', ReporteEnvaceListar),
	url(r'reportes.detallereporteenvace/listar/$', DetalleReporteEnvace),


]

