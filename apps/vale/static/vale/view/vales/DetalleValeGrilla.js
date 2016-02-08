Ext.define('GRUPOEJ.vale.view.vales.DetalleValeGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detallevalegrilla',
	reference: 'detallevalegrillaRef',
	bind: {
		store: '{store_detallevale}',
	},
	height: 200,
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
			sortable: false
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
	dockedItems:[
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: 'Agregar',
					iconCls: 'icono-agregar',
					listeners:{
						click: 'DetallVale_Guardar',
					},
					bind: {
						disabled: "{!comboproductosvale.selection}",
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!detallevalegrillaRef.selection}",
					},
					listeners:{
						click: 'detallevale_Eliminar',
					}
				},
			],
		}
	]
});