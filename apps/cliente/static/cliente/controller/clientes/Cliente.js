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
	ClienteDuplicar: function(){
		me = this;
		with (me.formCliente){
			action = 'Duplicar';
			with(getViewModel()){
				setData({
					titulo: "Duplicar Cliente"
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
				else if(me.formCliente.action == "edit"){
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
				}else if(me.formCliente.action == "Duplicar"){
					nombre = form.findField("nombres").getValue();
					apellidos = form.findField("apellidos").getValue();
					tipo_documento = form.findField("tipo_documento").getValue();
					nro_documento = form.findField("nro_documento").getValue();
					email = form.findField("email").getValue();
					telefono = form.findField("telefono").getValue();
					direccion = form.findField("direccion").getValue();
					area = form.findField("area").getValue();
					responsable = form.findField("responsable").getValue();
					referencia = form.findField("referencia").getValue();
					frecuencia = form.findField("frecuencia").getValue();
					zona_sector = form.findField("zona_sector").getValue();
				
					me.getStore("store_clientes").load(
						{
							url:'grupoej.cliente.clientes.cliente/duplicar',
							actionMethods: {
					       		read: 'POST'
					    	},
							params:
								{
									nombres: nombre,
									apellidos: apellidos,
									tipo_documento: tipo_documento,
									nro_documento: nro_documento,
									email: email,
									telefono: telefono,
									direccion: direccion,
									area: area,
									responsable: responsable,
									referencia: referencia,
									frecuencia: frecuencia,
									zona_sector: zona_sector,
								}
						});
					this.ClienteCancelar();
					this.getStore("store_clientes").load({
						callback: function(options, success, response, records) {
							if (success) {
								Ext.Msg.alert('Cliente', 'Agregado Correctamente');
								me.ClienteRefrescar();
							}
						}
					});

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