Ext.define('GRUPOEJ.inicio.store.menu.Menu',	{
	extend:	'Ext.data.Store',
	// requires:	[
	// 	'Packt.util.Util'	//#1
	// ],
	model:	'GRUPOEJ.inicio.model.menu.Accordion',	//#2
	proxy:	{
		type:	'ajax',													//#3
		url:	'/menus/',	//#4
		reader:	{	//#5
			type:	'json',
			rootProperty:	'data'
		},
		listeners:	{
			exception:	function(proxy,	response,	operation){	//#6
					GRUPOEJ.utiles.Utiles.showErrorMsg(response.responseText);
			}
		}
	}
})