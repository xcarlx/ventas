Ext.define('GRUPOEJ.cliente.view.clientes.ClienteGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.cliente-grilla-clientes',
	reference: 'cliente-grillaclientes',
	bind: {
		store: '{store_clientes}',
	},
	height: 500,
	columns: [
		{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },
		{
			text: "Cliente / Razon Social",
			flex: 3,
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
		},		
	],
	dockedItems:[
		{
			reference: 'grillaclientes-paginador',
			bind:{
				store: '{store_clientes}',
			},
			xtype: 'pagingtoolbar',
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