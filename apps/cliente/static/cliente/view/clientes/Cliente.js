Ext.define('GRUPOEJ.cliente.view.clientes.Cliente', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	requires:[
		'GRUPOEJ.cliente.view.clientes.ClienteGrilla',
		'GRUPOEJ.cliente.view.clientes.ClienteModelo',
		'GRUPOEJ.cliente.controller.clientes.Cliente',
	],
	viewModel:{
		type: 'cliente',
	},
	controller: 'cliente',
	items:[
		{
			xtype: 'cliente-grilla-clientes',
		},
	],
});