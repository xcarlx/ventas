Ext.define('GRUPOEJ.producto.controller.productos.Producto',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.producto',
	requires:[
		'GRUPOEJ.producto.view.productos.ProductoForm',
		'GRUPOEJ.producto.view.productos.UploadFotoProductoForm', 
		'GRUPOEJ.producto.view.productos.ProductoContext',
	],
	init: function(){
		me = this;
		if(!me.formProducto){
			me.formProducto = me.getView().add({
				xtype: 'producto-formulario',
				constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,		
				viewModel: { data: { titulo: "", }, },
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
		if (records[0]) {
			me.Producto_AbrirVentanaEditar(records[0], button);
			// console.log(records[0]);
		}
	},
	Producto_AbrirVentanaEditar: function(record, button) {
		var me = this;
		with (me.formProducto) {
			setIconCls(button.iconCls);
			action = !record ? "add" : "edit";
			with (me.getViewModel()) {
				setData({
					titulo: record ? 'Editando ' + record.get('descripcion') : 'Agregando Producto'
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
		return this.lookupReference('referenceproductogrilla').getSelection();
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
		me.formProducto.hide();
	},	
	ventana_Cancelar2: function(button, e, options){
		me = this;
		me.editWindowUploadFotoProducto.hide();
		me.getStore('store_producto').load();
	},
	Producto_Refrescar: function(button, e, options){
		me = this;
		me.getStore('store_producto').load();
	},

	uploadfotoproducto_editWindowShow: function(accion, registro) {
		me = this;
		if (!me.editWindowUploadFotoProducto) {
			me.editWindowUploadFotoProducto = me.getView().add({
            	xtype: 'uploadfotoproducto-formulario',
            	viewModel: {
	        		data: {
	        			titulo2: '',
	        		},
	        	},
	        	constrain: true,
				renderTo: panelCentral.id,
				constrainTo: panelCentral.id,
            });
   //          me.editWindowPlan.on("show", function(win) {
			// 	me.lookupReference("formUploadFotoProducto").getForm().findField("tipoplan_id").focus();
			// });
		}
		with (me.editWindowUploadFotoProducto) {
			action = accion;
			with (getViewModel()) {
				setData({
					titulo2: registro.get("descripcion"),
					idproducto: registro.get("id"),
				});
				setLinks({
					currentProductoContextMenu: accion == "add" ?
						{
							type: 'GRUPOEJ.producto.models.productos.Producto',
							create: true,
						} :
						registro
				});
			}
			show();
		}
	},



	productos_ContextMenu: function(view, record, element, index, evtObj) {
		me = this;
		evtObj.stopEvent();
        me.currentProductoContextMenu = record;
        currentProductoContextMenu = Ext.widget('treeProductoContext', {
        	viewModel: {
        		data: {
        			descripcion: record.get("descripcion"),
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
	handler: function() {
		me = this;
        var formupload = me.lookupReference('formUploadFotoProducto').getForm();
        store = me.getStore("store_producto");
        if(formupload.isValid()){
            formupload.submit({
                url: 'grupoej.producto.productos.producto/subirfoto/',
                waitMsg: 'Uploading your photo...',
                success: function(fp, o) {
                    Ext.Msg.alert('Success', 'Tu foto se ha subido correctamente.');
                    me.editWindowUploadFotoProducto.hide();
					me.getStore('store_producto').load();
                }
     // 				success: function(rec, op) {
					// 	GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
					// 	store.reload();
					// 	me.editWindowUploadFotoProducto.hide();
					// },
					// failure: function(rec, op) {
					// 	store.rejectChanges();
					// }
            });
        }
    }

});