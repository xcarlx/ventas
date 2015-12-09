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
		},
		{
			text: "Cantidad",
			width: 100,
			dataIndex: 'cantidad',
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
						click: 'PedidoAgregar',
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!producto-grillaproductos.selection}",
					},
					listeners:{
						click: 'PedidoEliminar',
					}
				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'button',
					text: 'Refrescar',
					iconCls: 'icono-refrescar',
					listeners:{
						click: 'PedidoRefrescar',
					}
				},
			],
		}
	]
});