Ext.define('GRUPOEJ.producto.view.productos.ProductoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.aliasgrilla-productos',
	reference: 'referenceproductogrilla',
	bind: {
		store: '{store_producto}',
	},
	selModel: {
		mode: 'MULTI'
	},
	height: 520,
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
			dataIndex: 'imagen2',
			height: 30,
			sortable: false,
		},
	],
	listeners : {
		itemcontextmenu: 'productos_ContextMenu',
	},
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
						click: 'Producto_Agregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!referenceproductogrilla.selection}",
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
						disabled: "{!referenceproductogrilla.selection}",
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
		},
		{
			xtype: 'pagingtoolbar',
			bind:'{store_producto}',
			xtype: 'pagingtoolbar',
			pageSize: gridPageSize,
			dock: 'bottom',
			displayInfo: true,
			displayRefresh: false,
			listeners:{
				beforerender: function(){
					this.down('#refresh').hide();
				}
			},
		},
	]
});