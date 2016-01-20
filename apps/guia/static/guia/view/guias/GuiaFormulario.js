Ext.define('GRUPOEJ.guia.view.guias.GuiaFormulario', {
	extend: 'Ext.window.Window',
	alias: 'widget.guia-formulario',
	width: 500,
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
			reference: 'guiaFormulario',
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
					name: 'id',
					hidden: true,
					fieldLabel: 'Label',
					bind : '{currentGuia.id}'
				},
				{
					xtype: 'combobox',
		          	fieldLabel: "Cliente",
					reference: 'comboclientesguia',
		            bind:{
		            	store: '{store_comboclientesguia}',
		            	value: '{currentGuia.clienteid}',
		            },
					displayField: 'cliente',
					name: 'clienteid',
					valueField: 'id',
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
					fieldLabel: 'Punto de Partida',
					name: 'punto_partida',
					bind : '{currentGuia.punto_partida}',
				},			
				{
					fieldLabel: 'Punto de Llegada',
					name: 'punto_llegada',
					bind : '{currentGuia.punto_llegada}',
				},
				{
					xtype: 'panel',
					bodyPadding: 2,
					margin: 2,
					border: 0,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'hbox',
					},
					items:[
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha de Emision',
							width: 228,
							labelWidth: 105,
							msgTarget: 'side',
							labelAlign: 'right',
							name: 'fecha_emision',
							bind : '{currentGuia.fecha_emision}',
						},	
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha de Translado',
							width: 240,
							labelWidth: 115,
							labelAlign: 'right',
							name: 'fecha_translado',
							bind : '{currentGuia.fecha_translado}',
						},
					]
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