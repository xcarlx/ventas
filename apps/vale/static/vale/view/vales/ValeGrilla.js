Ext.define('GRUPOEJ.vale.view.vales.ValeGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.vale-grilla',
	reference: 'valeGrilla',
	bind : '{store_vale}',
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
			dataIndex: 'fecha',
		},

	],
	// listeners : {
	// 	select: 'seleccionarPedido',
	// 	deselect: 'deSeleccionarPedido',
	// },
	dockedItems:[
		{
			reference: 'grillavale-paginador',
			// bind:{
			// 	store: '{store_pedidos}',
			// },
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
						click: 'ValeAgregar',
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
						click: 'ValeEditar'
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
						click: 'ValeEliminar',
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