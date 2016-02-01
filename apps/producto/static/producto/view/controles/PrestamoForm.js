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
					xtype: 'combobox',
					fieldLabel: "Producto",
					reference: 'comboproductosprestamo',
					displayField: 'descripcion',
					valueField: 'id',
					allowBlank: false,
					bind:{
						store: '{store_comboproductoprestamo}',
						value: '{currentPrestamo.productoid}',
					},
					name: 'productoid',
					queryMode: 'local',
					listConfig:{
						maxHeight: 200,
					},
					queryDelay: 5,
					queryChaching: false,
					forceSelection:true,
					hideTrigger: true,
					editable: true,
					triggerAction: 'all',
					// typeAheadDelay: 100,
					// minChars: 3,
					lastQuery: '',
					typeAhead: true,
					listeners: {
				        // delete the previous query in the beforequery event or set
				        // combo.lastQuery = null (this will reload the store the next time it expands)
				        beforequery: function(qe){
				            delete qe.combo.lastQuery;
				        }
				    },
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