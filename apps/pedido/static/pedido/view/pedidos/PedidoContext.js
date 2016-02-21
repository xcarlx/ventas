Ext.define('GRUPOEJ.pedido.view.pedidos.PedidoContext', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.pedidoContext',
    xtype: 'PedidoContext',
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