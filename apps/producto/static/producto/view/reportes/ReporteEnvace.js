Ext.define('GRUPOEJ.producto.view.reportes.ReporteEnvace', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.producto.view.reportes.ReporteEnvaceGrilla',
		'GRUPOEJ.producto.view.reportes.DetalleControlEnvaceGrilla',
		'GRUPOEJ.producto.view.reportes.ReporteEnvaceModelo',
	],
	viewModel:{
		type: 'reporteenvace',
	},
	controller: 'reportesenvace',
	items:[
		{
			xtype: 'reporteenvace-grilla',
		},
		{
			xtype: 'detallecontrolenvace-grilla',
		},
	],
});