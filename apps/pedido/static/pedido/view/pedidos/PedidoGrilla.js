Ext.define('GRUPOEJ.pedido.view.pedidos.PedidoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.pedidos-grilla-pedidos',
	reference: 'pedido-grillapedidos',
	bind: {
		store: '{store_pedidos}',
	},
	height: 290,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Cliente / Razon Social",
			width: 250,
			dataIndex: 'cliente__nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Area - Responsable",
			width: 180,
			dataIndex: 'cliente__responsable',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Telefono",
			width: 80,
			dataIndex: 'cliente__telefono',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Direccion",
			width: 150,
			dataIndex: 'cliente__direccion',
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
			text: 'Fech Entrega',
			width: 100,
			dataIndex: 'fecha_entrega',
			format:'d/m/Y',
		},
		{
			text: "Nro de Dias",
			width: 100,
			dataIndex: 'nro_dias',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fech Pedido',
			width: 100,
			dataIndex: 'fecha_pedido',
			format:'d/m/Y',
		},

		// {
		// 	xtype: 'booleancolumn',
		// 	align: 'center',
		// 	width: 120,
		// 	dataIndex: 'estado',
		// 	text: 'Estado',
		// 	resizable: false,
		// 	trueText: "Finalizado",
		// 	falseText: "Pendiete",
		// },
	],
	listeners : {
		select: 'seleccionarPedido',
		deselect: 'deSeleccionarPedido',
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
						click: 'pedido_Agregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!pedido-grillapedidos.selection}",
					},
					listeners:{
						click: 'pedido_Editar'
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!pedido-grillapedidos.selection}",
					},
					listeners:{
						click: 'pedido_Eliminar',
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
						click: 'ventapedido_Agregar',
					},
					bind: {
						disabled: "{!pedido-grillapedidos.selection}",
					},
				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'button',
					text: 'Generar Vale / Guia',
					iconCls: 'icono-agregar-azul',
					listeners:{
						click: 'valeguiapedido_Agregar',
					},
					bind: {
						disabled: "{!pedido-grillapedidos.selection}",
					},
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
						click: 'modulo_Refrescar',
					}
				},
			],
		}
	]
});