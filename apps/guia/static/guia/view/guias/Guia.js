Ext.define('GRUPOEJ.guia.view.guias.Guia', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires: [
	'GRUPOEJ.guia.view.guias.GuiaVistaModelo',
	'GRUPOEJ.guia.view.guias.GuiaGrilla',
	'GRUPOEJ.guia.view.guias.DetalleGuiaGrilla',
	'GRUPOEJ.guia.controller.guias.Guia', 
	],
	controller: 'guia',
	viewModel: {
		type: 'guia',
	},
	items: [
		{
			xtype: 'guia-grilla',
		},
		{
			xtype: 'form',
			extend: 'Ext.window.Window',
		    title: 'AGREGAR PRODUCTOS AL DETALLE',
		    reference: 'fromguias',
		    renderTo: Ext.getBody(),
			bodyPadding: 10,
			modelValidation: true,
			bind: {
				disabled: "{!guiaGrilla.selection}",
			},
			layout:{
				type: 'vbox',
			},
			items:[
				{
					xtype: 'numberfield',
					name: 'guia_remisionid',
					hidden: true,
					reference: 'idguiareference',
				},
				{
					xtype: 'combobox',
					editable: false,
		          	fieldLabel: "Seleccionar el Producto: ",
					labelWidth: 150,
					width: 600,
					reference: 'comboproductosguia',
					name: 'productoid',
		            bind:{
		            	store: '{store_productos_guia}',
		            },
					displayField: 'descripcion',
					valueField: 'id',
					queryMode: 'local',
					queryDelay: 5,
					queryChaching: false,
					forceSelection:true,
					editable: true,
					listConfig: {
			        	getInnerTpl: function() {
				            // here you place the images in your combo
				            var tpl = '<div>'+
				                      '{imagen2} &nbsp;&nbsp; &nbsp;&nbsp; '+
				                      '{descripcion}</div>';
				            return tpl;
				        }
    				}
				},
				{
					xtype: 'panel',
					border: false,
					width: '100%',
					afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
					layout:{
						type: 'hbox',
					},
					items:[
						{
							labelWidth: 150,
							name: 'cantidad',
							reference: 'cantidadproductosguia',
							xtype: 'numberfield',
							fieldLabel: 'Cantidad',
							allowNegative: false,
							allowBlank: false,
							minValue : 1,
							bind:{
								disabled: "{!comboproductosguia.selection}",
							}
						},
						{
							// id: "precio_producto",
							labelWidth: 96,
							xtype: 'numberfield',
							name: 'precio',
							margin: 2,
							fieldLabel: 'Precio ',
							anchor: '100%',
							maxValue: 1000,
							minValue: 0.00,
							forcePrecision: true,
							decimalSeparator : ".",
							decimalPrecision : 2,
							bind:{
								disabled: "{!comboproductosguia.selection}",
								value:"{comboproductosguia.selection.precio}",
							},
						},

					],
				},
			],
		},
		{
			xtype: 'detalleguiagrilla',
			bind: {
				disabled: "{!guiaGrilla.selection}",
			},
		},
	],
});

