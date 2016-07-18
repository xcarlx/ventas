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
	Flitrar: function(){
		var me = this;
		if(me.lookupReference("vcreditoFechaInicio").getValue()!= null && 
			me.lookupReference("vcreditoFechaFin").getValue()!= null){
				me.getStore('store_ventascredito').load({
				params: {
					finicio: me.lookupReference("vcreditoFechaInicio").getValue(),
					ffin: me.lookupReference("vcreditoFechaFin").getValue(),
				}
			});
		}

		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},
	MostrarTotal: function(){
		me = this;
		try {
		   	var record = me.getStore('store_ventascredito').first();
   			me.lookupReference("vcreditototal").setText(" TOTAL DE LAS VENTAS: "+record.get("totalv")+" S/");
		}
		catch(err) {
		    Ext.Msg.alert('Error','No hay ningun registro');
		    me.lookupReference("vcreditototal").setText(0);
		}
	},
	Limpiar: function(){
		var me = this;
		if(me.lookupReference("vcreditoFechaInicio").getValue()!= null && 
			me.lookupReference("vcreditoFechaFin").getValue()!= null){
				me.getStore('store_ventascredito').load();
				me.lookupReference("vcreditoFechaInicio").setValue(null);
				me.lookupReference("vcreditoFechaFin").setValue(null);
		}
		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},

	handlerBtnDownloadHelpGuie: function() {
		me = this;
    	//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id);
		if(me.lookupReference("vcreditoFechaInicio").getValue()!= null && 
			me.lookupReference("vcreditoFechaFin").getValue()!= null){
			window.open('grupoej.venta.creditos.reporteventacredito/imprimir/'
				+ new Date(me.lookupReference("vcreditoFechaInicio").getValue()).getTime()+"/"
				+ new Date(me.lookupReference("vcreditoFechaFin").getValue()).getTime()+"/",'_blank');
		}else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
	}

});
	