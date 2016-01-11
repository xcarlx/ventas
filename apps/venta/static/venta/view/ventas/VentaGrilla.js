Ext.define('GRUPOEJ.venta.view.ventas.VentaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ventas-grilla',
	reference: 'ventagrilla',
	bind: {
		store: '{store_ventas}',
	},
	height: 370,
	columns: [
		{
			text: "Cliente - Nombre",
			flex: 2,
			dataIndex: 'pedido__cliente__nombre',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Cliente - Apellido",
			flex: 2,
			dataIndex: 'pedido__cliente__apellidos',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Documento",
			width: 170,
			dataIndex: 'tipo_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Numero",
			width: 110,
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
		{
			text: "Estado",
			width: 75,
			dataIndex: 'estado',
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
			// bind:{
			// 	store: '{store_pedidos}',
			// },
			xtype: 'pagingtoolbar',
			dock: 'bottom',
			displayInfo: true,
		},
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
			],
		}
	]
});

