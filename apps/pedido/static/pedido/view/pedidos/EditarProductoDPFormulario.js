Ext.define('GRUPOEJ.pedido.view.pedidos.EditarProductoDPFormulario', {
	extend: 'Ext.window.Window',
	alias: 'widget.editarproducto-formulario',
	width: 490,
	action: '',
	closeAction: 'hide',
	closable: true,
	modal: true,
	resizable: false,
	bind: {
		title: '{titulo}'
	},	
	items: [
		{
			xtype: 'form',
			reference: 'editarprodcutoFormulariodp',
			bodyPadding: '10 15 5 5',
			modelValidation: true,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			defaults: {
				afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
				anchor: '100%',
				xtype: 'textfield',
				msgTarget: 'side',
				labelWidth: 100,
				labelAlign: 'right',
			},

			items: [
				{
					xtype: 'numberfield',
					name: 'pedidoid',
					hidden: true,
					reference: 'iddetallepedidoreference',
				},
				{
					xtype: 'combobox',
					editable: false,
					fieldLabel: "Producto",
					labelWidth: 70,
					width: 380,
					name: 'productoid',
					reference: 'comboproductoseditarpedido',
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
					listConfig: {
						getInnerTpl: function() {
							// here you place the images in your combo
							var tpl = '<div>'+
									  '{imagen2} &nbsp;&nbsp; &nbsp;&nbsp; '+
									  '{descripcion}</div>';
							return tpl;
						}
					}
				},
				{
					xtype: 'panel',
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'hbox',
					},
					items:[
						{
							labelWidth: 70,
							width: 180,
							name: 'cantidad',
							reference: 'cantidadproductosdetallepedido',
							xtype: 'numberfield',
							fieldLabel: 'Cantidad',
							allowNegative: false,
							allowBlank: false,
							minValue : 1,
							bind:{
								disabled: "{!comboproductospedido.selection}",
							}
						},
						{
							// id: "precio_producto",
							labelWidth: 50,
							width: 180,
							xtype: 'numberfield',
							name: 'precio',
							margin: '0 0 0 20',
							fieldLabel: 'Precio ',
							anchor: '100%',
							maxValue: 1000,
							minValue: 0.00,
							forcePrecision: true,
							decimalSeparator : ".",
							decimalPrecision : 2,
							// bind:{
							// 	disabled: "{!comboproductospedido.selection}",
							// 	value:"{comboproductospedido.selection.precio}",
							// },
						},
					],
				}
			],
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'bottom',
					layout: {
						pack: 'end',
						type: 'hbox'
					},

					items:[
						{
							xtype: 'button',
							iconCls: 'icono-guardar',
							text: 'Guardar',
							formBind: true,
							// listeners:{
							// 	click: 'valeguia_ventana_Guardar',
							// },
						},
						{
							xtype: 'button',
							iconCls: 'icono-cancelar',
							text: 'Cancelar',
							// listeners:{
							// 	click: 'valeguia_ventana_Cancelar',
							// },
						},

					],
				}
			]
		}
	],
});