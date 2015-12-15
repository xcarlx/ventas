Ext.define('GRUPOEJ.vale.view.vales.ValeVistaModelo', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.vale',
	requires: [
		'GRUPOEJ.vale.model.vales.Vale', 
		'GRUPOEJ.cliente.model.clientes.Cliente',

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
			pageSize: 8,
			remoteSort: true,
			remoteFilter: true,
		}
	}
});