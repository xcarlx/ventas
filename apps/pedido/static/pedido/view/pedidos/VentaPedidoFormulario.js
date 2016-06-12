Ext.define('GRUPOEJ.pedido.view.pedidos.VentaPedidoFormulario', {
	extend: 'Ext.window.Window',
	alias: 'widget.ventapedido-formulario',
	width: 400,
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
			reference: 'ventaFormulariopedido',
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
				labelWidth: 90,
				labelAlign: 'right',
			},
			items: [
				{
					xtype: 'numberfield',
					name: 'pedidoid',
					hidden: true,
					fieldLabel: 'Label',
					reference: 'ventapedidoid',
				},
				{
					xtype: 'combobox',
					name: 'tipo_documento',
					forceSelection: true,
					editable: true,
					fieldLabel: 'Documento',
					store: [['SIN_COMPROBANTE', 'SIN COMPROBANTE'], ['BOLETA', 'BOLETA'],['FACTURA', 'FACTURA']],
					anchor: '100%',
					msgTarget: 'side',
				},
				{
					xtype: 'panel',
					bodyPadding: 2,
					margin: 2,
					border: false,
					width: '100%',
					layout:{
						type: 'hbox',
					},
					items:[
						{
							xtype: 'numberfield',
							name: 'numero_correlativo',
							labelWidth: 85,
							labelAlign: 'right',
							width: '40%',
							fieldLabel: 'Correlativo',
							allowNegative: false,
							allowBlank: false,
							minValue : 0,
						},
						{
							xtype: 'numberfield',
							name: 'numero_documento',
							labelWidth: 40,
							labelAlign: 'right',
							// width: '40%',
							fieldLabel: ' Nro',
							allowNegative: false,
							allowBlank: false,
							minValue : 0,
						},
					],
				},
				{
					xtype: 'panel',
					border: false,
					width: '100%',
					layout:{
						type: 'vbox',
					},
					items:[
						{
							xtype: 'checkboxfield',
							name: 'credito',
							labelWidth: 90,
							labelAlign: 'right',
							width: '40%',
							fieldLabel: 'Credito',
						},
					],
				},
				{
					xtype: 'panel',
					bodyPadding: 2,
					margin: 2,
					border: false,
					width: '100%',
					layout:{
						type: 'hbox',
					},
					items:[
						{
							xtype: 'checkboxfield',
							name: 'reprogramar',
							labelWidth: 85,
							labelAlign: 'right',
							reference: 'reprogramarpedidoventa',
							width: '30%',
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
							width: '65%',
							bind:{
								disabled: "{!reprogramarpedidoventa.checked}",
							}
						},
					
					],
				},
				{
					xtype: 'panel',
					bodyPadding: 2,
					margin: 2,
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'vbox',
					},
					items:[
						
						{
							xtype: 'textfield',
							labelWidth: 85,
							labelAlign: 'right',
							name: 'cliente__frecuencia',
							fieldLabel: 'Frecuencia',
							width: '80%',
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
								click: 'ventapedido_ventana_Guardar',
							},
						},
						{
							xtype: 'button',
							iconCls: 'icono-cancelar',
							text: 'Cancelar',
							listeners:{
								click: 'venta_ventana_Cancelar',
							},
						},

					],
				}
			]
		}
	],
});