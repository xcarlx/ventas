Ext.define('GRUPOEJ.producto.view.reportes.ReporteEnvaceGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.reporteenvace-grilla',
	reference: 'reporteenvacegrilla',
	bind: {
		store: '{store_rvCliente}',
	},
	height: 350,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Cliente / Razon Social",
			width: 250,
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
	dockedItems:[
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				{
					xtype: 'button',
					text: 'Imprimir',
					iconCls: 'icono-print',
					bind: {
						disabled: "{!reporteenvacegrilla.selection}",
					},
					listeners:{
						click: 'Imprimir',
					},
				},
			],
		},
	],
});

