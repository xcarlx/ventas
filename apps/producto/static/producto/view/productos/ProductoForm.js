Ext.define('GRUPOEJ.producto.view.productos.ProductoForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.producto-formulario',
	width: 400,
	action: '',
	closeAction: 'hide',
	closable: true,
	modal: true,
	resizable: false,
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
			defaults: {
				// afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
				anchor: '100%',
				xtype: 'textfield',
				msgTarget: 'side',
				labelWidth: 75,
				labelAlign: 'right',
			},
			items:[
				{
					xtype: 'numberfield',
					name: 'id',
					hidden: false,
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
					value: 1,
					maxValue: 1000,
					minValue: 0.00,
					forcePrecision: true,
					decimalSeparator : ".",
					decimalPrecision : 2,
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