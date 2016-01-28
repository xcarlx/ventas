Ext.define('GRUPOEJ.venta.view.creditos.VentaCreditoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.venta.model.creditos.VentaCredito',
		'GRUPOEJ.venta.model.creditos.DetalleVentaCredito',
	],
	alias: 'viewmodel.ventacredito',
	stores:{
		store_ventascredito:{
			model: 'GRUPOEJ.venta.model.creditos.VentaCredito',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_detalleventascredito:{
			model: 'GRUPOEJ.venta.model.creditos.DetalleVentaCredito',
			autoLoad: false,
		},
	},
});