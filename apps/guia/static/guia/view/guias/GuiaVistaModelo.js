Ext.define('GRUPOEJ.guia.view.guias.GuiaVistaModelo', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.guia',
	requires: [
		'GRUPOEJ.guia.model.guias.Guia', 
		'GRUPOEJ.cliente.model.clientes.Cliente',
		'GRUPOEJ.guia.model.guias.Producto', 
		'GRUPOEJ.guia.model.guias.DetalleGuia',
	],
	stores: {
		store_guia: {
			model: 'GRUPOEJ.guia.model.guias.Guia', 
			autoLoad: true,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_comboclientesguia:{
			model: 'GRUPOEJ.cliente.model.clientes.Cliente',
			autoLoad: true,
			// pageSize: gridPageSize,
			// remoteSort: true,
			// remoteFilter: true,
		},
		store_productos_guia:{
			model:'GRUPOEJ.guia.model.guias.Producto', 
			autoLoad: false,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		},
		store_detalleguia:{
			model:'GRUPOEJ.guia.model.guias.DetalleGuia',
			autoLoad: false,
			pageSize: gridPageSize,
			remoteSort: true,
			remoteFilter: true,
		}
	}
});