Ext.define('GRUPOEJ.producto.view.controles.ProductoCombo', {
	extend: 'Ext.form.ComboBox',
	alias: 'widget.producto-combo',
	fieldLabel: "Producto",
	labelWidth: 100,
	width: 450,
	reference: 'comboproductosprestamo',
	displayField: 'descripcion',
	valueField: 'id',
	allowBlank: false,
	bind:{
		store: '{store_comboproductoprestamo}',
	},
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
    },
	listeners:{
		select: 'ClienteSelect'
	},


});