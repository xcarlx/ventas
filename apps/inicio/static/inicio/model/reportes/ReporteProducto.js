Ext.define('GRUPOEJ.inicio.model.reportes.ReporteProducto', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'producto_descripcion', type: 'string'},
		{name: 'clientes_rsocial', type: 'string'},
		{name: 'cantidad', type: 'number'},
		{name: 'total', type: 'number'},
	],
	// groupField: 'clientes_rsocial',
});