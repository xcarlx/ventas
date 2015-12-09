Ext.define('GRUPOEJ.pedido.model.detallepedidos.DetallePedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'pedido__nro_pedido', type: 'string'},
		{name: 'pedidoid', type: 'int'},
		{name: 'producto__descripcion', type: 'string'},
		{name: 'productoid', type: 'int'},
		{name: 'cantidad', type: 'int'},
	],
	validators:{
		cantidad: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});