Ext.define('GRUPOEJ.venta.view.ventas.VentaModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.venta.model.ventas.Venta',
		'GRUPOEJ.venta.model.ventas.DetalleVenta',
	],
	alias: 'viewmodel.venta',
	stores:{
		store_ventas:{
			model: 'GRUPOEJ.venta.model.ventas.Venta',
			autoLoad: true,
			remoteFilter: true,
		},
		store_detalleventas:{
			model: 'GRUPOEJ.venta.model.ventas.DetalleVenta',
			autoLoad: false,
		},
	},
});