Ext.define('GRUPOEJ.inicio.view.reportes.ReporteModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.inicio.model.reportes.ReporteProducto',
		'GRUPOEJ.producto.models.productos.Producto',
	],
	alias: 'viewmodel.reporteProducto',
	stores:{
		store_reporteproductogrilla:{
			model: 'GRUPOEJ.inicio.model.reportes.ReporteProducto',
			autoLoad: true,
			groupField: 'clientes_rsocial',
		},
		store_productos:{
			model:'GRUPOEJ.producto.models.productos.Producto',
			autoLoad: true,
		},
	},
});