Ext.define('GRUPOEJ.venta.view.ventas.DetalleVentaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detalleventa-grilla',
	reference: 'detalleventagrilladetalle',
	bind: {
		store: '{store_detalleventas}',
	},
	height: 250,
	columns: [
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