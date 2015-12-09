Ext.define('GRUPOEJ.producto.view.productos.ProductoModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.producto.models.productos.Producto',
	],
	alias: 'viewmodel.productomodel',
	stores:{
		store_producto:{
			model: 'GRUPOEJ.producto.models.productos.Producto',
			autoLoad: true,
			pageSize: 8,
			remoteSort: true,
			remoteFilter: true,
		}

	},
});