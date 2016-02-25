Ext.define('GRUPOEJ.inicio.view.principal.Panel', {
	extend: 'Ext.panel.Panel',
	xtype: 'mainpanel',
	requires:[
		'GRUPOEJ.inicio.controller.principal.Header',
	],
	controller: 'Header',
	dockedItems:[
		{
			xtype: 'tbfill'
		},
		{
			xtype: 'button',
			itemId: 'logout',
			text: 'Logout',
			reference: 'logout',
			iconCls: 'icono-cerrar-sesion',
			listeners: {
				click: 'onLogout'
			},

		},
	],
	title: 'Inicio',
	bodyStyle: 'background: transparent;',
	
	html: '<heade><link rel="shortcut icon" type="image/ico" href="{% static "images/fondo1.png" %}" /></heade>',
});