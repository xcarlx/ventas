Ext.define('GRUPOEJ.inicio.view.reportes.ReporteClienteGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.reportecliente-grilla',
	reference: 'reporteclienteGrilla',
	border: true,
	bind: {
		store: '{store_reporteclientegrilla}',
	},
	// requires:[
	// 	'Ext.grid.feature.Grouping',
	// ],
	 
	height: 400,
	columns: [
		{
			xtype: 'datecolumn',
			text: 'Fecha',
			width: 120,
			dataIndex: 'venta__fecha',
			format:'d/m/Y',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Cliente - Razon Social",
			flex: 1,
			dataIndex: 'clientes_rsocial',
			hidden: false,
		},		
		{
			text: "Producto - Descripcion",
			flex: 1,
			dataIndex: 'producto__descripcion',
			hidden: false,
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn', 
			format:'0',			
			text: "Cantidad",
			width: 250,
			dataIndex: 'cantidad',
			align: "center",
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn', 
			format:'0.00',
			text: "Precio",
			width: 250,
			dataIndex: 'precio',
			align: "center",
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
	],
	dockedItems:[
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: "Imprimir",
					iconCls: 'icono-print',
					method: 'POST',
					// handler: "ImprimirCliente",
					// renderTo: document.body,
				    bind: {
						disabled: "{!comboreportecliente.selection}",
					},
					listeners:{
						click: 'ImprimirCliente',
					},
				},
			],
		},
	]
});
