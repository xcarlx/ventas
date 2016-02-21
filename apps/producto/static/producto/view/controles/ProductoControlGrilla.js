Ext.define('GRUPOEJ.producto.view.controles.ProductoControlGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.productocontrol-Grilla',
	reference: 'referenceprestamogrilla',
	bind: {
		store: '{store_controlarproducto}',
		disabled: '{!clientecombo.selection}'
	},
	selModel: {
		mode: 'MULTI'
	},
	height: 520,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Descripcion",
			flex: 5,
			dataIndex: 'producto__descripcion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn',
			text: "Entregado",
			format:'0',
			width: 100,
			dataIndex: 'entregado',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},		
		{
			xtype: 'numbercolumn',
			text: "Devuelto",
			format:'0',
			width: 100,
			dataIndex: 'devuelto',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},		
		{
			xtype: 'numbercolumn',
			text: "Debe",
			format:'0',
			width: 100,
			dataIndex: 'resto',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
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
						click: 'Prestamo_Agregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!referenceprestamogrilla.selection}",
					},
					listeners:{
						click: 'Prestamo_Editar'
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!referenceprestamogrilla.selection}",
					},
					listeners:{
						click: 'Prestamo_Eliminar',
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
						click: 'Prestamo_Refrescar',
					}
				},
			],
		},
		// {
		// 	xtype: 'pagingtoolbar',
		// 	bind:'{store_producto}',
		// 	xtype: 'pagingtoolbar',
		// 	pageSize: gridPageSize,
		// 	dock: 'bottom',
		// 	displayInfo: true,
		// 	displayRefresh: false,
		// 	listeners:{
		// 		beforerender: function(){
		// 			this.down('#refresh').hide();
		// 		}
		// 	},
		// },
	]
});