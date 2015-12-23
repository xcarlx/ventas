Ext.define('GRUPOEJ.guia.model.guias.Guia', {
	extend: 'GRUPOEJ.models.Base',
	fields: [
		{ name: 'punto_partida' , type: 'string'},
		{ name: 'punto_llegada' , type: 'string'},
		{ name: 'fecha_emision', type: 'date'},
		{ name: 'fecha_translado', type: 'date' },
		{ name: 'clienteid' , type: 'int' },
		{ name: 'cliente__nombres' , type: 'string'},
		{ name: 'cliente__apellidos' , type: 'string'},
		{ name: 'ventaid' , type: 'int'}
	],
	validators: {
		clienteid: [
			{ type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});