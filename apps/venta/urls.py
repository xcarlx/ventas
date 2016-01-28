from django.conf.urls import url

urlpatterns = [
	url(r'ventas.venta/listar/$', "apps.venta.views.VentaListar", name='venta_listar'),
	url(r'creditos.ventacredito/listar/$', "apps.venta.views.VentaCreditoListar", name='venta_listar'),
	url(r'ventas.detalleventa/listar/$', "apps.venta.views.DetalleVentaListar", name='detalleventa_listar'),
	url(r'creditos.detalleventacredito/listar/$', "apps.venta.views.DetalleVentaCreditoListar", name='detalleventa_listar'),
	url(r'ventas.venta/imprimir/$', "apps.venta.views.ImprimirVenta", name='imprimirventa_listar'),

]
