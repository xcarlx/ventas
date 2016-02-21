Ext.define('GRUPOEJ.inicio.view.reportes.TabReportes', {
	extend:'Ext.tab.Panel', 
	xtype: 'plain-tabs',
	alias: 'widget.reportes-tab',
	// controller: 'tab-view',

	// frame: true,
	defaults:{
		bodyPadding: 10,
	},
	// width: 400,
	height: 570,
	// renderTo: document.body, 
	// renderTo : Ext.getBody(),
	plain: true,
	requires:[
		'GRUPOEJ.inicio.view.reportes.ReporteProductoGrilla',
		'GRUPOEJ.inicio.view.reportes.ReporteClienteGrilla',
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
			itemId: 'rclientes',
			items:[
				{
					xtype: 'panel',
					bodyPadding: 5,  
					border: false,
					items:[
						 {
							xtype: 'combobox',
							editable: false,
							fieldLabel: "Cliente",
							labelWidth: 100,
							labelAlign: 'right',
							width: 600,
							name: 'clienteid',
							reference: 'comboreportecliente',
							bind:{
								store: '{store_clientes}',
							},
							displayField: 'cliente',
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
							reference: 'vreporteclienteFechaInicio',

						}, 
						{
							xtype: 'datefield',
							fieldLabel: 'Fecha fin',
							labelwidth: 150,
							labelAlign: 'right',
							format: 'd-m-Y',
							reference: 'vreporteclienteFechaFin',
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
										click: 'ClienteFlitrar',
									},
								},
								{
									xtype: 'button',
									text: "Limpiar",
									listeners:{
										click: 'ClienteLimpiar',
									},
								},
								{
									xtype: 'button',
									text: "Mostrar Total",
									listeners:{
										click: 'ClienteMostrarTotal',
									},
								},

							]
						}
					]
				},
				{
					xtype: 'reportecliente-grilla',
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
							reference: 'totalreporteclientecantidad',
							style: 'font-weight:bold;',
						},
						{
							xtype: 'tbfill',
						},
						{
							xtype: 'label',
							reference: 'totalreporteclienteprecio',
							style: 'font-weight:bold;',
						},
						{
							xtype: 'tbfill',
						},
					]
				},              
			],
		}, 
	]
});