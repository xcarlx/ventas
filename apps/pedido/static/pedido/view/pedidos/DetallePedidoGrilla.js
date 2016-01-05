Ext.define('GRUPOEJ.pedido.view.pedidos.DetallePedidoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detallepedido-grilla-detallepedido',
	reference: 'detallepedido-grilladetallepedido',
	bind: {
		store: '{store_detallepedidos}',
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
			text: "Precio",
			width: 100,
			dataIndex: 'producto__precio',
			sortable: false,
		},	
		{
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
						click: 'DetallPedido_Guardar',
					},
					bind: {
						disabled: "{!comboproductos.selection}",
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!detallepedido-grilladetallepedido.selection}",
					},
					listeners:{
						click: 'detallepedido_Eliminar',
					}
				},
			],
		}
	]
});