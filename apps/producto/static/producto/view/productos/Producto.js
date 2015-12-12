Ext.define('GRUPOEJ.producto.view.productos.Producto', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.producto.view.productos.ProductoGrilla',
		'GRUPOEJ.producto.view.productos.ProductoModelo',
		'GRUPOEJ.producto.controller.productos.Producto',
	],
	viewModel:{
		type: 'productomodel',
	},
	controller: 'producto',
	items:[
		{
			xtype: 'aliasgrilla-productos',
		},
	],
});