Ext.define('GRUPOEJ.guia.view.guias.DetalleGuiaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detalleguiagrilla',
	reference: 'detalleguiagrillaRef',
	bind: {
		store: '{store_detalleguia}',
	},
	height: 180,
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
			sortable: false
		},		
		{
			xtype: "numbercolumn",
			text: "Precio",
			width: 100,
			dataIndex: 'precio',
			sortable: false,
			format:'0.00',
		},	
		{
			xtype: "numbercolumn",
			text: "Sub total",
			width: 100,
			dataIndex: 'subtotal',
			sortable: false,
			format:'0.00',
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
						click: 'DetallGuia_Guardar',
					},
					bind: {
						disabled: "{!comboproductosguia.selection}",
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!detalleguiagrillaRef.selection}",
					},
					listeners:{
						click: 'detalleGuia_Eliminar',
					}
				},

			],
		}
	]
});