Ext.define('GRUPOEJ.venta.controller.ventas.Venta',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.venta',
	requires:[
		'GRUPOEJ.venta.view.ventas.ClienteForm',
		'GRUPOEJ.venta.view.ventas.ClienteContext', 
	],

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
	Flitrar: function(){
		var me = this;
		if(me.lookupReference("vcontadoFechaInicio").getValue()!= null && 
			me.lookupReference("vcontadoFechaFin").getValue()!= null){
				me.getStore('store_ventas').load({
				params: {
					finicio: me.lookupReference("vcontadoFechaInicio").getValue(),
					ffin: me.lookupReference("vcontadoFechaFin").getValue(),
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
		   	var record = me.getStore('store_ventas').first();
   			me.lookupReference("vcontadototal").setText(" TOTAL DE LAS VENTAS: "+record.get("totalv")+" S/");
		}
		catch(err) {
		    Ext.Msg.alert('Error','No hay ningun registro');
		    me.lookupReference("vcontadototal").setText(0);
		}
	},
	Limpiar: function(){
		var me = this;
		if(me.lookupReference("vcontadoFechaInicio").getValue()!= null && 
			me.lookupReference("vcontadoFechaFin").getValue()!= null){
				me.getStore('store_ventas').load();
				me.lookupReference("vcontadoFechaInicio").setValue(null);
				me.lookupReference("vcontadoFechaFin").setValue(null);
		}
		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},
	handlerBtnDownloadHelpGuie: function() {
		me = this;
    	//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id);
    	window.open('grupoej.venta.ventas.venta/imprimir/'+me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id,'_blank');
	},

	productos_ContextMenu: function(view, record, element, index, evtObj) {
		me = this;
		evtObj.stopEvent();
        me.currentProductoContextMenu = record;
        currentProductoContextMenu = Ext.widget('ClienteContext', {
        	viewModel: {
        		data: {
        			descripcion: record.get("cliente__nombres"),
        		},
        	},
        	listeners : {
				'click': me.productos_ContextMenu_Seleccionar
			}
        });
        currentProductoContextMenu.viewTotal = me;
        currentProductoContextMenu.showAt(evtObj.getXY());
        return false;
	},

	productos_ContextMenu_Seleccionar: function(view, record, item, index, eventObj) {
		me = view.viewTotal;
		me.uploadfotoproducto_editWindowShow(record.action, me.currentProductoContextMenu);
	},
	
	uploadfotoproducto_editWindowShow: function(accion, registro) {
		me = this;
		if (!me.editWindowUploadFotoProducto) {
			me.editWindowUploadFotoProducto = me.getView().add({
            	xtype: 'ventacliente-form',
            	viewModel: {
	        		data: {
	        			titulo2: '',
	        		},
	        	},
	        	constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,
            });
  			//	me.editWindowPlan.on("show", function(win) {
			// 	me.lookupReference("formUploadFotoProducto").getForm().findField("tipoplan_id").focus();
			// });
		}
		with (me.editWindowUploadFotoProducto) {
			action = accion;
			with (getViewModel()) {
				setData({
					titulo2: registro.get("cliente__nombres"),
					idcliente: registro.get("clienteid"),
					tipo_documento: registro.get("cliente__tipo_documento"),
					nro_documento: registro.get("cliente__nro_documento"),
					email: registro.get("cliente__email"),
					telefono: registro.get("cliente__telefono"),
					direccion: registro.get("cliente__direccion"),
					area: registro.get("cliente__area"),
					responsable: registro.get("cliente__responsable"),
					referencia: registro.get("cliente__referencia"),
				});
			}
			show();
		}
	},
	Salir: function(){
		me = this;
		me.editWindowUploadFotoProducto.close();
	}, 

});
	