Ext.define('GRUPOEJ.venta.view.anuladas.VentaAnuladaModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.venta.model.anuladas.VentaAnulada',
		'GRUPOEJ.venta.model.anuladas.DetalleVentaAnulada',
	],
	alias: 'viewmodel.ventaanulada',
	stores:{
		store_ventasanulada:{
			model: 'GRUPOEJ.venta.model.anuladas.VentaAnulada',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_detalleventasanulada:{
			model: 'GRUPOEJ.venta.model.anuladas.DetalleVentaAnulada',
			autoLoad: false,
		},
	},
});