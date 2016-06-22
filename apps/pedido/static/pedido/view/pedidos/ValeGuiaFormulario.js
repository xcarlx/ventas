Ext.define('GRUPOEJ.pedido.view.pedidos.ValeGuiaFormulario', {
	extend: 'Ext.window.Window',
	alias: 'widget.valeguia-formulario',
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
			reference: 'valeguiaFormulariopedido',
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
					fieldLabel: 'Label',
					reference: 'valeguiapedidoid',
				},
				{
					xtype: 'combobox',
					name: 'tipo_documento',
					forceSelection: true,
					editable: true,
					fieldLabel: 'Documento',
					store: [['VALE', 'VALE'], ['GUIA', 'GUIA REMISION']],
					anchor: '100%',
					allowBlank: false,
					msgTarget: 'side',
					reference: 'combodocvaleguia',
					listeners: {
						select: 'SeleccionarCombo',
					},
				},

				{
					fieldLabel: 'Punto Partida',
					name: 'punto_partida',
					allowBlank: false,
				},			
				{
					fieldLabel: 'Punto Llegada',
					name: 'punto_llegada',
					allowBlank: false,
				},
				{
					xtype: 'panel',
					bodyPadding: '0 0 5 5',
					margin: 0,
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'hbox',
					},
					items:[
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha Emis',
							width: 230,
							labelWidth: 95,
							msgTarget: 'side',
							allowBlank: false,
							labelAlign: 'right',
							name: 'fecha_emision',
							bind : '{currentGuia.fecha_emision}',
						},	
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha Trans',
							width: 230,
							labelWidth: 100,
							allowBlank: false,
							labelAlign: 'right',
							name: 'fecha_translado',
							bind : '{currentGuia.fecha_translado}',
						},
					]
				},

				{
					xtype: 'panel',
					bodyPadding: '5 5 5 5',
					margin: 0,
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'hbox',
					},
					items:[
						{
							xtype: 'checkboxfield',
							name: 'reprogramar',
							labelWidth: 95,
							labelAlign: 'right',
							reference: 'reprogramarpedidovaleguia',
							width: '50%',
							fieldLabel: 'Reprogramar',
						},
						{
							xtype: 'numberfield',
							name: 'nro_dias',
							labelWidth: 80,
							labelAlign: 'right',
							width: '50%',
							fieldLabel: ' Nro de Dias',
							allowNegative: false,
							allowBlank: true,
							minValue : 0,
							bind:{
								disabled: "{!reprogramarpedidovaleguia.checked}",
							}
						},
					],
				},
				{
					xtype: 'panel',
					bodyPadding: '5 5 5 5',
					margin: 0,
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'vbox',
					},
					items:[
						
						{
							xtype: 'textfield',
							labelWidth: 95,
							labelAlign: 'right',
							name: 'cliente__frecuencia',
							fieldLabel: 'Frecuencia',
							width: '50%',
							readOnly: true,	
						},

					],
				},
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
							listeners:{
								click: 'valeguia_ventana_Guardar',
							},
						},
						{
							xtype: 'button',
							iconCls: 'icono-cancelar',
							text: 'Cancelar',
							listeners:{
								click: 'valeguia_ventana_Cancelar',
							},
						},

					],
				}
			]
		}
	],
});