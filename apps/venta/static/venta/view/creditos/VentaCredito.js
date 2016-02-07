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
			xtype: 'panel',
		    bodyPadding: 5,  // Don't want content to crunch against the borders
		    // marging: 5,
		    title: 'Filtros por Fechas',
		    border: true,
		    layout: {
				type: 'hbox',
			},

		    items:[
		    	{
		        	xtype: 'datefield',
		        	fieldLabel: 'Fecha inicio',
		        	labelwidth: 20,
		        	labelAlign: 'right',
		        	format: 'd-m-Y',
		        	reference: 'vcreditoFechaInicio',

		    	}, 
		    	{
		        	xtype: 'datefield',
		        	fieldLabel: 'Fecha fin',
		        	labelwidth: 150,
		        	labelAlign: 'right',
		        	format: 'd-m-Y',
		        	reference: 'vcreditoFechaFin',
		    	},

		    ],
			dockedItems: [
				{
			        xtype: 'toolbar',
			        dock: 'bottom',
			        // dock: 'left',
			        items: [
			        	{
			            	xtype: 'button',
			            	text: "Buscar",
			            	listeners:{
								click: 'Flitrar',
							},
			        	},
			        	{
			            	xtype: 'button',
			            	text: "Limpiar",
			            	listeners:{
								click: 'Limpiar',
							},
			        	},
			        	{
			            	xtype: 'button',
			            	text: "Mostrar Total",
			            	listeners:{
								click: 'MostrarTotal',
							},
			        	},
			        	{
			        		name: 'totalv',
				    		xtype: 'label',
							// fieldLabel: 'Ventas total',
							// labelAlign: 'right',
							reference: 'vcreditototal',
							style: 'font-weight:bold;',
				    	}

			        ]
			    }
			]
		},
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