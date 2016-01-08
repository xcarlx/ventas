Ext.define('GRUPOEJ.venta.controller.ventas.Venta',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.venta',
	// requires:[
	// 	'GRUPOEJ.pedido.view.pedidos.PedidoFormulario', 
	// 	'GRUPOEJ.pedido.view.pedidos.VentaPedidoFormulario',
	// ],
	refrescarPedido: function(){
		st_venta = this.getStore('store_ventas');
		if (!st_venta.ventaId){
			st_venta.ventaId = 0;
		}
		this.getStore('store_detalleventas').load();
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/' + st_venta.ventaId
		// });
	},
	seleccionarVenta: function(selModel, record, index, options){
		st_venta = this.getStore('store_ventas');
		st_venta.ventaId = record.get("id");
		this.refrescarPedido();
	},
	deSeleccionarVenta: function(sm, selectedRecords){
		this.getStore('store_detalleventas').load({
			url: 'grupoej.venta.detalleventas.detalleventa/listar/0'
		});		
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/0'
		// });
	},
});
	