Ext.define('GRUPOEJ.producto.models.controles.ControlProducto', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'cliente__nombres', type: 'string'},
		{name: 'cliente__apellidos', type: 'string'},
		{name: 'producto__descripcion', type: 'string'},
		{name: 'producto__imagen', type: 'string'},
		{name: 'cantidad_entrega', type: 'int'},
		{name: 'cantidad_devuelta', type: 'int'},
		{name: 'imagen', type: 'string'},
	],
});