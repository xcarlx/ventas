Ext.define('GRUPOEJ.venta.view.ventas.Venta', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
	'GRUPOEJ.venta.view.ventas.VentaModelo',
	'GRUPOEJ.venta.view.ventas.VentaGrilla',
	'GRUPOEJ.venta.view.ventas.DetalleVentaGrilla',
	'GRUPOEJ.venta.controller.ventas.Venta',

	],
	viewModel:{
		type: 'venta',
	},
	controller: 'venta',
	items:[
		{
			xtype: 'ventas-grilla',
		},
		{
			xtype: 'detalleventa-grilla',
		},
		{
			xtype: 'container',
                layout: 'hbox',
                flex: 1,
                align:'right',
                // THIS ITEM SHOULD BE ALIGNED RIGHT:
                items: [
                	{
                		xtype: 'tbfill'
                	},
                	{
                    	xtype: 'label',
                    	reference: 'totalventa',
                    	style: 'font-weight:bold;',
                	},
                ]
		},
	],
});