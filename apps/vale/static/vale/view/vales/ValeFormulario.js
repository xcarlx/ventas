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
					xtype: 'numberfield',
					name: 'clienteid',
					hidden: false,
					fieldLabel: 'Label',
					bind : '{currentVale.clienteid}'
				},
				{
					xtype: 'combobox',
					fieldLabel: "Cliente: ",
					reference: 'comboproductos',
					displayField: 'nombres_apellidos',
					bind:{
						store: '{store_comboclientes}',
						value: '{currentVale.clienteid}',
					},

					// name: 'cliente',
					// valueField: 'id',
					queryMode: 'remote',
					// queryMode: 'local',
					// queryDelay: 100,
					// queryChaching: false,
					// forceSelection:true,
					editable: true,

					typeAhead: true,
					// hideLabel: false,
					hideTrigger:true,
					anchor: '100%',
					listConfig: {
						loadingText: 'Searching...',
						emptyText: 'No matching posts found.',

						// Custom rendering template for each item
						getInnerTpl: function() {
							return '<div class="search-item">' +
								'<h3><span>{nombres_apellidos}<br /> {tipo_documento} - {nro_documento}</span></h3>' +
								'{excerpt}' +
							'</div>';
						}
					},
					pageSize: 10,
					listeners: {
						beforequery: function(qe){
				            delete qe.combo.lastQuery;
				        }
					// 	assertValue: function() {
					// 		alert("asa");
					//         var me = this,
					//             value = me.getRawValue(),
					//             rec;
					//         if (me.multiSelect) {
					//             // For multiselect, check that the current displayed value matches the current
					//             // selection, if it does not then revert to the most recent selection.
					//             if (value !== me.getDisplayValue()) {
					//                 me.setValue(me.lastSelection);
					//             }
					//         } else {
					//             // For single-select, match the displayed value to a record and select it,
					//             // if it does not match a record then revert to the most recent selection.
					//             rec = me.findRecordByDisplay(value);
					//             if (rec) {
					//                 me.select(rec);
					//             } else {
					//                 if(!value){
					//                     me.setValue('');
					//                 }else{
					//                     me.setValue(me.lastSelection);
					//                 }
					//             }
					//         }
					//         me.collapse();
					//     }
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