Ext.define('GRUPOEJ.producto.view.controles.ControlarProductoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.producto.models.controles.ControlProducto',
		'GRUPOEJ.cliente.model.clientes.Cliente',
		'GRUPOEJ.producto.models.productos.Producto',
	],
	alias: 'viewmodel.controlarproductomodel',
	stores:{
		store_controlarproducto:{
			model: 'GRUPOEJ.producto.models.controles.ControlProducto',
			autoLoad: false,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_clientes:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
		},
		store_comboproductoprestamo:{
			model: 'GRUPOEJ.producto.models.productos.Producto',
			autoLoad: true,
		}

	},
});