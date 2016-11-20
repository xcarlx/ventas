Ext.define('GRUPOEJ.pedido.model.pedidos.ClienteDeudor', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'id', type: 'int'},
		{name: 'cliente', type: 'string'},
		{name: 'debe', type: 'string'},
	],
	validators:{
		cantidad: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});