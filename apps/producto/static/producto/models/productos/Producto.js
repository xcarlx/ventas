Ext.define('GRUPOEJ.producto.models.productos.Producto', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'descripcion', type: 'string'},
		{name: 'precio', type: 'number'},
		{name: 'imagen', type: 'string'},
	],
	validators:{
		descripcion: [
			{type: 'presence', message: 'Este campo es obligatorio'},
			{type: 'length', min:3, max: 100, message: 'Debe tener entre {0} y {1} caracteres'},
		],
		precio: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});