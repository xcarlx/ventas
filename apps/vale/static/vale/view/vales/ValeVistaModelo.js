Ext.define('GRUPOEJ.vale.view.vales.ValeVistaModelo', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.vale',
	requires: [
		'GRUPOEJ.vale.model.vales.Vale', 
	],
	stores: {
		store_vale: {
			model: 'GRUPOEJ.vale.model.vales.Vale', 
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
	}
});