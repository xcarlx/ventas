Ext.define('GRUPOEJ.utiles.Utiles',	{
	statics	:	{	//#1
		decodeJSON	:	function	(text)	{	//#2
			var	result	=	Ext.JSON.decode(text,	true);
			if	(!result){
				result	=	{};
				result.success	=	false;
				result.msg	=	text;
			}
			return	result;
		},
		showErrorMsg:	function	(text)	{	//#3
			Ext.Msg.show({
				title:'Error!',
				msg:	text,
				icon:	Ext.Msg.ERROR,
				buttons:	Ext.Msg.OK
			});
		},
		showAlertMsg: function (text, decode, campo) {
			if (decode) {
				result = GRUPOEJ.utiles.Utiles.decodeJSON(text);
				text = result[campo];
			}
			Ext.Msg.show({
				title:'Alerta!',
				msg: text,
				icon: Ext.Msg.INFO,
				buttons: Ext.Msg.OK
			});
		},
		showToast: function(text, decode, campo) {
			// decode True o False
			// campo viene de DJango
			if (decode) {
				result = GRUPOEJ.utiles.Utiles.decodeJSON(text);
				text = result[campo];
			}
			Ext.toast({
				html: text,
				closable: false,
				align: 't',
				slideInDuration: 400,
				minWidth: 400
			});

		},
		handleFormFailure: function(action){
			var me = this,
			result = GRUPOEJ.utiles.Utiles.decodeJSON(action.response.responseText);
			switch (action.failureType) {
				case Ext.form.action.Action.CLIENT_INVALID:
					me.showErrorMsg('Verifique los campos');
					break;
				case Ext.form.action.Action.CONNECT_FAILURE:
					me.showErrorMsg(action.response.responseText);
					break;
				case Ext.form.action.Action.SERVER_INVALID:
					me.showErrorMsg(result["error"]);
					break;
			}
		},
		showMsgCRUD: function(rec){
			texto = GRUPOEJ.utiles.Utiles.decodeJSON(
				rec.operations[0]._response.responseText
			);
			if(texto["success"]){
				GRUPOEJ.utiles.Utiles.showToast(
					texto["success"]
				);
			}
		},

	},
});