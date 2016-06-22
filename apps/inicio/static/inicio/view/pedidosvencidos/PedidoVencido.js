Ext.define('GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencido', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoGrilla', 
		'GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoModelo',
		'GRUPOEJ.inicio.controller.reportes.ReporteProducto',	
	],
	viewModel:{
		type: 'pedidovencidomodel',
	},
	controller: 'reporteproducto',
	items:[
		{
			xtype: 'pedidovencido-grilla',
		},
	],
});