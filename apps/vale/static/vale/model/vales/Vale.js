Ext.define('GRUPOEJ.vale.model.vales.Vale', {
	extend: 'GRUPOEJ.models.Base',
	fields: [
		{ name: 'fecha', type: 'date' },
		{ name: 'numero', type: 'string' },
		{ name: 'total', type: 'int'},
		{ name: 'observaciones' , type: 'string'},
		{ name: 'clienteid' , type: 'int' },
		{ name: 'cliente__nombre' , type: 'string'},
		{ name: 'cliente__apellido' , type: 'string'},
		{ name: 'ventaid' , type: 'int'}
	],
	validators: {
		clienteid: [
			{ type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});