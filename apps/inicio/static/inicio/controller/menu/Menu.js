Ext.define('GRUPOEJ.inicio.controller.menu.Menu',	{
	extend:	'Ext.app.Controller',
	// alias: 'controller.Menu',
	stores:	[
		'GRUPOEJ.inicio.store.menu.Menu',
	],
	refs:[
		{
			ref: 'mainPanel',
			selector: 'mainpanel'
		}
	],
	init:	function(application)	{
		this.control({
			"menutree":	{
				itemclick:	this.onTreePanelItemClick
			},
			"mainmenu":	{
				render:	this.renderDynamicMenu
			}
		});
	},
	renderDynamicMenu:	function(view,	options)	{
		var	dynamicMenus	=	[];
		view.body.mask('Loading	Menus...	Please	wait...');
		this.getGRUPOEJInicioStoreMenuMenuStore().load(function(records,	op,	success){
			Ext.each(records,	function(root){	
				var	menu = Ext.create('GRUPOEJ.inicio.view.menu.Tree',{	
					title: root.get('text'),					
					iconCls: root.get('iconCls')								
				});
				var	treeNodeStore	=	root.items(),			
					nodes	=	[],
					item;
				for	(var	i=0;	i<treeNodeStore.getCount();	i++){
					item	=	treeNodeStore.getAt(i);													
					nodes.push({			
						text:	item.get('text'),
						leaf:	true,				
						glyph:	item.get('iconCls'),	
						id:	item.get('id'),
						control: item.get('control'),
						className:	item.get('className')
					});
				}
				menu.getRootNode().appendChild(nodes);
				dynamicMenus.push(menu);	
			});
			view.add(dynamicMenus);	
			view.body.unmask();	
		});
	},
	onTreePanelItemClick:	function(view,	record,	item,	index,	event,	options){	
		me = this;
		if(!panelCentral) panelCentral = this.getMainPanel();
		panelCentral.setHtml("");
		panelCentral.setTitle(record.get("text"));
		if(me.currentControl) me.currentControl = Ext.destroy(me.currentControl);
		me.currentControl = panelCentral.add(
			Ext.create("GRUPOEJ."+record.get("control"))
		);

	},
});