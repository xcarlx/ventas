Ext.define('GRUPOEJ.producto.view.reportes.ReporteEnvaceGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.reporteenvace-grilla',
	reference: 'reporteenvacegrilla',
	bind: {
		store: '{store_rvCliente}',
	},
	height: 370,
	columns: [
		{
			text: "Cliente / Razon Social",
			flex: 2,
			dataIndex: 'nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "DNI/RUC",
			flex: 1,
			dataIndex: 'nro_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Telefono",
			flex: 1,
			dataIndex: 'telefono',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Direccion",
			flex: 2,
			dataIndex: 'direccion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
				{
			text: "Area",
			flex: 2,
			dataIndex: 'area',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Responsable",
			flex: 2,
			dataIndex: 'responsable',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		}
	],
	listeners : {
		select: 'seleccionarCliente',
		deselect: 'deSeleccionarCliente',
	},
});

