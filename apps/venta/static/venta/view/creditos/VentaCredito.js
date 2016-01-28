Ext.define('GRUPOEJ.venta.view.creditos.VentaCredito', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
	'GRUPOEJ.venta.view.creditos.VentaCreditoModelo',
	'GRUPOEJ.venta.view.creditos.VentaCreditoGrilla',
	'GRUPOEJ.venta.view.creditos.DetalleVentaCreditoGrilla',,
	'GRUPOEJ.venta.controller.creditos.VentaCredito',

	],
	viewModel:{
		type: 'ventacredito',
	},
	controller: 'ventacredito',
	items:[
		{
			xtype: 'ventascredito-grilla',
		},
		{
			xtype: 'detalleventacredito-grilla',
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