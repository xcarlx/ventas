from django.conf.urls import url

urlpatterns = [
	url(r'pedidos.pedido/listar/$', "apps.pedido.views.PedidoListar", name='pedido_listar'),
	url(r'pedidos.pedido/eliminar/$', "apps.pedido.views.PedidoEliminar", name='pedido_eliminar'),
	url(r'pedidos.pedido/crear/$', "apps.pedido.views.PedidoCrear", name='pedido_crear'),
	url(r'pedidos.pedido/editar/$', "apps.pedido.views.PedidoEditar", name='pedido_editar'),

	url(r'pedidos.producto/listar/(?P<idPe>\d+)$', "apps.pedido.views.ProductoListar", name='productos_listar'),
	url(r'detallepedidos.detallepedido/listar/(?P<idPe>\d+)$', "apps.pedido.views.DetallePedidoListar", name='detallepedido_listar'),
	url(r'pedidos.detallepedido/crear/$', "apps.pedido.views.DetallePedidoCrear", name='detallepedido_crear'),
	url(r'pedidos.detallepedido/eliminar/$', "apps.pedido.views.DetallePedidoEliminar", name='detallepedido_eliminar'),

	url(r'pedidos.ventapedido/crear/$', "apps.pedido.views.VentaPedidoCrear", name='ventapedido_crear'),
]

