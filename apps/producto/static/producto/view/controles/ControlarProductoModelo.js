Ext.define('GRUPOEJ.producto.view.controles.ControlarProductoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.producto.models.controles.ControlProducto',
		'GRUPOEJ.cliente.model.clientes.Cliente',
	],
	alias: 'viewmodel.controlarproductomodel',
	stores:{
		store_controlarproducto:{
			model: 'GRUPOEJ.producto.models.controles.ControlProducto',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_clientes:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
		}

	},
});