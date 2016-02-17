Ext.define('GRUPOEJ.inicio.controller.reportes.ReporteProducto',	{	
	extend:	'Ext.app.ViewController',			
	alias:	'controller.reporteproducto', 

	Flitrar: function(){
		var me = this;
		if(me.lookupReference("vreporteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteFechaFin").getValue() != null && 
			me.lookupReference("comboreporteproducto").getValue != null){
				me.getStore('store_reporteproductogrilla').load({
				params: {
					idproducto: me.lookupReference("comboreporteproducto").getValue(),
					finicio: me.lookupReference("vreporteFechaInicio").getValue(),
					ffin: me.lookupReference("vreporteFechaFin").getValue(),
				}
				
			});
			me.lookupReference("totalreporteprecio").setText(0);
		    me.lookupReference("totalreportecantidad").setText(0);
		}

		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},
	MostrarTotal: function(){
		me = this;
		try {
		   	var record = me.getStore('store_reporteproductogrilla').first();
   			me.lookupReference("totalreportecantidad").setText(" CANTIDAD - TOTAL: "+record.get("totalcantidad")+" ");
   			me.lookupReference("totalreporteprecio").setText(" PRECIO - TOTAL : "+record.get("totalprecio")+" S/");
		}
		catch(err) {
		    Ext.Msg.alert('Error','No hay ningun registro');
		    me.lookupReference("totalreporteprecio").setText(0);
		    me.lookupReference("totalreportecantidad").setText(0);
		}
	},
	Limpiar: function(){
		var me = this;
		if(me.lookupReference("vreporteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteFechaFin").getValue() != null && 
			me.lookupReference("comboreporteproducto").getValue != null){
				me.getStore('store_reporteproductogrilla').load();
				me.lookupReference("comboreporteproducto").setValue(null);
				me.lookupReference("vreporteFechaInicio").setValue(null);
				me.lookupReference("vreporteFechaFin").setValue(null);
				me.MostrarTotal();
		}
		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
			me.MostrarTotal();
		}
		
	},

	ClienteFlitrar: function(){
		var me = this;
		if(me.lookupReference("vreporteclienteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteclienteFechaFin").getValue() != null && 
			me.lookupReference("comboreportecliente").getValue != null){
				me.getStore('store_reporteclientegrilla').load({
				params: {
					idcliente: me.lookupReference("comboreportecliente").getValue(),
					finicio: me.lookupReference("vreporteclienteFechaInicio").getValue(),
					ffin: me.lookupReference("vreporteclienteFechaFin").getValue(),
				}
				
			});
			me.lookupReference("totalreporteclienteprecio").setText(0);
		    me.lookupReference("totalreporteclientecantidad").setText(0);
		}

		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
		}
		
	},
	ClienteMostrarTotal: function(){
		me = this;
		try {
		   	var record = me.getStore('store_reporteclientegrilla').first();
   			me.lookupReference("totalreporteclientecantidad").setText(" CANTIDAD - TOTAL: "+record.get("totalcantidad")+" ");
   			me.lookupReference("totalreporteclienteprecio").setText(" PRECIO - TOTAL : "+record.get("totalprecio")+" S/");
		}
		catch(err) {
		    Ext.Msg.alert('Error','No hay ningun registro');
		    me.lookupReference("totalreporteclienteprecio").setText(0);
		    me.lookupReference("totalreporteclientecantidad").setText(0);
		}
	},
	ClienteLimpiar: function(){
		var me = this;
		if(me.lookupReference("vreporteclienteFechaInicio").getValue() != null && 
			me.lookupReference("vreporteclienteFechaFin").getValue() != null && 
			me.lookupReference("comboreportecliente").getValue != null){
				me.getStore('store_reporteclientegrilla').load();
				me.lookupReference("comboreportecliente").setValue(null);
				me.lookupReference("vreporteclienteFechaInicio").setValue(null);
				me.lookupReference("vreporteclienteFechaFin").setValue(null);
				me.MostrarTotal();
		}
		else{
			Ext.Msg.alert('Error','No ha seleccionado las Fechas');
			me.MostrarTotal();
		}
		
	},
	ImprimirProducto: function() {
		me = this;
    	//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSeelctionModel().getSelection()[0].id);
    	window.open('grupoej.inicio.reportes.reporteproducto/imprimir/'
			+ me.lookupReference("comboreporteproducto").getValue()+"/"
			+ new Date(me.lookupReference("vreporteFechaInicio").getValue()).getTime()+"/"
			+ new Date(me.lookupReference("vreporteFechaFin").getValue()).getTime()+"/",'_blank');
	},
	ImprimirAllProducto: function() {
		me = this;
    	//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id);
    	window.open('grupoej.inicio.reportes.reporteproducto/imprimir/'
			+ new Date(me.lookupReference("vreporteFechaInicio").getValue()).getTime()+"/"
			+ new Date(me.lookupReference("vreporteFechaFin").getValue()).getTime()+"/",'_blank');
	},
	ImprimirCliente: function() {
		me = this;
    	//TODO: It opens the document in a new tab, but not force the 
		// console.log(me.lookupReference('ventagrilla').getSelectionModel().getSelection()[0].id);
    	window.open('grupoej.inicio.reportes.reportecliente/imprimir/'
			+ me.lookupReference("comboreportecliente").getValue()+"/"
			+ new Date(me.lookupReference("vreporteclienteFechaInicio").getValue()).getTime()+"/"
			+ new Date(me.lookupReference("vreporteclienteFechaFin").getValue()).getTime()+"/",'_blank');
	}

});