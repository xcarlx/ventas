Ext.define('GRUPOEJ.inicio.view.pedidospendientes.PedidoPendiente', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteGrilla', 
		'GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteModelo',
	// 	'GRUPOEJ.producto.controller.productos.Producto',
	],
	viewModel:{
		type: 'pedidopendientemodel',
	},
	// controller: 'producto',
	items:[
		{
			xtype: 'pedidopendiente-grilla',
		},
	],
});