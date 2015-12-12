Ext.define('GRUPOEJ.vale.model.vales.Vale', {
	extend: 'GRUPOEJ.models.Base',
	fields: [
		{ name: 'fecha', type: 'date' },
		{ name: 'numero', type: 'string' },
		{ name: 'total', type: 'int', defaultValue: 1 },
		{ name: 'observaciones' , type: 'string'},
		{ name: 'clienteid' , type: 'int'},
		{ name: 'cliente__nombre' , type: 'string'},
		{ name: 'cliente__apellido' , type: 'string'},
		{ name: 'ventaid' , type: 'int'}
	],
	// validators: {
	// 	nombre: [
	// 		{ type: 'format', matcher: /([a-z]*)/i, message: 'No cumple los requisitos' },
	// 		{ type: 'presence', message: 'Este campo es obligatorio'},
	// 		{ type: 'length', min: 3, max: 200, message: 'Debe tener entre {0} y {1} caracteres' }
	// 	],
	// 	orden: [
	// 		{ type: 'presence', message: 'Este campo es obligatorio'},
	// 	],
	// },
});