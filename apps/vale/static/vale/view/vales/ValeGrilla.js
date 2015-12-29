Ext.define('GRUPOEJ.vale.view.vales.ValeGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.vale-grilla',
	reference: 'valeGrilla',
	bind : '{store_vale}',
	height: 200,
	selModel: {
		mode: 'MULTI'
	},
	columns: [
		{
			text: "Cliente - Nombre",
			flex: 2,
			dataIndex: 'cliente__nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Cliente - Apellido",
			flex: 2,
			dataIndex: 'cliente__apellidos',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Nro Vale",
			width: 100,
			dataIndex: 'numero',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha del Vale',
			width: 100,
			format:'d/m/Y',
			dataIndex: 'fecha',
		},

	],
	listeners : {
		select: 'seleccionarVale',
		deselect: 'deSeleccionarVale',
		itemcontextmenu: 'vales_ContextMenu',
	},
	dockedItems:[
		{
			// reference: 'grillvale-paginador',
			xtype: 'pagingtoolbar',
			bind: '{store_vale}',
			dock: 'bottom',
			displayInfo: true,
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
						click: 'vale_Agregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!valeGrilla.selection}",
					},
					listeners:{
						click: 'vale_Editar'
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!valeGrilla.selection}",
					},
					listeners:{
						click: 'vale_Eliminar',
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
						click: 'modulo_Refrescar',
					}
				},
			],
		}
	]
});