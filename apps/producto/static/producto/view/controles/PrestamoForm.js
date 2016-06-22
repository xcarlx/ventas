Ext.define('GRUPOEJ.producto.view.controles.PrestamoForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.prestamo-formulario',
	width: 480,
	action: '',
	closeAction: 'hide',
	closable: true,
	modal: true,
	resizable: false,	
	title: 'Prestamo',
	items:[
		{
			xtype: 'form',
			reference: 'formPrestamo',
			bodyPadding: 10,
			modelValidation: true,
			bind:  {
				title: '{titulo}'
			},
			layout:{
				type: 'vbox',
				align: 'stretch'
			},
			defaults: {
				afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
				anchor: '100%',
				xtype: 'textfield',
				msgTarget: 'side',
				labelWidth: 120,
				labelAlign: 'right',
			},
			items:[
				{
					xtype: 'numberfield',
					name: 'id',
					hidden: true,
					fieldLabel: 'Label',
					bind:'{currentPrestamo.id}',
				},
				{
					xtype: 'datefield',
					fieldLabel: 'Fecha',
					// width: 230,
					// labelWidth: 95,
					msgTarget: 'side',
					allowBlank: false,
					labelAlign: 'right',
					name: 'fecha',
					bind : '{currentPrestamo.fecha}',
				},	
				{
					xtype: 'textfield',
					name: 'nro_documento',
					fieldLabel: 'Nro Documento',
					anchor: '100%',
					msgTarget: 'side',
					bind: '{currentPrestamo.nro_documento}'

				},
				{
					xtype: 'numberfield',
					name: 'entregado',
					fieldLabel: 'Cantidad Entregada',
					anchor: '100%',
					value: 1,
					maxValue: 1000,
					minValue: 0,
					forcePrecision: true,
					bind:'{currentPrestamo.entregado}',
				},				
				{
					xtype: 'numberfield',
					name: 'devuelto',
					fieldLabel: 'Cantidad Devuelta',
					anchor: '100%',
					value: 1,
					maxValue: 1000,
					minValue: 0,
					forcePrecision: true,
					bind:'{currentPrestamo.devuelto}',
				},
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