Ext.define('GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.inicio.model.pedidospendientes.PedidoPendiente',
	],
	alias: 'viewmodel.pedidopendientemodel',
	stores:{
		store_pedidospendientes:{
			model: 'GRUPOEJ.inicio.model.pedidospendientes.PedidoPendiente',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
	},
});