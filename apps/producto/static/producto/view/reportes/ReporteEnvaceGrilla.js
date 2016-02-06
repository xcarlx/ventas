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
			text: "Cliente - Razon Social",
			flex: 2,
			dataIndex: 'cliente__nombres',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "DNI - RUC",
			flex: 1,
			dataIndex: 'cliente__telefono',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
		{
			text: "Telefono",
			flex: 1,
			dataIndex: 'cliente__nro_documento',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},	
		{
			text: "Direccion",
			flex: 1,
			dataIndex: 'cliente__direccion',
			items:[
				{
					xtype: 'searchtrigger'
				}
			],
		},
	],
	listeners : {
		select: 'seleccionarReporteEnvace',
		deselect: 'deSeleccionarVenta',
	},
	dockedItems:[
		// {
		// 	// bind:{
		// 	// 	store: '{store_pedidos}',
		// 	// },
		// 	xtype: 'pagingtoolbar',
		// 	dock: 'bottom',
		// 	displayInfo: true,
		// },
		{
			xtype: 'toolbar',
			dock: 'top',
			items:[
				// {
				// 	xtype: 'button',
				// 	text: 'Imprimir',
				// 	iconCls: 'icono-agregar',
				//     renderTo: Ext.getBody(), 
				//     url: 'grupoej.venta.ventas.venta/imprimir/',      
				//     handler: function() {
				//         alert('You clicked the button!')
				//     }
				// },
				{
					xtype: 'button',
					text: 'Anular',
					iconCls: 'icono-quitar',
					bind: {
						disabled: "{!ventagrilla.selection}",
					},
					listeners:{
						click: 'AnularVenta',
					}
				},
			],
		}
	]
});

