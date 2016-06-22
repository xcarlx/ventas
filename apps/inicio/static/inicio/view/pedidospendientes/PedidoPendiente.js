Ext.define('GRUPOEJ.inicio.view.pedidospendientes.PedidoPendiente', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteGrilla', 
		'GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteModelo',
		'GRUPOEJ.inicio.controller.reportes.ReporteProducto',	
	],
	viewModel:{
		type: 'pedidopendientemodel',
	},
	controller: 'reporteproducto',
	items:[
		{
			xtype: 'pedidopendiente-grilla',
		},
	],
});