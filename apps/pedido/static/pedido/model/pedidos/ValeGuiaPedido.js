Ext.define('GRUPOEJ.pedido.model.pedidos.ValeGuiaPedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'pedidoid', type: 'int'},
		{name: 'tipo_documento', type: 'string'},
		{name: 'reprogramar', type: 'boolean'},
		{name: 'nro_dias', type: 'int'},

	],
	validators:{
		pedidoid: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		tipo_documento: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});