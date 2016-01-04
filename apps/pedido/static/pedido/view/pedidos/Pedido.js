Ext.define('GRUPOEJ.pedido.view.pedidos.Pedido', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
		'GRUPOEJ.pedido.view.pedidos.PedidoModelo',
		'GRUPOEJ.pedido.model.pedidos.VentaPedido',
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
		    reference: 'frompedidos',
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
					xtype: 'numberfield',
					name: 'pedidoid',
					hidden: true,
					reference: 'idpedidoreference',
				},
				{
					xtype: 'combobox',
					editable: false,
		          	fieldLabel: "Seleccionar el Producto: ",
					labelWidth: 150,
					width: 600,
					name: 'productoid',
					reference: 'comboproductospedido',
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
					name: 'cantidad',
					reference: 'cantidadproductospedido',
					xtype: 'numberfield',
					fieldLabel: 'Cantidad',
					allowNegative: false,
					allowBlank: false,
					minValue : 1,
					bind:{
						disabled: "{!comboproductospedido.selection}",
					}
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