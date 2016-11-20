Ext.define('GRUPOEJ.inicio.view.pedidospendientes.PedidoPendienteContext', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.pedidoPendienteContext',
    xtype: 'PedidoPendienteContext',
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