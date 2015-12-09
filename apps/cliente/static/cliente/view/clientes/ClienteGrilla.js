Ext.define('GRUPOEJ.cliente.view.clientes.ClienteGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.cliente-grilla-clientes',
	reference: 'cliente-grillaclientes',
	bind: {
		store: '{store_clientes}',
	},
	height: 600,
	columns: [
		{
			text: "Nombre",
			width: 250,
			dataIndex: 'nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Apellidos",
			width: 250,
			dataIndex: 'apellidos',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Tipo de Documento",
			width: 100,
			dataIndex: 'tipo_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Numero",
			width: 100,
			dataIndex: 'nro_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "E-MAIL",
			flex: 250,
			dataIndex: 'email',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Telefono",
			width: 80,
			dataIndex: 'telefono',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Direccion",
			width: 250,
			dataIndex: 'direccion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Responsable",
			width: 250,
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
			pageSize: 8,
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