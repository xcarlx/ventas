Ext.define('GRUPOEJ.guia.view.guias.GuiaGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.guia-grilla',
	reference: 'guiaGrilla',
	bind : '{store_guia}',
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
			format:'d-m-Y',
			// renderer: Ext.util.Format.dateRenderer('d/m/Y'),
			dataIndex: 'fecha_emision',
		},	
		{
			xtype: 'datecolumn',
			text: 'Fecha del Translado',
			format:'d-m-Y',
			// renderer: Ext.util.Format.dateRenderer('d/m/Y'),
			width: 100,
			dataIndex: 'fecha_translado',
		},
	],
	listeners : {
		select: 'seleccionarGuia',
		deselect: 'deSeleccionarGuia',
		// itemcontextmenu: 'vales_ContextMenu',
	},
	dockedItems:[
		{
			reference: 'grillaguia-paginador',
			bind:{
				store: '{store_guia}',
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