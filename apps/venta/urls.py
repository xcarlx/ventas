from django.conf.urls import url

urlpatterns = [
	url(r'ventas.venta/listar/$', "apps.venta.views.VentaListar", name='venta_listar'),
	url(r'ventas.detalleventa/listar/$', "apps.venta.views.DetalleVentaListar", name='detalleventa_listar'),
]
