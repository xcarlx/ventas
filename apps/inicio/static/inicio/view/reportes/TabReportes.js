Ext.define('GRUPOEJ.inicio.view.reportes.TabReportes', {
	extend:'Ext.tab.Panel', 
	alias: 'widget.reportes-tab',
	// width: 400,
	height: 570,
	// renderTo: document.body, 
	renderTo : Ext.getBody(),
	requires:[
		'GRUPOEJ.inicio.view.reportes.ReporteProductoGrilla',
	],
	items: [
	   
		{
			title: 'Reporte de Productos',
			itemId: 'rproductos',
			items:[
				{
					xtype: 'panel',
					bodyPadding: 5,  
					border: false,
					items:[
						 {
							xtype: 'combobox',
							editable: false,
							fieldLabel: "Producto",
							labelWidth: 100,
							labelAlign: 'right',
							width: 600,
							name: 'productoid',
							reference: 'comboreporteproducto',
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
					],
				},
				{
					xtype: 'panel',
					bodyPadding: 5,
					layout: {
						type: 'hbox',
					},
					items:[
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha inicio',
							labelwidth: 20,
							labelAlign: 'right',
							format: 'd-m-Y',
							reference: 'vreporteFechaInicio',

						}, 
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha fin',
							labelwidth: 150,
							labelAlign: 'right',
							format: 'd-m-Y',
							reference: 'vreporteFechaFin',
						},
					],

					dockedItems: [
						{
							xtype: 'toolbar',
							dock: 'bottom',
							items: [
								{
									xtype: 'button',
									text: "Buscar",
									listeners:{
										click: 'Flitrar',
									},
								},
								{
									xtype: 'button',
									text: "Limpiar",
									listeners:{
										click: 'Limpiar',
									},
								},
								{
									xtype: 'button',
									text: "Mostrar Total",
									listeners:{
										click: 'MostrarTotal',
									},
								},

							]
						}
					]
				},
				{
					xtype: 'reporteproducto-grilla',
				},
				{
					xtype: 'panel',
					layout: 'hbox',
					border: false,
					// flex: 1,
					// bodyPadding: 5, 
					// align:'right',
					// THIS ITEM SHOULD BE ALIGNED RIGHT:
					items: [
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'label',
							reference: 'totalreportecantidad',
							style: 'font-weight:bold;',
						},
						{
							xtype: 'tbfill',
						},
						{
							xtype: 'label',
							reference: 'totalreporteprecio',
							style: 'font-weight:bold;',
						},
						{
							xtype: 'tbfill',
						},
					]
				},              
			],
		}, 


		{
			title: 'Reporte de Clientes',
			itemId: 'rcliente',
		}, 
	]
});