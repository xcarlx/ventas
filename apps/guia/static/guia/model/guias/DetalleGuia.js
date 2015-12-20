Ext.define('GRUPOEJ.guia.model.guias.DetalleGuia', {
	extend: 'GRUPOEJ.models.Base',
	fields: [
		{ name: 'producto__descripcion', type: 'string' },
		{ name: 'productoid', type: 'int' },
		{ name: 'guia_remisionid', type: 'string' },
		{ name: 'cantidad' , type: 'int'},
	],
	validators: {
		productoid: [
			{ type: 'presence', message: 'Este campo es obligatorio'},
		],
		cantidad: [
			{ type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});