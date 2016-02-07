Ext.define('GRUPOEJ.producto.view.reportes.ReporteEnvaceModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.producto.models.reportes.ReporteEnvace',
		'GRUPOEJ.producto.models.reportes.DetalleReporteEnvace',
		'GRUPOEJ.producto.controller.reportes.ReporteEnvace',
	],
	alias: 'viewmodel.reporteenvace',
	stores:{
		store_rvCliente:{
			model: 'GRUPOEJ.producto.models.reportes.ReporteEnvace',
			autoLoad: true,

		},
		store_rvdEnvaces:{
			model: 'GRUPOEJ.producto.models.reportes.DetalleReporteEnvace',
			autoLoad: false,
		},
	},
});