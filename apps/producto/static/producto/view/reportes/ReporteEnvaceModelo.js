Ext.define('GRUPOEJ.producto.view.reportes.ReporteEnvaceModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.producto.models.reportes.ReporteEnvace',
		'GRUPOEJ.producto.models.reportes.DetalleReporteEnvace',
	],
	alias: 'viewmodel.reporteenvace',
	stores:{
		store_rvCliente:{
			model: 'GRUPOEJ.producto.models.reportes.ReporteEnvace',
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_rvdEnvaces:{
			model: 'GRUPOEJ.producto.models.reportes.DetalleReporteEnvace',
			autoLoad: false,
		},
	},
});