Ext.define('GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.pedidovencido-grilla',
	reference: 'pedidovencidogrilla',
	bind: {
		store: '{store_pedidosvencidos}',
	},
	height: 600,
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
			text: 'Fecha del Pedido',
			width: 150,
			dataIndex: 'fecha_pedido',
			format:'d/m/Y',
		},
		{
			xtype: 'datecolumn',
			text: 'Fecha de Entrega',
			width: 150,
			dataIndex: 'fecha_entrega',
			format:'d/m/Y',
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
});