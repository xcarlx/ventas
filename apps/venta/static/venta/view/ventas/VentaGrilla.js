Ext.define('GRUPOEJ.venta.view.ventas.VentaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ventas-grilla',
	reference: 'ventagrilla',
	bind: {
		store: '{store_ventas}',
	},
	height: 250,
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
			flex: 1,
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
			flex: 1,
			dataIndex: 'pedido__cliente__direccion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Documento - Venta",
			flex: 1,
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
		deselect: 'deSeleccionarCliente',
	},
	dockedItems:[
		// {
		// 	// bind:{
		// 	// 	store: '{store_pedidos}',
		// 	// },
		// 	xtype: 'pagingtoolbar',
		// 	dock: 'bottom',
		// 	displayInfo: true,
		// },
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: 'Imprimir',
					iconCls: 'icono-agregar',
				    renderTo: Ext.getBody(), 
				    url: 'grupoej.venta.ventas.venta/imprimir/',      
				    handler: function() {
				        alert('You clicked the button!')
				    }
				},
				{
					xtype: 'button',
					text: 'Anular',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!ventagrilla.selection}",
					},
					listeners:{
						click: 'AnularVenta',
					}
				},
			],
		}
	]
});

