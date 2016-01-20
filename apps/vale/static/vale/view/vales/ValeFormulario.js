Ext.define('GRUPOEJ.vale.view.vales.ValeFormulario', {
	extend: 'Ext.window.Window',
	alias: 'widget.vale-formulario',
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
			reference: 'valeFormulario',
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
				labelWidth: 75,
				labelAlign: 'right',
			},
			items: [
				{
					xtype: 'numberfield',
					name: 'id',
					hidden: true,
					fieldLabel: 'Label',
					bind : '{currentVale.id}'
				},
				{
					xtype: 'combobox',
					fieldLabel: "Cliente",
					reference: 'comboproductos',
					displayField: 'cliente',
					valueField: 'id',
					bind:{
						store: '{store_comboclientes}',
						value: '{currentVale.clienteid}',
					},
					name: 'clienteid',
					queryMode: 'local',
					queryDelay: 5,
					queryChaching: false,
					forceSelection:true,
					editable: true,
					triggerAction: 'all',
    				lastQuery: '',
    				listeners: {
				        // delete the previous query in the beforequery event or set
				        // combo.lastQuery = null (this will reload the store the next time it expands)
				        beforequery: function(qe){
				            delete qe.combo.lastQuery;
				        }
				    }
				},
				{
					fieldLabel: 'Observacion',
					name: 'observaciones',
					bind : '{currentVale.observaciones}',
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
		}
	],
});