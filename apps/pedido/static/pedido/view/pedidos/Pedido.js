Ext.define('GRUPOEJ.pedido.view.pedidos.Pedido', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	requires:[
		'GRUPOEJ.pedido.view.pedidos.PedidoModelo',
		'GRUPOEJ.pedido.view.pedidos.PedidoGrilla',
		'GRUPOEJ.pedido.view.pedidos.DetallePedidoGrilla',
		'GRUPOEJ.pedido.controller.pedidos.Pedido',
	],
	viewModel:{
		type: 'pedido',
	},
	controller: 'pedido',
	items:[
		{
			xtype: 'pedidos-grilla-pedidos',
		},
		{
			xtype: 'form',
			extend: 'Ext.window.Window',
		    title: 'AGREGAR PRODUCTOS AL DETALLE',
		    reference: 'from-pedidos',
		    renderTo: Ext.getBody(),
			bodyPadding: 10,
			modelValidation: true,
			bind: {
				disabled: "{!pedido-grillapedidos.selection}",
			},
			layout:{
				type: 'vbox',
			},
			items:[
				{
					xtype: 'combobox',
					editable: false,
		          	fieldLabel: "Seleccionar el Producto: ",
					labelWidth: 150,
					width: 600,
					reference: 'comboproductos',
		            bind:{
		            	store: '{store_productos}',
		            },
					displayField: 'descripcion',
					valueField: 'id',
					queryMode: 'local',
					queryDelay: 5,
					queryChaching: false,
					forceSelection:true,
					editable: true,
				},
				{
					labelWidth: 150,
					reference: 'cantidadproductos',
					xtype: 'numberfield',
					fieldLabel: 'Cantidad',
					allowNegative: false,
					allowBlank: false,
					minValue : 1,

				}
			],
		},
		{
			xtype: 'detallepedido-grilla-detallepedido',
			bind: {
				disabled: "{!pedido-grillapedidos.selection}",
			},
		},
	],
});