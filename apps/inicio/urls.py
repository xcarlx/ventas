from django.conf.urls import url
from apps.inicio.views import *
urlpatterns = [
	url(r'^$', Inicio),
	url(r'login/$', Login),
	url(r'logout/$', Logout),
	url(r'menus/$', Menus),
	url(r'pedidosvencidos.pedidovencido/listar/$', PedidoVencidosListar),
	url(r'pedidospendientes.pedidopendiente/listar/$', PedidoPendienteListar),
	url(r'reportes.reporteproducto/listar/$', ReporteProductoListar),
	url(r'reportes.reportecliente/listar/$', ReporteClienteListar),
	url(r'reportes.reporteproducto/imprimir/(?P<idproducto>[0-9]+)/(?P<fechaI>[0-9]+)/(?P<fechaF>[0-9]+)/$', ImprimirProductoListar),
	url(r'reportes.reporteproducto/imprimir/(?P<fechaI>[0-9]+)/(?P<fechaF>[0-9]+)/$', ImprimirAllProductoListar),
	url(r'reportes.reportecliente/imprimir/(?P<idcliente>[0-9]+)/(?P<fechaI>[0-9]+)/(?P<fechaF>[0-9]+)/$', ImprimirClienteListar),
]