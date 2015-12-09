Ext.define('GRUPOEJ.models.Base', {
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields: [
		{
			name: 'id',
			type: 'int',
		},
	],
	schema: {
		namespace: 'GRUPOEJ.models',
		proxy: {
			type: 'ajax',
			api :{
				read : '/{entityName:lowercase}/listar/',
				create: '/{entityName:lowercase}/crear/',
				update: '/{entityName:lowercase}/editar/',
				destroy: '/{entityName:lowercase}/eliminar/',
			},
			reader: {
				type: 'json',
				rootProperty: 'data',
				totalProperty: 'totalCount',
			},
			writer: {
				type: 'json',
				writeAllFields: true,
				encode: true,
				rootProperty: 'data',
				allowSingle: false
			},
			listeners: {
				exception: function(proxy, response, operation) {
					GRUPOEJ.utiles.Utiles.showErrorMsg(response.responseText);
				}
			}
		}
	}
});