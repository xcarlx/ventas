Ext.define('GRUPOEJ.vale.view.vales.Vale', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires: [
	'GRUPOEJ.vale.view.vales.ValeVistaModelo', 
	'GRUPOEJ.vale.view.vales.ValeGrilla',
	'GRUPOEJ.vale.controller.vales.Vale',
	],
	controller: 'vale',
	viewModel: {
		type: 'vale',
	},
	items: [
		{
			xtype: 'vale-grilla',
		}
	],
});

