Ext.define('GRUPOEJ.vale.model.vales.DetalleVale', {
	extend: 'GRUPOEJ.models.Base',
	fields: [
		{ name: 'producto__descripcion', type: 'string' },
		{ name: 'productoid', type: 'int' },
		{ name: 'valeid', type: 'string' },
		{ name: 'precio', type: 'number'},
		{ name: 'cantidad' , type: 'int'},
	],
	validators: {
		productoid: [
			{ type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});