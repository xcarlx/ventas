Ext.define('GRUPOEJ.vale.view.vales.ValeVistaModelo', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.vale',
	requires: [
		'GRUPOEJ.vale.model.vales.Vale', 
		'GRUPOEJ.cliente.model.clientes.Cliente',
		'GRUPOEJ.vale.model.vales.Producto',
		'GRUPOEJ.vale.model.vales.DetalleVale',
		'GRUPOEJ.vale.model.vales.VentaVale',
	],
	stores: {
		store_vale: {
			model: 'GRUPOEJ.vale.model.vales.Vale', 
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,

		},
		store_comboclientes:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
			// pageSize: gridPageSize,
			// remoteSort: true,
			// remoteFilter: true,
		},
		store_productos:{
			model:'GRUPOEJ.vale.model.vales.Producto', 
			autoLoad: false,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},	
		store_detallevale:{
			model:'GRUPOEJ.vale.model.vales.DetalleVale',
			autoLoad: false,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},

		store_ventavale:{
			model: 'GRUPOEJ.vale.model.vales.VentaVale',
			autoLoad: false,
			// pageSize: gridPageSize,
			// remoteSort: true,
			// remoteFilter: true,
		},	
	}
});