Ext.define('GRUPOEJ.vale.view.vales.DetalleValeGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detallevalegrilla',
	reference: 'referencegrilladetallepedido',
	bind: {
		store: '{store_detallevale}',
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
						click: 'DetallVale_Guardar',
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