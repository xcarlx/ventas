Ext.define('GRUPOEJ.producto.view.controles.ControlarProductoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.producto.models.controles.ControlProducto',
	],
	alias: 'viewmodel.controlarproductomodel',
	stores:{
		store_controlarproducto:{
			model: 'GRUPOEJ.producto.models.controles.ControlProducto',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		}

	},
});