Ext.define('GRUPOEJ.producto.view.controles.ClienteCombo', {
	extend: 'Ext.form.ComboBox',
	alias: 'widget.cliente-combo',
	fieldLabel: "Cliente",
	labelWidth: 120,
	width: 600,
	reference: 'clientecombo',
	 // bind:{
	 // 	store: '{store_plan}'
	 // },
	displayField: 'nombre',
	valueField: 'id',
	queryMode: 'local',
	queryDelay: 5,
	queryChaching: false,
	forceSelection:true,
	editable: true,
	listConfig:{
		maxHeight: 200,
	},
	// listeners:{
	// 	select: 'PlanSelect'
	// },

});