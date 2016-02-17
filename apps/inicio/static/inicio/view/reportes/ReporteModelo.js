Ext.define('GRUPOEJ.inicio.view.reportes.ReporteModelo', {
	extend: 'Ext.app.ViewModel',
	requires:[
		'GRUPOEJ.inicio.model.reportes.ReporteProducto',
		'GRUPOEJ.inicio.model.reportes.ReporteCliente',
		'GRUPOEJ.producto.models.productos.Producto',
		'GRUPOEJ.cliente.model.clientes.Cliente',
	],
	alias: 'viewmodel.reporteProducto',
	stores:{
		store_reporteproductogrilla:{
			model: 'GRUPOEJ.inicio.model.reportes.ReporteProducto',
			autoLoad: true,
			groupField: 'clientes_rsocial',
		},
		store_reporteclientegrilla:{
			model: 'GRUPOEJ.inicio.model.reportes.ReporteCliente',
			autoLoad: true,
		},
		store_productos:{
			model:'GRUPOEJ.producto.models.productos.Producto',
			autoLoad: true,
		},
		store_clientes:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
		},
	},
});