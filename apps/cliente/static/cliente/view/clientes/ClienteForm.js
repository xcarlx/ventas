Ext.define('GRUPOEJ.cliente.view.clientes.ClienteForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.cliente-form',
	width: 450,
	closeAction: 'hide',
	modal: true,
	resizable: false,
	action: "",
	height: 'auto',
	bind: {
		title: '{titulo}'
	},
	items:[
		{
			xtype: 'form',
			reference: 'formCliente',
			bodyPadding: 10,
			modelValidation: true,
			layout:{
				type: 'vbox',
				align: 'stretch'
			},
			defaults: {
				// afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
				anchor: '100%',
				xtype: 'textfield',
				msgTarget: 'side',
				labelWidth: 120,
				labelAlign: 'right',
			},
			items:[
				{
					xtype: 'numberfield',
					hidden: true,
					name: 'id',
					bind:{
						value: '{recordCliente.id}'
					},
				},
				{
					xtype: 'textfield',
					name: 'nombres',
					fieldLabel: 'Nombres',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.nombre}'
					}
				},
				{
					xtype: 'textfield',
					name: 'apellidos',
					fieldLabel: 'Apellidos',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.apellidos}'
					}
				},
				{
					xtype: 'combobox',
					name: 'tipo_documento',
					forceSelection: true,
					editable: true,
					fieldLabel: 'Tipo de Documento',
					store: [['DNI', 'DNI'], ['RUC', 'RUC']],
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.tipo_documento}'
					}
				},
				{
					xtype: 'textfield',
					name: 'nro_documento',
					fieldLabel: 'Nro del Documento',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.nro_documento}'
					}
				},
				{
					xtype: 'textfield',
					vtype:'email',
					name: 'email',
					fieldLabel: 'Correo - email',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.email}'
					}
				},
				{
					xtype: 'textfield',
					name: 'telefono',
					fieldLabel: 'Telefono',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.telefono}'
					}
				},
				{
					xtype: 'textfield',
					name: 'direccion',
					fieldLabel: 'Direccion',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.direccion}'
					}
				},
				{
					xtype: 'textfield',
					name: 'area',
					fieldLabel: 'Area',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.area}'
					}
				},
				{
					xtype: 'textfield',
					name: 'responsable',
					fieldLabel: 'Responsable',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.responsable}'
					}
				},
				{
					xtype: 'textfield',
					name: 'referencia',
					fieldLabel: 'Referencias',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.referencia}'
					}
				},
				{
					xtype: 'textfield',
					name: 'frecuencia',
					fieldLabel: 'Frecuencia',
					anchor: '100%',
					msgTarget: 'side',
					bind:{
						value: '{recordCliente.frecuencia}'
					}
				},
			],
			dockedItems:[
				{
					xtype: 'toolbar',
					dock: 'bottom',
					layout: {
						pack: 'end',
						type: 'hbox'
					},

					items:[
						{
							xtype: 'button',
							iconCls: 'icono-guardar',
							text: 'Guardar',
							formBind: true,
							listeners:{
								click: 'ClienteGuardar',
							},
						},
						{
							xtype: 'button',
							iconCls: 'icono-cancelar',
							text: 'Cancelar',
							listeners:{
								click: 'ClienteCancelar',
							},
						},

					],
				}

			]
		},
	],
	
	

});