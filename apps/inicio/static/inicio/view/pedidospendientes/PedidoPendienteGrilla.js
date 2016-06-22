Ext.define('GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.pedidopendiente-grilla',
	reference: 'pedidopendientegrilla',
	bind: {
		store: '{store_pedidospendientes}',
	},
	height: 520,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Cliente - Nombre",
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
			width: 200,
			dataIndex: 'cliente__area',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Telefono",
			width: 100,
			dataIndex: 'cliente__telefono',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Direccion",
			flex : 1,
			dataIndex: 'cliente__direccion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha Entrega',
			width: 120,
			dataIndex: 'fecha_entrega',
			format:'d/m/Y',
		},
		{
			text: "Nro Dias",
			width: 75,
			dataIndex: 'nro_dias',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha Pedido',
			width: 120,
			dataIndex: 'fecha_pedido',
			format:'d/m/Y',
		},
		// 	{
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
		itemcontextmenu: 'productos_ContextMenu1',
	},
});