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
		this.getStore('store_detalleventas').load({
			params:{idventa: st_venta.ventaId}
		});
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/' + st_venta.ventaId
		// });
	},
	seleccionarVenta: function(selModel, record, index, options){
		st_venta = this.getStore('store_ventas');
		st_venta.ventaId = record.get("id");
		this.refrescarPedido();
		this.lookupReference('totalventa').setText("Total: "+record.get("total"));
	},
	deSeleccionarVenta: function(sm, selectedRecords){
		this.getStore('store_detalleventas').load({
			params:{idventa: 0}
		});		
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/0'
		// });
	},

	ventaContado_RegistrosSeleccionados: function() {

		return this.lookupReference('ventagrilla').getSelection();
	},
	AnularVenta: function(button, e, options){
		var me = this,
			records = me.ventaContado_RegistrosSeleccionados(),
			store = me.getStore('store_ventas');
		Ext.Msg.show({
			title:'Alerta!!',
			msg: '¿Está seguro de Anular las ventas seleccionados?',
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
	