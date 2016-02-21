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
			flex: 5,
			dataIndex: 'producto__descripcion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			xtype: 'numbercolumn',
			text: "Entregado",
			width: 100,
			format:'0',
			dataIndex: 'entregado',
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
			dataIndex: 'devuelto',
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
			dataIndex: 'resto',
			align: "center",
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
	],
});