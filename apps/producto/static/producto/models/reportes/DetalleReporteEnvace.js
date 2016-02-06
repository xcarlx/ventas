Ext.define('GRUPOEJ.producto.models.reportes.DetalleReporteEnvace', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'cliente__nombres', type: 'string'},
		{name: 'producto__descripcion', type: 'string'},
		{name: 'entregado', type: 'int'},
		{name: 'devuelto', type: 'int'},
	],
});