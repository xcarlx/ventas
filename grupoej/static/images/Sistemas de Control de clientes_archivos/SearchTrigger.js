Ext.define('GRUPOEJ.utiles.SearchTrigger', {
	extend: 'Ext.form.field.Text',
	alias: 'widget.searchtrigger',
	setFilter: function(filterId, value) {
		var store = this.up('grid').getStore();
		if (value) {
			// store.removeFilter(filterId, false);
			var filter = {id: filterId, property: filterId, value: value};
			if(this.anyMatch) filter.anyMatch = this.anyMatch;
			if(this.caseSensitive) filter.caseSensitive = this.caseSensitive;
			if(this.exactMatch) filter.exactMatch = this.exactMatch;
			if(this.operator) filter.operator = this.operator;
			store.addFilter(filter);
			} else {
				store.filters.removeAtKey(filterId);
			}
	},
	listeners: {
		render: function() {
			var me = this;
			me.ownerCt.on('resize', function() {
				me.setWidth(this.getEl().getWidth()-8);
				me.setMargin(4);
			});
		},
		change: function() {
			if (this.autoSearch) this.setFilter(this.up().dataIndex, this.getValue(), true);
		},
		specialkey: function(f, e) {
			if (e.getKey() == e.ENTER && !this.autoSearch) {
				this.setFilter(this.up().dataIndex, this.getValue(), true);
			}
			if (e.getKey() == e.ESC) {
				this.setValue('');
				this.setFilter(this.up().dataIndex, '');
			}
		},
	}
})