Ext.define('GRUPOEJ.pedido.model.pedidos.VentaPedido', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'pedidoid', type: 'int'},
		{name: 'tipo_documento', type: 'string'},
		{name: 'numero_correlativo', type: 'int'},
		{name: 'numero_documento', type: 'int'},
		{name: 'reprogramar', type: 'boolean'},
		{name: 'credito', type: 'boolean'},
		{name: 'nro_dias', type: 'int'},

	],
	validators:{
		pedidoid: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		tipo_documento: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		numero_correlativo: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
		numero_documento: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});