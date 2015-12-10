Ext.define('GRUPOEJ.producto.controller.productos.Producto',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.producto',
	requires:[
		'GRUPOEJ.producto.view.productos.ProductoForm'
	],
	init: function(){
		me = this;
		if(!me.formProducto){
			me.formProducto = me.getView().add({
				xtype: 'producto-form',
				constrain: true,
				constrainTo: panelCentral.id,
				renderTo: panelCentral.id,
				viewModel:{ data: { titulo: "", }, },
			});
			me.formProducto.on("show", function(win){
				me.lookupReference("formProducto").getForm().findField("descripcion").focus();
			});
		}
	},
	Producto_Agregar: function(button, e, options){
		this.Producto_AbrirVentanaEditar(null, button);
	},
	Producto_Editar: function(button, e, options){
		var me = this,
			records = me.Producto_RegistrosSeleccionados();
			// console.log(this.lookupReference('producto-grillaproductos'));
			// console.log(records[0].getFields());
		if (records[0]) {
			me.Producto_AbrirVentanaEditar(records[0], button);
		}
	},
	Producto_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.formProducto) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (getViewModel()) {
				setData({
					titulo: record ? 'Editando ' + record.get('descripcion') : 'Agregando Módulo'
				});
				setLinks({
					currentProducto: record || {
						type: 'GRUPOEJ.producto.models.productos.Producto',
						create: true
					}
				});
			}
			show();
		}
	},
	Producto_RegistrosSeleccionados: function() {
		return this.lookupReference('producto-grillaproductos').getSelection();
	},
	Producto_Eliminar: function(button, e, options){
		var me = this,
			records = me.Producto_RegistrosSeleccionados(),
			store = me.getStore('store_producto');
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
		form = me.lookupReference('formProducto').getForm();
		store = me.getStore("store_producto");
		if (form && form.isValid()) {
			with (store) {
				if (me.formProducto.action == "add") {
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
		me.formProducto.hide();
	},
	Producto_Refrescar: function(button, e, options){
		me = this;
		me.getStore('store_producto').load();
	},

});