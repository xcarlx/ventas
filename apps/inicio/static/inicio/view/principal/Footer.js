Ext.define('GRUPOEJ.inicio.view.principal.Footer', {
	extend: 'Ext.container.Container',
	xtype: 'appfooter',
	cls: 'app-footer',
	height: 30,
	layout: 'center',
	items: [
		{
			xtype: 'component',
			width: 350,
			componentCls: 'app-footer-title',
			html : "Pie",
			bind: {
				html: '{footer}' //#9
			}
		}
	]
});