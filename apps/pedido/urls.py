from django.conf.urls import url
from apps.pedido.views import *

urlpatterns = [
	url(r'pedidos.pedido/listar/$', PedidoListar),
	url(r'pedidos.pedido/eliminar/$', PedidoEliminar),
	url(r'pedidos.pedido/crear/$', PedidoCrear),
	url(r'pedidos.pedido/editar/$', PedidoEditar),

	url(r'pedidos.producto/listar/$', ProductoListar),
	url(r'pedidos.detallepedido/listar/$', DetallePedidoListar),
	url(r'pedidos.detallepedido/crear/$', DetallePedidoCrear),
	url(r'pedidos.detallepedido/eliminar/$', DetallePedidoEliminar),

	url(r'pedidos.ventapedido/crear/$', VentaPedidoCrear),
	url(r'pedidos.ventapedido/listar/$', VentaPedidoListar),
	url(r'pedidos.valeguiapedido/crear/$',ValeGuiaPedidoCrear),
	# url(r'pedidos.ventapedido/listar/$', "apps.pedido.views.VentaPedidoListar", name='ventapedido_crear'),
]

