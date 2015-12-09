Ext.define('GRUPOEJ.cliente.model.clientes.Cliente', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'nombres', type: 'string'},
		{name: 'apellidos', type: 'string'},
		{name: 'tipo_documento', type: 'string'},
		{name: 'nro_documento', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'telefono', type: 'string'},
		{name: 'direccion', type: 'string'},
		{name: 'area', type: 'string'},
		{name: 'responsable', type: 'string'},
		{name: 'tipocliente', type: 'string'},
	],
	validators:{
		nombres: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:3, max: 100, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		tipo_documento: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		nro_documento: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:3, max: 11, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		email: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:6, max: 45, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		telefono: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:6, max: 10, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		direccion: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:6, max: 150, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		tipocliente: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});