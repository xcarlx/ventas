Ext.define('GRUPOEJ.inicio.view.reportes.ReporteProductoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.reporteproducto-grilla',
	reference: 'reporteproductoGrilla',
	border: true,
	bind: {
		store: '{store_reporteproductogrilla}',
	},
	requires:[
		'Ext.grid.feature.Grouping',
	],
	 
	height: 400,
	columns: [
		{
			text: "Cliente - Razon Social",
			flex: 2,
			dataIndex: 'clientes_rsocial',
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
	features: [
		{
			ftype:'grouping',
			hideGroupedHeader: true,
        	startCollapsed: true,
		}
	],
	dockedItems:[
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: 'Reporte por Producto',
					iconCls: 'icono-print',
					method: 'POST', 
				    renderTo: Ext.getBody(), 
				    handler: "ImprimirProducto",
				    bind: {
						disabled: "{!comboreporteproducto.selection}",
					},
				},
				{
					xtype: 'button',
					text: 'Reporte Total',
					iconCls: 'icono-print ',
					method: 'POST', 
				    renderTo: Ext.getBody(), 
				    // url: 'grupoej.venta.ventas.venta/imprimir/',  
				    // handler: function () {
				    // params: { idventa: 0 },
				    handler: "ImprimirAllProducto",
				    bind: {
						disabled: "{!comboreporteproducto.selection}",
					},
				},
			],
		},
	]
});

