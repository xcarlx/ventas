Ext.define('GRUPOEJ.vale.model.vales.Producto', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'descripcion', type: 'string'},
		{name: 'cantidad_actual', type: 'int'},
		{name: 'producto__precio', type: 'number'},
		{name: 'imagen', type: 'string'},
	],
	validators:{
		descripcion: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:3, max: 100, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		cantidad_actual: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		producto__precio: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});