Ext.define('GRUPOEJ.inicio.view.login.Login',	{	
	extend:	'Ext.window.Window',
	xtype:	'wLogin',
	requires:[
		'GRUPOEJ.inicio.controller.login.Login',
	],	
	controller: 'login',						
	autoShow:	true,																			
	// height:	140,																						
	width:	360,																								
	layout:	{
		type:	'fit'	
	},
	// iconCls:	'fa	fa-key	fa-lg',							
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
				labelWidth:	60,
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
					maxLength:	15,
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
							xtype:	'tbfill'	//#25
						},
						
						{
							xtype:	'button',	//#26
							// iconCls:	'fa	fa-times	fa-lg',
							text:	'Cancelar',
							listeners:{
								click:'onButtonClickCancel',
							},
						},
						{	
							xtype:	'button',	//#27
							formBind:	true,		//#28
							// iconCls:	'fa	fa-sign-in	fa-lg',
							text:	'Guardar',
							listeners:{
								click:'onButtonClickSubmit',
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