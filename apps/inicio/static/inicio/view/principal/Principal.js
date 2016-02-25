Ext.define('GRUPOEJ.inicio.view.principal.Principal', {
	extend: 'Ext.container.Container',
	requires: [
		"GRUPOEJ.inicio.view.principal.Panel",
		"GRUPOEJ.inicio.view.principal.Footer",
		"GRUPOEJ.inicio.view.principal.Header",
		"GRUPOEJ.inicio.view.principal.PrincipalModel",
		'GRUPOEJ.inicio.view.menu.Accordion',
	],
	controllers:	[
		'Root',
		'Menu',
	],
	viewModel: {
		type: 'main'
	},
	plugins: 'viewport',
	xtype: 'app-main',
	layout: {
		type: 'border'
	},
	items: [
		{
			xtype: 'mainpanel',
			reference: 'panelInformacion',
			region: 'center',
			title: 'inicio',
		},
		// {
		// 	xtype: 'appheader',
		// 	region: 'north'
		// },
		{
			xtype: 'appfooter',
			region: 'south'
		},
		{
			xtype: 'mainmenu',
			reference: 'principalContainer',
			region: 'west',
		},
	]
});