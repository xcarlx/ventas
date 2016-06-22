Ext.define('GRUPOEJ.inicio.view.pedidosvencidos.PedidoVencidoContext', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.pedidoVencidoContext',
    xtype: 'PedidoVencidoContext',
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