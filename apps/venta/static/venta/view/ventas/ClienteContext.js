Ext.define('GRUPOEJ.venta.view.ventas.ClienteContext', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.clienteContext',
    xtype: 'ClienteContext',
    items: [
        {
            xtype: 'menuitem',
            action: 'add',
            bind: {
                text: 'Ver Datos Personales "<b>{descripcion}</b>"'
            },
            iconCls: 'icono-agregar'
        },
        // {
        //     xtype: 'menuitem',
        //     // action: 'edit',
        //     bind: {
        //         text: 'Imprimir',
        //         visible: '{!esraiz}'
        //     },
        //     // iconCls: 'icono-editar'
        // },
    ],
});