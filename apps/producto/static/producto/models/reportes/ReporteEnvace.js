Ext.define('GRUPOEJ.producto.models.reportes.ReporteEnvace',{
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'cliente__nombres', type: 'string'},
		{name: 'cliente__nro_documento', type: 'string'},
		{name: 'cliente__telefono', type: 'string'},
		{name: 'cliente__direccion', type: 'string'},
	],

});