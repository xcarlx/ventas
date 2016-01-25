Ext.define('GRUPOEJ.pedido.model.pedidos.ValeGuiaPedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'pedidoid', type: 'int'},
		{name: 'tipo_documento', type: 'string'},
		{name: 'punto_partida', type: 'string'},
		{name: 'punto_llegada', type: 'string'},
		{name: 'fecha_emision', type: 'date'},
		{name: 'fecha_translado', type: 'date'},
		{name: 'reprogramar', type: 'boolean'},
		{name: 'nro_dias', type: 'int'},

	],
	validators:{
		tipo_documento: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});