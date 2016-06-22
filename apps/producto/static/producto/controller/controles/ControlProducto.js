Ext.define('GRUPOEJ.producto.controller.controles.ControlProducto',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.controlproducto',
	requires:[
		'GRUPOEJ.producto.view.controles.PrestamoForm', 
	],
	init: function(){
		me = this;
		if(!me.formPrestamo){
			me.formPrestamo = me.getView().add({
				xtype: 'prestamo-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
			});
			// me.formPrestamo.on("show", function(win){
			// 	me.lookupReference("formPrestamo").getForm().findField("producto").focus();
			// });
		}
		me.getStore("store_controlarproducto").on("beforeload", function(pstore){
			pstore.getProxy().setExtraParams({
				clienteid: me.lookupReference("clientecombo").getValue(),
				productoid: me.lookupReference("comboproductosprestamo").getValue(),
			});
		});
	},
	ClienteSelect: function(combo, record, eOpts){
		me = this;
		me.getStore("store_controlarproducto").load();
		me.getStore('store_comboproductoprestamo').load();

	},

	Prestamo_Agregar: function(button, e, options){
		this.Prestamo_AbrirVentanaEditar(null, button);
	},
	Prestamo_Editar: function(button, e, options){
		var me = this,
			records = me.Prestamo_RegistrosSeleccionados();
		if (records[0]) {
			me.Prestamo_AbrirVentanaEditar(records[0], button);
			// console.log(records[0]);
		}
	},
	Prestamo_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.formPrestamo) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (me.getViewModel()) {
				setData({
					titulo: record ? 'Editando ' + record.get('producto__descripcion') : 'Agregando Prestamos'
				});
				setLinks({
					currentPrestamo: record || {
						type: 'GRUPOEJ.producto.models.controles.ControlProducto',
						create: true
					}
				});
			}
			show();
		}
	},
	Prestamo_RegistrosSeleccionados: function() {
		return this.lookupReference('referenceprestamogrilla').getSelection();
	},

	Prestamo_Eliminar: function(button, e, options){
		var me = this,
			records = me.Prestamo_RegistrosSeleccionados(),
			store = me.getStore('store_controlarproducto');
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
		form = me.lookupReference('formPrestamo').getForm();
		store = me.getStore("store_controlarproducto");
		if (form && form.isValid()) {
			with (store) {
				if (me.formPrestamo.action == "add") {
					add(
						form.getFieldValues()
					);
				}
				else {
					idRec = form.findField("id").getValue();
					registro = getById(idRec);
					newdata = form.getFieldValues();
					campos = form.getFields();
					// console.log(registro.set(campos));
					for (i=0; i<campos.length; i++) {
						campo = campos.items[i].name;
						if (campo != "id") {
							// console.log(registro.set(campo, eval("newdata."+campo)));
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
		me.formPrestamo.hide();
	},
	Prestamo_Refrescar: function(button, e, options){
		me = this;
		me.getStore('store_controlarproducto').load();
	},

});