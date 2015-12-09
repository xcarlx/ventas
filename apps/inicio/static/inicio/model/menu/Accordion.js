Ext.define('GRUPOEJ.inicio.model.menu.Accordion',	{
	extend:	'Ext.data.Model',
	requires:	[
		'GRUPOEJ.inicio.model.menu.TreeNode'
	],
	fields:	[	
		{	
			name:	'id',	type:	'int'
		},	
		{	
			name:	'text'	
		},
		{	
			name:	'iconCls'	
		}
	],
	hasMany:{
		model:	'GRUPOEJ.inicio.model.menu.TreeNode',
		foreignKey:	'parent_id',
		name:	'items'	
	}
});