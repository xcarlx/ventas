Ext.define('GRUPOEJ.pedido.model.pedidos.DetallePedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'pedidoid', type: 'int'},
		{name: 'producto__descripcion', type: 'string'},
		{name: 'productoid', type: 'int'},
		{name: 'cantidad', type: 'int'},
		{name: 'producto__precio', type: 'number'},
	],
	validators:{
		cantidad: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});