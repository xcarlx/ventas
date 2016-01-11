Ext.define('GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.inicio.model.pedidosvencidos.PedidoVencido',
	],
	alias: 'viewmodel.pedidovencidomodel',
	stores:{
		store_pedidosvencidos:{
			model: 'GRUPOEJ.inicio.model.pedidosvencidos.PedidoVencido',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
	},
});