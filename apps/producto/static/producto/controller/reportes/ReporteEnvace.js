Ext.define('GRUPOEJ.producto.controller.reportes.ReporteEnvace',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.reportesenvace',
	// requires:[
	// 	'GRUPOEJ.pedido.view.pedidos.PedidoFormulario', 
	// 	'GRUPOEJ.pedido.view.pedidos.VentaPedidoFormulario',
	// ],
	refrescarCliente: function(){
		st_cliente = this.getStore('store_rvCliente');
		if (!st_cliente.clienteId){
			st_cliente.clienteId = 0;
		}
		this.getStore('store_rvdEnvaces').load({
			params:{idcliente: st_cliente.clienteId}
		});
	},
	seleccionarCliente: function(selModel, record, index, options){
		st_cliente = this.getStore('store_rvCliente');
		st_cliente.clienteId = record.get("id");
		this.refrescarCliente();
	},
	deSeleccionarCliente: function(sm, selectedRecords){
		this.getStore('store_rvdEnvaces').load({
			params:{idcliente: 0}
		});		
	},
	Imprimir: function(){
		me = this;
		window.open('grupoej.producto.reportes.reporteenvace/imprimir/'+me.lookupReference('reporteenvacegrilla').getSelectionModel().getSelection()[0].id+"/",'_blank');
	},	
	
	ImprimirPorProducto: function(){
		me = this;
		window.open('grupoej.producto.reportes.reporteporenvace/imprimir/'
			+me.lookupReference('reporteenvacegrilla').getSelectionModel().getSelection()[0].id+"/"
			+me.lookupReference('detallecontrolenvacegrilla').getSelectionModel().getSelection()[0].id+"/",'_blank');
	},
});