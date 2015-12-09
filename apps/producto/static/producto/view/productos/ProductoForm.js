Ext.define('GRUPOEJ.producto.view.productos.ProductoForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.producto-form',
	width: 400,
	closeAction: 'hide',
	modal: true,
	resizable: false,
	action: "",
	height: 'auto',
	bind: {
		title: '{titulo}'
	},
	items:[
		{
			xtype: 'form',
			reference: 'formProducto',
			bodyPadding: 10,
			modelValidation: true,
			layout:{
				type: 'vbox',
				align: 'stretch'
			},
			items:[
				{
					xtype: 'numberfield',
					name: 'id',
					hidden: true,
					fieldLabel: 'Label',
					bind:'{currentProducto.id}',
				},
				{
					xtype: 'textfield',
					name: 'descripcion',
					fieldLabel: 'Descripcion',
					anchor: '100%',
					msgTarget: 'side',
					bind:'{currentProducto.descripcion}',
				},
				{
					xtype: 'numberfield',
					name: 'cantidad_actual',
					fieldLabel: 'Cantidad',
					anchor: '100%',
					value: 1,
					maxValue: 1000,
					minValue: 1,
					bind:'{currentProducto.cantidad_actual}',
				},
				{
					xtype: 'numberfield',
					name: 'precio',
					fieldLabel: 'Precio',
					anchor: '100%',
					// value: 1,
					// maxValue: 1000,
					// minValue: 0.00,
					// forcePrecision: true,
					// decimalSeparator : ".",
					// decimalPrecision : 2,
					bind:'{currentProducto.precio}',
				},
				// {
				// 	xtype: 'filefield',
				// 	name: 'imagen',
				// 	fieldLabel: 'Imagen',
			 // 		msgTarget: 'side',
				// 	allowBlank: false,
				// 	anchor: '100%',
				// 	buttonText: 'Select Foto...',
				// 	readOnly: true,
				// 	submitValue: false,
				// 	bind:{
				// 		value: '{recordProducto.imagen}'
				// 	}
				// },
			],
			dockedItems:[
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
							listeners:{
								click: 'ventana_Guardar',
							},
						},
						{
							xtype: 'button',
							iconCls: 'icono-cancelar',
							text: 'Cancelar',
							listeners:{
								click: 'ventana_Cancelar',
							},
						},

					],
				}

			]
		},
	],
	
	

});