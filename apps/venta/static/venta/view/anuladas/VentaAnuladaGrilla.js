Ext.define('GRUPOEJ.venta.view.anuladas.VentaAnuladaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ventasanulada-grilla',
	reference: 'ventaanuladagrilla',
	bind: {
		store: '{store_ventasanulada}',
	},
	height: 370,
	columns: [
		{
			text: "Cliente - Razon Social",
			flex: 2,
			dataIndex: 'pedido__cliente__nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Area - Responsable",
			flex: 2,
			dataIndex: 'pedido__cliente__area',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Doc - Identidad",
			width: 120,
			dataIndex: 'pedido__cliente__nro_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Direccion",
			flex: 2,
			dataIndex: 'pedido__cliente__direccion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Documento - Venta",
			width: 170,
			dataIndex: 'numero_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},			
		{
			text: "Nro Pedido",
			width: 100,
			dataIndex: 'pedido__nro_pedido',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn', 
			format:'0.00',			
			text: "Sub Total",
			width: 100,
			dataIndex: 'sub_total',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn', 
			format:'0.00',
			text: "IGV",
			width: 75,
			dataIndex: 'igv',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn', 
			format:'0.00',
			text: "Total",
			width: 75,
			dataIndex: 'total',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha Venta',
			width: 120,
			dataIndex: 'fecha',
			format:'d/m/Y',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
	],
	listeners : {
		select: 'seleccionarVenta',
		deselect: 'deSeleccionarVenta',
	},
	dockedItems:[
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: 'Activar',
					iconCls: 'icono-agregar',
					bind: {
						disabled: "{!ventaanuladagrilla.selection}",
					},
					listeners:{
						click: 'ActivarVenta',
					}
				},
			],
		}
	]
});

