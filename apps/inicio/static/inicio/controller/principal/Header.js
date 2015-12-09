Ext.define('GRUPOEJ.inicio.controller.principal.Header',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.Header',
	onLogout: function(button, e, options){
		var me = this;
		Ext.Msg.confirm(
			"Alerta!!",
			"¿Desea cerrar la Sesión?",
			function(button) {
				if (button == 'yes') {
					Ext.getBody().mask('Cerrando Sesión', 'closing-app');
					Ext.Ajax.request({
						url: '/inicio/logout/',
						scope: me,
						success: 'onLogoutSuccess',
						failure: 'onLogoutFailure'
					});
				}
			}
		);
	},
	onLogoutFailure: function(conn, response, options, eOpts) {
		Ext.getBody().unmask();
		GRUPOEJ.utiles.Utiles.showErrorMsg(conn.responseText);
	},
	onLogoutSuccess: function(conn, response, options, eOpts){
		var result = GRUPOEJ.utiles.Utiles.decodeJSON(conn.responseText);
		if (result.success) {
			this.getView().destroy();
			window.location.reload();
		}
		else {
			Ext.getBody().unmask();
			GRUPOEJ.utiles.Utiles.showErrorMsg(result.msg);
		}
	}
});