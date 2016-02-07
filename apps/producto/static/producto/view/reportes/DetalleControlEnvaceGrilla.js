Ext.define('GRUPOEJ.producto.view.reportes.DetalleControlEnvaceGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.detallecontrolenvace-grilla',
	reference: 'detallecontrolenvacegrilla',
	bind: {
		store: '{store_rvdEnvaces}',
	},
	height: 250,
	columns: [
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
			dataIndex: 'entregado',
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
			dataIndex: 'devuelto',
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
			dataIndex: 'resto',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
	],
});