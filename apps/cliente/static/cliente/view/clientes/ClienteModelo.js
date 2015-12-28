Ext.define('GRUPOEJ.cliente.view.clientes.ClienteModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.cliente.model.clientes.Cliente',
	],
	alias: 'viewmodel.cliente',
	stores:{
		store_clientes:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
			pageSize: 20,
			remoteSort: true,
			remoteFilter: true,
		}

	},
});