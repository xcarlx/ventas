Ext.define('GRUPOEJ.producto.view.productos.ProductoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.productos-grilla-productos',
	reference: 'producto-grillaproductos',
	bind: {
		store: '{store_producto}',
	},
	height: 800,
	columns: [
		{
			text: "Descripcion",
			flex: 5,
			dataIndex: 'descripcion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Cantidad Actual",
			width: 100,
			dataIndex: 'cantidad_actual',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn',
			text: "Precio",
			width: 100,
			dataIndex: 'precio',
			format:'0.00',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Foto",
			flex: 1,
			dataIndex: 'imagen',
			height: 30,
		},
	],
	dockedItems:[
		{
			reference: 'grillaproductos-paginador',
			bind:{
				store: '{store_producto}',
			},
			xtype: 'pagingtoolbar',
			pageSize: 8,
			dock: 'bottom',
			displayInfo: true,
			displayRefresh: false,
			listeners:{
				beforerender: function(){
					this.down('#refresh').hide();
				}
			},
		},
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: 'Agregar',
					iconCls: 'icono-agregar',
					listeners:{
						click: 'Producto_Agregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!producto-grillaproductos.selection}",
					},
					listeners:{
						click: 'Producto_Editar'
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
						click: 'Producto_Eliminar',
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
						click: 'Producto_Refrescar',
					}
				},
			],
		}
	]
});