Ext.define('GRUPOEJ.pedido.view.pedidos.PedidoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.pedido.model.pedidos.Pedido', 
		'GRUPOEJ.pedido.model.detallepedidos.DetallePedido', 
		'GRUPOEJ.pedido.model.pedidos.Producto', 
	],
	alias: 'viewmodel.pedido',
	stores:{
		store_pedidos:{
			model: 'GRUPOEJ.pedido.model.pedidos.Pedido', 
			autoLoad: true,
			pageSize: 8,
			remoteSort: true,
			remoteFilter: true,
		},
		store_detallepedidos:{
			model: 'GRUPOEJ.pedido.model.detallepedidos.DetallePedido', 
			autoLoad: false,
			pageSize: 8,
			remoteSort: true,
			remoteFilter: true,
		},
		store_productos:{
			model:'GRUPOEJ.pedido.model.pedidos.Producto', 
			autoLoad: false,
			pageSize: 8,
			remoteSort: true,
			remoteFilter: true,
		}

	},
});