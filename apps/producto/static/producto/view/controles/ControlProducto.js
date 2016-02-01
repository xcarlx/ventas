Ext.define('GRUPOEJ.producto.view.controles.ControlProducto', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.producto.view.controles.ControlarProductoModelo',
		'GRUPOEJ.producto.view.controles.ClienteCombo',
		'GRUPOEJ.producto.view.controles.ProductoControlGrilla',
		'GRUPOEJ.producto.controller.controles.ControlProducto',
	],
	viewModel:{
		type: 'controlarproductomodel',
	},
	controller: 'controlproducto',
	items:[
		{
			xtype: 'cliente-combo',
		},
		{
			xtype: 'productocontrol-Grilla',
		},
	],
});