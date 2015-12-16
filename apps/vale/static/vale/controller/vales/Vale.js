Ext.define('GRUPOEJ.vale.controller.vales.Vale', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.vale',
	requires: [
		'GRUPOEJ.vale.view.vales.ValeFormulario',
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
		me.editValeWindow.hide();
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
				},
				failure: function(rec, op) {
					store.rejectChanges();
				}
			});
		}
		
	},

});

