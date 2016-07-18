Ext.define('GRUPOEJ.producto.view.reportes.DetalleControlEnvaceGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detallecontrolenvace-grilla',
	reference: 'detallecontrolenvacegrilla',
	bind: {
		store: '{store_rvdEnvaces}',
	},
	height: 200,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Descripcion",
			width: 400,
			dataIndex: 'descripcion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		// {
		// 	xtype: 'datecolumn',
		// 	text: 'precio',
		// 	width: 100,
		// 	dataIndex: 'fecha',
		// 	format:'d/m/Y',
		// 	items:[
		// 		{
		// 			xtype: 'searchtrigger'
		// 		}
		// 	],
		// },
		// {
		// 	text: "Nro Documento",
		// 	width: 120,
		// 	dataIndex: 'nro_documento',
		// 	items:[
		// 		{
		// 			xtype: 'searchtrigger'
		// 		}
		// 	],
		// },
		{
			xtype: 'numbercolumn',
			text: "Entregado",
			width: 100,
			format:'0',
			dataIndex: 'total_entregado',
			align: "center",
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},		
		{
			xtype: 'numbercolumn',
			text: "Devuelto",
			width: 100,
			format:'0',
			dataIndex: 'total_devuelto',
			align: "center",
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},		
		{
			xtype: 'numbercolumn',
			text: "Debe",
			width: 100,
			format:'0',
			dataIndex: 'total_debe',
			align: "center",
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},

	],
});