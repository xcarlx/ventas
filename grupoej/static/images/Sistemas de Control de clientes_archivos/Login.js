Ext.define('GRUPOEJ.inicio.controller.login.Login',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.login',
	onTextFieldSpecialKey:	function(field,	e,	options){
		if	(e.getKey()	===	e.ENTER){
			this.doLogin();
		}
	},
	onTextFieldKeyPress:	function(field,	e,	options){
		var	charCode	=	e.getCharCode(),		
			me	=	this;
		if((e.shiftKey	&&	charCode	>=	97	&&	charCode	<=	122)	||
			(!e.shiftKey	&&	charCode	>=	65	&&	charCode	<=	90)){
			if(me.capslockTooltip	===	undefined){																	//#3
				me.capslockTooltip	=	Ext.widget('capslocktooltip');
			}
			me.capslockTooltip.show();
		}else {
			if(me.capslockTooltip	!==	undefined){
				me.capslockTooltip.hide();	
			}
			if	(e.getKey()	===	e.ENTER){
				me.doLogin();
			}			
		}
	},
	onButtonClickCancel:	function(button,	e,	options){
		this.lookupReference('formLogin').reset();
	},
	onButtonClickSubmit:	function(button,	e,	options){
		var	me	=	this;
			if(me.lookupReference('formLogin').isValid()){	
				me.doLogin();													
			}
	},
	doLogin:	function()	{
		var	me = this;
		this.getView().mask('Autenticando, espere por favor');
		me.lookupReference('formLogin').submit({
			clientValidation:	true,
			url: '/login/', 
			scope: me,
			success:	'onLoginSuccess',
			failure:'onLoginFailure',
		});
	},
	onLoginFailure:	function(form,	action)	{
		this.getView().unmask();
		switch	(action.failureType)	{
			case Ext.form.action.Action.CLIENT_INVALID:
				GRUPOEJ.utiles.Utiles.showErrorMsg('EL USUARIO ES INVALIDO');
			break;
			
			case Ext.form.action.Action.CONNECT_FAILURE:
				GRUPOEJ.utiles.Utiles.showErrorMsg(action.response.responseText);
			break;
			case Ext.form.action.Action.SERVER_INVALID:
				result = GRUPOEJ.utiles.Utiles.decodeJSON(action.response.responseText);
				GRUPOEJ.utiles.Utiles.showErrorMsg(result.msg);
		}
	},
	onLoginSuccess:	function(form,	action)	{
		this.getView().unmask();
		this.getView().close();
		result = GRUPOEJ.utiles.Utiles.decodeJSON(action.response.responseText);
		loginid = result.id;
		loginame = result.username;
		loginsu = result.su;
		Ext.create('GRUPOEJ.inicio.view.principal.Principal');
	},
});