Ext.define('GRUPOEJ.producto.view.productos.Producto', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	requires:[
		'GRUPOEJ.producto.view.productos.ProductoModelo',
		'GRUPOEJ.producto.view.productos.ProductoGrilla',
		'GRUPOEJ.producto.controller.productos.Producto',
	],
	viewModel:{
		type: 'productomodel',
	},
	controller: 'producto',
	items:[
		{
			xtype: 'productos-grilla-productos',
		},
	],
});