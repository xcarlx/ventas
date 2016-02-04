Ext.define('GRUPOEJ.inicio.view.menu.Accordion',	{
	extend:	'Ext.panel.Panel',
	xtype:	'mainmenu',	
	width:	250,
	minWidth: 200,
	maxWidth: 400,
	layout:	{
		type:	'accordion',	
		multi:	false
	},
	collapsible:	true,
	titleCollapse: true,	
	split:	true,	
	iconCls: 'icono-menu',
	title:	"Menu Principal"
});