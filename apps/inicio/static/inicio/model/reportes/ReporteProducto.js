Ext.define('GRUPOEJ.inicio.model.reportes.ReporteProducto', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'producto_descripcion', type: 'string'},
		{name: 'venta__pedido__cliente__nombres', type: 'string'},
		{name: 'Cantidad', type: 'number'},
		{name: 'total', type: 'number'},
	],
});