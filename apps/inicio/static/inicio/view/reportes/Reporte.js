Ext.define('GRUPOEJ.inicio.view.reportes.Reporte', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.inicio.view.reportes.TabReportes',
		'GRUPOEJ.inicio.view.reportes.ReporteModelo',
		'GRUPOEJ.inicio.controller.reportes.ReporteProducto',	
	],
	viewModel:{
		type: 'reporteProducto',
	},
	controller: 'reporteproducto',
	items:[
		{
			xtype: 'reportes-tab',
		},
		
	],
});