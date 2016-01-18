Ext.define('GRUPOEJ.producto.view.controles.ControlProducto', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.producto.view.controles.ClienteCombo',
		'GRUPOEJ.producto.view.controles.ProductoControlGrilla',
		'GRUPOEJ.producto.view.controles.ControlarProductoModelo',
	],
	viewModel:{
		type: 'controlarproductomodel',
	},
	// controller: 'producto',
	items:[
		{
			xtype: 'cliente-combo',
		},
		{
			xtype: 'productocontrol-Grilla',
		},
	],
});