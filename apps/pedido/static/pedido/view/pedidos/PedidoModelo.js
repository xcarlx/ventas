Ext.define('GRUPOEJ.pedido.view.pedidos.PedidoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.pedido.model.pedidos.Pedido', 
		'GRUPOEJ.pedido.model.pedidos.DetallePedido',
		'GRUPOEJ.pedido.model.pedidos.Producto', 
		'GRUPOEJ.cliente.model.clientes.Cliente',
		'GRUPOEJ.pedido.model.pedidos.VentaPedido',
		'GRUPOEJ.pedido.model.pedidos.ValeGuiaPedido',

	],
	alias: 'viewmodel.pedido',
	stores:{
		store_pedidos:{
			model: 'GRUPOEJ.pedido.model.pedidos.Pedido', 
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_detallepedidos:{
			model: 'GRUPOEJ.pedido.model.pedidos.DetallePedido',
			autoLoad: false,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_productos:{
			model:'GRUPOEJ.pedido.model.pedidos.Producto', 
			autoLoad: false,
		},
		store_comboclientespedido:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
			// pageSize: gridPageSize,
			// remoteSort: true,
			// remoteFilter: true,
		},		
		store_ventapedido:{
			model: 'GRUPOEJ.pedido.model.pedidos.VentaPedido',
			autoLoad: false,
			// pageSize: gridPageSize,
			// remoteSort: true,
			// remoteFilter: true,
		},		
		store_valeguiapedido:{
			model: 'GRUPOEJ.pedido.model.pedidos.ValeGuiaPedido',
			autoLoad: false,
			// pageSize: gridPageSize,
			// remoteSort: true,
			// remoteFilter: true,
		},

	},
});