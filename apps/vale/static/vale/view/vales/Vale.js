Ext.define('GRUPOEJ.vale.view.vales.Vale', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires: [
	'GRUPOEJ.vale.view.vales.ValeVistaModelo', 
	'GRUPOEJ.vale.view.vales.ValeGrilla',
	'GRUPOEJ.vale.view.vales.DetalleValeGrilla',
	'GRUPOEJ.vale.controller.vales.Vale',
	],
	controller: 'vale',
	viewModel: {
		type: 'vale',
	},
	items: [
		{
			xtype: 'vale-grilla',
		},
		{
			xtype: 'form',
			extend: 'Ext.window.Window',
		    title: 'AGREGAR PRODUCTOS AL DETALLE',
		    reference: 'fromvales',
		    renderTo: Ext.getBody(),
			bodyPadding: 10,
			modelValidation: true,
			bind: {
				disabled: "{!valeGrilla.selection}",
			},
			layout:{
				type: 'vbox',
			},
			items:[
				{
					xtype: 'numberfield',
					name: 'valeid',
					hidden: true,
					reference: 'idvalereference',
				},
				{
					xtype: 'combobox',
					editable: false,
		          	fieldLabel: "Seleccionar el Producto ",
					labelWidth: 150,
					width: 600,
					reference: 'comboproductosvale',
					name: 'productoid',
		            bind:{
		            	store: '{store_productos}',
		            },
					displayField: 'descripcion',
					valueField: 'id',
					queryMode: 'local',
					queryDelay: 5,
					queryChaching: false,
					forceSelection:true,
					editable: true,
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
							reference: 'cantidadproductosvale',
							xtype: 'numberfield',
							fieldLabel: 'Cantidad ',
							allowNegative: false,
							allowBlank: false,
							minValue : 1,
							bind:{
								disabled: "{!comboproductosvale.selection}",
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
								disabled: "{!comboproductosvale.selection}",
								value:"{comboproductosvale.selection.precio}",
							},
						},
					],
				},
			],
		},
		{
			xtype: 'detallevalegrilla',
			bind: {
				disabled: "{!valeGrilla.selection}",
			},
		},
	],
});