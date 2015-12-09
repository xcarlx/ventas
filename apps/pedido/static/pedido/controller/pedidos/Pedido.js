Ext.define('GRUPOEJ.pedido.controller.pedidos.Pedido',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.pedido',
	// requires:[
	// 	'GRUPOEJ.pedido.view.pedidos.Pedido', 
	// ],
	init: function(){
		// me = this;
		// if(!me.formProducto){
		// 	me.formProducto = me.getView().add({
		// 		xtype: 'producto-form',
		// 		constrain: true,
		// 		constrainTo: panelCentral.id,
		// 		renderTo: panelCentral.id,
		// 		// renderTo: Ext.getBody()
		// 		viewModel:{
		// 			data: {
		// 				titulo: ""
		// 			}
		// 		}
		// 	}); 
			// focus al campo del formulario
			// me.formProducto.on("show", function(win){
			// 	me.lookupReference("formProducto").getForm().findField("descripcion").focus();
			// });
		// }
	},
	seleccionarPedido: function(selModel, record, index, options){
		st_pedido = this.getStore('store_pedidos');
		st_pedido.pedidoId = record.get("id");
		this.refrescarPedido();
	},
	deSeleccionarPedido: function(sm, selectedRecords){
		// this.getStore('store_pedidos').load({
		// 	url: '/pedido/pedidos.pedido/listar/0'
		// });
		this.getStore('store_productos').load({
			url: '/grupoej.pedido.pedidos.producto/listar/0'
		});
		this.getStore('store_detallepedidos').load({
			url: '/grupoej.pedido.pedidos.producto/listar/0'
		});
		// this.lookupReference('from-pedidos').Items;
		this.lookupReference('comboproductos').clearValue();
		this.lookupReference('cantidadproductos').setValue(1);
		// alert("qqqq");
	},

	refrescarPedido: function(){
		st_pedido = this.getStore('store_pedidos');
		if (!st_pedido.pedidoId){
			st_pedido.pedidoId = 0;
		}
		// st_pedido.load({
		// 	url: '/pedido/pedidos.pedido/listar/' + st_pedido.pedidoId
		// });
		this.getStore('store_productos').load({
			url: 'grupoej.pedido.pedidos.producto/listar/' + st_pedido.pedidoId
		});
		this.getStore('store_detallepedidos').load({
			url: 'grupoej.pedido.detallepedidos.detallepedido/listar/' + st_pedido.pedidoId
		});
	},
});