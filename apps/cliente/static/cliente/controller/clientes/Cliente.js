Ext.define('GRUPOEJ.cliente.controller.clientes.Cliente',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.cliente',
	requires:[
		'GRUPOEJ.cliente.view.clientes.ClienteForm'
	],
	init: function(){
		me = this;
		if(!me.formCliente){
			me.formCliente = me.getView().add({
				xtype: 'cliente-form',
				constrain: true,
				constrainTo: panelCentral.id,
				renderTo: panelCentral.id,
				// renderTo: Ext.getBody()
				viewModel:{
					data: {
						titulo: ""
					}
				}
			}); // focus al campo del formulario
			me.formCliente.on("show", function(win){
				me.lookupReference("formCliente").getForm().findField("nombres").focus();
			});
		}
	},
	ClienteSeleccionados:function(){
		me = this;
		return me.lookupReference("cliente-grillaclientes").getSelection();

	},
	ClienteRefrescar: function(){
		this.getStore("store_clientes").load();
	},
	ClientesEliminar: function(){
		me = this;

		Ext.Msg.show({
			title: 'Alert!!',
			msg:'¿Esta Seguro de Eliminar este registro?',
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			fn: function(button){
				if(button=='yes'){
					me.getStore("store_clientes").remove(me.ClienteSeleccionados());
					me.getStore("store_clientes").save({
						success: function(rec, op){
							if(!GRUPOEJ.utiles.Utiles.showMsgCRUD(rec)){
								me.getStore("store_clientes").load();
							}
						},
						failure: function(rec, op){
							me.getStore("store_clientes").rejectChanges();
						}
					});
				}
			}
		});

	},
	ClientesAgregar: function(){
		me = this;
		with (me.formCliente){
			with(getViewModel()){
				action = 'add';
				setData({
					titulo: "Agregando Cliente"
				});
				setLinks({ 
					recordCliente:{
						type: 'GRUPOEJ.cliente.model.clientes.Cliente',
						create: true
					}
				});
			}
			show();
		}
	},
	ClientesEditar: function(){
		me = this;
		with (me.formCliente){
			action = 'edit';
			with(getViewModel()){
				setData({
					titulo: "Editando Cliente"
				});
				setLinks({
					recordCliente: me.ClienteSeleccionados()[0]
					
				});
			}
			show();
		}
	},
	ClienteCancelar: function(){
		me.formCliente.close();
	},
	ClienteGuardar: function(){
		me = this;
		form = me.lookupReference("formCliente").getForm();
		if(form && form.isValid){
			with(me.getStore("store_clientes")){
				if(me.formCliente.action == "add"){
					add(
						form.getFieldValues()
					);
				}
				else{
					idRec = form.findField("id").getValue();
					registro = getById(idRec);
					newdata = form.getFieldValues();
					campos = form.getFields();
					for(i=0; i<campos.length;i++){
						campo = campos.items[i].name;
						if(campo != "id"){
							registro.set(campo, eval("newdata."+campo));
						}
					}
				}
				save({
					success: function(rec, op){
						GRUPOEJ.utiles.Utiles.showMsgCRUD(rec);
						me.getStore("store_clientes").reload();
						me.ClienteCancelar();

					},
					failure: function(rec, op){
						me.getStore("store_clientes").rejectChanges();
					}
				});
			}
		}
	},

});