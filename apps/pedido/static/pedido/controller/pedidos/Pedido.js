Ext.define('GRUPOEJ.pedido.controller.pedidos.Pedido',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.pedido',
	requires:[
		'GRUPOEJ.pedido.view.pedidos.PedidoFormulario', 
		'GRUPOEJ.pedido.view.pedidos.VentaPedidoFormulario',
		'GRUPOEJ.pedido.view.pedidos.ValeGuiaFormulario',
	],
	init: function(){
		me = this;
		if (!me.editPedidoWindow) {
			me.editPedidoWindow = me.getView().add({
				xtype: 'pedido-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
			me.editPedidoWindow.on("show", function(win) {
				me.lookupReference("pedidoFormulario").getForm().findField("clienteid").focus();
			});
		}; 

		if (!me.editVentaPedidoWindow) {
			me.editVentaPedidoWindow = me.getView().add({
				xtype: 'ventapedido-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
		}; 
		if (!me.editValeGuiaPedidoWindow) {
			me.editValeGuiaPedidoWindow = me.getView().add({
				xtype: 'valeguia-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
		}; 
	},
	pedido_Agregar: function(button, e, options){
		this.pedido_AbrirVentanaEditar(null, button);
	},
	pedido_Editar: function(button, e, options){
		var me = this,
			records = me.pedido_RegistrosSeleccionados();
		if (records[0]) {
			me.pedido_AbrirVentanaEditar(records[0], button);
		}
	},
	pedido_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editPedidoWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: record ? 'Editando Pedido Nro' + record.get('nro_pedido') : 'Agregando Pedido'
				});
				setLinks({
					currentPedido: record || {
						type: 'GRUPOEJ.pedido.model.pedidos.Pedido',
						create: true
					}
				});
			}
			show();
		}
	},
	pedido_RegistrosSeleccionados: function() {

		return this.lookupReference('pedido-grillapedidos').getSelection();
	},
	detallepedido_RegistrosSeleccionados: function() {

		return this.lookupReference('detallepedido-grilladetallepedido').getSelection();
	},
	pedido_Eliminar: function(button, e, options){
		var me = this,
			records = me.pedido_RegistrosSeleccionados(),
			store = me.getStore('store_pedidos');
		Ext.Msg.show({
			title:'Alerta!!',
			msg: '¿Está seguro de eliminar los módulos seleccionados?',
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
	ventana_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('pedidoFormulario').getForm();
		store = me.getStore("store_pedidos");
		if (form && form.isValid()) {
			with (store) {
				if (me.editPedidoWindow.action == "add") {
					add(
						form.getFieldValues()
					);
				}
				else {
					idRec = form.findField("id").getValue();
					registro = getById(idRec);
					newdata = form.getFieldValues();
					campos = form.getFields();
					for (i=0; i<campos.length; i++) {
						campo = campos.items[i].name;
						if (campo != "id") {
							registro.set(campo, eval("newdata."+campo));
						}
					}
				}
				save({
					success: function(rec, op) {
						GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
						store.reload();
						me.ventana_Cancelar();
					},
					failure: function(rec, op) {
						store.rejectChanges();
					}
				});
			}
		}
	},
	ventana_Cancelar: function(button, e, options){
		me = this;
		me.editPedidoWindow.hide();
		// me.getStore("store_comboclientespedido").load();
	},
	modulo_Refrescar: function(button, e, options){
		me = this;
		me.getStore('store_pedidos').load();
	},

	seleccionarPedido: function(selModel, record, index, options){
		st_pedido = this.getStore('store_pedidos');
		st_pedido.pedidoId = record.get("id");
		this.refrescarPedido();
		this.lookupReference("idpedidoreference").setValue(record.get("id"));
		me.lookupReference('ventapedidoid').setValue(record.get("id"));
		me.lookupReference('valeguiapedidoid').setValue(record.get("id"));
	},
	deSeleccionarPedido: function(sm, selectedRecords){
		this.getStore('store_productos').load({
			url: '/grupoej.pedido.pedidos.producto/listar/0'
		});
		this.getStore('store_detallepedidos').load({
			url: 'grupoej.pedido.detallepedidos.detallepedido/listar/0'
		});
		this.lookupReference('comboproductospedido').clearValue();
		this.lookupReference('cantidadproductospedido').setValue(1);
	},

	refrescarPedido: function(){
		st_pedido = this.getStore('store_pedidos');
		if (!st_pedido.pedidoId){
			st_pedido.pedidoId = 0;
		}
		this.getStore('store_productos').load({
			url: 'grupoej.pedido.pedidos.producto/listar/' + st_pedido.pedidoId
		});
		this.getStore('store_detallepedidos').load({
			url: 'grupoej.pedido.detallepedidos.detallepedido/listar/' + st_pedido.pedidoId
		});
		this.lookupReference('cantidadproductospedido').setValue(1);
	},
	DetallPedido_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('frompedidos').getForm();
		store = me.getStore("store_detallepedidos");
		with (store) {
			add(form.getFieldValues());
			save({
				success: function(rec, op) {
					GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
					store.reload();
					me.ventana_Cancelar();
					me.refrescarPedido();
				},
				failure: function(rec, op) {
					store.rejectChanges();
					me.refrescarPedido();
				}
			});
		}
		
	},
	detallepedido_Eliminar: function(button, e, options){
		var me = this,
			records = me.detallepedido_RegistrosSeleccionados(),
			store = me.getStore('store_detallepedidos');
		Ext.Msg.show({
			title:'Alerta!!',
			msg: '¿Está seguro de eliminar los Productos seleccionados?',
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
							me.refrescarPedido();
						},
						failure: function(rec, op) {
							store.rejectChanges();
							me.refrescarPedido();
						}
					});
				}
			}
		});
	},

// VENTAS

	ventapedido_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editVentaPedidoWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: 'Agregando Venta del Pedido'
				});
				setLinks({
					currentVentaPedido: record || {
						type: 'GRUPOEJ.pedido.model.pedidos.VentaPedido',
						create: true
					}
				});
			}
			show();
		}
	},
	ventapedido_Agregar: function(button, e, options){
		me = this;
		me.editVentaPedidoWindow.on("show", function(win) {
				me.lookupReference("ventaFormulariopedido").getForm().findField("tipo_documento").setValue(0);
				me.lookupReference("ventaFormulariopedido").getForm().findField("numero_correlativo").setValue(0);
				me.lookupReference("ventaFormulariopedido").getForm().findField("numero_documento").setValue(0);
				me.lookupReference("ventaFormulariopedido").getForm().findField("reprogramar").setValue(false);
				me.lookupReference("ventaFormulariopedido").getForm().findField("nro_dias").setValue(0);
				me.lookupReference("ventaFormulariopedido").getForm().findField("credito").setValue(false);
			});
		me.ventapedido_AbrirVentanaEditar(null, button);
	},

	venta_ventana_Cancelar: function(button, e, options){
		me = this;
		me.editVentaPedidoWindow.close();
	},

	ventapedido_ventana_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('ventaFormulariopedido').getForm();
		store = me.getStore("store_ventapedido");
		if (form && form.isValid()) {
			with (store) {
				if (me.editVentaPedidoWindow.action == "add") {
					add(
						form.getFieldValues()
					);
				}
				save({
					success: function(rec, op) {
						GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
						// store.reload();
						me.venta_ventana_Cancelar();
						me.getStore('store_pedidos').load();
						me.getStore('store_detallepedidos').load({
							url: 'grupoej.pedido.detallepedidos.detallepedido/listar/0'
						});
					},
					failure: function(rec, op) {
						store.rejectChanges();
					}
				});
			}
		}
	},

	// Vales Guia


	valeguia_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editValeGuiaPedidoWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: 'Cambiar a Vale o Guia'
				});
				setLinks({
					currentValeGuia: record || {
						type: 'GRUPOEJ.pedido.model.pedidos.ValeGuiaPedido',
						create: true
					}
				});
			}
			show();
		}
	},

	valeguiapedido_Agregar: function(button, e, options){
		me = this;
		me.editValeGuiaPedidoWindow.on("show", function(win) {
				me.lookupReference("valeguiaFormulariopedido").getForm().findField("reprogramar").setValue(false);
				me.lookupReference("valeguiaFormulariopedido").getForm().findField("nro_dias").setValue(0);
				me.lookupReference("valeguiaFormulariopedido").getForm().findField("tipo_documento").setValue(0);
			});
		me.valeguia_AbrirVentanaEditar(null, button);
	},
	valeguia_ventana_Cancelar: function(button, e, options){
		me = this;
		me.editValeGuiaPedidoWindow.close();
	},

	valeguia_ventana_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('valeguiaFormulariopedido').getForm();
		store = me.getStore("store_valeguiapedido");
		if (form && form.isValid()) {
			with (store) {
				if (me.editValeGuiaPedidoWindow.action == "add") {
					add(
						form.getFieldValues()
					);
				}
				save({
					success: function(rec, op) {
						GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
						// store.reload();
						me.valeguia_ventana_Cancelar();
						me.getStore('store_pedidos').load();
						me.getStore('store_detallepedidos').load({
							url: 'grupoej.pedido.detallepedidos.detallepedido/listar/0'
						});
					},
					failure: function(rec, op) {
						store.rejectChanges();
					}
				});
			}
		}
	},

	SeleccionarCombo: function(){
		me = this;
		if(me.lookupReference("combodocvaleguia").getValue()=="GUIA"){
			alert("ASA");

		}
	},

});