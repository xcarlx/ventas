Ext.define('GRUPOEJ.inicio.view.principal.Header', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'appheader',
	// ui: 'footer',
	requires:[
		'GRUPOEJ.inicio.controller.principal.Header',
	],
	controller: 'Header',
	items: [
		{
			xtype: 'component',
			html: 'Sistema Ventas',
		},
		{
			xtype: 'component',
			componentCls: 'app-header-title',
			
		},
		{
			xtype: 'tbfill',

			
		},
		{
			xtype: 'tbseparator',
		},
		{
			xtype: 'component',
			html: "USUARIO:   \t"+loginame,
		},
		{

			
			itemId: 'logout',
			text: 'Logout',
			reference: 'logout',
			iconCls: 'fa fa-sign-out fa-lg buttonIcon',
			listeners: {
				click: 'onLogout'
			},

		},

	]
});