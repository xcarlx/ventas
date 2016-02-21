Ext.define('GRUPOEJ.venta.view.anuladas.DetalleVentaAnuladaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detalleventaanulada-grilla',
	reference: 'detalleventaanuladagrilla',
	bind: {
		store: '{store_detalleventasanulada}',
	},
	height: 200,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Producto",
			flex: 2,
			dataIndex: 'producto__descripcion',
			sortable: false,
		},
		{
			text: "Cantidad",
			width: 100,
			dataIndex: 'cantidad',
			sortable: false,
		},
		{
			xtype: 'numbercolumn', 
			format:'0.00',
			text: "Precio",
			width: 100,
			dataIndex: 'precio',
			sortable: false,
		},	
		{
			xtype: 'numbercolumn', 
			format:'0.00',
			text: "Sub total",
			width: 100,
			dataIndex: 'subtotal',
			sortable: false,
		},
	],
});