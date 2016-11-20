Ext.define('GRUPOEJ.pedido.view.pedidos.DetallePedidoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detallepedido-grilla-detallepedido',
	reference: 'detallepedido-grilladetallepedido',
	bind: {
		store: '{store_detallepedidos}',
	},
	height: 170,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Producto",
			width: 300,
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
			text: "Total",
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
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!detallepedido-grilladetallepedido.selection}",
					},
					// listeners:{
					// 	click: 'detallepedido_Eliminar',
					// }
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