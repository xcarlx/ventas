Ext.define('GRUPOEJ.venta.controller.anuladas.VentaAnulada',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.ventaanulada',
	// requires:[
	// 	'GRUPOEJ.pedido.view.pedidos.PedidoFormulario', 
	// 	'GRUPOEJ.pedido.view.pedidos.VentaPedidoFormulario',
	// ],
	refrescarPedido: function(){
		st_venta = this.getStore('store_ventasanulada');
		if (!st_venta.ventaId){
			st_venta.ventaId = 0;
		}
		this.getStore('store_detalleventasanulada').load({
			params:{idventa: st_venta.ventaId}
		});
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/' + st_venta.ventaId
		// });
	},
	seleccionarVenta: function(selModel, record, index, options){
		st_venta = this.getStore('store_ventasanulada');
		st_venta.ventaId = record.get("id");
		this.refrescarPedido();
		this.lookupReference('totalventa').setText("Total: "+record.get("total"));
	},
	deSeleccionarVenta: function(sm, selectedRecords){
		this.getStore('store_detalleventasanulada').load({
			params:{idventa: 0}
		});		
		// this.getStore('store_detalleventas').load({
		// 	url: 'grupoej.venta.detalleventas.detalleventa/listar/0'
		// });
	},
	ventaAnulada_RegistrosSeleccionados: function() {

		return this.lookupReference('ventaanuladagrilla').getSelection();
	},
	ActivarVenta: function(button, e, options){
		var me = this,
			records = me.ventaAnulada_RegistrosSeleccionados(),
			store = me.getStore('store_ventasanulada');
		Ext.Msg.show({
			title:'Alerta!!',
			msg: '¿Está seguro de Activar las Ventas seleccionadas?',
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
	