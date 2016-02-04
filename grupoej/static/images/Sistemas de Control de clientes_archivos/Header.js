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
			componentCls: 'sistema-logo-mini',
		},
		{
			xtype: 'component',
			componentCls: 'app-header-title',
			
		},
		{
			xtype: 'tbfill',

			
		},
		{
			xtype: 'component',
			html: loginame,
		},
		{
			xtype: 'tbseparator',
		},
		{

			
			itemId: 'logout',
			text: 'Logout',
			reference: 'logout',
			iconCls: 'icono-cerrar-sesion',
			listeners: {
				click: 'onLogout'
			},

		},

	]
});