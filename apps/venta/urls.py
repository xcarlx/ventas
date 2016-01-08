from django.conf.urls import url

urlpatterns = [
	url(r'ventas.venta/listar/$', "apps.venta.views.VentaListar", name='venta_listar'),

]
