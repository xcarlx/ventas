Ext.define('GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencido', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoGrilla', 
		'GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoModelo',
	// 	'GRUPOEJ.producto.controller.productos.Producto',
	],
	viewModel:{
		type: 'pedidovencidomodel',
	},
	// controller: 'producto',
	items:[
		{
			xtype: 'pedidovencido-grilla',
		},
	],
});