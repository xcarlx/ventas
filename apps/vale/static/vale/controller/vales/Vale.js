Ext.define('GRUPOEJ.vale.controller.vales.Vale', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.vale',
	requires: [
		'GRUPOEJ.vale.view.vales.ValeFormulario',
		'GRUPOEJ.vale.view.vales.VentaValeFormulario', 
		'GRUPOEJ.vale.view.vales.ValeContext',
	],
	init: function(application) {
		me = this;
		if (!me.editValeWindow) {
			me.editValeWindow = me.getView().add({
				xtype: 'vale-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
			me.editValeWindow.on("show", function(win) {
				me.lookupReference("valeFormulario").getForm().findField("clienteid").focus();
			});
		}
		if (!me.editValeVentaWindow) {
			me.editValeVentaWindow = me.getView().add({
				xtype: 'ventavale-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
		}; 


	},
	vale_Agregar: function(button, e, options){
		this.vale_AbrirVentanaEditar(null, button);
	},
	vale_Editar: function(button, e, options){
		var me = this,
			records = me.vale_RegistrosSeleccionados();
		if (records[0]) {
			me.vale_AbrirVentanaEditar(records[0], button);
		}
	},
	vale_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editValeWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: record ? 'Editando Vale Nro' + record.get('numero') : 'Agregando Vale'
				});
				setLinks({
					currentVale: record || {
						type: 'GRUPOEJ.vale.model.vales.Vale',
						create: true
					}
				});
			}
			show();
		}
	},
	vale_RegistrosSeleccionados: function() {

		return this.lookupReference('valeGrilla').getSelection();
	},
	detallevale_RegistrosSeleccionados: function() {

		return this.lookupReference('detallevalegrillaRef').getSelection();
	},
	vale_Eliminar: function(button, e, options){
		var me = this,
			records = me.vale_RegistrosSeleccionados(),
			store = me.getStore('store_vale');
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
		form = me.lookupReference('valeFormulario').getForm();
		store = me.getStore("store_vale");
		if (form && form.isValid()) {
			with (store) {
				if (me.editValeWindow.action == "add") {
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
		me.editValeWindow.close();
	},
	modulo_Refrescar: function(button, e, options){
		me = this;
		me.getStore('store_vale').load();
	},

	vales_ContextMenu: function(view, record, element, index, evtObj) {
		me = this;
		evtObj.stopEvent();
        me.currentVale = record;
        currentValeContextMenu = Ext.widget('treeValeContext', {
        	viewModel: {
        		data: {
        			numero: record.get("numero"),
        		},
        	},
        	listeners : {
				'click': me.vale_RegistrosSeleccionados
			}
        });
        currentValeContextMenu.viewTotal = me;
        currentValeContextMenu.showAt(evtObj.getXY());
        return false;
	},
	vales_ContextMenu_Seleccionar: function(view, record, item, index, eventObj) {
		me = view.viewTotal;
		switch (record.action) {
			case "delete":
				me.vale_Eliminar(me.currentVale);
				break;
			default:
				me.vale_AbrirVentanaEditar(record.action, me.currentVale);
				break;
		}
	},

	seleccionarVale: function(selModel, record, index, options){
		st_vale = this.getStore('store_vale');
		st_vale.valeId = record.get("id");
		this.refrescarVale();
		this.lookupReference("idvalereference").setValue(record.get("id"));
	},
	deSeleccionarVale: function(sm, selectedRecords){
		
		this.getStore('store_productos').load({
			url: '/grupoej.vale.vales.producto/listar/0'
		});
		this.getStore('store_detallevale').load({
			url: 'grupoej.vale.vales.detallevales/listar/0'
		});
		this.lookupReference('comboproductosvale').clearValue();
		this.lookupReference('cantidadproductosvale').setValue(1);
	},

	refrescarVale: function(){
		st_vale = this.getStore('store_vale');
		if (!st_vale.valeId){
			st_vale.valeId = 0;
		}
		this.getStore('store_productos').load({
			url: '/grupoej.vale.vales.producto/listar/' + st_vale.valeId
		});
		this.getStore('store_detallevale').load({
			url: 'grupoej.vale.vales.detallevales/listar/' + st_vale.valeId
		});
		this.lookupReference('cantidadproductosvale').setValue(1);
	},

	DetallVale_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('fromvales').getForm();
		store = me.getStore("store_detallevale");
		with (store) {
			add(form.getFieldValues());
			save({
				success: function(rec, op) {
					GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
					store.reload();
					me.ventana_Cancelar();
					me.refrescarVale();
				},
				failure: function(rec, op) {
					store.rejectChanges();
					me.refrescarVale();
				}
			});
		}
		
	},
	detallevale_Eliminar: function(button, e, options){
		var me = this,
			records = me.detallevale_RegistrosSeleccionados(),
			store = me.getStore('store_detallevale');
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
							me.refrescarVale();
						},
						failure: function(rec, op) {
							store.rejectChanges();
							me.refrescarVale();
						}
					});
				}
			}
		});
	},


	//Venta de Vales

	ventavale_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.editValeVentaWindow) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: 'Agregando Venta del Pedido'
				});
				setLinks({
					currentVentaPedido: record || {
						type: 'GRUPOEJ.vale.model.vales.VentaVale',
						create: true
					}
				});
			}
			show();
		}
	},

	ventavale_Agregar: function(button, e, options){
		me = this;
		record = "(";
		i=0;
		j = 0;
		arr = [];
		n=0;
		cont = 0; 
		cliente = false;
		grid = me.lookupReference('valeGrilla');
		try {
			for(; i <= grid.getStore().getCount(); i++){
				idc = 0	
				if(grid.getStore().getAt(i).data['active']){
					arr[cont] = grid.getStore().getAt(i).data['clienteid'];
					cont++;
					record = record + grid.getStore().getAt(i).data['id']+",";
				}

			}
		
		} catch(err){
		  // console.log(err.message);
		}
		while(n<arr.length){
			arr[n+1]==arr[n] ? arr.splice(n,1) : n++
		}
		if(arr.length!=1){
			cliente=true;
		}

		record = record+")";
		if(record != "()" && cliente == false){
			// console.log(record);
			me.editValeVentaWindow.on("show", function(win) {
					me.lookupReference("ventaFormulariovale").getForm().findField("valesid").setValue(record);
					me.lookupReference("ventaFormulariovale").getForm().findField("tipo_documento").setValue(0);
					me.lookupReference("ventaFormulariovale").getForm().findField("numero_correlativo").setValue(0);
					me.lookupReference("ventaFormulariovale").getForm().findField("numero_documento").setValue(0);
					me.lookupReference("ventaFormulariovale").getForm().findField("credito").setValue(false);
				});
			me.ventavale_AbrirVentanaEditar(null, button);
		}
		else{
			Ext.Msg.alert('Alerta','"Ha seleccionado a ninguno o mas de dos Clientes"');
		}
	},

	valeventa_ventana_Cancelar: function(button, e, options){
		me = this;
		me.editValeVentaWindow.close();
	},

	generarPedido: function(button){
		me = this;
		record = [];
		i=0;
		grid = me.lookupReference('valeGrilla');
		try {
			for(; i <= grid.getStore().getCount(); i++){
				record = grid.getStore().getAt(i);
				store = me.getStore('store_vale');
				Ext.Msg.show({
					title:'Alerta!!',
					msg: '¿Está seguro de Generar Pedido de los Vales seleccionados?',
					buttons: Ext.Msg.YESNO,
					icon: Ext.Msg.QUESTION,
					iconCls: button.iconCls,
					fn: function (buttonId) {
						if (buttonId == 'yes') {
							store.remove(record);
							store.save({
								success: function(rec, op) {
									GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
									store.reload();
									me.refrescarVale();
								},
								failure: function(rec, op) {
									store.rejectChanges();
									me.refrescarVale();
								}
							});
						}
					}
				});
			}
		} catch(err){
		  console.log(err.message);
		}
	},

	ventavale_ventana_Guardar: function(button, e, options){
		me = this;
		form = me.lookupReference('ventaFormulariovale').getForm();
		store = me.getStore("store_ventavale");
		if (form && form.isValid()) {
			with (store) {
				if (me.editValeVentaWindow.action == "add") {
					add(
						form.getFieldValues()
					);
				}
				save({
					success: function(rec, op) {
						GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
						me.valeventa_ventana_Cancelar();
						me.getStore('store_vale').load();
						me.getStore('store_detallevale').load({
							url: 'grupoej.vale.vales.detallevales/listar/0'
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

