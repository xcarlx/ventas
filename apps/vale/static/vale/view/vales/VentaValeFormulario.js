Ext.define('GRUPOEJ.vale.view.vales.VentaValeFormulario', {
	extend: 'Ext.window.Window',
	alias: 'widget.ventavale-formulario',
	width: 387,
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
			reference: 'ventaFormulariovale',
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
				labelWidth: 85,
				labelAlign: 'right',
			},
			items: [
				{
					name: 'valesid',
					hidden: true,
					fieldLabel: 'Label',
				},
				{
					xtype: 'combobox',
					name: 'tipo_documento',
					forceSelection: true,
					allowBlank: false,
					editable: true,
					fieldLabel: 'Documento',
					store: [['SIN_COMPOROBANTE', 'SIN COMPOROBANTE'], ['BOLETA', 'BOLETA'],['FACTURA', 'FACTURA']],
					anchor: '100%',
					msgTarget: 'side',
				},
				{
					xtype: 'panel',
					bodyPadding: 2,
					margin: 2,
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'hbox',
					},
					items:[
						{
							xtype: 'numberfield',
							name: 'numero_correlativo',
							labelWidth: 80,
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
					xtype: 'checkboxfield',
					name: 'credito',
					labelWidth: 85,
					labelAlign: 'right',
					width: '40%',
					fieldLabel: 'Credito',
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
								click: 'ventavale_ventana_Guardar',
							},
						},
						{
							xtype: 'button',
							iconCls: 'icono-cancelar',
							text: 'Cancelar',
							listeners:{
								click: 'valeventa_ventana_Cancelar',
							},
						},

					],
				}
			]
		}
	],
});