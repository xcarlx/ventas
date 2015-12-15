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
					bind : '{currentModulo.id}'
				},
				{
					xtype: 'combobox',
					editable: false,
		          	fieldLabel: "Cliente: ",
					// labelWidth: ,
					// width: 600,
					reference: 'comboproductos',
		            bind:{
		            	store: '{store_comboclientes}',
		            	value: '{currentVale.clienteid}',
		            },
					displayField: 'nombres_apellidos',
					name: 'clienteid',
					valueField: 'id',
					queryMode: 'local',
					queryDelay: 5,
					queryChaching: false,
					forceSelection:true,
					editable: true,
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