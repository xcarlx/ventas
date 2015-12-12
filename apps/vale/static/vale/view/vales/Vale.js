Ext.define('GRUPOEJ.vale.view.vales.Vale', {
	extend: 'GRUPOEJ.inicio.view.PlantillaContenido',
	requires: [
	'GRUPOEJ.vale.view.vales.ValeVistaModelo', 
	'GRUPOEJ.vale.view.vales.ValeGrilla',
	// 	'SARGRC.adm.controller.modulos.Modulo',
	],
	// controller: 'modulo',
	viewModel: {
		type: 'vale',
	},
	items: [
		{
			xtype: 'vale-grilla',
		}
	],
});

