Ext.define('GRUPOEJ.producto.view.productos.UploadFotoProductoForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.uploadfotoproducto-formulario',
	width: 410,
	action: '',
	closeAction: 'hide',
	closable: true,
	modal: true,
	resizable: false,
	bind:{
		title: '{titulo2}',
	},
	items:[

		{
			xtype: 'form',
			reference: 'formUploadFotoProducto',
		    width: 400,
		    bodyPadding: 10,
		    frame: true,
		    renderTo: Ext.getBody(),
			layout:{
				type: 'vbox',
				align: 'stretch'
			},
			defaults: {
				// afterLabelTextTpl: GRUPOEJ.utiles.Utiles.required,
				anchor: '100%',
				xtype: 'textfield',
				msgTarget: 'side',
				labelWidth: 75,
				labelAlign: 'right',
			},
			items:[
				{
					xtype: 'numberfield',
					name: 'id',
					hidden: false,
					fieldLabel: 'Label',
					bind:{
						value: '{idproducto}'
					}
				},
				{
					xtype: 'filefield',
					name: 'imagen',
					fieldLabel: 'Imagen',
			 		msgTarget: 'side',
					allowBlank: false,
					anchor: '100%',
					buttonText: 'Select Foto...',
					readOnly: true,
					submitValue: false,
					bind:{
						value: '{currentProductoContextMenu.imagen}'
					}
				},
			],
			buttons: [{
		        text: 'Upload',
		        handler: function() {
		            var form = this.up('form').getForm();
		            if(form.isValid()){
		                form.submit({
		                    url: 'grupoej.producto.productos.producto/subirfoto/',
		                    waitMsg: 'Uploading your photo...',
		                    success: function(fp, o) {
		                        Ext.Msg.alert('Success', 'Your photo "' + o.result.file + '" has been uploaded.');
		                    }
		                });
		            }
		        }
		    }]
		}
	],
	
});