Ext.define('GRUPOEJ.guia.controller.guias.Guia', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.guia',
	requires: [
		'GRUPOEJ.guia.view.guias.GuiaFormulario',
		'GRUPOEJ.guia.view.guias.VentaGuiaFormulario', 
	],
	init: function(application) {
		me = this;
		if (!me.editGuiaWindow) {
			me.editGuiaWindow = me.getView().add({
				xtype: 'guia-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
			me.editGuiaWindow.on("show", function(win) {
				me.lookupReference("guiaFormulario").getForm().findField("clienteid").focus();
			});
		}
		if (!me.editGuiaVentaWindow) {
			me.editGuiaVentaWindow = me.getView().add({
				xtype: 'ventaguia-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
		}; 

	},
	guia_Agregar: function(button, e, options){
		this.guia_AbrirVentanaEditar(null, button);
	},
	guia_Editar: function(button, e, options){
		var me = this,
			records = me.guia_RegistrosSeleccionados();
		if (records[0]) {
			me.guia_AbrirVentanaEditar(records[0], button);
		}
	},
	guia_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editGuiaWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: record ? 'Editando Guia Remision ': 'Agregando Guia Remision'
				});
				setLinks({
					currentGuia: record || {
						type: 'GRUPOEJ.guia.model.guias.Guia',
						create: true
					}
				});
			}
			show();
		}
	},
	guia_RegistrosSeleccionados: function() {

		return this.lookupReference('guiaGrilla').getSelection();
	},
	detalleguia_RegistrosSeleccionados: function() {

		return this.lookupReference('detalleguiagrillaRef').getSelection();
	},
	guia_Eliminar: function(button, e, options){
		var me = this,
			records = me.guia_RegistrosSeleccionados(),
			store = me.getStore('store_guia');
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
		form = me.lookupReference('guiaFormulario').getForm();
		store = me.getStore("store_guia");
		if (form && form.isValid()) {
			with (store) {
				if (me.editGuiaWindow.action == "add") {
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
		me.editGuiaWindow.hide();
	},
	guia_Refrescar: function(button, e, options){
		me = this;
		me.getStore('store_guia').load();
	},

	// Guias_ContextMenu: function(view, record, element, index, evtObj) {
	// 	me = this;
	// 	evtObj.stopEvent();
 //        me.currentGuia = record;
 //        currentGuiaContextMenu = Ext.widget('treeGuiaContext', {
 //        	viewModel: {
 //        		data: {
 //        			numero: record.get("numero"),
 //        		},
 //        	},
 //        	listeners : {
	// 			'click': me.guia_RegistrosSeleccionados
	// 		}
 //        });
 //        currentGuiaContextMenu.viewTotal = me;
 //        currentGuiaContextMenu.showAt(evtObj.getXY());
 //        return false;
	// },
	// guias_ContextMenu_Seleccionar: function(view, record, item, index, eventObj) {
	// 	me = view.viewTotal;
	// 	switch (record.action) {
	// 		case "delete":
	// 			me.guia_Eliminar(me.currentGuia);
	// 			break;
	// 		default:
	// 			me.guia_AbrirVentanaEditar(record.action, me.currentGuia);
	// 			break;
	// 	}
	// },

	seleccionarGuia: function(selModel, record, index, options){
		st_guia = this.getStore('store_guia');
		st_guia.guiaId = record.get("id");
		this.refrescarGuia();
		this.lookupReference("idguiareference").setValue(record.get("id"));
	},
	deSeleccionarGuia: function(sm, selectedRecords){
		
		this.getStore('store_productos_guia').load({
			params:{idguia: 0}
		});
		this.getStore('store_detalleguia').load({
			params:{idguia: 0}
		});
		this.lookupReference('comboproductosguia').clearValue();
		this.lookupReference('cantidadproductosguia').setValue(1);
	},

	refrescarGuia: function(){
		st_guia = this.getStore('store_guia');
		if (!st_guia.guiaId){
			st_guia.guiaId = 0;
		}
		this.getStore('store_productos_guia').load({
			params:{idguia: st_guia.guiaId} 
		});
		this.getStore('store_detalleguia').load({
			params:{idguia: st_guia.guiaId} 
		});
		this.lookupReference('cantidadproductosguia').setValue(1);
	},

	DetallGuia_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('fromguias').getForm();
		store = me.getStore("store_detalleguia");
		with (store) {
			add(form.getFieldValues());
			save({
				success: function(rec, op) {
					GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
					store.reload();
					me.ventana_Cancelar();
					me.refrescarGuia();
				},
				failure: function(rec, op) {
					store.rejectChanges();
					me.refrescarGuia();
				}
			});
		}
		
	},
	detalleGuia_Eliminar: function(button, e, options){
		var me = this,
			records = me.detalleguia_RegistrosSeleccionados(),
			store = me.getStore('store_detalleguia');
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
							me.refrescarGuia();
						},
						failure: function(rec, op) {
							store.rejectChanges();
							me.refrescarGuia();
						}
					});
				}
			}
		});
	},

	//Venta de Guia

	ventaguia_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editGuiaVentaWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: 'Agregando Venta de Guias'
				});
				setLinks({
					currentVentaPedido: record || {
						type: 'GRUPOEJ.guia.model.guias.VentaGuia',
						create: true
					}
				});
			}
			show();
		}
	},
	ventaguia_Agregar: function(button, e, options){
		me = this;
		record = "(";
		i=0;
		arr = [];
		n=0;
		cliente = false;
		cont = 0;
		grid = me.lookupReference('guiaGrilla');
		try {
			for(; i <= grid.getStore().getCount(); i++){
				if(grid.getStore().getAt(i).data['active']){
					arr[cont] = grid.getStore().getAt(i).data['clienteid'];
					cont++;
					record = record + grid.getStore().getAt(i).data['id']+",";
				}					
			}

		} catch(err){
		  console.log(err.message);
		}
		while(n<arr.length){
			arr[n+1]==arr[n] ? arr.splice(n,1) : n++
		}
		if(arr.length!=1){
			cliente=true;
		}
		record = record+")";
		if(record != "()" && cliente == false){
			me.editGuiaVentaWindow.on("show", function(win) {
					me.lookupReference("ventaFormularioguia").getForm().findField("guiasid").setValue(record);
					me.lookupReference("ventaFormularioguia").getForm().findField("tipo_documento").setValue(0);
					me.lookupReference("ventaFormularioguia").getForm().findField("numero_correlativo").setValue(0);
					me.lookupReference("ventaFormularioguia").getForm().findField("numero_documento").setValue(0);
					me.lookupReference("ventaFormularioguia").getForm().findField("credito").setValue(false);
				});
			me.ventaguia_AbrirVentanaEditar(null, button);
		}
	},

	guiaventa_ventana_Cancelar: function(button, e, options){
		me = this;
		me.editGuiaVentaWindow.close();
	},


	ventaguia_ventana_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('ventaFormularioguia').getForm();
		store = me.getStore("store_ventaguia");
		if (form && form.isValid()) {
			with (store) {
				if (me.editGuiaVentaWindow.action == "add") {
					add(
						form.getFieldValues()
					);
				}
				save({
					success: function(rec, op) {
						GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
						me.guiaventa_ventana_Cancelar();
						me.getStore('store_guia').load();
						me.getStore('store_detalleguia').load({
							params:{idguia: 0} 
						});
					},
					failure: function(rec, op) {
						store.rejectChanges();
					}
				});
			}
		}
	},

});

