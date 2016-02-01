Ext.define('GRUPOEJ.venta.view.anuladas.VentaAnulada', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires:[
	'GRUPOEJ.venta.view.anuladas.VentaAnuladaModelo',
	'GRUPOEJ.venta.view.anuladas.VentaAnuladaGrilla',
	'GRUPOEJ.venta.view.anuladas.DetalleVentaAnuladaGrilla', 
	'GRUPOEJ.venta.controller.anuladas.VentaAnulada',

	],
	viewModel:{
		type: 'ventaanulada',
	},
	controller: 'ventaanulada',
	items:[
		{
			xtype: 'ventasanulada-grilla',
		},
		{
			xtype: 'detalleventaanulada-grilla',
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