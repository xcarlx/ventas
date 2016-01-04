Ext.define('GRUPOEJ.pedido.model.pedidos.Pedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'fecha_pedido', type: 'date'},
		{name: 'fecha_entrega', type: 'date'},
		{name: 'clienteid', type: 'int'},
		{name: 'cliente__nombre', type: 'string'},
		{name: 'cliente__apellidos', type: 'string'},
		{name: 'nro_dias', type: 'number'},
		{name: 'nro_pedido', type: 'string'},
		{name: 'estado', type: 'boolean'},
	],
	validators:{
		nro_dias: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});