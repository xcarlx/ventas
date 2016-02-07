Ext.define('GRUPOEJ.venta.model.creditos.VentaCredito', {
	extend: 'GRUPOEJ.models.Base',
	fields:[
		{name: 'fecha', type: 'date'},
		{name: 'tipo_documento', type: 'string'},
		{name: 'numero_documento1', type: 'string'},
		{name: 'numero_correlativo', type: 'string'},
		{name: 'numero_documento', type: 'string'},
		{name: 'sub_total', type: 'number'},
		{name: 'igv', type: 'number'},
		{name: 'total', type: 'number'},
		{name: 'pedido__cliente__nombre', type: 'string'},
		{name: 'pedido__cliente__apellidos', type: 'string'},
		{name: 'estado', type: 'string'},
		{name: 'totalv', type: 'number'},
	],
	validators:{
		nro_dias: [
			{type: 'presence', message: 'Este campo es obligatorio'},
		],
	},
});