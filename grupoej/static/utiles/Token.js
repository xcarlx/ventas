Ext.define('GRUPOEJ.utiles.Token', {
	singleton: true,

	constructor: function() {
		Ext.Ajax.on('beforerequest', function (conn, options) {
			if (!(/^http:.*/.test(options.url) || /^https:.*/.test(options.url))) {
				if (typeof(options.headers) == "undefined") {
					options.headers = {
						'Application': 'application/json',
						'X-CSRFToken': Ext.util.Cookies.get('csrftoken')
					};
				} else {
					options.headers['Application'] = 'application/json';
					options.headers['X-CSRFToken'] = Ext.util.Cookies.get('csrftoken');
				}
			}
		}, this);
	}
});