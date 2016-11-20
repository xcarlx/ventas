from django.conf.urls import url
from apps.venta.views import *
urlpatterns = [
	url(r'ventas.venta/listar/$', VentaListar),
	url(r'ventas.venta/eliminar/$', VentaAnular),
	url(r'ventas.detalleventa/listar/$', DetalleVentaListar),
	url(r'ventas.venta/imprimir/(?P<idventa>\d+)$', ImprimirVenta),


	url(r'creditos.ventacredito/listar/$', VentaCreditoListar),
	url(r'creditos.detalleventacredito/listar/$', DetalleVentaCreditoListar),
	url(r'creditos.ventacredito/eliminar/$', VentaCreditoPagar),
	url(r'creditos.ventacredito/imprimir/(?P<idventa>[0-9]+)/(?P<fechaI>[0-9]+)/(?P<fechaF>[0-9]+)/$', ImprimirCredito),

	url(r'anuladas.ventaanulada/listar/$', VentaAnuladoListar),
	url(r'anuladas.detalleventaanulada/listar/$', DetalleVentaAnuladoListar),
	url(r'anuladas.ventaanulada/eliminar/$', VentaAnuladaActivar),

]
