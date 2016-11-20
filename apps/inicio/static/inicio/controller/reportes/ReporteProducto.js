Ext.define('GRUPOEJ.inicio.controller.reportes.ReporteProducto',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.reporteproducto', 
	requires:[
		'GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoContext',
		'GRUPOEJ.inicio.view.pedidosvencidos.PVClienteForm',
		'GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteContext',
		'GRUPOEJ.inicio.view.pedidospendientes.PPClienteForm',
	],
	Flitrar: function(){
		var me = this;
		if(me.lookupReference("vreporteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteFechaFin").getValue() != null && 
			me.lookupReference("comboreporteproducto").getValue != null){
				me.getStore('store_reporteproductogrilla').load({
				params: {
					idproducto: me.lookupReference("comboreporteproducto").getValue(),
					finicio: me.lookupReference("vreporteFechaInicio").getValue(),
					ffin: me.lookupReference("vreporteFechaFin").getValue(),
				}
				
			});
			me.lookupReference("totalreporteprecio").setText(0);
			me.lookupReference("totalreportecantidad").setText(0);
		}

		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},
	MostrarTotal: function(){
		me = this;
		try {
			var record = me.getStore('store_reporteproductogrilla').first();
			me.lookupReference("totalreportecantidad").setText(" CANTIDAD - TOTAL: "+record.get("totalcantidad")+" ");
			me.lookupReference("totalreporteprecio").setText(" PRECIO - TOTAL : "+record.get("totalprecio")+" S/");
		}
		catch(err) {
			Ext.Msg.alert('Error','No hay ningun registro');
			me.lookupReference("totalreporteprecio").setText(0);
			me.lookupReference("totalreportecantidad").setText(0);
		}
	},
	Limpiar: function(){
		var me = this;
		if(me.lookupReference("vreporteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteFechaFin").getValue() != null && 
			me.lookupReference("comboreporteproducto").getValue != null){
				me.getStore('store_reporteproductogrilla').load();
				me.lookupReference("comboreporteproducto").setValue(null);
				me.lookupReference("vreporteFechaInicio").setValue(null);
				me.lookupReference("vreporteFechaFin").setValue(null);
				me.MostrarTotal();
		}
		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
			me.MostrarTotal();
		}
		
	},

	ClienteFlitrar: function(){
		var me = this;
		if(me.lookupReference("vreporteclienteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteclienteFechaFin").getValue() != null && 
			me.lookupReference("comboreportecliente").getValue != null){
				me.getStore('store_reporteclientegrilla').load({
				params: {
					idcliente: me.lookupReference("comboreportecliente").getValue(),
					finicio: me.lookupReference("vreporteclienteFechaInicio").getValue(),
					ffin: me.lookupReference("vreporteclienteFechaFin").getValue(),
				}
				
			});
			me.lookupReference("totalreporteclienteprecio").setText(0);
			me.lookupReference("totalreporteclientecantidad").setText(0);
		}

		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},
	ClienteMostrarTotal: function(){
		me = this;
		try {
			var record = me.getStore('store_reporteclientegrilla').first();
			me.lookupReference("totalreporteclientecantidad").setText(" CANTIDAD - TOTAL: "+record.get("totalcantidad")+" ");
			me.lookupReference("totalreporteclienteprecio").setText(" PRECIO - TOTAL : "+record.get("totalprecio")+" S/");
		}
		catch(err) {
			Ext.Msg.alert('Error','No hay ningun registro');
			me.lookupReference("totalreporteclienteprecio").setText(0);
			me.lookupReference("totalreporteclientecantidad").setText(0);
		}
	},
	ClienteLimpiar: function(){
		var me = this;
		if(me.lookupReference("vreporteclienteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteclienteFechaFin").getValue() != null && 
			me.lookupReference("comboreportecliente").getValue != null){
				me.getStore('store_reporteclientegrilla').load();
				me.lookupReference("comboreportecliente").setValue(null);
				me.lookupReference("vreporteclienteFechaInicio").setValue(null);
				me.lookupReference("vreporteclienteFechaFin").setValue(null);
				me.MostrarTotal();
		}
		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
			me.MostrarTotal();
		}
		
	},
	ImprimirProducto: function() {
		me = this;
		//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSeelctionModel().getSelection()[0].id);
		window.open('grupoej.inicio.reportes.reporteproducto/imprimir/'
			+ me.lookupReference("comboreporteproducto").getValue()+"/"
			+ new Date(me.lookupReference("vreporteFechaInicio").getValue()).getTime()+"/"
			+ new Date(me.lookupReference("vreporteFechaFin").getValue()).getTime()+"/",'_blank');
	},
	ImprimirAllProducto: function() {
		me = this;
		//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id);
		window.open('grupoej.inicio.reportes.reporteproducto/imprimir/'
			+ new Date(me.lookupReference("vreporteFechaInicio").getValue()).getTime()+"/"
			+ new Date(me.lookupReference("vreporteFechaFin").getValue()).getTime()+"/",'_blank');
	},
	ImprimirCliente: function() {
		me = this;
		//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id);
		window.open('grupoej.inicio.reportes.reportecliente/imprimir/'
			+ me.lookupReference("comboreportecliente").getValue()+"/"
			+ new Date(me.lookupReference("vreporteclienteFechaInicio").getValue()).getTime()+"/"
			+ new Date(me.lookupReference("vreporteclienteFechaFin").getValue()).getTime()+"/",'_blank');
	},


	// From Cliente

	productos_ContextMenu: function(view, record, element, index, evtObj) {
		me = this;
		evtObj.stopEvent();
		me.currentProductoContextMenu = record;
		currentProductoContextMenu = Ext.widget('PedidoVencidoContext', {
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
				xtype: 'pedidoVencidoCliente-form',
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
					frecuencia: registro.get("cliente__frecuencia"),
					zona_sector: registro.get("cliente__zona_sector"),
				});
			}
			show();
		}
	},

	Salir: function(){
		me = this;
		me.editWindowUploadFotoProducto.close();
	}, 


	// From Cliente

	productos_ContextMenu1: function(view, record, element, index, evtObj) {
		me = this;
		evtObj.stopEvent();
		me.currentProductoContextMenu1 = record;
		currentProductoContextMenu1 = Ext.widget('PedidoPendienteContext', {
			viewModel: {
				data: {
					descripcion: record.get("cliente__nombres"),
				},
			},
			listeners : {
				'click': me.productos_ContextMenu_Seleccionar1
			}
		});
		currentProductoContextMenu1.viewTotal = me;
		currentProductoContextMenu1.showAt(evtObj.getXY());
		return false;
	},

	productos_ContextMenu_Seleccionar1: function(view, record, item, index, eventObj) {
		me = view.viewTotal;
		me.uploadfotoproducto_editWindowShow1(record.action, me.currentProductoContextMenu1);
	},
	
	uploadfotoproducto_editWindowShow1: function(accion, registro) {
		me = this;
		if (!me.editWindowUploadFotoProducto1) {
			me.editWindowUploadFotoProducto1 = me.getView().add({
				xtype: 'pedidoPendienteCliente-form',
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
		with (me.editWindowUploadFotoProducto1) {
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
					frecuencia: registro.get("cliente__frecuencia"),
					zona_sector: registro.get("cliente__zona_sector"),
				});
			}
			show();
		}
	},

	Salir1: function(){
		me = this;
		me.editWindowUploadFotoProducto1.close();
	}, 

});