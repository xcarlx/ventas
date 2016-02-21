Ext.define('GRUPOEJ.venta.view.ventas.ClienteForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.ventacliente-form',
	width: 500,
	closeAction: 'hide',
	modal: true,
	resizable: false,
	action: "",
	height: 'auto',
	bind: {
		title: '{titulo2}'
	},
	items:[
		{
			xtype: 'form',
			reference: 'formVentaCliente',
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
						value: '{idcliente}'
					},
				},
				{
					xtype: 'textfield',
					name: 'nombres',
					fieldLabel: 'Nombres',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{titulo2}'
					}
				},
				{
					xtype: 'textfield',
					name: 'tipo_documento',
					fieldLabel: 'Tipo de Documento',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{tipo_documento}'
					}
				},
				{
					xtype: 'textfield',
					name: 'nro_documento',
					fieldLabel: 'Nro del Documento',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{nro_documento}'
					}
				},
				{
					xtype: 'textfield',
					vtype:'email',
					name: 'email',
					fieldLabel: 'Correo - email',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{email}'
					}
				},
				{
					xtype: 'textfield',
					name: 'telefono',
					fieldLabel: 'Telefono',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{telefono}'
					}
				},
				{
					xtype: 'textfield',
					name: 'direccion',
					fieldLabel: 'Direccion',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{direccion}'
					}
				},
				{
					xtype: 'textfield',
					name: 'area',
					fieldLabel: 'Area',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{area}'
					}
				},
				{
					xtype: 'textfield',
					name: 'responsable',
					fieldLabel: 'Responsable',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{responsable}'
					}
				},
				{
					xtype: 'textfield',
					name: 'referencia',
					fieldLabel: 'Referencias',
					anchor: '100%',
					msgTarget: 'side',
					readOnly:true,
					bind:{
						value: '{referencia}'
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
							iconCls: 'icono-cancelar',
							text: 'Salir',
							listeners:{
								click: 'Salir',
							},
						},

					],
				}

			]
		},
	],
	
	

});