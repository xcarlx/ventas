Ext.define('GRUPOEJ.pedido.model.pedidos.Pedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'fecha_pedido', type: 'date'},
		{name: 'fecha_entrega', type: 'date'},
		{name: 'clienteid', type: 'int'},
		{name: 'cliente__nombre', type: 'number'},
		{name: 'estado', type: 'boolean'},
	],
	validators:{
		fecha_pedido: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		fecha_entrega: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		precio: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		cliente__nombre: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});