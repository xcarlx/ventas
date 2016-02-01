from django.conf.urls import url

urlpatterns = [
	url(r'ventas.venta/listar/$', "apps.venta.views.VentaListar", name='venta_listar'),
	url(r'ventas.venta/eliminar/$', "apps.venta.views.VentaAnular", name='venta_anular'),
	url(r'ventas.detalleventa/listar/$', "apps.venta.views.DetalleVentaListar", name='detalleventa_listar'),
	url(r'ventas.venta/imprimir/$', "apps.venta.views.ImprimirVenta", name='imprimirventa_listar'),


	url(r'creditos.ventacredito/listar/$', "apps.venta.views.VentaCreditoListar", name='venta_listar'),
	url(r'creditos.detalleventacredito/listar/$', "apps.venta.views.DetalleVentaCreditoListar", name='detalleventa_listar'),
	url(r'creditos.ventacredito/eliminar/$', "apps.venta.views.VentaCreditoPagar", name='pagar_ventacredito'),
	
	url(r'anuladas.ventaanulada/listar/$', "apps.venta.views.VentaAnuladoListar", name='venta_anulada_listar'),
	url(r'anuladas.detalleventaanulada/listar/$', "apps.venta.views.DetalleVentaAnuladoListar", name='detalleventa_anulada_listar'),
	url(r'anuladas.ventaanulada/eliminar/$', "apps.venta.views.VentaAnuladaActivar", name='venta_anulada_activar_listar'),

]
