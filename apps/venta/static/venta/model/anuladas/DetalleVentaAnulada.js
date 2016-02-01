Ext.define('GRUPOEJ.venta.model.anuladas.DetalleVentaAnulada', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'ventaid', type: 'int'},
		{name: 'producto__descripcion', type: 'string'},
		{name: 'productoid', type: 'int'},
		{name: 'cantidad', type: 'int'},
		{name: 'precio', type: 'number'},
	],
});