Ext.define('GRUPOEJ.guia.view.guias.GuiaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.guia-grilla',
	reference: 'guiaGrilla',
	bind : '{store_guia}',
	selModel: {
		mode: 'MULTI'
	},
	height: 350,
	columns: [
		{
			text: "Cliente / Razon Social",
			flex: 2,
			dataIndex: 'cliente__nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Area - Responsable",
			flex: 2,
			dataIndex: 'cliente__area',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Punto de Partida",
			flex: 2,
			dataIndex: 'punto_partida',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Punto de llegada",
			flex: 2,
			dataIndex: 'punto_llegada',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha de Emision',
			width: 100,
			format:'d/m/Y',
			// renderer: Ext.util.Format.dateRenderer('d/m/Y'),
			dataIndex: 'fecha_emision',
		},	
		{
			xtype: 'datecolumn',
			text: 'Fecha del Translado',
			format:'d/m/Y',
			// renderer: Ext.util.Format.dateRenderer('d/m/Y'),
			width: 100,
			dataIndex: 'fecha_translado',
		},
		{ 
			xtype: 'checkcolumn', 
			text: 'Selecione', 
			name: 'valeselect',
			dataIndex: 'active',
			sortable: false,
		}
	],
	listeners : {
		select: 'seleccionarGuia',
		deselect: 'deSeleccionarGuia',
		// itemcontextmenu: 'vales_ContextMenu',
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
						click: 'guia_Agregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!guiaGrilla.selection}",
					},
					listeners:{
						click: 'guia_Editar'
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!guiaGrilla.selection}",
					},
					listeners:{
						click: 'guia_Eliminar',
					}
				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'button',
					text: 'Generar Venta',
					iconCls: 'icono-agregar-azul',
					listeners:{
						click: 'ventaguia_Agregar',
					}
				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'button',
					text: 'Refrescar',
					iconCls: 'icono-refrescar',
					listeners:{
						click: 'guia_Refrescar',
					}
				},
			],
		}
	]
});