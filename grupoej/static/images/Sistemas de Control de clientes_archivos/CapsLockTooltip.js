Ext.define('GRUPOEJ.utiles.CapsLockTooltip',	{
	extend:	'Ext.tip.QuickTip',
	xtype:	'capslocktooltip',
	target:	'password',
	anchor:	'top',
	anchorOffset:	0,
	width:	300,
	dismissDelay:	0,
	autoHide:	false,
	title:	'<div	class="fa	fa-exclamation-triangle">	Bloq Mayus encendido </div>',
	html:'<div>esta usted escribiendo con mayusculas en el password	'	+
		'your	password	incorrectly.</div><br/>'	+
		'<div>La mayuscula está habilitado</div>'
});