Ext.define('GRUPOEJ.guia.model.guias.VentaGuia', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'tipo_documento', type: 'string'},
		{name: 'numero_correlativo', type: 'int'},
		{name: 'numero_documento', type: 'int'},
		{name: 'credito', type: 'boolean'},

	],
});