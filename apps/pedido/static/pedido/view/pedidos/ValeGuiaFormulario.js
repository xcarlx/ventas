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
			bodyPadding: 5,
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
				labelWidth: 110,
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
					fieldLabel: 'Punto de Partida',
					name: 'punto_partida',
					allowBlank: false,
				},			
				{
					fieldLabel: 'Punto de Llegada',
					name: 'punto_llegada',
					allowBlank: false,
				},
				{
					xtype: 'panel',
					bodyPadding: 0,
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
							fieldLabel: 'Fecha Emision',
							width: 235,
							labelWidth: 110,
							msgTarget: 'side',
							allowBlank: false,
							labelAlign: 'right',
							name: 'fecha_emision',
							bind : '{currentGuia.fecha_emision}',
						},	
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha Translado',
							width: 235,
							labelWidth: 110,
							allowBlank: false,
							labelAlign: 'right',
							name: 'fecha_translado',
							bind : '{currentGuia.fecha_translado}',
						},
					]
				},

				{
					xtype: 'panel',
					bodyPadding: 5,
					margin: 5,
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
							labelWidth: 100,
							labelAlign: 'right',
							reference: 'reprogramarpedidovaleguia',
							width: '35%',
							fieldLabel: 'Reprogramar',
						},
						{
							xtype: 'numberfield',
							name: 'nro_dias',
							labelWidth: 75,
							labelAlign: 'right',
							// width: '40%',
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