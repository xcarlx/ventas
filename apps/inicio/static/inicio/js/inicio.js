Ext.application({
	name: 'GRUPOEJ',
	appFolder: '/static',
	// extend: 'VENTAS.application',
	autoCreateViewport: false,
	requires:[
		'GRUPOEJ.utiles.Token',
		'GRUPOEJ.inicio.view.login.Login',
		'GRUPOEJ.utiles.Utiles',
		'GRUPOEJ.utiles.CapsLockTooltip',
		'GRUPOEJ.inicio.controller.menu.Menu',
		'GRUPOEJ.utiles.SearchTrigger',
		'GRUPOEJ.inicio.view.principal.Principal'
	],
	controllers:[
		'GRUPOEJ.inicio.controller.menu.Menu',	
	],
	init: function(){

		var meApp = this;

		Ext.override(Ext.dd.DragDropManager, {
			handleMouseDown: function (e, oDD) {
				var me = this,
				xy, el;
				me.isMouseDown = true;
				//if (Ext.quickTipsActive) {
				// Ext.tip.QuickTipManager.ddDisable();
				//}
				me.currentPoint = e.getPoint();
				
				if (me.dragCurrent) {
					me.handleMouseUp(e);
				}
				me.mousedownEvent = e;
				me.currentTarget = e.getTarget();
				me.dragCurrent = oDD;
				el = oDD.getEl();

				Ext.fly(el).setCapture();


				xy = e.getXY();
				me.startX = xy[0];
				me.startY = xy[0];


				me.offsetX = me.offsetY = 0;
				me.deltaX = me.startX - el.offsetLeft;
				me.deltaY = me.startY - el.offsetTop;
				me.dragThreshMet = false;
			}
		});
		meApp.splashscreen = Ext.getBody().mask(
				'Cargando Aplicacion', 'loading-app'
		);
	},
	launch: function(){
		Ext.tip.QuickTipManager.init();
		var meApp = this;
		var task = new Ext.util.DelayedTask(function(){
			meApp.splashscreen.fadeOut({
				duration: 1000,
				remove: true,
			});
			meApp.splashscreen.next().fadeOut({
				duration: 1000,
				remove: true,
				listeners:{
					afteranimate: function(el, startTime, eOpts){
						if(loginid){
							Ext.create('GRUPOEJ.inicio.view.principal.Principal');
						}
						else{
							Ext.widget('wLogin');
						}
						
					}
				}
			});
		});
		task.delay(800);
	}
});