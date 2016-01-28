Ext.define('GRUPOEJ.producto.view.controles.ClienteCombo', {
	extend: 'Ext.form.ComboBox',
	alias: 'widget.cliente-combo',
	fieldLabel: "Cliente",
	labelWidth: 120,
	width: 600,
	reference: 'clientecombo',
	 bind:{
	 	store: '{store_clientes}'
	 },
	displayField: 'cliente',
	valueField: 'id',
	queryMode: 'local',
	listConfig:{
		maxHeight: 200,
	},
	queryDelay: 5,
	queryChaching: false,
	forceSelection:true,
	hideTrigger: true,
	editable: true,
	triggerAction: 'all',
	// typeAheadDelay: 100,
	// minChars: 3,
	lastQuery: '',
	typeAhead: true,
	listeners: {
        // delete the previous query in the beforequery event or set
        // combo.lastQuery = null (this will reload the store the next time it expands)
        beforequery: function(qe){
            delete qe.combo.lastQuery;
        }
    }
	// listeners:{
	// 	select: 'PlanSelect'
	// },

});