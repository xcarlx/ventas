Ext.define('GRUPOEJ.inicio.model.pedidosvencidos.PedidoVencido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'fecha_pedido', type: 'date'},
		{name: 'fecha_entrega', type: 'date'},
		{name: 'clienteid', type: 'int'},
		{name: 'cliente__nombre', type: 'string'},
		{name: 'cliente__apellidos', type: 'string'},
		{name: 'cliente__telefono', type: 'string'},
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