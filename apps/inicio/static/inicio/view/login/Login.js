Ext.define('GRUPOEJ.inicio.view.login.Login',	{	
	extend:	'Ext.window.Window',
	xtype:	'wLogin',
	requires:[
		'GRUPOEJ.inicio.controller.login.Login',
	],	
	controller: 'login',						
	autoShow:	true,																			
	// height:	140,																						
	width:	400,																								
	layout:	{
		type:	'fit'	
	},
	iconCls: 'icono-llave',					
	title:	'Inicio de seccion',																				
	closeAction:	'hide',														
	closable:	false,																		
	draggable:	false,																	
	resizable:	false,

	items:	
	[
		{
			xtype:	'form',	
			bodyPadding: 15,
			reference: 'formLogin',								
			defaults:	
			{													
				xtype:	'textfield',
				anchor:	'100%',
				labelWidth:	75,
				allowBlank:	false,
				vtype:	'alphanum',
				minLength:	3,
				msgTarget:	'side',
				listeners:	{
					specialKey:	'onTextFieldSpecialKey',
				},
			},
			items:	
			[
				{
					name:	'user',
					fieldLabel:	'Ususario',
					maxLength:	25,
				},
				{
					inputType:	'password',
					name:	'password',
					fieldLabel:	'Contraseña',
					enableKeyEvents: true,
					maxLength:	25,
					id:	'password',
					listeners:	{
						keypress:	'onTextFieldKeyPress'
					},
				},
			],
			dockedItems:	
			[
				{
					xtype:	'toolbar',
					dock:	'bottom',
					items:	[
						{
							xtype:	'tbfill'
						},
						{	
							xtype:	'button',
							formBind:	true,
							text:	'Ingresar',
							iconCls: 'icono-marcar',
							listeners:{
								click:'onButtonClickSubmit',
							},
						},
						{
							xtype:	'button',
							text:	'Cancelar',
							style: {
								background: '#FF5566'
							},
							listeners:{
								click:'onButtonClickCancel',
							},
						},
					]
				}
			]
		},

	],
	listeners: {
		afterrender: function(){
			this.lookupReference("formLogin").getForm().findField("user").focus();
		},
	},
	
});