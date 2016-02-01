Ext.define('GRUPOEJ.venta.controller.creditos.VentaCredito',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.ventacredito',
	// requires:[
	// 	'GRUPOEJ.pedido.view.pedidos.PedidoFormulario', 
	// 	'GRUPOEJ.pedido.view.pedidos.VentaPedidoFormulario',
	// ],
	refrescarPedido: function(){
		st_venta = this.getStore('store_ventascredito');
		if (!st_venta.ventaId){
			st_venta.ventaId = 0;
		}
		this.getStore('store_detalleventascredito').load({
			params:{idventa: st_venta.ventaId}
		});
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/' + st_venta.ventaId
		// });
	},
	seleccionarVenta: function(selModel, record, index, options){
		st_venta = this.getStore('store_ventascredito');
		st_venta.ventaId = record.get("id");
		this.refrescarPedido();
		this.lookupReference('totalventa').setText("Total: "+record.get("total"));
	},
	deSeleccionarVenta: function(sm, selectedRecords){
		this.getStore('store_detalleventascredito').load({
			params:{idventa: 0}
		});		
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/0'
		// });
	},
	ventaCredito_RegistrosSeleccionados: function() {

		return this.lookupReference('ventacreditogrilla').getSelection();
	},
	PagarVenta: function(button, e, options){
		var me = this,
			records = me.ventaCredito_RegistrosSeleccionados(),
			store = me.getStore('store_ventascredito');
		Ext.Msg.show({
			title:'Alerta!!',
			msg: '¿Está seguro de Pagar la Ventas seleccionadas?',
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			iconCls: button.iconCls,
			fn: function (buttonId) {
				if (buttonId == 'yes') {
					store.remove(records);
					store.save({
						success: function(rec, op) {
							GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
							store.reload();
						},
						failure: function(rec, op) {
							store.rejectChanges();
						}
					});
				}
			}
		});
	},
});
	