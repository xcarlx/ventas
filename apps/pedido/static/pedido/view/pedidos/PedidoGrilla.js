Ext.define('GRUPOEJ.pedido.view.pedidos.PedidoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.pedidos-grilla-pedidos',
	reference: 'pedido-grillapedidos',
	bind: {
		store: '{store_pedidos}',
	},
	height: 350,
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
			text: "Nro Pedido",
			width: 100,
			dataIndex: 'nro_pedido',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha del Pedido',
			width: 100,
			dataIndex: 'fecha_pedido',
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha de Entrega',
			width: 100,
			dataIndex: 'fecha_entrega',
		},
			{
			xtype: 'booleancolumn',
			align: 'center',
			width: 120,
			dataIndex: 'estado',
			text: 'Estado',
			resizable: false,
			trueText: "Finalizado",
			falseText: "Pendiete",
		},
	],
	listeners : {
		select: 'seleccionarPedido',
		deselect: 'deSeleccionarPedido',
	},
	dockedItems:[
		{
			reference: 'grillapedidos-paginador',
			bind:{
				store: '{store_pedidos}',
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
						click: 'PedidoAgregar',
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
						click: 'PedidoEditar'
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
					text: 'Vender',
					iconCls: 'icono-agregar-azul',
					listeners:{
						click: 'PedidoRefrescar',
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
						click: 'PedidoRefrescar',
					}
				},
			],
		}
	]
});