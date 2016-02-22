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
			xtype: 'panel',
		    bodyPadding: 5,  // Don't want content to crunch against the borders
		    // marging: 5,
		    // title: 'Filtros por Fechas',
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
		        	reference: 'vcontadoFechaInicio',

		    	}, 
		    	{
		        	xtype: 'datefield',
		        	fieldLabel: 'Fecha fin',
		        	labelwidth: 150,
		        	labelAlign: 'right',
		        	format: 'd-m-Y',
		        	reference: 'vcontadoFechaFin',
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
							reference: 'vcontadototal',
							style: 'font-weight:bold;',
				    	}

			        ]
			    }
			]
		},
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