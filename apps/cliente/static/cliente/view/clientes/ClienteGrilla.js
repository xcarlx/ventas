Ext.define('GRUPOEJ.cliente.view.clientes.ClienteGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.cliente-grilla-clientes',
	reference: 'cliente-grillaclientes',
	bind: {
		store: '{store_clientes}',
	},
	height: 530,
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
			width: 250,
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
			flex: 1,
			dataIndex: 'area',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Responsable",
			flex: 1,
			dataIndex: 'responsable',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},		
		{
			text: "Frecuencia",
			flex: 1,
			dataIndex: 'frecuencia',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Zona Sector",
			flex: 1,
			dataIndex: 'zona_sector',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},		
	],
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
						click: 'ClientesAgregar',
					},
				},
				{
					xtype: 'button',
					text: 'Editar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!cliente-grillaclientes.selection}",
					},
					listeners:{
						click: 'ClientesEditar'
					},
				},
				{
					xtype: 'button',
					text: 'Eliminar',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!cliente-grillaclientes.selection}",
					},
					listeners:{
						click: 'ClientesEliminar',
					}
				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'button',
					text: 'Duplicar',
					iconCls: 'icono-editar',
					bind: {
						disabled: "{!cliente-grillaclientes.selection}",
					},
					listeners:{
						click: 'ClienteDuplicar',
					},
				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'tbfill',

				},
				{
					xtype: 'tbfill',

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
						click: 'ClienteRefrescar',
					}
				},
			],
		}
	]
});